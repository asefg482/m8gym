<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { QrCode, Search, CheckCircle, Clock, AlertTriangle, UserCheck } from '@lucide/vue';
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
        <Head title="کنترل تردد و حضور و غیاب" />

        <div class="space-y-6">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <QrCode class="w-6 h-6 text-lime-400" />
                        <span>سیستم کنترل تردد و حضور و غیاب باشگاه</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">ثبت ورود/خروج اعضا و اعتبارسنجی خودکار اشتراک فعال هنگام ورود</p>
                </div>

                <div class="p-3 px-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-left">
                    <span class="text-xs text-zinc-400">تردد امروز:</span>
                    <span class="text-lg font-black text-lime-400 mr-2 font-mono">{{ todayCount }} نفر</span>
                </div>
            </div>

            <!-- Fast Check-in Box -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 max-w-xl">
                <h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider mb-3">ثبت تردد سریع (پذیرش / اسکن)</h3>
                <form @submit.prevent="record" class="flex items-center gap-3">
                    <div class="relative flex-1">
                        <input
                            v-model="form.mobile"
                            type="text"
                            placeholder="شماره موبایل ورزشکار را وارد کنید..."
                            dir="ltr"
                            autofocus
                            class="w-full h-12 bg-zinc-950 border border-zinc-800 rounded-2xl px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 text-center font-mono"
                        />
                    </div>
                    <button
                        type="submit"
                        :disabled="form.processing || !form.mobile"
                        class="h-12 px-6 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-40"
                    >
                        <UserCheck class="w-4 h-4" />
                        <span>ثبت تردد</span>
                    </button>
                </form>
                <p class="text-[11px] text-zinc-500 mt-2">
                    نکته: در صورت ورود قبلی در همان روز، خروج عضو به صورت خودکار ثبت می‌گردد.
                </p>
            </div>

            <!-- Attendance List -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]">
                            <tr>
                                <th class="p-4 font-bold text-white">نام ورزشکار</th>
                                <th class="p-4 font-bold">شماره موبایل</th>
                                <th class="p-4 font-bold">وضعیت اشتراک</th>
                                <th class="p-4 font-bold">زمان ورود</th>
                                <th class="p-4 font-bold">زمان خروج</th>
                                <th class="p-4 font-bold">شیوه ثبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60">
                            <tr v-for="att in attendances.data" :key="att.id" class="hover:bg-zinc-800/30">
                                <td class="p-4 font-bold text-white">{{ att.member?.full_name }}</td>
                                <td class="p-4 font-mono text-zinc-300" dir="ltr">{{ att.member?.mobile }}</td>
                                <td class="p-4">
                                    <span v-if="att.member?.active_membership" class="text-lime-400 font-bold text-[11px]">
                                        {{ att.member.active_membership.plan?.title }}
                                    </span>
                                    <span v-else class="text-amber-400 font-bold text-[11px] flex items-center gap-1">
                                        <AlertTriangle class="w-3.5 h-3.5" />
                                        فاقد اشتراک معتبر
                                    </span>
                                </td>
                                <td class="p-4 font-mono text-zinc-300">{{ formatJalaliDateTime(att.checkin_at) }}</td>
                                <td class="p-4 font-mono text-zinc-400">{{ att.checkout_at ? formatJalaliDateTime(att.checkout_at) : 'حاضر در سالن' }}</td>
                                <td class="p-4 text-zinc-400">{{ att.method === 'reception' ? 'پذیرش' : att.method }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
