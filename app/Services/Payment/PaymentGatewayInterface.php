<?php

namespace App\Services\Payment;

use App\Models\Payment;

interface PaymentGatewayInterface
{
    /**
     * Initiate payment request and return gateway redirect URL / authority.
     *
     * @return array{success: bool, url?: string, authority?: string, message?: string}
     */
    public function request(Payment $payment, string $callbackUrl): array;

    /**
     * Verify payment on callback.
     *
     * @param  array<string, mixed>  $params
     * @return array{success: bool, ref_id?: string, tracking_code?: string, message?: string}
     */
    public function verify(Payment $payment, array $params): array;
}
