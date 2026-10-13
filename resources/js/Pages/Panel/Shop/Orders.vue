<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    ShoppingBag, 
    Truck, 
    CheckCircle2, 
    XCircle, 
    Box, 
    Clock, 
    MapPin, 
    Store,
    PackageCheck
} from '@lucide/vue';
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
        <Head title="سفارش‌ها و مرسولات فروشگاه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <ShoppingBag class="w-4 h-4" />
                        <span>لجستیک و تحویل سفارشات</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">سفارش‌ها و مرسولات فروشگاه M8</h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت چرخه سفارش (آماده‌سازی، ارسال پستی، تحویل حضوری در سالن یا استرداد کالا)</p>
                </div>

                <!-- Status Pills -->
                <div class="flex items-center gap-2 flex-wrap">
                    <button 
                        @click="filterStatus(null)" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="!currentStatus ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        همه
                    </button>
                    <button 
                        @click="filterStatus('new')" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="currentStatus === 'new' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        جدید
                    </button>
                    <button 
                        @click="filterStatus('preparing')" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="currentStatus === 'preparing' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        در حال آماده‌سازی
                    </button>
                    <button 
                        @click="filterStatus('delivered')" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="currentStatus === 'delivered' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        تحویل داده شده
                    </button>
                </div>
            </div>

            <!-- nk-card / Orders Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <PackageCheck class="w-4 h-4 text-lime-400" />
                        <span>فهرست فاکتورها و وضعیت ارسال</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">مجموع: <b class="font-mono text-lime-400">{{ orders.total || orders.data?.length || 0 }}</b> فاکتور</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">شماره سفارش</th>
                                <th class="p-4 font-bold">خریدار و آدرس تحویل</th>
                                <th class="p-4 font-bold">اقلام فاکتور</th>
                                <th class="p-4 font-bold">مبلغ نهایی</th>
                                <th class="p-4 font-bold">وضعیت سفارش</th>
                                <th class="p-4 font-bold">زمان ثبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="ord in orders.data" :key="ord.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4 font-mono font-bold text-lime-400">{{ ord.order_no }}</td>
                                <td class="p-4">
                                    <div class="font-bold text-white text-xs sm:text-sm">{{ ord.customer?.full_name || 'مشتری حضوری' }}</div>
                                    <div class="text-[11px] text-zinc-400 mt-1 flex items-center gap-1.5">
                                        <Truck v-if="ord.delivery_type === 'delivery'" class="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                        <Store v-else class="w-3.5 h-3.5 text-lime-400 shrink-0" />
                                        <span class="line-clamp-1">
                                            {{ ord.delivery_type === 'delivery' ? `پستی: ${ord.shipping_address || 'آدرس ثبت‌نشده'}` : 'تحویل حضوری در سالن باشگاه' }}
                                        </span>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <ul class="space-y-1 text-[11px] text-zinc-300">
                                        <li v-for="it in ord.items" :key="it.id" class="flex items-center gap-1">
                                            <span class="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                                            <span>{{ it.title_snapshot }}</span>
                                            <span class="font-mono text-zinc-500 font-bold">({{ it.qty }}×)</span>
                                        </li>
                                    </ul>
                                </td>
                                <td class="p-4 font-mono font-black text-white text-sm">{{ formatPrice(ord.total) }}</td>
                                <td class="p-4">
                                    <select
                                        :value="ord.status"
                                        @change="updateStatus(ord, $event.target.value)"
                                        class="h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs font-bold focus:outline-none focus:border-lime-400 transition-colors"
                                        :class="{
                                            'text-amber-400 border-amber-400/30': ord.status === 'new' || ord.status === 'preparing',
                                            'text-emerald-400 border-emerald-400/30': ord.status === 'delivered' || ord.status === 'ready',
                                            'text-rose-400 border-rose-400/30': ord.status === 'cancelled'
                                        }"
                                    >
                                        <option value="new">جدید (ثبت اولیه)</option>
                                        <option value="preparing">در حال آماده‌سازی</option>
                                        <option value="ready">آماده تحویل / ارسال</option>
                                        <option value="delivered">تحویل داده شد</option>
                                        <option value="cancelled">لغو سفارش (برگشت انبار)</option>
                                    </select>
                                </td>
                                <td class="p-4 text-zinc-400 font-mono text-[11px]">{{ formatJalaliDateTime(ord.created_at) }}</td>
                            </tr>
                            <tr v-if="!orders.data || orders.data.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    سفارشی در این وضعیت موجود نیست.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination
                    :links="orders.links"
                    :from="orders.from"
                    :to="orders.to"
                    :total="orders.total"
                />
            </div>
        </div>
    </PanelLayout>
</template>
