<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    Dumbbell, 
    Plus, 
    Trash2, 
    X, 
    Check, 
    Calendar, 
    User as UserIcon,
    FileText,
    Apple,
    Layers
} from '@lucide/vue';
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
        day: 'جلسه تمرینی',
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
        <Head title="برنامه‌های تمرینی و تغذیه - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Dumbbell class="w-4 h-4" />
                        <span>سیستم طراحی تمرین و رژیم</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">طراحی و تدوین برنامه‌های تمرین و تغذیه</h1>
                    <p class="text-xs text-zinc-400 mt-1">ساخت، زمان‌بندی و انتشار اختصاصی برنامه‌های تمرینی و مکمل در پنل ورزشی شاگردان</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="isModalOpen = true"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Plus class="w-4 h-4 stroke-[2.5]" />
                        <span>طراحی برنامه جدید</span>
                    </button>
                </div>
            </div>

            <!-- nk-card / Plans Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Layers class="w-4 h-4 text-lime-400" />
                        <span>برنامه‌های صادرشده و وضعیت اجرا</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">مجموع: <b class="font-mono text-lime-400">{{ plans.total || plans.data?.length || 0 }}</b> برنامه</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">عنوان برنامه</th>
                                <th class="p-4 font-bold">شاگرد مخاطب</th>
                                <th class="p-4 font-bold">نوع برنامه</th>
                                <th class="p-4 font-bold">تعداد حرکات</th>
                                <th class="p-4 font-bold">بازه اعتبار</th>
                                <th class="p-4 font-bold text-center">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="p in plans.data" :key="p.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4">
                                    <div class="font-bold text-white text-xs sm:text-sm">{{ p.title }}</div>
                                    <div v-if="p.notes" class="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">{{ p.notes }}</div>
                                </td>
                                <td class="p-4">
                                    <div class="flex items-center gap-2">
                                        <div class="w-7 h-7 rounded-lg bg-zinc-800 text-lime-400 flex items-center justify-center font-bold text-xs shrink-0">
                                            {{ p.member?.first_name ? p.member.first_name.charAt(0) : 'S' }}
                                        </div>
                                        <span class="text-white font-medium">{{ p.member?.full_name || 'بدون نام' }}</span>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <span 
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"
                                        :class="p.type === 'workout' 
                                            ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' 
                                            : 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20'"
                                    >
                                        <Dumbbell v-if="p.type === 'workout'" class="w-3 h-3" />
                                        <Apple v-else class="w-3 h-3" />
                                        {{ p.type === 'workout' ? 'تمرین بدنسازی' : 'برنامه تغذیه و رژیم' }}
                                    </span>
                                </td>
                                <td class="p-4 font-mono text-zinc-300">{{ p.items?.length || 0 }} ایستگاه</td>
                                <td class="p-4 font-mono text-zinc-400 text-[11px]">
                                    {{ formatJalaliDate(p.starts_at) }} تا {{ formatJalaliDate(p.ends_at) }}
                                </td>
                                <td class="p-4 text-center">
                                    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20">
                                        <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                                        فعال در پنل
                                    </span>
                                </td>
                            </tr>
                            <tr v-if="!plans.data || plans.data.length === 0">
                                <td colspan="6" class="p-12 text-center text-zinc-500 text-xs">
                                    هنوز برنامه‌ای تدوین نگردیده است.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination
                    :links="plans.links"
                    :from="plans.from"
                    :to="plans.to"
                    :total="plans.total"
                />
            </div>

            <!-- nk-modal / Plan Builder Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in">
                <div class="w-full max-w-2xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8 relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <Dumbbell class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">تدوین برنامه تمرینی / رژیم جدید</h3>
                        </div>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="submitPlan" class="space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">شاگرد مخاطب</label>
                                <select v-model="form.member_id" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required>
                                    <option value="" disabled>شاگرد را انتخاب فرمایید...</option>
                                    <option v-for="s in students" :key="s.id" :value="s.id">{{ s.full_name }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-1.5">نوع برنامه</label>
                                <select v-model="form.type" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400">
                                    <option value="workout">برنامه تمرینی بدنسازی</option>
                                    <option value="diet">برنامه رژیم و تغذیه</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">عنوان دوره و هدف تمرین</label>
                            <input v-model="form.title" type="text" placeholder="مثلاً: دوره هایپرتروفی و حجم عضلانی ۴ روزه" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required />
                        </div>

                        <!-- Items Table Editor -->
                        <div class="space-y-3 pt-2">
                            <div class="flex items-center justify-between">
                                <label class="text-xs font-bold text-lime-400 flex items-center gap-1.5">
                                    <Layers class="w-3.5 h-3.5" />
                                    <span>حرکات و ایستگاه‌های تمرینی / وعده‌های غذایی:</span>
                                </label>
                                <button 
                                    @click="addItem" 
                                    type="button" 
                                    class="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lime-400 text-xs font-bold cursor-pointer transition-colors"
                                >
                                    + افزودن ردیف حرکت
                                </button>
                            </div>

                            <div class="space-y-2 max-h-60 overflow-y-auto p-2 bg-zinc-950 rounded-2xl border border-zinc-800/80">
                                <div v-for="(item, idx) in form.items" :key="idx" class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 grid grid-cols-12 gap-2 items-center">
                                    <div class="col-span-3">
                                        <input v-model="item.day" type="text" placeholder="روز / جلسه" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none focus:border-lime-400" />
                                    </div>
                                    <div class="col-span-4">
                                        <input v-model="item.title" type="text" placeholder="نام حرکت" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none focus:border-lime-400" required />
                                    </div>
                                    <div class="col-span-2">
                                        <input v-model.number="item.sets" type="number" placeholder="ست" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono focus:outline-none focus:border-lime-400" />
                                    </div>
                                    <div class="col-span-2">
                                        <input v-model="item.reps" type="text" placeholder="تکرار" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono focus:outline-none focus:border-lime-400" />
                                    </div>
                                    <div class="col-span-1 text-center">
                                        <button @click="removeItem(idx)" type="button" class="text-rose-400 hover:text-rose-300 cursor-pointer p-1">
                                            <Trash2 class="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">توضیحات و توصیه‌های کلیدی مربی</label>
                            <textarea v-model="form.notes" rows="2" placeholder="نکات مهم در اجرای حرکات، استراحت بین ست‌ها..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"></textarea>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer">انصراف</button>
                            <button 
                                type="submit" 
                                :disabled="form.processing"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
                            >
                                <span v-if="form.processing">در حال انتشار...</span>
                                <span v-else>ثبت و ارسال به پنل شاگرد</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
