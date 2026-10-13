<script setup>
import { ref } from 'vue';
import { Head, useForm, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Coffee, 
    Plus, 
    Edit3, 
    Check, 
    X, 
    Flame, 
    Utensils, 
    Zap,
    CheckCircle2
} from '@lucide/vue';
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
        <Head title="منوی غذا و نوشیدنی بوفه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Coffee class="w-4 h-4" />
                        <span>منوی پروتئین و تغذیه سالم</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">مدیریت منوی غذا و نوشیدنی‌های بوفه</h1>
                    <p class="text-xs text-zinc-400 mt-1">تغییر وضعیت موجود/ناموجود با یک کلیک، قیمت‌گذاری و ثبت اطلاعات پروتئین و کالری هر آیتم</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="openCreate"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus class="w-4 h-4 stroke-[2.5]" />
                        <span>آیتم جدید در منو</span>
                    </button>
                </div>
            </div>

            <!-- nk-block / Items Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                    v-for="item in items"
                    :key="item.id"
                    class="p-5 rounded-2xl bg-zinc-900/90 border shadow-lg flex flex-col justify-between transition-all"
                    :class="item.is_active ? 'border-zinc-800/90 hover:border-zinc-700/80' : 'border-zinc-800/40 opacity-60 bg-zinc-950/40'"
                >
                    <div>
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <span class="text-[10px] text-zinc-500 font-bold uppercase block">{{ item.category?.title || 'عمومی' }}</span>
                                <h3 class="text-sm font-bold text-white mt-1">{{ item.title }}</h3>
                            </div>

                            <!-- Single Click Toggle Switcher -->
                            <button
                                @click="toggleItem(item)"
                                type="button"
                                class="px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 border"
                                :class="item.is_active 
                                    ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                                    : 'bg-zinc-800 text-zinc-500 border-zinc-700'"
                            >
                                <span class="w-1.5 h-1.5 rounded-full" :class="item.is_active ? 'bg-emerald-400' : 'bg-zinc-500'"></span>
                                <span>{{ item.is_active ? 'موجود' : 'ناموجود' }}</span>
                            </button>
                        </div>

                        <p class="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">{{ item.description }}</p>

                        <div v-if="item.nutritional_info" class="flex gap-2 text-[10px] text-zinc-400 font-mono mb-4 flex-wrap">
                            <span v-if="item.nutritional_info.protein" class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-lime-400 font-bold flex items-center gap-1">
                                <Zap class="w-3 h-3 text-lime-400 inline" />
                                پرو: {{ item.nutritional_info.protein }}
                            </span>
                            <span v-if="item.nutritional_info.calories" class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 font-bold flex items-center gap-1">
                                <Flame class="w-3 h-3 text-amber-400 inline" />
                                کالری: {{ item.nutritional_info.calories }}
                            </span>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                        <span class="text-sm font-black text-lime-400 font-mono">{{ formatPrice(item.effective_price) }}</span>
                        <button 
                            @click="openEdit(item)" 
                            class="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1"
                        >
                            <Edit3 class="w-3 h-3 text-zinc-400" />
                            <span>ویرایش</span>
                        </button>
                    </div>
                </div>

                <div v-if="!items || items.length === 0" class="col-span-full p-12 text-center text-zinc-500 text-xs rounded-2xl bg-zinc-900 border border-zinc-800">
                    آیتمی در منوی بوفه ثبت نگردیده است.
                </div>
            </div>

            <!-- nk-modal / Item Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <Coffee class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">{{ editingItem ? 'ویرایش آیتم منو' : 'آیتم جدید بوفه و کافه' }}</h3>
                        </div>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">نام غذا / نوشیدنی</label>
                            <input v-model="form.title" type="text" placeholder="مثلاً: شیک پروتئین موز کره بادام‌زمینی" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required />
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">دسته‌بندی</label>
                                <select v-model="form.category_id" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400">
                                    <option value="">انتخاب دسته‌بندی...</option>
                                    <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">قیمت (تومان)</label>
                                <input v-model.number="form.price" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">توضیحات و ترکیبات خوراکی</label>
                            <textarea v-model="form.description" rows="2" placeholder="ترکیبات اصلی، حجم، طعم..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer">انصراف</button>
                            <button 
                                type="submit" 
                                :disabled="form.processing"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
                            >
                                <span v-if="form.processing">در حال ذخیره...</span>
                                <span v-else>ذخیره آیتم</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
