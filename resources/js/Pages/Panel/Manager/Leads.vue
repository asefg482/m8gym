<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { MessageSquare, Phone, User as UserIcon, CheckCircle2, Clock, XCircle, UserCheck } from '@lucide/vue';
import { formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    leads: Object,
    trainers: Array,
    currentStatus: String,
});

function updateStatus(lead, newStatus) {
    router.put(`/panel/manager/leads/${lead.id}`, {
        status: newStatus,
        assigned_to: lead.assigned_to,
        note: lead.note,
    }, { preserveScroll: true });
}

function assignTrainer(lead, trainerId) {
    router.put(`/panel/manager/leads/${lead.id}`, {
        status: lead.status,
        assigned_to: trainerId,
        note: lead.note,
    }, { preserveScroll: true });
}

function filterStatus(status) {
    router.get('/panel/manager/leads', { status }, { preserveState: true });
}
</script>

<template>
    <PanelLayout>
        <Head title="سرنخ‌های مشاوره رایگان - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <MessageSquare class="w-4 h-4" />
                        <span>جذب اعضا و درخواست‌های مشاوره آنلاین</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">سرنخ‌ها و لیدهای مشاوره ورزشی</h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        ورزشکارانی که فرم مشاوره رایگان سایت را ارسال کرده‌اند؛ پیگیری تماس، ارجاع به مربیان اختصاصی و تعیین وضعیت
                    </p>
                </div>

                <!-- Filter Pills -->
                <div class="flex items-center gap-2 flex-wrap">
                    <button
                        @click="filterStatus(null)"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                        :class="!currentStatus ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        همه
                    </button>
                    <button
                        @click="filterStatus('new')"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                        :class="currentStatus === 'new' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        جدید
                    </button>
                    <button
                        @click="filterStatus('contacted')"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                        :class="currentStatus === 'contacted' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        تماس گرفته شده
                    </button>
                    <button
                        @click="filterStatus('closed')"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                        :class="currentStatus === 'closed' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        بسته شده
                    </button>
                </div>
            </div>

            <!-- nk-card / Leads Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <UserCheck class="w-4 h-4 text-lime-400" />
                        <span>فهرست متقاضیان و ثبت درخواست‌ها</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">مجموع: <b class="font-mono text-lime-400">{{ leads.total || leads.data?.length || 0 }}</b> سرنخ</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">نام متقاضی</th>
                                <th class="p-4 font-bold">شماره تماس</th>
                                <th class="p-4 font-bold">هدف ورزشی / پیام</th>
                                <th class="p-4 font-bold">ارجاع به مربی</th>
                                <th class="p-4 font-bold">وضعیت پیگیری</th>
                                <th class="p-4 font-bold">تاریخ ثبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="lead in leads.data" :key="lead.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4 font-bold text-white">{{ lead.name }}</td>
                                <td class="p-4 font-mono text-lime-400" dir="ltr">
                                    <a :href="'tel:' + lead.mobile" class="hover:underline flex items-center gap-1.5">
                                        <Phone class="w-3.5 h-3.5 text-zinc-500 inline" />
                                        <span>{{ lead.mobile }}</span>
                                    </a>
                                </td>
                                <td class="p-4 text-zinc-300 max-w-xs truncate">{{ lead.message || '-' }}</td>
                                <td class="p-4">
                                    <select
                                        :value="lead.assigned_to"
                                        @change="assignTrainer(lead, $event.target.value)"
                                        class="h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs text-white focus:outline-none focus:border-lime-400 transition-colors"
                                    >
                                        <option value="">بدون مربی تخصیصی</option>
                                        <option v-for="t in trainers" :key="t.id" :value="t.id">{{ t.full_name }}</option>
                                    </select>
                                </td>
                                <td class="p-4">
                                    <select
                                        :value="lead.status"
                                        @change="updateStatus(lead, $event.target.value)"
                                        class="h-9 bg-zinc-950 border rounded-xl px-2.5 text-xs font-bold focus:outline-none transition-colors"
                                        :class="{
                                            'text-amber-400 border-amber-400/40': lead.status === 'new',
                                            'text-cyan-400 border-cyan-400/40': lead.status === 'contacted',
                                            'text-zinc-500 border-zinc-800': lead.status === 'closed'
                                        }"
                                    >
                                        <option value="new">جدید (بررسی نشده)</option>
                                        <option value="contacted">تماس حاصل شده</option>
                                        <option value="closed">پرونده بسته شد</option>
                                    </select>
                                </td>
                                <td class="p-4 text-zinc-400 text-[11px] font-mono" dir="ltr">
                                    {{ formatJalaliDateTime(lead.created_at) }}
                                </td>
                            </tr>
                            <tr v-if="!leads.data || leads.data.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    موردی در این وضعیت یافت نشد.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination
                    :links="leads.links"
                    :from="leads.from"
                    :to="leads.to"
                    :total="leads.total"
                />
            </div>
        </div>
    </PanelLayout>
</template>
