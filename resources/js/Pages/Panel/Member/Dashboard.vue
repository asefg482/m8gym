<script setup>
import { ref } from 'vue';
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
    Edit,
    X,
    CheckCircle
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
</script>

<template>
    <PanelLayout>
        <Head title="پروفایل و اشتراک من" />

        <div class="space-y-6">
            <!-- Header Banner -->
            <div class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5">
                        <div class="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center text-xl font-bold text-lime-400">
                            {{ member.first_name ? member.first_name.charAt(0) : 'M' }}
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h1 class="text-xl font-black text-white">{{ member.full_name }}</h1>
                            <span v-if="member.is_vip" class="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
                                <Crown class="w-3 h-3" />
                                عضو VIP
                            </span>
                        </div>
                        <p class="text-xs text-zinc-400 mt-1 font-mono" dir="ltr">{{ member.mobile }}</p>
                    </div>
                </div>

                <button
                    @click="isEditProfileOpen = true"
                    class="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
                >
                    <Edit class="w-3.5 h-3.5 text-lime-400" />
                    <span>تکمیل و ویرایش مشخصات</span>
                </button>
            </div>

            <!-- Active Membership Card -->
            <div class="p-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-xl relative overflow-hidden">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div class="flex items-center gap-2.5">
                        <CreditCard class="w-5 h-5 text-lime-400" />
                        <h2 class="text-sm font-bold text-white">وضعیت اشتراک باشگاه</h2>
                    </div>
                    <Link
                        href="/panel/member/membership"
                        class="text-xs font-bold text-lime-400 hover:underline"
                    >
                        تمدید یا ارتقای پلن →
                    </Link>
                </div>

                <div v-if="activeMembership" class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div class="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                        <span class="text-xs text-zinc-400">پلن فعال:</span>
                        <div class="text-base font-bold text-white mt-1">{{ activeMembership.plan?.title }}</div>
                    </div>
                    <div class="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                        <span class="text-xs text-zinc-400">تاریخ انقضا:</span>
                        <div class="text-base font-bold text-white mt-1 font-mono">{{ formatJalaliDate(activeMembership.ends_at) }}</div>
                    </div>
                    <div class="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                        <span class="text-xs text-zinc-400">روزهای باقیمانده:</span>
                        <div class="text-xl font-black text-lime-400 mt-1 font-mono">
                            {{ activeMembership.days_remaining }} روز
                        </div>
                    </div>
                </div>

                <div v-else class="p-6 text-center rounded-2xl bg-zinc-950/80 border border-zinc-800">
                    <p class="text-xs text-zinc-400 mb-3">شما در حال حاضر اشتراک فعالی در باشگاه M8 ندارید.</p>
                    <Link
                        href="/panel/member/membership"
                        class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold inline-block"
                    >
                        مشاهده و خرید آنلاین اشتراک
                    </Link>
                </div>
            </div>

            <!-- Grid: Recent Workout & Bookings -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Workout Plan -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-bold text-white flex items-center gap-2">
                            <Dumbbell class="w-4 h-4 text-lime-400" />
                            <span>آخرین برنامه تمرینی / تغذیه</span>
                        </h3>
                        <Link href="/panel/member/workout_plans" class="text-xs text-lime-400 hover:underline">مشاهده همه</Link>
                    </div>

                    <div v-if="recentWorkoutPlan" class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="font-bold text-white text-xs">{{ recentWorkoutPlan.title }}</span>
                            <span class="text-[10px] text-zinc-400">مربی: {{ recentWorkoutPlan.trainer?.full_name }}</span>
                        </div>
                        <div class="text-xs text-zinc-400 line-clamp-2">
                            {{ recentWorkoutPlan.notes || 'برنامه مدون اختصاصی برای اهداف تناسب اندام شما' }}
                        </div>
                    </div>
                    <div v-else class="p-6 text-center text-xs text-zinc-500">
                        هنوز برنامه‌ای برای شما ثبت نشده است.
                    </div>
                </div>

                <!-- Upcoming Bookings -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-bold text-white flex items-center gap-2">
                            <Clock class="w-4 h-4 text-lime-400" />
                            <span>رزروهای پیش‌رو (ماساژ / آرایشگاه)</span>
                        </h3>
                        <Link href="/panel/member/bookings" class="text-xs text-lime-400 hover:underline">مشاهده همه</Link>
                    </div>

                    <div v-if="upcomingBookings.length > 0" class="space-y-3">
                        <div
                            v-for="b in upcomingBookings"
                            :key="b.id"
                            class="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs"
                        >
                            <div>
                                <div class="font-bold text-white">{{ b.service?.title }}</div>
                                <div class="text-[10px] text-zinc-400 font-mono mt-0.5">
                                    {{ formatJalaliDateTime(b.starts_at) }}
                                </div>
                            </div>
                            <span class="text-[10px] px-2 py-0.5 rounded-md bg-lime-400/10 text-lime-400 font-bold">
                                {{ b.status === 'confirmed' ? 'تایید شده' : 'در انتظار' }}
                            </span>
                        </div>
                    </div>
                    <div v-else class="p-6 text-center text-xs text-zinc-500">
                        رزرو فعالی ندارید.
                    </div>
                </div>
            </div>

            <!-- Profile Edit Modal -->
            <div v-if="isEditProfileOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">تکمیل مشخصات فردی و سلامت</h3>
                        <button @click="isEditProfileOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="saveProfile" class="space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">نام</label>
                                <input v-model="profileForm.first_name" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">نام خانوادگی</label>
                                <input v-model="profileForm.last_name" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">قد (سانتی‌متر)</label>
                                <input v-model.number="profileForm.height" type="number" placeholder="۱۸۰" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">وزن (کیلوگرم)</label>
                                <input v-model.number="profileForm.weight" type="number" step="0.1" placeholder="۷۸.۵" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">هدف ورزشی شما</label>
                            <input v-model="profileForm.goals" type="text" placeholder="کاهش وزن، عضله‌سازی، افزایش استقامت..." class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">شماره تماس اضطراری</label>
                            <input v-model="profileForm.emergency_contact" type="text" placeholder="۰۹۱۲۳۴۵۶۷۸۹ (همسر / پدر)" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isEditProfileOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ذخیره مشخصات</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
