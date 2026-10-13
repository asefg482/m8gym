<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\CmsBanner;
use App\Models\CmsFaq;
use App\Models\MemberProfile;
use App\Models\Membership;
use App\Models\MembershipPlan;
use App\Models\Menu;
use App\Models\Product;
use App\Models\Role;
use App\Models\Service;
use App\Models\ServiceProvider;
use App\Models\Setting;
use App\Models\TrainerProfile;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Roles
        $rolesData = [
            ['key' => 'super_admin', 'title' => 'مدیر ارشد (ادمین)', 'description' => 'دسترسی کامل و نامحدود به تمامی زیرسیستم‌ها'],
            ['key' => 'manager', 'title' => 'مدیر وبسایت', 'description' => 'مدیریت محتوا، دسترسی‌ها و نظارت بر پنل‌ها'],
            ['key' => 'trainer', 'title' => 'مربی ورزشی', 'description' => 'مدیریت شاگردان، برنامه‌های تمرینی، رژیم و کمیسیون'],
            ['key' => 'shop', 'title' => 'مسئول فروشگاه', 'description' => 'فروشگاه لوازم ورزشی، مکمل‌ها و ارسال مرسولات'],
            ['key' => 'buffet', 'title' => 'بوفه و کافه', 'description' => 'مدیریت سفارش‌ها و منوی غذایی و نوشیدنی'],
            ['key' => 'service', 'title' => 'ارائه‌دهنده خدمات', 'description' => 'مدیریت رزروها، ماساژ و آرایشگاه'],
            ['key' => 'member', 'title' => 'ورزشکار (عضو)', 'description' => 'پنل ورزشکاران، برنامه‌ها، اشتراک و رزرو'],
        ];

        $roles = [];
        foreach ($rolesData as $rd) {
            $roles[$rd['key']] = Role::updateOrCreate(
                ['key' => $rd['key']],
                ['title' => $rd['title'], 'description' => $rd['description'], 'is_system' => true]
            );
        }

        // 2. Dynamic Menus
        $menusData = [
            // Super Admin
            ['key' => 'super_admin.dashboard', 'title' => 'داشبورد ادمین', 'icon' => 'LayoutDashboard', 'route' => '/panel/super_admin/dashboard', 'panel_role_key' => 'super_admin', 'sort' => 1],
            ['key' => 'super_admin.users', 'title' => 'مدیریت کاربران و نقش‌ها', 'icon' => 'Users', 'route' => '/panel/super_admin/users', 'panel_role_key' => 'super_admin', 'sort' => 2],
            ['key' => 'super_admin.reports', 'title' => 'گزارش‌های مالی تجمیعی', 'icon' => 'BarChart3', 'route' => '/panel/super_admin/reports', 'panel_role_key' => 'super_admin', 'sort' => 3],
            ['key' => 'super_admin.attendances', 'title' => 'حضور و غیاب و تردد', 'icon' => 'QrCode', 'route' => '/panel/super_admin/attendances', 'panel_role_key' => 'super_admin', 'sort' => 4],
            ['key' => 'super_admin.settings', 'title' => 'تنظیمات کلان سیستم', 'icon' => 'Settings', 'route' => '/panel/super_admin/settings', 'panel_role_key' => 'super_admin', 'sort' => 5],
            ['key' => 'super_admin.audit', 'title' => 'لاگ رویدادها (Audit Log)', 'icon' => 'ShieldAlert', 'route' => '/panel/super_admin/audit', 'panel_role_key' => 'super_admin', 'sort' => 6],

            // Manager (CMS & Matrix)
            ['key' => 'manager.dashboard', 'title' => 'داشبورد مدیریت', 'icon' => 'LayoutDashboard', 'route' => '/panel/manager/dashboard', 'panel_role_key' => 'manager', 'sort' => 10],
            ['key' => 'manager.matrix', 'title' => 'ماتریس دسترسی نقش–منو', 'icon' => 'ShieldCheck', 'route' => '/panel/manager/matrix', 'panel_role_key' => 'manager', 'sort' => 11],
            ['key' => 'manager.cms', 'title' => 'مدیریت محتوای سایت', 'icon' => 'FileText', 'route' => '/panel/manager/cms', 'panel_role_key' => 'manager', 'sort' => 12],
            ['key' => 'manager.leads', 'title' => 'سرنخ‌های مشاوره رایگان', 'icon' => 'MessageSquare', 'route' => '/panel/manager/leads', 'panel_role_key' => 'manager', 'sort' => 13],
            ['key' => 'manager.banners', 'title' => 'بنرها و تخفیف‌ها', 'icon' => 'Image', 'route' => '/panel/manager/banners', 'panel_role_key' => 'manager', 'sort' => 14],
            ['key' => 'manager.plans', 'title' => 'تعریف پلن‌های عضویت', 'icon' => 'CreditCard', 'route' => '/panel/manager/plans', 'panel_role_key' => 'manager', 'sort' => 15],

            // Trainer
            ['key' => 'trainer.dashboard', 'title' => 'داشبورد مربی', 'icon' => 'LayoutDashboard', 'route' => '/panel/trainer/dashboard', 'panel_role_key' => 'trainer', 'sort' => 20],
            ['key' => 'trainer.students', 'title' => 'شاگردان من', 'icon' => 'Users', 'route' => '/panel/trainer/students', 'panel_role_key' => 'trainer', 'sort' => 21],
            ['key' => 'trainer.workout_plans', 'title' => 'برنامه‌های تمرینی و تغذیه', 'icon' => 'Dumbbell', 'route' => '/panel/trainer/workout_plans', 'panel_role_key' => 'trainer', 'sort' => 22],
            ['key' => 'trainer.incomes', 'title' => 'درآمد و کمیسیون‌ها', 'icon' => 'Wallet', 'route' => '/panel/trainer/incomes', 'panel_role_key' => 'trainer', 'sort' => 23],
            ['key' => 'trainer.profile', 'title' => 'پروفایل عمومی و رزومه', 'icon' => 'UserCheck', 'route' => '/panel/trainer/profile', 'panel_role_key' => 'trainer', 'sort' => 24],

            // Shop
            ['key' => 'shop.dashboard', 'title' => 'داشبورد فروشگاه', 'icon' => 'LayoutDashboard', 'route' => '/panel/shop/dashboard', 'panel_role_key' => 'shop', 'sort' => 30],
            ['key' => 'shop.products', 'title' => 'محصولات و موجودی', 'icon' => 'Package', 'route' => '/panel/shop/products', 'panel_role_key' => 'shop', 'sort' => 31],
            ['key' => 'shop.orders', 'title' => 'سفارش‌ها و ارسال مرسوله', 'icon' => 'ShoppingBag', 'route' => '/panel/shop/orders', 'panel_role_key' => 'shop', 'sort' => 32],
            ['key' => 'shop.pos', 'title' => 'فروش حضوری سریع (POS)', 'icon' => 'Calculator', 'route' => '/panel/shop/pos', 'panel_role_key' => 'shop', 'sort' => 33],
            ['key' => 'shop.categories', 'title' => 'دسته‌بندی‌های کالا', 'icon' => 'Tags', 'route' => '/panel/shop/categories', 'panel_role_key' => 'shop', 'sort' => 34],

            // Buffet
            ['key' => 'buffet.dashboard', 'title' => 'داشبورد بوفه و کافه', 'icon' => 'LayoutDashboard', 'route' => '/panel/buffet/dashboard', 'panel_role_key' => 'buffet', 'sort' => 40],
            ['key' => 'buffet.orders', 'title' => 'سفارش‌های زنده بوفه', 'icon' => 'Bell', 'route' => '/panel/buffet/orders', 'panel_role_key' => 'buffet', 'sort' => 41],
            ['key' => 'buffet.menu', 'title' => 'منوی غذا و نوشیدنی', 'icon' => 'Coffee', 'route' => '/panel/buffet/menu', 'panel_role_key' => 'buffet', 'sort' => 42],
            ['key' => 'buffet.pos', 'title' => 'ثبت سفارش حضوری بوفه', 'icon' => 'ShoppingCart', 'route' => '/panel/buffet/pos', 'panel_role_key' => 'buffet', 'sort' => 43],
            ['key' => 'buffet.sales', 'title' => 'گزارش فروش روزانه و ماهانه', 'icon' => 'TrendingUp', 'route' => '/panel/buffet/sales', 'panel_role_key' => 'buffet', 'sort' => 44],

            // Service
            ['key' => 'service.dashboard', 'title' => 'داشبورد نوبت‌دهی و خدمات', 'icon' => 'LayoutDashboard', 'route' => '/panel/service/dashboard', 'panel_role_key' => 'service', 'sort' => 50],
            ['key' => 'service.bookings', 'title' => 'تقویم رزروها (ماساژ/آرایشگاه)', 'icon' => 'Calendar', 'route' => '/panel/service/bookings', 'panel_role_key' => 'service', 'sort' => 51],
            ['key' => 'service.services', 'title' => 'تعریف خدمات و تعرفه‌ها', 'icon' => 'Scissors', 'route' => '/panel/service/services', 'panel_role_key' => 'service', 'sort' => 52],
            ['key' => 'service.schedule', 'title' => 'ساعات کاری و مرخصی‌ها', 'icon' => 'Clock', 'route' => '/panel/service/schedule', 'panel_role_key' => 'service', 'sort' => 53],

            // Member
            ['key' => 'member.dashboard', 'title' => 'پروفایل و اشتراک من', 'icon' => 'User', 'route' => '/panel/member/dashboard', 'panel_role_key' => 'member', 'sort' => 60],
            ['key' => 'member.membership', 'title' => 'تمدید یا ارتقای اشتراک', 'icon' => 'CreditCard', 'route' => '/panel/member/membership', 'panel_role_key' => 'member', 'sort' => 61],
            ['key' => 'member.workout_plans', 'title' => 'برنامه‌های تمرینی و تغذیه', 'icon' => 'Dumbbell', 'route' => '/panel/member/workout_plans', 'panel_role_key' => 'member', 'sort' => 62],
            ['key' => 'member.history', 'title' => 'تاریخچه حضور و غیاب', 'icon' => 'CalendarCheck', 'route' => '/panel/member/history', 'panel_role_key' => 'member', 'sort' => 63],
            ['key' => 'member.bookings', 'title' => 'رزروهای ماساژ و آرایشگاه', 'icon' => 'Clock', 'route' => '/panel/member/bookings', 'panel_role_key' => 'member', 'sort' => 64],
            ['key' => 'member.orders', 'title' => 'سفارش‌های کافه و فروشگاه', 'icon' => 'ShoppingBag', 'route' => '/panel/member/orders', 'panel_role_key' => 'member', 'sort' => 65],
            ['key' => 'member.progress', 'title' => 'روند تغییرات و آنالیز بدنی', 'icon' => 'Activity', 'route' => '/panel/member/progress', 'panel_role_key' => 'member', 'sort' => 66],
        ];

        $menus = [];
        foreach ($menusData as $md) {
            $menus[$md['key']] = Menu::updateOrCreate(
                ['key' => $md['key']],
                $md
            );
        }

        // Attach default menus to respective roles
        foreach ($menus as $menu) {
            $roleKey = $menu->panel_role_key;
            if (isset($roles[$roleKey])) {
                $roles[$roleKey]->menus()->syncWithoutDetaching([$menu->id]);
            }

            // Also attach all menus to super_admin and manager according to business rules
            $roles['super_admin']->menus()->syncWithoutDetaching([$menu->id]);
            $roles['manager']->menus()->syncWithoutDetaching([$menu->id]);
        }

        // 3. Create Admin & Demo Users
        $adminMobiles = array_unique(array_filter([
            '09029281914',
            env('ADMIN_MOBILE', '09111234567'),
            '09111234567',
        ]));

        foreach ($adminMobiles as $admMobile) {
            $adm = User::updateOrCreate(
                ['mobile' => $admMobile],
                [
                    'first_name' => 'مدیر ارشد',
                    'last_name' => 'باشگاه M8',
                    'name' => 'مدیر ارشد باشگاه',
                    'status' => 'active',
                    'mobile_verified_at' => now(),
                ]
            );
            $adm->roles()->syncWithoutDetaching([$roles['super_admin']->id]);
            MemberProfile::firstOrCreate(['user_id' => $adm->id], ['level' => 'vip']);
        }

        // Manager User
        $managerUser = User::updateOrCreate(
            ['mobile' => '09112223333'],
            [
                'first_name' => 'سارا',
                'last_name' => 'موسوی',
                'name' => 'سارا موسوی',
                'email' => 'manager@m8gym.com',
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]
        );
        $managerUser->roles()->syncWithoutDetaching([$roles['manager']->id]);

        // Trainer User
        $trainerUser = User::updateOrCreate(
            ['mobile' => '09113334444'],
            [
                'first_name' => 'پژمان',
                'last_name' => 'نوری',
                'name' => 'پژمان نوری',
                'email' => 'trainer@m8gym.com',
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]
        );
        $trainerUser->roles()->syncWithoutDetaching([$roles['trainer']->id]);
        TrainerProfile::updateOrCreate(
            ['user_id' => $trainerUser->id],
            [
                'bio' => 'مربی رسمی فدراسیون بدنسازی، قهرمان بادی بیلدینگ شمال کشور، کارشناس ارشد فیزیولوژی ورزشی با ۹ سال سابقه حرفه‌ای در M8 Fit Club.',
                'specialties' => ['هایپرتروفی', 'کاهش چربی موضعی', 'آماده‌سازی مسابقات', 'حرکات اصلاحی'],
                'certificates' => ['مدرک مربیگری بین‌المللی IFBB', 'گواهی‌نامه تغذیه پیشرفته ورزشی', 'مدرک CPR & کمک‌های اولیه'],
                'photo' => 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop&q=80',
                'commission_percent' => 55.00,
                'is_public' => true,
            ]
        );

        // Shop Manager User
        $shopUser = User::updateOrCreate(
            ['mobile' => '09114445555'],
            [
                'first_name' => 'محسن',
                'last_name' => 'کاظمی',
                'name' => 'محسن کاظمی',
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]
        );
        $shopUser->roles()->syncWithoutDetaching([$roles['shop']->id]);

        // Buffet Manager User
        $buffetUser = User::updateOrCreate(
            ['mobile' => '09115556666'],
            [
                'first_name' => 'نیما',
                'last_name' => 'صادقی',
                'name' => 'نیما صادقی',
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]
        );
        $buffetUser->roles()->syncWithoutDetaching([$roles['buffet']->id]);

        // Service Specialist User (ماساژور / آرایشگر)
        $serviceUser = User::updateOrCreate(
            ['mobile' => '09116667777'],
            [
                'first_name' => 'آرش',
                'last_name' => 'یزدانی',
                'name' => 'آرش یزدانی',
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]
        );
        $serviceUser->roles()->syncWithoutDetaching([$roles['service']->id]);

        // VIP Member User
        $vipMember = User::updateOrCreate(
            ['mobile' => '09118889999'],
            [
                'first_name' => 'کیوان',
                'last_name' => 'مرادی',
                'name' => 'کیوان مرادی',
                'email' => 'vip@m8gym.com',
                'gender' => 'male',
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]
        );
        $vipMember->roles()->syncWithoutDetaching([$roles['member']->id]);
        MemberProfile::updateOrCreate(
            ['user_id' => $vipMember->id],
            [
                'height' => 184.00,
                'weight' => 88.50,
                'goals' => 'افزایش حجم عضلانی خشک و بهبود رکورد ددلیفت',
                'level' => 'vip',
                'emergency_contact' => '۰۹۱۱۲۲۳۴۴۵۵ (برادر)',
            ]
        );

        // Multi-role User (Trainer + Member) for Role Switcher testing
        $multiUser = User::updateOrCreate(
            ['mobile' => '09119990000'],
            [
                'first_name' => 'رامین',
                'last_name' => 'طاهری',
                'name' => 'رامین طاهری',
                'email' => 'ramin@m8gym.com',
                'status' => 'active',
                'mobile_verified_at' => now(),
            ]
        );
        $multiUser->roles()->syncWithoutDetaching([$roles['trainer']->id, $roles['member']->id]);
        MemberProfile::updateOrCreate(
            ['user_id' => $multiUser->id],
            ['level' => 'normal', 'height' => 178, 'weight' => 75]
        );
        TrainerProfile::updateOrCreate(
            ['user_id' => $multiUser->id],
            [
                'bio' => 'مربی کراس‌فیت و آمادگی جسمانی باشگاه M8 با ۷ سال سابقه.',
                'commission_percent' => 50.00,
                'is_public' => true,
            ]
        );

        // 4. Membership Plans
        $plans = [
            [
                'title' => 'اشتراک یک‌ماهه استاندارد',
                'duration_days' => 30,
                'sessions_limit' => 24,
                'price' => 1850000,
                'benefits' => [
                    'دسترسی کامل به سالن بدنسازی و وزنه‌های آزاد',
                    'استفاده از دوش و کمد اختصاصی',
                    'پایش مقدماتی ترکیب بدنی (InBody)',
                ],
                'is_active' => true,
            ],
            [
                'title' => 'اشتراک سه‌ماهه نقره‌ای (پرفروش)',
                'duration_days' => 90,
                'sessions_limit' => 72,
                'price' => 4900000,
                'benefits' => [
                    'دسترسی نامحدود روزانه به تمامی بخش‌های تمرینی',
                    'یک برنامه تمرینی رایگان توسط مربیان ارشد',
                    '۱۰٪ تخفیف اختصاصی در بوفه پروتئینی و فروشگاه M8',
                    'کمد هوشمند دائمی در طول دوره',
                ],
                'is_active' => true,
            ],
            [
                'title' => 'اشتراک شش‌ماهه طلایی VIP',
                'duration_days' => 180,
                'sessions_limit' => null,
                'price' => 8900000,
                'benefits' => [
                    'دسترسی نامحدود VIP به تمام سالن‌ها و بخش ویژه',
                    'تنظیم برنامه تمرین و تغذیه اختصاصی به همراه ارزیابی ماهانه',
                    '۲ جلسه ماساژ ریکاوری رایگان در اسپا',
                    '۲۰٪ تخفیف دائمی کلیه اقلام کافه و بوفه و فروشگاه',
                    'سرویس اختصاصی حوله و رختکن اختصاصی VIP',
                ],
                'is_active' => true,
            ],
            [
                'title' => 'اشتراک یک‌ساله الماس پریمیوم',
                'duration_days' => 365,
                'sessions_limit' => null,
                'price' => 15800000,
                'benefits' => [
                    'دسترسی ۳۶۵ روزه نامحدود در ساعات کاری باشگاه',
                    'مربی خصوصی همراه در هر ماه ۴ جلسه',
                    'آنالیز ۳ بعدی بدن با دستگاه پیشرفته به صورت ماهانه',
                    'تخفیف ۲۵٪ بر کلیه خدمات ماساژ، آرایشگاه، بوفه و مکمل',
                    'جای پارک اختصاصی و دسترسی به VIP Lounge',
                ],
                'is_active' => true,
            ],
        ];

        $createdPlans = [];
        foreach ($plans as $p) {
            $createdPlans[] = MembershipPlan::updateOrCreate(['title' => $p['title']], $p);
        }

        // Assign active membership to VIP member
        Membership::updateOrCreate(
            ['member_id' => $vipMember->id, 'plan_id' => $createdPlans[2]->id],
            [
                'starts_at' => now()->subDays(10),
                'ends_at' => now()->addDays(170),
                'status' => 'active',
                'paid_amount' => $createdPlans[2]->price,
            ]
        );

        // 5. Shop Categories & Products
        $suppCat = Category::updateOrCreate(['scope' => 'shop', 'title' => 'مکمل‌های ورزشی پروتئین و آمینو']);
        $gearCat = Category::updateOrCreate(['scope' => 'shop', 'title' => 'پوشاک و لوازم ورزشی M8']);

        $shopProducts = [
            [
                'scope' => 'shop',
                'category_id' => $suppCat->id,
                'title' => 'پروتئین وی کاله پرو ایزوله ۱۰۰۰ گرمی',
                'slug' => 'kalleh-pro-whey-isolate-1000g',
                'description' => 'پروتئین وی ایزوله با خلوص ۹۰ درصد، غنی از BCAA و گلوتامین، بدون شکر افزوده و حلالیت فوق‌العاده مناسب برای دوران عضله‌سازی و تفکیک بدنی.',
                'price' => 1890000,
                'discount_price' => 1650000,
                'stock' => 24,
                'sku' => 'SUP-WHEY-01',
                'images' => ['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&auto=format&fit=crop&q=80'],
                'nutritional_info' => ['protein' => '24g per serving', 'calories' => '120 kcal', 'bcaa' => '5.5g'],
                'is_active' => true,
            ],
            [
                'scope' => 'shop',
                'category_id' => $suppCat->id,
                'title' => 'کراتین منوهیدرات میکرونایزد ۳۰۰ گرمی',
                'slug' => 'creatine-monohydrate-micronized-300g',
                'description' => 'کراتین با خلوص ۱۰۰ درصد، افزایش‌دهنده فوری قدرت انفجاری، استقامت عضلانی و حجم خشک با جذب بسیار بالا.',
                'price' => 850000,
                'discount_price' => null,
                'stock' => 45,
                'sku' => 'SUP-CREAT-02',
                'images' => ['https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&auto=format&fit=crop&q=80'],
                'nutritional_info' => ['creatine' => '5g pure creatine monohydrate per scoop'],
                'is_active' => true,
            ],
            [
                'scope' => 'shop',
                'category_id' => $gearCat->id,
                'title' => 'شیکر فلزی دوجداره ضدبو با نشان M8 Fit Club',
                'slug' => 'm8-pro-steel-shaker-750ml',
                'description' => 'استیل ضد زنگ ۳۰۴ پزشکی، درب ضد نشت پیچی، دارای توری میکسر و عایق سرما تا ۱۲ ساعت با لوگوی حک‌شده M8.',
                'price' => 480000,
                'discount_price' => 390000,
                'stock' => 60,
                'sku' => 'GEAR-SHAK-03',
                'images' => ['https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80'],
                'is_active' => true,
            ],
            [
                'scope' => 'shop',
                'category_id' => $gearCat->id,
                'title' => 'کمربند حرفه‌ای چرم گاوی بدنسازی و پاورلیفتینگ M8',
                'slug' => 'm8-leather-powerlifting-belt',
                'description' => 'چرم طبیعی با ضخامت ۱۰ میلیمتر، سگک دو پین پولادین، محافظت عالی از ستون فقرات در حرکات سنگین اسکوات و ددلیفت.',
                'price' => 1250000,
                'discount_price' => null,
                'stock' => 18,
                'sku' => 'GEAR-BELT-04',
                'images' => ['https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80'],
                'is_active' => true,
            ],
        ];

        foreach ($shopProducts as $sp) {
            Product::updateOrCreate(['slug' => $sp['slug']], $sp);
        }

        // 6. Buffet Categories & Items
        $shakeCat = Category::updateOrCreate(['scope' => 'buffet', 'title' => 'شیک‌ها و اسموتی‌های پروتئینی']);
        $mealCat = Category::updateOrCreate(['scope' => 'buffet', 'title' => 'بشقاب‌های سلامت و وعده‌های فیتنس']);
        $coffeeCat = Category::updateOrCreate(['scope' => 'buffet', 'title' => 'قهوه تخصصی و بار گرم']);

        $buffetItems = [
            [
                'scope' => 'buffet',
                'category_id' => $shakeCat->id,
                'title' => 'شیک مانستر بادام زمینی و پروتئین وی',
                'slug' => 'monster-peanut-protein-shake',
                'description' => 'شیر بادام، یک اسکوپ پروتئین وی ایزوله شکلاتی، کره بادام زمینی طبیعی، موز یخ‌زده، جو دوسر پرک و دانه چیا.',
                'price' => 165000,
                'discount_price' => 140000,
                'stock' => 99,
                'images' => ['https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=80'],
                'nutritional_info' => ['protein' => '38g', 'calories' => '420 kcal', 'carbs' => '35g', 'fat' => '12g'],
                'is_active' => true,
            ],
            [
                'scope' => 'buffet',
                'category_id' => $mealCat->id,
                'title' => 'بشقاب فیله مرغ مرینت رزماری با برنج قهوه‌ای و سبزیجات بخارپز',
                'slug' => 'grilled-chicken-brown-rice-plate',
                'description' => '۲۰۰ گرم فیله مرغ گریل کم‌روغن، ۱۰۰ گرم برنج قهوه‌ای، بروکلی، هویج، قارچ و سس ویژه ماست و خردل خانگی.',
                'price' => 245000,
                'discount_price' => null,
                'stock' => 50,
                'images' => ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'],
                'nutritional_info' => ['protein' => '46g', 'calories' => '510 kcal', 'carbs' => '45g', 'fat' => '8g'],
                'is_active' => true,
            ],
            [
                'scope' => 'buffet',
                'category_id' => $coffeeCat->id,
                'title' => 'اسپرسو دبل شات ۱۰۰٪ عربیکا تخصصی',
                'slug' => 'double-espresso-arabica-specialty',
                'description' => 'عصاره‌گیری استاندارد با دستگاه صنعتی La Marzocco، اسیدیته ملایم با عطر و طعم یادآور شکلات تلخ و فندق.',
                'price' => 75000,
                'discount_price' => null,
                'stock' => 999,
                'images' => ['https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80'],
                'nutritional_info' => ['calories' => '5 kcal', 'caffeine' => '130mg'],
                'is_active' => true,
            ],
        ];

        foreach ($buffetItems as $bi) {
            Product::updateOrCreate(['slug' => $bi['slug']], $bi);
        }

        // 7. Services (ماساژ و آرایشگاه)
        $services = [
            [
                'category' => 'massage',
                'title' => 'ماساژ ریکاوری عمیق ورزشی (Deep Tissue)',
                'description' => 'تکنیک ویژه رفع گرفتگی‌های عضلانی، بهبود جریان خون و تخلیه اسید لاکتیک پس از تمرینات پرفشار بدنسازی.',
                'duration_min' => 60,
                'price' => 650000,
                'image' => 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&auto=format&fit=crop&q=80',
                'is_active' => true,
            ],
            [
                'category' => 'massage',
                'title' => 'ماساژ ریلکسی سوئدی با روغن‌های آروماتراپی',
                'description' => 'ایجاد آرامش روانی، کاهش ترشح هورمون کورتیزول و بهبود چشمگیر کیفیت خواب ورزشکاران.',
                'duration_min' => 45,
                'price' => 520000,
                'image' => 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&auto=format&fit=crop&q=80',
                'is_active' => true,
            ],
            [
                'category' => 'hairdresser',
                'title' => 'اصلاح مو و پیرایش سر و صورت VIP',
                'description' => 'فرم‌دهی مدرن به همراه شستشو، ماسک تقویتی و فیشیال سبک پوست در آرایشگاه اختصاصی باشگاه M8.',
                'duration_min' => 45,
                'price' => 280000,
                'image' => 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&auto=format&fit=crop&q=80',
                'is_active' => true,
            ],
        ];

        $createdServices = [];
        foreach ($services as $srv) {
            $createdServices[] = Service::updateOrCreate(['title' => $srv['title']], $srv);
        }

        // Attach specialist to services
        foreach ($createdServices as $cs) {
            ServiceProvider::updateOrCreate(
                ['user_id' => $serviceUser->id, 'service_id' => $cs->id],
                ['is_active' => true]
            );
        }

        // 8. CMS Banners
        $banners = [
            [
                'title' => 'تخفیف ویژه ۲۰٪ کافه و رستوران M8 برای اعضای VIP',
                'subtitle' => 'لذت وعده‌های رژیمی تازه و شیک‌های پروتئینی با قیمت ویژه باشگاه',
                'image' => 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop&q=80',
                'badge' => 'ویژه VIP',
                'scope' => 'home',
                'link' => '/cafe',
                'is_active' => true,
            ],
            [
                'title' => 'کمپین تناسب اندام پاییز و زمستان M8 Fit Club',
                'subtitle' => 'شروع دوره‌های تمرینی زیر نظر مربیان برجسته کشوری در فضایی بالغ بر ۲۵۰۰ متر',
                'image' => 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80',
                'badge' => 'ثبت‌نام جدید',
                'scope' => 'home',
                'link' => '/#plans',
                'is_active' => true,
            ],
        ];

        foreach ($banners as $b) {
            CmsBanner::updateOrCreate(['title' => $b['title']], $b);
        }

        // 9. CMS FAQs
        $faqs = [
            [
                'question' => 'ساعات کاری مجموعه M8 Gym به چه صورت است؟',
                'answer' => 'باشگاه در روزهای شنبه تا پنج‌شنبه از ساعت ۶:۰۰ صبح تا ۲۳:۳۰ شب و در روزهای جمعه از ۹:۰۰ صبح تا ۲۰:۰۰ شب برای بانوان و آقایان در سانس‌های اختصاصی فعال است.',
                'category' => 'general',
                'sort' => 1,
            ],
            [
                'question' => 'آیا امکان رزرو خدمات ماساژ یا آرایشگاه بدون عضویت سالن بدنسازی وجود دارد؟',
                'answer' => 'بله، تمامی بخش‌های رفاهی شامل اسپا، ماساژ، آرایشگاه، کافه و رستوران برای عموم با هماهنگی و رزرو آنلاین قابل استفاده است.',
                'category' => 'services',
                'sort' => 2,
            ],
            [
                'question' => 'چگونه می‌توانم برنامه تمرینی و تغذیه اختصاصی دریافت کنم؟',
                'answer' => 'پس از ثبت‌نام و ورود به پنل کاربری، می‌توانید مربی مورد نظر خود را انتخاب کرده و پس از آنالیز وضعیت بدنی، برنامه مدون خود را در بخش «برنامه‌های من» دریافت کنید.',
                'category' => 'workout',
                'sort' => 3,
            ],
        ];

        foreach ($faqs as $f) {
            CmsFaq::updateOrCreate(['question' => $f['question']], $f);
        }

        // 10. General Gym Settings
        $defaultSettings = [
            'gym_name' => 'باشگاه ورزشی و تندرستی M8 (Fit Club ساری)',
            'gym_slogan' => 'پیشرفته‌ترین مجموعه ورزشی و تناسب اندام شمال کشور',
            'gym_about' => 'مجموعه ورزشی M8 با بیش از ۲۵۰۰ متر مربع فضای استاندارد، تجهیزات روز دنیا، مربیان رسمی فدراسیون و ارائه خدمات کامل شامل بدنسازی، کافه‌رستوران ارگانیک، ماساژ تخصصی و آرایشگاه VIP، تجربه‌ای متمایز از تندرستی را برای شما رقم می‌زند.',
            'gym_phone' => '۰۱۱-۳۳۲۲۱۱۰۰',
            'gym_mobile' => '۰۹۱۱۱۲۳۴۵۶۷',
            'gym_address' => 'مازندران، ساری، خیابان فرهنگ، فرهنگ ۱۷ (محله باغ سنگ)',
            'gym_instagram' => 'https://www.instagram.com/m8_fitclub/?hl=fa',
            'gym_google_maps' => 'https://www.google.com/maps/search/+SH/?entry=wc&hl=el',
            'gym_neshan_maps' => 'https://neshan.org/maps/places/3b39d0a9ced51c7212d21bd534781b5e#c36.562-53.074-15z-0p',
            'gym_work_hours' => 'شنبه تا پنجشنبه: ۶:۰۰ تا ۲۳:۳۰ | جمعه‌ها: ۹:۰۰ تا ۲۰:۰۰',
            'stat_active_members' => '۲,۴۵۰+',
            'stat_trainers_count' => '۱۵ مربی رسمی',
            'stat_gym_area' => '۲,۵۰۰ متر مربع',
            'stat_experience_years' => '۷+ سال سابقه درخشان',
            'seo_title' => 'باشگاه M8 ساری | بزرگترین مجموعه ورزشی و فیتنس مازندران',
            'seo_description' => 'باشگاه بدنسازی و تندرستی M8 ساری با مجهزترین دستگاه‌های ورزشی، مربیان حرفه‌ای، اسپا، ماساژ و کافه سلامت. ثبت‌نام آنلاین و مشاوره رایگان.',
        ];

        foreach ($defaultSettings as $k => $v) {
            Setting::set($k, $v);
        }
    }
}
