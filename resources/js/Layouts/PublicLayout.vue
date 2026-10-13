<script setup>
import Navbar from '@/Components/Navbar.vue';
import Footer from '@/Components/Footer.vue';
import BottomNav from '@/Components/BottomNav.vue';
import FlashMessage from '@/Components/FlashMessage.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-lime-400 selection:text-black">
        <FlashMessage />
        <Navbar />

        <main class="flex-1">
            <slot />
        </main>

        <Footer />
        <BottomNav />
    </div>
</template>
