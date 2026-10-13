<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Panel\BuffetController;
use App\Http\Controllers\Panel\CmsController;
use App\Http\Controllers\Panel\MemberController;
use App\Http\Controllers\Panel\RoleMatrixController;
use App\Http\Controllers\Panel\ServicePanelController;
use App\Http\Controllers\Panel\ShopController;
use App\Http\Controllers\Panel\SuperAdminController;
use App\Http\Controllers\Panel\TrainerController;
use App\Http\Controllers\Panel\UserController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web & Public Routes (Epic 9)
|--------------------------------------------------------------------------
*/
Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/cafe', [PublicController::class, 'cafe'])->name('cafe');
Route::get('/shop', [PublicController::class, 'shop'])->name('shop');
Route::get('/shop/{product:slug}', [PublicController::class, 'product'])->name('product.detail');
Route::get('/massage', [PublicController::class, 'massage'])->name('massage');
Route::get('/hairdresser', [PublicController::class, 'hairdresser'])->name('hairdresser');
Route::post('/lead', [PublicController::class, 'submitLead'])->name('lead.submit');

/*
|--------------------------------------------------------------------------
| Authentication Routes (Epic 1 - OTP Mobile Only)
|--------------------------------------------------------------------------
*/
// Standard Auth Endpoints
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
Route::post('/login/send-otp', [AuthController::class, 'sendOtp']);
Route::post('/login/verify-otp', [AuthController::class, 'verifyOtp']);

Route::middleware('auth')->group(function () {
    Route::get('/select-role', [AuthController::class, 'showSelectRole'])->name('select_role');
    Route::post('/switch-role', [AuthController::class, 'switchRole'])->name('switch_role');
});

Route::prefix('auth')->name('auth.')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/send-otp', [AuthController::class, 'sendOtp'])->name('send_otp');
    Route::post('/verify-otp', [AuthController::class, 'verifyOtp'])->name('verify_otp');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::middleware('auth')->group(function () {
        Route::get('/select-role', [AuthController::class, 'showSelectRole'])->name('select_role');
        Route::post('/switch-role', [AuthController::class, 'switchRole'])->name('switch_role');
    });
});

