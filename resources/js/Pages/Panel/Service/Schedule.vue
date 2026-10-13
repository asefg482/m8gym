<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Clock, Calendar, Check } from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    schedules: Array,
    timeOffs: Array,
});

const weekdays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
];
</script>

<template>
    <PanelLayout>
        <Head title="ساعات کاری و مرخصی‌ها" />

        <div class="space-y-6 max-w-4xl">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Clock class="w-6 h-6 text-lime-400" />
                    <span>برنامه کاری و زمان‌های حضور ارائه‌دهنده</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">تعیین شیفت‌های کاری هفتگی و ثبت روزهای مرخصی جهت عدم نوبت‌دهی تداخلی</p>
            </div>

            <!-- Schedule list -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                <h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider">ساعات حضور در طول هفته</h3>

                <div class="divide-y divide-zinc-800 text-xs">
                    <div
                        v-for="(day, index) in weekdays"
                        :key="index"
                        class="py-3 flex items-center justify-between"
                    >
                        <span class="font-bold text-white">{{ day }}</span>
                        <div class="flex items-center gap-2 text-zinc-300 font-mono">
                            <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800">۰۹:۰۰</span>
                            <span>تا</span>
                            <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800">۲۱:۰۰</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
