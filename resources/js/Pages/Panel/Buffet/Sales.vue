<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { TrendingUp, DollarSign, Calendar, Coffee, BarChart2 } from '@lucide/vue';
import { formatPrice, formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    dailySales: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="گزارش فروش روزانه بوفه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <TrendingUp class="w-4 h-4" />
                        <span>آمار و تحلیل فروش بوفه</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">گزارش فروش روزانه بوفه و کافه سلامت</h1>
                    <p class="text-xs text-zinc-400 mt-1">بررسی روند و درآمد حاصل از فروش اقلام خوراکی و نوشیدنی‌های رژیمی در ۳۰ روز اخیر</p>
                </div>
            </div>

            <!-- nk-card / Sales Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <BarChart2 class="w-4 h-4 text-lime-400" />
                        <span>گردش روزانه صندوق بوفه</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">{{ dailySales.length }} روز معاملاتی</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">تاریخ</th>
                                <th class="p-4 font-bold">تعداد سفارش‌ها</th>
                                <th class="p-4 font-bold">مجموع درآمد روزانه</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50 font-mono">
                            <tr v-for="d in dailySales" :key="d.date" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4 font-sans font-bold text-white flex items-center gap-2">
                                    <Calendar class="w-3.5 h-3.5 text-zinc-500 inline" />
                                    <span>{{ formatJalaliDate(d.date) }}</span>
                                </td>
                                <td class="p-4 text-zinc-300 font-bold">{{ d.count }} فاکتور</td>
                                <td class="p-4 text-lime-400 font-black text-sm">{{ formatPrice(d.revenue) }}</td>
                            </tr>
                            <tr v-if="!dailySales || dailySales.length === 0">
                                <td colspan="3" class="p-12 text-center text-zinc-500 font-sans text-xs">
                                    سابقه‌ای در این بازه زمانی یافت نشد.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
