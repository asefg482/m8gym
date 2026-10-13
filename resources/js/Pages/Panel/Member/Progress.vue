<script setup>
import { ref, computed } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Activity, Plus, TrendingDown, TrendingUp, X, Scale, Flame, FileText } from '@lucide/vue';
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

const latestLog = computed(() => {
    return props.logs && props.logs.length > 0 ? props.logs[0] : null;
});
</script>

<template>
    <PanelLayout>
        <Head title="روند تغییرات و پایش بدنی - M8 FIT CLUB" />

        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <!-- Dashlite Block Head (nk-block-head) -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                        <Activity class="w-6 h-6 text-lime-400" />
                        <span>روند تغییرات و پایش پیشرفت بدنی</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">
                        ثبت دوره‌ای وزن، درصد چربی و بررسی نمودار پیشرفت فیت‌نس در باشگاه M8
                    </p>
                </div>

                <button
                    @click="isModalOpen = true"
                    type="button"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-md shadow-lime-400/20 transition-all cursor-pointer shrink-0"
                >
                    <Plus class="w-4 h-4" />
                    <span>ثبت رکورد وزن جدید</span>
                </button>
            </div>

            <!-- Dashlite Vitals Cards if logs exist -->
            <div v-if="latestLog" class="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                        <Scale class="w-6 h-6" />
                    </div>
                    <div>
                        <span class="text-xs font-bold text-zinc-400 block">آخرین وزن ثبت‌شده:</span>
                        <div class="text-2xl font-black text-white font-mono mt-0.5">
                            {{ latestLog.weight }} <span class="text-xs font-normal text-zinc-400">کیلوگرم</span>
                        </div>
                        <span class="text-[10px] text-zinc-500 font-mono mt-0.5 block">ثبت: {{ formatJalaliDate(latestLog.date) }}</span>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                        <Flame class="w-6 h-6" />
                    </div>
                    <div>
                        <span class="text-xs font-bold text-zinc-400 block">درصد چربی بدنی:</span>
                        <div class="text-2xl font-black text-amber-400 font-mono mt-0.5">
                            {{ latestLog.body_fat ? `${latestLog.body_fat}%` : 'ثبت نشده' }}
                        </div>
                        <span class="text-[10px] text-zinc-500 font-mono mt-0.5 block">آنالیز بیومتریک M8</span>
                    </div>
                </div>

                <div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                        <Activity class="w-6 h-6" />
                    </div>
                    <div>
                        <span class="text-xs font-bold text-zinc-400 block">تعداد دفعات پایش:</span>
                        <div class="text-2xl font-black text-white font-mono mt-0.5">
                            {{ logs ? logs.length : 0 }} <span class="text-xs font-normal text-zinc-400">رکورد</span>
                        </div>
                        <span class="text-[10px] text-emerald-400 mt-0.5 block">● مستمر و دقیق</span>
                    </div>
                </div>
            </div>

            <!-- Dashlite Measurements Table Card -->
            <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <h2 class="text-sm font-bold text-white">تاریخچه اندازه‌گیری‌ها و رکوردها</h2>
                    <span class="text-xs text-zinc-400 font-mono">{{ logs ? logs.length : 0 }} رکورد</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="text-zinc-400 border-b border-zinc-800">
                            <tr>
                                <th class="p-3.5 font-bold">تاریخ ثبت</th>
                                <th class="p-3.5 font-bold">وزن (کیلوگرم)</th>
                                <th class="p-3.5 font-bold">درصد چربی (%)</th>
                                <th class="p-3.5 font-bold">یادداشت و وضعیت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60 font-mono">
                            <tr v-for="log in logs" :key="log.id" class="hover:bg-zinc-800/20 transition-colors">
                                <td class="p-3.5 text-zinc-300 font-sans font-bold">{{ formatJalaliDate(log.date) }}</td>
                                <td class="p-3.5 text-lime-400 font-black text-sm">{{ log.weight }} kg</td>
                                <td class="p-3.5 text-zinc-300">{{ log.body_fat ? `${log.body_fat}%` : '-' }}</td>
                                <td class="p-3.5 font-sans text-zinc-400">{{ log.note || '-' }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div v-if="!logs || logs.length === 0" class="p-16 text-center text-xs text-zinc-500 font-sans">
                        <Scale class="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                        <span class="block font-bold text-white text-sm">هنوز رکوردی ثبت نشده است</span>
                        <span class="text-zinc-400 block mt-1">با کلیک بر روی دکمه «ثبت رکورد وزن جدید» اولین وزن خود را ثبت نمایید.</span>
                    </div>
                </div>
            </div>

            <!-- Dashlite Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
                <div class="w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-7 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <Scale class="w-5 h-5 text-lime-400" />
                            <h3 class="text-sm font-bold text-white">ثبت شاخص‌های بدنی جدید</h3>
                        </div>
                        <button @click="isModalOpen = false" class="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitLog" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">تاریخ اندازه‌گیری</label>
                            <input v-model="form.date" type="date" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400" required />
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">وزن (کیلوگرم)</label>
                                <input v-model="form.weight" type="number" step="0.1" placeholder="۷۸.۵" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">درصد چربی (اختیاری)</label>
                                <input v-model="form.body_fat" type="number" step="0.1" placeholder="۱۴.۲" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400" />
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">یادداشت شرایط (اختیاری)</label>
                            <textarea v-model="form.note" rows="2" placeholder="ناشتا، بعد از تمرین، تغییر رژیم..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-2.5">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors">انصراف</button>
                            <button type="submit" class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20">ثبت رکورد</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
