<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProviderSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'provider_id',
        'weekday', // 0..6
        'start_time',
        'end_time',
    ];

    protected function casts(): array
    {
        return [
            'weekday' => 'integer',
        ];
    }

    public function provider(): BelongsTo
    {
        return $this->belongsTo(User::class, 'provider_id');
    }
}
