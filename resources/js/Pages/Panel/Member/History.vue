<script setup>
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { CalendarCheck, CheckCircle2, Clock, Flame, ShieldCheck, Activity } from '@lucide/vue';
import { formatJalaliDate, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    attendances: Array,
    thisMonthCount: Number,
    totalCount: Number,
});

// Set of dates where user was present: 'YYYY-MM-DD'
const presentDates = computed(() => {
    return new Set((props.attendances || []).map((a) => a.date?.substring(0, 10)));
});
</script>

<template>
    <PanelLayout>
        <Head title="تاریخچه حضور و غیاب - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <CalendarCheck class="w-6 h-6 text-lime-400" />
                        <span>تاریخچه و لاگ حضور و غیاب من</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        ثبت الکترونیکی ترددها، ثبات در تمرین و جلسات ورزشی شما در باشگاه ۲۵۰۰ متری M8
                    </p>
                </div>

                <div class="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-xs">
                    <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span class="text-zinc-400">تردد الکترونیک:</span>
                    <span class="font-bold text-white font-mono">آنلاین و متصل</span>
                </div>
            </div>

            <!-- Dashlite Metric Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                        <Flame class="w-6 h-6" />
                    </div>
                    <div>
                        <span class="text-xs font-bold text-zinc-400 block">جلسات حضور در ماه جاری:</span>
                        <div class="text-2xl font-black text-white font-mono mt-0.5">
                            {{ thisMonthCount }} <span class="text-xs font-normal text-zinc-400">جلسه تمرین</span>
                        </div>
                        <span class="text-[11px] text-emerald-400 mt-1 inline-block">● استمرار ورزشی فعال</span>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                        <Activity class="w-6 h-6" />
                    </div>
                    <div>
                        <span class="text-xs font-bold text-zinc-400 block">کل جلسات تمرین ثبت‌شده:</span>
                        <div class="text-2xl font-black text-lime-400 font-mono mt-0.5">
                            {{ totalCount }} <span class="text-xs font-normal text-zinc-400">جلسه کل دوره</span>
                        </div>
                        <span class="text-[11px] text-zinc-400 mt-1 inline-block">از زمان اولین عضویت در M8</span>
                    </div>
                </div>
            </div>

            <!-- Dashlite Detailed Log Table Card -->
            <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <div class="flex items-center gap-2">
                        <CalendarCheck class="w-4 h-4 text-lime-400" />
                        <h3 class="text-sm font-bold text-white">لیست دقیق روزها و ساعات ورود/خروج</h3>
                    </div>
                    <span class="text-xs text-zinc-400 font-mono">{{ attendances ? attendances.length : 0 }} رکورد</span>
                </div>

                <div class="divide-y divide-zinc-800/60">
                    <div
                        v-for="att in attendances"
                        :key="att.id"
                        class="py-3.5 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-800/20 rounded-xl transition-colors"
                    >
                        <div class="flex items-center gap-3.5">
                            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                                <CheckCircle2 class="w-4 h-4" />
                            </div>
                            <div>
                                <span class="text-xs font-bold text-white block">{{ formatJalaliDate(att.date) }}</span>
                                <span class="text-[11px] text-zinc-400">جلسه تمرینی سالن اصلی باشگاه M8</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 text-xs font-mono pr-11 sm:pr-0">
                            <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                                ورود: {{ formatJalaliDateTime(att.checkin_at) }}
                            </span>
                            <span v-if="att.checkout_at" class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 text-[11px]">
                                خروج: {{ formatJalaliDateTime(att.checkout_at) }}
                            </span>
                        </div>
                    </div>

                    <div v-if="!attendances || attendances.length === 0" class="p-12 text-center text-xs text-zinc-500">
                        هنوز جلسه حضوری ثبت نشده است. هنگام ورود به باشگاه، شماره موبایل خود را به پذیرش اعلام فرمایید.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
