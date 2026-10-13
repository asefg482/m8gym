<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { ShoppingBag, Search, Tag, Eye } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    products: Object,
    categories: Array,
    currentCategory: [String, Number],
});

const search = ref('');

function filterCategory(catId) {
    router.get('/shop', { category: catId, search: search.value }, { preserveState: true });
}

function handleSearch() {
    router.get('/shop', { category: props.currentCategory, search: search.value }, { preserveState: true });
}
</script>

<template>
    <PublicLayout>
        <Head title="فروشگاه مکمل و تجهیزات ورزشی M8 | ساری" />

        <!-- Header Banner -->
        <section class="relative bg-zinc-950 border-b border-zinc-800/80 py-14 sm:py-20 overflow-hidden mb-8">
            <div class="absolute inset-0 z-0">
                <img
                    src="/images/gym/m8_hero_training.jpg"
                    alt="فروشگاه تجهیزات M8"
                    class="w-full h-full object-cover opacity-20"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
                <div class="absolute -top-24 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <span class="inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/30 mb-3">
                            فروشگاه اختصاصی و مکمل اورجینال M8
                        </span>
                        <h1 class="text-3xl sm:text-5xl font-black text-white">مکمل‌های اصل و لوازم تخصصی تمرین</h1>
                        <p class="text-xs sm:text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
                            تضمین اصالت کالا، معتبرترین برندهای پروتئین وی، کراتین، آمینو، شیکرها و کمربندهای حرفه‌ای بدنسازی.
                        </p>
                    </div>

                    <!-- Search Input -->
                    <div class="relative w-full md:w-80 shrink-0">
                        <input
                            v-model="search"
                            @keyup.enter="handleSearch"
                            type="text"
                            placeholder="جستجوی مکمل، شیکر، کمربند..."
                            class="w-full h-12 bg-zinc-900/90 border border-zinc-700/80 rounded-2xl pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 backdrop-blur-md"
                        />
                        <button @click="handleSearch" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white">
                            <Search class="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

            <!-- Categories pills -->
            <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
                <button
                    @click="filterCategory(null)"
                    class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer"
                    :class="!currentCategory ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'"
                >
                    همه محصولات
                </button>
                <button
                    v-for="cat in categories"
                    :key="cat.id"
                    @click="filterCategory(cat.id)"
                    class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer"
                    :class="currentCategory == cat.id ? 'bg-lime-400 text-black shadow-md shadow-lime-400/20' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'"
                >
                    {{ cat.title }}
                </button>
            </div>

            <!-- Products Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    v-for="product in products.data"
                    :key="product.id"
                    class="rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-5 flex flex-col justify-between group hover:border-lime-400/40 transition-all"
                >
                    <div>
                        <div class="h-48 rounded-2xl overflow-hidden bg-zinc-950 mb-4 relative">
                            <img
                                :src="product.images?.[0] || 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80'"
                                :alt="product.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span v-if="product.stock <= 5 && product.stock > 0" class="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-md bg-amber-500/80 text-black">
                                تنها {{ product.stock }} عدد مانده
                            </span>
                        </div>

                        <span class="text-[10px] text-zinc-500 font-medium">{{ product.category?.title }}</span>
                        <h3 class="text-xs font-bold text-white mt-1 line-clamp-2">{{ product.title }}</h3>
                        <p class="text-[11px] text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
                            {{ product.description }}
                        </p>
                    </div>

                    <div class="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
                        <div>
                            <div class="text-sm font-bold text-white font-mono">
                                {{ formatPrice(product.effective_price) }}
                            </div>
                            <div v-if="product.discount_price" class="text-[10px] text-zinc-500 line-through font-mono">
                                {{ formatPrice(product.price) }}
                            </div>
                        </div>

                        <Link
                            :href="'/shop/' + product.slug"
                            class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors"
                        >
                            <Eye class="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="products.data.length === 0" class="p-16 text-center text-zinc-500">
                محصولی در این دسته‌بندی یافت نشد.
            </div>
        </div>
    </PublicLayout>
</template>
