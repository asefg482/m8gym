<script setup>
import { ref, computed } from 'vue';
import { Head, router, Link } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Calculator, 
    ShoppingCart, 
    Trash2, 
    CheckCircle2, 
    CreditCard, 
    Banknote, 
    Package, 
    User as UserIcon,
    Crown,
    ShoppingBag
} from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    products: Array,
    members: Array,
});

const selectedMemberId = ref('');
const cart = ref([]);
const paymentMethod = ref('pos'); // pos, cash, card_transfer

const selectedMember = computed(() => {
    return props.members.find((m) => m.id === selectedMemberId.value);
});

function addToCart(p) {
    const existing = cart.value.find((item) => item.product.id === p.id);
    if (existing) {
        if (existing.qty < p.stock) {
            existing.qty++;
        }
    } else {
        cart.value.push({ product: p, qty: 1 });
    }
}

function removeFromCart(index) {
    cart.value.splice(index, 1);
}

const subtotal = computed(() => {
    return cart.value.reduce((acc, item) => acc + (item.product.effective_price * item.qty), 0);
});

const discount = computed(() => {
    if (selectedMember.value?.member_profile?.level === 'vip') {
        return Math.round(subtotal.value * 0.15); // 15% VIP discount
    }
    return 0;
});

const total = computed(() => {
    return Math.max(0, subtotal.value - discount.value);
});

