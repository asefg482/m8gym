<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('scope', 20)->default('shop'); // shop, buffet
            $table->string('title');
            $table->foreignId('parent_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->integer('sort')->default(0);
            $table->timestamps();
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('scope', 20)->default('shop'); // shop, buffet
            $table->foreignId('category_id')->nullable()->constrained('categories')->nullOnDelete();
            $table->string('title');
            $table->string('slug')->index();
            $table->text('description')->nullable();
            $table->unsignedBigInteger('price');
            $table->unsignedBigInteger('discount_price')->nullable();
            $table->integer('stock')->default(0);
            $table->string('sku')->nullable();
            $table->json('images')->nullable();
            $table->json('nutritional_info')->nullable(); // calories, protein, carbs, fat
            $table->boolean('is_active')->default(true);
            $table->foreignId('seller_user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });

        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_no', 50)->unique();
            $table->foreignId('customer_id')->constrained('users')->cascadeOnDelete();
            $table->string('scope', 20)->default('shop'); // shop, buffet
            $table->string('status', 20)->default('new'); // new, preparing, ready, delivered, cancelled
            $table->unsignedBigInteger('subtotal');
            $table->unsignedBigInteger('discount')->default(0);
            $table->unsignedBigInteger('total');
            $table->string('payment_status', 20)->default('pending'); // pending, paid, failed
            $table->string('payment_method', 30)->default('online'); // online, pos, cash, card_transfer
            $table->string('delivery_type', 20)->default('pickup'); // dine_in, pickup, delivery (shop supports postal delivery)
            $table->text('shipping_address')->nullable();
            $table->string('shipping_mobile', 20)->nullable();
            $table->text('note')->nullable();
            $table->timestamps();
        });

        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders')->cascadeOnDelete();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->string('title_snapshot');
            $table->unsignedBigInteger('price_snapshot');
            $table->integer('qty')->default(1);
            $table->timestamps();
        });

        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('payable_type')->nullable(); // Order, Membership, Booking
            $table->unsignedBigInteger('payable_id')->nullable();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('gateway', 30)->default('sandbox'); // zarinpal, offline, sandbox
            $table->string('method', 30)->default('online'); // online, pos, cash, card_transfer
            $table->unsignedBigInteger('amount');
            $table->string('status', 20)->default('pending'); // pending, paid, failed, refunded
            $table->string('ref_id')->nullable();
            $table->string('tracking_code')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->string('card_number', 30)->nullable();
            $table->string('receipt_image')->nullable();
            $table->foreignId('verified_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
        Schema::dropIfExists('order_items');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('products');
        Schema::dropIfExists('categories');
    }
};
