<?php

namespace App\Http\Controllers;

use App\Models\AuditLog;
use App\Models\Booking;
use App\Models\Coupon;
use App\Models\Membership;
use App\Models\MembershipPlan;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Service;
use App\Services\Payment\PaymentManager;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function __construct(protected PaymentManager $paymentManager) {}

    /**
     * Purchase / Renew Membership Plan.
     */
    public function purchaseMembership(Request $request, MembershipPlan $plan): RedirectResponse
    {
        $user = $request->user();
        $paymentMethod = $request->input('payment_method', 'online'); // 'online' or 'offline_pos' / 'offline_cash'

        $amount = $plan->price;

        // Apply VIP discount if applicable (e.g., 10%)
        if ($user->isVip()) {
            $amount = (int) round($amount * 0.9);
        }

        // Apply coupon if provided
        if ($couponCode = $request->input('coupon')) {
            $coupon = Coupon::where('code', $couponCode)->first();
            if ($coupon) {
                $calc = $coupon->calculateDiscount($amount, 'membership');
                if ($calc['valid']) {
                    $amount = max(0, $amount - $calc['discount']);
                    $coupon->increment('used_count');
                }
            }
        }

        return DB::transaction(function () use ($user, $plan, $amount, $paymentMethod) {
            $payment = Payment::create([
                'payable_type' => MembershipPlan::class,
                'payable_id' => $plan->id,
                'user_id' => $user->id,
                'gateway' => $paymentMethod === 'online' ? 'sandbox' : 'offline',
                'method' => $paymentMethod,
                'amount' => $amount,
                'status' => 'pending',
            ]);

            if ($paymentMethod === 'online') {
                $callbackUrl = route('payment.callback', ['payment' => $payment->id]);
                $gatewayResponse = $this->paymentManager->request($payment, $callbackUrl);

                if ($gatewayResponse['success']) {
                    return redirect($gatewayResponse['url']);
                }

                return back()->withErrors(['payment' => 'خطا در اتصال به درگاه پرداخت: '.($gatewayResponse['message'] ?? '')]);
            }

            // Offline payment flow: activate membership with note or pending
            $startsAt = now();
            $endsAt = now()->addDays($plan->duration_days);

            // If user has existing active membership, extend from existing ends_at
            if ($user->activeMembership && $user->activeMembership->ends_at->isFuture()) {
                $startsAt = $user->activeMembership->ends_at;
                $endsAt = (clone $startsAt)->addDays($plan->duration_days);
            }

            Membership::create([
                'member_id' => $user->id,
                'plan_id' => $plan->id,
                'starts_at' => $startsAt,
                'ends_at' => $endsAt,
                'status' => 'active',
                'paid_amount' => $amount,
            ]);

            $payment->update([
                'status' => 'paid',
                'paid_at' => now(),
                'tracking_code' => 'OFFLINE-'.random_int(100000, 999999),
            ]);

            AuditLog::record(action: "خرید حضوری/آفلاین اشتراک {$plan->title}", subject: $payment);

            return redirect()->route('panel.member.membership')->with('success', 'اشتراک شما با موفقیت ثبت و فعال شد.');
        });
    }

    /**
     * Checkout Cart (Shop or Buffet).
     */
    public function checkoutCart(Request $request): RedirectResponse
    {
        $user = $request->user();
        $validated = $request->validate([
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.qty' => 'required|integer|min:1',
            'scope' => 'required|in:shop,buffet',
            'payment_method' => 'required|in:online,pos,cash,card_transfer',
            'delivery_type' => 'required|in:dine_in,pickup,delivery',
            'shipping_address' => 'nullable|string|max:500',
            'shipping_mobile' => 'nullable|string|max:20',
            'note' => 'nullable|string|max:500',
            'coupon' => 'nullable|string',
        ]);

        return DB::transaction(function () use ($user, $validated, $request) {
            $subtotal = 0;
            $itemsData = [];

            foreach ($validated['items'] as $item) {
                $product = Product::lockForUpdate()->find($item['product_id']);

                if ($product->stock < $item['qty']) {
                    return back()->withErrors(['cart' => "موجودی کالای «{$product->title}» کافی نیست."]);
                }

                $price = $product->effective_price;
                $subtotal += $price * $item['qty'];

                $itemsData[] = [
                    'product' => $product,
                    'price' => $price,
                    'qty' => $item['qty'],
                ];
            }

            $discount = 0;

            // VIP discount for buffet / shop
            if ($user->isVip()) {
                $discount += (int) round($subtotal * 0.15); // 15% VIP discount
            }

            // Coupon
            if (! empty($validated['coupon'])) {
                $coupon = Coupon::where('code', $validated['coupon'])->first();
                if ($coupon) {
                    $calc = $coupon->calculateDiscount($subtotal, $validated['scope']);
                    if ($calc['valid']) {
                        $discount += $calc['discount'];
                        $coupon->increment('used_count');
                    }
                }
            }

            $total = max(0, $subtotal - $discount);

            $order = Order::create([
                'order_no' => Order::generateOrderNo($validated['scope'] === 'buffet' ? 'BUF' : 'SHP'),
                'customer_id' => $user->id,
                'scope' => $validated['scope'],
                'status' => 'new',
                'subtotal' => $subtotal,
                'discount' => $discount,
                'total' => $total,
                'payment_status' => 'pending',
                'payment_method' => $validated['payment_method'],
                'delivery_type' => $validated['delivery_type'],
                'shipping_address' => $validated['shipping_address'] ?? null,
                'shipping_mobile' => $validated['shipping_mobile'] ?? $user->mobile,
                'note' => $validated['note'] ?? null,
            ]);

            foreach ($itemsData as $data) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $data['product']->id,
                    'title_snapshot' => $data['product']->title,
                    'price_snapshot' => $data['price'],
                    'qty' => $data['qty'],
                ]);

                // Decrement stock
                $data['product']->decrement('stock', $data['qty']);
            }

            // Create Payment
            $payment = Payment::create([
                'payable_type' => Order::class,
                'payable_id' => $order->id,
                'user_id' => $user->id,
                'gateway' => $validated['payment_method'] === 'online' ? 'sandbox' : 'offline',
                'method' => $validated['payment_method'],
                'amount' => $total,
                'status' => 'pending',
            ]);

            // Clear session cart
            $request->session()->forget('cart');

            if ($validated['payment_method'] === 'online') {
                $callbackUrl = route('payment.callback', ['payment' => $payment->id]);
                $gatewayResponse = $this->paymentManager->request($payment, $callbackUrl);

                if ($gatewayResponse['success']) {
                    return redirect($gatewayResponse['url']);
                }

                return back()->withErrors(['payment' => 'خطا در اتصال به درگاه: '.($gatewayResponse['message'] ?? '')]);
            }

            // Offline order
            $order->update([
                'payment_status' => 'paid',
                'status' => 'preparing',
            ]);
            $payment->update([
                'status' => 'paid',
                'paid_at' => now(),
                'tracking_code' => 'ORD-'.random_int(100000, 999999),
            ]);

            AuditLog::record(action: "ثبت سفارش حضوری/آفلاین {$order->order_no}", subject: $order);

            return redirect()->route('panel.member.orders')->with('success', 'سفارش شما با موفقیت ثبت شد و در حال آماده‌سازی است.');
        });
    }

    /**
     * Book a Service with Overlap Prevention.
     */
    public function bookService(Request $request, Service $service): RedirectResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'provider_id' => 'required|exists:users,id',
            'starts_at' => 'required|date|after:now',
            'note' => 'nullable|string|max:500',
            'payment_method' => 'required|in:online,offline',
        ]);

        $startsAt = Carbon::parse($validated['starts_at']);
        $endsAt = (clone $startsAt)->addMinutes($service->duration_min);

        // AC: جلوگیری از رزرو همزمان (Overlap) برای یک ارائه‌دهنده
        $hasOverlap = Booking::where('provider_id', $validated['provider_id'])
            ->whereNotIn('status', ['cancelled', 'no_show'])
            ->where(function ($query) use ($startsAt, $endsAt) {
                $query->whereBetween('starts_at', [$startsAt, $endsAt])
                    ->orWhereBetween('ends_at', [$startsAt, $endsAt])
                    ->orWhere(function ($q) use ($startsAt, $endsAt) {
                        $q->where('starts_at', '<=', $startsAt)
                            ->where('ends_at', '>=', $endsAt);
                    });
            })
            ->exists();

        if ($hasOverlap) {
            return back()->withErrors(['starts_at' => 'متاسفانه ارائه‌دهنده انتخابی در این بازه زمانی نوبت رزرو شده دارد. لطفاً ساعت دیگری را انتخاب فرمایید.']);
        }

        $price = $service->price;
        if ($user->isVip()) {
            $price = (int) round($price * 0.85); // 15% VIP discount
        }

        return DB::transaction(function () use ($user, $service, $validated, $startsAt, $endsAt, $price) {
            $booking = Booking::create([
                'member_id' => $user->id,
                'service_id' => $service->id,
                'provider_id' => $validated['provider_id'],
                'starts_at' => $startsAt,
                'ends_at' => $endsAt,
                'status' => 'pending',
                'price' => $price,
                'payment_status' => 'pending',
                'note' => $validated['note'] ?? null,
            ]);

            $payment = Payment::create([
                'payable_type' => Booking::class,
                'payable_id' => $booking->id,
                'user_id' => $user->id,
                'gateway' => $validated['payment_method'] === 'online' ? 'sandbox' : 'offline',
                'method' => $validated['payment_method'],
                'amount' => $price,
                'status' => 'pending',
            ]);

            if ($validated['payment_method'] === 'online') {
                $callbackUrl = route('payment.callback', ['payment' => $payment->id]);
                $gatewayResponse = $this->paymentManager->request($payment, $callbackUrl);

                if ($gatewayResponse['success']) {
                    return redirect($gatewayResponse['url']);
                }

                return back()->withErrors(['booking' => 'خطا در هدایت به درگاه پرداخت.']);
            }

            // Offline booking
            $booking->update([
                'status' => 'confirmed',
                'payment_status' => 'paid',
            ]);
            $payment->update([
                'status' => 'paid',
                'paid_at' => now(),
                'tracking_code' => 'SRV-'.random_int(100000, 999999),
            ]);

            AuditLog::record(action: "رزرو خدمت {$service->title}", subject: $booking);

            return redirect()->route('panel.member.bookings')->with('success', 'رزرو نوبت شما با موفقیت تایید شد.');
        });
    }

    /**
     * Secure Idempotent Payment Callback.
     */
    public function callback(Request $request, Payment $payment): RedirectResponse
    {
        // Idempotency check: already paid?
        if ($payment->status === 'paid') {
            return redirect()->route('panel.member.dashboard')->with('info', 'این تراکنش قبلاً با موفقیت ثبت و تایید شده است.');
        }

        $verification = $this->paymentManager->verify($payment, $request->all());

        if (! $verification['success']) {
            $payment->update(['status' => 'failed']);

            return redirect()->route('panel.member.dashboard')->withErrors(['payment' => $verification['message']]);
        }

        return DB::transaction(function () use ($payment, $verification) {
            $payment->update([
                'status' => 'paid',
                'ref_id' => $verification['ref_id'] ?? $payment->ref_id,
                'tracking_code' => $verification['tracking_code'] ?? null,
                'paid_at' => now(),
            ]);

            // Handle payable fulfillment
            if ($payment->payable_type === MembershipPlan::class) {
                $plan = MembershipPlan::find($payment->payable_id);
                if ($plan) {
                    $user = $payment->user;
                    $startsAt = now();
                    if ($user->activeMembership && $user->activeMembership->ends_at->isFuture()) {
                        $startsAt = $user->activeMembership->ends_at;
                    }
                    $endsAt = (clone $startsAt)->addDays($plan->duration_days);

                    Membership::create([
                        'member_id' => $user->id,
                        'plan_id' => $plan->id,
                        'starts_at' => $startsAt,
                        'ends_at' => $endsAt,
                        'status' => 'active',
                        'paid_amount' => $payment->amount,
                    ]);
                }
                AuditLog::record(action: 'پرداخت موفق آنلاین اشتراک', subject: $payment);

                return redirect()->route('panel.member.membership')->with('success', 'پرداخت با موفقیت انجام شد و اشتراک شما فعال گردید.');
            }

            if ($payment->payable_type === Order::class) {
                $order = Order::find($payment->payable_id);
                if ($order) {
                    $order->update([
                        'payment_status' => 'paid',
                        'status' => 'preparing',
                    ]);
                }
                AuditLog::record(action: "پرداخت موفق آنلاین سفارش {$order?->order_no}", subject: $payment);

                return redirect()->route('panel.member.orders')->with('success', 'پرداخت سفارش شما با موفقیت انجام شد.');
            }

            if ($payment->payable_type === Booking::class) {
                $booking = Booking::find($payment->payable_id);
                if ($booking) {
                    $booking->update([
                        'status' => 'confirmed',
                        'payment_status' => 'paid',
                    ]);
                }
                AuditLog::record(action: 'پرداخت موفق آنلاین رزرو نوبت', subject: $payment);

                return redirect()->route('panel.member.bookings')->with('success', 'رزرو نوبت شما با موفقیت پرداخت و تایید شد.');
            }

            return redirect()->route('panel.member.dashboard')->with('success', 'پرداخت با موفقیت انجام شد.');
        });
    }
}
