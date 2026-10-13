<script setup>
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { CalendarCheck, CheckCircle2, Clock, Flame } from '@lucide/vue';
import { formatJalaliDate, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    attendances: Array,
    thisMonthCount: Number,
    totalCount: Number,
});

// Set of dates where user was present: 'YYYY-MM-DD'
const presentDates = computed(() => {
    return new Set(props.attendances.map((a) => a.date?.substring(0, 10)));
});
</script>

<template>
    <PanelLayout>
        <Head title="تاریخچه حضور و غیاب من" />

        <div class="space-y-6">
            <!-- Header -->
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <CalendarCheck class="w-6 h-6 text-lime-400" />
                    <span>تاریخچه و تقویم حضور و غیاب من</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">مشاهده روزهای تمرین و ثبات در ورزش باشگاه M8</p>
            </div>

            <!-- Stats Bar -->
            <div class="grid grid-cols-2 gap-4">
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400">
                        <Flame class="w-6 h-6" />
                    </div>
                    <div>
                        <span class="text-xs text-zinc-400">جلسات حضور در ماه جاری:</span>
                        <div class="text-2xl font-black text-white font-mono mt-0.5">
                            {{ thisMonthCount }} جلسه
                        </div>
                    </div>
                </div>

                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300">
                        <CalendarCheck class="w-6 h-6" />
                    </div>
                    <div>
                        <span class="text-xs text-zinc-400">کل جلسات تمرین ثبت‌شده:</span>
                        <div class="text-2xl font-black text-white font-mono mt-0.5">
                            {{ totalCount }} جلسه
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detailed Log List -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl">
                <div class="p-5 border-b border-zinc-800 flex items-center justify-between">
                    <h3 class="text-sm font-bold text-white">لیست روزهای حضور من</h3>
                    <span class="text-xs text-lime-400 font-semibold">● ثبت تردد الکترونیکی</span>
                </div>

                <div class="divide-y divide-zinc-800/60">
                    <div
                        v-for="att in attendances"
                        :key="att.id"
                        class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/20 transition-colors"
                    >
                        <div class="flex items-center gap-3">
                            <CheckCircle2 class="w-5 h-5 text-lime-400 shrink-0" />
                            <div>
                                <span class="text-sm font-bold text-white block">{{ formatJalaliDate(att.date) }}</span>
                                <span class="text-[11px] text-zinc-400">حضور داشتم (جلسه تمرین M8)</span>
                            </div>
                        </div>

                        <div class="text-left font-mono text-xs">
                            <div class="text-zinc-300">ورود: {{ formatJalaliDateTime(att.checkin_at) }}</div>
                            <div v-if="att.checkout_at" class="text-zinc-500 text-[11px]">خروج: {{ formatJalaliDateTime(att.checkout_at) }}</div>
                        </div>
                    </div>

                    <div v-if="attendances.length === 0" class="p-12 text-center text-xs text-zinc-500">
                        هنوز جلسه حضوری ثبت نشده است. هنگام ورود به باشگاه، شماره موبایل خود را به پذیرش اعلام فرمایید.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
