<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Clock, Calendar, CheckCircle, Scissors, Sparkles } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    bookings: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="نوبت‌های رزرو من" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Clock class="w-6 h-6 text-lime-400" />
                        <span>نوبت‌های رزرو من (ماساژ و پیرایشگاه)</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت نوبت‌ها و پیگیری وضعیت خدمات</p>
                </div>

                <div class="flex items-center gap-2">
                    <Link href="/massage" class="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400 hover:border-lime-400/50">
                        + رزرو ماساژ
                    </Link>
                    <Link href="/hairdresser" class="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400 hover:border-lime-400/50">
                        + رزرو آرایشگاه
                    </Link>
                </div>
            </div>

            <!-- List -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl">
                <div class="divide-y divide-zinc-800/60">
                    <div
                        v-for="b in bookings"
                        :key="b.id"
                        class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-800/20"
                    >
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lime-400 shrink-0">
                                <Sparkles v-if="b.service?.category === 'massage'" class="w-6 h-6" />
                                <Scissors v-else class="w-6 h-6" />
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-white">{{ b.service?.title }}</h3>
                                <p class="text-xs text-zinc-400 mt-0.5">متخصص: {{ b.provider?.full_name }}</p>
                                <span class="text-[11px] text-zinc-500 font-mono block mt-1">
                                    زمان رزرو: {{ formatJalaliDateTime(b.starts_at) }}
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-800">
                            <div class="font-mono text-sm font-bold text-white">
                                {{ formatPrice(b.price) }}
                            </div>
                            <span
                                class="px-3 py-1 rounded-full text-xs font-bold"
                                :class="{
                                    'bg-lime-400/10 text-lime-400': b.status === 'confirmed',
                                    'bg-amber-400/10 text-amber-400': b.status === 'pending',
                                    'bg-zinc-800 text-zinc-400': b.status === 'completed',
                                    'bg-red-400/10 text-red-400': b.status === 'cancelled'
                                }"
                            >
                                {{
                                    b.status === 'confirmed' ? 'تایید شده' :
                                    b.status === 'pending' ? 'در انتظار بررسی' :
                                    b.status === 'completed' ? 'انجام شد' : 'لغو شده'
                                }}
                            </span>
                        </div>
                    </div>

                    <div v-if="bookings.length === 0" class="p-16 text-center text-xs text-zinc-500">
                        شما نوبت ثبت‌شده‌ای ندارید.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
