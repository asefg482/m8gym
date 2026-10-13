<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CmsBanner;
use App\Models\CmsFaq;
use App\Models\Lead;
use App\Models\MembershipPlan;
use App\Models\Product;
use App\Models\Service;
use App\Models\Setting;
use App\Models\TrainerProfile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PublicController extends Controller
{
    /**
     * Home Landing Page.
     */
    public function home(): Response
    {
        $banners = CmsBanner::where('is_active', true)
            ->where('scope', 'home')
            ->orderBy('sort')
            ->get();

        $plans = MembershipPlan::where('is_active', true)->get();

        $trainers = TrainerProfile::with('user')
            ->where('is_public', true)
            ->get();

        $services = Service::where('is_active', true)->get();

        $faqs = CmsFaq::where('is_active', true)->orderBy('sort')->get();

        $featuredProducts = Product::where('is_active', true)
            ->where('scope', 'shop')
            ->latest()
            ->limit(4)
            ->get();

        $featuredBuffet = Product::where('is_active', true)
            ->where('scope', 'buffet')
            ->latest()
            ->limit(4)
            ->get();

        $settings = [
            'about' => Setting::get('gym_about'),
            'slogan' => Setting::get('gym_slogan'),
            'stat_members' => Setting::get('stat_active_members', '۲,۴۵۰+'),
            'stat_trainers' => Setting::get('stat_trainers_count', '۱۵ مربی'),
            'stat_area' => Setting::get('stat_gym_area', '۲,۵۰۰ متر'),
            'stat_years' => Setting::get('stat_experience_years', '۷+ سال'),
            'phone' => Setting::get('gym_phone'),
            'mobile' => Setting::get('gym_mobile'),
            'address' => Setting::get('gym_address'),
            'instagram' => Setting::get('gym_instagram'),
            'work_hours' => Setting::get('gym_work_hours'),
        ];

        return Inertia::render('Public/Home', [
            'banners' => $banners,
            'plans' => $plans,
            'trainers' => $trainers,
            'services' => $services,
            'faqs' => $faqs,
            'featuredProducts' => $featuredProducts,
            'featuredBuffet' => $featuredBuffet,
            'gymSettings' => $settings,
        ]);
    }

    /**
     * Cafe & Buffet Page.
     */
    public function cafe(): Response
    {
        $banners = CmsBanner::where('is_active', true)
            ->whereIn('scope', ['cafe', 'home'])
            ->orderBy('sort')
            ->get();

        $categories = Category::where('scope', 'buffet')
            ->with(['products' => fn ($q) => $q->where('is_active', true)])
            ->orderBy('sort')
            ->get();

        return Inertia::render('Public/Cafe', [
            'banners' => $banners,
            'categories' => $categories,
        ]);
    }

    /**
     * Shop Page.
     */
    public function shop(Request $request): Response
    {
        $query = Product::where('is_active', true)->where('scope', 'shop');

        if ($categoryId = $request->input('category')) {
            $query->where('category_id', $categoryId);
        }

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        $products = $query->latest()->paginate(12)->withQueryString();
        $categories = Category::where('scope', 'shop')->orderBy('sort')->get();

        return Inertia::render('Public/Shop', [
            'products' => $products,
            'categories' => $categories,
            'currentCategory' => $categoryId,
        ]);
    }

    /**
     * Product Details Page.
     */
    public function product(Product $product): Response
    {
        $product->load('category');

        $related = Product::where('scope', $product->scope)
            ->where('id', '!=', $product->id)
            ->where('is_active', true)
            ->limit(4)
            ->get();

        return Inertia::render('Public/ProductDetail', [
            'product' => $product,
            'related' => $related,
        ]);
    }

    /**
     * Massage Services Page.
     */
    public function massage(): Response
    {
        $services = Service::where('category', 'massage')
            ->where('is_active', true)
            ->with('providers')
            ->get();

        return Inertia::render('Public/Massage', [
            'services' => $services,
        ]);
    }

    /**
     * Hairdresser Services Page.
     */
    public function hairdresser(): Response
    {
        $services = Service::where('category', 'hairdresser')
            ->where('is_active', true)
            ->with('providers')
            ->get();

        return Inertia::render('Public/Hairdresser', [
            'services' => $services,
        ]);
    }

    /**
     * Free Consultation Lead Form Submission.
     */
    public function submitLead(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'mobile' => 'required|string|regex:/^09[0-9]{9}$/',
            'message' => 'nullable|string|max:1000',
        ], [
            'name.required' => 'لطفاً نام و نام خانوادگی خود را وارد کنید.',
            'mobile.required' => 'شماره موبایل الزامی است.',
            'mobile.regex' => 'فرمت شماره موبایل باید ۰۹xxxxxxxxx باشد.',
        ]);

        Lead::create([
            'name' => $validated['name'],
            'mobile' => $validated['mobile'],
            'message' => $validated['message'] ?? null,
            'status' => 'new',
        ]);

        return back()->with('success', 'درخواست مشاوره رایگان شما با موفقیت ثبت شد. کارشناسان ما به زودی با شما تماس می‌گیرند.');
    }
}
