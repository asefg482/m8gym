<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\ProviderSchedule;
use App\Models\ProviderTimeOff;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ServicePanelController extends Controller
{
    /**
     * Services Dashboard.
     */
    public function dashboard(): Response
    {
        $todayBookings = Booking::whereDate('starts_at', today())->count();
        $pendingBookings = Booking::where('status', 'pending')->count();
        $monthlyRevenue = Booking::where('payment_status', 'paid')
            ->whereYear('starts_at', now()->year)
            ->whereMonth('starts_at', now()->month)
            ->sum('price');

        $upcoming = Booking::where('starts_at', '>=', now())
            ->with(['member', 'service', 'provider'])
            ->orderBy('starts_at')
            ->limit(5)
            ->get();

        return Inertia::render('Panel/Service/Dashboard', [
            'stats' => [
                'today_bookings' => $todayBookings,
                'pending_bookings' => $pendingBookings,
                'monthly_revenue' => (int) $monthlyRevenue,
            ],
            'upcoming' => $upcoming,
        ]);
    }

    /**
     * Bookings Calendar & List.
     */
    public function bookings(Request $request): Response
    {
        $query = Booking::with(['member', 'service', 'provider'])->latest('starts_at');

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $bookings = $query->paginate(20)->withQueryString();
        $services = Service::where('is_active', true)->get();
        $providers = User::whereHas('roles', fn ($q) => $q->where('key', 'service'))->get();
        $members = User::whereHas('roles', fn ($q) => $q->where('key', 'member'))->get();

        return Inertia::render('Panel/Service/Bookings', [
            'bookings' => $bookings,
            'services' => $services,
            'providers' => $providers,
            'members' => $members,
            'currentStatus' => $status,
        ]);
    }

    /**
     * Update booking status.
     */
    public function updateBookingStatus(Request $request, Booking $booking): RedirectResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,confirmed,completed,cancelled,no_show',
        ]);

        $booking->update(['status' => $validated['status']]);

        return back()->with('success', 'وضعیت نوبت تغییر کرد.');
    }

    /**
     * Services Management.
     */
    public function services(): Response
    {
        $services = Service::with('providers')->latest()->get();

        return Inertia::render('Panel/Service/Services', [
            'services' => $services,
        ]);
    }

    public function storeService(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'category' => 'required|in:massage,hairdresser,spa',
            'duration_min' => 'required|integer|min:15|max:180',
            'price' => 'required|integer|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        Service::create($validated);

        return back()->with('success', 'خدمت جدید اضافه شد.');
    }

    public function updateService(Request $request, Service $service): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'category' => 'required|in:massage,hairdresser,spa',
            'duration_min' => 'required|integer|min:15|max:180',
            'price' => 'required|integer|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $service->update($validated);

        return back()->with('success', 'خدمت ویرایش شد.');
    }

    /**
     * Provider Working Schedules & Time Offs.
     */
    public function schedule(Request $request): Response
    {
        $user = $request->user();

        $schedules = ProviderSchedule::where('provider_id', $user->id)->orderBy('weekday')->get();
        $timeOffs = ProviderTimeOff::where('provider_id', $user->id)->latest('date')->get();

        return Inertia::render('Panel/Service/Schedule', [
            'schedules' => $schedules,
            'timeOffs' => $timeOffs,
        ]);
    }
}
