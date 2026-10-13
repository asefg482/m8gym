<script setup>
import { computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    BarChart3, 
    TrendingUp, 
    CreditCard, 
    ShoppingBag, 
    Coffee, 
    Scissors,
    ArrowUpRight,
    PieChart,
    Wallet,
    ShieldCheck
} from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    sources: Object,
    totalRevenue: Number,
});

const membershipPercent = computed(() => {
    if (!props.totalRevenue) return 0;
    return Math.round(((props.sources?.memberships || 0) / props.totalRevenue) * 100);
});

const shopPercent = computed(() => {
    if (!props.totalRevenue) return 0;
    return Math.round(((props.sources?.shop || 0) / props.totalRevenue) * 100);
});

const buffetPercent = computed(() => {
    if (!props.totalRevenue) return 0;
    return Math.round(((props.sources?.buffet || 0) / props.totalRevenue) * 100);
});

const servicePercent = computed(() => {
    if (!props.totalRevenue) return 0;
    return Math.round(((props.sources?.services || 0) / props.totalRevenue) * 100);
});
</script>

<template>
    <PanelLayout>
        <Head title="گزارش‌های مالی تجمیعی - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <BarChart3 class="w-4 h-4" />
                        <span>سامانه تحلیل مالی و حسابداری تجمیعی</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">گزارش مالی تجمیعی و منابع درآمد باشگاه M8</h1>
                    <p class="text-xs text-zinc-400 mt-1">تفکیک درآمدها به تفکیک شهریه اشتراک‌ها، فروشگاه مکمل، بوفه و کافه سلامت و خدمات تخصصی اسپا</p>
                </div>

                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold">
                        <ShieldCheck class="w-4 h-4" />
                        <span>سیستم ضد مغایرت آنی</span>
                    </span>
                </div>
            </div>

            <!-- nk-block / Hero Total Card -->
            <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-l from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
                <div class="absolute -left-10 -bottom-10 w-48 h-48 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"></div>
                <div class="relative z-10">
                    <div class="flex items-center gap-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                        <Wallet class="w-4 h-4 text-lime-400" />
                        <span>مجموع کل درآمدهای محقق‌شده سیستم</span>
                    </div>
                    <div class="text-3xl sm:text-5xl font-black text-lime-400 font-mono mt-3 tracking-tight">
                        {{ formatPrice(totalRevenue) }}
                    </div>
                    <p class="text-xs text-zinc-400 mt-2">تسویه‌شده از درگاه‌های شتابی و پرداخت‌های کارتخوان پذیرش باشگاه</p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
                    <div class="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300">
                        <span class="text-zinc-500 block text-[10px]">وضعیت پایدار صندوق</span>
                        <div class="text-white font-bold text-sm mt-1">تراکنش‌های موفق ۱۰۰٪</div>
                    </div>
                </div>
            </div>

            <!-- nk-block / Breakdown Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <!-- Memberships -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <CreditCard class="w-5 h-5" />
                            </div>
                            <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 font-mono">
                                %{{ membershipPercent }}
                            </span>
                        </div>
                        <h3 class="text-xs font-bold text-zinc-400">درآمد اشتراک‌ها و شهریه</h3>
                        <div class="text-xl font-black text-white font-mono mt-2">
                            {{ formatPrice(sources.memberships) }}
                        </div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-zinc-800/60">
                        <div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                            <div class="bg-lime-400 h-1.5 rounded-full" :style="{ width: `${membershipPercent}%` }"></div>
                        </div>
                        <span class="text-[10px] text-zinc-500 mt-1.5 block">پلن‌های عادی، طلایی و سالانه</span>
                    </div>
                </div>

                <!-- Shop -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                                <ShoppingBag class="w-5 h-5" />
                            </div>
                            <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 font-mono">
                                %{{ shopPercent }}
                            </span>
                        </div>
                        <h3 class="text-xs font-bold text-zinc-400">فروشگاه مکمل و پوشاک</h3>
                        <div class="text-xl font-black text-white font-mono mt-2">
                            {{ formatPrice(sources.shop) }}
                        </div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-zinc-800/60">
                        <div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                            <div class="bg-amber-400 h-1.5 rounded-full" :style="{ width: `${shopPercent}%` }"></div>
                        </div>
                        <span class="text-[10px] text-zinc-500 mt-1.5 block">فروش حضوری POS و سفارشات آنلاین</span>
                    </div>
                </div>

                <!-- Buffet -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold">
                                <Coffee class="w-5 h-5" />
                            </div>
                            <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 font-mono">
                                %{{ buffetPercent }}
                            </span>
                        </div>
                        <h3 class="text-xs font-bold text-zinc-400">بوفه و کافه سلامت M8</h3>
                        <div class="text-xl font-black text-white font-mono mt-2">
                            {{ formatPrice(sources.buffet) }}
                        </div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-zinc-800/60">
                        <div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                            <div class="bg-cyan-400 h-1.5 rounded-full" :style="{ width: `${buffetPercent}%` }"></div>
                        </div>
                        <span class="text-[10px] text-zinc-500 mt-1.5 block">انواع شیک پروتئینی، قهوه و تغذیه رژیمی</span>
                    </div>
                </div>

                <!-- Services -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-10 h-10 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold">
                                <Scissors class="w-5 h-5" />
                            </div>
                            <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20 font-mono">
                                %{{ servicePercent }}
                            </span>
                        </div>
                        <h3 class="text-xs font-bold text-zinc-400">خدمات اسپا و پیرایشگاه VIP</h3>
                        <div class="text-xl font-black text-white font-mono mt-2">
                            {{ formatPrice(sources.services) }}
                        </div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-zinc-800/60">
                        <div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                            <div class="bg-purple-400 h-1.5 rounded-full" :style="{ width: `${servicePercent}%` }"></div>
                        </div>
                        <span class="text-[10px] text-zinc-500 mt-1.5 block">رزرو ماساژ تخصصی و سالن پیرایش آقایان</span>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
