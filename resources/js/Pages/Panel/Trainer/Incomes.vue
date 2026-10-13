<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Wallet, CheckCircle, Clock } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    incomes: Object,
    totalEarned: Number,
    totalSettled: Number,
    totalPending: Number,
});
</script>

<template>
    <PanelLayout>
        <Head title="درآمد و کمیسیون‌های مربی" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Wallet class="w-6 h-6 text-lime-400" />
                    <span>گزارش درآمد و کمیسیون‌های مربی</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">سهم شما از ثبت‌نام شاگردان، برنامه‌های اختصاصی و جلسات خصوصی</p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">کل کمیسیون کسب‌شده</span>
                    <div class="text-2xl font-black text-white font-mono">{{ formatPrice(totalEarned) }}</div>
                </div>
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">تسویه‌شده</span>
                    <div class="text-2xl font-black text-lime-400 font-mono">{{ formatPrice(totalSettled) }}</div>
                </div>
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">در انتظار تسویه</span>
                    <div class="text-2xl font-black text-amber-400 font-mono">{{ formatPrice(totalPending) }}</div>
                </div>
            </div>

            <!-- Ledger Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold text-white">منبع درآمد</th>
                            <th class="p-4 font-bold">مبلغ تراکنش</th>
                            <th class="p-4 font-bold">سهم مربی (کمیسیون)</th>
                            <th class="p-4 font-bold">وضعیت تسویه</th>
                            <th class="p-4 font-bold">تاریخ ثبت</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono">
                        <tr v-for="inc in incomes.data" :key="inc.id" class="hover:bg-zinc-800/20">
                            <td class="p-4 font-sans font-bold text-white">{{ inc.source_type }}</td>
                            <td class="p-4 text-zinc-400">{{ formatPrice(inc.amount) }}</td>
                            <td class="p-4 text-lime-400 font-bold text-sm">{{ formatPrice(inc.commission) }}</td>
                            <td class="p-4 font-sans">
                                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold" :class="inc.status === 'settled' ? 'bg-lime-400/10 text-lime-400' : 'bg-amber-400/10 text-amber-400'">
                                    {{ inc.status === 'settled' ? 'تسویه شد' : 'در انتظار واریز' }}
                                </span>
                            </td>
                            <td class="p-4 text-zinc-400 font-sans">{{ formatJalaliDateTime(inc.created_at) }}</td>
                        </tr>
                    </tbody>
                </table>

                <div v-if="incomes.data.length === 0" class="p-16 text-center text-xs text-zinc-500 font-sans">
                    تراکنش کمیسیونی ثبت نشده است.
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
