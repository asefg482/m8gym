<script setup>
import { ref, computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import {
    User,
    CreditCard,
    Crown,
    CalendarCheck,
    Dumbbell,
    Clock,
    ShoppingBag,
    Edit3,
    X,
    CheckCircle2,
    Flame,
    Sparkles,
    Scissors,
    ArrowUpRight,
    Activity,
    Target,
    PhoneCall,
    Calendar,
    ChevronLeft
} from '@lucide/vue';
import { formatJalaliDate, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    member: Object,
    activeMembership: Object,
    recentWorkoutPlan: Object,
    upcomingBookings: Array,
    recentOrders: Array,
    recentAttendances: Array,
});

const isEditProfileOpen = ref(false);

const profileForm = useForm({
    first_name: props.member.first_name || '',
    last_name: props.member.last_name || '',
    national_code: props.member.national_code || '',
    birth_date: props.member.birth_date || '',
    gender: props.member.gender || 'male',
    height: props.member.member_profile?.height || '',
    weight: props.member.member_profile?.weight || '',
    goals: props.member.member_profile?.goals || '',
    emergency_contact: props.member.member_profile?.emergency_contact || '',
});

function saveProfile() {
    profileForm.put('/panel/member/profile', {
        onSuccess: () => isEditProfileOpen.value = false,
    });
}

// Calculate live BMI
const calculatedBmi = computed(() => {
    const h = Number(props.member.member_profile?.height);
    const w = Number(props.member.member_profile?.weight);
    if (!h || !w || h <= 0) return null;
    const m = h / 100;
    return (w / (m * m)).toFixed(1);
});

