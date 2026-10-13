<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsBanner extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'image',
        'link',
        'badge',
        'scope', // 'home', 'cafe', 'shop', 'membership'
        'starts_at',
        'ends_at',
        'sort',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'starts_at' => 'datetime',
            'ends_at' => 'datetime',
            'sort' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
