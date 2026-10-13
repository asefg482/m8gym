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
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs text-zinc-200 transition-all cursor-pointer shadow-sm"
        >
            <Shield class="w-3.5 h-3.5 text-lime-400" />
            <span class="font-medium">نقش فعلی:</span>
            <span class="text-lime-400 font-semibold">{{ activeRole.title }}</span>
            <ChevronDown class="w-3.5 h-3.5 text-zinc-400 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
        </button>

        <div
            v-if="isOpen"
            @click.outside="isOpen = false"
            class="absolute left-0 mt-2 w-56 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl z-50 p-1.5 animate-in fade-in zoom-in-95 duration-150"
        >
            <div class="px-3 py-2 text-[11px] font-semibold text-zinc-400 border-b border-zinc-800/80 mb-1">
                تغییر پنل فعال
            </div>
            <button
                v-for="role in roles"
                :key="role.key"
                @click="switchRole(role.key)"
                type="button"
                class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-right"
                :class="role.key === activeRoleKey ? 'bg-lime-400/10 text-lime-400 font-bold' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'"
            >
                <div class="flex flex-col">
                    <span>{{ role.title }}</span>
                    <span class="text-[10px] text-zinc-500 font-normal">{{ role.description }}</span>
                </div>
                <Check v-if="role.key === activeRoleKey" class="w-4 h-4 text-lime-400 shrink-0" />
            </button>
        </div>
    </div>
    <div v-else-if="activeRoleKey" class="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
        <Shield class="w-3 h-3 text-lime-400" />
        <span>{{ activeRole.title }}</span>
    </div>
</template>
