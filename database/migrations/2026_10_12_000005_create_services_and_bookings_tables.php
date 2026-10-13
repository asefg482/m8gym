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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('category', 50)->default('massage'); // massage, hairdresser, spa
            $table->string('title');
            $table->text('description')->nullable();
            $table->integer('duration_min')->default(45);
            $table->unsignedBigInteger('price');
            $table->boolean('is_active')->default(true);
            $table->string('image')->nullable();
            $table->timestamps();
        });

        Schema::create('service_providers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->unique(['user_id', 'service_id']);
        });

        Schema::create('provider_schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_id')->constrained('users')->cascadeOnDelete();
            $table->integer('weekday'); // 0 = شنبه تا 6 = جمعه
            $table->string('start_time', 10)->default('09:00');
            $table->string('end_time', 10)->default('21:00');
            $table->timestamps();
        });

        Schema::create('provider_time_offs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('provider_id')->constrained('users')->cascadeOnDelete();
            $table->date('date');
            $table->string('start_time', 10)->nullable();
            $table->string('end_time', 10)->nullable();
            $table->string('note')->nullable();
            $table->timestamps();
        });

        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete();
            $table->foreignId('provider_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('starts_at');
            $table->timestamp('ends_at');
            $table->string('status', 20)->default('pending'); // pending, confirmed, completed, cancelled, no_show
            $table->unsignedBigInteger('price');
            $table->string('payment_status', 20)->default('pending'); // pending, paid
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
        Schema::dropIfExists('provider_time_offs');
        Schema::dropIfExists('provider_schedules');
        Schema::dropIfExists('service_providers');
        Schema::dropIfExists('services');
    }
};
