<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Bell, CheckCircle, Clock, Coffee, RefreshCw } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    orders: Object,
});

function updateStatus(order, newStatus) {
    router.put(`/panel/buffet/orders/${order.id}/status`, {
        status: newStatus,
    }, { preserveScroll: true });
}

function refreshOrders() {
    router.reload({ only: ['orders'] });
}
</script>

<template>
    <PanelLayout>
        <Head title="سفارش‌های زنده بوفه و کافه" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Bell class="w-6 h-6 text-lime-400" />
                        <span>مانیتور سفارش‌های زنده بوفه و کافه M8</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده آنی سفارش‌های ثبت‌شده؛ آماده‌سازی و تغییر وضعیت</p>
                </div>

                <button
                    @click="refreshOrders"
                    class="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-semibold text-zinc-300 flex items-center gap-2 cursor-pointer"
                >
                    <RefreshCw class="w-3.5 h-3.5" />
                    <span>بروزرسانی لیست</span>
                </button>
            </div>

            <!-- Orders Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="ord in orders.data"
                    :key="ord.id"
                    class="p-6 rounded-3xl bg-zinc-900 border flex flex-col justify-between transition-all"
                    :class="{
                        'border-lime-400/80 shadow-xl shadow-lime-400/10 ring-1 ring-lime-400/30': ord.status === 'new',
                        'border-cyan-400/50': ord.status === 'preparing',
                        'border-zinc-800 opacity-80': ord.status === 'delivered',
                    }"
                >
                    <div>
                        <div class="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                            <div>
                                <span class="font-bold text-white text-sm">{{ ord.customer?.full_name }}</span>
                                <span class="text-[10px] text-zinc-500 font-mono block">{{ ord.order_no }}</span>
                            </div>
                            <span
                                class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                                :class="{
                                    'bg-lime-400 text-black animate-pulse': ord.status === 'new',
                                    'bg-cyan-400/20 text-cyan-400': ord.status === 'preparing',
                                    'bg-zinc-800 text-zinc-400': ord.status === 'delivered',
                                }"
                            >
                                {{
                                    ord.status === 'new' ? 'سفارش جدید!' :
                                    ord.status === 'preparing' ? 'در حال آماده‌سازی' :
                                    ord.status === 'ready' ? 'آماده تحویل' : 'تحویل شد'
                                }}
                            </span>
                        </div>

                        <!-- Items List -->
                        <div class="space-y-2 mb-4 text-xs">
                            <div v-for="it in ord.items" :key="it.id" class="flex items-center justify-between p-2 rounded-xl bg-zinc-950 border border-zinc-800/80">
                                <span class="font-bold text-white">{{ it.title_snapshot }}</span>
                                <span class="font-mono text-lime-400 font-bold">{{ it.qty }} عدد</span>
                            </div>
                        </div>

                        <div v-if="ord.note" class="text-[11px] text-amber-400 mb-3 p-2 rounded-lg bg-amber-400/10 border border-amber-400/20">
                            یادداشت مشتری: {{ ord.note }}
                        </div>
                    </div>

                    <div class="pt-3 border-t border-zinc-800 flex items-center justify-between">
                        <span class="text-xs font-mono font-bold text-white">{{ formatPrice(ord.total) }}</span>

                        <div class="flex items-center gap-1.5">
                            <button
                                v-if="ord.status === 'new'"
                                @click="updateStatus(ord, 'preparing')"
                                class="px-3 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold cursor-pointer"
                            >
                                شروع آماده‌سازی
                            </button>
                            <button
                                v-if="ord.status === 'preparing'"
                                @click="updateStatus(ord, 'ready')"
                                class="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold cursor-pointer"
                            >
                                آماده شد
                            </button>
                            <button
                                v-if="ord.status === 'ready'"
                                @click="updateStatus(ord, 'delivered')"
                                class="px-3 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold cursor-pointer"
                            >
                                تحویل به ورزشکار
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="orders.data.length === 0" class="col-span-3 p-16 text-center text-xs text-zinc-500">
                    سفارشی در جریان نیست.
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
