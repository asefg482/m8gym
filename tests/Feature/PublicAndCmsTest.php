<?php

namespace Tests\Feature;

use App\Models\Product;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicAndCmsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(DatabaseSeeder::class);
    }

    public function test_landing_page_renders_with_gym_data(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Public/Home')
            ->has('plans')
            ->has('trainers')
            ->has('banners')
            ->has('faqs')
            ->has('services')
            ->has('gymSettings')
        );
    }

    public function test_public_cafe_page_renders(): void
    {
        $response = $this->get('/cafe');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Public/Cafe')
            ->has('banners')
            ->has('categories')
        );
    }

    public function test_public_shop_page_renders(): void
    {
        $response = $this->get('/shop');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Public/Shop')
            ->has('categories')
            ->has('products')
        );
    }

    public function test_product_detail_page_renders(): void
    {
        $product = Product::where('scope', 'shop')->first();
        $this->assertNotNull($product);

        $response = $this->get("/shop/{$product->slug}");

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Public/ProductDetail')
            ->where('product.id', $product->id)
        );
    }

    public function test_public_services_pages_render(): void
    {
        $massageResponse = $this->get('/massage');
        $massageResponse->assertStatus(200);
        $massageResponse->assertInertia(fn ($page) => $page->component('Public/Massage'));

        $hairdresserResponse = $this->get('/hairdresser');
        $hairdresserResponse->assertStatus(200);
        $hairdresserResponse->assertInertia(fn ($page) => $page->component('Public/Hairdresser'));
    }

    public function test_free_consultation_lead_submission(): void
    {
        $leadData = [
            'name' => 'علیرضا حسینی',
            'mobile' => '09123334455',
            'message' => 'درخواست مشاوره جهت ثبت نام دوره بدنسازی VIP',
        ];

        $response = $this->post('/lead', $leadData);

        $response->assertRedirect();
        $this->assertDatabaseHas('leads', [
            'name' => 'علیرضا حسینی',
            'mobile' => '09123334455',
            'status' => 'new',
        ]);
    }

    public function test_invalid_lead_submission(): void
    {
        $response = $this->post('/lead', [
            'name' => '',
            'mobile' => '123', // Invalid format
        ]);

        $response->assertSessionHasErrors(['name', 'mobile']);
    }
}
