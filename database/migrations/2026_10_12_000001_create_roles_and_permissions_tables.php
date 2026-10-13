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
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('key', 50)->unique();
            $table->string('title');
            $table->string('description')->nullable();
            $table->boolean('is_system')->default(true);
            $table->timestamps();
        });

        Schema::create('role_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('role_id')->constrained()->cascadeOnDelete();
            $table->string('status', 20)->default('active'); // active, inactive
            $table->foreignId('assigned_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('assigned_at')->useCurrent();
            $table->timestamps();

            $table->unique(['user_id', 'role_id']);
        });

        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('key', 100)->unique();
            $table->string('title');
            $table->string('icon')->default('layout-dashboard');
            $table->string('route')->default('/');
            $table->foreignId('parent_id')->nullable()->constrained('menus')->cascadeOnDelete();
            $table->string('panel_role_key', 50); // e.g. super_admin, manager, trainer, shop, buffet, service, member
            $table->integer('sort')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('role_menu', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained()->cascadeOnDelete();
            $table->foreignId('menu_id')->constrained()->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['role_id', 'menu_id']);
        });

        Schema::create('user_menu_overrides', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('menu_id')->constrained()->cascadeOnDelete();
            $table->string('effect', 10); // allow, deny
            $table->timestamps();

            $table->unique(['user_id', 'menu_id']);
        });

        Schema::create('otp_codes', function (Blueprint $table) {
            $table->id();
            $table->string('mobile', 20)->index();
            $table->string('code_hash');
            $table->timestamp('expires_at');
            $table->integer('attempts')->default(0);
            $table->string('ip', 45)->nullable();
            $table->timestamp('used_at')->nullable();
            $table->timestamps();
        });

        Schema::create('audit_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('role_key', 50)->nullable();
            $table->string('action', 100);
            $table->string('subject_type')->nullable();
            $table->unsignedBigInteger('subject_id')->nullable();
            $table->json('meta')->nullable();
            $table->string('ip', 45)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('audit_logs');
        Schema::dropIfExists('otp_codes');
        Schema::dropIfExists('user_menu_overrides');
        Schema::dropIfExists('role_menu');
        Schema::dropIfExists('menus');
        Schema::dropIfExists('role_user');
        Schema::dropIfExists('roles');
    }
};
