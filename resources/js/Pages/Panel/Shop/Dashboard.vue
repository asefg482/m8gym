<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Package, 
    ShoppingBag, 
    AlertTriangle, 
    TrendingUp, 
    DollarSign,
    Calculator,
    ChevronLeft,
    Box,
    Clock,
    CheckCircle2
} from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    stats: Object,
    recentOrders: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد فروشگاه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <ShoppingBag class="w-4 h-4" />
                        <span>فروشگاه اختصاصی مکمل و تجهیزات</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">داشبورد فروشگاه ورزشی M8</h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت انبار مکمل‌های اورجینال، پوشاک، صندوق فروش حضوری (POS) و رهگیری مرسولات</p>
                </div>

                <div class="flex items-center gap-3">
                    <Link
                        href="/panel/shop/pos"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Calculator class="w-4 h-4 stroke-[2.5]" />
                        <span>صندوق فروش حضوری (POS)</span>
                    </Link>
                </div>
            </div>

            <!-- nk-block / Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">فروش کل امروز</span>
                        <div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                            <TrendingUp class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-xl font-black text-lime-400 font-mono">{{ formatPrice(stats.today_sales) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                            <span>حضوری و آنلاین تجمیعی</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">تعداد فاکتورهای امروز</span>
                        <div class="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold">
                            <ShoppingBag class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-white font-mono">{{ stats.today_orders }} سفارش</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span>ثبت‌شده در دیتابیس فروش</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">کالاهای رو به اتمام (کسری)</span>
                        <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                            <AlertTriangle class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-amber-400 font-mono">{{ stats.low_stock_count }} کالا</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span>موجودی کمتر از ۵ عدد در انبار</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">سفارش‌های نیازمند آماده‌سازی</span>
                        <div class="w-10 h-10 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold">
                            <Box class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-purple-400 font-mono">{{ stats.pending_orders }} بسته</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                            <span>منتظر بسته‌بندی یا تحویل</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- nk-card / Recent Orders -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <ShoppingBag class="w-4 h-4 text-lime-400" />
                        <h3 class="text-xs font-bold text-white uppercase tracking-wider">آخرین سفارش‌های ثبت‌شده فروشگاه</h3>
                    </div>
                    <Link href="/panel/shop/orders" class="text-xs text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1">
                        <span>مشاهده همه سفارش‌ها</span>
                        <ChevronLeft class="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div class="divide-y divide-zinc-800/50">
                    <div
                        v-for="ord in recentOrders"
                        :key="ord.id"
                        class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
                    >
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0">
                                <Box class="w-5 h-5" />
                            </div>
                            <div>
                                <span class="font-bold text-white text-xs sm:text-sm block">{{ ord.customer?.full_name || 'مشتری حضوری' }}</span>
                                <span class="text-zinc-500 font-mono text-[11px] block mt-0.5">شناسه: {{ ord.order_no }}</span>
                            </div>
                        </div>

                        <div class="text-left font-mono">
                            <span class="text-lime-400 font-black text-sm block">{{ formatPrice(ord.total) }}</span>
                            <span 
                                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold mt-1 font-sans border"
                                :class="ord.status === 'delivered' 
                                    ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                                    : 'bg-amber-400/10 text-amber-400 border-amber-400/20'"
                            >
                                <span class="w-1.5 h-1.5 rounded-full" :class="ord.status === 'delivered' ? 'bg-emerald-400' : 'bg-amber-400'"></span>
                                {{ ord.status === 'delivered' ? 'تحویل‌شده' : 'در حال پردازش' }}
                            </span>
                        </div>
                    </div>

                    <div v-if="!recentOrders || recentOrders.length === 0" class="p-12 text-center text-xs text-zinc-500">
                        سفارشی ثبت نگردیده است.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