function completeSale() {
    if (cart.value.length === 0) return;

    router.post('/payment/checkout', {
        items: cart.value.map(item => ({ product_id: item.product.id, qty: item.qty })),
        scope: 'shop',
        payment_method: paymentMethod.value,
        delivery_type: 'pickup',
    }, {
        onSuccess: () => {
            cart.value = [];
        },
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="صندوق فروش حضوری (POS) - Dashlite" />

        <div class="space-y-6">
            <!-- nk-block-head -->
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Calculator class="w-4 h-4" />
                        <span>سیستم پایانه فروشگاهی پیشرفته M8</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">صندوق فروش حضوری (POS فروشگاه)</h1>
                    <p class="text-xs text-zinc-400 mt-1">فروش سریع اقلام به اعضا و مشتریان گذری، محاسبه خودکار تخفیف اعضای VIP و تسویه آنی</p>
                </div>

                <div class="flex items-center gap-3">
                    <Link
                        href="/panel/shop/orders"
                        class="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-bold transition-colors flex items-center gap-2"
                    >
                        <ShoppingBag class="w-4 h-4 text-lime-400" />
                        <span>سفارش‌ها و فاکتورها</span>
                    </Link>
                </div>
            </div>

            <!-- nk-block / POS Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <!-- Products Catalog (Left/Center - 8 cols) -->
                <div class="lg:col-span-8 space-y-4">
                    <div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex items-center justify-between">
                        <span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <Package class="w-4 h-4 text-lime-400" />
                            <span>اقلام موجود برای فروش سریع</span>
                        </span>
                        <span class="text-[11px] text-zinc-400">کلیک روی هر کالا جهت افزودن به فاکتور</span>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                        <button
                            v-for="p in products"
                            :key="p.id"
                            @click="addToCart(p)"
                            type="button"
                            :disabled="p.stock <= 0"
                            class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group shadow-lg hover:shadow-lime-400/5 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <div>
                                <div class="flex items-start justify-between gap-2">
                                    <span class="text-xs font-bold text-white group-hover:text-lime-400 transition-colors line-clamp-2">{{ p.title }}</span>
                                </div>
                                <div class="mt-2 flex items-center gap-1.5">
                                    <span 
                                        class="w-1.5 h-1.5 rounded-full"
                                        :class="p.stock > 5 ? 'bg-emerald-400' : p.stock > 0 ? 'bg-amber-400' : 'bg-rose-400'"
                                    ></span>
                                    <span class="text-[11px] text-zinc-400 font-mono">موجودی: {{ p.stock }}</span>
                                </div>
                            </div>

                            <div class="mt-4 pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                                <span class="text-[10px] text-zinc-500">قیمت:</span>
                                <span class="text-xs font-black text-lime-400 font-mono">
                                    {{ formatPrice(p.effective_price) }}
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Cart / Counter Slip (Right - 4 cols) -->
                <div class="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-2xl space-y-5 sticky top-24">
                    <div class="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                        <h3 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <ShoppingCart class="w-4 h-4 text-lime-400" />
                            <span>پیش‌فاکتور صندوق (POS)</span>
                        </h3>
                        <span class="text-[11px] font-mono font-bold text-lime-400">{{ cart.length }} قلم</span>
                    </div>

                    <!-- Customer Select -->
                    <div>
                        <label class="block text-xs font-bold text-zinc-300 mb-1.5">خریدار (اعمال تخفیف خودکار اعضا)</label>
                        <select v-model="selectedMemberId" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400">
                            <option value="">مشتری گذری / مهمان آزاد</option>
                            <option v-for="m in members" :key="m.id" :value="m.id">
                                {{ m.full_name }} {{ m.member_profile?.level === 'vip' ? '★ VIP' : '' }}
                            </option>
                        </select>
                    </div>

                    <!-- Items in Cart -->
                    <div class="divide-y divide-zinc-800/60 max-h-56 overflow-y-auto space-y-1">
                        <div v-for="(item, idx) in cart" :key="idx" class="py-2.5 flex items-center justify-between">
                            <div class="min-w-0 pr-2">
                                <div class="font-bold text-white text-xs truncate">{{ item.product.title }}</div>
                                <div class="text-[11px] text-zinc-400 font-mono mt-0.5">
                                    {{ item.qty }} × {{ formatPrice(item.product.effective_price) }}
                                </div>
                            </div>
                            <button @click="removeFromCart(idx)" class="text-rose-400 hover:text-rose-300 p-1.5 cursor-pointer shrink-0">
                                <Trash2 class="w-4 h-4" />
                            </button>
                        </div>

                        <div v-if="cart.length === 0" class="py-8 text-center text-zinc-500 text-xs">
                            سبد خرید خالی است. کالاها را انتخاب فرمایید.
                        </div>
                    </div>

                    <!-- Payment Mode -->
                    <div>
                        <label class="block text-xs font-bold text-zinc-300 mb-1.5">شیوه تسویه و پرداخت</label>
                        <div class="grid grid-cols-2 gap-2">
                            <button
                                @click="paymentMethod = 'pos'"
                                type="button"
                                class="p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                                :class="paymentMethod === 'pos' ? 'bg-lime-400 text-black border-lime-400 shadow-md shadow-lime-400/20' : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'"
                            >
                                <CreditCard class="w-3.5 h-3.5" />
                                <span>دستگاه کارتخوان</span>
                            </button>
                            <button
                                @click="paymentMethod = 'cash'"
                                type="button"
                                class="p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                                :class="paymentMethod === 'cash' ? 'bg-lime-400 text-black border-lime-400 shadow-md shadow-lime-400/20' : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'"
                            >
                                <Banknote class="w-3.5 h-3.5" />
                                <span>نقدی صندوق</span>
                            </button>
                        </div>
                    </div>

                    <!-- Calculation -->
                    <div class="space-y-2 pt-3 border-t border-zinc-800/80 text-xs">
                        <div class="flex justify-between text-zinc-400">
                            <span>جمع اقلام:</span>
                            <span class="font-mono text-white">{{ formatPrice(subtotal) }}</span>
                        </div>
                        <div v-if="discount > 0" class="flex justify-between text-amber-400 font-bold">
                            <span class="flex items-center gap-1"><Crown class="w-3.5 h-3.5" /> تخفیف VIP (۱۵٪):</span>
                            <span class="font-mono">-{{ formatPrice(discount) }}</span>
                        </div>
                        <div class="flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800">
                            <span>مبلغ نهایی فاکتور:</span>
                            <span class="font-mono text-base">{{ formatPrice(total) }}</span>
                        </div>
                    </div>

                    <button
                        @click="completeSale"
                        :disabled="cart.length === 0"
                        class="w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                        <CheckCircle2 class="w-4 h-4 stroke-[2.5]" />
                        <span>ثبت و صدور فاکتور نهایی</span>
                    </button>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
