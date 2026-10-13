<script setup>
import { ref, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { CheckCircle2, AlertCircle, Info, X } from '@lucide/vue';

const page = usePage();
const visible = ref(true);

watch(
    () => page.props.flash,
    (flash) => {
        if (flash?.success || flash?.error || flash?.info) {
            visible.value = true;
            setTimeout(() => {
                visible.value = false;
            }, 6000);
        }
    },
    { deep: true, immediate: true }
);
</script>

<template>
    <div
        v-if="visible && (page.props.flash?.success || page.props.flash?.error || page.props.flash?.info)"
        class="fixed top-24 left-4 right-4 sm:right-auto sm:left-6 z-50 max-w-md w-full animate-in slide-in-from-top-4 duration-300 pointer-events-auto"
    >
        <!-- Success Alert -->
        <div
            v-if="page.props.flash?.success"
            class="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/95 border border-lime-400/40 text-lime-400 shadow-2xl backdrop-blur-xl"
        >
            <div class="flex items-center gap-3">
                <CheckCircle2 class="w-5 h-5 shrink-0 text-lime-400" />
                <span class="text-xs font-semibold text-zinc-100">{{ page.props.flash.success }}</span>
            </div>
            <button @click="visible = false" class="p-1 hover:text-white cursor-pointer">
                <X class="w-4 h-4" />
            </button>
        </div>

        <!-- Error Alert -->
        <div
            v-else-if="page.props.flash?.error"
            class="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/95 border border-red-500/40 text-red-400 shadow-2xl backdrop-blur-xl"
        >
            <div class="flex items-center gap-3">
                <AlertCircle class="w-5 h-5 shrink-0 text-red-400" />
                <span class="text-xs font-semibold text-zinc-100">{{ page.props.flash.error }}</span>
            </div>
            <button @click="visible = false" class="p-1 hover:text-white cursor-pointer">
                <X class="w-4 h-4" />
            </button>
        </div>

        <!-- Info Alert -->
        <div
            v-else-if="page.props.flash?.info"
            class="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/95 border border-cyan-500/40 text-cyan-400 shadow-2xl backdrop-blur-xl"
        >
            <div class="flex items-center gap-3">
                <Info class="w-5 h-5 shrink-0 text-cyan-400" />
                <span class="text-xs font-semibold text-zinc-100">{{ page.props.flash.info }}</span>
            </div>
            <button @click="visible = false" class="p-1 hover:text-white cursor-pointer">
                <X class="w-4 h-4" />
            </button>
        </div>
    </div>
</template>
