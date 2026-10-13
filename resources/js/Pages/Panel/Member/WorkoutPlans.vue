<script setup>
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Dumbbell, Calendar, CheckSquare } from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    plans: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="برنامه‌های تمرینی و تغذیه من" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Dumbbell class="w-6 h-6 text-lime-400" />
                    <span>برنامه‌های تمرینی و رژیم غذایی من</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">طراحی‌شده اختصاصی توسط مربیان باشگاه M8</p>
            </div>

            <div v-if="plans.length > 0" class="space-y-6">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6"
                >
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2">
                        <div>
                            <div class="flex items-center gap-2">
                                <h2 class="text-base font-bold text-white">{{ plan.title }}</h2>
                                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-lime-400/10 text-lime-400">
                                    {{ plan.type === 'workout' ? 'برنامه تمرینی' : 'برنامه تغذیه' }}
                                </span>
                            </div>
                            <p class="text-xs text-zinc-400 mt-1">مربی مسئول: {{ plan.trainer?.full_name }}</p>
                        </div>
                        <div class="text-xs text-zinc-400 font-mono">
                            اعتبار: {{ formatJalaliDate(plan.starts_at) }} تا {{ formatJalaliDate(plan.ends_at) }}
                        </div>
                    </div>

                    <!-- Notes -->
                    <div v-if="plan.notes" class="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-300">
                        <span class="font-bold text-lime-400 block mb-1">توصیه و یادداشت مربی:</span>
                        {{ plan.notes }}
                    </div>

                    <!-- Items / Exercises Table -->
                    <div class="rounded-2xl border border-zinc-800 overflow-hidden">
                        <table class="w-full text-right text-xs">
                            <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                                <tr>
                                    <th class="p-3.5 font-bold">روز</th>
                                    <th class="p-3.5 font-bold">عنوان حرکت / وعده</th>
                                    <th class="p-3.5 font-bold text-center">ست‌ها</th>
                                    <th class="p-3.5 font-bold text-center">تکرار / مقدار</th>
                                    <th class="p-3.5 font-bold">توضیحات تکمیلی</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60">
                                <tr v-for="item in plan.items" :key="item.id" class="hover:bg-zinc-800/20">
                                    <td class="p-3.5 font-bold text-lime-400">{{ item.day }}</td>
                                    <td class="p-3.5 font-bold text-white">{{ item.title }}</td>
                                    <td class="p-3.5 text-center font-mono text-zinc-300">{{ item.sets || '-' }}</td>
                                    <td class="p-3.5 text-center font-mono text-zinc-300">{{ item.reps || '-' }}</td>
                                    <td class="p-3.5 text-zinc-400">{{ item.notes || '-' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div v-else class="p-16 text-center rounded-3xl bg-zinc-900 border border-zinc-800">
                <Dumbbell class="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                <h3 class="text-sm font-bold text-white">هنوز برنامه‌ای برای شما ثبت نشده است</h3>
                <p class="text-xs text-zinc-400 mt-1">با مربی اختصاصی خود جهت تدوین برنامه ورزشی و تغذیه هماهنگ کنید.</p>
            </div>
        </div>
    </PanelLayout>
</template>
