<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { 
    Users, 
    UserPlus, 
    Phone, 
    X, 
    CheckCircle2, 
    AlertTriangle,
    Activity,
    Calendar,
    ChevronLeft
} from '@lucide/vue';
import { formatJalaliDate } from '@/Utils/formatters';

const props = defineProps({
    students: Object,
    allMembers: Array,
});

const isModalOpen = ref(false);

const form = useForm({
    member_id: '',
});

function addStudent() {
    form.post('/panel/trainer/students', {
        onSuccess: () => {
            isModalOpen.value = false;
            form.reset();
        },
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="شاگردان من - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Users class="w-4 h-4" />
                        <span>شاگردان و ورزشکاران تحت مربیگری</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">مدیریت شاگردان من</h1>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده مشخصات فیزیکی، وضعیت اعتبار اشتراک باشگاه و انتساب شاگرد جدید</p>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        @click="isModalOpen = true"
                        class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <UserPlus class="w-4 h-4 stroke-[2.5]" />
                        <span>افزودن شاگرد جدید</span>
                    </button>
                </div>
            </div>

            <!-- nk-card / Students Table -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Users class="w-4 h-4 text-lime-400" />
                        <span>لیست شاگردان فعال و سوابق شروع دوره</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">مجموع: <b class="font-mono text-lime-400">{{ students.total || students.data?.length || 0 }}</b> نفر</span>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-right text-xs">
                        <thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60">
                            <tr>
                                <th class="p-4 font-bold text-white">نام و نام خانوادگی شاگرد</th>
                                <th class="p-4 font-bold">شماره تماس مستقیم</th>
                                <th class="p-4 font-bold">قد و وزن کنونی</th>
                                <th class="p-4 font-bold">وضعیت اشتراک</th>
                                <th class="p-4 font-bold">تاریخ شروع دوره</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/50">
                            <tr v-for="st in students.data" :key="st.id" class="hover:bg-zinc-800/30 transition-colors">
                                <td class="p-4 font-bold text-white flex items-center gap-2.5">
                                    <div class="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0">
                                        {{ st.student?.first_name ? st.student.first_name.charAt(0) : 'S' }}
                                    </div>
                                    <span>{{ st.student?.full_name || 'کاربر بدون نام' }}</span>
                                </td>
                                <td class="p-4 font-mono text-lime-400" dir="ltr">
                                    <a :href="'tel:' + st.student?.mobile" class="hover:underline flex items-center gap-1">
                                        <Phone class="w-3.5 h-3.5 text-zinc-500 inline" />
                                        <span>{{ st.student?.mobile }}</span>
                                    </a>
                                </td>
                                <td class="p-4 font-mono text-zinc-300">
                                    <span v-if="st.student?.member_profile?.height || st.student?.member_profile?.weight">
                                        {{ st.student?.member_profile?.height ? `${st.student.member_profile.height} cm` : '-' }} /
                                        {{ st.student?.member_profile?.weight ? `${st.student.member_profile.weight} kg` : '-' }}
                                    </span>
                                    <span v-else class="text-zinc-600 font-sans text-[11px]">ثبت نشده</span>
                                </td>
                                <td class="p-4">
                                    <span 
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"
                                        :class="st.student?.active_membership 
                                            ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' 
                                            : 'bg-amber-400/10 text-amber-400 border-amber-400/20'"
                                    >
                                        <span class="w-1.5 h-1.5 rounded-full" :class="st.student?.active_membership ? 'bg-emerald-400' : 'bg-amber-400'"></span>
                                        {{ st.student?.active_membership ? `${st.student.active_membership.plan?.title} (فعال)` : 'نیازمند تمدید اشتراک' }}
                                    </span>
                                </td>
                                <td class="p-4 text-zinc-400 font-mono">{{ formatJalaliDate(st.started_at) }}</td>
                            </tr>
                            <tr v-if="!students.data || students.data.length === 0">
                                <td colspan="5" class="p-12 text-center text-zinc-500 text-xs">
                                    هنوز شاگردی برای شما ثبت نگردیده است.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination
                    :links="students.links"
                    :from="students.from"
                    :to="students.to"
                    :total="students.total"
                />
            </div>

            <!-- nk-modal / Add Student Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
                <div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl relative">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold">
                                <UserPlus class="w-4 h-4" />
                            </div>
                            <h3 class="text-sm font-bold text-white">انتخاب ورزشکار به عنوان شاگرد</h3>
                        </div>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                            <X class="w-5 h-5" />
                        </button>
                    </div>

                    <form @submit.prevent="addStudent" class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">انتخاب از اعضای ثبت‌شده باشگاه</label>
                            <select v-model="form.member_id" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required>
                                <option value="" disabled>عضو مورد نظر را انتخاب فرمایید...</option>
                                <option v-for="m in allMembers" :key="m.id" :value="m.id">
                                    {{ m.full_name }} ({{ m.mobile }})
                                </option>
                            </select>
                            <span class="text-[11px] text-zinc-500 mt-1 block">پس از ثبت، ورزشکار به پنل مربیگری شما الصاق می‌گردد.</span>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer">انصراف</button>
                            <button 
                                type="submit" 
                                :disabled="form.processing || !form.member_id"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
                            >
                                <span v-if="form.processing">در حال ثبت...</span>
                                <span v-else>افزودن به شاگردان</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
