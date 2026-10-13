<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Scissors, Calendar, Clock, DollarSign, Sparkles } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    stats: Object,
    upcoming: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد خدمات (ماساژ و پیرایشگاه)" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Scissors class="w-6 h-6 text-lime-400" />
                    <span>داشبورد خدمات، نوبت‌دهی و اسپا</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">مدیریت نوبت‌های ماساژ ورزشی، آرایشگاه و برنامه‌های زمانی</p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">نوبت‌های رزرو امروز</span>
                    <div class="text-2xl font-black text-white font-mono">{{ stats.today_bookings }} نوبت</div>
                </div>
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">در انتظار تایید</span>
                    <div class="text-2xl font-black text-amber-400 font-mono">{{ stats.pending_bookings }} نوبت</div>
                </div>
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400 block mb-1">درآمد خدمات ماه جاری</span>
                    <div class="text-2xl font-black text-lime-400 font-mono">{{ formatPrice(stats.monthly_revenue) }}</div>
                </div>
            </div>

            <!-- Upcoming Bookings List -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-bold text-white flex items-center gap-2">
                        <Clock class="w-4 h-4 text-lime-400" />
                        <span>نوبت‌های رزرو پیش‌رو</span>
                    </h3>
                    <Link href="/panel/service/bookings" class="text-xs text-lime-400 hover:underline">مشاهده همه نوبت‌ها</Link>
                </div>

                <div class="divide-y divide-zinc-800/60">
                    <div
                        v-for="b in upcoming"
                        :key="b.id"
                        class="py-3 flex items-center justify-between text-xs"
                    >
                        <div>
                            <span class="font-bold text-white">{{ b.member?.full_name }}</span>
                            <span class="text-zinc-400 block text-[11px]">{{ b.service?.title }}</span>
                        </div>
                        <div class="text-left font-mono">
                            <span class="text-zinc-300 block">{{ formatJalaliDateTime(b.starts_at) }}</span>
                            <span class="text-lime-400 font-bold text-[10px]">{{ b.status }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
