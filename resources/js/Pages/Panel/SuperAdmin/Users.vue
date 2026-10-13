<script setup>
import { ref } from 'vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    Users, 
    UserPlus, 
    Search, 
    Shield, 
    Crown, 
    Edit3, 
    X, 
    RefreshCw, 
    CheckCircle2, 
    AlertCircle,
    ChevronLeft,
    SlidersHorizontal,
    UserCheck,
    Phone,
    Fingerprint
} from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    users: Object,
    roles: Array,
    filters: Object,
});

const search = ref(props.filters?.search || '');
const roleFilter = ref(props.filters?.role || '');
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

function resetFilters() {
    search.value = '';
    roleFilter.value = '';
    handleSearch();
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

function getInitials(user) {
    if (user.first_name && user.last_name) {
        return `${user.first_name.charAt(0)} ${user.last_name.charAt(0)}`;
    }
    if (user.first_name) return user.first_name.charAt(0);
    return user.mobile ? user.mobile.slice(-2) : 'M8';
}
</script>

<template>
    <PanelLayout>
        <Head title="مدیریت کاربران و نقش‌ها - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Users class="w-4 h-4" />
                        <span>سامانه اعضا و مجوزهای دسترسی</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">مدیریت کاربران و تخصیص نقش‌ها</h1>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده پایگاه داده اعضا، ثبت کاربر جدید، انتساب چندگانه نقش‌ها و نظارت بر اشتراک‌ها</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="openCreate"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <UserPlus class="w-4 h-4 stroke-[2.5]" />
                        <span>ثبت کاربر جدید</span>
                    </button>
                </div>
            </div>

            <!-- nk-card / Filter Bar -->
            <div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg backdrop-blur-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                <div class="flex flex-1 flex-col sm:flex-row gap-3 items-center">
                    <div class="relative w-full sm:max-w-md">
                        <input
                            v-model="search"
                            @keyup.enter="handleSearch"
                            type="text"
                            placeholder="جستجو با شماره موبایل، نام یا کد ملی..."
                            class="w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/40 transition-all"
                        />
                        <button @click="handleSearch" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors">
                            <Search class="w-4 h-4" />
                        </button>
                    </div>

                    <div class="w-full sm:w-56">
                        <select
                            v-model="roleFilter"
                            @change="handleSearch"
                            class="w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl px-3 text-xs text-zinc-200 focus:outline-none focus:border-lime-400"
                        >
                            <option value="">همه نقش‌های سازمانی</option>
                            <option v-for="r in roles" :key="r.id" :value="r.key">{{ r.title }}</option>
                        </select>
                    </div>

                    <button
                        v-if="search || roleFilter"
                        @click="resetFilters"
                        class="text-xs text-zinc-400 hover:text-white underline cursor-pointer shrink-0"
                    >
                        پاکسازی فیلتر
                    </button>
                </div>

                <div class="text-[11px] text-zinc-400 flex items-center gap-1.5 self-end md:self-center">
                    <span class="w-2 h-2 rounded-full bg-lime-400"></span>
                    <span>تعداد در صفحه: <b class="font-mono text-white">{{ users.data?.length || 0 }}</b> از <b class="font-mono text-lime-400">{{ users.total || 0 }}</b></span>
                </div>
            </div>

            <!-- nk-card / Users Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/80 border-b border-zinc-800/80 text-zinc-400 uppercase text-[11px] tracking-wider">
                            <tr>
                                <th class="p-4 font-bold text-white">کاربر</th>
                                <th class="p-4 font-bold">نقش‌های منتسب</th>
                                <th class="p-4 font-bold">سطح عضویت</th>
                                <th class="p-4 font-bold">وضعیت اشتراک</th>
                                <th class="p-4 font-bold">وضعیت حساب</th>
                                <th class="p-4 font-bold text-center">عملیات مدیریت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="u in users.data" :key="u.id" class="hover:bg-zinc-800/30 transition-colors group">
                                <td class="p-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 group-hover:border-lime-400/40 transition-colors shrink-0">
                                            {{ getInitials(u) }}
                                        </div>
                                        <div>
                                            <div class="font-bold text-white text-xs sm:text-sm flex items-center gap-2">
                                                <span>{{ u.full_name || 'بدون نام' }}</span>
                                                <span v-if="u.gender === 'female'" class="text-[10px] text-pink-400">بانوان</span>
                                            </div>
                                            <div class="text-[11px] font-mono text-zinc-400 flex items-center gap-2 mt-0.5" dir="ltr">
                                                <Phone class="w-3 h-3 text-zinc-500 inline" />
                                                <span>{{ u.mobile }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex flex-wrap gap-1.5 max-w-xs">
                                        <span
                                            v-for="r in u.roles"
                                            :key="r.id"
                                            class="px-2 py-0.5 rounded-lg text-[10px] font-bold border transition-colors"
                                            :class="r.key === 'super_admin' ? 'bg-lime-400/10 text-lime-400 border-lime-400/30' : 'bg-zinc-950 text-zinc-300 border-zinc-800'"
                                        >
                                            {{ r.title }}
                                        </span>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <span v-if="u.member_profile?.level === 'vip'" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/30">
                                        <Crown class="w-3 h-3" />
                                        VIP طلایی
                                    </span>
                                    <span v-else class="text-zinc-500 text-[11px]">عادی</span>
                                </td>
                                <td class="p-4">
                                    <div v-if="u.active_membership">
                                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20">
                                            <CheckCircle2 class="w-3 h-3" />
                                            {{ u.active_membership.plan?.title || 'اشتراک ورزشی' }}
                                        </span>
                                    </div>
                                    <span v-else class="text-zinc-500 text-[11px]">فاقد اشتراک معتبر</span>
                                </td>
                                <td class="p-4">
                                    <span
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
                                        :class="u.status === 'active' 
                                            ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' 
                                            : 'bg-rose-400/10 text-rose-400 border border-rose-400/20'"
                                    >
                                        <span class="w-1.5 h-1.5 rounded-full" :class="u.status === 'active' ? 'bg-emerald-400' : 'bg-rose-400'"></span>
                                        {{ u.status === 'active' ? 'فعال' : 'معلق / مسدود' }}
                                    </span>
                                </td>
                                <td class="p-4 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <Link
                                            :href="`/panel/super_admin/users/${u.id}`"
                                            class="px-2.5 py-1.5 rounded-xl bg-lime-400/10 hover:bg-lime-400/20 text-lime-400 text-xs font-bold transition-all flex items-center gap-1"
                                            title="مشاهده جزئیات پروفایل و دسترسی‌ها"
                                        >
                                            <span>پروفایل و دسترسی</span>
                                            <ChevronLeft class="w-3.5 h-3.5" />
                                        </Link>
                                        <button
                                            @click="openEdit(u)"
                                            class="px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1"
                                            title="ویرایش سریع اطلاعات"
                                        >
                                            <Edit3 class="w-3.5 h-3.5 text-zinc-400" />
                                            <span>ویرایش</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="!users.data || users.data.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    هیچ کاربری با مشخصات جستجویافته یافت نشد.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Dashlite Pagination -->
                <Pagination
                    :links="users.links"
                    :from="users.from"
                    :to="users.to"
                    :total="users.total"
                />
            </div>

            <!-- nk-modal / Create & Edit Modal -->
            <div v-if="isCreateModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <UserPlus class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">{{ editingUser ? 'ویرایش مشخصات و نقش‌های کاربر' : 'ثبت کاربر جدید در پایگاه باشگاه' }}</h3>
                        </div>
                        <button @click="isCreateModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitUser" class="space-y-4">
                        <div v-if="!editingUser">
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">شماره تلفن همراه (جهت ورود با OTP)</label>
                            <input 
                                v-model="form.mobile" 
                                type="tel" 
                                dir="ltr" 
                                placeholder="۰۹۱۲۳۴۵۶۷۸۹" 
                                class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30" 
                                required 
                            />
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1.5">نام</label>
                                <input v-model="form.first_name" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1.5">نام خانوادگی</label>
                                <input v-model="form.last_name" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1.5">کد ملی</label>
                                <input v-model="form.national_code" type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1.5">جنسیت</label>
                                <select v-model="form.gender" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400">
                                    <option value="male">آقایان</option>
                                    <option value="female">بانوان</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1.5">سطح عضویت</label>
                                <select v-model="form.level" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400">
                                    <option value="normal">عادی</option>
                                    <option value="vip">طلایی VIP (تخفیف ویژه باشگاه)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1.5">وضعیت حساب کاربری</label>
                                <select v-model="form.status" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400">
                                    <option value="active">فعال</option>
                                    <option value="suspended">معلق / غیرفعال</option>
                                </select>
                            </div>
                        </div>

                        <!-- Multi Role Assignment -->
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-2">نقش‌های سازمانی کاربر (انتخاب همزمان چند نقش):</label>
                            <div class="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 max-h-44 overflow-y-auto">
                                <label 
                                    v-for="r in roles" 
                                    :key="r.id" 
                                    class="flex items-center gap-2.5 p-2 rounded-xl border border-zinc-900 hover:border-zinc-800 cursor-pointer text-xs transition-colors"
                                    :class="form.role_ids.includes(r.id) ? 'bg-zinc-900 border-lime-400/40 text-white font-bold' : 'text-zinc-400'"
                                >
                                    <input 
                                        type="checkbox" 
                                        :value="r.id" 
                                        v-model="form.role_ids" 
                                        class="rounded border-zinc-700 bg-zinc-900 text-lime-400 focus:ring-0" 
                                    />
                                    <span>{{ r.title }}</span>
                                </label>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isCreateModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors">انصراف</button>
                            <button 
                                type="submit" 
                                :disabled="form.processing"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
                            >
                                <span v-if="form.processing">در حال ذخیره...</span>
                                <span v-else>ذخیره اطلاعات</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
