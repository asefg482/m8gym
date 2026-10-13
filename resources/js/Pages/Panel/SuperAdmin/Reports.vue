<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { BarChart3, TrendingUp, CreditCard, ShoppingBag, Coffee, Scissors } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    sources: Object,
    totalRevenue: Number,
});
</script>

<template>
    <PanelLayout>
        <Head title="گزارش‌های مالی تجمیعی" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <BarChart3 class="w-6 h-6 text-lime-400" />
                    <span>گزارش مالی تجمیعی باشگاه M8</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">تفکیک منابع درآمد به تفکیک اشتراک‌ها، فروشگاه، بوفه و خدمات</p>
            </div>

            <!-- Total Card -->
            <div class="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                <div>
                    <span class="text-xs text-zinc-400 font-semibold uppercase tracking-wider">مجموع کل درآمد محقق‌شده</span>
                    <div class="text-3xl sm:text-4xl font-black text-lime-400 font-mono mt-2">
                        {{ formatPrice(totalRevenue) }}
                    </div>
                </div>
                <div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400">
                    سیستم حسابداری یکپارچه و ضد مغایرت
                </div>
            </div>

            <!-- Breakdown Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Memberships -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-4">
                        <CreditCard class="w-6 h-6 text-lime-400" />
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800">شهریه‌ها</span>
                    </div>
                    <div>
                        <h3 class="text-xs text-zinc-400">درآمد اشتراک‌ها</h3>
                        <div class="text-lg font-black text-white font-mono mt-1">
                            {{ formatPrice(sources.memberships) }}
                        </div>
                    </div>
                </div>

                <!-- Shop -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-4">
                        <ShoppingBag class="w-6 h-6 text-lime-400" />
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800">مکمل و پوشاک</span>
                    </div>
                    <div>
                        <h3 class="text-xs text-zinc-400">فروشگاه M8</h3>
                        <div class="text-lg font-black text-white font-mono mt-1">
                            {{ formatPrice(sources.shop) }}
                        </div>
                    </div>
                </div>

                <!-- Buffet -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-4">
                        <Coffee class="w-6 h-6 text-lime-400" />
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800">کافه سلامت</span>
                    </div>
                    <div>
                        <h3 class="text-xs text-zinc-400">بوفه و نوشیدنی‌ها</h3>
                        <div class="text-lg font-black text-white font-mono mt-1">
                            {{ formatPrice(sources.buffet) }}
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-4">
                        <Scissors class="w-6 h-6 text-lime-400" />
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800">اسپا و پیرایش</span>
                    </div>
                    <div>
                        <h3 class="text-xs text-zinc-400">خدمات ماساژ و آرایشگاه</h3>
                        <div class="text-lg font-black text-white font-mono mt-1">
                            {{ formatPrice(sources.services) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
