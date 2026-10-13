<script setup>
import { ref } from 'vue';
import { usePage, router } from '@inertiajs/vue3';
import { Shield, ChevronDown, Check } from '@lucide/vue';

const page = usePage();
const isOpen = ref(false);

const roles = page.props.auth?.roles || [];
const activeRoleKey = page.props.auth?.active_role;

const activeRole = roles.find((r) => r.key === activeRoleKey) || {
    key: activeRoleKey,
    title: activeRoleKey === 'super_admin' ? 'مدیر ارشد' : 'کاربر',
};

function switchRole(roleKey) {
    isOpen.value = false;
    if (roleKey === activeRoleKey) return;

    router.post('/auth/switch-role', { role: roleKey }, {
        preserveScroll: false,
    });
}
</script>

<template>
    <div v-if="roles.length > 1" class="relative">
        <button
            @click="isOpen = !isOpen"
            type="button"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs text-slate-700 hover:text-slate-900 transition-all cursor-pointer shadow-xs"
        >
            <Shield class="w-3.5 h-3.5 text-lime-600" />
            <span class="font-medium text-slate-500">نقش فعلی:</span>
            <span class="text-lime-700 font-bold">{{ activeRole.title }}</span>
            <ChevronDown class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
        </button>

        <div
            v-if="isOpen"
            @click.outside="isOpen = false"
            class="absolute left-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 p-1.5 animate-in fade-in zoom-in-95 duration-150"
        >
            <div class="px-3 py-2 text-[11px] font-semibold text-slate-500 border-b border-slate-100 mb-1">
                تغییر پنل فعال
            </div>
            <button
                v-for="role in roles"
                :key="role.key"
                @click="switchRole(role.key)"
                type="button"
                class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-right"
                :class="role.key === activeRoleKey ? 'bg-lime-50 text-lime-800 font-bold' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'"
            >
                <div class="flex flex-col">
                    <span>{{ role.title }}</span>
                    <span class="text-[10px] text-slate-400 font-normal">{{ role.description }}</span>
                </div>
                <Check v-if="role.key === activeRoleKey" class="w-4 h-4 text-lime-600 shrink-0" />
            </button>
        </div>
    </div>
    <div v-else-if="activeRoleKey" class="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700">
        <Shield class="w-3 h-3 text-lime-600" />
        <span>{{ activeRole.title }}</span>
    </div>
</template>
