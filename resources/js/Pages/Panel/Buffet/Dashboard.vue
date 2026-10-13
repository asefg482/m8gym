<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Coffee, 
    Bell, 
    TrendingUp, 
    DollarSign, 
    Calculator, 
    Utensils, 
    ChevronLeft,
    Clock,
    Flame
} from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    stats: Object,
    liveOrders: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد بوفه و کافه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Coffee class="w-4 h-4" />
                        <span>کافه پروتئین و تغذیه ورزشی</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">داشبورد بوفه و کافه سلامت M8</h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت سفارش‌های زنده سالن، شیک‌های رژیمی، قهوه و نوشیدنی‌های ریکاوری</p>
                </div>

                <div class="flex items-center gap-3">
                    <Link
                        href="/panel/buffet/pos"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Calculator class="w-4 h-4 stroke-[2.5]" />
                        <span>صندوق بوفه (POS)</span>
                    </Link>
                </div>
            </div>

            <!-- nk-block / Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">درآمد بوفه امروز</span>
                        <div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                            <TrendingUp class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-lime-400 font-mono">{{ formatPrice(stats.today_revenue) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                            <span>محاسبه شده از صندوق و سفارشات آنلاین</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">تعداد کل سفارش‌های امروز</span>
                        <div class="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold">
                            <Coffee class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-white font-mono">{{ stats.today_orders }} سفارش</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span>ثبت‌شده در کافه سلامت</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">سفارش‌های در حال آماده‌سازی</span>
                        <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                            <Clock class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-amber-400 font-mono">{{ stats.live_orders_count }} سفارش</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                            <span>نیازمند سرو سریع به ورزشکار</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- nk-card / Live Orders Monitor Link Banner -->
            <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold shrink-0">
                        <Bell class="w-6 h-6 animate-bounce" />
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-white flex items-center gap-2">
                            <span>مانیتور سفارش‌های زنده بوفه (Kitchen Display)</span>
                            <span class="px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 text-[10px] font-bold">زنده</span>
                        </h3>
                        <p class="text-xs text-zinc-400 mt-1">مشاهده آنی سفارش‌های ثبت‌شده توسط اعضا در اپلیکیشن هنگام تمرین جهت آماده‌سازی فوری شیک و اسموتی</p>
                    </div>
                </div>

                <Link
                    href="/panel/buffet/orders"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black transition-all shadow-md shadow-lime-400/20 flex items-center gap-1.5 shrink-0"
                >
                    <span>مشاهده مانیتور سفارشات</span>
                    <ChevronLeft class="w-4 h-4" />
                </Link>
            </div>
        </div>
    </PanelLayout>
</template>
