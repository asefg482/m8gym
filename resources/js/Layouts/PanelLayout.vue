<script setup>
import { ref, computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import {
    Menu as MenuIcon,
    X,
    LogOut,
    Home,
    Crown,
    Bell,
    ChevronDown,
    LayoutDashboard
} from '@lucide/vue';
import DynamicIcon from '@/Components/DynamicIcon.vue';
import RoleSwitcher from '@/Components/RoleSwitcher.vue';
import FlashMessage from '@/Components/FlashMessage.vue';

const page = usePage();
const isSidebarOpen = ref(false);

const auth = computed(() => page.props.auth || {});
const user = computed(() => auth.value.user || {});
const activeRole = computed(() => auth.value.active_role || 'member');
const menus = computed(() => auth.value.menus || []);

// Role labels for grouping in super_admin / manager
const roleLabels = {
    super_admin: 'مدیریت کل و ادمین',
    manager: 'مدیریت وبسایت و محتوا',
    trainer: 'پنل مربیان',
    shop: 'فروشگاه لوازم و مکمل',
    buffet: 'بوفه و کافه سلامت',
    service: 'خدمات، ماساژ و آرایشگاه',
    member: 'پنل ورزشکاران و اعضا',
};

// Group menus if user is super_admin or manager
const groupedMenus = computed(() => {
    if (activeRole.value !== 'super_admin' && activeRole.value !== 'manager') {
        return { [activeRole.value]: menus.value };
    }

    const groups = {};
    for (const menu of menus.value) {
        const groupKey = menu.panel_role_key || 'other';
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(menu);
    }
    return groups;
});

function isCurrentRoute(routePath) {
    if (!routePath) return false;
    return page.url === routePath || page.url.startsWith(routePath + '/');
}
</script>

<template>
    <div class="h-screen h-dvh bg-zinc-950 text-zinc-100 flex flex-col overflow-hidden selection:bg-lime-400 selection:text-black">
        <FlashMessage />

        <!-- Topbar -->
        <header class="shrink-0 z-30 h-16 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 px-4 sm:px-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <button
                    @click="isSidebarOpen = !isSidebarOpen"
                    class="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800"
                >
                    <MenuIcon class="w-5 h-5" />
                </button>

                <Link href="/" class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5">
                        <div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                            <span class="text-sm font-black text-lime-400 font-sans">M8</span>
                        </div>
                    </div>
                    <span class="text-sm font-black hidden sm:inline text-white">M8 FIT CLUB</span>
                </Link>
            </div>

            <!-- Topbar Center / Right: RoleSwitcher, VIP badge, User profile, Logout -->
            <div class="flex items-center gap-2.5 sm:gap-4">
                <RoleSwitcher />

                <div v-if="user.is_vip" class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold">
                    <Crown class="w-3.5 h-3.5" />
                    <span>عضو طلایی VIP</span>
                </div>

                <Link
                    href="/"
                    class="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800/60"
                >
                    <Home class="w-3.5 h-3.5" />
                    <span>سایت اصلی</span>
                </Link>

                <!-- User Info -->
                <div class="flex items-center gap-2 border-r border-zinc-800 pr-2.5 sm:pr-4">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-xs font-bold text-lime-400 border border-zinc-700">
                        {{ user.first_name ? user.first_name.charAt(0) : 'M' }}
                    </div>
                    <div class="hidden sm:flex flex-col text-right">
                        <span class="text-xs font-bold text-white">{{ user.name }}</span>
                        <span class="text-[10px] text-zinc-400">{{ user.mobile }}</span>
                    </div>
                </div>

                <!-- Logout Button -->
                <Link
                    href="/auth/logout"
                    method="post"
                    as="button"
                    class="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-zinc-900 border border-zinc-800/60 transition-colors cursor-pointer"
                    title="خروج از حساب"
                >
                    <LogOut class="w-4 h-4" />
                </Link>
            </div>
        </header>

        <div class="flex-1 min-h-0 flex overflow-hidden">
            <!-- Desktop / Mobile Sidebar -->
            <aside
                :class="[
                    'fixed inset-y-0 right-0 z-40 w-64 bg-zinc-950 border-l border-zinc-800/80 flex flex-col transition-transform duration-200 lg:static lg:translate-x-0 lg:h-full lg:shrink-0',
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
                ]"
            >
                <!-- Mobile Sidebar Close -->
                <div class="lg:hidden flex items-center justify-between p-4 pb-3 border-b border-zinc-900 shrink-0">
                    <span class="text-xs font-bold text-zinc-400">منوی ناوبری پنل</span>
                    <button @click="isSidebarOpen = false" class="p-1 text-zinc-400 hover:text-white">
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <!-- Navigation items dynamically built from DB menus (scrolls within itself) -->
                <nav class="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-6">
                    <div v-for="(groupMenus, roleKey) in groupedMenus" :key="roleKey" class="space-y-1.5">
                        <div v-if="activeRole === 'super_admin' || activeRole === 'manager'" class="px-3 py-1 text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                            <span>{{ roleLabels[roleKey] || roleKey }}</span>
                        </div>

                        <Link
                            v-for="menu in groupMenus"
                            :key="menu.id"
                            :href="menu.route"
                            @click="isSidebarOpen = false"
                            class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors"
                            :class="isCurrentRoute(menu.route) ? 'bg-lime-400/10 text-lime-400 font-bold border border-lime-400/20' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'"
                        >
                            <DynamicIcon :name="menu.icon" class="w-4 h-4 shrink-0" :class="{ 'text-lime-400': isCurrentRoute(menu.route) }" />
                            <span>{{ menu.title }}</span>
                        </Link>
                    </div>

                    <div v-if="menus.length === 0" class="p-4 text-center text-xs text-zinc-500">
                        منویی برای این نقش تعریف نشده است.
                    </div>
                </nav>

                <!-- Sidebar Footer Status -->
                <div class="p-4 border-t border-zinc-900/80 shrink-0 mt-auto text-[11px] text-zinc-400 flex items-center justify-between">
                    <span>M8 Club v2.0</span>
                    <span class="text-lime-400 font-mono">آنلاین</span>
                </div>
            </aside>

            <!-- Backdrop for mobile sidebar -->
            <div
                v-if="isSidebarOpen"
                @click="isSidebarOpen = false"
                class="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
            />

            <!-- Main Content Area -->
            <main class="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 lg:p-8 bg-zinc-950">
                <slot />
            </main>
        </div>
    </div>
</template>
