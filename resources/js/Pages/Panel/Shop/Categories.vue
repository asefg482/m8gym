<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Tags, Plus } from '@lucide/vue';

const props = defineProps({
    categories: Array,
});

const form = useForm({
    title: '',
});

function addCategory() {
    form.post('/panel/shop/categories', {
        onSuccess: () => form.reset(),
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="دسته‌بندی‌های فروشگاه" />

        <div class="space-y-6 max-w-2xl">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Tags class="w-6 h-6 text-lime-400" />
                    <span>دسته‌بندی‌های کالا در فروشگاه</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">تعریف گروه‌های مکمل‌ها، پوشاک و لوازم ورزشی M8</p>
            </div>

            <!-- Form -->
            <form @submit.prevent="addCategory" class="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-3">
                <input
                    v-model="form.title"
                    type="text"
                    placeholder="عنوان دسته‌بندی جدید (مثلاً: ساک و کوله ورزشی)..."
                    class="flex-1 h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
                    required
                />
                <button type="submit" class="px-5 rounded-xl bg-lime-400 text-black text-xs font-bold cursor-pointer">
                    افزودن
                </button>
            </form>

            <!-- List -->
            <div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                <div class="divide-y divide-zinc-800/60 text-xs">
                    <div
                        v-for="c in categories"
                        :key="c.id"
                        class="p-4 flex items-center justify-between"
                    >
                        <span class="font-bold text-white">{{ c.title }}</span>
                        <span class="text-zinc-500 font-mono">{{ c.products_count }} کالا</span>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
