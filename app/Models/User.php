<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'mobile',
        'first_name',
        'last_name',
        'name',
        'email',
        'national_code',
        'birth_date',
        'gender',
        'avatar',
        'status',
        'mobile_verified_at',
        'last_login_at',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'birth_date' => 'date',
            'mobile_verified_at' => 'datetime',
            'last_login_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Computed full name attribute.
     */
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: function () {
                $first = trim((string) $this->first_name);
                $last = trim((string) $this->last_name);
                $full = trim("{$first} {$last}");

                return $full !== '' ? $full : ($this->name ?: $this->mobile);
            }
        );
    }

    /**
     * Roles relationship.
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'role_user')
            ->withPivot(['status', 'assigned_by', 'assigned_at'])
            ->withTimestamps();
    }

    /**
     * Active roles relationship.
     */
    public function activeRoles(): BelongsToMany
    {
        return $this->roles()->wherePivot('status', 'active');
    }

    /**
     * Check if user has a specific role.
     */
    public function hasRole(string $roleKey): bool
    {
        return $this->activeRoles->contains('key', $roleKey);
    }

    /**
     * User menu overrides.
     */
    public function menuOverrides(): HasMany
    {
        return $this->hasMany(UserMenuOverride::class);
    }

    /**
     * Member profile.
     */
    public function memberProfile(): HasOne
    {
        return $this->hasOne(MemberProfile::class);
    }

    /**
     * Trainer profile.
     */
    public function trainerProfile(): HasOne
    {
        return $this->hasOne(TrainerProfile::class);
    }

    /**
     * Memberships.
     */
    public function memberships(): HasMany
    {
        return $this->hasMany(Membership::class, 'member_id');
    }

    /**
     * Active membership.
     */
    public function activeMembership(): HasOne
    {
        return $this->hasOne(Membership::class, 'member_id')
            ->where('status', 'active')
            ->where('ends_at', '>=', now())
            ->latestOfMany();
    }

    /**
     * Check if member is VIP.
     */
    public function isVip(): bool
    {
        return $this->memberProfile?->level === 'vip';
    }

    /**
     * Attendances.
     */
    public function attendances(): HasMany
    {
        return $this->hasMany(Attendance::class, 'member_id');
    }

    /**
     * Workout plans as member.
     */
    public function workoutPlans(): HasMany
    {
        return $this->hasMany(WorkoutPlan::class, 'member_id');
    }

    /**
     * Workout plans as trainer.
     */
    public function trainerWorkoutPlans(): HasMany
    {
        return $this->hasMany(WorkoutPlan::class, 'trainer_id');
    }

    /**
     * Progress logs.
     */
    public function progressLogs(): HasMany
    {
        return $this->hasMany(ProgressLog::class, 'member_id');
    }

    /**
     * Orders as customer.
     */
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'customer_id');
    }

    /**
     * Bookings as member.
     */
    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class, 'member_id');
    }

    /**
     * In-app notifications.
     */
    public function appNotifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }

    /**
     * Get active role key from session or first role.
     */
    public function currentRoleKey(): ?string
    {
        $sessionRole = session('active_role');
        $activeKeys = $this->activeRoles->pluck('key')->all();

        if ($sessionRole && in_array($sessionRole, $activeKeys, true)) {
            return $sessionRole;
        }

        // Default to super_admin or manager or first active role
        if (in_array('super_admin', $activeKeys, true)) {
            return 'super_admin';
        }

        return $activeKeys[0] ?? null;
    }

    /**
     * Check dynamic menu access for current active role.
     */
    public function canAccessMenu(string $menuKey, ?string $roleKey = null): bool
    {
        $roleKey ??= $this->currentRoleKey();

        // Rule 1: super_admin always allowed
        if ($roleKey === 'super_admin') {
            return true;
        }

        $menu = Menu::where('key', $menuKey)->first();
        if (! $menu) {
            return false;
        }

        // Rule 2: User-menu override
        $override = $this->menuOverrides()->where('menu_id', $menu->id)->first();
        if ($override) {
            return $override->effect === 'allow';
        }

        // Rule 3: Role menu check
        $role = Role::where('key', $roleKey)->first();
        if (! $role) {
            return false;
        }

        return $role->menus()->where('menus.id', $menu->id)->exists();
    }
}
