<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use App\Models\AuditLog;
use App\Models\Booking;
use App\Models\Lead;
use App\Models\Membership;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SuperAdminController extends Controller
{
    /**
     * Super Admin Master Dashboard.
     */
    public function dashboard(): Response
    {
        $today = today();
        $thisMonth = now()->startOfMonth();

        // Financial aggregations
        $todayRevenue = Payment::where('status', 'paid')->whereDate('paid_at', $today)->sum('amount');
        $monthRevenue = Payment::where('status', 'paid')->where('paid_at', '>=', $thisMonth)->sum('amount');

        // Gym KPIs
        $activeMembersCount = Membership::where('status', 'active')->where('ends_at', '>=', now())->distinct('member_id')->count('member_id');
        $expiringCount = Membership::where('status', 'active')->whereBetween('ends_at', [now(), now()->addDays(7)])->count();
        $todayAttendancesCount = Attendance::whereDate('date', $today)->count();
        $pendingOrdersCount = Order::whereIn('status', ['new', 'preparing'])->count();
        $todayBookingsCount = Booking::whereDate('starts_at', $today)->count();
        $newLeadsCount = Lead::where('status', 'new')->count();

        // Recent transactions
        $recentPayments = Payment::with('user')->latest()->limit(5)->get();

        // Recent activity
        $recentAuditLogs = AuditLog::with('user')->latest()->limit(5)->get();

        return Inertia::render('Panel/SuperAdmin/Dashboard', [
            'stats' => [
                'today_revenue' => (int) $todayRevenue,
                'month_revenue' => (int) $monthRevenue,
                'active_members' => $activeMembersCount,
                'expiring_soon' => $expiringCount,
                'today_attendances' => $todayAttendancesCount,
                'pending_orders' => $pendingOrdersCount,
                'today_bookings' => $todayBookingsCount,
                'new_leads' => $newLeadsCount,
            ],
            'recentPayments' => $recentPayments,
            'recentAuditLogs' => $recentAuditLogs,
        ]);
    }

    /**
     * Attendance Management (Epic 11).
     */
    public function attendances(Request $request): Response
    {
        $query = Attendance::with(['member.memberProfile', 'member.activeMembership.plan'])
            ->latest('checkin_at');

        if ($search = $request->input('search')) {
            $query->whereHas('member', function ($q) use ($search) {
                $q->where('mobile', 'like', "%{$search}%")
                    ->orWhere('first_name', 'like', "%{$search}%")
                    ->orWhere('last_name', 'like', "%{$search}%");
            });
        }

        $attendances = $query->paginate(20)->withQueryString();
        $todayCount = Attendance::whereDate('date', today())->count();

        return Inertia::render('Panel/SuperAdmin/Attendances', [
            'attendances' => $attendances,
            'todayCount' => $todayCount,
        ]);
    }

    /**
     * Register Check-in / Checkout.
     */
    public function recordAttendance(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'mobile' => 'required|string',
            'method' => 'nullable|in:reception,qr,manual',
        ]);

        $user = User::where('mobile', $validated['mobile'])->first();

        if (! $user) {
            return back()->withErrors(['mobile' => 'عضوی با این شماره موبایل یافت نشد.']);
        }

        // Validate active membership
        $hasActiveMembership = $user->activeMembership()->exists();

        // Check if member already checked in today without checking out
        $existing = Attendance::where('member_id', $user->id)
            ->whereDate('date', today())
            ->whereNull('checkout_at')
            ->first();

        if ($existing) {
            $existing->update(['checkout_at' => now()]);
            AuditLog::record(action: "ثبت خروج تردد عضو {$user->mobile}", subject: $existing);

            return back()->with('info', "خروج ورزشکار {$user->full_name} در ساعت ".now()->format('H:i').' ثبت شد.');
        }

        $attendance = Attendance::create([
            'member_id' => $user->id,
            'date' => today(),
            'checkin_at' => now(),
            'method' => $validated['method'] ?? 'reception',
            'recorded_by' => auth()->id(),
        ]);

        AuditLog::record(action: "ثبت ورود تردد عضو {$user->mobile}", subject: $attendance);

        $msg = "ورود ورزشکار {$user->full_name} ثبت شد.";
        if (! $hasActiveMembership) {
            $msg .= ' ⚠️ توجه: این عضو اشتراک فعال معتبر ندارد!';
        }

        return back()->with('success', $msg);
    }

    /**
     * Aggregated Reports (Epic 13).
     */
    public function reports(): Response
    {
        // Monthly revenue by source
        $sources = [
            'memberships' => (int) Payment::where('status', 'paid')->where('payable_type', 'App\Models\MembershipPlan')->sum('amount'),
            'shop' => (int) Order::where('scope', 'shop')->where('payment_status', 'paid')->sum('total'),
            'buffet' => (int) Order::where('scope', 'buffet')->where('payment_status', 'paid')->sum('total'),
            'services' => (int) Booking::where('payment_status', 'paid')->sum('price'),
        ];

        $totalRevenue = array_sum($sources);

        return Inertia::render('Panel/SuperAdmin/Reports', [
            'sources' => $sources,
            'totalRevenue' => $totalRevenue,
        ]);
    }

    /**
     * Audit Logs Viewer.
     */
    public function audit(Request $request): Response
    {
        $query = AuditLog::with('user')->latest();

        if ($search = $request->input('search')) {
            $query->where('action', 'like', "%{$search}%");
        }

        if ($role = $request->input('role')) {
            $query->where('role_key', $role);
        }

        $logs = $query->paginate(25)->withQueryString();

        return Inertia::render('Panel/SuperAdmin/Audit', [
            'logs' => $logs,
        ]);
    }

    /**
     * System Settings.
     */
    public function settings(): Response
    {
        $settings = Setting::all()->pluck('value', 'key');

        return Inertia::render('Panel/SuperAdmin/Settings', [
            'settings' => $settings,
        ]);
    }

    public function updateSettings(Request $request): RedirectResponse
    {
        $data = $request->except(['_token', '_method']);

        foreach ($data as $key => $value) {
            Setting::set($key, $value);
        }

        AuditLog::record(action: 'بروزرسانی تنظیمات کلان سیستم', meta: ['keys' => array_keys($data)]);

        return back()->with('success', 'تنظیمات سیستم با موفقیت بروزرسانی شد.');
    }
}
