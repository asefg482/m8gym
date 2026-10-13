<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    Package, 
    Plus, 
    Edit3, 
    X, 
    Search, 
    AlertTriangle, 
    CheckCircle2, 
    Tags,
    Image,
    Layers,
    DollarSign
} from '@lucide/vue';
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
        <Head title="مدیریت کالاهای فروشگاه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Package class="w-4 h-4" />
                        <span>انبارداری و کاتالوگ فروشگاه</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">مدیریت کالاهای فروشگاه ورزشی</h1>
                    <p class="text-xs text-zinc-400 mt-1">تعریف مکمل‌های ورزشی، پوشاک، قیمت‌گذاری، بارکد انبارداری (SKU) و موجودی کالا</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="openCreate"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus class="w-4 h-4 stroke-[2.5]" />
                        <span>تعریف محصول جدید</span>
                    </button>
                </div>
            </div>

            <!-- nk-card / Products Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Package class="w-4 h-4 text-lime-400" />
                        <span>لیست اقلام و وضعیت موجودی انبار</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">مجموع کالاها: <b class="font-mono text-lime-400">{{ products.total || products.data?.length || 0 }}</b> قلم</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">نام کالا و تصویر</th>
                                <th class="p-4 font-bold">دسته‌بندی</th>
                                <th class="p-4 font-bold">قیمت فروش</th>
                                <th class="p-4 font-bold">موجودی انبار</th>
                                <th class="p-4 font-bold">شناسه SKU</th>
                                <th class="p-4 font-bold text-center">عملیات</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="p in products.data" :key="p.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0">
                                            <img 
                                                v-if="p.images && p.images[0]" 
                                                :src="p.images[0]" 
                                                class="w-full h-full object-cover" 
                                                alt=""
                                            />
                                            <div v-else class="w-full h-full flex items-center justify-center text-zinc-600">
                                                <Package class="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <span class="font-bold text-white text-xs sm:text-sm block">{{ p.title }}</span>
                                            <span v-if="p.description" class="text-zinc-500 text-[11px] line-clamp-1 mt-0.5">{{ p.description }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold">
                                        {{ p.category?.title || 'عمومی' }}
                                    </span>
                                </td>
                                <td class="p-4 font-mono">
                                    <div class="text-lime-400 font-black text-sm">{{ formatPrice(p.price) }}</div>
                                    <div v-if="p.discount_price" class="text-zinc-500 text-[11px] line-through">{{ formatPrice(p.discount_price) }}</div>
                                </td>
                                <td class="p-4 font-mono">
                                    <span 
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border"
                                        :class="p.stock > 5 
                                            ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                                            : p.stock > 0 
                                            ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' 
                                            : 'bg-rose-400/10 text-rose-400 border-rose-400/20'"
                                    >
                                        <span class="w-1.5 h-1.5 rounded-full" :class="p.stock > 5 ? 'bg-emerald-400' : p.stock > 0 ? 'bg-amber-400' : 'bg-rose-400'"></span>
                                        {{ p.stock }} عدد
                                    </span>
                                </td>
                                <td class="p-4 font-mono text-zinc-400 text-[11px]">{{ p.sku || '-' }}</td>
                                <td class="p-4 text-center">
                                    <button
                                        @click="openEdit(p)"
                                        class="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"
                                    >
                                        <Edit3 class="w-3.5 h-3.5 text-zinc-400" />
                                        <span>ویرایش</span>
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="!products.data || products.data.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    کالایی در فروشگاه تعریف نگردیده است.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination
                    :links="products.links"
                    :from="products.from"
                    :to="products.to"
                    :total="products.total"
                />
            </div>

            <!-- nk-modal / Product Create/Edit Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in">
                <div class="w-full max-w-xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8 relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <Package class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">{{ editingProduct ? 'ویرایش اطلاعات کالا' : 'تعریف کالای جدید در فروشگاه' }}</h3>
                        </div>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitProduct" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">عنوان کالا</label>
                            <input v-model="form.title" type="text" placeholder="مثلاً: پروتئین وی ۱۰۰٪ ایزوله ۲ کیلوگرمی" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required />
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">دسته‌بندی</label>
                                <select v-model="form.category_id" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required>
                                    <option value="" disabled>انتخاب دسته...</option>
                                    <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">بارکد انبار (SKU)</label>
                                <input v-model="form.sku" type="text" placeholder="WHEY-2KG-01" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">قیمت فروش (تومان)</label>
                                <input v-model.number="form.price" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">موجودی در انبار</label>
                                <input v-model.number="form.stock" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">توضیحات و مشخصات کالا</label>
                            <textarea v-model="form.description" rows="3" placeholder="ترکیبات، طعم، طریقه مصرف..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer">انصراف</button>
                            <button 
                                type="submit" 
                                :disabled="form.processing"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
                            >
                                <span v-if="form.processing">در حال ثبت...</span>
                                <span v-else>ذخیره کالا</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
