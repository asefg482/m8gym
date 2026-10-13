<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use App\Models\Booking;
use App\Models\Membership;
use App\Models\MembershipPlan;
use App\Models\Order;
use App\Models\ProgressLog;
use App\Models\WorkoutPlan;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MemberController extends Controller
{
    /**
     * Member Dashboard.
     */
    public function dashboard(Request $request): Response
    {
        $user = $request->user();
        $user->loadMissing(['memberProfile', 'activeMembership.plan']);

        $recentWorkoutPlan = WorkoutPlan::where('member_id', $user->id)
            ->with(['trainer', 'items'])
            ->latest()
            ->first();

        $upcomingBookings = Booking::where('member_id', $user->id)
            ->where('starts_at', '>=', now())
            ->whereIn('status', ['pending', 'confirmed'])
            ->with(['service', 'provider'])
            ->orderBy('starts_at')
            ->limit(3)
            ->get();

        $recentOrders = Order::where('customer_id', $user->id)
            ->with('items')
            ->latest()
            ->limit(3)
            ->get();

        $recentAttendances = Attendance::where('member_id', $user->id)
            ->latest('date')
            ->limit(5)
            ->get();

        return Inertia::render('Panel/Member/Dashboard', [
            'member' => $user,
            'activeMembership' => $user->activeMembership,
            'recentWorkoutPlan' => $recentWorkoutPlan,
            'upcomingBookings' => $upcomingBookings,
            'recentOrders' => $recentOrders,
            'recentAttendances' => $recentAttendances,
        ]);
    }

    /**
     * Membership renewal and upgrade.
     */
    public function membership(Request $request): Response
    {
        $user = $request->user();
        $user->loadMissing('activeMembership.plan');

        $plans = MembershipPlan::where('is_active', true)->get();
        $history = Membership::where('member_id', $user->id)
            ->with('plan')
            ->latest()
            ->get();

        return Inertia::render('Panel/Member/Membership', [
            'activeMembership' => $user->activeMembership,
            'plans' => $plans,
            'history' => $history,
            'isVip' => $user->isVip(),
        ]);
    }

    /**
     * Member's workout & diet plans.
     */
    public function workoutPlans(Request $request): Response
    {
        $user = $request->user();

        $plans = WorkoutPlan::where('member_id', $user->id)
            ->with(['trainer', 'items'])
            ->latest()
            ->get();

        return Inertia::render('Panel/Member/WorkoutPlans', [
            'plans' => $plans,
        ]);
    }

    /**
     * Member attendance history.
     */
    public function history(Request $request): Response
    {
        $user = $request->user();

        $attendances = Attendance::where('member_id', $user->id)
            ->orderByDesc('date')
            ->get();

        // Total attendance count this month
        $thisMonthCount = Attendance::where('member_id', $user->id)
            ->whereYear('date', now()->year)
            ->whereMonth('date', now()->month)
            ->count();

        return Inertia::render('Panel/Member/History', [
            'attendances' => $attendances,
            'thisMonthCount' => $thisMonthCount,
            'totalCount' => $attendances->count(),
        ]);
    }

    /**
     * Member bookings.
     */
    public function bookings(Request $request): Response
    {
        $user = $request->user();

        $bookings = Booking::where('member_id', $user->id)
            ->with(['service', 'provider'])
            ->latest('starts_at')
            ->get();

        return Inertia::render('Panel/Member/Bookings', [
            'bookings' => $bookings,
        ]);
    }

    /**
     * Member orders.
     */
    public function orders(Request $request): Response
    {
        $user = $request->user();

        $orders = Order::where('customer_id', $user->id)
            ->with(['items.product'])
            ->latest()
            ->get();

        return Inertia::render('Panel/Member/Orders', [
            'orders' => $orders,
        ]);
    }

    /**
     * Member body progress tracking.
     */
    public function progress(Request $request): Response
    {
        $user = $request->user();

        $logs = ProgressLog::where('member_id', $user->id)
            ->orderBy('date')
            ->get();

        return Inertia::render('Panel/Member/Progress', [
            'logs' => $logs,
        ]);
    }

    /**
     * Store new progress log.
     */
    public function storeProgress(Request $request): RedirectResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'date' => 'required|date',
            'weight' => 'required|numeric|min:30|max:250',
            'body_fat' => 'nullable|numeric|min:1|max:60',
            'note' => 'nullable|string|max:500',
        ]);

        ProgressLog::create([
            'member_id' => $user->id,
            'recorded_by' => $user->id,
            'date' => $validated['date'],
            'weight' => $validated['weight'],
            'body_fat' => $validated['body_fat'] ?? null,
            'note' => $validated['note'] ?? null,
        ]);

        // Update profile current weight
        $user->memberProfile?->update(['weight' => $validated['weight']]);

        return back()->with('success', 'ثبت شاخص‌های بدنی با موفقیت انجام شد.');
    }

    /**
     * Update member personal profile.
     */
    public function updateProfile(Request $request): RedirectResponse
    {
        $user = $request->user();

        $validated = $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name' => 'required|string|max:100',
            'national_code' => 'nullable|string|max:20',
            'birth_date' => 'nullable|date',
            'gender' => 'nullable|in:male,female',
            'height' => 'nullable|numeric',
            'weight' => 'nullable|numeric',
            'goals' => 'nullable|string|max:500',
            'emergency_contact' => 'nullable|string|max:100',
        ]);

        $user->update([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'national_code' => $validated['national_code'] ?? null,
            'birth_date' => $validated['birth_date'] ?? null,
            'gender' => $validated['gender'] ?? null,
        ]);

        $user->memberProfile?->update([
            'height' => $validated['height'] ?? null,
            'weight' => $validated['weight'] ?? null,
            'goals' => $validated['goals'] ?? null,
            'emergency_contact' => $validated['emergency_contact'] ?? null,
        ]);

        return back()->with('success', 'پروفایل شما با موفقیت بروزرسانی شد.');
    }
}
