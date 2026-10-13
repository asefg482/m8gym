<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    QrCode, 
    Search, 
    CheckCircle2, 
    Clock, 
    AlertTriangle, 
    UserCheck, 
    Calendar,
    Users,
    Smartphone,
    CreditCard
} from '@lucide/vue';
import { formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    attendances: Object,
    todayCount: Number,
});

const form = useForm({
    mobile: '',
    method: 'reception',
});

function record() {
    form.post('/panel/super_admin/attendances', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('mobile');
        },
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="کنترل تردد و حضور و غیاب - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <QrCode class="w-4 h-4" />
                        <span>پذیرش و گیت‌های هوشمند</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">کنترل تردد و حضور و غیاب باشگاه</h1>
                    <p class="text-xs text-zinc-400 mt-1">ثبت ورود/خروج اعضا و اعتبارسنجی خودکار اشتراک ورزشی هنگام عبور از گیت</p>
                </div>

                <div class="flex items-center gap-3">
                    <div class="px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 flex items-center gap-3 shadow-lg">
                        <div class="w-9 h-9 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                            <Users class="w-4 h-4" />
                        </div>
                        <div>
                            <span class="text-[10px] text-zinc-400 block font-medium">ورودهای امروز:</span>
                            <span class="text-base font-black text-white font-mono leading-none">{{ todayCount }} نفر</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- nk-card / Fast Check-in Box -->
            <div class="p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl backdrop-blur-sm max-w-2xl">
                <div class="flex items-center gap-2 mb-3">
                    <span class="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider">ثبت تردد سریع (پذیرش / اسکن بارکد یا کارت)</h3>
                </div>
                <form @submit.prevent="record" class="flex flex-col sm:flex-row items-stretch gap-3">
                    <div class="relative flex-1">
                        <input
                            v-model="form.mobile"
                            type="text"
                            placeholder="شماره موبایل ورزشکار را وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)..."
                            dir="ltr"
                            autofocus
                            class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30 text-center font-mono transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        :disabled="form.processing || !form.mobile"
                        class="h-11 px-6 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all shrink-0"
                    >
                        <UserCheck class="w-4 h-4 stroke-[2.5]" />
                        <span>{{ form.processing ? 'در حال ثبت...' : 'ثبت ورود / خروج' }}</span>
                    </button>
                </form>
                <div class="flex items-center gap-2 text-[11px] text-zinc-500 mt-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                    <span>سیستم در صورت وجود ورود باز در همان روز، به صورت خودکار خروج کاربر را با محاسبه مدت حضور ثبت می‌کند.</span>
                </div>
            </div>

            <!-- nk-card / Attendance List -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Clock class="w-4 h-4 text-lime-400" />
                        <span>گزارش زنده آخرین ترددهای ثبت‌شده</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">به‌روزرسانی آنی</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">ورزشکار</th>
                                <th class="p-4 font-bold">شماره موبایل</th>
                                <th class="p-4 font-bold">وضعیت اشتراک</th>
                                <th class="p-4 font-bold">زمان ورود</th>
                                <th class="p-4 font-bold">زمان خروج</th>
                                <th class="p-4 font-bold text-center">شیوه ثبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="att in attendances.data" :key="att.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4 font-bold text-white flex items-center gap-2">
                                    <div class="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0">
                                        {{ att.member?.first_name ? att.member.first_name.charAt(0) : 'M' }}
                                    </div>
                                    <span>{{ att.member?.full_name || 'کاربر مهمان' }}</span>
                                </td>
                                <td class="p-4 font-mono text-zinc-300" dir="ltr">{{ att.member?.mobile }}</td>
                                <td class="p-4">
                                    <span v-if="att.member?.active_membership" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20">
                                        <CheckCircle2 class="w-3 h-3" />
                                        {{ att.member.active_membership.plan?.title }}
                                    </span>
                                    <span v-else class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                                        <AlertTriangle class="w-3 h-3" />
                                        فاقد اشتراک معتبر
                                    </span>
                                </td>
                                <td class="p-4 font-mono text-white" dir="ltr">{{ formatJalaliDateTime(att.check_in) }}</td>
                                <td class="p-4 font-mono text-zinc-400" dir="ltr">
                                    <span v-if="att.check_out">{{ formatJalaliDateTime(att.check_out) }}</span>
                                    <span v-else class="text-lime-400 font-bold text-[10px] bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20">در حال تمرین</span>
                                </td>
                                <td class="p-4 text-center">
                                    <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px] font-medium">
                                        {{ att.method === 'card' ? 'کارت هوشمند' : att.method === 'qr' ? 'اسکن بارکد' : 'ثبت گیت پذیرش' }}
                                    </span>
                                </td>
                            </tr>
                            <tr v-if="!attendances.data || attendances.data.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    امروز هنوز ترددی ثبت نگردیده است.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Dashlite Pagination -->
                <Pagination
                    :links="attendances.links"
                    :from="attendances.from"
                    :to="attendances.to"
                    :total="attendances.total"
                />
            </div>
        </div>
    </PanelLayout>
</template>
