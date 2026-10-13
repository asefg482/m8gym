<script setup>
import { ref } from 'vue';
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

                    <!-- Mobile Menu Button -->
                    <button
                        @click="isMobileMenuOpen = !isMobileMenuOpen"
                        type="button"
                        class="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800"
                    >
                        <component :is="isMobileMenuOpen ? X : MenuIcon" class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Menu -->
        <div v-if="isMobileMenuOpen" class="lg:hidden border-b border-zinc-800 bg-zinc-950 px-4 py-4 space-y-2">
            <Link
                v-for="link in navLinks"
                :key="link.href"
                :href="link.href"
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900"
                :class="{ 'text-lime-400 bg-lime-400/10 font-bold': $page.url === link.href }"
            >
                <component :is="link.icon" class="w-4 h-4" />
                <span>{{ link.title }}</span>
            </Link>

            <div v-if="auth && auth.user" class="pt-3 border-t border-zinc-900 flex justify-between items-center">
                <Link
                    :href="getPanelUrl()"
                    @click="isMobileMenuOpen = false"
                    class="text-xs text-lime-400 font-bold flex items-center gap-1.5"
                >
                    <LayoutDashboard class="w-4 h-4" />
                    ورود به پنل کاربری
                </Link>
                <Link
                    href="/auth/logout"
                    method="post"
                    as="button"
                    class="text-xs text-red-400 flex items-center gap-1"
                >
                    <LogOut class="w-3.5 h-3.5" />
                    خروج
                </Link>
            </div>
        </div>
    </header>
</template>
