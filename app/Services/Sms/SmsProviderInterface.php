<?php

namespace App\Services\Sms;

interface SmsProviderInterface
{
    /**
     * Send an SMS message to a mobile number.
     *
     * @param  array<string, mixed>  $meta
     */
    public function send(string $mobile, string $message, array $meta = []): bool;

    /**
     * Send OTP verification code pattern.
     */
    public function sendOtp(string $mobile, string $code): bool;
}
