<script setup>
import { ref } from 'vue';
import { Head, useForm, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Image, Plus, Trash2, Edit, X } from '@lucide/vue';

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
        <Head title="مدیریت بنرها و تبلیغات" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Image class="w-6 h-6 text-lime-400" />
                        <span>بنرهای تبلیغاتی و کمپین‌ها</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت بنرهای اسلایدر صفحه اصلی و صفحات کافه و فروشگاه</p>
                </div>

                <button
                    @click="openCreate"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                    <Plus class="w-4 h-4" />
                    <span>افزودن بنر جدید</span>
                </button>
            </div>

            <!-- Banners List -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    v-for="banner in banners"
                    :key="banner.id"
                    class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col justify-between"
                >
                    <div>
                        <div class="h-44 overflow-hidden relative">
                            <img :src="banner.image" :alt="banner.title" class="w-full h-full object-cover" />
                            <span v-if="banner.badge" class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-lime-400 text-black">
                                {{ banner.badge }}
                            </span>
                        </div>
                        <div class="p-5">
                            <span class="text-[10px] text-zinc-500 font-bold uppercase">بخش: {{ banner.scope }}</span>
                            <h3 class="text-sm font-bold text-white mt-1">{{ banner.title }}</h3>
                            <p class="text-xs text-zinc-400 mt-1.5">{{ banner.subtitle }}</p>
                        </div>
                    </div>

                    <div class="p-5 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-4">
                        <span class="text-xs" :class="banner.is_active ? 'text-lime-400' : 'text-zinc-500'">
                            {{ banner.is_active ? '● فعال در سایت' : '○ غیرفعال' }}
                        </span>

                        <div class="flex items-center gap-2">
                            <button @click="openEdit(banner)" class="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white">
                                <Edit class="w-3.5 h-3.5" />
                            </button>
                            <button @click="deleteBanner(banner.id)" class="p-2 rounded-lg bg-zinc-800 text-red-400 hover:text-red-300">
                                <Trash2 class="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Create / Edit Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">{{ editingBanner ? 'ویرایش بنر' : 'افزودن بنر جدید' }}</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">عنوان بنر</label>
                            <input v-model="form.title" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">زیرعنوان / توضیح</label>
                            <input v-model="form.subtitle" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">آدرس تصویر (URL)</label>
                            <input v-model="form.image" type="url" dir="ltr" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">برچسب (Badge)</label>
                                <input v-model="form.badge" type="text" placeholder="مثلاً: ویژه VIP" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">محل نمایش</label>
                                <select v-model="form.scope" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                                    <option value="home">صفحه اصلی</option>
                                    <option value="cafe">کافه و رستوران</option>
                                    <option value="shop">فروشگاه</option>
                                </select>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ذخیره بنر</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
