<script setup>
import { ref, computed } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { ShoppingCart, Trash2, CheckCircle, Coffee } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    items: Array,
    members: Array,
});

const selectedMemberId = ref('');
const cart = ref([]);

const selectedMember = computed(() => {
    return props.members.find((m) => m.id === selectedMemberId.value);
});

function addToCart(it) {
    const existing = cart.value.find((item) => item.product.id === it.id);
    if (existing) {
        existing.qty++;
    } else {
        cart.value.push({ product: it, qty: 1 });
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
        return Math.round(subtotal.value * 0.20); // 20% VIP discount for buffet
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
        scope: 'buffet',
        payment_method: 'pos',
        delivery_type: 'dine_in',
    }, {
        onSuccess: () => {
            cart.value = [];
        },
    });
}
</script>

<template>
    <PanelLayout>
        <Head title="ثبت سفارش حضوری بوفه" />

        <div class="space-y-6">
            <div>
                <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Coffee class="w-6 h-6 text-lime-400" />
                    <span>صندوق سفارش حضوری بوفه و کافه M8</span>
                </h1>
                <p class="text-xs text-zinc-400 mt-1">انتخاب سریع شیک‌ها و غذاهای رژیمی و اعمال خودکار ۲۰٪ تخفیف اعضای VIP</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <!-- Items list -->
                <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <button
                        v-for="it in items"
                        :key="it.id"
                        @click="addToCart(it)"
                        type="button"
                        class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group"
                    >
                        <span class="text-xs font-bold text-white group-hover:text-lime-400">{{ it.title }}</span>
                        <span class="mt-3 text-xs font-bold text-lime-400 font-mono">{{ formatPrice(it.effective_price) }}</span>
                    </button>
                </div>

                <!-- Slip -->
                <div class="lg:col-span-4 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4">
                    <h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider">سفارش جاری بوفه</h3>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1">انتخاب ورزشکار (اعمال تخفیف ۲۰٪ VIP)</label>
                        <select v-model="selectedMemberId" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                            <option value="">مشتری مهمان</option>
                            <option v-for="m in members" :key="m.id" :value="m.id">
                                {{ m.full_name }} {{ m.member_profile?.level === 'vip' ? '(VIP)' : '' }}
                            </option>
                        </select>
                    </div>

                    <div class="divide-y divide-zinc-800 text-xs max-h-56 overflow-y-auto space-y-1">
                        <div v-for="(item, idx) in cart" :key="idx" class="py-2 flex items-center justify-between">
                            <div>
                                <span class="font-bold text-white">{{ item.product.title }}</span>
                                <span class="text-[10px] text-zinc-400 font-mono block">{{ item.qty }} × {{ formatPrice(item.product.effective_price) }}</span>
                            </div>
                            <button @click="removeFromCart(idx)" class="text-red-400 p-1 cursor-pointer"><Trash2 class="w-3.5 h-3.5" /></button>
                        </div>
                    </div>

                    <div class="space-y-1 pt-3 border-t border-zinc-800 text-xs">
                        <div class="flex justify-between text-zinc-400">
                            <span>مبلغ کل:</span>
                            <span class="font-mono">{{ formatPrice(subtotal) }}</span>
                        </div>
                        <div v-if="discount > 0" class="flex justify-between text-amber-400 font-bold">
                            <span>تخفیف ۲۰٪ عضو VIP:</span>
                            <span class="font-mono">-{{ formatPrice(discount) }}</span>
                        </div>
                        <div class="flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800/60">
                            <span>مبلغ نهایی:</span>
                            <span class="font-mono">{{ formatPrice(total) }}</span>
                        </div>
                    </div>

                    <button
                        @click="completeSale"
                        :disabled="cart.length === 0"
                        class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
                    >
                        <CheckCircle class="w-4 h-4" />
                        <span>ثبت سفارش و ارسال به آشپزخانه</span>
                    </button>
                </div>
            </div>
        </div>
    </PanelLayout>
</template>
