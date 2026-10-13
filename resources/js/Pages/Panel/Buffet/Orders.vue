<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    Bell, 
    CheckCircle2, 
    Clock, 
    Coffee, 
    RefreshCw, 
    Check, 
    Flame, 
    Utensils, 
    MessageSquare,
    ChevronLeft
} from '@lucide/vue';
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
        <Head title="مانیتور سفارش‌های زنده بوفه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Bell class="w-4 h-4 animate-bounce" />
                        <span>مانیتورینگ آنی سالن (Kitchen Display System)</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">سفارش‌های زنده بوفه و کافه سلامت M8</h1>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده و آماده‌سازی فوری سفارش‌های شیک، اسموتی و میان‌وعده‌های ثبت‌شده توسط ورزشکاران</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="refreshOrders"
                        class="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-2 cursor-pointer shadow-lg transition-all"
                    >
                        <RefreshCw class="w-3.5 h-3.5" />
                        <span>بروزرسانی زنده</span>
                    </button>
                </div>
            </div>

            <!-- nk-block / Orders Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                    v-for="ord in orders.data"
                    :key="ord.id"
                    class="p-5 rounded-2xl bg-zinc-900/90 border flex flex-col justify-between transition-all shadow-xl backdrop-blur-sm"
                    :class="{
                        'border-lime-400/70 shadow-lime-400/10 ring-1 ring-lime-400/30': ord.status === 'new',
                        'border-cyan-400/50': ord.status === 'preparing',
                        'border-amber-400/50': ord.status === 'ready',
                        'border-zinc-800/80 opacity-70': ord.status === 'delivered',
                    }"
                >
                    <div>
                        <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3.5">
                            <div>
                                <span class="font-bold text-white text-sm block">{{ ord.customer?.full_name || 'مشتری سالن' }}</span>
                                <span class="text-[10px] text-zinc-500 font-mono block mt-0.5">سفارش #{{ ord.order_no }}</span>
                            </div>
                            <span
                                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"
                                :class="{
                                    'bg-lime-400 text-black border-lime-400 font-black animate-pulse': ord.status === 'new',
                                    'bg-cyan-400/10 text-cyan-400 border-cyan-400/20': ord.status === 'preparing',
                                    'bg-amber-400/10 text-amber-400 border-amber-400/20': ord.status === 'ready',
                                    'bg-zinc-800 text-zinc-400 border-zinc-700': ord.status === 'delivered',
                                }"
                            >
                                <span v-if="ord.status !== 'new'" class="w-1.5 h-1.5 rounded-full" :class="{
                                    'bg-cyan-400': ord.status === 'preparing',
                                    'bg-amber-400': ord.status === 'ready',
                                    'bg-zinc-500': ord.status === 'delivered'
                                }"></span>
                                {{
                                    ord.status === 'new' ? 'سفارش جدید!' :
                                    ord.status === 'preparing' ? 'در حال آماده‌سازی' :
                                    ord.status === 'ready' ? 'آماده تحویل' : 'تحویل شد'
                                }}
                            </span>
                        </div>

                        <!-- Items List -->
                        <div class="space-y-1.5 mb-4 text-xs">
                            <div 
                                v-for="it in ord.items" 
                                :key="it.id" 
                                class="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80"
                            >
                                <span class="font-bold text-white">{{ it.title_snapshot }}</span>
                                <span class="font-mono text-lime-400 font-black text-xs">{{ it.qty }} ×</span>
                            </div>
                        </div>

                        <div v-if="ord.note" class="text-[11px] text-amber-400 mb-3 p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-start gap-1.5">
                            <MessageSquare class="w-3.5 h-3.5 shrink-0 mt-0.5" />
                            <span>توضیحات مشتری: {{ ord.note }}</span>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                        <span class="text-xs font-mono font-black text-white">{{ formatPrice(ord.total) }}</span>

                        <div class="flex items-center gap-1.5">
                            <button
                                v-if="ord.status === 'new'"
                                @click="updateStatus(ord, 'preparing')"
                                class="px-3 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-black cursor-pointer shadow-md shadow-cyan-400/20 transition-all"
                            >
                                شروع آماده‌سازی
                            </button>
                            <button
                                v-if="ord.status === 'preparing'"
                                @click="updateStatus(ord, 'ready')"
                                class="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-black cursor-pointer shadow-md shadow-amber-400/20 transition-all"
                            >
                                آماده شد
                            </button>
                            <button
                                v-if="ord.status === 'ready'"
                                @click="updateStatus(ord, 'delivered')"
                                class="px-3 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black cursor-pointer shadow-md shadow-lime-400/20 transition-all"
                            >
                                تحویل به ورزشکار
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="!orders.data || orders.data.length === 0" class="col-span-full p-16 text-center text-xs text-zinc-500 rounded-2xl bg-zinc-900 border border-zinc-800">
                    در حال حاضر سفارش زنده‌ای در صف آماده‌سازی وجود ندارد.
                </div>
            </div>

            <!-- Dashlite Pagination -->
            <Pagination
                :links="orders.links"
                :from="orders.from"
                :to="orders.to"
                :total="orders.total"
            />
        </div>
    </PanelLayout>
</template>
