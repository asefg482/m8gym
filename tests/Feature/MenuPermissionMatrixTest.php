<?php

namespace Tests\Feature;

use App\Models\Menu;
use App\Models\Role;
use App\Models\User;
use App\Models\UserMenuOverride;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MenuPermissionMatrixTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DatabaseSeeder::class);
    }

    public function test_super_admin_has_unrestricted_access_to_all_panel_routes(): void
    {
        $admin = User::where('mobile', '09111234567')->first();
        $this->actingAs($admin);
        session(['active_role' => 'super_admin']);

        // Check various panel dashboards
        $this->get('/panel/super_admin/dashboard')->assertStatus(200);
        $this->get('/panel/super_admin/users')->assertStatus(200);
        $this->get('/panel/manager/matrix')->assertStatus(200);
        $this->get('/panel/shop/dashboard')->assertStatus(200);
        $this->get('/panel/buffet/dashboard')->assertStatus(200);
    }

    public function test_role_cannot_access_unauthorized_menu_route(): void
    {
        // Shop manager trying to access buffet dashboard
        $shopUser = User::where('mobile', '09114445555')->first();
        $this->actingAs($shopUser);
        session(['active_role' => 'shop']);

        $response = $this->get('/panel/buffet/dashboard');
        $response->assertStatus(403);

        // Member trying to access super_admin dashboard
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);
        session(['active_role' => 'member']);

        $response2 = $this->get('/panel/super_admin/dashboard');
        $response2->assertStatus(403);
    }

    public function test_manager_can_update_role_menu_matrix(): void
    {
        $manager = User::where('mobile', '09112223333')->first();
        $this->actingAs($manager);
        session(['active_role' => 'manager']);

        $trainerRole = Role::where('key', 'trainer')->first();
        $shopDashboardMenu = Menu::where('key', 'shop.dashboard')->first();

        // Initially trainer cannot access shop dashboard
        $this->assertFalse($trainerRole->menus()->where('menus.id', $shopDashboardMenu->id)->exists());

        // Update matrix to give trainer access to shop dashboard
        $currentTrainerMenus = $trainerRole->menus->pluck('id')->all();
        $newTrainerMenus = array_merge($currentTrainerMenus, [$shopDashboardMenu->id]);

        $response = $this->post('/panel/manager/matrix', [
            'matrix' => [
                $trainerRole->id => $newTrainerMenus,
            ],
        ]);

        $response->assertRedirect();

        // Verify in database
        $this->assertTrue($trainerRole->fresh()->menus()->where('menus.id', $shopDashboardMenu->id)->exists());
    }

    public function test_user_specific_menu_override_allow(): void
    {
        // Member user normally does not have access to shop POS
        $member = User::where('mobile', '09118889999')->first();
        $this->actingAs($member);
        session(['active_role' => 'member']);

        $this->get('/panel/shop/pos')->assertStatus(403);

        // Manager gives explicit override 'allow'
        $manager = User::where('mobile', '09112223333')->first();
        $this->actingAs($manager);
        session(['active_role' => 'manager']);

        $shopPosMenu = Menu::where('key', 'shop.pos')->first();

        $response = $this->post("/panel/manager/matrix/user/{$member->id}", [
            'menu_id' => $shopPosMenu->id,
            'effect' => 'allow',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('user_menu_overrides', [
            'user_id' => $member->id,
            'menu_id' => $shopPosMenu->id,
            'effect' => 'allow',
        ]);

        // Member now tries accessing shop pos
        $this->actingAs($member);
        session(['active_role' => 'member']);
        $this->get('/panel/shop/pos')->assertStatus(200);
    }

    public function test_user_specific_menu_override_deny(): void
    {
        // Trainer normally has access to workout_plans
        $trainer = User::where('mobile', '09113334444')->first();
        $this->actingAs($trainer);
        session(['active_role' => 'trainer']);

        $this->get('/panel/trainer/workout_plans')->assertStatus(200);

        // Apply override 'deny'
        $workoutPlansMenu = Menu::where('key', 'trainer.workout_plans')->first();
        UserMenuOverride::create([
            'user_id' => $trainer->id,
            'menu_id' => $workoutPlansMenu->id,
            'effect' => 'deny',
        ]);

        // Now trainer is blocked
        $this->get('/panel/trainer/workout_plans')->assertStatus(403);
    }
}
