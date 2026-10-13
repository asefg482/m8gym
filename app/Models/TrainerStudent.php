<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrainerStudent extends Model
{
    use HasFactory;

    protected $fillable = [
        'trainer_id',
        'member_id',
        'status', // 'active', 'ended'
        'started_at',
        'ended_at',
    ];

    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
            'ended_at' => 'datetime',
        ];
    }

    public function trainer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'trainer_id');
    }

    public function student(): BelongsTo
    {
        return $this->belongsTo(User::class, 'member_id');
    }
}
