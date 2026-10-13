<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Settings, 
    Save, 
    RefreshCw, 
    Building2, 
    Phone, 
    BarChart3, 
    MapPin, 
    Clock,
    Camera,
    Sparkles
} from '@lucide/vue';

const props = defineProps({
    settings: Object,
});

const form = useForm({
    gym_name: props.settings.gym_name || '',
    gym_slogan: props.settings.gym_slogan || '',
    gym_about: props.settings.gym_about || '',
    gym_phone: props.settings.gym_phone || '',
    gym_mobile: props.settings.gym_mobile || '',
    gym_address: props.settings.gym_address || '',
    gym_instagram: props.settings.gym_instagram || '',
    gym_work_hours: props.settings.gym_work_hours || '',
    stat_active_members: props.settings.stat_active_members || '',
    stat_trainers_count: props.settings.stat_trainers_count || '',
    stat_gym_area: props.settings.stat_gym_area || '',
    stat_experience_years: props.settings.stat_experience_years || '',
});

function saveSettings() {
    form.post('/panel/manager/cms', {
        preserveScroll: true,
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="تنظیمات محتوای سایت (CMS) - Dashlite" />

        <div class="space-y-6 max-w-4xl">
            <!-- nk-block-head -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Settings class="w-4 h-4" />
                        <span>سیستم مدیریت محتوای پرتال (CMS)</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">مدیریت متون و محتوای سایت</h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        ویرایش برخط مشخصات، شماره تماس‌ها، آدرس باشگاه در ساری، متن درباره ما و آمارهای صفحه اصلی وب‌سایت
                    </p>
                </div>

                <button
                    @click="saveSettings"
                    :disabled="form.processing"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <RefreshCw v-if="form.processing" class="w-4 h-4 animate-spin" />
                    <Save v-else class="w-4 h-4 stroke-[2.5]" />
                    <span>{{ form.processing ? 'در حال ذخیره‌سازی...' : 'ذخیره محتوا' }}</span>
                </button>
            </div>

            <form @submit.prevent="saveSettings" class="space-y-5">
                <!-- Group 1: Branding -->
                <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5">
                    <div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
                        <Building2 class="w-4 h-4 text-lime-400" />
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider">عنوان، برندینگ و شعار مجموعه</h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">نام رسمی باشگاه</label>
                            <input v-model="form.gym_name" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">شعار سربرگ (Slogan)</label>
                            <input v-model="form.gym_slogan" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-zinc-300 mb-1.5">متن معرفی و درباره ما</label>
                        <textarea v-model="form.gym_about" rows="3" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white leading-relaxed focus:outline-none focus:border-lime-400"></textarea>
                    </div>
                </div>

                <!-- Group 2: Contacts -->
                <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5">
                    <div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
                        <Phone class="w-4 h-4 text-lime-400" />
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider">اطلاعات تماس، آدرس ساری و اینستاگرام</h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">تلفن ثابت مجموعه</label>
                            <input v-model="form.gym_phone" type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">شماره همراه پذیرش و پیامک</label>
                            <input v-model="form.gym_mobile" type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <MapPin class="w-3.5 h-3.5 text-lime-400 inline" />
                                <span>آدرس پستی دقیق باشگاه در ساری</span>
                            </label>
                            <input v-model="form.gym_address" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <svg class="w-3.5 h-3.5 text-pink-400 inline fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                                <span>پیج اینستاگرام باشگاه</span>
                            </label>
                            <input v-model="form.gym_instagram" type="text" dir="ltr" placeholder="m8_fitclub" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <Clock class="w-3.5 h-3.5 text-lime-400 inline" />
                                <span>ساعات کاری و شیفت‌ها</span>
                            </label>
                            <input v-model="form.gym_work_hours" type="text" placeholder="همه‌روزه از ۶ صبح الی ۲۳" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                        </div>
                    </div>
                </div>

                <!-- Group 3: Stats -->
                <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5">
                    <div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
                        <BarChart3 class="w-4 h-4 text-lime-400" />
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider">آمارهای کلیدی نمایش‌داده‌شده در لندینگ پیج</h2>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold text-zinc-400 mb-1">تعداد اعضای فعال</label>
                            <input v-model="form.stat_active_members" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-zinc-400 mb-1">تعداد مربیان مجرب</label>
                            <input v-model="form.stat_trainers_count" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-zinc-400 mb-1">متراژ فضای باشگاه</label>
                            <input v-model="form.stat_gym_area" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-zinc-400 mb-1">سال سابقه فعالیت</label>
                            <input v-model="form.stat_experience_years" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </PanelLayout>
</template>
