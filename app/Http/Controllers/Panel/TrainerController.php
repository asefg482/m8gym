<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\TrainerIncome;
use App\Models\TrainerProfile;
use App\Models\TrainerStudent;
use App\Models\User;
use App\Models\WorkoutPlan;
use App\Models\WorkoutPlanItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TrainerController extends Controller
{
    /**
     * Trainer Dashboard.
     */
    public function dashboard(Request $request): Response
    {
        $trainer = $request->user();

        $activeStudentsCount = TrainerStudent::where('trainer_id', $trainer->id)
            ->where('status', 'active')
            ->count();

        $activePlansCount = WorkoutPlan::where('trainer_id', $trainer->id)
            ->where('status', 'active')
            ->count();

        $monthlyIncome = TrainerIncome::where('trainer_id', $trainer->id)
            ->whereYear('created_at', now()->year)
            ->whereMonth('created_at', now()->month)
            ->sum('commission');

        $pendingSettlement = TrainerIncome::where('trainer_id', $trainer->id)
            ->where('status', 'pending')
            ->sum('commission');

        $recentStudents = TrainerStudent::where('trainer_id', $trainer->id)
            ->with(['student.memberProfile', 'student.activeMembership'])
            ->latest('started_at')
            ->limit(5)
            ->get();

        return Inertia::render('Panel/Trainer/Dashboard', [
            'trainer' => $trainer,
            'stats' => [
                'active_students' => $activeStudentsCount,
                'active_plans' => $activePlansCount,
                'monthly_income' => (int) $monthlyIncome,
                'pending_settlement' => (int) $pendingSettlement,
            ],
            'recentStudents' => $recentStudents,
        ]);
    }

    /**
     * Students List.
     */
    public function students(Request $request): Response
    {
        $trainer = $request->user();

        $students = TrainerStudent::where('trainer_id', $trainer->id)
            ->with(['student.memberProfile', 'student.activeMembership.plan'])
            ->latest('started_at')
            ->paginate(15);

        $allMembers = User::whereHas('roles', fn ($q) => $q->where('key', 'member'))->get();

        return Inertia::render('Panel/Trainer/Students', [
            'students' => $students,
            'allMembers' => $allMembers,
        ]);
    }

    /**
     * Add student to trainer.
     */
    public function storeStudent(Request $request): RedirectResponse
    {
        $trainer = $request->user();

        $validated = $request->validate([
            'member_id' => 'required|exists:users,id',
        ]);

        TrainerStudent::updateOrCreate(
            ['trainer_id' => $trainer->id, 'member_id' => $validated['member_id']],
            ['status' => 'active', 'started_at' => now()]
        );

        return back()->with('success', 'شاگرد جدید به لیست شما اضافه شد.');
    }

    /**
     * Workout & Diet Plans List.
     */
    public function workoutPlans(Request $request): Response
    {
        $trainer = $request->user();

        $plans = WorkoutPlan::where('trainer_id', $trainer->id)
            ->with(['member', 'items'])
            ->latest()
            ->paginate(15);

        $students = TrainerStudent::where('trainer_id', $trainer->id)
            ->where('status', 'active')
            ->with('student')
            ->get()
            ->pluck('student');

        return Inertia::render('Panel/Trainer/WorkoutPlans', [
            'plans' => $plans,
            'students' => $students,
        ]);
    }

    /**
     * Create new Workout/Diet Plan.
     */
    public function storeWorkoutPlan(Request $request): RedirectResponse
    {
        $trainer = $request->user();

        $validated = $request->validate([
            'member_id' => 'required|exists:users,id',
            'title' => 'required|string|max:200',
            'type' => 'required|in:workout,diet',
            'starts_at' => 'nullable|date',
            'ends_at' => 'nullable|date|after_or_equal:starts_at',
            'notes' => 'nullable|string|max:1000',
            'items' => 'required|array|min:1',
            'items.*.day' => 'required|string',
            'items.*.title' => 'required|string',
            'items.*.sets' => 'nullable|integer',
            'items.*.reps' => 'nullable|string',
            'items.*.notes' => 'nullable|string',
        ]);

        $plan = WorkoutPlan::create([
            'trainer_id' => $trainer->id,
            'member_id' => $validated['member_id'],
            'title' => $validated['title'],
            'type' => $validated['type'],
            'starts_at' => $validated['starts_at'] ?? now(),
            'ends_at' => $validated['ends_at'] ?? now()->addMonth(),
            'status' => 'active',
            'notes' => $validated['notes'] ?? null,
        ]);

        foreach ($validated['items'] as $index => $item) {
            WorkoutPlanItem::create([
                'workout_plan_id' => $plan->id,
                'day' => $item['day'],
                'title' => $item['title'],
                'sets' => $item['sets'] ?? null,
                'reps' => $item['reps'] ?? null,
                'notes' => $item['notes'] ?? null,
                'sort' => $index,
            ]);
        }

        AuditLog::record(action: "ایجاد برنامه {$plan->type} برای شاگرد {$plan->member_id}", subject: $plan);

        return back()->with('success', 'برنامه تمرینی با موفقیت ثبت شد و در پنل شاگرد در دسترس است.');
    }

    /**
     * Incomes and settlements.
     */
    public function incomes(Request $request): Response
    {
        $trainer = $request->user();

        $incomes = TrainerIncome::where('trainer_id', $trainer->id)
            ->latest()
            ->paginate(15);

        $totalEarned = TrainerIncome::where('trainer_id', $trainer->id)->sum('commission');
        $totalSettled = TrainerIncome::where('trainer_id', $trainer->id)->where('status', 'settled')->sum('commission');
        $totalPending = TrainerIncome::where('trainer_id', $trainer->id)->where('status', 'pending')->sum('commission');

        return Inertia::render('Panel/Trainer/Incomes', [
            'incomes' => $incomes,
            'totalEarned' => (int) $totalEarned,
            'totalSettled' => (int) $totalSettled,
            'totalPending' => (int) $totalPending,
        ]);
    }

    /**
     * Public profile edit.
     */
    public function profile(Request $request): Response
    {
        $trainer = $request->user();
        $trainer->loadMissing('trainerProfile');

        return Inertia::render('Panel/Trainer/Profile', [
            'trainer' => $trainer,
            'profile' => $trainer->trainerProfile,
        ]);
    }

    public function updateProfile(Request $request): RedirectResponse
    {
        $trainer = $request->user();

        $validated = $request->validate([
            'bio' => 'nullable|string|max:1000',
            'specialties' => 'nullable|array',
            'certificates' => 'nullable|array',
            'photo' => 'nullable|string',
            'is_public' => 'boolean',
        ]);

        TrainerProfile::updateOrCreate(
            ['user_id' => $trainer->id],
            $validated
        );

        return back()->with('success', 'پروفایل عمومی مربی بروزرسانی شد.');
    }
}
