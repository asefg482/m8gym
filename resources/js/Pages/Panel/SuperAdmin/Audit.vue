<script setup>
import { ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    ShieldAlert, 
    Search, 
    Terminal, 
    Clock, 
    Globe, 
    User as UserIcon,
    Fingerprint,
    ShieldCheck
} from '@lucide/vue';
import { formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    logs: Object,
});

const search = ref('');

function handleSearch() {
    router.get('/panel/super_admin/audit', { search: search.value }, { preserveState: true });
}

function resetSearch() {
    search.value = '';
    handleSearch();
}
</script>

<template>
    <PanelLayout>
        <Head title="لاگ رویدادهای سیستم (Audit) - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <ShieldAlert class="w-4 h-4" />
                        <span>سیستم امنیت و لاگ یکپارچه</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">ثبت وقایع و لاگ امنیتی (Audit Logs)</h1>
                    <p class="text-xs text-zinc-400 mt-1">ردیابی تمامی عملیات‌های حساس، تغییرات نقش‌ها، پرداخت‌ها، مجوزها و ورودهای کاربران در سراسر پنل‌ها</p>
                </div>

                <div class="flex items-center gap-3">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
                        <Terminal class="w-4 h-4 text-lime-400" />
                        <span>Audit Trail v2.4</span>
                    </span>
                </div>
            </div>

            <!-- nk-card / Search Bar -->
            <div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg backdrop-blur-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div class="relative w-full sm:max-w-md">
                    <input
                        v-model="search"
                        @keyup.enter="handleSearch"
                        type="text"
                        placeholder="جستجو در شرح عملیات و آدرس IP..."
                        class="w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/40 transition-all"
                    />
                    <button @click="handleSearch" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors">
                        <Search class="w-4 h-4" />
                    </button>
                </div>

                <div class="text-[11px] text-zinc-400 flex items-center gap-2">
                    <button
                        v-if="search"
                        @click="resetSearch"
                        class="text-xs text-zinc-400 hover:text-white underline cursor-pointer ml-2"
                    >
                        پاکسازی
                    </button>
                    <span class="w-2 h-2 rounded-full bg-lime-400"></span>
                    <span>تعداد رکوردها: <b class="font-mono text-lime-400">{{ logs.total || logs.data?.length || 0 }}</b></span>
                </div>
            </div>

            <!-- nk-card / Logs Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Clock class="w-4 h-4 text-lime-400" />
                        <span>تاریخچه رویدادهای ثبت‌شده</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">ثبت بدون امکان تغییر (Append-Only)</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">کاربر عامل</th>
                                <th class="p-4 font-bold">نقش فعال</th>
                                <th class="p-4 font-bold">شرح عملیات</th>
                                <th class="p-4 font-bold">آدرس IP</th>
                                <th class="p-4 font-bold">زمان دقیق</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="log in logs.data" :key="log.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4">
                                    <div class="flex items-center gap-2.5">
                                        <div class="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0">
                                            {{ log.user ? log.user.full_name?.charAt(0) : 'S' }}
                                        </div>
                                        <div>
                                            <div class="font-bold text-white">{{ log.user ? log.user.full_name : 'سیستم خودکار باشگاه' }}</div>
                                            <div v-if="log.user" class="text-[10px] text-zinc-500 font-mono" dir="ltr">{{ log.user.mobile }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                                        {{ log.role_key || 'guest' }}
                                    </span>
                                </td>
                                <td class="p-4">
                                    <div class="font-bold text-zinc-200">{{ log.action }}</div>
                                    <div v-if="log.meta" class="text-[10px] text-zinc-500 font-mono mt-1 max-w-sm truncate bg-zinc-950/60 px-2 py-0.5 rounded border border-zinc-800/50" dir="ltr">
                                        {{ JSON.stringify(log.meta) }}
                                    </div>
                                </td>
                                <td class="p-4 font-mono text-zinc-400 text-[11px]" dir="ltr">
                                    <span class="flex items-center gap-1">
                                        <Globe class="w-3 h-3 text-zinc-600 inline" />
                                        {{ log.ip || '127.0.0.1' }}
                                    </span>
                                </td>
                                <td class="p-4 font-mono text-zinc-400 text-[11px]" dir="ltr">
                                    {{ formatJalaliDateTime(log.created_at) }}
                                </td>
                            </tr>
                            <tr v-if="!logs.data || logs.data.length === 0">
                                <td colspan="5" class="p-12 text-center text-zinc-500 text-xs">
                                    هیچ لاگی یافت نشد.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Dashlite Pagination -->
                <Pagination
                    :links="logs.links"
                    :from="logs.from"
                    :to="logs.to"
                    :total="logs.total"
                />
            </div>
        </div>
    </PanelLayout>
</template>
