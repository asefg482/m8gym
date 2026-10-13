<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Clock, Calendar, CheckCircle, Scissors, Sparkles, User, ChevronLeft } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    bookings: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="نوبت‌های رزرو خدمات - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Clock class="w-6 h-6 text-lime-400" />
                        <span>نوبت‌های رزرو من (ماساژ، اسپا و پیرایشگاه)</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        مدیریت نوبت‌های اختصاصی و پیگیری وضعیت خدمات ریکاوری و زیبایی در باشگاه M8
                    </p>
                </div>

                <!-- Block Head Actions -->
                <div class="flex items-center gap-2.5">
                    <Link
                        href="/massage"
                        class="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-xs font-bold text-purple-300 flex items-center gap-1.5 transition-colors"
                    >
                        <Sparkles class="w-3.5 h-3.5 text-purple-400" />
                        <span>رزرو ماساژ</span>
                    </Link>
                    <Link
                        href="/hairdresser"
                        class="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 text-xs font-bold text-lime-300 flex items-center gap-1.5 transition-colors"
                    >
                        <Scissors class="w-3.5 h-3.5 text-lime-400" />
                        <span>رزرو پیرایشگاه</span>
                    </Link>
                </div>
            </div>

            <!-- Dashlite Bookings List Card -->
            <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <h2 class="text-sm font-bold text-white">نوبت‌های ثبت‌شده شما</h2>
                    <span class="text-xs text-zinc-400 font-mono">{{ bookings ? bookings.length : 0 }} نوبت</span>
                </div>

                <div class="divide-y divide-zinc-800/60">
                    <div
                        v-for="b in bookings"
                        :key="b.id"
                        class="py-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-800/20 rounded-xl transition-colors"
                    >
                        <div class="flex items-center gap-4">
                            <div class="w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                                <Sparkles v-if="b.service?.category === 'massage'" class="w-5 h-5 text-purple-400" />
                                <Scissors v-else class="w-5 h-5 text-lime-400" />
                            </div>
                            <div>
                                <h3 class="text-xs sm:text-sm font-bold text-white">{{ b.service?.title }}</h3>
                                <p class="text-[11px] text-zinc-400 mt-0.5 flex items-center gap-1">
                                    <User class="w-3 h-3 text-zinc-500" />
                                    <span>متخصص: {{ b.provider?.full_name || 'کادر مجرب M8' }}</span>
                                </p>
                                <span class="text-[11px] text-zinc-400 font-mono block mt-0.5">
                                    زمان رزرو: {{ formatJalaliDateTime(b.starts_at) }}
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between sm:justify-end gap-5 border-t sm:border-t-0 pt-2.5 sm:pt-0 border-zinc-800/80">
                            <div class="font-mono text-sm font-bold text-white">
                                {{ formatPrice(b.price) }}
                            </div>

                            <span
                                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border"
                                :class="{
                                    'bg-emerald-500/10 text-emerald-400 border-emerald-500/20': b.status === 'confirmed',
                                    'bg-amber-500/10 text-amber-400 border-amber-500/20': b.status === 'pending',
                                    'bg-zinc-800 text-zinc-400 border-zinc-700/60': b.status === 'completed',
                                    'bg-rose-500/10 text-rose-400 border-rose-500/20': b.status === 'cancelled'
                                }"
                            >
                                <span
                                    class="w-1.5 h-1.5 rounded-full"
                                    :class="{
                                        'bg-emerald-400': b.status === 'confirmed',
                                        'bg-amber-400': b.status === 'pending',
                                        'bg-zinc-500': b.status === 'completed',
                                        'bg-rose-400': b.status === 'cancelled'
                                    }"
                                ></span>
                                <span>
                                    {{
                                        b.status === 'confirmed' ? 'تایید شده' :
                                        b.status === 'pending' ? 'در انتظار تایید' :
                                        b.status === 'completed' ? 'انجام شد' : 'لغو شده'
                                    }}
                                </span>
                            </span>
                        </div>
                    </div>

                    <div v-if="!bookings || bookings.length === 0" class="p-16 text-center text-xs text-zinc-500">
                        <Clock class="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                        <span class="block font-bold text-white text-sm">نوبت فعالی یافت نشد</span>
                        <span class="text-zinc-400 block mt-1">با استفاده از دکمه‌های بالا می‌توانید نوبت ماساژ یا پیرایشگاه خود را ثبت کنید.</span>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
