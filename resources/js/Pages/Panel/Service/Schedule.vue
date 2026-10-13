<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Clock, Calendar, CheckCircle2, ShieldCheck } from '@lucide/vue';
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
        <Head title="ساعات کاری و مرخصی‌ها - Dashlite" />

        <div class="space-y-6 max-w-4xl">
            <!-- nk-block-head -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Clock class="w-4 h-4" />
                        <span>تقویم کاری و مدیریت شیفت‌ها</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">برنامه کاری و زمان‌های حضور ارائه‌دهندگان</h1>
                    <p class="text-xs text-zinc-400 mt-1">تعیین شیفت‌های کاری هفتگی، بازه‌های فعال رزرو و ثبت ایام تعطیل جهت جلوگیری از رزروهای متداخل</p>
                </div>
            </div>

            <!-- nk-card / Schedule list -->
            <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-4">
                <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Calendar class="w-4 h-4 text-lime-400" />
                        <span>ساعات حضور و پذیرش ماساژ و پیرایش در طول هفته</span>
                    </h3>
                    <span class="text-[11px] text-lime-400 font-bold">شیفت استاندارد</span>
                </div>

                <div class="divide-y divide-zinc-800/50 text-xs">
                    <div
                        v-for="(day, index) in weekdays"
                        :key="index"
                        class="py-3.5 flex items-center justify-between hover:bg-zinc-800/20 px-2 rounded-xl transition-colors"
                    >
                        <div class="flex items-center gap-2.5">
                            <span class="w-2 h-2 rounded-full" :class="day === 'جمعه' ? 'bg-amber-400' : 'bg-lime-400'"></span>
                            <span class="font-bold text-white">{{ day }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-zinc-300 font-mono">
                            <span class="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-bold text-white">۰۹:۰۰</span>
                            <span class="text-zinc-500 font-sans text-xs">الی</span>
                            <span class="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-bold text-lime-400">۲۱:۰۰</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
