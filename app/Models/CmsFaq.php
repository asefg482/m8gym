<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsFaq extends Model
{
    use HasFactory;

    protected $fillable = [
        'question',
        'answer',
        'category',
        'sort',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'sort' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
