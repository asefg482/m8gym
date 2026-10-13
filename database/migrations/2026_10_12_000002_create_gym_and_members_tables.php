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
        Schema::create('member_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained('users')->cascadeOnDelete();
            $table->decimal('height', 5, 2)->nullable();
            $table->decimal('weight', 5, 2)->nullable();
            $table->text('goals')->nullable();
            $table->text('medical_notes')->nullable();
            $table->string('emergency_contact')->nullable();
            $table->string('level', 20)->default('normal'); // normal, vip
            $table->timestamps();
        });

        Schema::create('membership_plans', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('duration_days');
            $table->integer('sessions_limit')->nullable();
            $table->unsignedBigInteger('price');
            $table->json('benefits')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('plan_id')->constrained('membership_plans')->cascadeOnDelete();
            $table->timestamp('starts_at');
            $table->timestamp('ends_at');
            $table->string('status', 20)->default('active'); // active, expired, cancelled
            $table->unsignedBigInteger('paid_amount')->default(0);
            $table->timestamps();
        });

        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained('users')->cascadeOnDelete();
            $table->date('date')->index();
            $table->timestamp('checkin_at');
            $table->timestamp('checkout_at')->nullable();
            $table->string('method', 20)->default('reception'); // reception, qr, manual
            $table->foreignId('recorded_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });

        Schema::create('workout_plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('trainer_id')->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->string('type', 20)->default('workout'); // workout, diet
            $table->date('starts_at')->nullable();
            $table->date('ends_at')->nullable();
            $table->string('status', 20)->default('active'); // active, completed, archived
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        Schema::create('workout_plan_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('workout_plan_id')->constrained('workout_plans')->cascadeOnDelete();
            $table->string('day'); // شنبه، روز ۱، و غیره
            $table->string('title'); // پرس سینه، فیله، صبحانه
            $table->json('details')->nullable();
            $table->integer('sets')->nullable();
            $table->string('reps')->nullable(); // e.g. "12-10-8" or "100 گرم"
            $table->text('notes')->nullable();
            $table->integer('sort')->default(0);
            $table->timestamps();
        });

        Schema::create('progress_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('member_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('recorded_by')->nullable()->constrained('users')->nullOnDelete();
            $table->date('date')->index();
            $table->decimal('weight', 5, 2)->nullable();
            $table->decimal('body_fat', 5, 2)->nullable();
            $table->json('measurements')->nullable();
            $table->json('photos')->nullable();
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('progress_logs');
        Schema::dropIfExists('workout_plan_items');
        Schema::dropIfExists('workout_plans');
        Schema::dropIfExists('attendances');
        Schema::dropIfExists('memberships');
        Schema::dropIfExists('membership_plans');
        Schema::dropIfExists('member_profiles');
    }
};
