<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WorkoutPlan extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'trainer_id',
        'title',
        'type', // 'workout', 'diet'
        'starts_at',
        'ends_at',
        'status', // 'active', 'completed', 'archived'
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'starts_at' => 'date',
            'ends_at' => 'date',
        ];
    }

    public function member(): BelongsTo
    {
        return $this->belongsTo(User::class, 'member_id');
    }

    public function trainer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'trainer_id');
    }

    public function items(): HasMany
    {
        return $this->hasMany(WorkoutPlanItem::class)->orderBy('sort');
    }
}
