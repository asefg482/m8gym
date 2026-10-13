<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { ShieldCheck, Check, Save, Lock, AlertCircle, RefreshCw, KeyRound, Sliders } from '@lucide/vue';
import DynamicIcon from '@/Components/DynamicIcon.vue';

const props = defineProps({
    roles: Array,
    menus: Array,
    matrix: Object, // menu_id => { role_key: bool }
});

// Build initial state for form: role_id => [menu_ids]
const initialRoleMenus = {};
for (const role of props.roles) {
    initialRoleMenus[role.id] = [];
    for (const menu of props.menus) {
        if (props.matrix[menu.id]?.[role.key]) {
            initialRoleMenus[role.id].push(menu.id);
        }
    }
}

const form = useForm({
    matrix: initialRoleMenus,
});

function togglePermission(roleId, menuId, roleKey) {
    if (roleKey === 'super_admin') return; // super_admin cannot be restricted!

    const currentList = form.matrix[roleId] || [];
    const index = currentList.indexOf(menuId);
    if (index > -1) {
        currentList.splice(index, 1);
    } else {
        currentList.push(menuId);
    }
}

function hasPermission(roleId, menuId, roleKey) {
    if (roleKey === 'super_admin') return true;
    return form.matrix[roleId]?.includes(menuId);
}

function saveMatrix() {
    form.post('/panel/manager/matrix', {
        preserveScroll: true,
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="ماتریس دسترسی نقش–منو - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <KeyRound class="w-4 h-4" />
                        <span>کنترل سطوح دسترسی مبتنی بر نقش (RBAC)</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">ماتریس دسترسی نقش‌ها و منوها</h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        تعیین پویای سطوح دسترسی هر نقش سازمانی به صفحات و ماژول‌های مختلف پنل مدیریتی باشگاه
                    </p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="saveMatrix"
                        :disabled="form.processing"
                        class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                        <RefreshCw v-if="form.processing" class="w-4 h-4 animate-spin" />
                        <Save v-else class="w-4 h-4 stroke-[2.5]" />
                        <span>{{ form.processing ? 'در حال ذخیره...' : 'ذخیره تغییرات ماتریس' }}</span>
                    </button>
                </div>
            </div>

            <!-- nk-card / Notice Callout -->
            <div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 text-xs text-zinc-300 flex items-start gap-3 shadow-lg">
                <Lock class="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <p class="leading-relaxed">
                    طبق معماری امنیتی سیستم، مدیر ارشد (<span class="text-lime-400 font-bold font-mono">super_admin</span>) به تمامی منوها دسترسی دائمی دارد و غیرقابل سلب امتیاز است. تغییرات بلافاصله پس از ذخیره بدون نیاز به ورود مجدد کاربران روی درخواست‌های بعدی آنها در سراسر پنل اعمال می‌گردد.
                </p>
            </div>

            <!-- nk-card / Matrix Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-2xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Sliders class="w-4 h-4 text-lime-400" />
                        <span>جدول تقاطع نقش‌ها و دسترسی به منوهای سیستم</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">{{ menus.length }} منو در سیستم</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]">
                            <tr>
                                <th class="p-4 font-bold text-white min-w-[220px]">منو / بخش پنل</th>
                                <th class="p-4 font-bold text-zinc-400">پنل مبدأ</th>
                                <th
                                    v-for="role in roles"
                                    :key="role.id"
                                    class="p-4 font-bold text-center min-w-[110px]"
                                    :class="{ 'text-lime-400 bg-lime-400/5': role.key === 'super_admin' }"
                                >
                                    <div class="flex flex-col items-center">
                                        <span class="font-bold">{{ role.title }}</span>
                                        <span class="text-[9px] font-mono text-zinc-500 font-normal">({{ role.key }})</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr
                                v-for="menu in menus"
                                :key="menu.id"
                                class="hover:bg-zinc-800/30 transition-colors"
                            >
                                <td class="p-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-lime-400 shrink-0">
                                            <DynamicIcon :name="menu.icon" class="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div class="font-bold text-white text-xs sm:text-sm">{{ menu.title }}</div>
                                            <div class="text-[10px] text-zinc-500 font-mono mt-0.5" dir="ltr">{{ menu.route }}</div>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-4 text-zinc-400 text-[11px]">
                                    <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-[10px] text-zinc-300">
                                        {{ menu.panel_role_key }}
                                    </span>
                                </td>

                                <td
                                    v-for="role in roles"
                                    :key="role.id"
                                    class="p-4 text-center"
                                    :class="{ 'bg-lime-400/5': role.key === 'super_admin' }"
                                >
                                    <button
                                        v-if="role.key === 'super_admin'"
                                        disabled
                                        type="button"
                                        class="w-7 h-7 rounded-xl bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center opacity-80 cursor-not-allowed border border-lime-400/30"
                                        title="دسترسی همیشگی مدیر ارشد"
                                    >
                                        <Lock class="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                        v-else
                                        @click="togglePermission(role.id, menu.id, role.key)"
                                        type="button"
                                        class="w-7 h-7 rounded-xl mx-auto flex items-center justify-center transition-all cursor-pointer border"
                                        :class="hasPermission(role.id, menu.id, role.key) 
                                            ? 'bg-lime-400 text-black border-lime-400 font-black shadow-md shadow-lime-400/20' 
                                            : 'bg-zinc-950 border-zinc-800 text-transparent hover:border-zinc-700'"
                                    >
                                        <Check class="w-4 h-4 stroke-[3]" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
