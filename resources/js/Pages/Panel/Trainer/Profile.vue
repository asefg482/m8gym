<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { UserCheck, Save } from '@lucide/vue';

const props = defineProps({
    trainer: Object,
    profile: Object,
});

const form = useForm({
    bio: props.profile?.bio || '',
    photo: props.profile?.photo || '',
    specialties: props.profile?.specialties || ['هایپرتروفی', 'چربی‌سوزی', 'حرکات اصلاحی'],
    is_public: props.profile?.is_public ?? true,
});

function saveProfile() {
    form.post('/panel/trainer/profile', { preserveScroll: true });
}
</script>

<template>
    <PanelLayout>
        <Head title="پروفایل عمومی مربی" />

        <div class="space-y-6 max-w-3xl">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <UserCheck class="w-6 h-6 text-lime-400" />
                        <span>پروفایل و رزومه عمومی مربی</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">اطلاعاتی که در صفحه اصلی باشگاه برای عموم ورزشکاران نمایش داده می‌شود</p>
                </div>

                <button
                    @click="saveProfile"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"
                >
                    <Save class="w-4 h-4" />
                    <span>ذخیره پروفایل</span>
                </button>
            </div>

            <form @submit.prevent="saveProfile" class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-5">
                <div>
                    <label class="block text-xs font-semibold text-zinc-300 mb-1.5">بیوگرافی و سوابق ورزشی</label>
                    <textarea v-model="form.bio" rows="4" placeholder="عناوین قهرمانی، مدارک فدراسیون، سال‌های مربیگری..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white leading-relaxed"></textarea>
                </div>

                <div>
                    <label class="block text-xs font-semibold text-zinc-300 mb-1.5">لینک تصویر پرسنلی / ورزشی</label>
                    <input v-model="form.photo" type="url" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                </div>

                <div>
                    <label class="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                        <input type="checkbox" v-model="form.is_public" />
                        <span>نمایش نام و مشخصات من در لیست مربیان صفحه اصلی وب‌سایت</span>
                    </label>
                </div>
            </form>
        </div>
    </PanelLayout>
</template>
