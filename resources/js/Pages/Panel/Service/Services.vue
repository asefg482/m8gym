<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Scissors, 
    Plus, 
    Edit3, 
    X, 
    Sparkles, 
    Clock, 
    CheckCircle2, 
    HeartHandshake
} from '@lucide/vue';
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
        <Head title="تعریف خدمات و تعرفه‌ها - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Scissors class="w-4 h-4" />
                        <span>تعرفه و کاتالوگ خدمات رفاهی</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">تعریف خدمات و تعرفه‌های اسپا و سالن</h1>
                    <p class="text-xs text-zinc-400 mt-1">مدیریت انواع ماساژهای درمانی و ورزشی، آرایشگاه اختصاصی آقایان، مدت زمان هر جلسه و نرخ تعرفه‌ها</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="openCreate"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus class="w-4 h-4 stroke-[2.5]" />
                        <span>تعریف خدمت جدید</span>
                    </button>
                </div>
            </div>

            <!-- nk-card / Services Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Scissors class="w-4 h-4 text-lime-400" />
                        <span>لیست پکیج‌ها و خدمات فعال</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">{{ services.length }} خدمت فعال</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">عنوان خدمت</th>
                                <th class="p-4 font-bold">دسته‌بندی</th>
                                <th class="p-4 font-bold">مدت زمان جلسه</th>
                                <th class="p-4 font-bold">تعرفه (تومان)</th>
                                <th class="p-4 font-bold">وضعیت ارائه</th>
                                <th class="p-4 font-bold text-center">عملیات</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="srv in services" :key="srv.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4">
                                    <div class="font-bold text-white text-xs sm:text-sm">{{ srv.title }}</div>
                                    <div v-if="srv.description" class="text-zinc-500 text-[11px] line-clamp-1 mt-0.5">{{ srv.description }}</div>
                                </td>
                                <td class="p-4">
                                    <span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold">
                                        {{ srv.category === 'massage' ? 'ماساژ و اسپا' : 'پیرایشگاه آقایان' }}
                                    </span>
                                </td>
                                <td class="p-4 font-mono text-zinc-300 flex items-center gap-1.5 mt-2">
                                    <Clock class="w-3.5 h-3.5 text-lime-400" />
                                    <span>{{ srv.duration_min }} دقیقه</span>
                                </td>
                                <td class="p-4 font-mono font-black text-lime-400 text-sm">{{ formatPrice(srv.price) }}</td>
                                <td class="p-4">
                                    <span 
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"
                                        :class="srv.is_active 
                                            ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                                            : 'bg-zinc-800 text-zinc-500 border-zinc-700'"
                                    >
                                        <span class="w-1.5 h-1.5 rounded-full" :class="srv.is_active ? 'bg-emerald-400' : 'bg-zinc-500'"></span>
                                        {{ srv.is_active ? 'فعال و قابل رزرو' : 'غیرفعال' }}
                                    </span>
                                </td>
                                <td class="p-4 text-center">
                                    <button
                                        @click="openEdit(srv)"
                                        class="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"
                                    >
                                        <Edit3 class="w-3.5 h-3.5 text-zinc-400" />
                                        <span>ویرایش</span>
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="!services || services.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    خدمتی تعریف نگردیده است.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- nk-modal / Service Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
                <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <Scissors class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">{{ editingService ? 'ویرایش تعرفه و خدمت' : 'تعریف پکیج خدماتی جدید' }}</h3>
                        </div>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitService" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">عنوان خدمت</label>
                            <input v-model="form.title" type="text" placeholder="مثلاً: ماساژ ریکاوری عضلانی دیپ تیشو (Deep Tissue)" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required />
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">دسته‌بندی</label>
                                <select v-model="form.category" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400">
                                    <option value="massage">ماساژ و اسپا ورزشی</option>
                                    <option value="barber">پیرایشگاه اختصاصی آقایان</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">مدت زمان (دقیقه)</label>
                                <input v-model.number="form.duration_min" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">تعرفه هزینه (تومان)</label>
                            <input v-model.number="form.price" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">شرح فواید و تجهیزات مورد استفاده</label>
                            <textarea v-model="form.description" rows="2" placeholder="تسکین دردهای عضلانی، بادکش، استفاده از روغن‌های گیاهی ارگانیک..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer">انصراف</button>
                            <button 
                                type="submit" 
                                :disabled="form.processing"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
                            >
                                <span v-if="form.processing">در حال ذخیره...</span>
                                <span v-else>ذخیره خدمت</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
