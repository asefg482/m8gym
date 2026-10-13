<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    CreditCard, 
    Plus, 
    Edit3, 
    CheckCircle2, 
    X, 
    Calendar,
    Users,
    Sparkles
} from '@lucide/vue';
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
    benefits: ['دسترسی کامل به تمامی تجهیزات و سالن', 'کمد اختصاصی و دوش آب گرم'],
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
        <Head title="تعریف پلن‌های عضویت - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <CreditCard class="w-4 h-4" />
                        <span>شهریه‌ها و تعرفه‌های عضویت</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">تعریف و مدیریت پلن‌های عضویت</h1>
                    <p class="text-xs text-zinc-400 mt-1">تنظیم مدت دوره، شهریه اشتراک، سقف جلسات و امکانات اختصاصی هر بسته ورزشی</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="openCreate"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus class="w-4 h-4 stroke-[2.5]" />
                        <span>تعریف پلن جدید</span>
                    </button>
                </div>
            </div>

            <!-- nk-block / Plans Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex flex-col justify-between hover:border-zinc-700/80 transition-all relative overflow-hidden group"
                >
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-base font-bold text-white">{{ plan.title }}</h3>
                            <span class="px-2.5 py-1 rounded-full text-xs font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 font-mono">
                                {{ plan.duration_days }} روزه
                            </span>
                        </div>

                        <div class="text-2xl font-black text-white font-mono mb-4">
                            {{ formatPrice(plan.price) }}
                        </div>

                        <ul class="space-y-2 text-xs text-zinc-400 mb-6">
                            <li v-for="(b, i) in plan.benefits || []" :key="i" class="flex items-start gap-2">
                                <CheckCircle2 class="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                                <span>{{ b }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                        <span class="text-zinc-500 font-mono flex items-center gap-1.5">
                            <Users class="w-3.5 h-3.5 text-zinc-600 inline" />
                            <span>{{ plan.memberships_count || 0 }} عضو فعال</span>
                        </span>
                        <button 
                            @click="openEdit(plan)" 
                            class="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"
                        >
                            <Edit3 class="w-3.5 h-3.5 text-zinc-400" />
                            <span>ویرایش پلن</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- nk-modal / Plan Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
                <div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <CreditCard class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">{{ editingPlan ? 'ویرایش پلن عضویت' : 'تعریف پلن عضویت جدید' }}</h3>
                        </div>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">عنوان پلن</label>
                            <input v-model="form.title" type="text" placeholder="مثلاً: اشتراک طلایی ۳ ماهه VIP" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required />
                        </div>

                        <div class="grid grid-cols-2 gap-3.5">
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">مدت دوره (روز)</label>
                                <input v-model.number="form.duration_days" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">شهریه (تومان)</label>
                                <input v-model.number="form.price" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
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
                                <span v-else>ذخیره پلن</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
