<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Dumbbell, Calendar, CheckSquare, Sparkles, User, FileText } from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    plans: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="برنامه‌های تمرینی و تغذیه - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Dumbbell class="w-6 h-6 text-lime-400" />
                        <span>برنامه‌های تمرینی و رژیم غذایی من</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        طراحی و تنظیم اختصاصی توسط کادر مربیان رسمی باشگاه M8 بر اساس فیزیولوژی و اهداف شما
                    </p>
                </div>

                <div class="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-xs">
                    <Sparkles class="w-4 h-4 text-lime-400" />
                    <span class="text-zinc-400">تعداد برنامه‌ها:</span>
                    <span class="font-bold text-white font-mono">{{ plans ? plans.length : 0 }} برنامه</span>
                </div>
            </div>

            <!-- Plans Cards -->
            <div v-if="plans && plans.length > 0" class="space-y-6">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-6"
                >
                    <!-- Plan Header -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800/80 gap-3">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
                                <Dumbbell class="w-5 h-5" />
                            </div>
                            <div>
                                <div class="flex items-center gap-2">
                                    <h2 class="text-base font-bold text-white">{{ plan.title }}</h2>
                                    <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20">
                                        {{ plan.type === 'workout' ? 'برنامه تمرینی' : 'برنامه تغذیه و رژیم' }}
                                    </span>
                                </div>
                                <p class="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5">
                                    <User class="w-3.5 h-3.5 text-zinc-500" />
                                    <span>مربی مسئول: {{ plan.trainer?.full_name || 'کادر فنی' }}</span>
                                </p>
                            </div>
                        </div>

                        <div class="px-3 py-1 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-mono">
                            دوره اجرا: {{ formatJalaliDate(plan.starts_at) }} تا {{ formatJalaliDate(plan.ends_at) }}
                        </div>
                    </div>

                    <!-- Trainer Notes Box -->
                    <div v-if="plan.notes" class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs text-zinc-300">
                        <div class="flex items-center gap-2 font-bold text-lime-400 mb-1.5">
                            <FileText class="w-4 h-4" />
                            <span>توصیه‌ها و نکات کلیدی مربی:</span>
                        </div>
                        <p class="leading-relaxed">{{ plan.notes }}</p>
                    </div>

                    <!-- Items / Exercises Table -->
                    <div class="rounded-xl border border-zinc-800/90 overflow-hidden bg-zinc-950/40">
                        <table class="w-full text-right text-xs">
                            <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                                <tr>
                                    <th class="p-3.5 font-bold">روز / نوبت</th>
                                    <th class="p-3.5 font-bold">عنوان حرکت یا وعده غذایی</th>
                                    <th class="p-3.5 font-bold text-center">ست‌ها</th>
                                    <th class="p-3.5 font-bold text-center">تکرار / مقدار</th>
                                    <th class="p-3.5 font-bold">توضیحات و الگوی اجرا</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60 font-sans">
                                <tr v-for="item in plan.items" :key="item.id" class="hover:bg-zinc-800/20 transition-colors">
                                    <td class="p-3.5 font-bold text-lime-400 font-mono">{{ item.day }}</td>
                                    <td class="p-3.5 font-bold text-white">{{ item.title }}</td>
                                    <td class="p-3.5 text-center font-mono text-zinc-200">{{ item.sets || '-' }}</td>
                                    <td class="p-3.5 text-center font-mono text-zinc-200">{{ item.reps || '-' }}</td>
                                    <td class="p-3.5 text-zinc-400">{{ item.notes || '-' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-else class="p-16 text-center rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm">
                <div class="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 mx-auto mb-4">
                    <Dumbbell class="w-8 h-8" />
                </div>
                <h3 class="text-sm font-bold text-white">هنوز برنامه‌ای برای شما ثبت نشده است</h3>
                <p class="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
                    جهت دریافت برنامه تمرینی یا رژیم اختصاصی، در سالن با مربیان باشگاه هماهنگ نمایید تا برنامه شما در پنل بارگذاری شود.
                </p>
            </div>
        </div>
    </PanelLayout>
</template>
