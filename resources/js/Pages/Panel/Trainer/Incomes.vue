<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    Wallet, 
    CheckCircle2, 
    Clock, 
    TrendingUp, 
    Receipt, 
    ArrowUpRight,
    Banknote
} from '@lucide/vue';
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
        <Head title="درآمد و کمیسیون‌های مربی - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Wallet class="w-4 h-4" />
                        <span>سیستم تسویه حساب و پورسانت مربیان</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">گزارش درآمد و کمیسیون‌های مربی</h1>
                    <p class="text-xs text-zinc-400 mt-1">سهم شما از ثبت‌نام شاگردان، برنامه‌های اختصاصی بدنسازی و جلسات تمرین خصوصی</p>
                </div>

                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                        <Receipt class="w-4 h-4 text-lime-400" />
                        <span>تسویه خودکار ماهانه</span>
                    </span>
                </div>
            </div>

            <!-- nk-block / Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">کل کمیسیون کسب‌شده</span>
                        <div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                            <Wallet class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-white font-mono">{{ formatPrice(totalEarned) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <TrendingUp class="w-3.5 h-3.5 text-lime-400" />
                            <span>مجموع سوابق مالی ثبت‌شده</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">تسویه‌شده و واریزی</span>
                        <div class="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center font-bold">
                            <CheckCircle2 class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-lime-400 font-mono">{{ formatPrice(totalSettled) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>واریز به شماره شبا مربی</span>
                        </div>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">در انتظار تسویه مالی</span>
                        <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                            <Clock class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-amber-400 font-mono">{{ formatPrice(totalPending) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span>موجود در نوبت تسویه جاری</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- nk-card / Ledger Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Banknote class="w-4 h-4 text-lime-400" />
                        <span>دفتر کل و ریز تراکنش‌های کمیسیون</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">مجموع رکوردها: <b class="font-mono text-lime-400">{{ incomes.total || incomes.data?.length || 0 }}</b></span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">منبع تراکنش</th>
                                <th class="p-4 font-bold">مبلغ کل تراکنش</th>
                                <th class="p-4 font-bold">سهم مربی (کمیسیون)</th>
                                <th class="p-4 font-bold">وضعیت تسویه</th>
                                <th class="p-4 font-bold">تاریخ ثبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50 font-mono">
                            <tr v-for="inc in incomes.data" :key="inc.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4 font-sans font-bold text-white">{{ inc.source_type }}</td>
                                <td class="p-4 text-zinc-400">{{ formatPrice(inc.amount) }}</td>
                                <td class="p-4 text-lime-400 font-bold text-sm">{{ formatPrice(inc.commission) }}</td>
                                <td class="p-4 font-sans">
                                    <span 
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"
                                        :class="inc.settled_at 
                                            ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                                            : 'bg-amber-400/10 text-amber-400 border-amber-400/20'"
                                    >
                                        <span class="w-1.5 h-1.5 rounded-full" :class="inc.settled_at ? 'bg-emerald-400' : 'bg-amber-400'"></span>
                                        {{ inc.settled_at ? 'تسویه‌شده' : 'در انتظار تسویه' }}
                                    </span>
                                </td>
                                <td class="p-4 text-zinc-400 text-[11px]">{{ formatJalaliDateTime(inc.created_at) }}</td>
                            </tr>
                            <tr v-if="!incomes.data || incomes.data.length === 0">
                                <td colspan="5" class="p-12 text-center text-zinc-500 font-sans text-xs">
                                    هنوز تراکنش کمیسیونی برای شما ثبت نگردیده است.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination
                    :links="incomes.links"
                    :from="incomes.from"
                    :to="incomes.to"
                    :total="incomes.total"
                />
            </div>
        </div>
    </PanelLayout>
</template>
