<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Membership extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'plan_id',
        'starts_at',
        'ends_at',
        'status',
        'paid_amount',
    ];

    protected function casts(): array
    {
        return [
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
            'paid_amount' => 'integer',
        ];
    }

    public function member(): BelongsTo
    {
        return $this->belongsTo(User::class, 'member_id');
    }

    public function plan(): BelongsTo
    {
        return $this->belongsTo(MembershipPlan::class, 'plan_id');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', 'active')->where('ends_at', '>=', now());
    }

    public function getDaysRemainingAttribute(): int
    {
        if ($this->ends_at->isPast()) {
            return 0;
        }

        return (int) now()->diffInDays($this->ends_at, false);
    }
}
