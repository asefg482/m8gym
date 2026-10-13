<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Calendar, Clock, CheckCircle2, XCircle } from '@lucide/vue';
import { formatPrice, formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    bookings: Object,
    services: Array,
    providers: Array,
    members: Array,
    currentStatus: String,
});

function updateStatus(booking, newStatus) {
    router.put(`/panel/service/bookings/${booking.id}/status`, {
        status: newStatus,
    }, { preserveScroll: true });
}

function filterStatus(status) {
    router.get('/panel/service/bookings', { status }, { preserveState: true });
}
</script>

<template>
    <PanelLayout>
        <Head title="تقویم رزروها و نوبت‌ها" />

        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Calendar class="w-6 h-6 text-lime-400" />
                        <span>تقویم نوبت‌ها و رزروهای خدمات</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">تایید، تکمیل، لغو نوبت و جلوگیری خودکار از تداخل زمانی (Overlap)</p>
                </div>

                <!-- Status Pills -->
                <div class="flex items-center gap-2">
                    <button @click="filterStatus(null)" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="!currentStatus ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">همه</button>
                    <button @click="filterStatus('pending')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="currentStatus === 'pending' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">در انتظار</button>
                    <button @click="filterStatus('confirmed')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="currentStatus === 'confirmed' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">تایید شده</button>
                    <button @click="filterStatus('completed')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all" :class="currentStatus === 'completed' ? 'bg-lime-400 text-black' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'">انجام شد</button>
                </div>
            </div>

            <!-- Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold text-white">نام ورزشکار</th>
                            <th class="p-4 font-bold">خدمت انتخابی</th>
                            <th class="p-4 font-bold">ارائه‌دهنده</th>
                            <th class="p-4 font-bold">زمان شروع و پایان</th>
                            <th class="p-4 font-bold">مبلغ</th>
                            <th class="p-4 font-bold">وضعیت نوبت</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono">
                        <tr v-for="b in bookings.data" :key="b.id" class="hover:bg-zinc-800/20">
                            <td class="p-4 font-sans font-bold text-white">{{ b.member?.full_name }}</td>
                            <td class="p-4 font-sans text-zinc-300">{{ b.service?.title }}</td>
                            <td class="p-4 font-sans text-zinc-400">{{ b.provider?.full_name }}</td>
                            <td class="p-4 text-zinc-300">
                                {{ formatJalaliDateTime(b.starts_at) }}
                            </td>
                            <td class="p-4 text-lime-400 font-bold">{{ formatPrice(b.price) }}</td>
                            <td class="p-4 font-sans">
                                <select
                                    :value="b.status"
                                    @change="updateStatus(b, $event.target.value)"
                                    class="h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] font-bold focus:outline-none"
                                >
                                    <option value="pending">در انتظار تایید</option>
                                    <option value="confirmed">تایید شده</option>
                                    <option value="completed">انجام شد</option>
                                    <option value="cancelled">لغو شده</option>
                                    <option value="no_show">عدم حضور (غایب)</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </PanelLayout>
</template>
