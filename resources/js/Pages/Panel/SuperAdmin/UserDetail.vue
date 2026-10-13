<script setup>
import { ref, computed } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    User as UserIcon, 
    Shield, 
    Crown, 
    Calendar, 
    ArrowRight, 
    Clock, 
    CheckCircle2, 
    XCircle, 
    Activity, 
    Phone, 
    CreditCard, 
    Dumbbell,
    Sliders,
    Sparkles,
    IdCard,
    ChevronRight
} from '@lucide/vue';
import { formatJalaliDate, formatTomans } from '@/Utils/formatters';

const props = defineProps({
    viewUser: Object,
    menus: Array,
});

const isUpdating = ref(null);

// Map existing user overrides by menu_id
const userOverridesMap = computed(() => {
    const map = {};
    if (props.viewUser.menu_overrides) {
        props.viewUser.menu_overrides.forEach(o => {
            map[o.menu_id] = o.effect;
        });
    }
    return map;
});

// Calculate effective permission
function getEffectiveStatus(menu) {
    const override = userOverridesMap.value[menu.id];
    if (override === 'deny') return { text: 'مسدود شده (اختصاصی)', color: 'text-rose-400 bg-rose-400/10 border-rose-400/20' };
    if (override === 'allow') return { text: 'مجاز (اختصاصی)', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' };

    // Check if any user role has this menu
    const isSuperAdmin = props.viewUser.roles?.some(r => r.key === 'super_admin');
    if (isSuperAdmin) {
        return { text: 'مجاز (ادمین ارشد)', color: 'text-lime-400 bg-lime-400/10 border-lime-400/20' };
    }

    return { text: 'طبق نقش کاربر', color: 'text-zinc-400 bg-zinc-950 border-zinc-800' };
}

function handleOverrideChange(menuId, event) {
    const effect = event.target.value;
    isUpdating.value = menuId;

    router.post(`/panel/manager/matrix/user/${props.viewUser.id}`, {
        menu_id: menuId,
        effect: effect,
    }, {
        preserveScroll: true,
        onFinish: () => {
            isUpdating.value = null;
        }
    });
}
</script>

<template>
    <PanelLayout>
        <Head :title="`جزئیات کاربر: ${viewUser.first_name || ''} ${viewUser.last_name || viewUser.mobile}`" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div class="flex items-center gap-4">
                    <Link
                        href="/panel/super_admin/users"
                        class="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shrink-0"
                        title="بازگشت به لیست کاربران"
                    >
                        <ChevronRight class="w-5 h-5" />
                    </Link>
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-xs text-lime-400 font-bold uppercase tracking-wider">پرونده اطلاعات کاربر</span>
                            <span v-if="viewUser.member_profile?.level === 'vip'" class="px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] text-amber-400 flex items-center gap-1 font-bold">
                                <Crown class="w-3 h-3" /> VIP طلایی
                            </span>
                        </div>
                        <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-3">
                            <span>{{ viewUser.first_name || 'کاربر' }} {{ viewUser.last_name || '' }}</span>
                        </h1>
                        <div class="text-xs text-zinc-400 mt-1 flex flex-wrap items-center gap-4">
                            <span class="flex items-center gap-1.5 font-mono text-zinc-300" dir="ltr">
                                <Phone class="w-3.5 h-3.5 text-lime-400" /> {{ viewUser.mobile }}
                            </span>
                            <span v-if="viewUser.national_code" class="font-mono text-zinc-400">کد ملی: {{ viewUser.national_code }}</span>
                            <span>عضویت: {{ formatJalaliDate(viewUser.created_at) }}</span>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <span 
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border"
                        :class="viewUser.status === 'active' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'"
                    >
                        <span class="w-2 h-2 rounded-full" :class="viewUser.status === 'active' ? 'bg-emerald-400' : 'bg-rose-400'"></span>
                        {{ viewUser.status === 'active' ? 'حساب کاربری فعال' : 'معلق / غیرفعال' }}
                    </span>
                </div>
            </div>

            <!-- nk-block / Profile Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <!-- User Basic Info -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4">
                    <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <UserIcon class="w-4 h-4 text-lime-400" />
                            <span>مشخصات فردی و نقش‌ها</span>
                        </h2>
                    </div>

                    <div class="space-y-3 text-xs">
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>جنسیت:</span>
                            <span class="text-white font-medium">{{ viewUser.gender === 'female' ? 'بانوان' : 'آقایان' }}</span>
                        </div>
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>کد ملی:</span>
                            <span class="text-white font-mono">{{ viewUser.national_code || 'ثبت نشده' }}</span>
                        </div>
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>شماره پرونده:</span>
                            <span class="text-lime-400 font-mono font-bold">#{{ viewUser.id }}</span>
                        </div>
                        <div class="pt-3 border-t border-zinc-800/60">
                            <span class="text-zinc-400 block mb-2">نقش‌های سازمانی:</span>
                            <div class="flex flex-wrap gap-1.5">
                                <span
                                    v-for="r in viewUser.roles"
                                    :key="r.id"
                                    class="px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold"
                                    :class="{ 'text-lime-400 border-lime-400/30': r.key === 'super_admin' }"
                                >
                                    {{ r.title }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Membership Plan -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4">
                    <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <CreditCard class="w-4 h-4 text-lime-400" />
                            <span>اشتراک ورزشی</span>
                        </h2>
                    </div>

                    <div v-if="viewUser.active_membership" class="space-y-3 text-xs">
                        <div class="flex justify-between items-center">
                            <span class="text-zinc-400">پلن فعال:</span>
                            <span class="text-lime-400 font-bold text-sm">{{ viewUser.active_membership.plan?.title }}</span>
                        </div>
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>تاریخ انقضا:</span>
                            <span class="text-white font-medium">{{ formatJalaliDate(viewUser.active_membership.end_date) }}</span>
                        </div>
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>جلسات باقی‌مانده:</span>
                            <span class="font-mono font-bold text-lime-400 text-sm">
                                {{ viewUser.active_membership.remaining_sessions ?? 'نامحدود' }}
                            </span>
                        </div>
                    </div>
                    <div v-else class="text-center py-8 text-zinc-500 text-xs">
                        کاربر در حال حاضر اشتراک فعالی ندارد.
                    </div>
                </div>

                <!-- Trainer / Specialty info if available -->
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4">
                    <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <Dumbbell class="w-4 h-4 text-lime-400" />
                            <span>وضعیت مربیگری</span>
                        </h2>
                    </div>

                    <div v-if="viewUser.trainer_profile" class="space-y-3 text-xs">
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>درصد پورسانت:</span>
                            <span class="text-lime-400 font-bold font-mono text-sm">%{{ viewUser.trainer_profile.commission_rate }}</span>
                        </div>
                        <div class="text-zinc-400">
                            <span class="block mb-1">تخصص‌ها و گرایش‌ها:</span>
                            <p class="text-zinc-300 line-clamp-2">{{ viewUser.trainer_profile.specialties?.join('، ') || 'ثبت نشده' }}</p>
                        </div>
                    </div>
                    <div v-else class="text-center py-8 text-zinc-500 text-xs">
                        این کاربر به عنوان مربی در سیستم تعریف نشده است.
                    </div>
                </div>
            </div>

            <!-- Recent Attendances -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Calendar class="w-4 h-4 text-lime-400" />
                        <span>آخرین سوابق تردد و ورود/خروج کاربر</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">۱۰ تردد اخیر</span>
                </div>

                <div v-if="viewUser.attendances && viewUser.attendances.length" class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-3.5 font-bold">تاریخ</th>
                                <th class="p-3.5 font-bold">زمان ورود</th>
                                <th class="p-3.5 font-bold">زمان خروج</th>
                                <th class="p-3.5 font-bold text-center">شیوه ثبت تردد</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="att in viewUser.attendances" :key="att.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-3.5 text-zinc-300">{{ formatJalaliDate(att.check_in) }}</td>
                                <td class="p-3.5 text-white font-mono" dir="ltr">{{ new Date(att.check_in).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) }}</td>
                                <td class="p-3.5 text-zinc-400 font-mono" dir="ltr">
                                    <span v-if="att.check_out">{{ new Date(att.check_out).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) }}</span>
                                    <span v-else class="text-lime-400 font-bold text-[10px] bg-lime-400/10 px-2 py-0.5 rounded-full">در حال تمرین</span>
                                </td>
                                <td class="p-3.5 text-center">
                                    <span class="px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px]">
                                        {{ att.method === 'card' ? 'کارت هوشمند' : att.method === 'qr' ? 'اسکن بارکد' : 'ثبت دستی پذیرش' }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="text-center py-10 text-zinc-500 text-xs">
                    هیچ سابقه‌ی ترددی برای این کاربر ثبت نشده است.
                </div>
            </div>

            <!-- Custom Menu Overrides (User-level RBAC Overrides) -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Sliders class="w-4 h-4 text-lime-400" />
                        <span>دسترسی‌های اختصاصی کاربر به منوها (User Menu Overrides)</span>
                    </h2>
                    <p class="text-xs text-zinc-400 mt-1">مدیر سیستم می‌تواند منوی خاصی را منحصراً برای این کاربر مجاز (Allow) یا مسدود (Deny) کند.</p>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-3.5 font-bold">عنوان منو</th>
                                <th class="p-3.5 font-bold">کلید سیستم</th>
                                <th class="p-3.5 font-bold">پنل مربوطه</th>
                                <th class="p-3.5 font-bold text-center">وضعیت دسترسی موثر</th>
                                <th class="p-3.5 font-bold text-center">تنظیم اورراید اختصاصی</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="menu in menus" :key="menu.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-3.5 font-bold text-white">{{ menu.title }}</td>
                                <td class="p-3.5 font-mono text-zinc-400 text-[11px]">{{ menu.key }}</td>
                                <td class="p-3.5 text-zinc-400">
                                    <span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px]">
                                        {{ menu.panel_role_key }}
                                    </span>
                                </td>
                                <td class="p-3.5 text-center">
                                    <span 
                                        class="px-2.5 py-1 rounded-full text-[10px] font-bold border"
                                        :class="getEffectiveStatus(menu).color"
                                    >
                                        {{ getEffectiveStatus(menu).text }}
                                    </span>
                                </td>
                                <td class="p-3.5 text-center">
                                    <select
                                        :value="userOverridesMap[menu.id] || 'none'"
                                        @change="handleOverrideChange(menu.id, $event)"
                                        :disabled="isUpdating === menu.id"
                                        class="bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-1.5 text-xs text-white focus:border-lime-400 focus:outline-none transition-colors disabled:opacity-50"
                                    >
                                        <option value="none">پیش‌فرض نقش</option>
                                        <option value="allow">مجاز ویژه (Allow)</option>
                                        <option value="deny">مسدودسازی (Deny)</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
