<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Scissors, 
    Calendar, 
    Clock, 
    DollarSign, 
    Sparkles, 
    ChevronLeft,
    CheckCircle2,
    TrendingUp,
    UserCheck,
    CalendarCheck
} from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    stats: Object,
    upcoming: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد خدمات و اسپا - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Scissors class="w-4 h-4" />
                        <span>اسپا، ماساژ تخصصی و پیرایشگاه VIP</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">داشبورد خدمات و نوبت‌دهی M8</h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت نوبت‌های ماساژ ورزشی و ریکاوری، سالن پیرایش آقایان و برنامه زمانی متخصصان</p>
                </div>

                <div class="flex items-center gap-3">
                    <Link
                        href="/panel/service/bookings"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <CalendarCheck class="w-4 h-4 stroke-[2.5]" />
                        <span>تقویم و نوبت‌ها</span>
                    </Link>
                </div>
            </div>

            <!-- nk-block / Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">نوبت‌های رزرو امروز</span>
                        <div class="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold">
                            <Calendar class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-white font-mono">{{ stats.today_bookings }} نوبت</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span>ماساژ و پیرایشگاه آقایان</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">در انتظار تایید اپراتور</span>
                        <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                            <Clock class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-amber-400 font-mono">{{ stats.pending_bookings }} نوبت</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                            <span>نیازمند تایید نهایی زمان‌بندی</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">درآمد خدمات ماه جاری</span>
                        <div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                            <TrendingUp class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-lime-400 font-mono">{{ formatPrice(stats.monthly_revenue) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                            <span>تسویه‌شده با رزروهای موفق</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- nk-card / Upcoming Bookings List -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Clock class="w-4 h-4 text-lime-400" />
                        <h3 class="text-xs font-bold text-white uppercase tracking-wider">نوبت‌های رزرو پیش‌رو</h3>
                    </div>
                    <Link href="/panel/service/bookings" class="text-xs text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1">
                        <span>مشاهده همه نوبت‌ها</span>
                        <ChevronLeft class="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div class="divide-y divide-zinc-800/50">
                    <div
                        v-for="b in upcoming"
                        :key="b.id"
                        class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
                    >
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0">
                                <Scissors class="w-5 h-5" />
                            </div>
                            <div>
                                <span class="font-bold text-white text-xs sm:text-sm block">{{ b.member?.full_name || 'کاربر باشگاه' }}</span>
                                <span class="text-zinc-400 text-[11px] block mt-0.5">{{ b.service?.title }}</span>
                            </div>
                        </div>

                        <div class="text-left font-mono">
                            <span class="text-zinc-300 font-bold text-xs block" dir="ltr">{{ formatJalaliDateTime(b.starts_at) }}</span>
                            <span 
                                class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold mt-1 font-sans border"
                                :class="b.status === 'confirmed' 
                                    ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                                    : 'bg-amber-400/10 text-amber-400 border-amber-400/20'"
                            >
                                <span class="w-1.5 h-1.5 rounded-full" :class="b.status === 'confirmed' ? 'bg-emerald-400' : 'bg-amber-400'"></span>
                                {{ b.status === 'confirmed' ? 'تایید شده' : 'در انتظار' }}
                            </span>
                        </div>
                    </div>

                    <div v-if="!upcoming || upcoming.length === 0" class="p-12 text-center text-xs text-zinc-500">
                        نوبت پیش‌رویی در سیستم ثبت نگردیده است.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
