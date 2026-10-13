<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'category', // 'massage', 'hairdresser', 'spa'
        'title',
        'description',
        'duration_min',
        'price',
        'is_active',
        'image',
    ];

    protected function casts(): array
    {
        return [
            'duration_min' => 'integer',
            'price' => 'integer',
            'is_active' => 'boolean',
        ];
    }

    public function providers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'service_providers')
            ->withPivot('is_active')
            ->withTimestamps();
    }

    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
