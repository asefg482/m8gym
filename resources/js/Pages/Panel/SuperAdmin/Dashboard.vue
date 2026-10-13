<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import {
    Users,
    CreditCard,
    DollarSign,
    QrCode,
    ShoppingBag,
    Calendar,
    MessageSquare,
    ShieldAlert,
    TrendingUp,
    Clock
} from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    stats: Object,
    recentPayments: Array,
    recentAuditLogs: Array,
});
</script>

<template>
    <PanelLayout>
        <Head title="داشبورد کل باشگاه" />

        <div class="space-y-8">
            <!-- Header -->
            <div>
                <h1 class="text-2xl font-black text-white">داشبورد جامع مدیریت باشگاه M8</h1>
                <p class="text-xs text-zinc-400 mt-1">دید کلی بر عملکرد، مالی، تردد و اعضای باشگاه</p>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between text-zinc-400 mb-2">
                        <span class="text-xs font-semibold">درآمد امروز</span>
                        <DollarSign class="w-4 h-4 text-lime-400" />
                    </div>
                    <div class="text-xl font-black text-white font-mono">
                        {{ formatPrice(stats.today_revenue) }}
                    </div>
                </div>

                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between text-zinc-400 mb-2">
                        <span class="text-xs font-semibold">درآمد ماه جاری</span>
                        <TrendingUp class="w-4 h-4 text-lime-400" />
                    </div>
                    <div class="text-xl font-black text-white font-mono">
                        {{ formatPrice(stats.month_revenue) }}
                    </div>
                </div>

                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between text-zinc-400 mb-2">
                        <span class="text-xs font-semibold">اعضای فعال باشگاه</span>
                        <Users class="w-4 h-4 text-lime-400" />
                    </div>
                    <div class="text-xl font-black text-white font-mono">
                        {{ stats.active_members }} <span class="text-xs font-normal text-zinc-400">ورزشکار</span>
                    </div>
                </div>

                <div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between text-zinc-400 mb-2">
                        <span class="text-xs font-semibold">ورود و تردد امروز</span>
                        <QrCode class="w-4 h-4 text-lime-400" />
                    </div>
                    <div class="text-xl font-black text-white font-mono">
                        {{ stats.today_attendances }} <span class="text-xs font-normal text-zinc-400">نفر</span>
                    </div>
                </div>
            </div>

            <!-- Row 2: Secondary stats -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                    <span class="text-[11px] text-zinc-400">اشتراک‌های در شرف انقضا</span>
                    <div class="text-base font-bold text-amber-400 mt-1">{{ stats.expiring_soon }} نفر</div>
                </div>
                <div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                    <span class="text-[11px] text-zinc-400">سفارش‌های در جریان بوفه/فروشگاه</span>
                    <div class="text-base font-bold text-white mt-1">{{ stats.pending_orders }} سفارش</div>
                </div>
                <div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                    <span class="text-[11px] text-zinc-400">نوبت‌های رزرو امروز</span>
                    <div class="text-base font-bold text-white mt-1">{{ stats.today_bookings }} نوبت</div>
                </div>
                <div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                    <span class="text-[11px] text-zinc-400">سرنخ‌های جدید مشاوره</span>
                    <div class="text-base font-bold text-lime-400 mt-1">{{ stats.new_leads }} درخواست</div>
                </div>
            </div>

            <!-- Recent Payments & Audit Logs -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Recent Transactions -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-bold text-white flex items-center gap-2">
                            <CreditCard class="w-4 h-4 text-lime-400" />
                            <span>تراکنش‌های اخیر مالی</span>
                        </h3>
                        <Link href="/panel/super_admin/reports" class="text-xs text-lime-400 hover:underline">مشاهده همه</Link>
                    </div>

                    <div class="space-y-3">
                        <div
                            v-for="pay in recentPayments"
                            :key="pay.id"
                            class="p-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs"
                        >
                            <div>
                                <span class="font-bold text-white">{{ pay.user?.full_name || 'کاربر' }}</span>
                                <span class="text-zinc-500 font-mono block text-[10px]">{{ pay.method }} • {{ pay.status }}</span>
                            </div>
                            <div class="text-left font-mono font-bold text-lime-400">
                                {{ formatPrice(pay.amount) }}
                            </div>
                        </div>

                        <div v-if="recentPayments.length === 0" class="p-4 text-center text-xs text-zinc-500">
                            تراکنشی ثبت نشده است.
                        </div>
                    </div>
                </div>

                <!-- Recent Audit Logs -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-bold text-white flex items-center gap-2">
                            <ShieldAlert class="w-4 h-4 text-lime-400" />
                            <span>گزارش فعالیت‌های اخیر (Audit)</span>
                        </h3>
                        <Link href="/panel/super_admin/audit" class="text-xs text-lime-400 hover:underline">مشاهده همه</Link>
                    </div>

                    <div class="space-y-3">
                        <div
                            v-for="log in recentAuditLogs"
                            :key="log.id"
                            class="p-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs"
                        >
                            <div class="flex flex-col">
                                <span class="text-zinc-200 font-medium">{{ log.action }}</span>
                                <span class="text-[10px] text-zinc-500">{{ log.user?.full_name }} ({{ log.role_key || 'عمومی' }})</span>
                            </div>
                            <span class="text-[10px] text-zinc-500 font-mono">
                                {{ formatJalaliDateTime(log.created_at) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
