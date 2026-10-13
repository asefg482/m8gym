<?php

namespace Tests\Unit;

use App\Services\Sms\IpPanelSmsProvider;
use App\Services\Sms\SmsManager;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class IpPanelSmsProviderTest extends TestCase
{
    protected string $baseUrl = 'https://edge.ippanel.com/v1';

    protected string $apiToken = 'test-token-12345';

    protected string $fromNumber = '+983000505';

    protected string $otpPatternCode = 'j8wj5i963z9iijr';

    protected function createProvider(): IpPanelSmsProvider
    {
        return new IpPanelSmsProvider(
            baseUrl: $this->baseUrl,
            apiToken: $this->apiToken,
            fromNumber: $this->fromNumber,
            otpPatternCode: $this->otpPatternCode,
        );
    }

    public function test_send_otp_sends_pattern_request_to_ippanel(): void
    {
        Http::fake([
            'https://edge.ippanel.com/v1/api/send' => Http::response(['status' => 'OK', 'bulk_id' => 123456], 200),
        ]);

        $provider = $this->createProvider();
        $result = $provider->sendOtp('09121112233', '54321');

        $this->assertTrue($result);

        Http::assertSent(function ($request) {
            $data = $request->data();

            return $request->url() === 'https://edge.ippanel.com/v1/api/send'
                && $request->hasHeader('Authorization', 'test-token-12345')
                && $request->hasHeader('Content-Type', 'application/json')
                && $data['sending_type'] === 'pattern'
                && $data['from_number'] === '+983000505'
                && $data['code'] === 'j8wj5i963z9iijr'
                && $data['recipients'] === ['+989121112233']
                && $data['params']['code'] === 54321;
        });
    }

    public function test_send_custom_pattern_with_meta(): void
    {
        Http::fake([
            'https://edge.ippanel.com/v1/api/send' => Http::response(['status' => 'OK'], 200),
        ]);

        $provider = $this->createProvider();
        $result = $provider->send('09120000000', '', [
            'pattern_code' => 'welcome_pattern',
            'params' => ['name' => 'علیرضا'],
        ]);

        $this->assertTrue($result);

        Http::assertSent(function ($request) {
            $data = $request->data();

            return $data['sending_type'] === 'pattern'
                && $data['code'] === 'welcome_pattern'
                && $data['recipients'] === ['+989120000000']
                && $data['params']['name'] === 'علیرضا';
        });
    }

    public function test_send_otp_returns_false_on_api_error(): void
    {
        Http::fake([
            'https://edge.ippanel.com/v1/api/send' => Http::response([
                'message' => 'pattern not found',
            ], 400),
        ]);

        $provider = $this->createProvider();
        $result = $provider->sendOtp('09121112233', '12345');

        $this->assertFalse($result);
    }

    public function test_sms_manager_resolves_ippanel_driver_from_config(): void
    {
        config([
            'sms.drivers.ippanel' => [
                'base_url' => 'https://edge.ippanel.com/v1',
                'api_token' => 'sample-token',
                'from_number' => '+983000505',
                'otp_pattern_code' => 'j8wj5i963z9iijr',
            ],
        ]);

        $manager = app(SmsManager::class);
        $driver = $manager->driver('ippanel');

        $this->assertInstanceOf(IpPanelSmsProvider::class, $driver);
    }
}
