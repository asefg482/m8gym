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
    <div v-if="links && links.length > 3" class="p-4 bg-zinc-950/70 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div class="text-zinc-400 text-[11px]">
            <span v-if="total !== undefined && from !== undefined && to !== undefined">
                نمایش ردیف <span class="font-mono font-bold text-white">{{ from }}</span> تا <span class="font-mono font-bold text-white">{{ to }}</span> از کل <span class="font-mono font-bold text-lime-400">{{ total }}</span> رکورد
            </span>
            <span v-else>
                صفحات نتایج
            </span>
        </div>

        <nav class="flex items-center gap-1.5 flex-wrap justify-center">
            <template v-for="(link, key) in links" :key="key">
                <span
                    v-if="!link.url"
                    class="px-3 py-1.5 rounded-lg text-[11px] text-zinc-600 border border-zinc-900 bg-zinc-950 cursor-not-allowed select-none"
                    v-html="formatLabel(link.label)"
                />
                <Link
                    v-else
                    :href="link.url"
                    class="px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all"
                    :class="[
                        link.active
                            ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20'
                            : 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:text-white'
                    ]"
                    v-html="formatLabel(link.label)"
                />
            </template>
        </nav>
    </div>
</template>
