<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { TrendingUp, DollarSign } from '@lucide/vue';
import { formatPrice, formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    dailySales: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="گزارش فروش بوفه" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <TrendingUp class="w-6 h-6 text-lime-400" />
                    <span>گزارش فروش روزانه بوفه و کافه سلامت</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">روند فروش اقلام و نوشیدنی‌های بوفه در ۳۰ روز گذشته</p>
            </div>

            <!-- Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold text-white">تاریخ</th>
                            <th class="p-4 font-bold">تعداد سفارش‌ها</th>
                            <th class="p-4 font-bold">درآمد فروش</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono">
                        <tr v-for="d in dailySales" :key="d.date" class="hover:bg-zinc-800/20">
                            <td class="p-4 font-sans font-bold text-white">{{ formatJalaliDate(d.date) }}</td>
                            <td class="p-4 text-zinc-300">{{ d.count }} سفارش</td>
                            <td class="p-4 text-lime-400 font-bold text-sm">{{ formatPrice(d.revenue) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </PanelLayout>
</template>
