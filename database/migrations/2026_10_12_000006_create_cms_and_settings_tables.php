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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('group', 50)->default('general');
            $table->timestamps();
        });

        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('mobile', 20);
            $table->text('message')->nullable();
            $table->string('status', 20)->default('new'); // new, contacted, closed
            $table->foreignId('assigned_to')->nullable()->constrained('users')->nullOnDelete();
            $table->text('note')->nullable();
            $table->timestamps();
        });

        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('type', 50)->default('info');
            $table->string('title');
            $table->text('body');
            $table->string('link')->nullable();
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });

        Schema::create('coupons', function (Blueprint $table) {
            $table->id();
            $table->string('code', 50)->unique();
            $table->string('type', 20)->default('percent'); // percent, fixed
            $table->unsignedBigInteger('value');
            $table->unsignedBigInteger('min_amount')->default(0);
            $table->integer('usage_limit')->nullable();
            $table->integer('used_count')->default(0);
            $table->timestamp('valid_from')->nullable();
            $table->timestamp('valid_to')->nullable();
            $table->string('applies_to', 30)->default('all'); // all, shop, buffet, service, membership
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('cms_banners', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->string('image')->nullable();
            $table->string('link')->nullable();
            $table->string('badge')->nullable();
            $table->string('scope', 30)->default('home'); // home, cafe, shop, membership
            $table->timestamp('starts_at')->nullable();
            $table->timestamp('ends_at')->nullable();
            $table->integer('sort')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('cms_faqs', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->text('answer');
            $table->string('category', 50)->default('general');
            $table->integer('sort')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cms_faqs');
        Schema::dropIfExists('cms_banners');
        Schema::dropIfExists('coupons');
        Schema::dropIfExists('notifications');
        Schema::dropIfExists('leads');
        Schema::dropIfExists('settings');
    }
};
