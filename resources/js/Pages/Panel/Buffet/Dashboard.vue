<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Coffee, Bell, TrendingUp, DollarSign } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    stats: Object,
    liveOrders: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد بوفه و کافه" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Coffee class="w-6 h-6 text-lime-400" />
                    <span>داشبورد بوفه و کافه سلامت M8</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">مدیریت سفارش‌های زنده، شیک‌های پروتئینی و فروش روزانه</p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">درآمد بوفه امروز</span>
                    <div class="text-2xl font-black text-lime-400 font-mono">{{ formatPrice(stats.today_revenue) }}</div>
                </div>
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">سفارش‌های امروز</span>
                    <div class="text-2xl font-black text-white font-mono">{{ stats.today_orders }} سفارش</div>
                </div>
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">سفارش‌های در حال آماده‌سازی</span>
                    <div class="text-2xl font-black text-amber-400 font-mono">{{ stats.live_orders_count }} سفارش</div>
                </div>
            </div>

            <!-- Live Orders Monitor Link -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div>
                    <h3 class="text-sm font-bold text-white flex items-center gap-2">
                        <Bell class="w-4 h-4 text-lime-400 animate-bounce" />
                        <span>مانیتور سفارش‌های زنده بوفه</span>
                    </h3>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده آنی سفارش‌های ثبت‌شده توسط اعضا در سالن جهت آماده‌سازی فوری</p>
                </div>
                <Link
                    href="/panel/buffet/orders"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20"
                >
                    مشاهده مانیتور زنده →
                </Link>
            </div>
        </div>
    </PanelLayout>
</template>
