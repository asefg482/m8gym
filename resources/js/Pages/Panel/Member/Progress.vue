<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Activity, Plus, TrendingDown, TrendingUp, X } from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    logs: Array,
});

const isModalOpen = ref(false);

const form = useForm({
    date: new Date().toISOString().substring(0, 10),
    weight: '',
    body_fat: '',
    note: '',
});

function submitLog() {
    form.post('/panel/member/progress', {
        onSuccess: () => {
            isModalOpen.value = false;
            form.reset('weight', 'body_fat', 'note');
        },
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="روند تغییرات و آنالیز بدنی" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Activity class="w-6 h-6 text-lime-400" />
                        <span>روند تغییرات و پایش پیشرفت بدنی</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">ثبت وزن، درصد چربی و اندازه‌گیری‌های دوره‌ای</p>
                </div>

                <button
                    @click="isModalOpen = true"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"
                >
                    <Plus class="w-4 h-4" />
                    <span>ثبت رکورد وزن جدید</span>
                </button>
            </div>

            <!-- Measurements Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold">تاریخ ثبت</th>
                            <th class="p-4 font-bold">وزن (کیلوگرم)</th>
                            <th class="p-4 font-bold">درصد چربی بدنی (%)</th>
                            <th class="p-4 font-bold">یادداشت</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60 font-mono">
                        <tr v-for="log in logs" :key="log.id" class="hover:bg-zinc-800/20">
                            <td class="p-4 text-zinc-300 font-sans font-bold">{{ formatJalaliDate(log.date) }}</td>
                            <td class="p-4 text-lime-400 font-bold text-sm">{{ log.weight }} kg</td>
                            <td class="p-4 text-zinc-300">{{ log.body_fat ? `${log.body_fat}%` : '-' }}</td>
                            <td class="p-4 font-sans text-zinc-400">{{ log.note || '-' }}</td>
                        </tr>
                    </tbody>
                </table>

                <div v-if="logs.length === 0" class="p-16 text-center text-xs text-zinc-500 font-sans">
                    هنوز رکوردی ثبت نشده است. با دکمه بالا اولین وزن خود را ثبت نمایید.
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">ثبت شاخص‌های بدنی جدید</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitLog" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">تاریخ</label>
                            <input v-model="form.date" type="date" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">وزن (کیلوگرم)</label>
                                <input v-model="form.weight" type="number" step="0.1" placeholder="۷۸.۵" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">درصد چربی (اختیاری)</label>
                                <input v-model="form.body_fat" type="number" step="0.1" placeholder="۱۴.۲" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">یادداشت یا تغییر شرایط</label>
                            <textarea v-model="form.note" rows="2" placeholder="ناشتا، پس از تمرین، شروع کراتین..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ثبت رکورد</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
