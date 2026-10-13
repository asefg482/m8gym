<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { ShoppingBag, Package, Coffee, CheckCircle, Clock } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    orders: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="پیگیری سفارش‌های من" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <ShoppingBag class="w-6 h-6 text-lime-400" />
                        <span>پیگیری سفارش‌های کافه و فروشگاه M8</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده فاکتور، جزییات اقلام و وضعیت آماده‌سازی سفارش‌ها</p>
                </div>

                <div class="flex items-center gap-2">
                    <Link href="/cafe" class="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400">
                        سفارش از کافه
                    </Link>
                    <Link href="/shop" class="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400">
                        خرید از فروشگاه
                    </Link>
                </div>
            </div>

            <!-- Orders List -->
            <div class="space-y-4">
                <div
                    v-for="order in orders"
                    :key="order.id"
                    class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"
                >
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-800 gap-2">
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs font-bold text-lime-400">{{ order.order_no }}</span>
                            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300">
                                {{ order.scope === 'buffet' ? 'بوفه و کافه' : 'فروشگاه مکمل/پوشاک' }}
                            </span>
                        </div>
                        <div class="text-xs text-zinc-400 font-mono">
                            {{ formatJalaliDateTime(order.created_at) }}
                        </div>
                    </div>

                    <!-- Items -->
                    <div class="divide-y divide-zinc-800/60 text-xs">
                        <div
                            v-for="item in order.items"
                            :key="item.id"
                            class="py-2.5 flex items-center justify-between"
                        >
                            <span class="text-white font-medium">
                                {{ item.title_snapshot }} <span class="text-zinc-500 font-mono">({{ item.qty }} عدد)</span>
                            </span>
                            <span class="font-mono text-zinc-300">{{ formatPrice(item.price_snapshot * item.qty) }}</span>
                        </div>
                    </div>

                    <!-- Total & Status -->
                    <div class="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
                        <div class="flex items-center gap-2">
                            <span class="text-zinc-400">وضعیت سفارش:</span>
                            <span
                                class="px-2.5 py-1 rounded-full text-[11px] font-bold"
                                :class="{
                                    'bg-lime-400/10 text-lime-400': order.status === 'delivered',
                                    'bg-cyan-400/10 text-cyan-400': order.status === 'ready',
                                    'bg-amber-400/10 text-amber-400': order.status === 'preparing' || order.status === 'new',
                                    'bg-red-400/10 text-red-400': order.status === 'cancelled'
                                }"
                            >
                                {{
                                    order.status === 'delivered' ? 'تحویل داده شد' :
                                    order.status === 'ready' ? 'آماده تحویل' :
                                    order.status === 'preparing' ? 'در حال آماده‌سازی' :
                                    order.status === 'cancelled' ? 'لغو شده' : 'ثبت شده'
                                }}
                            </span>
                        </div>

                        <div class="font-mono text-sm font-black text-lime-400">
                            مبلغ کل: {{ formatPrice(order.total) }}
                        </div>
                    </div>
                </div>

                <div v-if="orders.length === 0" class="p-16 text-center rounded-3xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-500">
                    شما سفارشی ثبت نکرده‌اید.
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
