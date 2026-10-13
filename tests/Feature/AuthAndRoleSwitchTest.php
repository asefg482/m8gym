<?php

namespace Tests\Feature;

use App\Models\OtpCode;
use App\Models\Role;
use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthAndRoleSwitchTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DatabaseSeeder::class);
    }

    public function test_login_page_renders_successfully(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Auth/Login'));
    }

    public function test_send_otp_validates_mobile_number(): void
    {
        $response = $this->postJson('/login/send-otp', [
            'mobile' => 'invalid-phone',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['mobile']);
    }

    public function test_send_otp_success_for_valid_mobile(): void
    {
        $response = $this->postJson('/login/send-otp', [
            'mobile' => '09129876543',
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        $this->assertDatabaseHas('otp_codes', [
            'mobile' => '09129876543',
        ]);
    }

    public function test_send_otp_rate_limiting(): void
    {
        $mobile = '09351234567';

        // Simulate 5 requests
        for ($i = 0; $i < 5; $i++) {
            OtpCode::create([
                'mobile' => $mobile,
                'code_hash' => Hash::make('12345'),
                'expires_at' => now()->addMinutes(2),
                'attempts' => 0,
                'ip' => '127.0.0.1',
            ]);
        }

        // 6th request within an hour should be rate-limited
        $response = $this->postJson('/login/send-otp', [
            'mobile' => $mobile,
        ]);

        $response->assertStatus(429);
    }

    public function test_verify_otp_registers_new_user_with_member_role(): void
    {
        $mobile = '09199998877';
        $code = '55555';

        OtpCode::create([
            'mobile' => $mobile,
            'code_hash' => Hash::make($code),
            'expires_at' => now()->addMinutes(2),
            'attempts' => 0,
            'ip' => '127.0.0.1',
        ]);

        $response = $this->postJson('/login/verify-otp', [
            'mobile' => $mobile,
            'code' => $code,
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'redirect_url' => '/panel/member/dashboard',
            ]);

        $this->assertAuthenticated();

        $user = User::where('mobile', $mobile)->first();
        $this->assertNotNull($user);
        $this->assertTrue($user->hasRole('member'));
        $this->assertEquals('member', session('active_role'));
    }

    public function test_verify_otp_fails_with_invalid_code(): void
    {
        $mobile = '09121112233';
        OtpCode::create([
            'mobile' => $mobile,
            'code_hash' => Hash::make('11111'),
            'expires_at' => now()->addMinutes(2),
            'attempts' => 0,
            'ip' => '127.0.0.1',
        ]);

        $response = $this->postJson('/login/verify-otp', [
            'mobile' => $mobile,
            'code' => '99999',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['code']);

        $this->assertGuest();
    }

    public function test_multi_role_user_redirected_to_role_selection(): void
    {
        $user = User::where('mobile', '09119990000')->first(); // User with trainer & member roles from seeder
        $this->assertNotNull($user);

        $code = '88888';
        OtpCode::create([
            'mobile' => $user->mobile,
            'code_hash' => Hash::make($code),
            'expires_at' => now()->addMinutes(2),
            'attempts' => 0,
            'ip' => '127.0.0.1',
        ]);

        $response = $this->postJson('/login/verify-otp', [
            'mobile' => $user->mobile,
            'code' => $code,
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'redirect_url' => '/select-role',
            ]);

        $this->assertAuthenticated();
    }

    public function test_switch_role_updates_session_and_redirects(): void
    {
        $user = User::where('mobile', '09119990000')->first();
        $this->actingAs($user);
        session(['active_role' => 'member']);

        // Switch to trainer
        $response = $this->post('/switch-role', [
            'role_key' => 'trainer',
        ]);

        $response->assertRedirect('/panel/trainer/dashboard');
        $this->assertEquals('trainer', session('active_role'));

        // Cannot switch to role user does not possess (e.g. super_admin)
        $invalidResponse = $this->post('/switch-role', [
            'role_key' => 'super_admin',
        ]);

        $invalidResponse->assertRedirect();
        $this->assertEquals('trainer', session('active_role'));
    }

    public function test_logout_clears_session(): void
    {
        $user = User::where('mobile', '09118889999')->first();
        $this->actingAs($user);
        session(['active_role' => 'member']);

        $response = $this->post('/logout');

        $response->assertRedirect('/');
        $this->assertGuest();
    }
}
