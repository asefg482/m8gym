<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use App\Models\Role;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $authData = null;

        if ($user) {
            $user->loadMissing(['activeRoles', 'memberProfile']);
            $currentRoleKey = $user->currentRoleKey();

            // Fetch dynamic menus for the active role
            $accessibleMenus = [];
            if ($currentRoleKey === 'super_admin') {
                $accessibleMenus = Menu::where('is_active', true)
                    ->orderBy('sort')
                    ->get();
            } else {
                $role = Role::where('key', $currentRoleKey)->first();
                $roleMenuIds = $role ? $role->menus()->pluck('menus.id')->all() : [];

                // Check overrides
                $overrides = $user->menuOverrides()->pluck('effect', 'menu_id')->all();

                $accessibleMenus = Menu::where('is_active', true)
                    ->orderBy('sort')
                    ->get()
                    ->filter(function ($menu) use ($roleMenuIds, $overrides) {
                        if (isset($overrides[$menu->id])) {
                            return $overrides[$menu->id] === 'allow';
                        }

                        return in_array($menu->id, $roleMenuIds, true);
                    })
                    ->values();
            }

            $authData = [
                'user' => [
                    'id' => $user->id,
                    'mobile' => $user->mobile,
                    'name' => $user->full_name,
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'avatar' => $user->avatar,
                    'status' => $user->status,
                    'is_vip' => $user->isVip(),
                    'created_at' => $user->created_at?->toIso8601String(),
                ],
                'active_role' => $currentRoleKey,
                'roles' => $user->activeRoles->map(fn ($r) => [
                    'key' => $r->key,
                    'title' => $r->title,
                    'description' => $r->description,
                ]),
                'menus' => $accessibleMenus,
            ];
        }

        return [
            ...parent::share($request),
            'auth' => $authData,
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
                'info' => fn () => $request->session()->get('info'),
            ],
            'gym' => [
                'name' => Setting::get('gym_name', 'باشگاه ورزشی M8 (Fit Club)'),
                'phone' => Setting::get('gym_phone', '۰۱۱-۳۳۲۲۱۱۰۰'),
                'mobile' => Setting::get('gym_mobile', '۰۹۱۱۱۲۳۴۵۶۷'),
                'address' => Setting::get('gym_address', 'مازندران، ساری، خیابان قارن، مجموعه ورزشی و تندرستی M8'),
                'instagram' => Setting::get('gym_instagram', 'https://www.instagram.com/m8_fitclub/?hl=fa'),
                'work_hours' => Setting::get('gym_work_hours', 'شنبه تا پنجشنبه: ۶:۰۰ الی ۲۳:۳۰ | جمعه‌ها: ۹:۰۰ الی ۲۰:۰۰'),
            ],
            'cart' => [
                'count' => (int) count($request->session()->get('cart', [])),
            ],
        ];
    }
}