/*
|--------------------------------------------------------------------------
| Payment & Checkout Routes (Epic 10)
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->prefix('payment')->name('payment.')->group(function () {
    Route::post('/membership/{plan}', [PaymentController::class, 'purchaseMembership'])->name('membership');
    Route::post('/checkout', [PaymentController::class, 'checkoutCart'])->name('checkout');
    Route::post('/service/{service}', [PaymentController::class, 'bookService'])->name('service');
    Route::get('/callback/{payment}', [PaymentController::class, 'callback'])->name('callback');
});

/*
|--------------------------------------------------------------------------
| Protected Panels (RBAC via dynamic Permission & RoleMatrix)
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->prefix('panel')->name('panel.')->group(function () {

    // Super Admin Panel (Epic 2)
    Route::prefix('super_admin')->name('super_admin.')->group(function () {
        Route::get('/dashboard', [SuperAdminController::class, 'dashboard'])->middleware('menu.permission:super_admin.dashboard')->name('dashboard');
        Route::get('/users', [UserController::class, 'index'])->middleware('menu.permission:super_admin.users')->name('users');
        Route::post('/users', [UserController::class, 'store'])->middleware('menu.permission:super_admin.users');
        Route::put('/users/{user}', [UserController::class, 'update'])->middleware('menu.permission:super_admin.users');
        Route::get('/users/{user}', [UserController::class, 'show'])->middleware('menu.permission:super_admin.users')->name('users.show');
        Route::get('/reports', [SuperAdminController::class, 'reports'])->middleware('menu.permission:super_admin.reports')->name('reports');
        Route::get('/attendances', [SuperAdminController::class, 'attendances'])->middleware('menu.permission:super_admin.attendances')->name('attendances');
        Route::post('/attendances', [SuperAdminController::class, 'recordAttendance'])->middleware('menu.permission:super_admin.attendances');
        Route::get('/settings', [SuperAdminController::class, 'settings'])->middleware('menu.permission:super_admin.settings')->name('settings');
        Route::post('/settings', [SuperAdminController::class, 'updateSettings'])->middleware('menu.permission:super_admin.settings');
        Route::get('/audit', [SuperAdminController::class, 'audit'])->middleware('menu.permission:super_admin.audit')->name('audit');
    });

    // Manager / CMS Panel (Epic 3)
    Route::prefix('manager')->name('manager.')->group(function () {
        Route::get('/dashboard', [SuperAdminController::class, 'dashboard'])->middleware('menu.permission:manager.dashboard')->name('dashboard');
        Route::get('/matrix', [RoleMatrixController::class, 'index'])->middleware('menu.permission:manager.matrix')->name('matrix');
        Route::post('/matrix', [RoleMatrixController::class, 'update'])->middleware('menu.permission:manager.matrix');
        Route::post('/matrix/user/{user}', [RoleMatrixController::class, 'updateUserOverride'])->middleware('menu.permission:manager.matrix');
        Route::get('/cms', [CmsController::class, 'settings'])->middleware('menu.permission:manager.cms')->name('cms');
        Route::post('/cms', [CmsController::class, 'updateSettings'])->middleware('menu.permission:manager.cms');
        Route::get('/leads', [CmsController::class, 'leads'])->middleware('menu.permission:manager.leads')->name('leads');
        Route::put('/leads/{lead}', [CmsController::class, 'updateLead'])->middleware('menu.permission:manager.leads');
        Route::get('/banners', [CmsController::class, 'banners'])->middleware('menu.permission:manager.banners')->name('banners');
        Route::post('/banners', [CmsController::class, 'storeBanner'])->middleware('menu.permission:manager.banners');
        Route::put('/banners/{banner}', [CmsController::class, 'updateBanner'])->middleware('menu.permission:manager.banners');
        Route::delete('/banners/{banner}', [CmsController::class, 'destroyBanner'])->middleware('menu.permission:manager.banners');
        Route::get('/plans', [CmsController::class, 'plans'])->middleware('menu.permission:manager.plans')->name('plans');
        Route::post('/plans', [CmsController::class, 'storePlan'])->middleware('menu.permission:manager.plans');
        Route::put('/plans/{plan}', [CmsController::class, 'updatePlan'])->middleware('menu.permission:manager.plans');
    });

    // Trainer Panel (Epic 4)
    Route::prefix('trainer')->name('trainer.')->group(function () {
        Route::get('/dashboard', [TrainerController::class, 'dashboard'])->middleware('menu.permission:trainer.dashboard')->name('dashboard');
        Route::get('/students', [TrainerController::class, 'students'])->middleware('menu.permission:trainer.students')->name('students');
        Route::post('/students', [TrainerController::class, 'storeStudent'])->middleware('menu.permission:trainer.students');
        Route::get('/workout_plans', [TrainerController::class, 'workoutPlans'])->middleware('menu.permission:trainer.workout_plans')->name('workout_plans');
        Route::post('/workout_plans', [TrainerController::class, 'storeWorkoutPlan'])->middleware('menu.permission:trainer.workout_plans');
        Route::get('/incomes', [TrainerController::class, 'incomes'])->middleware('menu.permission:trainer.incomes')->name('incomes');
        Route::get('/profile', [TrainerController::class, 'profile'])->middleware('menu.permission:trainer.profile')->name('profile');
        Route::post('/profile', [TrainerController::class, 'updateProfile'])->middleware('menu.permission:trainer.profile');
    });

    // Shop Panel (Epic 5)
    Route::prefix('shop')->name('shop.')->group(function () {
        Route::get('/dashboard', [ShopController::class, 'dashboard'])->middleware('menu.permission:shop.dashboard')->name('dashboard');
        Route::get('/products', [ShopController::class, 'products'])->middleware('menu.permission:shop.products')->name('products');
        Route::post('/products', [ShopController::class, 'storeProduct'])->middleware('menu.permission:shop.products');
        Route::put('/products/{product}', [ShopController::class, 'updateProduct'])->middleware('menu.permission:shop.products');
        Route::get('/orders', [ShopController::class, 'orders'])->middleware('menu.permission:shop.orders')->name('orders');
        Route::put('/orders/{order}/status', [ShopController::class, 'updateOrderStatus'])->middleware('menu.permission:shop.orders');
        Route::get('/pos', [ShopController::class, 'pos'])->middleware('menu.permission:shop.pos')->name('pos');
        Route::get('/categories', [ShopController::class, 'categories'])->middleware('menu.permission:shop.categories')->name('categories');
        Route::post('/categories', [ShopController::class, 'storeCategory'])->middleware('menu.permission:shop.categories');
    });

    // Buffet Panel (Epic 6)
    Route::prefix('buffet')->name('buffet.')->group(function () {
        Route::get('/dashboard', [BuffetController::class, 'dashboard'])->middleware('menu.permission:buffet.dashboard')->name('dashboard');
        Route::get('/orders', [BuffetController::class, 'orders'])->middleware('menu.permission:buffet.orders')->name('orders');
        Route::put('/orders/{order}/status', [BuffetController::class, 'updateOrderStatus'])->middleware('menu.permission:buffet.orders');
        Route::get('/menu', [BuffetController::class, 'menu'])->middleware('menu.permission:buffet.menu')->name('menu');
        Route::post('/menu', [BuffetController::class, 'storeMenuItem'])->middleware('menu.permission:buffet.menu');
        Route::put('/menu/{product}', [BuffetController::class, 'updateMenuItem'])->middleware('menu.permission:buffet.menu');
        Route::post('/menu/{product}/toggle', [BuffetController::class, 'toggleAvailability'])->middleware('menu.permission:buffet.menu');
        Route::get('/pos', [BuffetController::class, 'pos'])->middleware('menu.permission:buffet.pos')->name('pos');
        Route::get('/sales', [BuffetController::class, 'sales'])->middleware('menu.permission:buffet.sales')->name('sales');
    });

    // Service Panel (Epic 7)
    Route::prefix('service')->name('service.')->group(function () {
        Route::get('/dashboard', [ServicePanelController::class, 'dashboard'])->middleware('menu.permission:service.dashboard')->name('dashboard');
        Route::get('/bookings', [ServicePanelController::class, 'bookings'])->middleware('menu.permission:service.bookings')->name('bookings');
        Route::put('/bookings/{booking}/status', [ServicePanelController::class, 'updateBookingStatus'])->middleware('menu.permission:service.bookings');
        Route::get('/services', [ServicePanelController::class, 'services'])->middleware('menu.permission:service.services')->name('services');
        Route::post('/services', [ServicePanelController::class, 'storeService'])->middleware('menu.permission:service.services');
        Route::put('/services/{service}', [ServicePanelController::class, 'updateService'])->middleware('menu.permission:service.services');
        Route::get('/schedule', [ServicePanelController::class, 'schedule'])->middleware('menu.permission:service.schedule')->name('schedule');
    });

    // Member Panel (Epic 8)
    Route::prefix('member')->name('member.')->group(function () {
        Route::get('/dashboard', [MemberController::class, 'dashboard'])->middleware('menu.permission:member.dashboard')->name('dashboard');
        Route::put('/profile', [MemberController::class, 'updateProfile'])->middleware('menu.permission:member.dashboard');
        Route::get('/membership', [MemberController::class, 'membership'])->middleware('menu.permission:member.membership')->name('membership');
        Route::get('/workout_plans', [MemberController::class, 'workoutPlans'])->middleware('menu.permission:member.workout_plans')->name('workout_plans');
        Route::get('/history', [MemberController::class, 'history'])->middleware('menu.permission:member.history')->name('history');
        Route::get('/bookings', [MemberController::class, 'bookings'])->middleware('menu.permission:member.bookings')->name('bookings');
        Route::get('/orders', [MemberController::class, 'orders'])->middleware('menu.permission:member.orders')->name('orders');
        Route::get('/progress', [MemberController::class, 'progress'])->middleware('menu.permission:member.progress')->name('progress');
        Route::post('/progress', [MemberController::class, 'storeProgress'])->middleware('menu.permission:member.progress');
    });
});
