<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class BuffetController extends Controller
{
    /**
     * Buffet Dashboard.
     */
    public function dashboard(): Response
    {
        $todayOrders = Order::where('scope', 'buffet')->whereDate('created_at', today())->count();
        $todayRevenue = Order::where('scope', 'buffet')->where('payment_status', 'paid')->whereDate('created_at', today())->sum('total');
        $liveOrdersCount = Order::where('scope', 'buffet')->whereIn('status', ['new', 'preparing'])->count();

        $liveOrders = Order::where('scope', 'buffet')
            ->whereIn('status', ['new', 'preparing', 'ready'])
            ->with(['customer', 'items'])
            ->latest()
            ->get();

        return Inertia::render('Panel/Buffet/Dashboard', [
            'stats' => [
                'today_orders' => $todayOrders,
                'today_revenue' => (int) $todayRevenue,
                'live_orders_count' => $liveOrdersCount,
            ],
            'liveOrders' => $liveOrders,
        ]);
    }

    /**
     * Live Orders Monitor.
     */
    public function orders(): Response
    {
        $orders = Order::where('scope', 'buffet')
            ->with(['customer', 'items'])
            ->latest()
            ->paginate(20);

        return Inertia::render('Panel/Buffet/Orders', [
            'orders' => $orders,
        ]);
    }

    /**
     * Update order status.
     */
    public function updateOrderStatus(Request $request, Order $order): RedirectResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:new,preparing,ready,delivered,cancelled',
        ]);

        $order->update(['status' => $validated['status']]);

        return back()->with('success', 'وضعیت سفارش بوفه تغییر یافت.');
    }

    /**
     * Menu items CRUD & availability toggle.
     */
    public function menu(): Response
    {
        $items = Product::where('scope', 'buffet')->with('category')->latest()->get();
        $categories = Category::where('scope', 'buffet')->get();

        return Inertia::render('Panel/Buffet/Menu', [
            'items' => $items,
            'categories' => $categories,
        ]);
    }

    public function toggleAvailability(Product $product): RedirectResponse
    {
        $product->update(['is_active' => ! $product->is_active]);

        return back()->with('success', 'وضعیت موجودی آیتم با موفقیت تغییر کرد.');
    }

    public function storeMenuItem(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'category_id' => 'nullable|exists:categories,id',
            'price' => 'required|integer|min:0',
            'discount_price' => 'nullable|integer',
            'description' => 'nullable|string',
            'images' => 'nullable|array',
            'nutritional_info' => 'nullable|array',
            'is_active' => 'boolean',
        ]);

        $slug = Str::slug($validated['title']).'-'.random_int(100, 999);

        Product::create([
            ...$validated,
            'scope' => 'buffet',
            'slug' => $slug,
            'stock' => 999, // Buffet made on order
        ]);

        return back()->with('success', 'آیتم جدید به منوی بوفه افزوده شد.');
    }

    public function updateMenuItem(Request $request, Product $product): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'category_id' => 'nullable|exists:categories,id',
            'price' => 'required|integer|min:0',
            'discount_price' => 'nullable|integer',
            'description' => 'nullable|string',
            'images' => 'nullable|array',
            'nutritional_info' => 'nullable|array',
            'is_active' => 'boolean',
        ]);

        $product->update($validated);

        return back()->with('success', 'آیتم منو با موفقیت ویرایش شد.');
    }

    /**
     * Buffet counter POS.
     */
    public function pos(): Response
    {
        $items = Product::where('scope', 'buffet')->where('is_active', true)->get();
        $members = User::whereHas('roles', fn ($q) => $q->where('key', 'member'))->with('memberProfile')->get();

        return Inertia::render('Panel/Buffet/Pos', [
            'items' => $items,
            'members' => $members,
        ]);
    }

    /**
     * Sales report.
     */
    public function sales(): Response
    {
        $dailySales = Order::where('scope', 'buffet')
            ->where('payment_status', 'paid')
            ->where('created_at', '>=', now()->subDays(30))
            ->selectRaw('date(created_at) as date, sum(total) as revenue, count(id) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        return Inertia::render('Panel/Buffet/Sales', [
            'dailySales' => $dailySales,
        ]);
    }
}
