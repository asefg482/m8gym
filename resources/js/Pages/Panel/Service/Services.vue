<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Scissors, Plus, Edit, X } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    services: Array,
});

const isModalOpen = ref(false);
const editingService = ref(null);

const form = useForm({
    title: '',
    category: 'massage',
    duration_min: 45,
    price: 500000,
    description: '',
    is_active: true,
});

function openCreate() {
    editingService.value = null;
    form.reset();
    isModalOpen.value = true;
}

function openEdit(srv) {
    editingService.value = srv;
    form.title = srv.title;
    form.category = srv.category;
    form.duration_min = srv.duration_min;
    form.price = srv.price;
    form.description = srv.description || '';
    form.is_active = Boolean(srv.is_active);
    isModalOpen.value = true;
}

function submitService() {
    if (editingService.value) {
        form.put(`/panel/service/services/${editingService.value.id}`, {
            onSuccess: () => isModalOpen.value = false,
        });
    } else {
        form.post('/panel/service/services', {
            onSuccess: () => isModalOpen.value = false,
        });
    }
}
</script>

<template>
    <PanelLayout>
        <Head title="تعریف خدمات و تعرفه‌ها" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Scissors class="w-6 h-6 text-lime-400" />
                        <span>تعریف خدمات، مدت زمان و تعرفه‌ها</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت خدمات ماساژ ورزشی، پیرایشگاه و پکیج‌های اسپا</p>
                </div>

                <button
                    @click="openCreate"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                    <Plus class="w-4 h-4" />
                    <span>خدمت جدید</span>
                </button>
            </div>

            <!-- List -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="srv in services"
                    :key="srv.id"
                    class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
                >
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-950 text-lime-400 border border-zinc-800 uppercase">
                                {{ srv.category }}
                            </span>
                            <span class="text-xs text-zinc-400 font-mono">{{ srv.duration_min }} دقیقه</span>
                        </div>

                        <h3 class="text-base font-bold text-white mt-2">{{ srv.title }}</h3>
                        <p class="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">{{ srv.description }}</p>
                    </div>

                    <div class="pt-4 border-t border-zinc-800/80 mt-6 flex items-center justify-between">
                        <div class="text-sm font-bold text-white font-mono">{{ formatPrice(srv.price) }}</div>
                        <button @click="openEdit(srv)" class="text-xs text-lime-400 font-bold hover:underline cursor-pointer">
                            ویرایش
                        </button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">{{ editingService ? 'ویرایش خدمت' : 'تعریف خدمت جدید' }}</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitService" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">عنوان خدمت</label>
                            <input v-model="form.title" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">دسته‌بندی</label>
                                <select v-model="form.category" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                                    <option value="massage">ماساژ و اسپا</option>
                                    <option value="hairdresser">پیرایشگاه مردانه</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">مدت زمان (دقیقه)</label>
                                <input v-model.number="form.duration_min" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">قیمت (تومان)</label>
                            <input v-model.number="form.price" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">توضیحات</label>
                            <textarea v-model="form.description" rows="2" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ذخیره خدمت</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
