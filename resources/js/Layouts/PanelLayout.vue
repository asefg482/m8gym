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
    LayoutDashboard,
    User as UserIcon,
    Settings,
    CreditCard,
    ExternalLink,
    Sparkles,
    Shield
} from '@lucide/vue';
import DynamicIcon from '@/Components/DynamicIcon.vue';
import RoleSwitcher from '@/Components/RoleSwitcher.vue';
import FlashMessage from '@/Components/FlashMessage.vue';

const page = usePage();
const isSidebarOpen = ref(false);
const isUserDropdownOpen = ref(false);

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

const roleBadgeLabels = {
    super_admin: 'ادمین کل',
    manager: 'مدیر سایت',
    trainer: 'مربی رسمی',
    shop: 'فروشگاه',
    buffet: 'بوفه سلامت',
    service: 'خدمات VIP',
    member: 'عضو باشگاه',
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
    <div class="panel-light h-screen h-dvh bg-[#f5f6fa] text-slate-800 flex flex-col overflow-hidden selection:bg-lime-400 selection:text-black">
        <FlashMessage />

        <!-- Dashlite Topbar (nk-header) -->
        <header class="shrink-0 z-30 h-16 sm:h-17 bg-white border-b border-slate-200/90 px-4 sm:px-6 flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <!-- Start Side: Mobile Toggle & Context -->
            <div class="flex items-center gap-3 sm:gap-4">
                <button
                    @click="isSidebarOpen = !isSidebarOpen"
                    type="button"
                    class="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
                    aria-label="باز کردن منو"
                >
                    <MenuIcon class="w-5 h-5" />
                </button>

                <!-- Context Breadcrumb / Greeting -->
                <div class="hidden sm:flex flex-col text-right">
                    <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                        <span>باشگاه ورزشی و تندرستی M8</span>
                    </span>
                    <span class="text-[11px] text-slate-500 mt-0.5">
                        خوش آمدید، {{ user.name || 'ورزشکار عزیز' }} 👋
                    </span>
                </div>
            </div>

            <!-- End Side: Website Link, Role Switcher, VIP Pill, User Profile Dropdown -->
            <div class="flex items-center gap-2.5 sm:gap-3.5">
                <!-- Role Switcher -->
                <RoleSwitcher />

                <!-- VIP Badge -->
                <div v-if="user.is_vip" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold shadow-xs">
                    <Crown class="w-3.5 h-3.5 text-amber-500" />
                    <span>عضو ویژه VIP</span>
                </div>

                <!-- Main Website Link -->
                <Link
                    href="/"
                    class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                    <Home class="w-3.5 h-3.5 text-lime-600" />
                    <span>سایت اصلی</span>
                </Link>

                <!-- Dashlite User Profile Dropdown Widget -->
                <div class="relative">
                    <button
                        @click="isUserDropdownOpen = !isUserDropdownOpen"
                        type="button"
                        class="flex items-center gap-2.5 p-1 sm:px-2.5 sm:py-1.5 rounded-xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                    >
                        <!-- Avatar with Online Dot -->
                        <div class="relative">
                            <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-xs">
                                <div class="w-full h-full bg-white rounded-full flex items-center justify-center text-xs font-bold text-lime-700 font-sans">
                                    {{ user.first_name ? user.first_name.charAt(0) : 'U' }}
                                </div>
                            </div>
                            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                        </div>

                        <div class="hidden sm:flex flex-col text-right">
                            <span class="text-xs font-bold text-slate-900 leading-tight">{{ user.name }}</span>
                            <span class="text-[10px] text-slate-500 font-medium">
                                {{ roleBadgeLabels[activeRole] || 'عضو باشگاه' }}
                            </span>
                        </div>

                        <ChevronDown class="w-3.5 h-3.5 text-slate-400 hidden sm:block transition-transform duration-200" :class="{ 'rotate-180': isUserDropdownOpen }" />
                    </button>

                    <!-- Dropdown Menu -->
                    <div
                        v-if="isUserDropdownOpen"
                        @click.outside="isUserDropdownOpen = false"
                        class="absolute left-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150"
                    >
                        <!-- Dropdown User Info Header -->
                        <div class="p-3 pb-2.5 border-b border-slate-100 mb-1">
                            <div class="flex items-center gap-2.5">
                                <div class="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-lime-700">
                                    {{ user.first_name ? user.first_name.charAt(0) : 'U' }}
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-slate-900">{{ user.name }}</span>
                                    <span class="text-[10px] text-slate-500 font-mono" dir="ltr">{{ user.mobile }}</span>
                                </div>
                            </div>
                            <div class="mt-2.5 flex items-center justify-between text-[10px]">
                                <span class="px-2 py-0.5 rounded-md bg-lime-50 text-lime-800 font-bold border border-lime-200">
                                    نقش فعال: {{ roleBadgeLabels[activeRole] || activeRole }}
                                </span>
                                <span v-if="user.is_vip" class="text-amber-600 font-bold flex items-center gap-1">
                                    <Crown class="w-3 h-3 text-amber-500" /> VIP
                                </span>
                            </div>
                        </div>

                        <!-- Menu Items -->
                        <Link
                            :href="`/panel/${activeRole}/dashboard`"
                            @click="isUserDropdownOpen = false"
                            class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                            <LayoutDashboard class="w-4 h-4 text-lime-600" />
                            <span>داشبورد کاربری</span>
                        </Link>

                        <Link
                            v-if="activeRole === 'member'"
                            href="/panel/member/membership"
                            @click="isUserDropdownOpen = false"
                            class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                            <CreditCard class="w-4 h-4 text-emerald-600" />
                            <span>اشتراک و تمدید دوره</span>
                        </Link>

                        <Link
                            href="/"
                            class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                            <ExternalLink class="w-4 h-4 text-slate-400" />
                            <span>مشاهده وب‌سایت اصلی</span>
                        </Link>

                        <div class="pt-1 border-t border-slate-100 mt-1">
                            <Link
                                href="/auth/logout"
                                method="post"
                                as="button"
                                class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-right"
                            >
                                <LogOut class="w-4 h-4" />
                                <span>خروج از حساب کاربری</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="flex-1 min-h-0 flex overflow-hidden">
            <!-- Dashlite Sidebar (nk-sidebar) -->
            <aside
                :class="[
                    'fixed inset-y-0 right-0 z-40 w-68 sm:w-72 bg-white border-l border-slate-200 flex flex-col transition-transform duration-200 lg:static lg:translate-x-0 lg:h-full lg:shrink-0 shadow-sm',
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
                ]"
            >
                <!-- Sidebar Brand Header -->
                <div class="h-16 sm:h-17 px-5 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
                    <Link href="/" class="flex items-center gap-2.5 group">
                        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-xs group-hover:shadow-sm transition-all">
                            <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                                <span class="text-sm font-black text-lime-400 font-sans">M8</span>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-black text-slate-900 group-hover:text-lime-700 transition-colors tracking-tight">M8 FIT CLUB</span>
                            <span class="text-[9px] text-slate-400 font-mono">PANEL v2.0</span>
                        </div>
                    </Link>

                    <button
                        @click="isSidebarOpen = false"
                        type="button"
                        class="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                        aria-label="بستن سایدبار"
                    >
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <!-- Sidebar User Mini Profile Widget (Dashlite style) -->
                <div class="p-3.5 mx-3 my-3 rounded-2xl bg-slate-50 border border-slate-200/80 shrink-0">
                    <div class="flex items-center gap-3">
                        <div class="relative">
                            <div class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-lime-700 shadow-xs">
                                {{ user.first_name ? user.first_name.charAt(0) : 'U' }}
                            </div>
                            <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                        </div>
                        <div class="flex flex-col min-w-0 flex-1">
                            <span class="text-xs font-bold text-slate-900 truncate">{{ user.name }}</span>
                            <div class="flex items-center gap-1.5 mt-0.5">
                                <span class="text-[10px] text-slate-500 truncate">{{ roleBadgeLabels[activeRole] || 'کاربر باشگاه' }}</span>
                                <span v-if="user.is_vip" class="text-[9px] px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-200 font-bold shrink-0">VIP</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation items dynamically built from DB menus (scrolls within itself) -->
                <nav class="flex-1 min-h-0 overflow-y-auto overscroll-contain px-3 py-2 space-y-5">
                    <div v-for="(groupMenus, roleKey) in groupedMenus" :key="roleKey" class="space-y-1">
                        <!-- Dashlite Menu Heading (nk-menu-heading) -->
                        <div class="px-3 pt-2 pb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                            <div class="flex items-center gap-1.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                                <span>{{ roleLabels[roleKey] || roleKey }}</span>
                            </div>
                            <span class="text-[10px] text-slate-400 font-mono font-normal">{{ groupMenus.length }} منو</span>
                        </div>

                        <!-- Menu Items -->
                        <Link
                            v-for="menu in groupMenus"
                            :key="menu.id"
                            :href="menu.route"
                            @click="isSidebarOpen = false"
                            class="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all"
                            :class="[
                                isCurrentRoute(menu.route)
                                    ? 'bg-lime-50 text-lime-900 font-bold border-r-3 border-lime-500 shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                            ]"
                        >
                            <!-- Dedicated Icon Container -->
                            <div
                                class="w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0"
                                :class="[
                                    isCurrentRoute(menu.route)
                                        ? 'bg-lime-100 text-lime-800'
                                        : 'bg-slate-100 text-slate-500 group-hover:text-slate-800 group-hover:bg-slate-200/80'
                                ]"
                            >
                                <DynamicIcon :name="menu.icon" class="w-3.5 h-3.5" />
                            </div>

                            <span class="truncate">{{ menu.title }}</span>
                        </Link>
                    </div>

                    <div v-if="menus.length === 0" class="p-6 text-center text-xs text-slate-400">
                        منویی برای این نقش تعریف نشده است.
                    </div>
                </nav>

                <!-- Sidebar Footer Status (Dashlite Style) -->
                <div class="p-3.5 border-t border-slate-200 shrink-0 mt-auto bg-slate-50/70 flex items-center justify-between text-[11px]">
                    <div class="flex items-center gap-2 text-slate-500">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-xs shadow-emerald-500/50"></span>
                        <span>سرور فعال</span>
                    </div>

                    <Link
                        href="/auth/logout"
                        method="post"
                        as="button"
                        class="text-slate-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                        title="خروج سریع"
                    >
                        <LogOut class="w-3.5 h-3.5" />
                    </Link>
                </div>
            </aside>

            <!-- Backdrop for mobile sidebar -->
            <div
                v-if="isSidebarOpen"
                @click="isSidebarOpen = false"
                class="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 lg:hidden"
            />

            <!-- Dashlite Main Content Area (nk-content) -->
            <main class="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 lg:p-8 bg-[#f5f6fa]">
                <slot />
            </main>
        </div>
    </div>
</template>
