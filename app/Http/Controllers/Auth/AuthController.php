<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\MemberProfile;
use App\Models\OtpCode;
use App\Models\Role;
use App\Models\User;
use App\Services\Sms\SmsManager;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function __construct(protected SmsManager $smsManager) {}

    /**
     * Normalize Iranian mobile numbers.
     */
    protected function normalizeMobile(string $mobile): string
    {
        // Convert Persian/Arabic digits to English
        $persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        $arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        $english = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        $mobile = str_replace($persian, $english, $mobile);
        $mobile = str_replace($arabic, $english, $mobile);
        $mobile = preg_replace('/[^0-9]/', '', $mobile);

        // Normalize +98 or 0098 to 0
        if (str_starts_with($mobile, '0098')) {
            $mobile = '0'.substr($mobile, 4);
        } elseif (str_starts_with($mobile, '98') && strlen($mobile) === 12) {
            $mobile = '0'.substr($mobile, 2);
        }

        return $mobile;
    }

    /**
     * Show login page.
     */
    public function showLogin(): Response|RedirectResponse
    {
        if (Auth::check()) {
            return $this->redirectBasedOnRoles(Auth::user());
        }

        return Inertia::render('Auth/Login');
    }

    /**
     * Request OTP code.
     */
    public function sendOtp(Request $request)
    {
        $rawMobile = (string) $request->input('mobile');
        $mobile = $this->normalizeMobile($rawMobile);

        if (! preg_match('/^09[0-9]{9}$/', $mobile)) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'شماره موبایل نامعتبر است. فرمت صحیح: ۰۹xxxxxxxxx',
                    'errors' => ['mobile' => ['شماره موبایل نامعتبر است.']],
                ], 422);
            }

            return back()->withErrors(['mobile' => 'شماره موبایل نامعتبر است. فرمت صحیح: ۰۹xxxxxxxxx']);
        }

        if (OtpCode::isRateLimited($mobile, $request->ip())) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً ساعتی دیگر مجدداً تلاش کنید.',
                    'errors' => ['mobile' => ['تعداد درخواست‌های شما بیش از حد مجاز است.']],
                ], 429);
            }

            return back()->withErrors(['mobile' => 'تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً ساعتی دیگر مجدداً تلاش کنید.']);
        }

        $otpData = OtpCode::createCode($mobile, $request->ip());
        $sent = $this->smsManager->sendOtp($mobile, $otpData['code']);

        if (! $sent && app()->isProduction()) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'ارسال پیامک با خطا مواجه شد. لطفاً چند لحظه بعد مجدداً تلاش کنید.',
                    'errors' => ['mobile' => ['ارسال پیامک با خطا مواجه شد.']],
                ], 500);
            }

            return back()->withErrors(['mobile' => 'ارسال پیامک با خطا مواجه شد. لطفاً چند لحظه بعد مجدداً تلاش کنید.']);
        }

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'کد تایید پیامک شد.',
                'mobile' => $mobile,
                'dev_otp' => app()->environment('local', 'testing') ? $otpData['code'] : null,
            ]);
        }

        return back()->with([
            'success' => 'کد تایید پیامک شد.',
            'mobile' => $mobile,
            'dev_otp' => app()->environment('local', 'testing') ? $otpData['code'] : null,
        ]);
    }

    /**
     * Verify OTP code and authenticate.
     */
    public function verifyOtp(Request $request)
    {
        $rawMobile = (string) $request->input('mobile');
        $mobile = $this->normalizeMobile($rawMobile);
        $code = (string) $request->input('code');

        if (! preg_match('/^09[0-9]{9}$/', $mobile)) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'شماره موبایل نامعتبر است.',
                    'errors' => ['mobile' => ['شماره موبایل نامعتبر است.']],
                ], 422);
            }

            return back()->withErrors(['mobile' => 'شماره موبایل نامعتبر است.']);
        }

        $verification = OtpCode::verifyCode($mobile, $code);
        if (! $verification['success']) {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => $verification['message'],
                    'errors' => ['code' => [$verification['message']]],
                ], 422);
            }

            return back()->withErrors(['code' => $verification['message']]);
        }

        // Find or create user
        $user = User::where('mobile', $mobile)->first();
        $isNewUser = false;

        if (! $user) {
            $user = User::create([
                'mobile' => $mobile,
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]);

            // Assign default member role
            $memberRole = Role::where('key', 'member')->first();
            if ($memberRole) {
                $user->roles()->attach($memberRole->id, ['status' => 'active', 'assigned_at' => now()]);
            }

            // Create empty member profile
            MemberProfile::create([
                'user_id' => $user->id,
                'level' => 'normal',
            ]);

            $isNewUser = true;
        } else {
            $user->update([
                'last_login_at' => now(),
                'mobile_verified_at' => $user->mobile_verified_at ?? now(),
            ]);
        }

        if ($user->status === 'suspended') {
            if ($request->wantsJson()) {
                return response()->json([
                    'message' => 'حساب کاربری شما مسدود شده است. با پشتیبانی تماس بگیرید.',
                ], 403);
            }

            return back()->withErrors(['mobile' => 'حساب کاربری شما مسدود شده است. با پشتیبانی تماس بگیرید.']);
        }

        Auth::login($user, remember: true);
        $request->session()->regenerate();

        AuditLog::record(
            action: $isNewUser ? 'ثبت‌نام جدید با شماره موبایل' : 'ورود با کد یک‌بار مصرف',
            subject: $user,
            meta: ['mobile' => $mobile, 'is_new' => $isNewUser],
            user: $user
        );

        if ($request->wantsJson()) {
            return response()->json([
                'success' => true,
                'redirect_url' => $this->getRedirectUrlForRoles($user),
            ]);
        }

        return $this->redirectBasedOnRoles($user);
    }

    /**
     * Show role selection view when user has multiple roles.
     */
    public function showSelectRole(): Response|RedirectResponse
    {
        $user = Auth::user();
        if (! $user) {
            return redirect()->route('login');
        }

        $activeRoles = $user->activeRoles;
        if ($activeRoles->count() <= 1) {
            return $this->redirectBasedOnRoles($user);
        }

        return Inertia::render('Auth/SelectRole', [
            'roles' => $activeRoles->map(fn ($r) => [
                'key' => $r->key,
                'title' => $r->title,
                'description' => $r->description,
            ]),
            'activeRole' => session('active_role'),
        ]);
    }

    /**
     * Switch active role.
     */
    public function switchRole(Request $request): RedirectResponse
    {
        $user = Auth::user();
        if (! $user) {
            return redirect()->route('login');
        }

        $roleKey = (string) ($request->input('role') ?? $request->input('role_key'));
        $validRoles = $user->activeRoles->pluck('key')->all();

        if (! in_array($roleKey, $validRoles, true)) {
            return back()->withErrors(['role' => 'نقش انتخابی معتبر نیست.']);
        }

        session(['active_role' => $roleKey]);

        AuditLog::record(
            action: "تعویض نقش به {$roleKey}",
            meta: ['role' => $roleKey],
            user: $user
        );

        return $this->redirectToRoleDashboard($roleKey);
    }

    /**
     * Get redirect URL string for user roles.
     */
    protected function getRedirectUrlForRoles(User $user): string
    {
        $activeRoles = $user->activeRoles;

        if ($activeRoles->count() === 1) {
            $roleKey = $activeRoles->first()->key;
            session(['active_role' => $roleKey]);

            return match ($roleKey) {
                'super_admin' => '/panel/super_admin/dashboard',
                'manager' => '/panel/manager/dashboard',
                'trainer' => '/panel/trainer/dashboard',
                'shop' => '/panel/shop/dashboard',
                'buffet' => '/panel/buffet/dashboard',
                'service' => '/panel/service/dashboard',
                'member' => '/panel/member/dashboard',
                default => '/',
            };
        }

        if ($activeRoles->count() > 1) {
            return '/select-role';
        }

        return '/panel/member/dashboard';
    }

    /**
     * Determine redirect after login based on active roles.
     */
    protected function redirectBasedOnRoles(User $user): RedirectResponse
    {
        $activeRoles = $user->activeRoles;

        if ($activeRoles->count() === 1) {
            $roleKey = $activeRoles->first()->key;
            session(['active_role' => $roleKey]);

            return $this->redirectToRoleDashboard($roleKey);
        }

        if ($activeRoles->count() > 1) {
            return redirect()->route('auth.select_role');
        }

        // Fallback: assign member role if no roles
        $memberRole = Role::where('key', 'member')->first();
        if ($memberRole) {
            $user->roles()->attach($memberRole->id, ['status' => 'active', 'assigned_at' => now()]);
        }
        session(['active_role' => 'member']);

        return redirect()->route('panel.member.dashboard');
    }

    /**
     * Redirect to the dashboard of a specific role.
     */
    protected function redirectToRoleDashboard(string $roleKey): RedirectResponse
    {
        return match ($roleKey) {
            'super_admin' => redirect()->route('panel.super_admin.dashboard'),
            'manager' => redirect()->route('panel.manager.dashboard'),
            'trainer' => redirect()->route('panel.trainer.dashboard'),
            'shop' => redirect()->route('panel.shop.dashboard'),
            'buffet' => redirect()->route('panel.buffet.dashboard'),
            'service' => redirect()->route('panel.service.dashboard'),
            'member' => redirect()->route('panel.member.dashboard'),
            default => redirect()->route('home'),
        };
    }

    /**
     * Logout.
     */
    public function logout(Request $request): RedirectResponse
    {
        $user = Auth::user();
        if ($user) {
            AuditLog::record(action: 'خروج از حساب کاربری', user: $user);
        }

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home')->with('info', 'با موفقیت خارج شدید.');
    }
}
