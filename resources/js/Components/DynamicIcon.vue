<script setup>
import { computed } from 'vue';
import * as LucideIcons from '@lucide/vue';

const props = defineProps({
    name: {
        type: String,
        default: 'LayoutDashboard',
    },
    size: {
        type: [Number, String],
        default: 20,
    },
    class: {
        type: String,
        default: '',
    },
});

// Convert names like 'layout-dashboard' or 'LayoutDashboard' to PascalCase
const iconComponent = computed(() => {
    let pascal = props.name;
    if (pascal.includes('-')) {
        pascal = pascal
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');
    }
    return LucideIcons[pascal] || LucideIcons.LayoutDashboard;
});
</script>

<template>
    <component :is="iconComponent" :size="size" :class="props.class" />
</template>
