<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PanelLayout from '@/Layouts/PanelLayout.vue';
import { 
    Settings, 
    Save, 
    RefreshCw, 
    ShieldCheck, 
    CreditCard, 
    MessageSquare, 
    CalendarClock, 
    Percent, 
    Smartphone,
    CheckCircle2
} from '@lucide/vue';

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
        <Head title="تنظیمات کلان سیستم - Dashlite" />

        <div class="space-y-6 max-w-4xl">
            <!-- nk-block-head -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
                <div>
                    <div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1">
                        <Settings class="w-4 h-4" />
                        <span>پیکربندی هسته مرکزی سامانه</span>
                    </div>
                    <h1 class="text-xl sm:text-2xl font-black text-white">تنظیمات کلان و فنی سیستم</h1>
                    <p class="text-xs text-zinc-400 mt-1">پیکربندی درگاه پرداخت شتابی، ارائه‌دهنده پیامک OTP، مالیات و قوانین رزرو خدمات</p>
                </div>

                <button
                    @click="save"
                    :disabled="form.processing"
                    class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <RefreshCw v-if="form.processing" class="w-4 h-4 animate-spin" />
                    <Save v-else class="w-4 h-4 stroke-[2.5]" />
                    <span>{{ form.processing ? 'در حال ذخیره‌سازی...' : 'ذخیره تنظیمات سیستم' }}</span>
                </button>
            </div>

            <!-- nk-card / Form -->
            <form @submit.prevent="save" class="space-y-5">
                <!-- Payment and SMS Card -->
                <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5">
                    <div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
                        <CreditCard class="w-4 h-4 text-lime-400" />
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider">سرویس‌های بانکی و اطلاع‌رسانی</h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">ارائه‌دهنده درگاه پرداخت آنلاین</label>
                            <select v-model="form.gateway_default" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400">
                                <option value="sandbox">درگاه شبیه‌ساز امن شتابی (محیط آزمایشی Sandbox)</option>
                                <option value="zarinpal">زرین‌پال (ZarinPal IPG)</option>
                                <option value="offline">پرداخت حضوری با کارتخوان پذیرش باشگاه</option>
                            </select>
                            <span class="text-[11px] text-zinc-500 mt-1 block">درگاه پیش‌فرض جهت خرید اشتراک و شارژ کیف‌پول</span>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">ارائه‌دهنده وب‌سرویس پیامک (SMS OTP)</label>
                            <select v-model="form.sms_provider" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400">
                                <option value="ippanel">IPPanel / فراپیامک (سامانه پترن سریع)</option>
                                <option value="kavenegar">کاوه‌نگار (Kavenegar)</option>
                                <option value="log">لاگ فایل سیستم (تست لوکال و بدون مصرف پیامک)</option>
                            </select>
                            <span class="text-[11px] text-zinc-500 mt-1 block">ارسال کد تایید ورود اعضا و یادآوری جلسات</span>
                        </div>
                    </div>
                </div>

                <!-- Policies Card -->
                <div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5">
                    <div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
                        <CalendarClock class="w-4 h-4 text-lime-400" />
                        <h2 class="text-xs font-bold text-white uppercase tracking-wider">قوانین رزرو، تردد و امور مالیاتی</h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">مهلت مجاز لغو رزرو قبل از نوبت (به ساعت)</label>
                            <input 
                                v-model.number="form.cancel_booking_hours" 
                                type="number" 
                                class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" 
                            />
                            <span class="text-[11px] text-zinc-500 mt-1 block">در صورت لغو پس از این زمان، جلسه از حساب ورزشکار کسر می‌گردد.</span>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-zinc-300 mb-1.5">درصد مالیات بر ارزش افزوده در فاکتورها (%)</label>
                            <input 
                                v-model.number="form.tax_percent" 
                                type="number" 
                                class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" 
                            />
                            <span class="text-[11px] text-zinc-500 mt-1 block">اعمال خودکار بر روی فاکتورهای فروشگاه، بوفه و اشتراک‌ها</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </PanelLayout>
</template>
