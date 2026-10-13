<?php

namespace App\Services\Payment;

use App\Models\Payment;

class SandboxPaymentGateway implements PaymentGatewayInterface
{
    public function request(Payment $payment, string $callbackUrl): array
    {
        $authority = 'M8-'.uniqid().'-'.random_int(1000, 9999);

        $payment->update([
            'ref_id' => $authority,
        ]);

        $separator = str_contains($callbackUrl, '?') ? '&' : '?';
        $redirectUrl = $callbackUrl.$separator.'Authority='.$authority.'&Status=OK';

        return [
            'success' => true,
            'url' => $redirectUrl,
            'authority' => $authority,
            'message' => 'انتقال به درگاه تستی امن M8',
        ];
    }

    public function verify(Payment $payment, array $params): array
    {
        $status = $params['Status'] ?? null;
        if ($status !== 'OK') {
            return [
                'success' => false,
                'message' => 'پرداخت توسط کاربر لغو شد یا ناموفق بود.',
            ];
        }

        $trackingCode = (string) random_int(10000000, 99999999);

        return [
            'success' => true,
            'ref_id' => $payment->ref_id ?: (string) random_int(100000, 999999),
            'tracking_code' => $trackingCode,
            'message' => 'پرداخت با موفقیت انجام شد.',
        ];
    }
}
