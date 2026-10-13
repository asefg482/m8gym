<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { CreditCard, CheckCircle2, Crown, ChevronLeft, ShieldCheck, Zap } from '@lucide/vue';
import { formatPrice, formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    activeMembership: Object,
    plans: Array,
    history: Array,
    isVip: Boolean,
});

function purchase(plan, method = 'online') {
    router.post(`/payment/membership/${plan.id}`, {
        payment_method: method,
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="اشتراک‌ها و تمدید عضویت - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <CreditCard class="w-6 h-6 text-lime-400" />
                        <span>اشتراک‌ها و تمدید عضویت باشگاه</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        مشاهده پلن‌های دوره‌ای و VIP باشگاه M8 با امکان پرداخت آنلاین شاپرک یا کارتخوان حضوری
                    </p>
                </div>

                <div v-if="activeMembership" class="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-xs">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-zinc-400">اشتراک فعلی:</span>
                    <span class="font-bold text-lime-400">{{ activeMembership.plan?.title }}</span>
                </div>
            </div>

            <!-- VIP Discount Notice -->
            <div v-if="isVip" class="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs flex items-center gap-3 shadow-sm shadow-amber-400/10">
                <Crown class="w-5 h-5 shrink-0" />
                <span>
                    <strong>تخفیف ویژه VIP فعال است:</strong> به عنوان عضو طلایی M8، ۱۰٪ تخفیف مازاد بر روی تمامی بسته‌ها در مرحله صدور فاکتور برای شما محاسبه شده است.
                </span>
            </div>

            <!-- Dashlite Pricing Plans Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="p-6 rounded-2xl bg-zinc-900/90 border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 relative"
                    :class="[
                        plan.title.includes('VIP')
                            ? 'border-lime-400/80 shadow-xl shadow-lime-400/10'
                            : 'border-zinc-800/90 hover:border-zinc-700 shadow-sm'
                    ]"
                >
                    <!-- VIP Ribbon if applicable -->
                    <div v-if="plan.title.includes('VIP')" class="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-lime-400 text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                        پیشنهاد ویژه
                    </div>

                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-sm font-bold text-white">{{ plan.title }}</h3>
                            <span class="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-zinc-950 text-lime-400 border border-zinc-800">
                                {{ plan.duration_days }} روز
                            </span>
                        </div>

                        <!-- Price Section -->
                        <div class="my-4">
                            <div class="text-2xl font-black text-white font-mono">
                                {{ formatPrice(isVip ? Math.round(plan.price * 0.9) : plan.price) }}
                            </div>
                            <span v-if="isVip" class="text-[10px] text-zinc-500 line-through font-mono">
                                {{ formatPrice(plan.price) }}
                            </span>
                        </div>

                        <!-- Benefits Checklist -->
                        <ul class="space-y-2.5 text-xs text-zinc-300 my-6">
                            <li v-for="(b, i) in plan.benefits || []" :key="i" class="flex items-start gap-2">
                                <CheckCircle2 class="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                                <span>{{ b }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Action Buttons -->
                    <div class="space-y-2 pt-4 border-t border-zinc-800/80">
                        <button
                            @click="purchase(plan, 'online')"
                            type="button"
                            class="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20 cursor-pointer"
                        >
                            پرداخت آنلاین شاپرک
                        </button>
                        <button
                            @click="purchase(plan, 'offline_pos')"
                            type="button"
                            class="w-full py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium transition-colors cursor-pointer"
                        >
                            پرداخت در باشگاه (کارتخوان)
                        </button>
                    </div>
                </div>
            </div>

            <!-- Dashlite Membership History Table Card -->
            <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <h2 class="text-sm font-bold text-white">سوابق اشتراک‌های قبلی</h2>
                    <span class="text-xs text-zinc-400 font-mono">{{ history ? history.length : 0 }} رکورد</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="text-zinc-400 border-b border-zinc-800">
                            <tr>
                                <th class="p-3.5 font-bold">پلن</th>
                                <th class="p-3.5 font-bold">تاریخ شروع</th>
                                <th class="p-3.5 font-bold">تاریخ پایان</th>
                                <th class="p-3.5 font-bold">مبلغ پرداختی</th>
                                <th class="p-3.5 font-bold">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono">
                            <tr v-for="m in history" :key="m.id" class="hover:bg-zinc-800/20 transition-colors">
                                <td class="p-3.5 font-sans font-bold text-white">{{ m.plan?.title }}</td>
                                <td class="p-3.5 text-zinc-300">{{ formatJalaliDate(m.starts_at) }}</td>
                                <td class="p-3.5 text-zinc-300">{{ formatJalaliDate(m.ends_at) }}</td>
                                <td class="p-3.5 text-lime-400 font-bold">{{ formatPrice(m.paid_amount) }}</td>
                                <td class="p-3.5 font-sans">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border"
                                        :class="[
                                            m.status === 'active'
                                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                                : 'bg-zinc-800 text-zinc-400 border-zinc-700/60'
                                        ]"
                                    >
                                        <span class="w-1.5 h-1.5 rounded-full" :class="m.status === 'active' ? 'bg-emerald-400' : 'bg-zinc-500'"></span>
                                        <span>{{ m.status === 'active' ? 'فعال' : 'منقضی شده' }}</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div v-if="!history || history.length === 0" class="p-8 text-center text-xs text-zinc-500 font-sans">
                        سابقه اشتراکی در سیستم یافت نشد.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
