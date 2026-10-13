<?php

namespace App\Services\Payment;

use App\Models\Payment;
use InvalidArgumentException;

class PaymentManager
{
    /**
     * @var array<string, PaymentGatewayInterface>
     */
    protected array $drivers = [];

    public function driver(?string $name = null): PaymentGatewayInterface
    {
        $name ??= config('services.payment.default', 'sandbox');

        if (! isset($this->drivers[$name])) {
            $this->drivers[$name] = $this->resolve($name);
        }

        return $this->drivers[$name];
    }

    protected function resolve(string $name): PaymentGatewayInterface
    {
        return match ($name) {
            'sandbox', 'offline' => new SandboxPaymentGateway,
            default => throw new InvalidArgumentException("Payment gateway [{$name}] is not defined."),
        };
    }

    public function request(Payment $payment, string $callbackUrl): array
    {
        return $this->driver($payment->gateway)->request($payment, $callbackUrl);
    }

    public function verify(Payment $payment, array $params): array
    {
        return $this->driver($payment->gateway)->verify($payment, $params);
    }
}
