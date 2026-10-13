<?php

namespace App\Services\Sms;

use InvalidArgumentException;

class SmsManager
{
    /**
     * @var array<string, SmsProviderInterface>
     */
    protected array $drivers = [];

    public function driver(?string $name = null): SmsProviderInterface
    {
        $name ??= config('sms.default', config('services.sms.default', 'ippanel'));

        if (! isset($this->drivers[$name])) {
            $this->drivers[$name] = $this->resolve($name);
        }

        return $this->drivers[$name];
    }

    protected function resolve(string $name): SmsProviderInterface
    {
        return match ($name) {
            'ippanel' => new IpPanelSmsProvider(
                baseUrl: config('sms.drivers.ippanel.base_url', 'https://edge.ippanel.com/v1'),
                apiToken: config('sms.drivers.ippanel.api_token', ''),
                fromNumber: config('sms.drivers.ippanel.from_number', '+983000505'),
                otpPatternCode: config('sms.drivers.ippanel.otp_pattern_code', 'j8wj5i963z9iijr'),
            ),
            'log' => new LogSmsProvider,
            default => throw new InvalidArgumentException("SMS driver [{$name}] is not defined."),
        };
    }

    public function sendOtp(string $mobile, string $code): bool
    {
        return $this->driver()->sendOtp($mobile, $code);
    }

    public function send(string $mobile, string $message, array $meta = []): bool
    {
        return $this->driver()->send($mobile, $message, $meta);
    }
}
