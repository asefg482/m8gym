<script setup>
import { ref } from 'vue';
import { Head, useForm, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Image, Plus, Trash2, Edit3, X, Eye, ExternalLink } from '@lucide/vue';

const props = defineProps({
    banners: Array,
});

const isModalOpen = ref(false);
const editingBanner = ref(null);

const form = useForm({
    title: '',
    subtitle: '',
    image: '',
    link: '',
    badge: '',
    scope: 'home',
    is_active: true,
});

function openCreate() {
    editingBanner.value = null;
    form.reset();
    isModalOpen.value = true;
}

function openEdit(banner) {
    editingBanner.value = banner;
    form.title = banner.title;
    form.subtitle = banner.subtitle || '';
    form.image = banner.image;
    form.link = banner.link || '';
    form.badge = banner.badge || '';
    form.scope = banner.scope || 'home';
    form.is_active = Boolean(banner.is_active);
    isModalOpen.value = true;
}

function submitForm() {
    if (editingBanner.value) {
        form.put(`/panel/manager/banners/${editingBanner.value.id}`, {
            onSuccess: () => isModalOpen.value = false,
        });
    } else {
        form.post('/panel/manager/banners', {
            onSuccess: () => isModalOpen.value = false,
        });
    }
}

function deleteBanner(id) {
    if (confirm('آیا از حذف این بنر اطمینان دارید؟')) {
        router.delete(`/panel/manager/banners/${id}`);
    }
}
</script>

<template>
    <PanelLayout>
        <Head title="مدیریت بنرها و تبلیغات - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Image class="w-4 h-4" />
                        <span>مارکتینگ و کمپین‌های تصویری</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">بنرهای تبلیغاتی و کمپین‌های باشگاه</h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت بنرهای اسلایدر صفحه اصلی، کافه سلامت، فروشگاه مکمل و اطلاعیه‌های ویژه</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="openCreate"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus class="w-4 h-4 stroke-[2.5]" />
                        <span>افزودن بنر جدید</span>
                    </button>
                </div>
            </div>

            <!-- nk-block / Banners Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                    v-for="banner in banners"
                    :key="banner.id"
                    class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700/80 transition-all"
                >
                    <div>
                        <div class="h-48 overflow-hidden relative bg-zinc-950">
                            <img :src="banner.image" :alt="banner.title" class="w-full h-full object-cover" />
                            <span v-if="banner.badge" class="absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-full bg-lime-400 text-black shadow-md">
                                {{ banner.badge }}
                            </span>
                            <span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-zinc-300 border border-zinc-700">
                                بخش: {{ banner.scope === 'home' ? 'صفحه اصلی' : banner.scope === 'cafe' ? 'کافه و بوفه' : 'فروشگاه' }}
                            </span>
                        </div>
                        <div class="p-5">
                            <h3 class="text-sm font-bold text-white">{{ banner.title }}</h3>
                            <p v-if="banner.subtitle" class="text-xs text-zinc-400 mt-1.5 leading-relaxed">{{ banner.subtitle }}</p>
                        </div>
                    </div>

                    <div class="p-5 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-2">
                        <span 
                            class="inline-flex items-center gap-1.5 text-xs font-bold"
                            :class="banner.is_active ? 'text-lime-400' : 'text-zinc-500'"
                        >
                            <span class="w-1.5 h-1.5 rounded-full" :class="banner.is_active ? 'bg-lime-400' : 'bg-zinc-600'"></span>
                            <span>{{ banner.is_active ? 'فعال در وب‌سایت' : 'غیرفعال' }}</span>
                        </span>

                        <div class="flex items-center gap-2">
                            <button 
                                @click="openEdit(banner)" 
                                class="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white cursor-pointer transition-colors"
                                title="ویرایش بنر"
                            >
                                <Edit3 class="w-4 h-4" />
                            </button>
                            <button 
                                @click="deleteBanner(banner.id)" 
                                class="p-2 rounded-xl bg-zinc-800 hover:bg-rose-500/20 text-rose-400 cursor-pointer transition-colors"
                                title="حذف بنر"
                            >
                                <Trash2 class="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="!banners || banners.length === 0" class="col-span-full p-16 text-center text-xs text-zinc-500 rounded-2xl bg-zinc-900 border border-zinc-800">
                    بنری تعریف نشده است.
                </div>
            </div>

            <!-- nk-modal / Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <Image class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">{{ editingBanner ? 'ویرایش بنر' : 'افزودن بنر جدید' }}</h3>
                        </div>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">عنوان بنر</label>
                            <input v-model="form.title" type="text" placeholder="مثلاً: تخفیف ویژه عضویت سالانه" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">زیرعنوان / متن تبلیغاتی</label>
                            <input v-model="form.subtitle" type="text" placeholder="مثلاً: همراه با ۲ جلسه ماساژ ورزشی رایگان" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">آدرس اینترنتی تصویر (URL)</label>
                            <input v-model="form.image" type="url" dir="ltr" placeholder="https://..." class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                        </div>
                        <div class="grid grid-cols-2 gap-3.5">
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">برچسب (Badge)</label>
                                <input v-model="form.badge" type="text" placeholder="مثلاً: ویژه اعضا" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" />
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">محل نمایش</label>
                                <select v-model="form.scope" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400">
                                    <option value="home">صفحه اصلی</option>
                                    <option value="cafe">کافه سلامت</option>
                                    <option value="shop">فروشگاه</option>
                                </select>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer">انصراف</button>
                            <button 
                                type="submit" 
                                :disabled="form.processing"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
                            >
                                <span v-if="form.processing">در حال ذخیره...</span>
                                <span v-else>ذخیره بنر</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
