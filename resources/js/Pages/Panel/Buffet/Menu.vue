<script setup>
import { ref } from 'vue';
import { Head, useForm, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Coffee, Plus, Edit, Check, X, Flame } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    items: Array,
    categories: Array,
});

const isModalOpen = ref(false);
const editingItem = ref(null);

const form = useForm({
    title: '',
    category_id: '',
    price: 100000,
    discount_price: '',
    description: '',
    images: ['https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80'],
    nutritional_info: { protein: '30g', calories: '350 kcal' },
    is_active: true,
});

function openCreate() {
    editingItem.value = null;
    form.reset();
    isModalOpen.value = true;
}

function openEdit(it) {
    editingItem.value = it;
    form.title = it.title;
    form.category_id = it.category_id || '';
    form.price = it.price;
    form.discount_price = it.discount_price || '';
    form.description = it.description || '';
    form.images = it.images || [];
    form.nutritional_info = it.nutritional_info || {};
    form.is_active = Boolean(it.is_active);
    isModalOpen.value = true;
}

function toggleItem(item) {
    router.post(`/panel/buffet/menu/${item.id}/toggle`, {}, { preserveScroll: true });
}

function submitForm() {
    if (editingItem.value) {
        form.put(`/panel/buffet/menu/${editingItem.value.id}`, {
            onSuccess: () => isModalOpen.value = false,
        });
    } else {
        form.post('/panel/buffet/menu', {
            onSuccess: () => isModalOpen.value = false,
        });
    }
}
</script>

<template>
    <PanelLayout>
        <Head title="منوی غذا و نوشیدنی بوفه" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Coffee class="w-6 h-6 text-lime-400" />
                        <span>مدیریت منوی غذا و نوشیدنی‌های بوفه</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">تغییر وضعیت موجود/ناموجود با یک کلیک، قیمت‌گذاری و ثبت اطلاعات پروتئین/کالری</p>
                </div>

                <button
                    @click="openCreate"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"
                >
                    <Plus class="w-4 h-4" />
                    <span>آیتم جدید در منو</span>
                </button>
            </div>

            <!-- Items Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="item in items"
                    :key="item.id"
                    class="p-5 rounded-3xl bg-zinc-900 border flex flex-col justify-between transition-all"
                    :class="item.is_active ? 'border-zinc-800' : 'border-zinc-800/40 opacity-60 bg-zinc-950/40'"
                >
                    <div>
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <span class="text-[10px] text-zinc-500 font-bold uppercase">{{ item.category?.title }}</span>
                                <h3 class="text-sm font-bold text-white mt-0.5">{{ item.title }}</h3>
                            </div>

                            <!-- Single Click Toggle Switcher -->
                            <button
                                @click="toggleItem(item)"
                                type="button"
                                class="px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer"
                                :class="item.is_active ? 'bg-lime-400/20 text-lime-400 border border-lime-400/40' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'"
                            >
                                {{ item.is_active ? '● موجود' : '○ ناموجود' }}
                            </button>
                        </div>

                        <p class="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">{{ item.description }}</p>

                        <div v-if="item.nutritional_info" class="flex gap-2 text-[10px] text-zinc-400 font-mono mb-4">
                            <span v-if="item.nutritional_info.protein" class="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-lime-400">
                                پرو: {{ item.nutritional_info.protein }}
                            </span>
                            <span v-if="item.nutritional_info.calories" class="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800">
                                کالری: {{ item.nutritional_info.calories }}
                            </span>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-zinc-800 flex items-center justify-between">
                        <span class="text-sm font-bold text-white font-mono">{{ formatPrice(item.effective_price) }}</span>
                        <button @click="openEdit(item)" class="text-xs text-lime-400 font-bold hover:underline cursor-pointer">
                            ویرایش
                        </button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">{{ editingItem ? 'ویرایش آیتم منو' : 'آیتم جدید بوفه' }}</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">نام غذا / نوشیدنی</label>
                            <input v-model="form.title" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">دسته‌بندی</label>
                                <select v-model="form.category_id" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                                    <option value="">انتخاب دسته‌بندی...</option>
                                    <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">قیمت (تومان)</label>
                                <input v-model.number="form.price" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">توضیحات و ترکیبات</label>
                            <textarea v-model="form.description" rows="2" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ذخیره آیتم</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
