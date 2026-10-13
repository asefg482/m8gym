<?php

namespace Tests\Feature;

use App\Models\Booking;
use App\Models\MembershipPlan;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Service;
use App\Models\User;
use Carbon\Carbon;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PaymentAndBookingTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DatabaseSeeder::class);
    }

    public function test_purchase_membership_offline_activates_membership(): void
    {
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);

        $plan = MembershipPlan::first();

        $response = $this->post("/payment/membership/{$plan->id}", [
            'payment_method' => 'offline_cash',
        ]);

        $response->assertRedirect('/panel/member/membership');

        $this->assertDatabaseHas('memberships', [
            'member_id' => $member->id,
            'plan_id' => $plan->id,
            'status' => 'active',
        ]);

        $this->assertDatabaseHas('payments', [
            'payable_type' => MembershipPlan::class,
            'payable_id' => $plan->id,
            'user_id' => $member->id,
            'status' => 'paid',
        ]);
    }

    public function test_purchase_membership_online_initiates_payment(): void
    {
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);

        $plan = MembershipPlan::first();

        $response = $this->post("/payment/membership/{$plan->id}", [
            'payment_method' => 'online',
        ]);

        $this->assertDatabaseHas('payments', [
            'payable_type' => MembershipPlan::class,
            'payable_id' => $plan->id,
            'user_id' => $member->id,
            'status' => 'pending',
            'gateway' => 'sandbox',
        ]);

        // Redirects to sandbox mock gateway
        $response->assertRedirect();
        $this->assertStringContainsString('/payment/callback/', $response->headers->get('Location'));
    }

    public function test_checkout_cart_decrements_stock_and_creates_order(): void
    {
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);

        $product = Product::where('scope', 'shop')->first();
        $initialStock = $product->stock;

        $response = $this->post('/payment/checkout', [
            'scope' => 'shop',
            'payment_method' => 'pos',
            'delivery_type' => 'pickup',
            'items' => [
                [
                    'product_id' => $product->id,
                    'qty' => 2,
                ],
            ],
        ]);

        $response->assertRedirect('/panel/member/orders');

        // Check stock decremented
        $this->assertEquals($initialStock - 2, $product->fresh()->stock);

        // Check order created
        $this->assertDatabaseHas('orders', [
            'customer_id' => $member->id,
            'scope' => 'shop',
            'payment_status' => 'paid',
        ]);

        $this->assertDatabaseHas('order_items', [
            'product_id' => $product->id,
            'qty' => 2,
        ]);
    }

    public function test_checkout_cart_fails_when_stock_insufficient(): void
    {
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);

        $product = Product::where('scope', 'shop')->first();
        $initialStock = $product->stock;

        $response = $this->post('/payment/checkout', [
            'scope' => 'shop',
            'payment_method' => 'pos',
            'delivery_type' => 'pickup',
            'items' => [
                [
                    'product_id' => $product->id,
                    'qty' => 9999, // Exceeds available stock
                ],
            ],
        ]);

        $response->assertSessionHasErrors('cart');
        $this->assertEquals($initialStock, $product->fresh()->stock);
    }

    public function test_book_service_creates_booking_and_payment(): void
    {
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);

        $service = Service::with('providers')->first();
        $provider = $service->providers->first();
        $this->assertNotNull($provider);

        $startsAt = Carbon::tomorrow()->setTime(14, 0)->toDateTimeString();

        $response = $this->post("/payment/service/{$service->id}", [
            'provider_id' => $provider->id,
            'starts_at' => $startsAt,
            'payment_method' => 'offline',
            'note' => 'رزرو ماساژ ریلکسی',
        ]);

        $response->assertRedirect('/panel/member/bookings');

        $this->assertDatabaseHas('bookings', [
            'member_id' => $member->id,
            'service_id' => $service->id,
            'provider_id' => $provider->id,
            'status' => 'confirmed',
        ]);
    }

    public function test_book_service_prevents_overlap(): void
    {
        $member1 = User::where('mobile', '09118889999')->first();
        $service = Service::with('providers')->first();
        $provider = $service->providers->first();

        $bookingTime = Carbon::tomorrow()->setTime(15, 0);

        // Pre-create an existing booking from 15:00 to 16:00
        Booking::create([
            'member_id' => $member1->id,
            'service_id' => $service->id,
            'provider_id' => $provider->id,
            'starts_at' => $bookingTime,
            'ends_at' => (clone $bookingTime)->addMinutes($service->duration_min),
            'status' => 'confirmed',
            'price' => $service->price,
            'payment_status' => 'paid',
        ]);

        // Another member tries to book at 15:30 (overlapping)
        $member2 = User::where('mobile', '09119990000')->first();
        $this->actingAs($member2);

        $overlapTime = (clone $bookingTime)->addMinutes(30)->toDateTimeString();

        $response = $this->post("/payment/service/{$service->id}", [
            'provider_id' => $provider->id,
            'starts_at' => $overlapTime,
            'payment_method' => 'offline',
        ]);

        $response->assertSessionHasErrors('starts_at');
    }

    public function test_payment_callback_idempotency(): void
    {
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);

        $plan = MembershipPlan::first();

        $payment = Payment::create([
            'payable_type' => MembershipPlan::class,
            'payable_id' => $plan->id,
            'user_id' => $member->id,
            'gateway' => 'sandbox',
            'method' => 'online',
            'amount' => $plan->price,
            'status' => 'pending',
            'ref_id' => 'SANDBOX-REF-12345',
        ]);

        // First callback
        $response1 = $this->get("/payment/callback/{$payment->id}?Status=OK&Authority=SANDBOX-REF-12345");
        $response1->assertRedirect();

        $payment->refresh();
        $this->assertEquals('paid', $payment->status);

        // Second callback should not error and should be idempotent
        $response2 = $this->get("/payment/callback/{$payment->id}?Status=OK&Authority=SANDBOX-REF-12345");
        $response2->assertRedirect('/panel/member/dashboard');
        $response2->assertSessionHas('info');
    }
}
