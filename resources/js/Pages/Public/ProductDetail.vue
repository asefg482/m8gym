<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { ShoppingBag, Truck, ShieldCheck, Check, ArrowRight } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    product: Object,
    related: Array,
});

const qty = ref(1);

function checkout() {
    router.post('/payment/checkout', {
        items: [{ product_id: props.product.id, qty: qty.value }],
        scope: 'shop',
        payment_method: 'online',
        delivery_type: 'delivery',
    });
}
</script>

<template>
    <PublicLayout>
        <Head :title="product.title" />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <!-- Breadcrumb -->
            <div class="flex items-center gap-2 text-xs text-zinc-500 mb-8">
                <Link href="/" class="hover:text-zinc-300">خانه</Link>
                <span>/</span>
                <Link href="/shop" class="hover:text-zinc-300">فروشگاه</Link>
                <span>/</span>
                <span class="text-zinc-300">{{ product.title }}</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <!-- Image -->
                <div class="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex items-center justify-center">
                    <img
                        :src="product.images?.[0] || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80'"
                        :alt="product.title"
                        class="max-h-96 object-contain rounded-2xl"
                    />
                </div>

                <!-- Product Details -->
                <div class="flex flex-col justify-between">
                    <div>
                        <span class="text-xs font-bold text-lime-400 uppercase tracking-widest">
                            {{ product.category?.title || 'تجهیزات M8' }}
                        </span>
                        <h1 class="text-2xl sm:text-3xl font-black text-white mt-2">{{ product.title }}</h1>

                        <div class="mt-4 flex items-baseline gap-3">
                            <span class="text-2xl font-black text-white font-mono">
                                {{ formatPrice(product.effective_price) }}
                            </span>
                            <span v-if="product.discount_price" class="text-sm text-zinc-500 line-through font-mono">
                                {{ formatPrice(product.price) }}
                            </span>
                        </div>

                        <!-- Stock Status -->
                        <div class="mt-4 flex items-center gap-2 text-xs">
                            <span class="w-2.5 h-2.5 rounded-full" :class="product.stock > 0 ? 'bg-lime-400' : 'bg-red-500'"></span>
                            <span :class="product.stock > 0 ? 'text-zinc-300' : 'text-red-400'">
                                {{ product.stock > 0 ? `موجود در انبار باشگاه (${product.stock} عدد)` : 'ناموجود' }}
                            </span>
                        </div>

                        <!-- Description -->
                        <div class="mt-6 text-xs text-zinc-400 leading-relaxed space-y-3">
                            <p>{{ product.description }}</p>
                        </div>

                        <!-- Highlights -->
                        <div class="mt-6 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-2">
                            <div class="flex items-center gap-2">
                                <Truck class="w-4 h-4 text-lime-400" />
                                <span>امکان ارسال پستی به سراسر کشور یا تحویل حضوری در باشگاه M8 ساری</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <ShieldCheck class="w-4 h-4 text-lime-400" />
                                <span>ضمانت اصالت ۱۰۰٪ کالا و تاییدیه سلامت وزارت بهداشت</span>
                            </div>
                        </div>
                    </div>

                    <!-- Buy Actions -->
                    <div class="mt-8 pt-6 border-t border-zinc-800 flex items-center gap-4">
                        <div class="flex items-center border border-zinc-800 rounded-2xl bg-zinc-900 px-3 py-2">
                            <button @click="qty > 1 && qty--" class="px-2 text-zinc-400 hover:text-white">-</button>
                            <span class="px-3 text-sm font-bold text-white font-mono">{{ qty }}</span>
                            <button @click="qty < product.stock && qty++" class="px-2 text-zinc-400 hover:text-white">+</button>
                        </div>

                        <button
                            @click="checkout"
                            :disabled="product.stock <= 0"
                            class="flex-1 h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-40"
                        >
                            <ShoppingBag class="w-4 h-4" />
                            <span>خرید مستقیم و پرداخت آنلاین</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </PublicLayout>
</template>
