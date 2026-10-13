<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MembershipPlan extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'duration_days',
        'sessions_limit',
        'price',
        'benefits',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'duration_days' => 'integer',
            'sessions_limit' => 'integer',
            'price' => 'integer',
            'benefits' => 'array',
            'is_active' => 'boolean',
        ];
    }

    public function memberships(): HasMany
    {
        return $this->hasMany(Membership::class, 'plan_id');
    }
}
