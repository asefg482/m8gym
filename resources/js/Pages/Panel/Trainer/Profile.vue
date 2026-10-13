<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    UserCheck, 
    Save, 
    Sparkles, 
    Image, 
    CheckCircle2, 
    Award,
    Eye
} from '@lucide/vue';

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
        <Head title="پروفایل عمومی مربی - Dashlite" />

        <div class="space-y-6 max-w-3xl">
            <!-- nk-block-head -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <UserCheck class="w-4 h-4" />
                        <span>معرفی و پرسونال برندینگ مربی</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">پروفایل و رزومه عمومی مربی</h1>
                    <p class="text-xs text-zinc-400 mt-1">مشخصات، سوابق و بیوگرافی شما که در بخش معرفی مربیان وب‌سایت برای عموم ورزشکاران به نمایش درمی‌آید</p>
                </div>

                <button
                    @click="saveProfile"
                    :disabled="form.processing"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <Save class="w-4 h-4 stroke-[2.5]" />
                    <span>{{ form.processing ? 'در حال ذخیره‌سازی...' : 'ذخیره مشخصات پروفایل' }}</span>
                </button>
            </div>

            <!-- nk-card / Form -->
            <form @submit.prevent="saveProfile" class="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5">
                <div>
                    <label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-2">
                        <Award class="w-4 h-4 text-lime-400" />
                        <span>بیوگرافی و افتخارات ورزشی</span>
                    </label>
                    <textarea 
                        v-model="form.bio" 
                        rows="4" 
                        placeholder="عناوین قهرمانی کشور، مدارک فدراسیون بدنسازی و پرورش اندام، سوابق مربیگری بین‌المللی و دانشگاهی..." 
                        class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white leading-relaxed focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30"
                    ></textarea>
                </div>

                <div>
                    <label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-2">
                        <Image class="w-4 h-4 text-lime-400" />
                        <span>لینک تصویر پرسنلی / ورزشی مربی (URL)</span>
                    </label>
                    <input 
                        v-model="form.photo" 
                        type="url" 
                        dir="ltr" 
                        placeholder="https://..." 
                        class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400 font-mono" 
                    />
                </div>

                <div class="pt-2">
                    <label class="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-zinc-700 transition-colors">
                        <input 
                            type="checkbox" 
                            v-model="form.is_public" 
                            class="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-lime-400 focus:ring-0" 
                        />
                        <div class="text-xs">
                            <span class="font-bold text-white block">نمایش در لیست مربیان وب‌سایت اصلی</span>
                            <span class="text-zinc-500 text-[11px]">با فعال‌سازی این گزینه، کارت رزومه شما در لندینگ پیج باشگاه M8 به ورزشکاران نمایش داده می‌شود.</span>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    </PanelLayout>
</template>
