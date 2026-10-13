<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WorkoutPlanItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'workout_plan_id',
        'day',
        'title',
        'details',
        'sets',
        'reps',
        'notes',
        'sort',
    ];

    protected function casts(): array
    {
        return [
            'details' => 'array',
            'sets' => 'integer',
            'sort' => 'integer',
        ];
    }

    public function workoutPlan(): BelongsTo
    {
        return $this->belongsTo(WorkoutPlan::class);
    }
}
