<script setup>
import { Link } from '@inertiajs/vue3';
import { ChevronRight, ChevronLeft } from '@lucide/vue';

const props = defineProps({
    links: {
        type: Array,
        default: () => [],
    },
    from: Number,
    to: Number,
    total: Number,
});

function formatLabel(label) {
    if (label.includes('&laquo;') || label.includes('Previous')) {
        return 'قبلی';
    }
    if (label.includes('&raquo;') || label.includes('Next')) {
        return 'بعدی';
    }
    return label;
}
</script>

<template>
    <div v-if="links && links.length > 3" class="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div class="text-slate-500 text-[11px]">
            <span v-if="total !== undefined && from !== undefined && to !== undefined">
                نمایش ردیف <span class="font-mono font-bold text-slate-800">{{ from }}</span> تا <span class="font-mono font-bold text-slate-800">{{ to }}</span> از کل <span class="font-mono font-bold text-lime-700">{{ total }}</span> رکورد
            </span>
            <span v-else>
                صفحات نتایج
            </span>
        </div>

        <nav class="flex items-center gap-1.5 flex-wrap justify-center">
            <template v-for="(link, key) in links" :key="key">
                <span
                    v-if="!link.url"
                    class="px-3 py-1.5 rounded-lg text-[11px] text-slate-400 border border-slate-200 bg-slate-50 cursor-not-allowed select-none"
                    v-html="formatLabel(link.label)"
                />
                <Link
                    v-else
                    :href="link.url"
                    class="px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all"
                    :class="[
                        link.active
                            ? 'bg-lime-400 text-black shadow-xs'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900'
                    ]"
                    v-html="formatLabel(link.label)"
                />
            </template>
        </nav>
    </div>
</template>
