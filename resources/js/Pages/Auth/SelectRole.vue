<script setup>
import { Head, router } from '@inertiajs/vue3';
import {
    ShieldAlert,
    FileText,
    Dumbbell,
    ShoppingBag,
    Coffee,
    Scissors,
    User,
    ArrowLeft
} from '@lucide/vue';

const props = defineProps({
    roles: {
        type: Array,
        required: true,
    },
    activeRole: {
        type: String,
        default: null,
    },
});

const roleIcons = {
    super_admin: ShieldAlert,
    manager: FileText,
    trainer: Dumbbell,
    shop: ShoppingBag,
    buffet: Coffee,
    service: Scissors,
    member: User,
};

function selectRole(roleKey) {
    router.post('/auth/switch-role', { role: roleKey });
}
</script>

<template>
    <Head title="انتخاب نقش کاربری" />

    <div class="min-h-screen bg-zinc-950 flex flex-col justify-center items-center p-4 sm:p-6 selection:bg-lime-400 selection:text-black relative">
        <div class="w-full max-w-2xl bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
            <div class="text-center mb-8">
                <span class="inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold mb-3 border border-lime-400/20">
                    حساب چندنقشی (Multi-Role)
                </span>
                <h1 class="text-2xl font-black text-white">انتخاب پنل کاربری</h1>
                <p class="text-xs text-zinc-400 mt-2">
                    حساب شما دارای چند نقش فعال در سامانه M8 است. لطفاً پنلی را که می‌خواهید وارد شوید انتخاب کنید:
                </p>
            </div>

            <!-- Role Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                    v-for="role in roles"
                    :key="role.key"
                    @click="selectRole(role.key)"
                    type="button"
                    class="p-5 rounded-2xl bg-zinc-950/70 border text-right transition-all duration-200 cursor-pointer flex flex-col justify-between group hover:border-lime-400/70 hover:shadow-xl hover:shadow-lime-400/10"
                    :class="role.key === activeRole ? 'border-lime-400/80 bg-zinc-950/90 ring-1 ring-lime-400/50' : 'border-zinc-800'"
                >
                    <div class="flex items-start justify-between mb-3">
                        <div class="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lime-400 group-hover:scale-105 transition-transform">
                            <component :is="roleIcons[role.key] || User" class="w-6 h-6" />
                        </div>
                        <span v-if="role.key === activeRole" class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-lime-400/20 text-lime-400">
                            پیشنهاد قبلی
                        </span>
                    </div>

                    <div>
                        <h3 class="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">
                            {{ role.title }}
                        </h3>
                        <p class="text-xs text-zinc-400 mt-1 line-clamp-2">
                            {{ role.description }}
                        </p>
                    </div>

                    <div class="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400 group-hover:text-lime-400">
                        <span>ورود به این پنل</span>
                        <ArrowLeft class="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                </button>
            </div>

            <div class="mt-8 text-center text-xs text-zinc-500">
                شما می‌توانید در هر زمان از طریق منوی بالای پنل، نقش خود را بدون نیاز به ورود مجدد تعویض کنید.
            </div>
        </div>
    </div>
</template>
