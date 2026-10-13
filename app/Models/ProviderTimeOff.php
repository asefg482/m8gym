<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProviderTimeOff extends Model
{
    use HasFactory;

    protected $table = 'provider_time_offs';

    protected $fillable = [
        'provider_id',
        'date',
        'start_time',
        'end_time',
        'note',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'date',
        ];
    }

    public function provider(): BelongsTo
    {
        return $this->belongsTo(User::class, 'provider_id');
    }
}
