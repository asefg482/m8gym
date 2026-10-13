<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Home, Coffee, ShoppingBag, Sparkles, User, LayoutDashboard } from '@lucide/vue';

const page = usePage();
const auth = computed(() => page.props.auth);

const profileHref = computed(() => {
    if (auth.value && auth.value.user) {
        const role = auth.value.active_role || 'member';
        return `/panel/${role}/dashboard`;
    }
    return '/auth/login';
});

const items = computed(() => [
    { title: 'خانه', href: '/', icon: Home, exact: true },
    { title: 'کافه', href: '/cafe', icon: Coffee },
    { title: 'فروشگاه', href: '/shop', icon: ShoppingBag },
    { title: 'خدمات', href: '/massage', icon: Sparkles },
    {
        title: auth.value?.user ? 'پروفایل' : 'ورود',
        href: profileHref.value,
        icon: auth.value?.user ? LayoutDashboard : User,
    },
]);

function isActive(item) {
    if (item.exact) {
        return page.url === '/';
    }
    return page.url.startsWith(item.href);
}
</script>

<template>
    <nav class="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/80 px-2 py-1.5 safe-bottom">
        <div class="flex items-center justify-around max-w-md mx-auto">
            <Link
                v-for="item in items"
                :key="item.href"
                :href="item.href"
                class="flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200"
                :class="isActive(item) ? 'text-lime-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'"
            >
                <div class="relative">
                    <component :is="item.icon" class="w-5 h-5 transition-transform" :class="{ 'scale-110': isActive(item) }" />
                    <span v-if="isActive(item)" class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime-400 shadow-sm shadow-lime-400" />
                </div>
                <span class="text-[10px] mt-1 tracking-tight">{{ item.title }}</span>
            </Link>
        </div>
    </nav>
</template>
