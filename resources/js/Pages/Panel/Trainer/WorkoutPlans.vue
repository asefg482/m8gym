<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Dumbbell, Plus, Trash2, X, Check } from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    plans: Object,
    students: Array,
});

const isModalOpen = ref(false);

const form = useForm({
    member_id: '',
    title: '',
    type: 'workout',
    starts_at: new Date().toISOString().substring(0, 10),
    ends_at: new Date(Date.now() + 30 * 86400000).toISOString().substring(0, 10),
    notes: '',
    items: [
        { day: 'شنبه (سینه و پشت‌بازو)', title: 'پرس سینه هالتر', sets: 4, reps: '10-8-8-6', notes: 'کنترل فاز منفی' },
        { day: 'شنبه (سینه و پشت‌بازو)', title: 'بالاسینه دمبل', sets: 3, reps: '12-10-10', notes: '' },
        { day: 'یکشنبه (زیربغل و جلوبازو)', title: 'لت سیم‌کش دست باز', sets: 4, reps: '12-10-8', notes: 'کشش کامل' },
    ],
});

function addItem() {
    form.items.push({
        day: 'دوشنبه',
        title: '',
        sets: 3,
        reps: '12-10-8',
        notes: '',
    });
}

function removeItem(index) {
    if (form.items.length > 1) {
        form.items.splice(index, 1);
    }
}

function submitPlan() {
    form.post('/panel/trainer/workout_plans', {
        onSuccess: () => {
            isModalOpen.value = false;
        },
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="برنامه‌های تمرینی و تغذیه" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Dumbbell class="w-6 h-6 text-lime-400" />
                        <span>طراحی و تدوین برنامه‌های تمرین و تغذیه</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">ساخت و ارسال مستقیم برنامه به پنل شاگردان</p>
                </div>

                <button
                    @click="isModalOpen = true"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                    <Plus class="w-4 h-4" />
                    <span>برنامه جدید</span>
                </button>
            </div>

            <!-- Plans Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold text-white">عنوان برنامه</th>
                            <th class="p-4 font-bold">شاگرد</th>
                            <th class="p-4 font-bold">نوع</th>
                            <th class="p-4 font-bold">تعداد آیتم‌ها</th>
                            <th class="p-4 font-bold">بازه زمانی</th>
                            <th class="p-4 font-bold">وضعیت</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60">
                        <tr v-for="p in plans.data" :key="p.id" class="hover:bg-zinc-800/20">
                            <td class="p-4 font-bold text-white">{{ p.title }}</td>
                            <td class="p-4">{{ p.member?.full_name }}</td>
                            <td class="p-4">
                                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300">
                                    {{ p.type === 'workout' ? 'تمرین' : 'رژیم غذایی' }}
                                </span>
                            </td>
                            <td class="p-4 font-mono text-zinc-400">{{ p.items?.length || 0 }} حرکت</td>
                            <td class="p-4 font-mono text-zinc-400">{{ formatJalaliDate(p.starts_at) }} تا {{ formatJalaliDate(p.ends_at) }}</td>
                            <td class="p-4 text-lime-400 font-bold">فعال</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Plan Builder Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
                <div class="w-full max-w-2xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">تدوین برنامه تمرینی / رژیم جدید</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="submitPlan" class="space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">شاگرد مخاطب</label>
                                <select v-model="form.member_id" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required>
                                    <option value="" disabled>انتخاب شاگرد...</option>
                                    <option v-for="s in students" :key="s.id" :value="s.id">{{ s.full_name }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-zinc-300 mb-1">نوع برنامه</label>
                                <select v-model="form.type" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                                    <option value="workout">برنامه تمرینی بدنسازی</option>
                                    <option value="diet">رژیم غذایی</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">عنوان برنامه</label>
                            <input v-model="form.title" type="text" placeholder="مثلاً: دوره تفکیک و کات فشرده" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required />
                        </div>

                        <!-- Items Table Editor -->
                        <div class="space-y-2 pt-2">
                            <div class="flex items-center justify-between">
                                <label class="text-xs font-bold text-lime-400">حرکات و ایستگاه‌های تمرینی:</label>
                                <button @click="addItem" type="button" class="text-xs text-lime-400 font-bold hover:underline cursor-pointer">
                                    + افزودن حرکت
                                </button>
                            </div>

                            <div v-for="(item, idx) in form.items" :key="idx" class="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 grid grid-cols-12 gap-2 items-center">
                                <div class="col-span-3">
                                    <input v-model="item.day" type="text" placeholder="روز / جلسه" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white" />
                                </div>
                                <div class="col-span-4">
                                    <input v-model="item.title" type="text" placeholder="نام حرکت / وعده" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white" required />
                                </div>
                                <div class="col-span-2">
                                    <input v-model.number="item.sets" type="number" placeholder="ست" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono" />
                                </div>
                                <div class="col-span-2">
                                    <input v-model="item.reps" type="text" placeholder="تکرار" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono" />
                                </div>
                                <div class="col-span-1 text-center">
                                    <button @click="removeItem(idx)" type="button" class="text-red-400 hover:text-red-300 cursor-pointer">
                                        <Trash2 class="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">ثبت و ارسال به شاگرد</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
