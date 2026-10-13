<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\MemberProfile;
use App\Models\Menu;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * List all users.
     */
    public function index(Request $request): Response
    {
        $query = User::with(['roles', 'memberProfile', 'activeMembership.plan'])
            ->latest('id');

        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('mobile', 'like', "%{$search}%")
                    ->orWhere('first_name', 'like', "%{$search}%")
                    ->orWhere('last_name', 'like', "%{$search}%")
                    ->orWhere('national_code', 'like', "%{$search}%");
            });
        }

        if ($roleKey = $request->input('role')) {
            $query->whereHas('roles', fn ($q) => $q->where('key', $roleKey));
        }

        if ($status = $request->input('status')) {
            $query->where('status', $status);
        }

        $users = $query->paginate(15)->withQueryString();
        $roles = Role::all();

        return Inertia::render('Panel/SuperAdmin/Users', [
            'users' => $users,
            'roles' => $roles,
            'filters' => $request->only(['search', 'role', 'status']),
        ]);
    }

    /**
     * Create a new user.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'mobile' => 'required|string|regex:/^09[0-9]{9}$/|unique:users,mobile',
            'first_name' => 'nullable|string|max:100',
            'last_name' => 'nullable|string|max:100',
            'national_code' => 'nullable|string|max:20',
            'gender' => 'nullable|in:male,female',
            'level' => 'nullable|in:normal,vip',
            'role_ids' => 'required|array',
            'role_ids.*' => 'exists:roles,id',
        ]);

        $user = User::create([
            'mobile' => $validated['mobile'],
            'first_name' => $validated['first_name'] ?? null,
            'last_name' => $validated['last_name'] ?? null,
            'national_code' => $validated['national_code'] ?? null,
            'gender' => $validated['gender'] ?? null,
            'status' => 'active',
            'mobile_verified_at' => now(),
        ]);

        $user->roles()->sync($validated['role_ids']);

        MemberProfile::create([
            'user_id' => $user->id,
            'level' => $validated['level'] ?? 'normal',
        ]);

        AuditLog::record(
            action: 'ایجاد کاربر جدید توسط ادمین',
            subject: $user,
            meta: ['mobile' => $user->mobile, 'roles' => $validated['role_ids']]
        );

        return back()->with('success', 'کاربر با موفقیت ایجاد شد.');
    }

    /**
     * Update user details and roles.
     */
    public function update(Request $request, User $user): RedirectResponse
    {
        $validated = $request->validate([
            'first_name' => 'nullable|string|max:100',
            'last_name' => 'nullable|string|max:100',
            'national_code' => 'nullable|string|max:20',
            'gender' => 'nullable|in:male,female',
            'status' => 'required|in:active,suspended',
            'level' => 'nullable|in:normal,vip',
            'role_ids' => 'required|array',
            'role_ids.*' => 'exists:roles,id',
        ]);

        $user->update([
            'first_name' => $validated['first_name'] ?? null,
            'last_name' => $validated['last_name'] ?? null,
            'national_code' => $validated['national_code'] ?? null,
            'gender' => $validated['gender'] ?? null,
            'status' => $validated['status'],
        ]);

        $user->roles()->sync($validated['role_ids']);

        if ($user->memberProfile) {
            $user->memberProfile->update([
                'level' => $validated['level'] ?? 'normal',
            ]);
        } else {
            MemberProfile::create([
                'user_id' => $user->id,
                'level' => $validated['level'] ?? 'normal',
            ]);
        }

        AuditLog::record(
            action: "ویرایش کاربر {$user->mobile}",
            subject: $user,
            meta: $validated
        );

        return back()->with('success', 'اطلاعات کاربر با موفقیت ویرایش شد.');
    }

    /**
     * View user details and permissions.
     */
    public function show(User $user): Response
    {
        $user->load([
            'roles',
            'memberProfile',
            'trainerProfile',
            'activeMembership.plan',
            'attendances' => fn ($q) => $q->latest()->limit(10),
            'menuOverrides.menu',
        ]);

        $allMenus = Menu::orderBy('sort')->get();

        return Inertia::render('Panel/SuperAdmin/UserDetail', [
            'viewUser' => $user,
            'menus' => $allMenus,
        ]);
    }
}
