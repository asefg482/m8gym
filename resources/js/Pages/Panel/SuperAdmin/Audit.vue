<script setup>
import { ref } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { ShieldAlert, Search, Terminal } from '@lucide/vue';
import { formatJalaliDateTime } from '@/Utils/formatters';

const props = defineProps({
    logs: Object,
});

const search = ref('');

function handleSearch() {
    router.get('/panel/super_admin/audit', { search: search.value }, { preserveState: true });
}
</script>

<template>
    <PanelLayout>
        <Head title="لاگ رویدادهای سیستم (Audit)" />

        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <ShieldAlert class="w-6 h-6 text-lime-400" />
                        <span>ثبت وقایع و لاگ امنیتی (Audit Log)</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">ردیابی تمامی عملیات‌های حساس، تغییرات نقش‌ها، پرداخت‌ها و ورودهای کاربران</p>
                </div>

                <div class="relative w-full sm:w-72">
                    <input
                        v-model="search"
                        @keyup.enter="handleSearch"
                        type="text"
                        placeholder="جستجو در شرح عملیات..."
                        class="w-full h-10 bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 text-xs text-white focus:outline-none focus:border-lime-400"
                    />
                    <button @click="handleSearch" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                        <Search class="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <!-- Logs Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]">
                            <tr>
                                <th class="p-4 font-bold text-white">کاربر عامل</th>
                                <th class="p-4 font-bold">نقش فعال</th>
                                <th class="p-4 font-bold">شرح رویداد</th>
                                <th class="p-4 font-bold">آدرس IP</th>
                                <th class="p-4 font-bold">زمان دقیق</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono">
                            <tr v-for="log in logs.data" :key="log.id" class="hover:bg-zinc-800/30">
                                <td class="p-4 font-sans font-bold text-white">
                                    {{ log.user ? log.user.full_name : 'سیستم خودکار' }}
                                    <span v-if="log.user" class="block text-[10px] text-zinc-500 font-mono" dir="ltr">{{ log.user.mobile }}</span>
                                </td>
                                <td class="p-4 text-zinc-300">
                                    <span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[11px]">
                                        {{ log.role_key || 'guest' }}
                                    </span>
                                </td>
                                <td class="p-4 font-sans text-zinc-200">
                                    <div>{{ log.action }}</div>
                                    <div v-if="log.meta" class="text-[10px] text-zinc-500 mt-1 max-w-md truncate" dir="ltr">
                                        {{ JSON.stringify(log.meta) }}
                                    </div>
                                </td>
                                <td class="p-4 text-zinc-400 text-[11px]">{{ log.ip || '127.0.0.1' }}</td>
                                <td class="p-4 text-zinc-400 text-[11px]">{{ formatJalaliDateTime(log.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
