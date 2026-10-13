<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrainerIncome extends Model
{
    use HasFactory;

    protected $fillable = [
        'trainer_id',
        'source_type',
        'source_id',
        'amount',
        'commission',
        'status', // 'pending', 'settled'
        'settled_at',
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'integer',
            'commission' => 'integer',
            'settled_at' => 'datetime',
        ];
    }

    public function trainer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'trainer_id');
    }
}
