<script setup>
import { ref, computed } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Calculator, ShoppingCart, Trash2, CheckCircle, CreditCard, DollarSign } from '@lucide/vue';
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
        <Head title="فروش حضوری فروشگاه (POS)" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Calculator class="w-6 h-6 text-lime-400" />
                    <span>صندوق فروش حضوری (POS فروشگاه M8)</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">فروش سریع اقلام، انتخاب خریدار با تخفیف خودکار VIP و تسویه کارتخوان یا نقدی</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <!-- Products Catalog (Left/Center) -->
                <div class="lg:col-span-8 space-y-4">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <button
                            v-for="p in products"
                            :key="p.id"
                            @click="addToCart(p)"
                            type="button"
                            class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group"
                        >
                            <div>
                                <span class="text-xs font-bold text-white group-hover:text-lime-400">{{ p.title }}</span>
                                <span class="text-[10px] text-zinc-500 block mt-1">موجودی: {{ p.stock }}</span>
                            </div>
                            <div class="mt-3 text-xs font-bold text-lime-400 font-mono">
                                {{ formatPrice(p.effective_price) }}
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Cart / Counter Slip (Right) -->
                <div class="lg:col-span-4 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-5">
                    <h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider">فاکتور جاری</h3>

                    <!-- Customer Select -->
                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1">عضو خریدار (اختیاری جهت اعمال تخفیف VIP)</label>
                        <select v-model="selectedMemberId" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                            <option value="">مشتری گذری / مهمان</option>
                            <option v-for="m in members" :key="m.id" :value="m.id">
                                {{ m.full_name }} {{ m.member_profile?.level === 'vip' ? '(VIP)' : '' }}
                            </option>
                        </select>
                    </div>

                    <!-- Items -->
                    <div class="divide-y divide-zinc-800 text-xs max-h-56 overflow-y-auto space-y-1">
                        <div v-for="(item, idx) in cart" :key="idx" class="py-2 flex items-center justify-between">
                            <div>
                                <div class="font-bold text-white">{{ item.product.title }}</div>
                                <div class="text-[10px] text-zinc-400 font-mono">{{ item.qty }} × {{ formatPrice(item.product.effective_price) }}</div>
                            </div>
                            <button @click="removeFromCart(idx)" class="text-red-400 hover:text-red-300 p-1">
                                <Trash2 class="w-3.5 h-3.5" />
                            </button>
                        </div>

                        <div v-if="cart.length === 0" class="py-8 text-center text-zinc-500 text-xs">
                            سبد خالی است. روی کالاها کلیک کنید.
                        </div>
                    </div>

                    <!-- Payment Mode -->
                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1">روش پرداخت</label>
                        <div class="grid grid-cols-2 gap-2">
                            <button
                                @click="paymentMethod = 'pos'"
                                type="button"
                                class="p-2 rounded-xl border text-xs font-bold"
                                :class="paymentMethod === 'pos' ? 'bg-lime-400 text-black border-lime-400' : 'bg-zinc-950 text-zinc-400 border-zinc-800'"
                            >
                                کارتخوان (POS)
                            </button>
                            <button
                                @click="paymentMethod = 'cash'"
                                type="button"
                                class="p-2 rounded-xl border text-xs font-bold"
                                :class="paymentMethod === 'cash' ? 'bg-lime-400 text-black border-lime-400' : 'bg-zinc-950 text-zinc-400 border-zinc-800'"
                            >
                                نقدی در صندوق
                            </button>
                        </div>
                    </div>

                    <!-- Calculation -->
                    <div class="space-y-1.5 pt-3 border-t border-zinc-800 text-xs">
                        <div class="flex justify-between text-zinc-400">
                            <span>جمع کل:</span>
                            <span class="font-mono">{{ formatPrice(subtotal) }}</span>
                        </div>
                        <div v-if="discount > 0" class="flex justify-between text-amber-400 font-bold">
                            <span>تخفیف VIP:</span>
                            <span class="font-mono">-{{ formatPrice(discount) }}</span>
                        </div>
                        <div class="flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800/60">
                            <span>مبلغ قابل پرداخت:</span>
                            <span class="font-mono">{{ formatPrice(total) }}</span>
                        </div>
                    </div>

                    <button
                        @click="completeSale"
                        :disabled="cart.length === 0"
                        class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
                    >
                        <CheckCircle class="w-4 h-4" />
                        <span>ثبت و صدور فاکتور نهایی</span>
                    </button>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
