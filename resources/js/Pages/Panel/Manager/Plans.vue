<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { CreditCard, Plus, Edit, CheckCircle, X } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    plans: Array,
});

const isModalOpen = ref(false);
const editingPlan = ref(null);

const form = useForm({
    title: '',
    duration_days: 30,
    sessions_limit: '',
    price: 1500000,
    benefits: ['دسترسی به تمامی تجهیزات', 'استفاده از کمد اختصاصی'],
    is_active: true,
});

function openCreate() {
    editingPlan.value = null;
    form.reset();
    isModalOpen.value = true;
}

function openEdit(plan) {
    editingPlan.value = plan;
    form.title = plan.title;
    form.duration_days = plan.duration_days;
    form.sessions_limit = plan.sessions_limit || '';
    form.price = plan.price;
    form.benefits = plan.benefits || [];
    form.is_active = Boolean(plan.is_active);
    isModalOpen.value = true;
}

function submitForm() {
    if (editingPlan.value) {
        form.put(`/panel/manager/plans/${editingPlan.value.id}`, {
            onSuccess: () => isModalOpen.value = false,
        });
    } else {
        form.post('/panel/manager/plans', {
            onSuccess: () => isModalOpen.value = false,
        });
    }
}
</script>

<template>
    <PanelLayout>
        <Head title="تعریف پلن‌های عضویت" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <CreditCard class="w-6 h-6 text-lime-400" />
                        <span>تعریف و مدیریت پلن‌های عضویت</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مدت زمان، شهریه، تعداد جلسات و امکانات هر دوره اشتراک</p>
                </div>

                <button
                    @click="openCreate"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                    <Plus class="w-4 h-4" />
                    <span>پلن جدید</span>
                </button>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
                >
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-base font-bold text-white">{{ plan.title }}</h3>
                            <span class="text-xs font-bold text-lime-400 font-mono">{{ plan.duration_days }} روز</span>
                        </div>

                        <div class="text-xl font-black text-white font-mono mb-4">
                            {{ formatPrice(plan.price) }}
                        </div>

                        <ul class="space-y-2 text-xs text-zinc-400 mb-6">
                            <li v-for="(b, i) in plan.benefits || []" :key="i" class="flex items-start gap-2">
                                <CheckCircle class="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                                <span>{{ b }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                        <span class="text-zinc-500 font-mono">{{ plan.memberships_count }} عضو ثبت‌شده</span>
                        <button @click="openEdit(plan)" class="text-lime-400 font-bold hover:underline cursor-pointer">
                            ویرایش پلن
                        </button>
                    </div>
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">{{ editingPlan ? 'ویرایش پلن' : 'پلن عضویت جدید' }}</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">عنوان پلن</label>
                            <input v-model="form.title" type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">مدت (روز)</label>
                                <input v-model.number="form.duration_days" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">شهریه (تومان)</label>
                                <input v-model.number="form.price" type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                            </div>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ذخیره پلن</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
