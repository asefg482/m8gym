<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { Coffee, Flame, Zap, ShoppingCart, Check, ArrowLeft } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    banners: Array,
    categories: Array,
});

const activeCategory = ref(props.categories[0]?.id || null);

function orderItem(item) {
    // Quick single item checkout
    router.post('/payment/checkout', {
        items: [{ product_id: item.id, qty: 1 }],
        scope: 'buffet',
        payment_method: 'online',
        delivery_type: 'dine_in',
    });
}
</script>

<template>
    <PublicLayout>
        <Head title="کافه و رستوران رژیمی M8 | ساری" />

        <!-- Banner Header -->
        <section class="relative bg-zinc-950 border-b border-zinc-800/80 py-16 sm:py-24 overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img
                    src="/images/gym/cafe_smoothie_clean.jpg"
                    alt="کافه بار پروتئینی M8"
                    class="w-full h-full object-cover opacity-25"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
                <div class="absolute -top-24 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="max-w-3xl">
                    <span class="inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/30 mb-3">
                        کافه سلامت و بار پروتئینی M8
                    </span>
                    <h1 class="text-3xl sm:text-5xl font-black text-white">تغذیه سالم، سوخت عضله‌سازی شما</h1>
                    <p class="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
                        انواع شیک‌های پروتئینی، سالادهای غنی، وعده‌های رژیمی گریل و قهوه‌های تخصصی پیش از تمرین.
                    </p>
                    <div class="mt-4 p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs inline-flex items-center gap-2">
                        <Flame class="w-4 h-4" />
                        <span>اعضای ویژه VIP از ۲۰٪ تخفیف اختصاصی در کلیه سفارش‌های کافه برخوردارند.</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Categories & Menu Items -->
        <section class="py-12 bg-zinc-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Category Tabs -->
                <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-zinc-900">
                    <button
                        v-for="cat in categories"
                        :key="cat.id"
                        @click="activeCategory = cat.id"
                        class="px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer"
                        :class="activeCategory === cat.id ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'"
                    >
                        {{ cat.title }}
                    </button>
                </div>

                <!-- Items Grid -->
                <div v-for="cat in categories" :key="cat.id">
                    <div v-show="activeCategory === cat.id" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div
                            v-for="item in cat.products"
                            :key="item.id"
                            class="p-5 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-lime-400/40 transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div class="h-44 rounded-2xl overflow-hidden mb-4 bg-zinc-950">
                                    <img
                                        :src="item.images?.[0] || '/images/gym/cafe_smoothie_clean.jpg'"
                                        :alt="item.title"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div class="flex items-start justify-between gap-2 mb-2">
                                    <h3 class="text-sm font-bold text-white">{{ item.title }}</h3>
                                    <span v-if="item.discount_price" class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
                                        تخفیف
                                    </span>
                                </div>
                                <p class="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
                                    {{ item.description }}
                                </p>

                                <!-- Nutritional Badge -->
                                <div v-if="item.nutritional_info" class="flex flex-wrap gap-2 mb-4 text-[11px] text-zinc-400">
                                    <span v-if="item.nutritional_info.protein" class="px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-lime-400 font-mono">
                                        پروتئین: {{ item.nutritional_info.protein }}
                                    </span>
                                    <span v-if="item.nutritional_info.calories" class="px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 font-mono">
                                        کالری: {{ item.nutritional_info.calories }}
                                    </span>
                                </div>
                            </div>

                            <div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                                <div class="text-sm font-bold text-white font-mono">
                                    {{ formatPrice(item.effective_price) }}
                                </div>

                                <button
                                    @click="orderItem(item)"
                                    type="button"
                                    class="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                                >
                                    <ShoppingCart class="w-3.5 h-3.5" />
                                    <span>سفارش فوری</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </PublicLayout>
</template>
