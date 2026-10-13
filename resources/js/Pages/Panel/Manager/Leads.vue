<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { MessageSquare, Phone, User, CheckCircle, Clock, XCircle } from '@lucide/vue';
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
        <Head title="سرنخ‌های مشاوره رایگان" />

        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <MessageSquare class="w-6 h-6 text-lime-400" />
                        <span>سرنخ‌ها و درخواست‌های مشاوره رایگان</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        افرادی که فرم مشاوره سایت را پر کرده‌اند؛ تماس بگیرید یا به مربیان ارجاع دهید.
                    </p>
                </div>

                <!-- Filter Pills -->
                <div class="flex items-center gap-2">
                    <button
                        @click="filterStatus(null)"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
                        :class="!currentStatus ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'"
                    >
                        همه
                    </button>
                    <button
                        @click="filterStatus('new')"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
                        :class="currentStatus === 'new' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'"
                    >
                        جدید
                    </button>
                    <button
                        @click="filterStatus('contacted')"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
                        :class="currentStatus === 'contacted' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'"
                    >
                        تماس گرفته شده
                    </button>
                    <button
                        @click="filterStatus('closed')"
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
                        :class="currentStatus === 'closed' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'"
                    >
                        بسته شده
                    </button>
                </div>
            </div>

            <!-- Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]">
                            <tr>
                                <th class="p-4 font-bold text-white">نام متقاضی</th>
                                <th class="p-4 font-bold">شماره تماس</th>
                                <th class="p-4 font-bold">پیام / هدف</th>
                                <th class="p-4 font-bold">ارجاع به مربی</th>
                                <th class="p-4 font-bold">وضعیت پیگیری</th>
                                <th class="p-4 font-bold">تاریخ ثبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60">
                            <tr v-for="lead in leads.data" :key="lead.id" class="hover:bg-zinc-800/30">
                                <td class="p-4 font-bold text-white">{{ lead.name }}</td>
                                <td class="p-4 font-mono text-lime-400" dir="ltr">
                                    <a :href="'tel:' + lead.mobile" class="hover:underline">{{ lead.mobile }}</a>
                                </td>
                                <td class="p-4 text-zinc-300 max-w-xs truncate">{{ lead.message || '-' }}</td>
                                <td class="p-4">
                                    <select
                                        :value="lead.assigned_to"
                                        @change="assignTrainer(lead, $event.target.value)"
                                        class="h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none"
                                    >
                                        <option value="">بدون مربی</option>
                                        <option v-for="t in trainers" :key="t.id" :value="t.id">{{ t.full_name }}</option>
                                    </select>
                                </td>
                                <td class="p-4">
                                    <select
                                        :value="lead.status"
                                        @change="updateStatus(lead, $event.target.value)"
                                        class="h-8 bg-zinc-950 border rounded-lg px-2 text-[11px] font-bold focus:outline-none"
                                        :class="{
                                            'text-amber-400 border-amber-400/40': lead.status === 'new',
                                            'text-cyan-400 border-cyan-400/40': lead.status === 'contacted',
                                            'text-zinc-500 border-zinc-800': lead.status === 'closed'
                                        }"
                                    >
                                        <option value="new">جدید</option>
                                        <option value="contacted">تماس گرفته شده</option>
                                        <option value="closed">بسته شده</option>
                                    </select>
                                </td>
                                <td class="p-4 text-zinc-400 text-[11px] font-mono">
                                    {{ formatJalaliDateTime(lead.created_at) }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="leads.data.length === 0" class="p-12 text-center text-zinc-500 text-xs">
                    موردی یافت نشد.
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
