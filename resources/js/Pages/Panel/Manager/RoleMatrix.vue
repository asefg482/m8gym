<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { ShieldCheck, Check, Save, Lock, AlertCircle, RefreshCw } from '@lucide/vue';
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
        <Head title="ماتریس دسترسی نقش–منو" />

        <div class="space-y-6">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <ShieldCheck class="w-6 h-6 text-lime-400" />
                        <span>ماتریس دسترسی و سطوح دسترسی منوها</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        تعیین کنید کدام نقش‌ها به کدام صفحات و منوهای پنل دسترسی داشته باشند (منبع پویای سیستم مجوزها).
                    </p>
                </div>

                <button
                    @click="saveMatrix"
                    :disabled="form.processing"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all cursor-pointer disabled:opacity-50"
                >
                    <RefreshCw v-if="form.processing" class="w-4 h-4 animate-spin" />
                    <Save v-else class="w-4 h-4" />
                    <span>ذخیره تغییرات ماتریس</span>
                </button>
            </div>

            <!-- Notice Callout -->
            <div class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-3">
                <Lock class="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <p>
                    طبق قوانین سیستم، مدیر ارشد (<span class="text-lime-400 font-bold">super_admin</span>) به تمامی منوها دسترسی کامل دارد و غیرقابل محدود شدن است. تغییرات بلافاصله و بدون نیاز به ورود مجدد کاربران روی درخواست‌های بعدی آنها اعمال می‌گردد.
                </p>
            </div>

            <!-- Table Container -->
            <div class="rounded-3xl bg-zinc-900/80 border border-zinc-800 overflow-hidden shadow-2xl">
                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]">
                            <tr>
                                <th class="p-4 font-bold text-white min-w-[200px]">منو / بخش پنل</th>
                                <th class="p-4 font-bold text-zinc-400">پنل مبدأ</th>
                                <th
                                    v-for="role in roles"
                                    :key="role.id"
                                    class="p-4 font-bold text-center min-w-[110px]"
                                    :class="{ 'text-lime-400': role.key === 'super_admin' }"
                                >
                                    <div class="flex flex-col items-center">
                                        <span>{{ role.title }}</span>
                                        <span class="text-[9px] font-mono text-zinc-500 font-normal">({{ role.key }})</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60">
                            <tr
                                v-for="menu in menus"
                                :key="menu.id"
                                class="hover:bg-zinc-800/30 transition-colors"
                            >
                                <td class="p-4">
                                    <div class="flex items-center gap-2.5">
                                        <DynamicIcon :name="menu.icon" class="w-4 h-4 text-lime-400" />
                                        <div>
                                            <div class="font-bold text-white">{{ menu.title }}</div>
                                            <div class="text-[10px] text-zinc-500 font-mono" dir="ltr">{{ menu.route }}</div>
                                        </div>
                                    </div>
                                </td>

                                <td class="p-4 text-zinc-400 text-[11px]">
                                    <span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800">
                                        {{ menu.panel_role_key }}
                                    </span>
                                </td>

                                <td
                                    v-for="role in roles"
                                    :key="role.id"
                                    class="p-4 text-center"
                                >
                                    <button
                                        v-if="role.key === 'super_admin'"
                                        disabled
                                        type="button"
                                        class="w-6 h-6 rounded-lg bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center opacity-80 cursor-not-allowed"
                                        title="دسترسی همیشگی مدیر ارشد"
                                    >
                                        <Lock class="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                        v-else
                                        @click="togglePermission(role.id, menu.id, role.key)"
                                        type="button"
                                        class="w-6 h-6 rounded-lg mx-auto flex items-center justify-center transition-all cursor-pointer border"
                                        :class="hasPermission(role.id, menu.id, role.key) ? 'bg-lime-400 text-black border-lime-400 font-bold' : 'bg-zinc-950 border-zinc-800 text-transparent hover:border-zinc-700'"
                                    >
                                        <Check class="w-3.5 h-3.5" />
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
