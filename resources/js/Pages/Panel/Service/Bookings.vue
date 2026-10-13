<script setup>
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    Calendar, 
    Clock, 
    CheckCircle2, 
    XCircle, 
    Scissors, 
    User as UserIcon,
    CalendarCheck,
    Check
} from '@lucide/vue';
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
        <Head title="تقویم رزروها و نوبت‌ها - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <CalendarCheck class="w-4 h-4" />
                        <span>سیستم نوبت‌دهی هوشمند بدون تداخل</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">تقویم نوبت‌ها و رزروهای خدمات</h1>
                    <p class="text-xs text-zinc-400 mt-1">تایید، تغییر وضعیت، مدیریت کنسلی و جلوگیری هوشمند از همپوشانی زمانی نوبت‌ها</p>
                </div>

                <!-- Status Pills -->
                <div class="flex items-center gap-2 flex-wrap">
                    <button 
                        @click="filterStatus(null)" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="!currentStatus ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        همه
                    </button>
                    <button 
                        @click="filterStatus('pending')" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="currentStatus === 'pending' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        در انتظار تایید
                    </button>
                    <button 
                        @click="filterStatus('confirmed')" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="currentStatus === 'confirmed' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        تایید شده
                    </button>
                    <button 
                        @click="filterStatus('completed')" 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer" 
                        :class="currentStatus === 'completed' ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'"
                    >
                        انجام شده
                    </button>
                </div>
            </div>

            <!-- nk-card / Bookings Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Calendar class="w-4 h-4 text-lime-400" />
                        <span>فهرست نوبت‌های ثبت‌شده در سیستم</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">مجموع: <b class="font-mono text-lime-400">{{ bookings.total || bookings.data?.length || 0 }}</b> نوبت</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">نام ورزشکار</th>
                                <th class="p-4 font-bold">خدمت انتخابی</th>
                                <th class="p-4 font-bold">متخصص / ارائه‌دهنده</th>
                                <th class="p-4 font-bold">زمان نوبت</th>
                                <th class="p-4 font-bold">تعرفه</th>
                                <th class="p-4 font-bold">وضعیت نوبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="b in bookings.data" :key="b.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4">
                                    <div class="font-bold text-white text-xs sm:text-sm">{{ b.member?.full_name || 'کاربر مهمان' }}</div>
                                    <div class="text-[10px] text-zinc-500 font-mono mt-0.5" dir="ltr">{{ b.member?.mobile }}</div>
                                </td>
                                <td class="p-4">
                                    <span class="font-bold text-zinc-200">{{ b.service?.title }}</span>
                                    <span class="text-zinc-500 text-[10px] block mt-0.5">{{ b.service?.category === 'massage' ? 'ماساژ ورزشی' : 'پیرایشگاه VIP' }}</span>
                                </td>
                                <td class="p-4 text-zinc-300">{{ b.provider?.full_name || 'تخصیص نیافته' }}</td>
                                <td class="p-4 font-mono text-white text-xs" dir="ltr">
                                    {{ formatJalaliDateTime(b.starts_at) }}
                                </td>
                                <td class="p-4 font-mono font-black text-lime-400 text-sm">{{ formatPrice(b.price) }}</td>
                                <td class="p-4">
                                    <select
                                        :value="b.status"
                                        @change="updateStatus(b, $event.target.value)"
                                        class="h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs font-bold focus:outline-none focus:border-lime-400 transition-colors"
                                        :class="{
                                            'text-amber-400 border-amber-400/30': b.status === 'pending',
                                            'text-blue-400 border-blue-400/30': b.status === 'confirmed',
                                            'text-emerald-400 border-emerald-400/30': b.status === 'completed',
                                            'text-rose-400 border-rose-400/30': b.status === 'cancelled' || b.status === 'no_show',
                                        }"
                                    >
                                        <option value="pending">در انتظار تایید</option>
                                        <option value="confirmed">تایید شده</option>
                                        <option value="completed">انجام شد (تسویه نهایی)</option>
                                        <option value="cancelled">لغو شده</option>
                                        <option value="no_show">عدم حضور (غیبت)</option>
                                    </select>
                                </td>
                            </tr>
                            <tr v-if="!bookings.data || bookings.data.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    نوبتی در این وضعیت یافت نشد.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination
                    :links="bookings.links"
                    :from="bookings.from"
                    :to="bookings.to"
                    :total="bookings.total"
                />
            </div>
        </div>
    </PanelLayout>
</template>
