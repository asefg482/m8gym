<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\CmsBanner;
use App\Models\Lead;
use App\Models\MembershipPlan;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CmsController extends Controller
{
    /**
     * General site settings and CMS overview.
     */
    public function settings(): Response
    {
        $settings = Setting::all()->pluck('value', 'key');

        return Inertia::render('Panel/Manager/Settings', [
            'settings' => $settings,
        ]);
    }

    /**
     * Update CMS settings.
     */
    public function updateSettings(Request $request): RedirectResponse
    {
        $data = $request->except(['_token', '_method']);

        foreach ($data as $key => $value) {
            Setting::set($key, $value);
        }

        AuditLog::record(action: 'بروزرسانی تنظیمات عمومی سایت و CMS', meta: ['keys' => array_keys($data)]);

        return back()->with('success', 'تنظیمات و محتوای سایت با موفقیت بروزرسانی شد.');
    }

    /**
     * Manage Consultation Leads.
     */
    public function leads(Request $request): Response
    {
        $query = Lead::with('assignedTo')->latest();

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $leads = $query->paginate(20)->withQueryString();
        $trainers = User::whereHas('roles', fn ($q) => $q->where('key', 'trainer'))->get();

        return Inertia::render('Panel/Manager/Leads', [
            'leads' => $leads,
            'trainers' => $trainers,
            'currentStatus' => $status,
        ]);
    }

    /**
     * Update a lead's status or assignment.
     */
    public function updateLead(Request $request, Lead $lead): RedirectResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:new,contacted,closed',
            'assigned_to' => 'nullable|exists:users,id',
            'note' => 'nullable|string|max:1000',
        ]);

        $lead->update($validated);

        return back()->with('success', 'وضعیت سرنخ بروزرسانی شد.');
    }

    /**
     * Banners management.
     */
    public function banners(): Response
    {
        $banners = CmsBanner::orderBy('sort')->get();

        return Inertia::render('Panel/Manager/Banners', [
            'banners' => $banners,
        ]);
    }

    public function storeBanner(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'subtitle' => 'nullable|string|max:300',
            'image' => 'required|string',
            'link' => 'nullable|string',
            'badge' => 'nullable|string',
            'scope' => 'required|in:home,cafe,shop,membership',
            'is_active' => 'boolean',
        ]);

        CmsBanner::create($validated);

        return back()->with('success', 'بنر جدید با موفقیت ایجاد شد.');
    }

    public function updateBanner(Request $request, CmsBanner $banner): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'subtitle' => 'nullable|string|max:300',
            'image' => 'required|string',
            'link' => 'nullable|string',
            'badge' => 'nullable|string',
            'scope' => 'required|in:home,cafe,shop,membership',
            'is_active' => 'boolean',
        ]);

        $banner->update($validated);

        return back()->with('success', 'بنر بروزرسانی شد.');
    }

    public function destroyBanner(CmsBanner $banner): RedirectResponse
    {
        $banner->delete();

        return back()->with('success', 'بنر حذف شد.');
    }

    /**
     * Membership plans management.
     */
    public function plans(): Response
    {
        $plans = MembershipPlan::withCount('memberships')->get();

        return Inertia::render('Panel/Manager/Plans', [
            'plans' => $plans,
        ]);
    }

    public function storePlan(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'duration_days' => 'required|integer|min:1',
            'sessions_limit' => 'nullable|integer',
            'price' => 'required|integer|min:0',
            'benefits' => 'nullable|array',
            'is_active' => 'boolean',
        ]);

        MembershipPlan::create($validated);

        return back()->with('success', 'پلن جدید با موفقیت ایجاد شد.');
    }

    public function updatePlan(Request $request, MembershipPlan $plan): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'duration_days' => 'required|integer|min:1',
            'sessions_limit' => 'nullable|integer',
            'price' => 'required|integer|min:0',
            'benefits' => 'nullable|array',
            'is_active' => 'boolean',
        ]);

        $plan->update($validated);

        return back()->with('success', 'پلن اشتراک بروزرسانی شد.');
    }
}
