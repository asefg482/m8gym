<?php

namespace App\Services\Sms;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Throwable;

class IpPanelSmsProvider implements SmsProviderInterface
{
    public function __construct(
        protected string $baseUrl,
        protected string $apiToken,
        protected string $fromNumber,
        protected string $otpPatternCode,
    ) {}

    /**
     * Send an SMS message to a mobile number.
     *
     * @param  array<string, mixed>  $meta
     */
    public function send(string $mobile, string $message, array $meta = []): bool
    {
        $recipient = $this->formatRecipient($mobile);
        $patternCode = $meta['pattern_code'] ?? $meta['code'] ?? null;

        if ($patternCode) {
            $params = $meta['params'] ?? ['message' => $message];

            return $this->sendPattern($recipient, (string) $patternCode, $params);
        }

        $payload = [
            'sending_type' => 'webservice',
            'from_number' => $this->fromNumber,
            'recipients' => [$recipient],
            'message' => $message,
        ];

        return $this->executeRequest($payload);
    }

    /**
     * Send OTP verification code pattern.
     */
    public function sendOtp(string $mobile, string $code): bool
    {
        $recipient = $this->formatRecipient($mobile);
        $intCode = is_numeric($code) ? (int) $code : $code;

        return $this->sendPattern($recipient, $this->otpPatternCode, [
            'code' => $intCode,
        ]);
    }

    /**
     * Send SMS using pre-defined pattern code.
     *
     * @param  array<string, mixed>  $params
     */
    public function sendPattern(string $recipient, string $patternCode, array $params = []): bool
    {
        $payload = [
            'sending_type' => 'pattern',
            'from_number' => $this->fromNumber,
            'code' => $patternCode,
            'recipients' => [$recipient],
            'params' => $params,
        ];

        return $this->executeRequest($payload);
    }

    /**
     * Execute HTTP request to IPPanel edge API.
     *
     * @param  array<string, mixed>  $data
     */
    protected function executeRequest(array $data): bool
    {
        $url = rtrim($this->baseUrl, '/').'/api/send';

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => $this->apiToken,
            ])->timeout(10)->post($url, $data);

            if ($response->successful()) {
                Log::info('IPPanel SMS request successful', [
                    'status' => $response->status(),
                    'recipients' => $data['recipients'] ?? [],
                ]);

                return true;
            }

            Log::error('IPPanel SMS request returned error status', [
                'status' => $response->status(),
                'body' => $response->body(),
                'data' => $data,
            ]);

            return false;
        } catch (Throwable $e) {
            Log::error('IPPanel SMS connection failed', [
                'error' => $e->getMessage(),
                'recipients' => $data['recipients'] ?? [],
            ]);

            return false;
        }
    }

    /**
     * Format mobile number to international format with +98 prefix.
     */
    protected function formatRecipient(string $mobile): string
    {
        $digits = preg_replace('/[^0-9]/', '', $mobile);

        if (str_starts_with($digits, '09')) {
            return '+98'.substr($digits, 1);
        }

        if (str_starts_with($digits, '98')) {
            return '+'.$digits;
        }

        if (str_starts_with($mobile, '+')) {
            return $mobile;
        }

        return '+98'.ltrim($digits, '0');
    }
}
