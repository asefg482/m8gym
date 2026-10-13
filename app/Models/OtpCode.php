<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class OtpCode extends Model
{
    use HasFactory;

    protected $fillable = [
        'mobile',
        'code_hash',
        'expires_at',
        'attempts',
        'ip',
        'used_at',
    ];

    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
            'used_at' => 'datetime',
            'attempts' => 'integer',
        ];
    }

    /**
     * Check rate limits: max 5 requests per hour for mobile, max 20 for IP.
     */
    public static function isRateLimited(string $mobile, ?string $ip): bool
    {
        $oneHourAgo = now()->subHour();

        $mobileCount = static::where('mobile', $mobile)
            ->where('created_at', '>=', $oneHourAgo)
            ->count();

        if ($mobileCount >= 5) {
            return true;
        }

        if ($ip) {
            $ipCount = static::where('ip', $ip)
                ->where('created_at', '>=', $oneHourAgo)
                ->count();

            if ($ipCount >= 20) {
                return true;
            }
        }

        return false;
    }

    /**
     * Generate new OTP code.
     *
     * @return array{code: string, record: self}
     */
    public static function createCode(string $mobile, ?string $ip): array
    {
        // 5-digit OTP code (e.g., 12345 or random)
        $code = (string) random_int(10000, 99999);

        // Invalidate any existing unused codes
        static::where('mobile', $mobile)
            ->whereNull('used_at')
            ->delete();

        $record = static::create([
            'mobile' => $mobile,
            'code_hash' => Hash::make($code),
            'expires_at' => now()->addMinutes(2),
            'attempts' => 0,
            'ip' => $ip,
        ]);

        return [
            'code' => $code,
            'record' => $record,
        ];
    }

    /**
     * Verify OTP code.
     *
     * @return array{success: bool, message: string}
     */
    public static function verifyCode(string $mobile, string $code): array
    {
        $otp = static::where('mobile', $mobile)
            ->whereNull('used_at')
            ->latest()
            ->first();

        if (! $otp) {
            return [
                'success' => false,
                'message' => 'کد تایید یافت نشد یا منقضی شده است. لطفا مجددا درخواست دهید.',
            ];
        }

        if ($otp->attempts >= 5) {
            return [
                'success' => false,
                'message' => 'تعداد تلاش‌های ناموفق بیش از حد مجاز بوده است. لطفا مجددا کد دریافت کنید.',
            ];
        }

        if ($otp->expires_at->isPast()) {
            return [
                'success' => false,
                'message' => 'کد تایید منقضی شده است.',
            ];
        }

        if (! Hash::check($code, $otp->code_hash)) {
            $otp->increment('attempts');

            return [
                'success' => false,
                'message' => 'کد تایید وارد شده نادرست است.',
            ];
        }

        $otp->update(['used_at' => now()]);

        return [
            'success' => true,
            'message' => 'کد با موفقیت تایید شد.',
        ];
    }
}
