<?php

namespace App\Console\Commands;

use App\Services\Sms\SmsManager;
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Throwable;

#[Signature('sms:test {mobile? : شماره موبایل گیرنده (پیش‌فرض شماره ادمین)} {--code= : کد اعتبارسنجی تستی}')]
#[Description('تست زنده اتصال و ارسال پیامک OTP به پنل IPPanel')]
class TestSmsCommand extends Command
{
    public function handle(SmsManager $smsManager): int
    {
        $mobile = $this->argument('mobile') ?: config('auth.admin_mobile', env('ADMIN_MOBILE', '09029281914'));
        $code = (string) ($this->option('code') ?: random_int(10000, 99999));

        $this->info('==========================================');
        $this->info('  M8 Gym SMS Provider Diagnostics Tool    ');
        $this->info('==========================================');

        $driver = config('sms.default', 'ippanel');
        $baseUrl = config('sms.drivers.ippanel.base_url', 'https://edge.ippanel.com/v1');
        $token = config('sms.drivers.ippanel.api_token', '');
        $fromNumber = config('sms.drivers.ippanel.from_number', '+983000505');
        $patternCode = config('sms.drivers.ippanel.otp_pattern_code', 'j8wj5i963z9iijr');

        $this->table(
            ['تنظیمات', 'مقدار فعلی'],
            [
                ['Driver فعال', $driver],
                ['شماره گیرنده', $mobile],
                ['کد OTP تستی', $code],
                ['Base URL', $baseUrl],
                ['خط فرستنده (From)', $fromNumber],
                ['کد پترن (Pattern)', $patternCode],
                ['وضعیت API Token', empty($token) ? '❌ خالی است!' : '✅ تنظیم شده ('.substr($token, 0, 8).'...'.substr($token, -6).')'],
            ]
        );

        if (empty($token)) {
            $this->error('خطا: توکن IPPANEL_API_TOKEN در فایل .env یا config/sms.php مقداردهی نشده است.');

            return self::FAILURE;
        }

        $this->newLine();
        $this->line("🚀 در حال ارسال درخواست آزمایشی به {$baseUrl}/api/send...");

        $recipient = $this->formatRecipient($mobile);
        $payload = [
            'sending_type' => 'pattern',
            'from_number' => $fromNumber,
            'code' => $patternCode,
            'recipients' => [$recipient],
            'params' => [
                'code' => (int) $code,
            ],
        ];

        $startTime = microtime(true);

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
                'Authorization' => $token,
            ])->timeout(12)->post(rtrim($baseUrl, '/').'/api/send', $payload);

            $duration = round((microtime(true) - $startTime) * 1000);
            $status = $response->status();
            $body = $response->body();

            $this->newLine();
            $this->line("⏱ زمان پاسخ: {$duration} میلی‌ثانیه");
            $this->line("📡 کد وضعیت HTTP: {$status}");

            if ($response->successful()) {
                $this->info('✅ پاسخ وب‌سرویس موفقیت‌آمیز بود (200 OK)');
                $this->line("📄 بدنه پاسخ: {$body}");
                $this->newLine();
                $this->info('پیامک با موفقیت در صف ارسال پنل IPPanel قرار گرفت.');

                return self::SUCCESS;
            }

            $this->error("❌ وب‌سرویس IPPanel خطای {$status} بازگرداند.");
            $this->line("📄 بدنه پاسخ خطا: {$body}");
            $this->newLine();
            $this->warn('راهنمای رفع خطا:');

            if ($status === 401 || $status === 403) {
                $this->line('- توکن API اشتباه است، منقضی شده، یا دسترسی IP روی پنل محدود شده است.');
            } elseif ($status === 400) {
                $this->line('- پترن وجود ندارد یا هنوز تایید نشده است، یا پارامتر ارسالی با فیلد پترن تطابق ندارد.');
            }

            return self::FAILURE;
        } catch (Throwable $e) {
            $duration = round((microtime(true) - $startTime) * 1000);
            $this->newLine();
            $this->error("❌ خطا در برقراری ارتباط شبکه با سرور IPPanel بعد از {$duration} میلی‌ثانیه:");
            $this->line($e->getMessage());
            $this->newLine();
            $this->warn('دلایل احتمالی:');
            $this->line('- عدم دسترسی اینترنت سرور به دامنه edge.ippanel.com (فایروال یا فیلترینگ)');
            $this->line('- اشکال در DNS یا گواهی SSL سرور');

            return self::FAILURE;
        }
    }

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
