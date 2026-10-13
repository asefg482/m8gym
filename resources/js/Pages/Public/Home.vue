<script setup>
import { ref, computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import {
    Dumbbell,
    Flame,
    CheckCircle2,
    Sparkles,
    Coffee,
    Scissors,
    ShoppingBag,
    ArrowLeft,
    Phone,
    MapPin,
    Calendar,
    Award,
    Send,
    HelpCircle,
    ChevronDown,
    Zap,
    Clock,
    ShieldCheck,
    Calculator,
    Activity,
    Star,
    Crown,
    ChevronLeft,
    Users,
    Eye,
    X,
    ExternalLink,
    Camera
} from '@lucide/vue';
import { toPersianDigits, formatPrice } from '@/Utils/formatters';

const props = defineProps({
    banners: Array,
    plans: Array,
    trainers: Array,
    services: Array,
    faqs: Array,
    featuredProducts: Array,
    featuredBuffet: Array,
    gymSettings: Object,
});

// Consultation Lead Form
const leadForm = useForm({
    name: '',
    mobile: '',
    message: '',
});

function submitLead() {
    leadForm.post('/lead', {
        preserveScroll: true,
        onSuccess: () => {
            leadForm.reset();
        },
    });
}

// FAQ Accordion
const activeFaq = ref(0);
function toggleFaq(index) {
    activeFaq.value = activeFaq.value === index ? null : index;
}

// Interactive BMI Calculator (Fitmaker Feature)
const bmiHeight = ref(180);
const bmiWeight = ref(78);
const bmiGender = ref('male');
const bmiAge = ref(26);

const calculatedBmi = computed(() => {
    if (!bmiHeight.value || !bmiWeight.value) return 0;
    const heightInMeters = bmiHeight.value / 100;
    const bmi = bmiWeight.value / (heightInMeters * heightInMeters);
    return Math.round(bmi * 10) / 10;
});

const bmiStatus = computed(() => {
    const val = calculatedBmi.value;
    if (val < 18.5) return { text: 'کمبود وزن (Underweight)', color: 'text-amber-400', badge: 'bg-amber-400/10 border-amber-400/30', advice: 'تمرکز بر افزایش حجم عضلانی خشک و دریافت کالری مازاد همراه با تمرینات مقاومتی M8.' };
    if (val <= 24.9) return { text: 'وزن ایده‌آل و نرمال (Normal)', color: 'text-lime-400', badge: 'bg-lime-400/10 border-lime-400/30', advice: 'عالی هستید! حفظ ترکیب بدنی ایده‌آل و ارتقای رکوردها با برنامه‌های هایپرتروفی مربیان M8.' };
    if (val <= 29.9) return { text: 'اضافه وزن ملایم (Overweight)', color: 'text-orange-400', badge: 'bg-orange-400/10 border-orange-400/30', advice: 'ترکیب تمرینات کراس‌فیت و هوازی با رژیم بوفه سلامت M8 برای چربی‌سوزی پرسرعت.' };
    return { text: 'چاقی (Obese)', color: 'text-rose-400', badge: 'bg-rose-400/10 border-rose-400/30', advice: 'برنامه اختصاصی کاهش وزن، پایش دوره‌ای InBody و مشاوره تغذیه جهت بازگشت به وزن سلامت.' };
});

// Facility Zones
const facilities = [
    {
        title: 'سالن اصلی بدنسازی و وزنه‌های آزاد',
        subtitle: 'Free Weights & Heavy Iron Zone',
        desc: 'بیش از ۲۵۰۰ متر مربع فضا با پیشرفته‌ترین دستگاه‌های روز دنیا، دمبل‌های تا ۶۰ کیلوگرم، نیمکت‌های المپیک و صفحات استاندارد.',
        image: '/images/gym/m8_strength_floor.jpg',
        badge: 'سالن اصلی',
        link: '/#plans'
    },
    {
        title: 'کافه و رستوران رژیمی M8',
        subtitle: 'Protein Fuel & Healthy Nutrition Bar',
        desc: 'بار پروتئینی تخصصی با اسموتی‌های ارگانیک، شیک‌های پس از تمرین، قهوه اسپرسو تخصصی و بشقاب‌های پروتئینی تنظیم‌شده متناسب با درشت‌مغذی‌ها.',
        image: '/images/gym/m8_protein_bar.jpg',
        badge: 'کافه سلامت',
        link: '/cafe'
    },
    {
        title: 'مرکز تخصصی ماساژ و ریکاوری',
        subtitle: 'M8 Sports Massage & Recovery Spa',
        desc: 'ماساژ ورزشی دیپ‌تیشو، بادکش‌درمانی مدرن، ریکاوری مفاصل و آزادسازی میوفاشیال توسط ماسورهای رسمی با اتاق‌های آرامش‌بخش و VIP.',
        image: '/images/gym/m8_spa_massage.jpg',
        badge: 'اسپا و ریکاوری',
        link: '/massage'
    },
    {
        title: 'آرایشگاه و پیرایش اختصاصی VIP',
        subtitle: 'Gentlemen Grooming & Barber Lounge',
        desc: 'خدمات کامل گرومینگ، فیشیال پوست، اصلاح مو و گریم حرفه‌ای با رزرو اختصاصی آنلاین بدون معطلی پس از اتمام جلسه تمرین.',
        image: '/images/gym/m8_barber_lounge.jpg',
        badge: 'پیرایش VIP',
        link: '/hairdresser'
    }
];

// Real Gym Atmosphere & Photos from Sari Location (Neshan & Real Venue)
const realGymPhotos = [
    {
        title: 'سالن کاردیو و چشم‌انداز پانورامای کوهستان ساری',
        subtitle: 'دید ۳۶۰ درجه به طبیعت سرسبز مازندران و افق شهر',
        desc: 'ردیف کامل تردمیل‌ها و استپ‌میل‌های پیشرفته در کنار دیواره‌های شیشه‌ای قدی با ویوی کارت‌پستالی کوه‌های البرز.',
        src: '/images/gym/real/m8_neshan_1.jpg',
        badge: 'سالن کاردیو و هوازی',
    },
    {
        title: 'سالن ۲۵۰۰ متری وزنه‌های آزاد و پرورش اندام',
        subtitle: 'سقف مرتفع صنعتی، تهویه هوای تازه و نورپردازی حرفه‌ای',
        desc: 'فضای عظیم با داکت‌های صنعتی مدرن، نورپردازی استاندارد و مجهز به برترین دستگاه‌های هایپرتروفی و پاورلیفتینگ.',
        src: '/images/gym/real/m8_neshan_2.jpg',
        badge: 'فضای ۲۵۰۰ متری M8',
    },
    {
        title: 'ایستگاه‌های تخصصی کراس‌اور و سیم‌کش‌های المپیک',
        subtitle: 'بیومکانیک پیشرفته و طراحی ارگونومیک جهانی',
        desc: 'دستگاه‌های سیم‌کش چندکاره با زوایای استاندارد تمرین و کف‌پوش‌های ضربه‌گیر استاندارد جهت ایمنی مفاصل ورزشکاران.',
        src: '/images/gym/real/m8_neshan_3.jpg',
        badge: 'کراس‌اور و وزنه‌ها',
    },
    {
        title: 'محوطه تردمیل‌ها و مانیتورینگ دیجیتال تمرین',
        subtitle: 'سیستم ثبت هوشمند زمان و پایش ضربان قلب',
        desc: 'لاین مجهز تمرینات هوازی و استقامتی در فضایی روشن با دمای تنظیم‌شده و سیستم تهویه هوای بیمارستانی.',
        src: '/images/gym/real/m8_neshan_4.jpg',
        badge: 'لاین تمرینات هوازی',
    },
];

const selectedRealPhoto = ref(null);
function openPhotoModal(photo) {
    selectedRealPhoto.value = photo;
}
function closePhotoModal() {
    selectedRealPhoto.value = null;
}

// Fallback coach photos
const defaultCoachImages = [
    '/images/gym/coach_ali.jpg',
    '/images/gym/coach_reza.jpg',
    'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80'
];
</script>

<template>
    <PublicLayout>
        <Head title="باشگاه بدنسازی و تندرستی M8 ساری | بزرگترین فیت‌کلاب شمال کشور" />

        <!-- 1. HERO SECTION (Fitmaker High-Energy Aesthetic) -->
        <section class="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/80 pt-6 pb-16">
            <!-- Background Radial Glows -->
            <div class="absolute top-1/4 -right-20 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
            <div class="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-16">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    <!-- Right/Main Text Column -->
                    <div class="lg:col-span-7 text-right space-y-6">
                        <!-- Top Tagline Pill -->
                        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-lime-400/40 text-lime-400 text-xs font-black shadow-lg shadow-lime-500/10">
                            <span class="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
                            <span>M8 FIT CLUB • مدرن‌ترین فیت‌کلاب ساری</span>
                        </div>

                        <!-- Mega Headline with Fitmaker Styling -->
                        <h1 class="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.15]">
                            فراتر از یک باشگاه؛<br />
                            اینجا داستان 
                            <span class="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
                                قهرمانی تو
                                <svg class="absolute -bottom-2 left-0 w-full h-3 text-lime-400/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0 10 Q50 20 100 10" stroke="currentColor" stroke-width="4" fill="none" />
                                </svg>
                            </span>
                            آغاز می‌شود
                        </h1>

                        <!-- Subtitle -->
                        <p class="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
                            {{ gymSettings.slogan || 'بزرگترین و مجهزترین مجموعه ورزشی و تندرستی شمال کشور با ۲۵۰۰ متر مربع فضا، مربیان رسمی فدراسیون، بوفه تغذیه سلامت، اسپا ریکاوری و پیرایشگاه اختصاصی در ساری.' }}
                        </p>

                        <!-- CTA Actions -->
                        <div class="pt-2 flex flex-wrap items-center gap-4">
                            <a
                                href="#consultation"
                                class="px-8 py-4 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm transition-all duration-300 shadow-xl shadow-lime-400/25 flex items-center gap-2.5 group cursor-pointer"
                            >
                                <span>رزرو جلسه ارزیابی و تمرین رایگان</span>
                                <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                            </a>

                            <a
                                href="#plans"
                                class="px-7 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700/80 hover:border-lime-400/40 transition-all flex items-center gap-2"
                            >
                                <Crown class="w-4 h-4 text-lime-400" />
                                <span>مشاهده پلن‌های عضویت</span>
                            </a>
                        </div>

                        <!-- Mini Highlights Row -->
                        <div class="pt-6 border-t border-zinc-800/70 grid grid-cols-3 gap-4 max-w-lg">
                            <div>
                                <span class="block text-2xl sm:text-3xl font-black text-white font-mono">۲,۵۰۰+</span>
                                <span class="text-xs text-zinc-400">متر مربع مساحت سالن</span>
                            </div>
                            <div>
                                <span class="block text-2xl sm:text-3xl font-black text-lime-400 font-mono">۱۵+</span>
                                <span class="text-xs text-zinc-400">مربی رسمی فدراسیون</span>
                            </div>
                            <div>
                                <span class="block text-2xl sm:text-3xl font-black text-white font-mono">۷+ سال</span>
                                <span class="text-xs text-zinc-400">سابقه درخشان در ساری</span>
                            </div>
                        </div>
                    </div>

                    <!-- Left Column: Hero Image with Floating Glass Badges -->
                    <div class="lg:col-span-5 relative flex justify-center">
                        <div class="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900 group">
                            <!-- Image -->
                            <img
                                src="/images/gym/m8_hero_training.jpg"
                                alt="M8 Gym Sari Athlete"
                                class="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                            <!-- Floating Glass Badge 1: Active Members -->
                            <div class="absolute top-6 right-6 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-zinc-800 shadow-2xl flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400">
                                    <Users class="w-5 h-5" />
                                </div>
                                <div class="text-right">
                                    <span class="block text-xs font-black text-white">۲,۴۵۰+ ورزشکار فعال</span>
                                    <span class="text-[10px] text-zinc-400">جامعه بزرگ قهرمانان M8</span>
                                </div>
                            </div>

                            <!-- Floating Glass Badge 2: Workout Calorie Burn -->
                            <div class="absolute bottom-6 left-6 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-lime-400/30 shadow-2xl flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Flame class="w-5 h-5" />
                                </div>
                                <div class="text-right">
                                    <span class="block text-xs font-black text-white">۸۵۰+ کیلوکالری / جلسه</span>
                                    <span class="text-[10px] text-lime-400">چربی‌سوزی با متد HIIT و هایپرتروفی</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- 2. SCROLLING MARQUEE / TICKER TAPE (Fitmaker Style) -->
        <div class="w-full bg-lime-400 text-black py-3.5 overflow-hidden whitespace-nowrap border-y border-lime-300 font-black text-sm select-none tracking-wider">
            <div class="inline-flex items-center gap-8 animate-marquee">
                <span>M8 FIT CLUB</span>
                <span>•</span>
                <span>بزرگترین سالن بدنسازی شمال کشور</span>
                <span>•</span>
                <span>CROSSFIT & FUNCTIONAL</span>
                <span>•</span>
                <span>بوفه و کافه رژیمی M8 FUEL</span>
                <span>•</span>
                <span>مرکز ماساژ تخصصی و ریکاوری</span>
                <span>•</span>
                <span>آرایشگاه و پیرایش VIP</span>
                <span>•</span>
                <span>ساری، خیابان قارن</span>
                <span>•</span>
                <span>تمرین بدون محدودیت</span>
                <span>•</span>
                <span>M8 FIT CLUB</span>
                <span>•</span>
                <span>بزرگترین سالن بدنسازی شمال کشور</span>
                <span>•</span>
                <span>CROSSFIT & FUNCTIONAL</span>
                <span>•</span>
                <span>بوفه و کافه رژیمی M8 FUEL</span>
                <span>•</span>
                <span>مرکز ماساژ تخصصی و ریکاوری</span>
                <span>•</span>
                <span>آرایشگاه و پیرایش VIP</span>
            </div>
        </div>

        <!-- 3. ABOUT OUR GYM (Chamith Style Split Architectural Section) -->
        <section id="about" class="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <!-- Image Showcase with M8 Gym Real Interior -->
                    <div class="lg:col-span-6 relative">
                        <div class="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                            <img
                                src="/images/gym/m8_panoramic_cardio.jpg"
                                alt="سالن ۲۵۰۰ متری و کاردیوی پانورامای باشگاه M8 ساری"
                                class="w-full h-[400px] sm:h-[480px] object-cover object-center filter contrast-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                            
                            <div class="absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                                <div>
                                    <span class="text-xs font-bold text-lime-400">فضای ۲۵۰۰ متری اختصاصی</span>
                                    <p class="text-sm font-black text-white mt-0.5">مجهز به برترین تجهیزات بیومکانیک ۲۰۲۴</p>
                                </div>
                                <div class="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center font-bold">
                                    M8
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="lg:col-span-6 space-y-6 text-right">
                        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold">
                            <Sparkles class="w-3.5 h-3.5 text-lime-400" />
                            <span>درباره فیت‌کلاب M8 ساری</span>
                        </div>

                        <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                            استانداردی نو در <br />
                            <span class="text-lime-400">ورزش و تندرستی</span> شمال ایران
                        </h2>

                        <p class="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                            مجموعه ورزشی M8 با بیش از ۷ سال سابقه و با مساحت وسیع ۲۵۰۰ متر مربع در شهر ساری بنا شده است. هدف ما خلق محیطی حرفه‌ای، باانگیزه و لوکس است که در آن ورزشکاران در هر سطحی—از مبتدی تا قهرمانان بین‌المللی—به تمام ابزارهای رشد جسمانی و ذهنی دسترسی داشته باشند.
                        </p>

                        <!-- Feature Checklist Grid -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                            <div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
                                <div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                                    <CheckCircle2 class="w-4 h-4" />
                                </div>
                                <span class="font-bold text-zinc-200">دستگاه‌های وارداتی با زاویه ارگونومیک</span>
                            </div>

                            <div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
                                <div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                                    <CheckCircle2 class="w-4 h-4" />
                                </div>
                                <span class="font-bold text-zinc-200">سیستم تهویه هوای بیمارستانی و هوای تازه</span>
                            </div>

                            <div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
                                <div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                                    <CheckCircle2 class="w-4 h-4" />
                                </div>
                                <span class="font-bold text-zinc-200">باکس مجزای کراس‌فیت و چمن فانکشنال</span>
                            </div>

                            <div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3">
                                <div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                                    <CheckCircle2 class="w-4 h-4" />
                                </div>
                                <span class="font-bold text-zinc-200">کمد دیجیتال هوشمند و دوش‌های اختصاصی</span>
                            </div>
                        </div>

                        <div class="pt-2">
                            <a
                                href="#consultation"
                                class="inline-flex items-center gap-2 text-xs font-bold text-lime-400 hover:text-lime-300 transition-colors"
                            >
                                <span>درخواست بازدید حضوری از مجموعه</span>
                                <ArrowLeft class="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- 4. FACILITIES & INTEGRATED SERVICES (Real Photos Showcase) -->
        <section id="facilities" class="py-20 lg:py-28 bg-zinc-900/40 border-b border-zinc-800/80 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold">
                        <Dumbbell class="w-3.5 h-3.5" />
                        <span>امکانات و بخش‌های یکپارچه</span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        همه نیازهای ورزشکار زیر <span class="text-lime-400">یک سقف</span>
                    </h2>
                    <p class="text-xs sm:text-sm text-zinc-400">
                        تنها باشگاه جامع شمال کشور که علاوه بر سالن بدنسازی، دارای کافه‌رستوران ارگانیک، ماساژ ورزشی تخصصی، پیرایشگاه VIP و فروشگاه مکمل اورجینال است.
                    </p>
                </div>

                <!-- 4 Facilities Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        v-for="(fac, idx) in facilities"
                        :key="idx"
                        class="group rounded-3xl bg-zinc-900/80 border border-zinc-800/80 overflow-hidden hover:border-lime-400/40 transition-all duration-500 shadow-xl flex flex-col"
                    >
                        <!-- Image Container with Overlay -->
                        <div class="relative h-64 sm:h-72 overflow-hidden bg-zinc-950">
                            <img
                                :src="fac.image"
                                :alt="fac.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
                            
                            <span class="absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-[11px] font-bold text-lime-400">
                                {{ fac.badge }}
                            </span>
                        </div>

                        <!-- Info Content -->
                        <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-right">
                            <div>
                                <span class="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">{{ fac.subtitle }}</span>
                                <h3 class="text-xl sm:text-2xl font-black text-white mt-1 group-hover:text-lime-400 transition-colors">{{ fac.title }}</h3>
                                <p class="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed font-normal">{{ fac.desc }}</p>
                            </div>

                            <div class="pt-2">
                                <Link
                                    :href="fac.link"
                                    class="inline-flex items-center gap-2 text-xs font-black text-white hover:text-lime-400 transition-colors"
                                >
                                    <span>مشاهده جزئیات و رزرو</span>
                                    <ArrowLeft class="w-3.5 h-3.5 text-lime-400 group-hover:-translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. REAL VENUE GALLERY & ATMOSPHERE (ساری، محله باغ سنگ) -->
        <section id="gallery" class="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative overflow-hidden">
            <!-- Background Radial Glow -->
            <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <!-- Header with Location and Navigation Badges -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div class="space-y-3 text-right max-w-2xl">
                        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold">
                            <Camera class="w-3.5 h-3.5" />
                            <span>تصاویر واقعی از فضای فیزیکی باشگاه M8 ساری</span>
                        </div>
                        <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
                            اتمسفر و فضای <span class="text-lime-400">واقعی مجموعه</span>
                        </h2>
                        <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            نمایی واقعی از سالن کاردیو بر فراز بام ساری با ویوی کوهستان، سالن ۲۵۰۰ متری وزنه‌های سنگین و تجهیزات وارداتی پیشرفته در محله باغ سنگ (خیابان فرهنگ ۱۷).
                        </p>
                    </div>

                    <!-- Direct Map Routing & Location Pill Links -->
                    <div class="flex flex-wrap items-center gap-2.5">
                        <a
                            href="https://neshan.org/maps/places/3b39d0a9ced51c7212d21bd534781b5e#c36.562-53.074-15z-0p"
                            target="_blank"
                            rel="noopener"
                            class="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-lime-400 text-zinc-200 hover:text-lime-400 text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                        >
                            <MapPin class="w-4 h-4 text-lime-400" />
                            <span>مسیریابی در نشان</span>
                            <ExternalLink class="w-3 h-3 text-zinc-500" />
                        </a>
                        <a
                            href="https://www.google.com/maps/search/+SH/?entry=wc&hl=el"
                            target="_blank"
                            rel="noopener"
                            class="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-lime-400 text-zinc-200 hover:text-lime-400 text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                        >
                            <MapPin class="w-4 h-4 text-lime-400" />
                            <span>Google Maps</span>
                            <ExternalLink class="w-3 h-3 text-zinc-500" />
                        </a>
                        <a
                            href="https://www.instagram.com/m8_fitclub/?hl=fa"
                            target="_blank"
                            rel="noopener"
                            class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-rose-500/30 hover:border-rose-400 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
                        >
                            <span>اینستاگرام باشگاه M8</span>
                            <ExternalLink class="w-3 h-3 text-rose-400" />
                        </a>
                    </div>
                </div>

                <!-- 4 Real Photos Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        v-for="(photo, pIdx) in realGymPhotos"
                        :key="pIdx"
                        @click="openPhotoModal(photo)"
                        class="group cursor-pointer rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-lime-400/50 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    >
                        <!-- Photo container -->
                        <div class="relative h-72 sm:h-80 overflow-hidden bg-zinc-950">
                            <img
                                :src="photo.src"
                                :alt="photo.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                            
                            <!-- Badge -->
                            <span class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-[10px] font-bold text-lime-400 shadow-md">
                                {{ photo.badge }}
                            </span>

                            <!-- Hover Overlay Button -->
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                <span class="px-4 py-2 rounded-xl bg-lime-400 text-black text-xs font-black flex items-center gap-1.5 shadow-xl">
                                    <Eye class="w-3.5 h-3.5" />
                                    <span>مشاهده تصویر بزرگ</span>
                                </span>
                            </div>
                        </div>

                        <!-- Caption -->
                        <div class="p-5 text-right space-y-1.5">
                            <h3 class="text-sm font-black text-white group-hover:text-lime-400 transition-colors line-clamp-1">
                                {{ photo.title }}
                            </h3>
                            <p class="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                                {{ photo.desc }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Location banner pill -->
                <div class="mt-10 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
                            <MapPin class="w-5 h-5" />
                        </div>
                        <div class="text-right">
                            <span class="block font-black text-white">موقعیت فیزیکی باشگاه در ساری</span>
                            <span class="text-zinc-400 text-[11px]">استان مازندران، ساری، خیابان فرهنگ، فرهنگ ۱۷ (محله باغ سنگ)</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-lime-400 font-bold">
                        <Clock class="w-4 h-4" />
                        <span>فعالیت همه‌روزه از ۶:۰۰ صبح تا ۲۳:۳۰ شب</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lightbox Modal for Real Photos -->
        <div
            v-if="selectedRealPhoto"
            @click.self="closePhotoModal"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all"
        >
            <div class="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                <!-- Close Button -->
                <button
                    @click="closePhotoModal"
                    class="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-all cursor-pointer"
                >
                    <X class="w-5 h-5" />
                </button>

                <!-- Fullscreen Image -->
                <div class="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                    <img
                        :src="selectedRealPhoto.src"
                        :alt="selectedRealPhoto.title"
                        class="w-full h-full max-h-[75vh] object-contain"
                    />
                </div>

                <!-- Info Drawer -->
                <div class="p-6 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-right">
                    <div>
                        <span class="inline-block px-2.5 py-0.5 rounded-md bg-lime-400/10 text-lime-400 text-[10px] font-bold border border-lime-400/30 mb-1">
                            {{ selectedRealPhoto.badge }}
                        </span>
                        <h3 class="text-base font-black text-white">{{ selectedRealPhoto.title }}</h3>
                        <p class="text-xs text-zinc-400 mt-1 leading-relaxed">{{ selectedRealPhoto.desc }}</p>
                    </div>

                    <a
                        href="#consultation"
                        @click="closePhotoModal"
                        class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shrink-0 transition-colors cursor-pointer text-center"
                    >
                        رزرو جلسه تست حضوری
                    </a>
                </div>
            </div>
        </div>

        <!-- 6. INTERACTIVE BMI CALCULATOR (Fitmaker Feature Widget) -->
        <section class="py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800/80 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-2xl relative">
                    
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        <!-- Left/Intro -->
                        <div class="lg:col-span-5 text-right space-y-4">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold">
                                <Calculator class="w-3.5 h-3.5" />
                                <span>محاسبه‌گر هوشمند توده بدنی (BMI)</span>
                            </div>
                            <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
                                وضعیت فیزیکی خود را <span class="text-lime-400">آنلاین بسنجید</span>
                            </h2>
                            <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                شاخص BMI نشان‌دهنده نسبت قد به وزن شماست. مشخصات خود را وارد کنید تا وضعیت بدنی و پیشنهاد تخصصی مربیان M8 را فوری دریافت کنید.
                            </p>

                            <!-- Live Gauge Result Box -->
                            <div class="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 mt-6">
                                <div class="flex items-center justify-between">
                                    <span class="text-xs text-zinc-400">شاخص BMI شما:</span>
                                    <span class="text-3xl font-black text-white font-mono">{{ toPersianDigits(calculatedBmi) }}</span>
                                </div>

                                <div class="flex items-center justify-between pt-2 border-t border-zinc-900">
                                    <span class="text-xs text-zinc-400">وضعیت:</span>
                                    <span class="px-2.5 py-1 rounded-full text-xs font-black border" :class="[bmiStatus.color, bmiStatus.badge]">
                                        {{ bmiStatus.text }}
                                    </span>
                                </div>

                                <p class="text-[11px] text-zinc-400 pt-1 leading-relaxed">
                                    <span class="text-lime-400 font-bold">توصیه M8:</span> {{ bmiStatus.advice }}
                                </p>
                            </div>
                        </div>

                        <!-- Right/Sliders & Controls -->
                        <div class="lg:col-span-7 bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 space-y-6 text-right">
                            <!-- Gender Toggle -->
                            <div>
                                <label class="block text-xs font-bold text-zinc-300 mb-2">جنسیت</label>
                                <div class="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        @click="bmiGender = 'male'"
                                        class="py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer"
                                        :class="bmiGender === 'male' ? 'bg-lime-400 text-black border-lime-400 shadow-md' : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'"
                                    >
                                        آقا
                                    </button>
                                    <button
                                        type="button"
                                        @click="bmiGender = 'female'"
                                        class="py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer"
                                        :class="bmiGender === 'female' ? 'bg-lime-400 text-black border-lime-400 shadow-md' : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'"
                                    >
                                        خانم
                                    </button>
                                </div>
                            </div>

                            <!-- Height Slider -->
                            <div>
                                <div class="flex justify-between items-center mb-1 text-xs">
                                    <span class="font-bold text-zinc-300">قد شما (سانتی‌متر)</span>
                                    <span class="font-mono text-lime-400 font-black text-sm">{{ toPersianDigits(bmiHeight) }} cm</span>
                                </div>
                                <input
                                    v-model.number="bmiHeight"
                                    type="range"
                                    min="130"
                                    max="220"
                                    class="w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                                />
                            </div>

                            <!-- Weight Slider -->
                            <div>
                                <div class="flex justify-between items-center mb-1 text-xs">
                                    <span class="font-bold text-zinc-300">وزن شما (کیلوگرم)</span>
                                    <span class="font-mono text-lime-400 font-black text-sm">{{ toPersianDigits(bmiWeight) }} kg</span>
                                </div>
                                <input
                                    v-model.number="bmiWeight"
                                    type="range"
                                    min="40"
                                    max="160"
                                    class="w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                                />
                            </div>

                            <!-- Age Slider -->
                            <div>
                                <div class="flex justify-between items-center mb-1 text-xs">
                                    <span class="font-bold text-zinc-300">سن شما</span>
                                    <span class="font-mono text-white font-bold text-sm">{{ toPersianDigits(bmiAge) }} سال</span>
                                </div>
                                <input
                                    v-model.number="bmiAge"
                                    type="range"
                                    min="14"
                                    max="75"
                                    class="w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <!-- 6. MEMBERSHIP PRICING PLANS (Fitmaker + Chamith High-Conversion Layout) -->
        <section id="plans" class="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold">
                        <Crown class="w-3.5 h-3.5" />
                        <span>تعرفه‌های اشتراک ورزشی</span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        پلن متناسب با <span class="text-lime-400">هدف خود</span> را انتخاب کنید
                    </h2>
                    <p class="text-xs sm:text-sm text-zinc-400">
                        بدون هزینه پنهان؛ دسترسی به مدرن‌ترین سالن بدنسازی، کمد دیجیتال هوشمند، برنامه تمرینی و تخفیف‌های ویژه خدمات.
                    </p>
                </div>

                <!-- Plans Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    <div
                        v-for="(plan, idx) in plans"
                        :key="plan.id"
                        class="rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative"
                        :class="idx === 1 
                            ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 lg:-translate-y-3' 
                            : 'bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700'"
                    >
                        <!-- Most Popular Badge -->
                        <div v-if="idx === 1" class="absolute -top-3.5 right-1/2 translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-black text-[11px] font-black uppercase tracking-wider shadow-md">
                            پیشنهاد پرطرفدار VIP
                        </div>

                        <div class="space-y-6 text-right">
                            <div>
                                <h3 class="text-xl font-black text-white">{{ plan.title }}</h3>
                                <p class="text-xs text-zinc-400 mt-1 font-mono">
                                    مدت اعتبار: {{ toPersianDigits(plan.duration_days) }} روز
                                    <span v-if="plan.sessions_limit">({{ toPersianDigits(plan.sessions_limit) }} جلسه)</span>
                                </p>
                            </div>

                            <!-- Price -->
                            <div class="py-4 border-y border-zinc-800/70">
                                <span class="text-3xl sm:text-4xl font-black text-lime-400 font-mono">{{ formatPrice(plan.price) }}</span>
                            </div>

                            <!-- Features list -->
                            <ul class="space-y-3 text-xs text-zinc-300">
                                <li v-for="(b, bIdx) in plan.benefits" :key="bIdx" class="flex items-center gap-2.5">
                                    <CheckCircle2 class="w-4 h-4 text-lime-400 shrink-0" />
                                    <span>{{ b }}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="pt-8">
                            <Link
                                :href="`/payment/membership/${plan.id}`"
                                method="post"
                                as="button"
                                class="w-full py-4 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                                :class="idx === 1 ? 'bg-lime-400 hover:bg-lime-300 text-black shadow-lime-400/20' : 'bg-zinc-800 hover:bg-zinc-700 text-white'"
                            >
                                <span>ثبت نام و شروع تمرین</span>
                                <ArrowLeft class="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- 7. WEEKLY TIMETABLE & WORKING HOURS (Chamith Style) -->
        <section class="py-20 bg-zinc-900/50 border-b border-zinc-800/80 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    <div class="lg:col-span-5 text-right space-y-4">
                        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold">
                            <Clock class="w-3.5 h-3.5" />
                            <span>ساعت کاری و زمان‌بندی مجموعه</span>
                        </div>
                        <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            تمرین در <span class="text-lime-400">ایده‌آل‌ترین ساعات</span> شبانه‌روز
                        </h2>
                        <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            باشگاه M8 با ساعات کاری منعطف و بدون وقفه در طول هفته، امکان ورزش را برای شاغلین، دانشجویان و ورزشکاران حرفه‌ای فراهم کرده است.
                        </p>
                        <div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3">
                            <div class="w-3 h-3 rounded-full bg-lime-400 animate-ping"></div>
                            <span class="text-xs font-bold text-white">هم‌اکنون سالن باز و پذیرای شماست</span>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div class="rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
                            <table class="w-full text-right text-xs">
                                <thead>
                                    <tr class="border-b border-zinc-800 text-zinc-400 bg-zinc-900/80">
                                        <th class="p-4 sm:p-5">روز هفته</th>
                                        <th class="p-4 sm:p-5">ساعت فعالیت</th>
                                        <th class="p-4 sm:p-5 text-center">بخش‌ها و خدمات</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-zinc-800/60">
                                    <tr class="hover:bg-zinc-900/40">
                                        <td class="p-4 sm:p-5 font-bold text-white">شنبه الی چهارشنبه</td>
                                        <td class="p-4 sm:p-5 font-mono text-lime-400 font-bold">۰۶:۰۰ صبح الی ۲۳:۳۰ شب</td>
                                        <td class="p-4 sm:p-5 text-center text-zinc-300">بدنسازی، کراس‌فیت، کافه، اسپا و پیرایش</td>
                                    </tr>
                                    <tr class="hover:bg-zinc-900/40">
                                        <td class="p-4 sm:p-5 font-bold text-white">پنج‌شنبه‌ها</td>
                                        <td class="p-4 sm:p-5 font-mono text-lime-400 font-bold">۰۶:۰۰ صبح الی ۲۲:۰۰ شب</td>
                                        <td class="p-4 sm:p-5 text-center text-zinc-300">تمامی بخش‌ها و کلاس‌های فیتنس</td>
                                    </tr>
                                    <tr class="hover:bg-zinc-900/40">
                                        <td class="p-4 sm:p-5 font-bold text-white">جمعه‌ها و تعطیلات</td>
                                        <td class="p-4 sm:p-5 font-mono text-amber-400 font-bold">۰۹:۰۰ صبح الی ۲۰:۰۰ شب</td>
                                        <td class="p-4 sm:p-5 text-center text-zinc-300">سالن اصلی، کافه و ماساژ ریکاوری</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- 8. COACHES & TRAINERS SHOWCASE (Real Iranian Coaches) -->
        <section id="coaches" class="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold">
                        <Award class="w-3.5 h-3.5" />
                        <span>کادر مربیان ارشد M8</span>
                    </div>
                    <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        همراه با <span class="text-lime-400">بهترین قهرمانان و مربیان</span> تمرین کنید
                    </h2>
                    <p class="text-xs sm:text-sm text-zinc-400">
                        مربیان رسمی با مدارک بین‌المللی و کارنامه درخشان در تدوین برنامه‌های علمی تمرین، تغذیه و آماده‌سازی مسابقات.
                    </p>
                </div>

                <!-- Coaches Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        v-for="(coach, cIdx) in (trainers && trainers.length ? trainers : [
                            { user: { name: 'علی رستمی' }, bio: 'سرمربی ارشد فیتنس و بادی‌بیلدینگ با ۱۰ سال سابقه، قهرمان مسابقات کشوری', specialties: ['هایپرتروفی', 'آماده‌سازی مسابقات', 'تغذیه ورزشی'] },
                            { user: { name: 'رضا طاهری' }, bio: 'مربی رسمی کراس‌فیت فدراسیون، متخصص تمرینات قدرتی و چربی‌سوزی HIIT', specialties: ['کراس‌فیت', 'توان انفجاری', 'اصلاح حرکتی'] },
                            { user: { name: 'امیرحسین سهرابی' }, bio: 'کارشناس ارشد فیزیولوژی ورزش، متخصص کاهش وزن و طراحی رژیم کتوژیک', specialties: ['کاهش وزن', 'آنالیز InBody', 'فانکشنال'] },
                            { user: { name: 'محمدرضا کاظمی' }, bio: 'مربی بدنسازی و ماسور ارشد تخصصی ریکاوری و آسیب‌شناسی ورزشی', specialties: ['ماساژ ورزشی', 'آسیب‌شناسی', 'موبیلیتی'] },
                        ])"
                        :key="cIdx"
                        class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden group hover:border-lime-400/40 transition-all duration-300 shadow-xl flex flex-col"
                    >
                        <div class="relative h-80 overflow-hidden bg-zinc-950">
                            <img
                                :src="defaultCoachImages[cIdx % defaultCoachImages.length]"
                                :alt="coach.user?.name"
                                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" />
                        </div>

                        <div class="p-6 text-right flex-1 flex flex-col justify-between space-y-3">
                            <div>
                                <h3 class="text-lg font-black text-white group-hover:text-lime-400 transition-colors">{{ coach.user?.name }}</h3>
                                <p class="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">{{ coach.bio }}</p>
                            </div>

                            <div class="pt-3 border-t border-zinc-800/70 flex flex-wrap gap-1.5 justify-end">
                                <span
                                    v-for="(spec, sIdx) in (coach.specialties || ['بدنسازی', 'برنامه تمرینی'])"
                                    :key="sIdx"
                                    class="px-2 py-0.5 rounded-md bg-zinc-800 text-[10px] text-zinc-300 font-semibold"
                                >
                                    {{ spec }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- 9. FREE CONSULTATION & 1-DAY PASS (Lead Form Section) -->
        <section id="consultation" class="py-20 lg:py-28 bg-zinc-900/50 border-b border-zinc-800/80 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl p-8 sm:p-14">
                    
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        <!-- Contact Info & Perks -->
                        <div class="lg:col-span-5 text-right space-y-6">
                            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold">
                                <Sparkles class="w-3.5 h-3.5" />
                                <span>هدیه ویژه عضویت جدید</span>
                            </div>

                            <h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                                یک جلسه تمرین یا <br />
                                <span class="text-lime-400">مشاوره رایگان</span> مهمان ما باشید
                            </h2>

                            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                                شماره تماس خود را ثبت کنید تا مربیان ارشد M8 جهت ارزیابی ترکیب بدنی و تنظیم وقت مشاوره حضوری در باشگاه با شما تماس بگیرند.
                            </p>

                            <div class="space-y-3 text-xs text-zinc-300 pt-2">
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-xl bg-zinc-800 text-lime-400 flex items-center justify-center shrink-0">
                                        <MapPin class="w-4 h-4" />
                                    </div>
                                    <span>ساری، مازندران (لوکیشن دقیق باشگاه در مپ)</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-xl bg-zinc-800 text-lime-400 flex items-center justify-center shrink-0">
                                        <Phone class="w-4 h-4" />
                                    </div>
                                    <span dir="ltr">{{ gymSettings.phone || '011-33221100' }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Lead Submission Form -->
                        <div class="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800">
                            <form @submit.prevent="submitLead" class="space-y-4 text-right">
                                <div>
                                    <label class="block text-xs font-bold text-zinc-300 mb-1.5">نام و نام خانوادگی</label>
                                    <input
                                        v-model="leadForm.name"
                                        type="text"
                                        placeholder="مثال: علیرضا رستمی"
                                        class="w-full h-12 bg-zinc-900 border border-zinc-800 rounded-xl px-4 text-xs text-white focus:border-lime-400 outline-none transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <label class="block text-xs font-bold text-zinc-300 mb-1.5">شماره همراه (جهت هماهنگی پیامکی/تماس)</label>
                                    <input
                                        v-model="leadForm.mobile"
                                        type="tel"
                                        dir="ltr"
                                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                        class="w-full h-12 bg-zinc-900 border border-zinc-800 rounded-xl px-4 text-xs text-white focus:border-lime-400 outline-none transition-colors"
                                        required
                                    />
                                </div>

                                <div>
                                    <label class="block text-xs font-bold text-zinc-300 mb-1.5">هدف ورزشی یا پیام شما (اختیاری)</label>
                                    <textarea
                                        v-model="leadForm.message"
                                        rows="3"
                                        placeholder="مثال: هدفم کاهش وزن ۱۰ کیلو و عضله‌سازی است..."
                                        class="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-xs text-white focus:border-lime-400 outline-none transition-colors"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    :disabled="leadForm.processing"
                                    class="w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs transition-all shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                >
                                    <Send class="w-4 h-4" />
                                    <span>ثبت درخواست مشاوره رایگان</span>
                                </button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <!-- 10. FAQ ACCORDION -->
        <section class="py-20 lg:py-24 bg-zinc-950 relative">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <div class="text-center space-y-4 mb-14">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold">
                        <HelpCircle class="w-3.5 h-3.5" />
                        <span>پرسش‌های متداول</span>
                    </div>
                    <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        پاسخ به سوالات پرتکرار شما
                    </h2>
                </div>

                <!-- Accordion Items -->
                <div class="space-y-3 text-right">
                    <div
                        v-for="(faq, fIdx) in faqs"
                        :key="faq.id"
                        class="rounded-2xl bg-zinc-900/70 border border-zinc-800/80 overflow-hidden transition-colors"
                    >
                        <button
                            @click="toggleFaq(fIdx)"
                            class="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-lime-400 transition-colors cursor-pointer"
                        >
                            <span>{{ faq.question }}</span>
                            <ChevronDown
                                class="w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0"
                                :class="{ 'rotate-180 text-lime-400': activeFaq === fIdx }"
                            />
                        </button>
                        <div v-show="activeFaq === fIdx" class="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </PublicLayout>
</template>

<style scoped>
@keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(50%); }
}
.animate-marquee {
    display: inline-block;
    animation: marquee 25s linear infinite;
}
</style>
