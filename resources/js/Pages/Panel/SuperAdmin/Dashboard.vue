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
    Clock,
    Plus,
    FileText,
    Settings,
    CheckCircle2,
    Crown,
    Activity,
    ChevronLeft
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
        <Head title="داشبورد جامع مدیریت باشگاه - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Activity class="w-6 h-6 text-lime-400" />
                        <span>داشبورد جامع مدیریت باشگاه M8</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        دید کلی بر شاخص‌های مالی، اعضای فعال، گیت تردد، فروشگاه و رویدادهای سیستمی
                    </p>
                </div>

                <!-- Block Head Actions -->
                <div class="flex items-center gap-2.5">
                    <Link
                        href="/panel/super_admin/reports"
                        class="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                        <FileText class="w-3.5 h-3.5 text-lime-400" />
                        <span>گزارشات مالی</span>
                    </Link>
                    <Link
                        href="/panel/super_admin/users"
                        class="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-lime-400/20"
                    >
                        <Plus class="w-4 h-4" />
                        <span>ثبت عضو جدید</span>
                    </Link>
                </div>
            </div>

            <!-- Dashlite 4-Column Primary Metric Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <!-- Metric 1: Today Revenue -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">درآمد امروز</span>
                            <div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center">
                                <DollarSign class="w-4 h-4" />
                            </div>
                        </div>
                        <div class="text-2xl font-black text-white font-mono">
                            {{ formatPrice(stats.today_revenue) }}
                        </div>
                    </div>
                    <div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span class="text-emerald-400 font-bold flex items-center gap-1">
                            <TrendingUp class="w-3 h-3" /> تراکنش‌های موفق
                        </span>
                        <span class="text-zinc-500 font-mono">شاپرک و POS</span>
                    </div>
                </div>

                <!-- Metric 2: Month Revenue -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">درآمد ماه جاری</span>
                            <div class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                <TrendingUp class="w-4 h-4" />
                            </div>
                        </div>
                        <div class="text-2xl font-black text-lime-400 font-mono">
                            {{ formatPrice(stats.month_revenue) }}
                        </div>
                    </div>
                    <div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span class="text-zinc-400">مجموع اشتراک و خدمات</span>
                        <span class="text-lime-400 font-bold font-mono">M8 Finance</span>
                    </div>
                </div>

                <!-- Metric 3: Active Members -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">اعضای فعال باشگاه</span>
                            <div class="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                <Users class="w-4 h-4" />
                            </div>
                        </div>
                        <div class="text-2xl font-black text-white font-mono">
                            {{ stats.active_members }} <span class="text-xs font-normal text-zinc-400">ورزشکار</span>
                        </div>
                    </div>
                    <div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span class="text-zinc-400">دارای اشتراک معتبر</span>
                        <Link href="/panel/super_admin/users" class="text-lime-400 font-bold hover:underline">لیست اعضا ←</Link>
                    </div>
                </div>

                <!-- Metric 4: Today Attendances -->
                <div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-xs font-bold text-zinc-400">تردد و ورود امروز</span>
                            <div class="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                                <QrCode class="w-4 h-4" />
                            </div>
                        </div>
                        <div class="text-2xl font-black text-white font-mono">
                            {{ stats.today_attendances }} <span class="text-xs font-normal text-zinc-400">نفر</span>
                        </div>
                    </div>
                    <div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                        <span class="text-emerald-400 font-bold">● گیت فعال</span>
                        <Link href="/panel/super_admin/attendances" class="text-lime-400 font-bold hover:underline">لاگ تردد ←</Link>
                    </div>
                </div>
            </div>

            <!-- Dashlite Secondary Status Tiles Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                    <span class="text-[11px] text-zinc-400">اشتراک‌های رو به انقضا</span>
                    <div class="text-lg font-black text-amber-400 font-mono mt-1">{{ stats.expiring_soon }} نفر</div>
                </div>

                <div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                    <span class="text-[11px] text-zinc-400">سفارش‌های در جریان بوفه</span>
                    <div class="text-lg font-black text-white font-mono mt-1">{{ stats.pending_orders }} سفارش</div>
                </div>

                <div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                    <span class="text-[11px] text-zinc-400">نوبت‌های رزرو امروز</span>
                    <div class="text-lg font-black text-purple-400 font-mono mt-1">{{ stats.today_bookings }} نوبت</div>
                </div>

                <div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between">
                    <span class="text-[11px] text-zinc-400">سرنخ‌های جدید مشاوره</span>
                    <div class="text-lg font-black text-lime-400 font-mono mt-1">{{ stats.new_leads }} پیام</div>
                </div>
            </div>

            <!-- Dashlite 2-Column: Recent Payments & System Audit Logs -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <!-- Recent Payments Table Card (7 cols) -->
                <div class="lg:col-span-7 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                        <div class="flex items-center gap-2">
                            <CreditCard class="w-4 h-4 text-lime-400" />
                            <h2 class="text-sm font-bold text-white">آخرین تراکنش‌ها و پرداخت‌ها</h2>
                        </div>
                        <Link href="/panel/super_admin/reports" class="text-xs font-bold text-lime-400 hover:underline">
                            گزارش کامل →
                        </Link>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-right text-xs">
                            <thead class="text-zinc-400 border-b border-zinc-800">
                                <tr>
                                    <th class="p-3 font-bold">کاربر</th>
                                    <th class="p-3 font-bold">بابت</th>
                                    <th class="p-3 font-bold">مبلغ</th>
                                    <th class="p-3 font-bold">روش</th>
                                    <th class="p-3 font-bold">زمان</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60 font-mono">
                                <tr v-for="pay in recentPayments" :key="pay.id" class="hover:bg-zinc-800/20 transition-colors">
                                    <td class="p-3 font-sans font-bold text-white">{{ pay.user?.full_name || 'کاربر سیستم' }}</td>
                                    <td class="p-3 font-sans text-zinc-300">{{ pay.payable_type?.split('\\').pop() }}</td>
                                    <td class="p-3 text-lime-400 font-bold">{{ formatPrice(pay.amount) }}</td>
                                    <td class="p-3 font-sans text-zinc-400">
                                        <span class="px-2 py-0.5 rounded-md text-[10px] bg-zinc-950 border border-zinc-800">
                                            {{ pay.method === 'online' ? 'شاپرک' : 'کارتخوان' }}
                                        </span>
                                    </td>
                                    <td class="p-3 text-zinc-500 text-[11px]">{{ formatJalaliDateTime(pay.created_at) }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div v-if="!recentPayments || recentPayments.length === 0" class="p-8 text-center text-xs text-zinc-500 font-sans">
                            تراکنشی یافت نشد.
                        </div>
                    </div>
                </div>

                <!-- Audit Logs Card (5 cols) -->
                <div class="lg:col-span-5 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                    <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                        <div class="flex items-center gap-2">
                            <ShieldAlert class="w-4 h-4 text-purple-400" />
                            <h2 class="text-sm font-bold text-white">رویدادهای امنیتی و تغییرات</h2>
                        </div>
                        <Link href="/panel/super_admin/audit" class="text-xs font-bold text-lime-400 hover:underline">
                            مشاهده لاگ‌ها
                        </Link>
                    </div>

                    <div class="divide-y divide-zinc-800/60">
                        <div v-for="log in recentAuditLogs" :key="log.id" class="py-3 px-1 text-xs space-y-1">
                            <div class="flex items-center justify-between">
                                <span class="font-bold text-white">{{ log.action }}</span>
                                <span class="font-mono text-[10px] text-zinc-500">{{ formatJalaliDateTime(log.created_at) }}</span>
                            </div>
                            <p class="text-zinc-400 text-[11px] line-clamp-1">{{ log.description }}</p>
                        </div>

                        <div v-if="!recentAuditLogs || recentAuditLogs.length === 0" class="p-8 text-center text-xs text-zinc-500">
                            رویداد جدیدی ثبت نشده است.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
