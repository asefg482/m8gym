<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Users, UserPlus, Phone, X } from '@lucide/vue';
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
        <Head title="شاگردان من" />

        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Users class="w-6 h-6 text-lime-400" />
                        <span>مدیریت شاگردان من</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">مشاهده وضعیت اشتراک، مشخصات و افزودن شاگرد جدید</p>
                </div>

                <button
                    @click="isModalOpen = true"
                    class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                    <UserPlus class="w-4 h-4" />
                    <span>افزودن شاگرد</span>
                </button>
            </div>

            <!-- Students Table -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table class="w-full text-right text-xs">
                    <thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800">
                        <tr>
                            <th class="p-4 font-bold text-white">نام شاگرد</th>
                            <th class="p-4 font-bold">شماره تماس</th>
                            <th class="p-4 font-bold">قد و وزن</th>
                            <th class="p-4 font-bold">وضعیت اشتراک</th>
                            <th class="p-4 font-bold">تاریخ شروع</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-zinc-800/60">
                        <tr v-for="st in students.data" :key="st.id" class="hover:bg-zinc-800/20">
                            <td class="p-4 font-bold text-white">{{ st.student?.full_name }}</td>
                            <td class="p-4 font-mono text-lime-400" dir="ltr">
                                <a :href="'tel:' + st.student?.mobile" class="hover:underline">{{ st.student?.mobile }}</a>
                            </td>
                            <td class="p-4 text-zinc-300 font-mono">
                                {{ st.student?.member_profile?.height ? `${st.student.member_profile.height} cm` : '-' }} /
                                {{ st.student?.member_profile?.weight ? `${st.student.member_profile.weight} kg` : '-' }}
                            </td>
                            <td class="p-4">
                                <span v-if="st.student?.active_membership" class="text-lime-400 font-bold text-[11px]">
                                    {{ st.student.active_membership.plan?.title }} (فعال)
                                </span>
                                <span v-else class="text-amber-400 text-[11px]">
                                    نیاز به تمدید
                                </span>
                            </td>
                            <td class="p-4 text-zinc-400 font-mono">{{ formatJalaliDate(st.started_at) }}</td>
                        </tr>
                    </tbody>
                </table>

                <div v-if="students.data.length === 0" class="p-16 text-center text-xs text-zinc-500">
                    شاگردی ثبت نشده است.
                </div>
            </div>

            <!-- Modal -->
            <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                <div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
                    <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
                        <h3 class="text-sm font-bold text-white">انتخاب ورزشکار به عنوان شاگرد</h3>
                        <button @click="isModalOpen = false" class="text-zinc-400 hover:text-white"><X class="w-5 h-5" /></button>
                    </div>

                    <form @submit.prevent="addStudent" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-zinc-300 mb-1">انتخاب عضو باشگاه</label>
                            <select v-model="form.member_id" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required>
                                <option value="" disabled>انتخاب کنید...</option>
                                <option v-for="m in allMembers" :key="m.id" :value="m.id">
                                    {{ m.full_name }} ({{ m.mobile }})
                                </option>
                            </select>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                            <button @click="isModalOpen = false" type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400">انصراف</button>
                            <button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold">افزودن</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
