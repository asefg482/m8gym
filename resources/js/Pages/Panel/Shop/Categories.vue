<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Tags, Plus, FolderTree } from '@lucide/vue';

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
        <Head title="دسته‌بندی‌های فروشگاه - Dashlite" />

        <div class="space-y-6 max-w-2xl">
            <!-- nk-block-head -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Tags class="w-4 h-4" />
                        <span>طبقه‌بندی محصولات انبار</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">دسته‌بندی‌های فروشگاه M8</h1>
                    <p class="text-xs text-zinc-400 mt-1">تعریف گروه‌های مکمل‌ها، پوشاک و لوازم ورزشی تخصصی</p>
                </div>
            </div>

            <!-- nk-card / Add Form -->
            <form @submit.prevent="addCategory" class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex gap-3 items-center">
                <input
                    v-model="form.title"
                    type="text"
                    placeholder="عنوان دسته جدید (مثلاً: پروتئین و کراتین، پوشاک بدنسازی)..."
                    class="flex-1 h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                    required
                />
                <button 
                    type="submit" 
                    :disabled="form.processing || !form.title"
                    class="h-11 px-5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all shrink-0"
                >
                    <Plus class="w-4 h-4 stroke-[2.5]" />
                    <span>افزودن</span>
                </button>
            </form>

            <!-- nk-card / List -->
            <div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden">
                <div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <FolderTree class="w-4 h-4 text-lime-400" />
                        <span>دسته‌های تعریف‌شده</span>
                    </h2>
                    <span class="text-[11px] text-zinc-400">{{ categories.length }} دسته</span>
                </div>

                <div class="divide-y divide-zinc-800/50 text-xs">
                    <div
                        v-for="c in categories"
                        :key="c.id"
                        class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
                    >
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-lg bg-zinc-800 text-lime-400 flex items-center justify-center font-bold text-xs shrink-0">
                                <Tags class="w-4 h-4" />
                            </div>
                            <span class="font-bold text-white text-xs sm:text-sm">{{ c.title }}</span>
                        </div>
                        <span class="px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 font-mono text-[11px]">
                            {{ c.products_count || 0 }} محصول
                        </span>
                    </div>

                    <div v-if="!categories || categories.length === 0" class="p-12 text-center text-zinc-500 text-xs">
                        هنوز دسته‌ای تعریف نشده است.
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
