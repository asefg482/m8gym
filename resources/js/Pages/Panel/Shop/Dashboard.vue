<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Package, ShoppingBag, AlertTriangle, TrendingUp, DollarSign } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    stats: Object,
    recentOrders: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد فروشگاه" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <ShoppingBag class="w-6 h-6 text-lime-400" />
                    <span>داشبورد فروشگاه M8</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">مدیریت موجودی مکمل‌ها، پوشاک ورزشی و پیگیری سفارش‌ها</p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">فروش امروز</span>
                    <div class="text-xl font-black text-lime-400 font-mono">{{ formatPrice(stats.today_sales) }}</div>
                </div>
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">تعداد سفارش‌های امروز</span>
                    <div class="text-2xl font-black text-white font-mono">{{ stats.today_orders }} سفارش</div>
                </div>
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">کالاهای رو به اتمام (کمتر از ۵)</span>
                    <div class="text-2xl font-black text-amber-400 font-mono">{{ stats.low_stock_count }} کالا</div>
                </div>
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">سفارش‌های نیازمند آماده‌سازی</span>
                    <div class="text-2xl font-black text-white font-mono">{{ stats.pending_orders }} عدد</div>
                </div>
            </div>

            <!-- Recent Orders -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-bold text-white">آخرین سفارش‌های ثبت‌شده</h3>
                    <Link href="/panel/shop/orders" class="text-xs text-lime-400 hover:underline">مشاهده همه سفارش‌ها</Link>
                </div>

                <div class="divide-y divide-zinc-800/60">
                    <div
                        v-for="ord in recentOrders"
                        :key="ord.id"
                        class="py-3 flex items-center justify-between text-xs"
                    >
                        <div>
                            <span class="font-bold text-white">{{ ord.customer?.full_name }}</span>
                            <span class="text-zinc-500 font-mono block text-[10px]">{{ ord.order_no }}</span>
                        </div>
                        <div class="text-left font-mono">
                            <span class="text-lime-400 font-bold block">{{ formatPrice(ord.total) }}</span>
                            <span class="text-zinc-500 text-[10px]">{{ ord.status }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
