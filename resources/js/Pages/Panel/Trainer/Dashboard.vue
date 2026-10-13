<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Dumbbell, Users, Wallet, Clock, ArrowLeft } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    trainer: Object,
    stats: Object,
    recentStudents: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد مربی" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Dumbbell class="w-6 h-6 text-lime-400" />
                    <span>داشبورد اختصاصی مربی</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">مدیریت شاگردان، تنظیم برنامه‌های تمرین و پیگیری کمیسیون‌ها</p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">شاگردان فعال</span>
                    <div class="text-2xl font-black text-white font-mono">{{ stats.active_students }} نفر</div>
                </div>
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">برنامه‌های در جریان</span>
                    <div class="text-2xl font-black text-white font-mono">{{ stats.active_plans }} برنامه</div>
                </div>
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">درآمد ماه جاری (کمیسیون)</span>
                    <div class="text-xl font-black text-lime-400 font-mono">{{ formatPrice(stats.monthly_income) }}</div>
                </div>
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">در انتظار تسویه</span>
                    <div class="text-xl font-black text-amber-400 font-mono">{{ formatPrice(stats.pending_settlement) }}</div>
                </div>
            </div>

            <!-- Recent Students -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-bold text-white flex items-center gap-2">
                        <Users class="w-4 h-4 text-lime-400" />
                        <span>شاگردان اخیر</span>
                    </h3>
                    <Link href="/panel/trainer/students" class="text-xs text-lime-400 hover:underline">مشاهده همه</Link>
                </div>

                <div class="divide-y divide-zinc-800/60">
                    <div
                        v-for="st in recentStudents"
                        :key="st.id"
                        class="py-3 flex items-center justify-between text-xs"
                    >
                        <div>
                            <span class="font-bold text-white">{{ st.student?.full_name }}</span>
                            <span class="text-zinc-500 font-mono block text-[10px]" dir="ltr">{{ st.student?.mobile }}</span>
                        </div>
                        <span class="text-zinc-400">
                            {{ st.student?.active_membership ? 'اشتراک فعال دارد' : 'فاقد اشتراک' }}
                        </span>
                    </div>

                    <div v-if="recentStudents.length === 0" class="p-8 text-center text-xs text-zinc-500">
                        هنوز شاگردی ثبت نشده است.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
