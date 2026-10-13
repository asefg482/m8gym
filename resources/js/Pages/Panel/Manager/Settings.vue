<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Settings, Save, RefreshCw } from '@lucide/vue';

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
        <Head title="تنظیمات محتوای سایت (CMS)" />

        <div class="space-y-6 max-w-4xl">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Settings class="w-6 h-6 text-lime-400" />
                        <span>مدیریت متون و محتوای سایت (CMS)</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        ویرایش اطلاعات عمومی، آمارها، آدرس و شماره تلفن‌های باشگاه بدون نیاز به دیپلوی مجدد.
                    </p>
                </div>

                <button
                    @click="saveSettings"
                    :disabled="form.processing"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50"
                >
                    <RefreshCw v-if="form.processing" class="w-4 h-4 animate-spin" />
                    <Save v-else class="w-4 h-4" />
                    <span>ذخیره تنظیمات</span>
                </button>
            </div>

            <form @submit.prevent="saveSettings" class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
                <!-- Group 1: Branding -->
                <div class="border-b border-zinc-800 pb-6 space-y-4">
                    <h2 class="text-xs font-bold text-lime-400 uppercase tracking-wider">عنوان و شعار اصلی</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">نام باشگاه</label>
                            <input v-model="form.gym_name" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">شعار هدر</label>
                            <input v-model="form.gym_slogan" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">درباره ما</label>
                        <textarea v-model="form.gym_about" rows="3" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"></textarea>
                    </div>
                </div>

                <!-- Group 2: Contacts -->
                <div class="border-b border-zinc-800 pb-6 space-y-4">
                    <h2 class="text-xs font-bold text-lime-400 uppercase tracking-wider">اطلاعات تماس و آدرس ساری</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">تلفن ثابت</label>
                            <input v-model="form.gym_phone" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">شماره همراه پشتیبانی</label>
                            <input v-model="form.gym_mobile" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">آدرس دقیق مجموعه</label>
                            <input v-model="form.gym_address" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">لینک اینستاگرام</label>
                            <input v-model="form.gym_instagram" type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1.5">ساعات کاری</label>
                            <input v-model="form.gym_work_hours" type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>
                    </div>
                </div>

                <!-- Group 3: Stats -->
                <div class="space-y-4">
                    <h2 class="text-xs font-bold text-lime-400 uppercase tracking-wider">آمارهای برجسته صفحه اصلی</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                            <label class="block text-[11px] font-semibold text-zinc-400 mb-1">تعداد اعضای فعال</label>
                            <input v-model="form.stat_active_members" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-semibold text-zinc-400 mb-1">تعداد مربیان</label>
                            <input v-model="form.stat_trainers_count" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-semibold text-zinc-400 mb-1">متراژ فضا</label>
                            <input v-model="form.stat_gym_area" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-semibold text-zinc-400 mb-1">سابقه فعالیت</label>
                            <input v-model="form.stat_experience_years" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </PanelLayout>
</template>
