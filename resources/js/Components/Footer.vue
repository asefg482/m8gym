<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { MapPin, Phone, Clock, ShieldCheck, Heart } from '@lucide/vue';

const page = usePage();
const gym = page.props.gym || {};
</script>

<template>
    <footer class="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 text-sm mt-20 pb-20 lg:pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <!-- Col 1: Brand & Slogan -->
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5">
                            <div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                                <span class="text-base font-black text-lime-400 font-sans">M8</span>
                            </div>
                        </div>
                        <span class="text-lg font-black text-white">M8 FIT CLUB</span>
                    </div>
                    <p class="text-xs text-zinc-400 leading-relaxed">
                        پیشرفته‌ترین مجموعه ورزشی و تندرستی ساری با مساحت بیش از ۲۵۰۰ متر مربع، مربیان رسمی فدراسیون، کافه سلامت، ماساژ و آرایشگاه VIP.
                    </p>
                    <div class="flex items-center gap-3 pt-2">
                        <a
                            :href="gym.instagram || 'https://www.instagram.com/m8_fitclub/?hl=fa'"
                            target="_blank"
                            rel="noopener"
                            class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors"
                            aria-label="Instagram"
                        >
                            <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                        <a
                            :href="gym.neshan_maps || 'https://neshan.org/maps/places/3b39d0a9ced51c7212d21bd534781b5e#c36.562-53.074-15z-0p'"
                            target="_blank"
                            rel="noopener"
                            class="px-3 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 text-zinc-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors text-xs font-bold"
                            title="مسیریابی در نشان"
                        >
                            <MapPin class="w-3.5 h-3.5 text-lime-400" />
                            <span>نشان</span>
                        </a>
                        <a
                            :href="gym.google_maps || 'https://www.google.com/maps/search/+SH/?entry=wc&hl=el'"
                            target="_blank"
                            rel="noopener"
                            class="px-3 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 text-zinc-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors text-xs font-bold"
                            title="مشاهده در گوگل مپ"
                        >
                            <span>Google Maps</span>
                        </a>
                    </div>
                </div>

                <!-- Col 2: Fast Links -->
                <div class="space-y-3">
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider">دسترسی سریع</h3>
                    <ul class="space-y-2 text-xs">
                        <li><Link href="/" class="hover:text-lime-400 transition-colors">صفحه اصلی باشگاه</Link></li>
                        <li><Link href="/cafe" class="hover:text-lime-400 transition-colors">کافه و رستوران رژیمی</Link></li>
                        <li><Link href="/shop" class="hover:text-lime-400 transition-colors">فروشگاه مکمل و پوشاک M8</Link></li>
                        <li><Link href="/massage" class="hover:text-lime-400 transition-colors">ماساژ ورزشی و ریکاوری</Link></li>
                        <li><Link href="/hairdresser" class="hover:text-lime-400 transition-colors">آرایشگاه و پیرایش اختصاصی</Link></li>
                    </ul>
                </div>

                <!-- Col 3: Contact & Hours -->
                <div class="space-y-3">
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider">اطلاعات تماس و ساعت کاری</h3>
                    <div class="space-y-2.5 text-xs text-zinc-400">
                        <div class="flex items-start gap-2">
                            <MapPin class="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                            <span>{{ gym.address || 'مازندران، ساری، خیابان قارن، مجموعه M8' }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Phone class="w-4 h-4 text-lime-400 shrink-0" />
                            <span>{{ gym.phone || '۰۱۱-۳۳۲۲۱۱۰۰' }} | {{ gym.mobile || '۰۹۱۱۱۲۳۴۵۶۷' }}</span>
                        </div>
                        <div class="flex items-start gap-2">
                            <Clock class="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                            <span>{{ gym.work_hours || '۶:۰۰ الی ۲۳:۳۰ (جمعه‌ها ۹ تا ۲۰)' }}</span>
                        </div>
                    </div>
                </div>

                <!-- Col 4: Trust Badges / Enamad -->
                <div class="space-y-3">
                    <h3 class="text-xs font-bold text-white uppercase tracking-wider">مجوزها و نماد اعتماد</h3>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center flex flex-col items-center justify-center gap-1.5">
                            <ShieldCheck class="w-6 h-6 text-lime-400" />
                            <span class="text-[10px] text-zinc-300 font-semibold">پروانه رسمی ورزش</span>
                            <span class="text-[9px] text-zinc-400">فدراسیون بدنسازی</span>
                        </div>
                        <div class="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center flex flex-col items-center justify-center gap-1.5">
                            <div class="w-6 h-6 rounded-full border border-lime-400/50 flex items-center justify-center text-lime-400 text-xs font-bold font-sans">
                                e
                            </div>
                            <span class="text-[10px] text-zinc-300 font-semibold">اینماد الکترونیکی</span>
                            <span class="text-[9px] text-zinc-400">نماد تجارت الکترونیک</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Copyright -->
            <div class="border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
                <p>© ۲۰۲۶ تمامی حقوق محفوظ و متعلق به باشگاه ورزشی M8 ساری است.</p>
                <p class="flex items-center gap-1 text-[11px]">
                    طراحی و توسعه پلتفرم یکپارچه با
                    <Heart class="w-3.5 h-3.5 text-lime-400 fill-lime-400" />
                    برای قهرمانان M8
                </p>
            </div>
        </div>
    </footer>
</template>