const bmiStatus = computed(() => {
    if (!calculatedBmi.value) return null;
    const val = Number(calculatedBmi.value);
    if (val < 18.5) return { label: 'کمبود وزن', color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' };
    if (val < 25) return { label: 'وزن ایده‌آل و نرمال', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' };
    if (val < 30) return { label: 'اضافه وزن', color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' };
    return { label: 'چاقی نیازمند اصلاح', color: 'text-rose-400 bg-rose-400/10 border-rose-400/30' };
});

const attendanceCountThisMonth = computed(() => {
    return props.recentAttendances ? props.recentAttendances.length : 0;
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد من - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <span>داشبورد اختصاصی ورزشکار</span>
                        <span v-if="member.is_vip" class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
                            <Crown class="w-3.5 h-3.5" />
                            عضو VIP
                        </span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        خلاصه وضعیت اشتراک، تمرینات و شاخص‌های تناسب اندام شما در باشگاه M8 ساری
                    </p>
                </div>

                <!-- Block Head Actions -->
                <div class="flex items-center gap-2.5 shrink-0">
                    <button
                        @click="isEditProfileOpen = true"
                        type="button"
                        class="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                    >
                        <Edit3 class="w-3.5 h-3.5 text-lime-400" />
                        <span>ویرایش پرونده</span>
                    </button>

                    <Link
                        href="/panel/member/membership"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-lime-400/20"
                    >
                        <span>تمدید اشتراک</span>
                        <ChevronLeft class="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <!-- Dashlite 4-Column Metric Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                <!-- Card 1: Active Membership -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">اشتراک فعال</span>
                            <div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center">
                                <CreditCard class="w-4 h-4" />
                            </div>
                        </div>

                        <div v-if="activeMembership">
                            <div class="text-lg font-black text-white truncate">{{ activeMembership.plan?.title }}</div>
                            <div class="text-2xl font-black text-lime-400 font-mono mt-1">
                                {{ activeMembership.days_remaining }} <span class="text-xs font-normal text-zinc-400">روز باقیمانده</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="text-sm font-bold text-zinc-400">فاقد اشتراک فعال</div>
                            <div class="text-xs text-rose-400 mt-1">نیاز به تمدید دوره</div>
                        </div>
                    </div>

                    <div class="pt-4 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span v-if="activeMembership" class="text-zinc-400 font-mono">تا {{ formatJalaliDate(activeMembership.ends_at) }}</span>
                        <span v-else class="text-zinc-500">مشاهده پلن‌ها</span>
                        <Link href="/panel/member/membership" class="text-lime-400 font-bold hover:underline">جزئیات پلن ←</Link>
                    </div>
                </div>

                <!-- Card 2: Attendance Consistency -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">حضور ماه جاری</span>
                            <div class="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                                <Flame class="w-4 h-4" />
                            </div>
                        </div>

                        <div class="text-2xl font-black text-white font-mono">
                            {{ attendanceCountThisMonth }} <span class="text-xs font-normal text-zinc-400">جلسه تمرین</span>
                        </div>
                        <p class="text-[11px] text-zinc-400 mt-1">ثبت الکترونیکی گیت باشگاه M8</p>
                    </div>

                    <div class="pt-4 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span class="text-emerald-400 font-bold flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            فعال در این ماه
                        </span>
                        <Link href="/panel/member/history" class="text-lime-400 font-bold hover:underline">تقویم حضور ←</Link>
                    </div>
                </div>

                <!-- Card 3: Workout Plan -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">برنامه تمرینی</span>
                            <div class="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                <Dumbbell class="w-4 h-4" />
                            </div>
                        </div>

                        <div v-if="recentWorkoutPlan">
                            <div class="text-sm font-bold text-white truncate">{{ recentWorkoutPlan.title }}</div>
                            <div class="text-[11px] text-zinc-400 mt-1">مربی: {{ recentWorkoutPlan.trainer?.full_name || 'کادر فنی M8' }}</div>
                        </div>
                        <div v-else>
                            <div class="text-sm font-bold text-zinc-400">برنامه‌ای ثبت نشده</div>
                            <div class="text-[11px] text-zinc-500 mt-1">درخواست از مربیان باشگاه</div>
                        </div>
                    </div>

                    <div class="pt-4 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span class="text-zinc-400">اختصاصی</span>
                        <Link href="/panel/member/workout_plans" class="text-lime-400 font-bold hover:underline">مشاهده حرکات ←</Link>
                    </div>
                </div>

                <!-- Card 4: Services & Bookings -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">نوبت‌های رزرو من</span>
                            <div class="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                                <Sparkles class="w-4 h-4" />
                            </div>
                        </div>

                        <div class="text-2xl font-black text-white font-mono">
                            {{ upcomingBookings ? upcomingBookings.length : 0 }} <span class="text-xs font-normal text-zinc-400">نوبت فعال</span>
                        </div>
                        <p class="text-[11px] text-zinc-400 mt-1">ماساژ، اسپا و پیرایشگاه VIP</p>
                    </div>

                    <div class="pt-4 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span class="text-purple-400 font-bold">خدمات ریکاوری</span>
                        <Link href="/panel/member/bookings" class="text-lime-400 font-bold hover:underline">لیست نوبت‌ها ←</Link>
                    </div>
                </div>
            </div>

            <!-- Dashlite 2-Column Main Blocks Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <!-- Right Column (7 cols): Vitals & Health Summary + Recent Attendances -->
                <div class="lg:col-span-7 space-y-6">
                    <!-- Dashlite Health & Vitals Widget -->
                    <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-5">
                        <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                            <div class="flex items-center gap-2.5">
                                <Activity class="w-5 h-5 text-lime-400" />
                                <h3 class="text-sm font-bold text-white">شاخص‌های سلامت و تناسب اندام شما</h3>
                            </div>
                            <button
                                @click="isEditProfileOpen = true"
                                class="text-xs font-bold text-lime-400 hover:underline flex items-center gap-1 cursor-pointer"
                            >
                                <Edit3 class="w-3.5 h-3.5" />
                                <span>ویرایش</span>
                            </button>
                        </div>

                        <!-- Vitals Grid -->
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div class="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
                                <span class="text-[11px] text-zinc-400 block">قد شما:</span>
                                <span class="text-base font-black text-white font-mono mt-1 block">
                                    {{ member.member_profile?.height ? `${member.member_profile.height} cm` : 'ثبت نشده' }}
                                </span>
                            </div>

                            <div class="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
                                <span class="text-[11px] text-zinc-400 block">وزن شما:</span>
                                <span class="text-base font-black text-lime-400 font-mono mt-1 block">
                                    {{ member.member_profile?.weight ? `${member.member_profile.weight} kg` : 'ثبت نشده' }}
                                </span>
                            </div>

                            <div class="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
                                <span class="text-[11px] text-zinc-400 block">شاخص BMI:</span>
                                <span class="text-base font-black text-white font-mono mt-1 block">
                                    {{ calculatedBmi || '-' }}
                                </span>
                            </div>

                            <div class="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70">
                                <span class="text-[11px] text-zinc-400 block">وضعیت بدنی:</span>
                                <span
                                    v-if="bmiStatus"
                                    class="text-[10px] font-bold mt-1.5 inline-block px-2 py-0.5 rounded-md border"
                                    :class="bmiStatus.color"
                                >
                                    {{ bmiStatus.label }}
                                </span>
                                <span v-else class="text-xs text-zinc-500 mt-1 block">-</span>
                            </div>
                        </div>

                        <!-- Fitness Goals & Emergency Contact -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div class="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70 flex items-start gap-3">
                                <Target class="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                                <div>
                                    <span class="text-[11px] text-zinc-400 block">هدف ورزشی فعلی:</span>
                                    <span class="text-xs font-bold text-white mt-0.5 block">
                                        {{ member.member_profile?.goals || 'تعیین نشده (کاهش وزن، عضله‌سازی و ...)' }}
                                    </span>
                                </div>
                            </div>

                            <div class="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70 flex items-start gap-3">
                                <PhoneCall class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <div>
                                    <span class="text-[11px] text-zinc-400 block">تماس اضطراری:</span>
                                    <span class="text-xs font-bold text-white font-mono mt-0.5 block" dir="ltr">
                                        {{ member.member_profile?.emergency_contact || 'ثبت نشده' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dashlite Attendance History List Card -->
                    <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                            <div class="flex items-center gap-2.5">
                                <CalendarCheck class="w-5 h-5 text-lime-400" />
                                <h3 class="text-sm font-bold text-white">آخرین جلسات حضور در باشگاه</h3>
                            </div>
                            <Link href="/panel/member/history" class="text-xs font-bold text-lime-400 hover:underline">
                                مشاهده تقویم کامل →
                            </Link>
                        </div>

                        <div v-if="recentAttendances && recentAttendances.length > 0" class="divide-y divide-zinc-800/60">
                            <div
                                v-for="att in recentAttendances.slice(0, 4)"
                                :key="att.id"
                                class="py-3 flex items-center justify-between hover:bg-zinc-800/20 px-2 rounded-xl transition-colors"
                            >
                                <div class="flex items-center gap-3">
                                    <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></div>
                                    <div>
                                        <span class="text-xs font-bold text-white block">{{ formatJalaliDate(att.date) }}</span>
                                        <span class="text-[10px] text-zinc-400">تردد الکترونیکی موفق در سالن M8</span>
                                    </div>
                                </div>

                                <span class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-950 text-lime-400 border border-zinc-800">
                                    حضور ثبت شده
                                </span>
                            </div>
                        </div>
                        <div v-else class="p-8 text-center text-xs text-zinc-500">
                            هنوز جلسه حضوری برای این ماه ثبت نشده است.
                        </div>
                    </div>
                </div>

                <!-- Left Column (5 cols): Active Workout & Upcoming Bookings -->
                <div class="lg:col-span-5 space-y-6">
                    <!-- Dashlite Active Workout Plan Card -->
                    <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                            <div class="flex items-center gap-2.5">
                                <Dumbbell class="w-5 h-5 text-lime-400" />
                                <h3 class="text-sm font-bold text-white">برنامه تمرینی اختصاصی</h3>
                            </div>
                            <Link href="/panel/member/workout_plans" class="text-xs font-bold text-lime-400 hover:underline">
                                لیست کامل
                            </Link>
                        </div>

                        <div v-if="recentWorkoutPlan" class="space-y-4">
                            <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80">
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-bold text-white">{{ recentWorkoutPlan.title }}</span>
                                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-lime-400/10 text-lime-400">
                                        {{ recentWorkoutPlan.type === 'workout' ? 'تمرین' : 'تغذیه' }}
                                    </span>
                                </div>
                                <div class="text-[11px] text-zinc-400 mt-1">مربی مسئول: {{ recentWorkoutPlan.trainer?.full_name }}</div>
                                <div class="text-[11px] text-zinc-500 mt-2 line-clamp-2">
                                    {{ recentWorkoutPlan.notes || 'طراحی اختصاصی با تکیه بر اصول ریکاوری و هایپرتروفی عضلانی' }}
                                </div>
                            </div>

                            <Link
                                href="/panel/member/workout_plans"
                                class="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-200 flex items-center justify-center gap-2 transition-colors"
                            >
                                <Dumbbell class="w-4 h-4 text-lime-400" />
                                <span>مشاهده حرکات و ست‌های تمرینی</span>
                            </Link>
                        </div>
                        <div v-else class="p-8 text-center text-xs text-zinc-500">
                            برنامه فعالی برای شما ثبت نشده است. با مربی خود در باشگاه هماهنگ نمایید.
                        </div>
                    </div>

                    <!-- Dashlite Upcoming Bookings Card -->
                    <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                        <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                            <div class="flex items-center gap-2.5">
                                <Clock class="w-5 h-5 text-purple-400" />
                                <h3 class="text-sm font-bold text-white">نوبت‌های رزرو خدمات</h3>
                            </div>
                            <Link href="/panel/member/bookings" class="text-xs font-bold text-lime-400 hover:underline">
                                همه نوبت‌ها
                            </Link>
                        </div>

                        <div v-if="upcomingBookings && upcomingBookings.length > 0" class="space-y-2.5">
                            <div
                                v-for="b in upcomingBookings.slice(0, 3)"
                                :key="b.id"
                                class="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between"
                            >
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 shrink-0">
                                        <Sparkles v-if="b.service?.category === 'massage'" class="w-4 h-4" />
                                        <Scissors v-else class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span class="text-xs font-bold text-white block">{{ b.service?.title }}</span>
                                        <span class="text-[10px] text-zinc-400 font-mono mt-0.5 block">
                                            {{ formatJalaliDateTime(b.starts_at) }}
                                        </span>
                                    </div>
                                </div>

                                <span class="text-[10px] px-2 py-0.5 rounded-md font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    تایید شده
                                </span>
                            </div>
                        </div>
                        <div v-else class="p-8 text-center text-xs text-zinc-500">
                            نوبت رزروی برای ماساژ یا آرایشگاه ندارید.
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dashlite Modal: Profile Edit -->
            <div v-if="isEditProfileOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
                <div class="w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <User class="w-5 h-5 text-lime-400" />
                            <h3 class="text-sm font-bold text-white">ویرایش و تکمیل پرونده ورزشی</h3>
                        </div>
                        <button @click="isEditProfileOpen = false" class="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="saveProfile" class="space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">نام</label>
                                <input v-model="profileForm.first_name" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400" required />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">نام خانوادگی</label>
                                <input v-model="profileForm.last_name" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400" required />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">قد (سانتی‌متر)</label>
                                <input v-model.number="profileForm.height" type="number" placeholder="۱۸۰" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">وزن (کیلوگرم)</label>
                                <input v-model.number="profileForm.weight" type="number" step="0.1" placeholder="۷۸.۵" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">هدف ورزشی شما در باشگاه M8</label>
                            <input v-model="profileForm.goals" type="text" placeholder="کاهش چربی، هایپرتروفی عضلانی، بهبود استقامت..." class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400" />
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">شماره تماس اضطراری</label>
                            <input v-model="profileForm.emergency_contact" type="text" placeholder="۰۹۱۲۳۴۵۶۷۸۹ (نسبت: همسر / پدر)" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400" />
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-2.5">
                            <button @click="isEditProfileOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors">انصراف</button>
                            <button type="submit" class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20">ذخیره تغییرات</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
