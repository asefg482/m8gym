<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { ShoppingBag, Truck, CheckCircle2, XCircle } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    orders: Object,
    currentStatus: String,
});

function updateStatus(order, newStatus) {
    router.put(`/panel/shop/orders/${order.id}/status`, {
        status: newStatus,
    }, { preserveScroll: true });
}

function filterStatus(status) {
    router.get('/panel/shop/orders', { status }, { preserveState: true });
}
</script>

<template>
    <PanelLayout>
        <Head title="سفارش‌ها و مرسولات فروشگاه" />

        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <ShoppingBag class="w-6 h-6 text-lime-400" />
                        <span>سفارش‌ها و ارسال مرسولات فروشگاه M8</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">تغییر وضعیت سفارش (آماده‌سازی، ارسال پستی، تحویل حضوری یا لغو با بازگشت موجودی)</p>
                </div>

                <!-- Status Pills -->
                <div class="flex items-center gap-2">
                    <button @click="filterStatus(null)" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="!currentStatus ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">همه</button>
                    <button @click="filterStatus('new')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="currentStatus === 'new' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">جدید</button>
                    <button @click="filterStatus('preparing')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="currentStatus === 'preparing' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">در حال آماده‌سازی</button>
                    <button @click="filterStatus('delivered')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="currentStatus === 'delivered' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">تحویل شده</button>
                </div>
            </div>

            <!-- Orders Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold text-white">شماره سفارش</th>
                            <th class="p-4 font-bold">خریدار و آدرس</th>
                            <th class="p-4 font-bold">اقلام سفارش</th>
                            <th class="p-4 font-bold">مبلغ کل</th>
                            <th class="p-4 font-bold">وضعیت سفارش</th>
                            <th class="p-4 font-bold">تاریخ</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60">
                        <tr v-for="ord in orders.data" :key="ord.id" class="hover:bg-zinc-800/20">
                            <td class="p-4 font-mono font-bold text-lime-400">{{ ord.order_no }}</td>
                            <td class="p-4">
                                <div class="font-bold text-white">{{ ord.customer?.full_name }}</div>
                                <div class="text-[10px] text-zinc-400 mt-0.5">
                                    {{ ord.delivery_type === 'delivery' ? `ارسال پستی: ${ord.shipping_address || 'آدرس ثبت‌نشده'}` : 'تحویل حضوری در باشگاه' }}
                                </div>
                            </td>
                            <td class="p-4">
                                <ul class="space-y-1 text-[11px] text-zinc-300">
                                    <li v-for="it in ord.items" :key="it.id">
                                        • {{ it.title_snapshot }} <span class="font-mono text-zinc-500">({{ it.qty }} عدد)</span>
                                    </li>
                                </ul>
                            </td>
                            <td class="p-4 font-mono font-bold text-white">{{ formatPrice(ord.total) }}</td>
                            <td class="p-4">
                                <select
                                    :value="ord.status"
                                    @change="updateStatus(ord, $event.target.value)"
                                    class="h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] font-bold focus:outline-none"
                                >
                                    <option value="new">جدید</option>
                                    <option value="preparing">در حال آماده‌سازی</option>
                                    <option value="ready">آماده ارسال/تحویل</option>
                                    <option value="delivered">تحویل داده شد</option>
                                    <option value="cancelled">لغو سفارش (برگشت موجودی)</option>
                                </select>
                            </td>
                            <td class="p-4 text-zinc-400 font-mono">{{ formatJalaliDateTime(ord.created_at) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </PanelLayout>
</template>
