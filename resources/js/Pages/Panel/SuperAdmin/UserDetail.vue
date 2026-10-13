<script setup>
import { ref, computed } from 'vue';
import { Head, Link, router, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    User as UserIcon, 
    Shield, 
    Crown, 
    Calendar, 
    ArrowRight, 
    Clock, 
    CheckCircle, 
    XCircle, 
    MinusCircle, 
    Activity, 
    Phone, 
    CreditCard, 
    Dumbbell,
    Sliders
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
    if (override === 'deny') return { text: 'مسدود شده (اختصاصی)', color: 'text-rose-400 bg-rose-400/10' };
    if (override === 'allow') return { text: 'مجاز (اختصاصی)', color: 'text-emerald-400 bg-emerald-400/10' };

    // Check if any user role has this menu
    const isSuperAdmin = props.viewUser.roles?.some(r => r.key === 'super_admin');
    if (isSuperAdmin) {
        return { text: 'مجاز (ادمین کل)', color: 'text-lime-400 bg-lime-400/10' };
    }

    return { text: 'طبق نقش‌های کاربر', color: 'text-zinc-400 bg-zinc-800' };
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
            <!-- Header & Navigation -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <Link
                        href="/panel/super_admin/users"
                        class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                        title="بازگشت به لیست کاربران"
                    >
                        <ArrowRight class="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                            <span>{{ viewUser.first_name || 'کاربر' }} {{ viewUser.last_name || '' }}</span>
                            <span v-if="viewUser.member_profile?.level === 'vip'" class="px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] text-amber-400 flex items-center gap-1 font-bold">
                                <Crown class="w-3 h-3" /> VIP
                            </span>
                        </h1>
                        <p class="text-xs text-zinc-400 mt-1 flex items-center gap-3">
                            <span class="flex items-center gap-1"><Phone class="w-3.5 h-3.5" /> {{ viewUser.mobile }}</span>
                            <span v-if="viewUser.national_code">کد ملی: {{ viewUser.national_code }}</span>
                            <span>عضویت: {{ formatJalaliDate(viewUser.created_at) }}</span>
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <span 
                        class="px-3 py-1.5 rounded-xl text-xs font-bold border"
                        :class="viewUser.status === 'active' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'"
                    >
                        {{ viewUser.status === 'active' ? 'حساب فعال' : 'معلق / غیرفعال' }}
                    </span>
                </div>
            </div>

            <!-- Profile & Membership Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- User Basic Info -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                    <h2 class="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
                        <UserIcon class="w-4 h-4 text-lime-400" />
                        <span>مشخصات فردی و نقش‌ها</span>
                    </h2>

                    <div class="space-y-3 text-xs">
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>جنسیت:</span>
                            <span class="text-zinc-200">{{ viewUser.gender === 'female' ? 'خانم' : 'آقا' }}</span>
                        </div>
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>کد ملی:</span>
                            <span class="text-zinc-200">{{ viewUser.national_code || 'ثبت نشده' }}</span>
                        </div>
                        <div class="flex justify-between items-start text-zinc-400 pt-2 border-t border-zinc-800/60">
                            <span>نقش‌های انتساب داده شده:</span>
                            <div class="flex flex-wrap gap-1 justify-end max-w-[60%]">
                                <span
                                    v-for="r in viewUser.roles"
                                    :key="r.id"
                                    class="px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-300 text-[10px] font-semibold"
                                >
                                    {{ r.title }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Membership Plan -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                    <h2 class="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
                        <CreditCard class="w-4 h-4 text-lime-400" />
                        <span>اشتراک ورزشی</span>
                    </h2>

                    <div v-if="viewUser.active_membership" class="space-y-3 text-xs">
                        <div class="flex justify-between items-center">
                            <span class="text-zinc-400">پلن جاری:</span>
                            <span class="text-white font-bold">{{ viewUser.active_membership.plan?.title }}</span>
                        </div>
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>تاریخ پایان:</span>
                            <span class="text-zinc-200 font-medium">{{ formatJalaliDate(viewUser.active_membership.end_date) }}</span>
                        </div>
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>جلسات باقیمانده:</span>
                            <span class="text-lime-400 font-bold">{{ viewUser.active_membership.remaining_sessions ?? 'نامحدود' }}</span>
                        </div>
                    </div>
                    <div v-else class="text-center py-6 text-zinc-500 text-xs">
                        کاربر در حال حاضر اشتراک فعالی ندارد.
                    </div>
                </div>

                <!-- Trainer / Specialty info if available -->
                <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                    <h2 class="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
                        <Dumbbell class="w-4 h-4 text-lime-400" />
                        <span>وضعیت مربیگری</span>
                    </h2>

                    <div v-if="viewUser.trainer_profile" class="space-y-3 text-xs">
                        <div class="flex justify-between items-center text-zinc-400">
                            <span>درصد پورسانت:</span>
                            <span class="text-lime-400 font-bold">%{{ viewUser.trainer_profile.commission_rate }}</span>
                        </div>
                        <div class="text-zinc-400">
                            <span>تخصص‌ها:</span>
                            <p class="text-zinc-300 mt-1 line-clamp-2">{{ viewUser.trainer_profile.specialties?.join('، ') || 'ثبت نشده' }}</p>
                        </div>
                    </div>
                    <div v-else class="text-center py-6 text-zinc-500 text-xs">
                        این کاربر به عنوان مربی تعریف نشده است.
                    </div>
                </div>
            </div>

            <!-- Recent Attendances -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                <h2 class="text-sm font-bold text-white flex items-center gap-2">
                    <Calendar class="w-4 h-4 text-lime-400" />
                    <span>آخرین ترددها و حضور و غیاب</span>
                </h2>

                <div v-if="viewUser.attendances && viewUser.attendances.length" class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead>
                            <tr class="border-b border-zinc-800 text-zinc-400">
                                <th class="p-3">تاریخ</th>
                                <th class="p-3">زمان ورود</th>
                                <th class="p-3">زمان خروج</th>
                                <th class="p-3">روش ثبت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60">
                            <tr v-for="att in viewUser.attendances" :key="att.id" class="hover:bg-zinc-800/30">
                                <td class="p-3 text-zinc-300">{{ formatJalaliDate(att.check_in) }}</td>
                                <td class="p-3 text-white font-mono" dir="ltr">{{ new Date(att.check_in).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) }}</td>
                                <td class="p-3 text-zinc-400 font-mono" dir="ltr">{{ att.check_out ? new Date(att.check_out).toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }) : 'در حال ورزش' }}</td>
                                <td class="p-3">
                                    <span class="px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-400 text-[10px]">
                                        {{ att.method === 'card' ? 'کارت هوشمند' : att.method === 'qr' ? 'اسکن بارکد' : 'دستی' }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="text-center py-6 text-zinc-500 text-xs">
                    هیچ سابقه‌ی حضوری ثبت نشده است.
                </div>
            </div>

            <!-- Custom Menu Overrides (User-level RBAC Overrides) -->
            <div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                    <div>
                        <h2 class="text-sm font-bold text-white flex items-center gap-2">
                            <Sliders class="w-4 h-4 text-lime-400" />
                            <span>دسترسی‌های اختصاصی کاربر به منوها (User Menu Overrides)</span>
                        </h2>
                        <p class="text-xs text-zinc-400 mt-1">مدیر سیستم می‌تواند منوی خاصی را منحصراً برای این کاربر مجاز (Allow) یا مسدود (Deny) کند.</p>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead>
                            <tr class="border-b border-zinc-800 text-zinc-400">
                                <th class="p-3">عنوان منو</th>
                                <th class="p-3">کلید سیستم</th>
                                <th class="p-3">پنل مربوطه</th>
                                <th class="p-3 text-center">وضعیت موثر</th>
                                <th class="p-3 text-center">تنظیم اورراید</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60">
                            <tr v-for="menu in menus" :key="menu.id" class="hover:bg-zinc-800/30">
                                <td class="p-3 font-semibold text-white">{{ menu.title }}</td>
                                <td class="p-3 font-mono text-zinc-400 text-[11px]">{{ menu.key }}</td>
                                <td class="p-3 text-zinc-400">
                                    <span class="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 text-[10px]">
                                        {{ menu.panel_role_key }}
                                    </span>
                                </td>
                                <td class="p-3 text-center">
                                    <span 
                                        class="px-2.5 py-1 rounded-full text-[10px] font-bold"
                                        :class="getEffectiveStatus(menu).color"
                                    >
                                        {{ getEffectiveStatus(menu).text }}
                                    </span>
                                </td>
                                <td class="p-3 text-center">
                                    <select
                                        :value="userOverridesMap[menu.id] || 'none'"
                                        @change="handleOverrideChange(menu.id, $event)"
                                        :disabled="isUpdating === menu.id"
                                        class="bg-zinc-950 border border-zinc-700 rounded-xl px-2.5 py-1 text-xs text-white focus:border-lime-400 transition-colors disabled:opacity-50"
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
