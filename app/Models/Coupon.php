<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'type', // 'percent', 'fixed'
        'value',
        'min_amount',
        'usage_limit',
        'used_count',
        'valid_from',
        'valid_to',
        'applies_to', // 'all', 'shop', 'buffet', 'service', 'membership'
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'value' => 'integer',
            'min_amount' => 'integer',
            'usage_limit' => 'integer',
            'used_count' => 'integer',
            'valid_from' => 'datetime',
            'valid_to' => 'datetime',
            'is_active' => 'boolean',
        ];
    }

    /**
     * Calculate discount for a given amount and scope.
     *
     * @return array{valid: bool, discount: int, message: string}
     */
    public function calculateDiscount(int $amount, string $scope = 'all'): array
    {
        if (! $this->is_active) {
            return ['valid' => false, 'discount' => 0, 'message' => 'کد تخفیف غیرفعال است.'];
        }

        if ($this->valid_from && $this->valid_from->isFuture()) {
            return ['valid' => false, 'discount' => 0, 'message' => 'کد تخفیف هنوز شروع نشده است.'];
        }

        if ($this->valid_to && $this->valid_to->isPast()) {
            return ['valid' => false, 'discount' => 0, 'message' => 'کد تخفیف منقضی شده است.'];
        }

        if ($this->usage_limit && $this->used_count >= $this->usage_limit) {
            return ['valid' => false, 'discount' => 0, 'message' => 'ظرفیت استفاده از این کد تخفیف به پایان رسیده است.'];
        }

        if ($this->applies_to !== 'all' && $this->applies_to !== $scope) {
            return ['valid' => false, 'discount' => 0, 'message' => 'این کد تخفیف برای این بخش معتبر نیست.'];
        }

        if ($amount < $this->min_amount) {
            return ['valid' => false, 'discount' => 0, 'message' => 'حداقل مبلغ سفارش برای استفاده از این کد رعایت نشده است.'];
        }

        $discount = $this->type === 'percent'
            ? (int) round(($amount * $this->value) / 100)
            : min($this->value, $amount);

        return [
            'valid' => true,
            'discount' => $discount,
            'message' => 'کد تخفیف اعمال شد.',
        ];
    }
}
