<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    /**
     * Shop Dashboard.
     */
    public function dashboard(): Response
    {
        $todayOrders = Order::where('scope', 'shop')->whereDate('created_at', today())->count();
        $todaySales = Order::where('scope', 'shop')->where('payment_status', 'paid')->whereDate('created_at', today())->sum('total');
        $lowStockCount = Product::where('scope', 'shop')->where('stock', '<=', 5)->count();
        $pendingOrdersCount = Order::where('scope', 'shop')->whereIn('status', ['new', 'preparing'])->count();

        $recentOrders = Order::where('scope', 'shop')->with(['customer', 'items'])->latest()->limit(5)->get();

        return Inertia::render('Panel/Shop/Dashboard', [
            'stats' => [
                'today_orders' => $todayOrders,
                'today_sales' => (int) $todaySales,
                'low_stock_count' => $lowStockCount,
                'pending_orders' => $pendingOrdersCount,
            ],
            'recentOrders' => $recentOrders,
        ]);
    }

    /**
     * Products List & Management.
     */
    public function products(Request $request): Response
    {
        $query = Product::where('scope', 'shop')->with('category');

        if ($search = $request->input('search')) {
            $query->where('title', 'like', "%{$search}%");
        }

        $products = $query->latest()->paginate(15)->withQueryString();
        $categories = Category::where('scope', 'shop')->get();

        return Inertia::render('Panel/Shop/Products', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }

    public function storeProduct(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'category_id' => 'nullable|exists:categories,id',
            'price' => 'required|integer|min:0',
            'discount_price' => 'nullable|integer|lt:price',
            'stock' => 'required|integer|min:0',
            'sku' => 'nullable|string|max:50',
            'description' => 'nullable|string',
            'images' => 'nullable|array',
            'is_active' => 'boolean',
        ]);

        $slug = Str::slug($validated['title']).'-'.random_int(100, 999);

        Product::create([
            ...$validated,
            'scope' => 'shop',
            'slug' => $slug,
            'seller_user_id' => auth()->id(),
        ]);

        return back()->with('success', 'محصول با موفقیت اضافه شد.');
    }

    public function updateProduct(Request $request, Product $product): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'category_id' => 'nullable|exists:categories,id',
            'price' => 'required|integer|min:0',
            'discount_price' => 'nullable|integer',
            'stock' => 'required|integer|min:0',
            'sku' => 'nullable|string|max:50',
            'description' => 'nullable|string',
            'images' => 'nullable|array',
            'is_active' => 'boolean',
        ]);

        $product->update($validated);

        return back()->with('success', 'محصول با موفقیت ویرایش شد.');
    }

    /**
     * Orders List & Management.
     */
    public function orders(Request $request): Response
    {
        $query = Order::where('scope', 'shop')->with(['customer', 'items.product']);

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $orders = $query->latest()->paginate(15)->withQueryString();

        return Inertia::render('Panel/Shop/Orders', [
            'orders' => $orders,
            'currentStatus' => $status,
        ]);
    }

    /**
     * Update order status with stock rollback on cancellation.
     */
    public function updateOrderStatus(Request $request, Order $order): RedirectResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:new,preparing,ready,delivered,cancelled',
        ]);

        $oldStatus = $order->status;
        $newStatus = $validated['status'];

        if ($oldStatus === $newStatus) {
            return back();
        }

        DB::transaction(function () use ($order, $oldStatus, $newStatus) {
            $order->update(['status' => $newStatus]);

            // AC: لغو سفارش، موجودی را بازگرداند
            if ($newStatus === 'cancelled' && $oldStatus !== 'cancelled') {
                foreach ($order->items as $item) {
                    $item->product?->increment('stock', $item->qty);
                }
            }

            AuditLog::record(action: "تغییر وضعیت سفارش {$order->order_no} از {$oldStatus} به {$newStatus}", subject: $order);
        });

        return back()->with('success', 'وضعیت سفارش بروزرسانی شد.');
    }

    /**
     * Quick In-Store POS Sale.
     */
    public function pos(): Response
    {
        $products = Product::where('scope', 'shop')->where('is_active', true)->where('stock', '>', 0)->get();
        $members = User::whereHas('roles', fn ($q) => $q->where('key', 'member'))->with('memberProfile')->get();

        return Inertia::render('Panel/Shop/Pos', [
            'products' => $products,
            'members' => $members,
        ]);
    }

    /**
     * Categories Management.
     */
    public function categories(): Response
    {
        $categories = Category::where('scope', 'shop')->withCount('products')->get();

        return Inertia::render('Panel/Shop/Categories', [
            'categories' => $categories,
        ]);
    }

    public function storeCategory(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:100',
        ]);

        Category::create(['scope' => 'shop', 'title' => $validated['title']]);

        return back()->with('success', 'دسته‌بندی افزوده شد.');
    }
}
