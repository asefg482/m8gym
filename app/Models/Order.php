<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_no',
        'customer_id',
        'scope', // 'shop', 'buffet'
        'status', // 'new', 'preparing', 'ready', 'delivered', 'cancelled'
        'subtotal',
        'discount',
        'total',
        'payment_status', // 'pending', 'paid', 'failed'
        'payment_method', // 'online', 'pos', 'cash', 'card_transfer'
        'delivery_type', // 'dine_in', 'pickup', 'delivery'
        'shipping_address',
        'shipping_mobile',
        'note',
    ];

    protected function casts(): array
    {
        return [
            'subtotal' => 'integer',
            'discount' => 'integer',
            'total' => 'integer',
        ];
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public static function generateOrderNo(string $prefix = 'ORD'): string
    {
        return $prefix.'-'.date('Ymd').'-'.random_int(1000, 9999);
    }
}
