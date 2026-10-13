<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'payable_type',
        'payable_id',
        'user_id',
        'gateway', // 'zarinpal', 'offline', 'sandbox'
        'method', // 'online', 'pos', 'cash', 'card_transfer'
        'amount',
        'status', // 'pending', 'paid', 'failed', 'refunded'
        'ref_id',
        'tracking_code',
        'paid_at',
        'card_number',
        'receipt_image',
        'verified_by',
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'integer',
            'paid_at' => 'datetime',
        ];
    }

    public function payable(): MorphTo
    {
        return $this->morphTo();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function verifier(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by');
    }
}
