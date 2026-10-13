<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Package, Plus, Edit, X, Search } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    products: Object,
    categories: Array,
});

const isModalOpen = ref(false);
const editingProduct = ref(null);

const form = useForm({
    title: '',
    category_id: '',
    price: 0,
    discount_price: '',
    stock: 10,
    sku: '',
    description: '',
    images: ['https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80'],
    is_active: true,
});

function openCreate() {
    editingProduct.value = null;
    form.reset();
    isModalOpen.value = true;
}

function openEdit(p) {
    editingProduct.value = p;
    form.title = p.title;
    form.category_id = p.category_id || '';
    form.price = p.price;
    form.discount_price = p.discount_price || '';
    form.stock = p.stock;
    form.sku = p.sku || '';
    form.description = p.description || '';
    form.images = p.images || [];
    form.is_active = Boolean(p.is_active);
    isModalOpen.value = true;
}

function submitProduct() {
    if (editingProduct.value) {
        form.put(`/panel/shop/products/${editingProduct.value.id}`, {
            onSuccess: () => isModalOpen.value = false,
        });
    } else {
        form.post('/panel/shop/products', {
            onSuccess: () => isModalOpen.value = false,
        });
    }
}
</script>

<template>
    <PanelLayout>
        <Head title="مدیریت محصولات فروشگاه" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Package class="w-6 h-6 text-lime-400" />
                        <span>محصولات، مکمل‌ها و موجودی انبار</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">تعریف کالا، قیمت‌گذاری، تخفیف و کنترل تعداد موجودی</p>
                </div>

                <button
                    @click="openCreate"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                    <Plus class="w-4 h-4" />
                    <span>افزودن محصول جدید</span>
                </button>
            </div>

            <!-- Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold text-white">عنوان کالا</th>
                            <th class="p-4 font-bold">دسته‌بندی</th>
                            <th class="p-4 font-bold">قیمت واحد</th>
                            <th class="p-4 font-bold">قیمت تخفیف‌دار</th>
                            <th class="p-4 font-bold">موجودی انبار</th>
                            <th class="p-4 font-bold text-center">عملیات</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono">
                        <tr v-for="p in products.data" :key="p.id" class="hover:bg-zinc-800/20">
                            <td class="p-4 font-sans font-bold text-white">{{ p.title }}</td>
                            <td class="p-4 font-sans text-zinc-400">{{ p.category?.title || '-' }}</td>
                            <td class="p-4 text-zinc-300">{{ formatPrice(p.price) }}</td>
                            <td class="p-4 text-lime-400">{{ p.discount_price ? formatPrice(p.discount_price) : '-' }}</td>
                            <td class="p-4">
                                <span :class="p.stock <= 5 ? 'text-amber-400 font-bold' : 'text-zinc-300'">
                                    {{ p.stock }} عدد
                                </span>
                            </td>
                            <td class="p-4 text-center font-sans">
                                <button @click="openEdit(p)" class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs">
                                    ویرایش
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">{{ editingProduct ? 'ویرایش کالا' : 'افزودن محصول جدید' }}</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitProduct" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">نام محصول</label>
                            <input v-model="form.title" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">دسته‌بندی</label>
                                <select v-model="form.category_id" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                                    <option value="">بدون دسته‌بندی</option>
                                    <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">تعداد موجودی</label>
                                <input v-model.number="form.stock" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">قیمت (تومان)</label>
                                <input v-model.number="form.price" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">قیمت تخفیف‌خورده (اختیاری)</label>
                                <input v-model.number="form.discount_price" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">توضیحات</label>
                            <textarea v-model="form.description" rows="2" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ذخیره کالا</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
