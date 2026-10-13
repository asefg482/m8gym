<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import {
    Dumbbell,
    Coffee,
    ShoppingBag,
    Scissors,
    Sparkles,
    User,
    Menu as MenuIcon,
    X,
    PhoneCall,
    LogOut,
    LayoutDashboard
} from '@lucide/vue';
import RoleSwitcher from './RoleSwitcher.vue';

const page = usePage();
const isMobileMenuOpen = ref(false);

const auth = page.props.auth;
const gym = page.props.gym || {};

const navLinks = [
    { title: 'صفحه اصلی', href: '/', icon: Dumbbell },
    { title: 'کافه و رستوران', href: '/cafe', icon: Coffee },
    { title: 'فروشگاه M8', href: '/shop', icon: ShoppingBag },
    { title: 'ماساژ و اسپا', href: '/massage', icon: Sparkles },
    { title: 'آرایشگاه VIP', href: '/hairdresser', icon: Scissors },
];

function getPanelUrl() {
    if (!auth || !auth.user) return '/auth/login';
    const role = auth.active_role || 'member';
    return `/panel/${role}/dashboard`;
}

watch(isMobileMenuOpen, (isOpen) => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
});

onUnmounted(() => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
    }
});
</script>

<template>
    <header class="sticky top-0 z-40 w-full backdrop-blur-xl bg-zinc-950/85 border-b border-zinc-800/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Brand Logo -->
                <Link href="/" class="flex items-center gap-3 group">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-lg shadow-lime-500/20 group-hover:shadow-lime-500/40 transition-all duration-300">
                        <div class="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                            <span class="text-xl font-black tracking-wider text-lime-400 font-sans">M8</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-lg font-black tracking-tight text-white group-hover:text-lime-400 transition-colors">
                            FIT CLUB
                        </span>
                        <span class="text-[10px] text-zinc-400 tracking-wider font-medium">ساری • ۲۵۰۰ متر فضا</span>
                    </div>
                </Link>

                <!-- Desktop Navigation Links -->
                <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
                    <Link
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        class="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                        :class="{ 'text-lime-400 bg-lime-400/10 font-bold': $page.url === link.href }"
                    >
                        <component :is="link.icon" class="w-4 h-4 text-zinc-400" :class="{ 'text-lime-400': $page.url === link.href }" />
                        <span>{{ link.title }}</span>
                    </Link>
                </nav>

                <!-- Actions: Auth / Panel / Call -->
                <div class="flex items-center gap-3">
                    <a
                        :href="'tel:' + (gym.phone || '01133221100')"
                        class="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                    >
                        <PhoneCall class="w-3.5 h-3.5 text-lime-400" />
                        <span>{{ gym.phone || 'تماس با باشگاه' }}</span>
                    </a>

                    <div v-if="auth && auth.user" class="flex items-center gap-2">
                        <RoleSwitcher />
                        <Link
                            :href="getPanelUrl()"
                            class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-lime-400 text-black hover:bg-lime-300 transition-all shadow-md shadow-lime-400/20"
                        >
                            <LayoutDashboard class="w-4 h-4" />
                            <span class="hidden sm:inline">داشبورد</span>
                            <span class="sm:hidden">{{ auth.user.first_name || 'پنل' }}</span>
                        </Link>
                    </div>

                    <div v-else>
                        <Link
                            href="/auth/login"
                            class="flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold bg-lime-400 text-black hover:bg-lime-300 transition-all shadow-md shadow-lime-400/20"
                        >
                            <User class="w-4 h-4" />
                            <span>ورود / ثبت‌نام</span>
                        </Link>
                    </div>

                    <!-- Mobile Hamburger Menu Button -->
                    <button
                        @click="isMobileMenuOpen = !isMobileMenuOpen"
                        type="button"
                        class="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
                        aria-label="منوی موبایل"
                        :aria-expanded="isMobileMenuOpen"
                    >
                        <component :is="isMobileMenuOpen ? X : MenuIcon" class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Backdrop & Right Slide-over Menu -->
        <Transition
            enter-active-class="transition-opacity duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isMobileMenuOpen"
                @click="isMobileMenuOpen = false"
                class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
            />
        </Transition>

        <Transition
            enter-active-class="transition-transform duration-300 ease-out"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition-transform duration-200 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
            <aside
                v-if="isMobileMenuOpen"
                class="fixed inset-y-0 right-0 z-[70] w-72 sm:w-80 max-w-[85vw] bg-zinc-950 border-l border-zinc-800/90 shadow-2xl flex flex-col lg:hidden"
            >
                <!-- Drawer Header -->
                <div class="p-4 border-b border-zinc-800/80 flex items-center justify-between shrink-0">
                    <Link href="/" @click="isMobileMenuOpen = false" class="flex items-center gap-2.5">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-md shadow-lime-500/20">
                            <div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                                <span class="text-base font-black text-lime-400 font-sans">M8</span>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-black text-white">M8 FIT CLUB</span>
                            <span class="text-[10px] text-zinc-400">ساری • ۲۵۰۰ متر فضا</span>
                        </div>
                    </Link>
                    <button
                        @click="isMobileMenuOpen = false"
                        type="button"
                        class="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
                        aria-label="بستن منو"
                    >
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <!-- Drawer Navigation Items (Scrollable) -->
                <nav class="flex-1 overflow-y-auto overscroll-contain p-4 space-y-1.5">
                    <div class="px-2 py-1 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                        بخش‌های وب‌سایت
                    </div>

                    <Link
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        @click="isMobileMenuOpen = false"
                        class="flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all"
                        :class="[
                            $page.url === link.href
                                ? 'text-lime-400 bg-lime-400/10 font-bold border-r-2 border-lime-400'
                                : 'text-zinc-300 hover:text-white hover:bg-zinc-900/80'
                        ]"
                    >
                        <component
                            :is="link.icon"
                            class="w-5 h-5 shrink-0"
                            :class="$page.url === link.href ? 'text-lime-400' : 'text-zinc-400'"
                        />
                        <span>{{ link.title }}</span>
                    </Link>

                    <!-- Quick Contact in Menu -->
                    <div class="pt-4 mt-3 border-t border-zinc-900">
                        <a
                            :href="'tel:' + (gym.phone || '01133221100')"
                            class="flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900/60 border border-zinc-800/80 hover:border-lime-400/40 hover:text-white transition-colors"
                        >
                            <PhoneCall class="w-4 h-4 text-lime-400 shrink-0" />
                            <div class="flex flex-col">
                                <span class="text-[10px] text-zinc-400">تماس تلفنی با باشگاه:</span>
                                <span class="font-mono text-zinc-200">{{ gym.phone || '۰۱۱-۳۳۲۲۱۱۰۰' }}</span>
                            </div>
                        </a>
                    </div>
                </nav>

                <!-- Drawer Footer: User Profile / Login -->
                <div class="p-4 border-t border-zinc-900 bg-zinc-950 shrink-0 space-y-3">
                    <div v-if="auth && auth.user" class="space-y-3">
                        <div class="flex items-center justify-between px-1">
                            <div class="flex items-center gap-2.5">
                                <div class="w-8 h-8 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center font-bold text-xs">
                                    {{ auth.user.first_name ? auth.user.first_name[0] : 'U' }}
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-bold text-white">{{ auth.user.first_name }} {{ auth.user.last_name }}</span>
                                    <span class="text-[10px] text-zinc-400 font-mono">{{ auth.user.mobile }}</span>
                                </div>
                            </div>
                            <RoleSwitcher />
                        </div>

                        <div class="flex items-center gap-2 pt-1">
                            <Link
                                :href="getPanelUrl()"
                                @click="isMobileMenuOpen = false"
                                class="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold bg-lime-400 text-black hover:bg-lime-300 transition-all shadow-md shadow-lime-400/20"
                            >
                                <LayoutDashboard class="w-4 h-4" />
                                <span>داشبورد کاربری</span>
                            </Link>

                            <Link
                                href="/auth/logout"
                                method="post"
                                as="button"
                                @click="isMobileMenuOpen = false"
                                class="p-2.5 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
                                title="خروج از حساب"
                            >
                                <LogOut class="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div v-else>
                        <Link
                            href="/auth/login"
                            @click="isMobileMenuOpen = false"
                            class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-lime-400 text-black hover:bg-lime-300 transition-all shadow-md shadow-lime-400/20"
                        >
                            <User class="w-4 h-4" />
                            <span>ورود / عضویت با شماره موبایل</span>
                        </Link>
                    </div>
                </div>
            </aside>
        </Transition>
    </header>
</template>
