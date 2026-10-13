<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { ShoppingBag, Package, Coffee, CheckCircle, Clock, ChevronLeft } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    orders: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="پیگیری سفارش‌های من - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <ShoppingBag class="w-6 h-6 text-lime-400" />
                        <span>سفارش‌ها و فاکتورهای من</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        مشاهده صورت‌حساب، جزییات اقلام خریداری شده از کافه، بار پروتئین و فروشگاه ورزشی M8
                    </p>
                </div>

                <div class="flex items-center gap-2.5">
                    <Link
                        href="/cafe"
                        class="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-bold text-zinc-200 flex items-center gap-1.5 transition-colors"
                    >
                        <Coffee class="w-3.5 h-3.5 text-lime-400" />
                        <span>منوی کافه</span>
                    </Link>
                    <Link
                        href="/shop"
                        class="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-bold text-zinc-200 flex items-center gap-1.5 transition-colors"
                    >
                        <Package class="w-3.5 h-3.5 text-lime-400" />
                        <span>فروشگاه مکمل</span>
                    </Link>
                </div>
            </div>

            <!-- Orders List -->
            <div v-if="orders && orders.length > 0" class="space-y-5">
                <div
                    v-for="order in orders"
                    :key="order.id"
                    class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4"
                >
                    <!-- Order Header -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-zinc-800/80 gap-2.5">
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs font-bold text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-lg border border-lime-400/20">
                                #{{ order.order_no }}
                            </span>
                            <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300">
                                {{ order.scope === 'buffet' ? 'کافه و بار پروتئین' : 'فروشگاه مکمل و پوشاک' }}
                            </span>
                        </div>
                        <div class="text-xs text-zinc-400 font-mono">
                            {{ formatJalaliDateTime(order.created_at) }}
                        </div>
                    </div>

                    <!-- Items List -->
                    <div class="divide-y divide-zinc-800/60 text-xs">
                        <div
                            v-for="item in order.items"
                            :key="item.id"
                            class="py-3 flex items-center justify-between"
                        >
                            <span class="text-white font-medium">
                                {{ item.title_snapshot }} <span class="text-zinc-500 font-mono text-[11px]">× {{ item.qty }}</span>
                            </span>
                            <span class="font-mono text-zinc-300 font-semibold">{{ formatPrice(item.price_snapshot * item.qty) }}</span>
                        </div>
                    </div>

                    <!-- Total & Status -->
                    <div class="pt-3.5 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                        <div class="flex items-center gap-2">
                            <span class="text-zinc-400 text-[11px]">وضعیت:</span>
                            <span
                                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border"
                                :class="{
                                    'bg-emerald-500/10 text-emerald-400 border-emerald-500/20': order.status === 'delivered',
                                    'bg-cyan-500/10 text-cyan-400 border-cyan-500/20': order.status === 'ready',
                                    'bg-amber-500/10 text-amber-400 border-amber-500/20': order.status === 'preparing' || order.status === 'new',
                                    'bg-rose-500/10 text-rose-400 border-rose-500/20': order.status === 'cancelled'
                                }"
                            >
                                <span
                                    class="w-1.5 h-1.5 rounded-full"
                                    :class="{
                                        'bg-emerald-400': order.status === 'delivered',
                                        'bg-cyan-400': order.status === 'ready',
                                        'bg-amber-400': order.status === 'preparing' || order.status === 'new',
                                        'bg-rose-400': order.status === 'cancelled'
                                    }"
                                ></span>
                                <span>
                                    {{
                                        order.status === 'delivered' ? 'تحویل داده شد' :
                                        order.status === 'ready' ? 'آماده تحویل در باشگاه' :
                                        order.status === 'preparing' ? 'در حال آماده‌سازی' :
                                        order.status === 'cancelled' ? 'لغو شده' : 'ثبت شده'
                                    }}
                                </span>
                            </span>
                        </div>

                        <div class="font-mono text-sm font-black text-lime-400">
                            مبلغ فاکتور: {{ formatPrice(order.total) }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-else class="p-16 text-center rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm text-xs text-zinc-500">
                <ShoppingBag class="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                <span class="block font-bold text-white text-sm">شما هنوز سفارشی ثبت نکرده‌اید</span>
                <span class="text-zinc-400 block mt-1">می‌توانید اسموتی، غذاهای رژیمی یا مکمل‌های ورزشی را آنلاین سفارش دهید.</span>
            </div>
        </div>
    </PanelLayout>
</template>
