<?php

namespace App\Services\Sms;

use Illuminate\Support\Facades\Log;

class LogSmsProvider implements SmsProviderInterface
{
    public function send(string $mobile, string $message, array $meta = []): bool
    {
        Log::info("SMS to {$mobile}: {$message}", $meta);

        return true;
    }

    public function sendOtp(string $mobile, string $code): bool
    {
        Log::info("M8 Gym OTP for {$mobile}: {$code} (Expires in 2 minutes)");

        return true;
    }
}
