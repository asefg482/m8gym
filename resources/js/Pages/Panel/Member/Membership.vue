<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { CreditCard, CheckCircle2, Crown, ArrowLeft } from '@lucide/vue';
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
        <Head title="تمدید و ارتقای اشتراک" />

        <div class="space-y-8">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <CreditCard class="w-6 h-6 text-lime-400" />
                    <span>اشتراک‌ها و تمدید عضویت باشگاه</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">پلن‌های دوره‌ای M8 با قابلیت پرداخت آنلاین و حضوری</p>
            </div>

            <!-- VIP Discount Notice -->
            <div v-if="isVip" class="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs flex items-center gap-2">
                <Crown class="w-4 h-4 shrink-0" />
                <span>شما عضو ویژه VIP هستید! ۱۰٪ تخفیف اضافه بر روی تمامی پلن‌های تمدید برای شما اعمال خواهد شد.</span>
            </div>

            <!-- Plans Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
                    :class="{ 'border-lime-400/80 shadow-2xl shadow-lime-400/10': plan.title.includes('VIP') }"
                >
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-sm font-bold text-white">{{ plan.title }}</h3>
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-lime-400 border border-zinc-800 font-mono">
                                {{ plan.duration_days }} روز
                            </span>
                        </div>

                        <div class="text-xl font-black text-white font-mono mb-6">
                            {{ formatPrice(isVip ? Math.round(plan.price * 0.9) : plan.price) }}
                        </div>

                        <ul class="space-y-2.5 text-xs text-zinc-300 mb-6">
                            <li v-for="(b, i) in plan.benefits || []" :key="i" class="flex items-start gap-2">
                                <CheckCircle2 class="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                                <span>{{ b }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="space-y-2 pt-4 border-t border-zinc-800/80">
                        <button
                            @click="purchase(plan, 'online')"
                            class="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all cursor-pointer"
                        >
                            پرداخت آنلاین شاپرک
                        </button>
                        <button
                            @click="purchase(plan, 'offline_pos')"
                            class="w-full py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium transition-all cursor-pointer"
                        >
                            پرداخت در باشگاه (کارتخوان)
                        </button>
                    </div>
                </div>
            </div>

            <!-- Membership History Table -->
            <div class="pt-6">
                <h2 class="text-sm font-bold text-white mb-4">سوابق اشتراک‌های قبلی</h2>
                <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                            <tr>
                                <th class="p-4 font-bold">پلن</th>
                                <th class="p-4 font-bold">تاریخ شروع</th>
                                <th class="p-4 font-bold">تاریخ پایان</th>
                                <th class="p-4 font-bold">مبلغ پرداختی</th>
                                <th class="p-4 font-bold">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono">
                            <tr v-for="m in history" :key="m.id" class="hover:bg-zinc-800/20">
                                <td class="p-4 font-sans font-bold text-white">{{ m.plan?.title }}</td>
                                <td class="p-4 text-zinc-300">{{ formatJalaliDate(m.starts_at) }}</td>
                                <td class="p-4 text-zinc-300">{{ formatJalaliDate(m.ends_at) }}</td>
                                <td class="p-4 text-lime-400 font-bold">{{ formatPrice(m.paid_amount) }}</td>
                                <td class="p-4 font-sans">
                                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold" :class="m.status === 'active' ? 'bg-lime-400/10 text-lime-400' : 'bg-zinc-800 text-zinc-400'">
                                        {{ m.status === 'active' ? 'فعال' : 'منقضی' }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
