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
        Schema::create('trainer_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained('users')->cascadeOnDelete();
            $table->text('bio')->nullable();
            $table->json('specialties')->nullable();
            $table->json('certificates')->nullable();
            $table->string('photo')->nullable();
            $table->decimal('commission_percent', 5, 2)->default(50.00); // کمیسیون متغیر به ازای هر مربی
            $table->boolean('is_public')->default(true);
            $table->timestamps();
        });

        Schema::create('trainer_students', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trainer_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('member_id')->constrained('users')->cascadeOnDelete();
            $table->string('status', 20)->default('active'); // active, ended
            $table->timestamp('started_at')->useCurrent();
            $table->timestamp('ended_at')->nullable();
            $table->timestamps();
        });

        Schema::create('trainer_incomes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('trainer_id')->constrained('users')->cascadeOnDelete();
            $table->string('source_type', 50); // membership, workout_plan, service
            $table->unsignedBigInteger('source_id')->nullable();
            $table->unsignedBigInteger('amount');
            $table->unsignedBigInteger('commission');
            $table->string('status', 20)->default('pending'); // pending, settled
            $table->timestamp('settled_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trainer_incomes');
        Schema::dropIfExists('trainer_students');
        Schema::dropIfExists('trainer_profiles');
    }
};
