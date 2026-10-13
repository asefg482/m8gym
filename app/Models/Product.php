<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'scope', // 'shop', 'buffet'
        'category_id',
        'title',
        'slug',
        'description',
        'price',
        'discount_price',
        'stock',
        'sku',
        'images',
        'nutritional_info',
        'is_active',
        'seller_user_id',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'integer',
            'discount_price' => 'integer',
            'stock' => 'integer',
            'images' => 'array',
            'nutritional_info' => 'array',
            'is_active' => 'boolean',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function seller(): BelongsTo
    {
        return $this->belongsTo(User::class, 'seller_user_id');
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeShop(Builder $query): Builder
    {
        return $query->where('scope', 'shop');
    }

    public function scopeBuffet(Builder $query): Builder
    {
        return $query->where('scope', 'buffet');
    }

    public function getEffectivePriceAttribute(): int
    {
        return $this->discount_price && $this->discount_price < $this->price
            ? $this->discount_price
            : $this->price;
    }
}
