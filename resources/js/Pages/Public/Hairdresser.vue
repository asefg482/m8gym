<script setup>
import { ref } from 'vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import { Scissors, Clock, CheckCircle2, X } from '@lucide/vue';
import { formatPrice } from '@/Utils/formatters';

const props = defineProps({
    services: Array,
});

const page = usePage();
const selectedService = ref(null);
const isBookingModalOpen = ref(false);

const bookingForm = useForm({
    provider_id: '',
    starts_at: '',
    payment_method: 'online',
    note: '',
});

function openBooking(service) {
    if (!page.props.auth?.user) {
        window.location.href = '/auth/login';
        return;
    }
    selectedService.value = service;
    bookingForm.provider_id = service.providers?.[0]?.id || '';
    isBookingModalOpen.value = true;
}

function submitBooking() {
    bookingForm.post(`/payment/service/${selectedService.value.id}`, {
        onSuccess: () => {
            isBookingModalOpen.value = false;
        },
    });
}
</script>

<template>
    <PublicLayout>
        <Head title="آرایشگاه و پیرایش مردانه VIP M8 | ساری" />

        <section class="relative bg-zinc-950 border-b border-zinc-800/80 py-16 sm:py-24 overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img
                    src="/images/gym/gym_barber_vip.jpg"
                    alt="آرایشگاه و پیرایش مردانه M8"
                    class="w-full h-full object-cover opacity-25"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
                <div class="absolute -top-24 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <span class="inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/30 mb-3">
                    پیرایشگاه و استایلینگ اختصاصی
                </span>
                <h1 class="text-3xl sm:text-5xl font-black text-white">پیرایش مو و مراقبت شخصی پس از تمرین</h1>
                <p class="text-xs sm:text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
                    اصلاح موی سر، فرم‌دهی ریش، پاکسازی و فیشیال پوست در محیطی بهداشتی، مدرن و اختصاصی در مجموعه M8.
                </p>
            </div>
        </section>

        <section class="py-14 bg-zinc-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        v-for="service in services"
                        :key="service.id"
                        class="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-lime-400/40 transition-all flex flex-col justify-between group"
                    >
                        <div>
                            <div class="h-48 rounded-2xl overflow-hidden bg-zinc-950 mb-5">
                                <img
                                    :src="service.image || '/images/gym/gym_barber_vip.jpg'"
                                    :alt="service.title"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div class="flex items-center gap-2 text-xs text-lime-400 font-bold mb-2">
                                <Clock class="w-4 h-4" />
                                <span>{{ service.duration_min }} دقیقه</span>
                            </div>

                            <h3 class="text-base font-bold text-white mb-2">{{ service.title }}</h3>
                            <p class="text-xs text-zinc-400 leading-relaxed mb-6">
                                {{ service.description }}
                            </p>
                        </div>

                        <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
                            <div class="text-sm font-bold text-white font-mono">
                                {{ formatPrice(service.price) }}
                            </div>

                            <button
                                @click="openBooking(service)"
                                type="button"
                                class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-colors cursor-pointer"
                            >
                                رزرو نوبت آرایشگاه
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Booking Modal -->
        <div v-if="isBookingModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl">
                <div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                    <h3 class="text-base font-bold text-white">رزرو نوبت: {{ selectedService?.title }}</h3>
                    <button @click="isBookingModalOpen = false" class="text-zinc-400 hover:text-white">
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <form @submit.prevent="submitBooking" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">آرایشگر / متخصص</label>
                        <select
                            v-model="bookingForm.provider_id"
                            class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
                        >
                            <option v-for="prov in selectedService?.providers" :key="prov.id" :value="prov.id">
                                {{ prov.full_name }}
                            </option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">تاریخ و زمان مراجعه</label>
                        <input
                            v-model="bookingForm.starts_at"
                            type="datetime-local"
                            class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
                            required
                        />
                        <p v-if="bookingForm.errors.starts_at" class="text-xs text-red-400 mt-1">
                            {{ bookingForm.errors.starts_at }}
                        </p>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">شیوه پرداخت</label>
                        <div class="grid grid-cols-2 gap-3">
                            <label class="p-3 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                                <input type="radio" value="online" v-model="bookingForm.payment_method" />
                                <span>پرداخت آنلاین</span>
                            </label>
                            <label class="p-3 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center gap-2 text-xs text-zinc-300 cursor-pointer">
                                <input type="radio" value="offline" v-model="bookingForm.payment_method" />
                                <span>پرداخت در محل</span>
                            </label>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-zinc-800 flex items-center justify-between">
                        <span class="text-sm font-bold text-lime-400 font-mono">
                            {{ formatPrice(selectedService?.price) }}
                        </span>

                        <button
                            type="submit"
                            :disabled="bookingForm.processing"
                            class="px-6 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold cursor-pointer disabled:opacity-50"
                        >
                            تایید نهایی نوبت
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </PublicLayout>
</template>
