<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProgressLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'recorded_by',
        'date',
        'weight',
        'body_fat',
        'measurements',
        'photos',
        'note',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
            'weight' => 'decimal:2',
            'body_fat' => 'decimal:2',
            'measurements' => 'array',
            'photos' => 'array',
        ];
    }

    public function member(): BelongsTo
    {
        return $this->belongsTo(User::class, 'member_id');
    }

    public function recorder(): BelongsTo
    {
        return $this->belongsTo(User::class, 'recorded_by');
    }
}
