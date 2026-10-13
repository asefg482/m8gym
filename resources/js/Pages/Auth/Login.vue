<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useForm, usePage, Head, Link } from '@inertiajs/vue3';
import { Dumbbell, Phone, KeyRound, ArrowRight, RefreshCw, CheckCircle, ShieldCheck } from '@lucide/vue';
import FlashMessage from '@/Components/FlashMessage.vue';

const page = usePage();
const step = ref('mobile'); // 'mobile' or 'code'
const countdown = ref(60);
let timer = null;

const mobileForm = useForm({
    mobile: '',
});

const codeForm = useForm({
    mobile: '',
    code: '',
});

function startCountdown() {
    countdown.value = 60;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

onUnmounted(() => {
    if (timer) clearInterval(timer);
});

function submitMobile() {
    mobileForm.post('/auth/send-otp', {
        onSuccess: (res) => {
            codeForm.mobile = mobileForm.mobile;
            step.value = 'code';
            startCountdown();

            // If dev_otp is provided in session for test/dev environments, auto-fill it
            if (page.props.flash?.dev_otp) {
                codeForm.code = page.props.flash.dev_otp;
            }
        },
    });
}

function submitCode() {
    codeForm.post('/auth/verify-otp', {
        onError: () => {
            codeForm.code = '';
        },
    });
}

function resendOtp() {
    if (countdown.value > 0) return;
    submitMobile();
}
</script>

<template>
    <Head title="ورود و ثبت‌نام سریع" />
    <FlashMessage />

    <div class="min-h-screen bg-zinc-950 flex flex-col justify-center items-center p-4 sm:p-6 selection:bg-lime-400 selection:text-black relative overflow-hidden">
        <!-- Background Glow Accent -->
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <!-- Card Container -->
        <div class="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative z-10">
            <!-- Header Brand -->
            <div class="flex flex-col items-center text-center mb-8">
                <Link href="/" class="mb-4">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-xl shadow-lime-500/20">
                        <div class="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                            <span class="text-2xl font-black text-lime-400 font-sans">M8</span>
                        </div>
                    </div>
                </Link>
                <h1 class="text-xl font-black text-white">ورود و ثبت‌نام در M8 Fit Club</h1>
                <p class="text-xs text-zinc-400 mt-1">بدون رمز عبور، با تایید پیامکی شماره موبایل</p>
            </div>

            <!-- Dev mode notice per prompt specifications -->
            <div v-if="page.props.flash?.dev_otp" class="mb-5 p-3 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs flex items-center justify-between">
                <span>کد تست تایید (محیط آزمایشی):</span>
                <span class="font-mono text-base font-bold tracking-widest">{{ page.props.flash.dev_otp }}</span>
            </div>

            <!-- STEP 1: Mobile Form -->
            <form v-if="step === 'mobile'" @submit.prevent="submitMobile" class="space-y-5">
                <div>
                    <label class="block text-xs font-semibold text-zinc-300 mb-2">شماره تلفن همراه</label>
                    <div class="relative">
                        <input
                            v-model="mobileForm.mobile"
                            type="tel"
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                            dir="ltr"
                            autofocus
                            class="w-full h-12 bg-zinc-950 border border-zinc-800 rounded-2xl px-4 pl-11 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-center font-mono tracking-wider transition-colors"
                        />
                        <Phone class="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    <p v-if="mobileForm.errors.mobile" class="text-xs text-red-400 mt-2 font-medium">
                        {{ mobileForm.errors.mobile }}
                    </p>
                </div>

                <button
                    type="submit"
                    :disabled="mobileForm.processing"
                    class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 transition-all cursor-pointer disabled:opacity-50"
                >
                    <RefreshCw v-if="mobileForm.processing" class="w-4 h-4 animate-spin" />
                    <span v-else>دریافت کد تایید یک‌بار مصرف</span>
                </button>

                <div class="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-[11px] text-zinc-400 space-y-1">
                    <p class="flex items-center gap-1.5 text-zinc-300 font-semibold">
                        <ShieldCheck class="w-4 h-4 text-lime-400" />
                        حساب‌های نمونه جهت تست پنل‌ها:
                    </p>
                    <p class="font-mono text-zinc-400">ادمین کل: ۰۹۱۱۱۲۳۴۵۶۷ | مدیر سایت: ۰۹۱۱۲۲۲۳۳۳۳</p>
                    <p class="font-mono text-zinc-400">مربی: ۰۹۱۱۳۳۳۴۴۴۴ | عضو VIP: ۰۹۱۱۸۸۸۹۹۹۹</p>
                </div>
            </form>

            <!-- STEP 2: OTP Code Form -->
            <form v-else @submit.prevent="submitCode" class="space-y-5">
                <div class="text-center pb-1">
                    <p class="text-xs text-zinc-400">کد تایید ۵ رقمی ارسال‌شده به شماره زیر را وارد نمایید:</p>
                    <div class="flex items-center justify-center gap-2 mt-1">
                        <span class="font-mono text-sm text-lime-400 font-bold" dir="ltr">{{ codeForm.mobile }}</span>
                        <button
                            @click="step = 'mobile'"
                            type="button"
                            class="text-[11px] text-zinc-500 hover:text-zinc-300 underline cursor-pointer"
                        >
                            (ویرایش شماره)
                        </button>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-semibold text-zinc-300 mb-2 text-center">کد تایید پیامک‌شده</label>
                    <div class="relative">
                        <input
                            v-model="codeForm.code"
                            type="text"
                            maxlength="6"
                            placeholder="• • • • •"
                            dir="ltr"
                            autofocus
                            class="w-full h-14 bg-zinc-950 border border-zinc-800 rounded-2xl px-4 text-xl text-lime-400 placeholder-zinc-700 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-center font-mono tracking-[0.5em] transition-colors font-bold"
                        />
                    </div>
                    <p v-if="codeForm.errors.code" class="text-xs text-red-400 mt-2 font-medium text-center">
                        {{ codeForm.errors.code }}
                    </p>
                </div>

                <button
                    type="submit"
                    :disabled="codeForm.processing || !codeForm.code"
                    class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 transition-all cursor-pointer disabled:opacity-50"
                >
                    <RefreshCw v-if="codeForm.processing" class="w-4 h-4 animate-spin" />
                    <span v-else>ورود به پلتفرم</span>
                </button>

                <div class="flex items-center justify-between text-xs pt-1">
                    <button
                        v-if="countdown === 0"
                        @click="resendOtp"
                        type="button"
                        class="text-lime-400 hover:text-lime-300 font-medium cursor-pointer"
                    >
                        ارسال مجدد کد تایید
                    </button>
                    <span v-else class="text-zinc-500 font-mono">
                        ارسال مجدد تا {{ countdown }} ثانیه دیگر
                    </span>

                    <button
                        @click="step = 'mobile'"
                        type="button"
                        class="text-zinc-400 hover:text-zinc-200 cursor-pointer"
                    >
                        بازگشت
                    </button>
                </div>
            </form>

            <!-- Bottom Return to Site -->
            <div class="mt-8 pt-4 border-t border-zinc-800/80 text-center">
                <Link href="/" class="text-xs text-zinc-400 hover:text-lime-400 transition-colors">
                    ← بازگشت به صفحه اصلی سایت
                </Link>
            </div>
        </div>
    </div>
</template>
