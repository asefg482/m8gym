<script setup>
import { ref } from 'vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Users, UserPlus, Search, Shield, Crown, Edit, X, RefreshCw } from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    users: Object,
    roles: Array,
    filters: Object,
});

const search = ref(props.filters.search || '');
const roleFilter = ref(props.filters.role || '');
const isCreateModalOpen = ref(false);
const editingUser = ref(null);

const form = useForm({
    mobile: '',
    first_name: '',
    last_name: '',
    national_code: '',
    gender: 'male',
    status: 'active',
    level: 'normal',
    role_ids: [],
});

function handleSearch() {
    router.get('/panel/super_admin/users', {
        search: search.value,
        role: roleFilter.value,
    }, { preserveState: true });
}

function openCreate() {
    editingUser.value = null;
    form.reset();
    form.role_ids = [props.roles.find(r => r.key === 'member')?.id].filter(Boolean);
    isCreateModalOpen.value = true;
}

function openEdit(user) {
    editingUser.value = user;
    form.mobile = user.mobile;
    form.first_name = user.first_name || '';
    form.last_name = user.last_name || '';
    form.national_code = user.national_code || '';
    form.gender = user.gender || 'male';
    form.status = user.status;
    form.level = user.member_profile?.level || 'normal';
    form.role_ids = user.roles.map(r => r.id);
    isCreateModalOpen.value = true;
}

function submitUser() {
    if (editingUser.value) {
        form.put(`/panel/super_admin/users/${editingUser.value.id}`, {
            onSuccess: () => isCreateModalOpen.value = false,
        });
    } else {
        form.post('/panel/super_admin/users', {
            onSuccess: () => isCreateModalOpen.value = false,
        });
    }
}
</script>

<template>
    <PanelLayout>
        <Head title="مدیریت کاربران و نقش‌ها" />

        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Users class="w-6 h-6 text-lime-400" />
                        <span>مدیریت کاربران و تخصیص نقش‌ها</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده، ثبت کاربر جدید، انتساب چند نقش و کنترل وضعیت حساب</p>
                </div>

                <button
                    @click="openCreate"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                    <UserPlus class="w-4 h-4" />
                    <span>ثبت کاربر جدید</span>
                </button>
            </div>

            <!-- Filters Bar -->
            <div class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-wrap gap-4 items-center">
                <div class="relative flex-1 min-w-[200px]">
                    <input
                        v-model="search"
                        @keyup.enter="handleSearch"
                        type="text"
                        placeholder="جستجو با شماره موبایل، نام یا کد ملی..."
                        class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 text-xs text-white focus:outline-none focus:border-lime-400"
                    />
                    <button @click="handleSearch" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white">
                        <Search class="w-3.5 h-3.5" />
                    </button>
                </div>

                <select
                    v-model="roleFilter"
                    @change="handleSearch"
                    class="h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none"
                >
                    <option value="">همه نقش‌ها</option>
                    <option v-for="r in roles" :key="r.id" :value="r.key">{{ r.title }}</option>
                </select>
            </div>

            <!-- Users Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]">
                            <tr>
                                <th class="p-4 font-bold text-white">نام و شماره موبایل</th>
                                <th class="p-4 font-bold">نقش‌های منتسب</th>
                                <th class="p-4 font-bold">سطح عضویت</th>
                                <th class="p-4 font-bold">وضعیت اشتراک</th>
                                <th class="p-4 font-bold">وضعیت حساب</th>
                                <th class="p-4 font-bold text-center">عملیات</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60">
                            <tr v-for="u in users.data" :key="u.id" class="hover:bg-zinc-800/30">
                                <td class="p-4">
                                    <div class="font-bold text-white">{{ u.full_name }}</div>
                                    <div class="text-[11px] font-mono text-zinc-400" dir="ltr">{{ u.mobile }}</div>
                                </td>
                                <td class="p-4">
                                    <div class="flex flex-wrap gap-1.5">
                                        <span
                                            v-for="r in u.roles"
                                            :key="r.id"
                                            class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300"
                                            :class="{ 'text-lime-400 border-lime-400/30': r.key === 'super_admin' }"
                                        >
                                            {{ r.title }}
                                        </span>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <span v-if="u.member_profile?.level === 'vip'" class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400">
                                        <Crown class="w-3.5 h-3.5" />
                                        VIP
                                    </span>
                                    <span v-else class="text-zinc-500 text-[11px]">عادی</span>
                                </td>
                                <td class="p-4">
                                    <span v-if="u.active_membership" class="text-lime-400 font-bold text-[11px]">
                                        {{ u.active_membership.plan?.title }} (فعال)
                                    </span>
                                    <span v-else class="text-zinc-500 text-[11px]">فاقد اشتراک</span>
                                </td>
                                <td class="p-4">
                                    <span
                                        class="px-2 py-0.5 rounded-full text-[10px] font-bold"
                                        :class="u.status === 'active' ? 'bg-lime-400/10 text-lime-400' : 'bg-red-400/10 text-red-400'"
                                    >
                                        {{ u.status === 'active' ? 'فعال' : 'معلق' }}
                                    </span>
                                </td>
                                <td class="p-4 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <Link
                                            :href="`/panel/super_admin/users/${u.id}`"
                                            class="px-2.5 py-1.5 rounded-xl bg-lime-400/10 hover:bg-lime-400/20 text-lime-400 text-xs font-semibold cursor-pointer transition-colors"
                                        >
                                            جزئیات و دسترسی‌ها
                                        </Link>
                                        <button
                                            @click="openEdit(u)"
                                            class="px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold cursor-pointer transition-colors"
                                        >
                                            ویرایش سریع
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isCreateModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">{{ editingUser ? 'ویرایش اطلاعات و نقش‌های کاربر' : 'ثبت کاربر جدید' }}</h3>
                        <button @click="isCreateModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitUser" class="space-y-4">
                        <div v-if="!editingUser">
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">شماره همراه</label>
                            <input v-model="form.mobile" type="tel" dir="ltr" placeholder="۰۹۱۲۳۴۵۶۷۸۹" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">نام</label>
                                <input v-model="form.first_name" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">نام خانوادگی</label>
                                <input v-model="form.last_name" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">سطح عضویت</label>
                                <select v-model="form.level" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                                    <option value="normal">عادی</option>
                                    <option value="vip">طلایی VIP (تخفیف ویژه)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">وضعیت حساب</label>
                                <select v-model="form.status" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                                    <option value="active">فعال</option>
                                    <option value="suspended">معلق / مسدود</option>
                                </select>
                            </div>
                        </div>

                        <!-- Multi Role Assignment -->
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-2">نقش‌های کاربر (قابلیت انتخاب چند نقش):</label>
                            <div class="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
                                <label v-for="r in roles" :key="r.id" class="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                                    <input type="checkbox" :value="r.id" v-model="form.role_ids" />
                                    <span>{{ r.title }}</span>
                                </label>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isCreateModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ذخیره اطلاعات</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
