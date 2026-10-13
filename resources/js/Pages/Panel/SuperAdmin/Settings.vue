<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { Settings, Save, RefreshCw, ShieldCheck } from '@lucide/vue';

const props = defineProps({
    settings: Object,
});

const form = useForm({
    gateway_default: props.settings.gateway_default || 'sandbox',
    sms_provider: props.settings.sms_provider || 'log',
    tax_percent: props.settings.tax_percent || '0',
    cancel_booking_hours: props.settings.cancel_booking_hours || '4',
    max_active_sessions: props.settings.max_active_sessions || '1',
});

function save() {
    form.post('/panel/super_admin/settings', { preserveScroll: true });
}
</script>

<template>
    <PanelLayout>
        <Head title="تنظیمات کلان سیستم" />

        <div class="space-y-6 max-w-4xl">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <Settings class="w-6 h-6 text-lime-400" />
                        <span>تنظیمات کلان و فنی سیستم</span>
                    </h1>
                    <p class="text-xs text-zinc-400 mt-1">پیکربندی درگاه پرداخت، سرویس پیامک و قوانین رزرو</p>
                </div>

                <button
                    @click="save"
                    :disabled="form.processing"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50"
                >
                    <RefreshCw v-if="form.processing" class="w-4 h-4 animate-spin" />
                    <Save v-else class="w-4 h-4" />
                    <span>ذخیره تنظیمات</span>
                </button>
            </div>

            <form @submit.prevent="save" class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">ارائه‌دهنده درگاه پرداخت</label>
                        <select v-model="form.gateway_default" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                            <option value="sandbox">درگاه شبیه‌ساز امن (تستی)</option>
                            <option value="zarinpal">زرین‌پال (ZarinPal)</option>
                            <option value="offline">پرداخت حضوری / کارتخوان</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">ارائه‌دهنده پیامک (SMS)</label>
                        <select v-model="form.sms_provider" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white">
                            <option value="log">لاگ سیستم (محیط توسعه و تست)</option>
                            <option value="kavenegar">کاوه نگار (Kavenegar)</option>
                            <option value="ippanel">IPPanel / فراپیامک</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">مهلت لغو رزرو قبل از نوبت (ساعت)</label>
                        <input v-model.number="form.cancel_booking_hours" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">درصد مالیات بر ارزش افزوده (%)</label>
                        <input v-model.number="form.tax_percent" type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" />
                    </div>
                </div>
            </form>
        </div>
    </PanelLayout>
</template>
