<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Dumbbell, 
    Users, 
    Wallet, 
    Clock, 
    ArrowLeft, 
    Plus, 
    ChevronLeft, 
    UserCheck, 
    TrendingUp,
    Phone,
    CheckCircle2
} from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    trainer: Object,
    stats: Object,
    recentStudents: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد مربی - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Dumbbell class="w-4 h-4" />
                        <span>پنل مدیریت مربیان مجرب M8</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">داشبورد اختصاصی مربی</h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت شاگردان تحت پوشش، طراحی برنامه‌های تمرین و تغذیه و پیگیری کمیسیون‌های ماهانه</p>
                </div>

                <div class="flex items-center gap-3">
                    <Link
                        href="/panel/trainer/workout_plans"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus class="w-4 h-4 stroke-[2.5]" />
                        <span>تنظیم برنامه جدید</span>
                    </Link>
                </div>
            </div>

            <!-- nk-block / Metrics Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- Card 1 -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">شاگردان فعال</span>
                        <div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                            <Users class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-white font-mono">{{ stats.active_students }} نفر</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                            <span>تحت نظارت و مربیگری مستقیم</span>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">برنامه‌های در جریان</span>
                        <div class="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold">
                            <Dumbbell class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-2xl font-black text-white font-mono">{{ stats.active_plans }} برنامه</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span>تمرینی و تغذیه‌ای معتبر</span>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">درآمد ماه جاری (کمیسیون)</span>
                        <div class="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center font-bold">
                            <Wallet class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-xl font-black text-lime-400 font-mono">{{ formatPrice(stats.monthly_income) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <TrendingUp class="w-3.5 h-3.5 text-lime-400" />
                            <span>سهم مربی از بسته‌های آموزشی</span>
                        </div>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all">
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-zinc-400 font-medium">در انتظار تسویه مالی</span>
                        <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                            <Clock class="w-5 h-5" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="text-xl font-black text-amber-400 font-mono">{{ formatPrice(stats.pending_settlement) }}</div>
                        <div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            <span>آماده واریز در سررسید ماه</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- nk-card / Recent Students -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Users class="w-4 h-4 text-lime-400" />
                        <h3 class="text-xs font-bold text-white uppercase tracking-wider">شاگردان اخیر</h3>
                    </div>
                    <Link href="/panel/trainer/students" class="text-xs text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1">
                        <span>مشاهده همه شاگردان</span>
                        <ChevronLeft class="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div class="divide-y divide-zinc-800/50">
                    <div
                        v-for="st in recentStudents"
                        :key="st.id"
                        class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
                    >
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0">
                                {{ st.student?.first_name ? st.student.first_name.charAt(0) : 'S' }}
                            </div>
                            <div>
                                <span class="font-bold text-white text-xs sm:text-sm block">{{ st.student?.full_name }}</span>
                                <span class="text-zinc-500 font-mono text-[11px] flex items-center gap-1 mt-0.5" dir="ltr">
                                    <Phone class="w-3 h-3 text-zinc-600 inline" />
                                    {{ st.student?.mobile }}
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <span
                                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border"
                                :class="st.student?.active_membership 
                                    ? 'bg-lime-400/10 text-lime-400 border-lime-400/20' 
                                    : 'bg-amber-400/10 text-amber-400 border-amber-400/20'"
                            >
                                <span class="w-1.5 h-1.5 rounded-full" :class="st.student?.active_membership ? 'bg-lime-400' : 'bg-amber-400'"></span>
                                {{ st.student?.active_membership ? 'اشتراک فعال دارد' : 'فاقد اشتراک' }}
                            </span>

                            <Link
                                href="/panel/trainer/workout_plans"
                                class="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs"
                                title="مشاهده برنامه‌ها"
                            >
                                <ChevronLeft class="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div v-if="!recentStudents || recentStudents.length === 0" class="p-12 text-center text-xs text-zinc-500">
                        هنوز شاگردی برای شما در سیستم ثبت نشده است.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
