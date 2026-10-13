<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\Menu;
use App\Models\Role;
use App\Models\User;
use App\Models\UserMenuOverride;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RoleMatrixController extends Controller
{
    /**
     * Display the Role-Menu Matrix.
     */
    public function index(): Response
    {
        $roles = Role::orderBy('id')->get();
        $menus = Menu::with('roles')->orderBy('sort')->get();

        // Build matrix data: menu_id => [role_key => bool]
        $matrix = [];
        foreach ($menus as $menu) {
            $assignedRoleKeys = $menu->roles->pluck('key')->all();
            $matrix[$menu->id] = [];
            foreach ($roles as $role) {
                // super_admin always has access
                $matrix[$menu->id][$role->key] = $role->key === 'super_admin' || in_array($role->key, $assignedRoleKeys, true);
            }
        }

        return Inertia::render('Panel/Manager/RoleMatrix', [
            'roles' => $roles,
            'menus' => $menus,
            'matrix' => $matrix,
        ]);
    }

    /**
     * Update the Role-Menu Matrix.
     */
    public function update(Request $request): RedirectResponse
    {
        // Expecting permissions: array of { role_id: int, menu_ids: int[] }
        $validated = $request->validate([
            'matrix' => 'required|array', // [role_id => [menu_id1, menu_id2, ...]]
        ]);

        $roles = Role::all()->keyBy('id');

        foreach ($validated['matrix'] as $roleId => $menuIds) {
            $role = $roles->get($roleId);
            if (! $role) {
                continue;
            }

            // Super admin cannot have restricted menus
            if ($role->key === 'super_admin') {
                $allMenuIds = Menu::pluck('id')->all();
                $role->menus()->sync($allMenuIds);

                continue;
            }

            $role->menus()->sync($menuIds);
        }

        AuditLog::record(
            action: 'بروزرسانی ماتریس دسترسی نقش–منو',
            meta: ['updated_by' => auth()->id()]
        );

        return back()->with('success', 'ماتریس دسترسی نقش‌ها و منوها با موفقیت ذخیره شد.');
    }

    /**
     * Manage user specific menu overrides.
     */
    public function updateUserOverride(Request $request, User $user): RedirectResponse
    {
        $validated = $request->validate([
            'menu_id' => 'required|exists:menus,id',
            'effect' => 'required|in:allow,deny,none',
        ]);

        if ($validated['effect'] === 'none') {
            UserMenuOverride::where('user_id', $user->id)
                ->where('menu_id', $validated['menu_id'])
                ->delete();
        } else {
            UserMenuOverride::updateOrCreate(
                ['user_id' => $user->id, 'menu_id' => $validated['menu_id']],
                ['effect' => $validated['effect']]
            );
        }

        AuditLog::record(
            action: "تغییر دسترسی اختصاصی کاربر {$user->mobile} برای منوی {$validated['menu_id']}",
            subject: $user,
            meta: $validated
        );

        return back()->with('success', 'دسترسی اختصاصی کاربر بروزرسانی شد.');
    }
}
