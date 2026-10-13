import { i as toPersianDigits, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$1 } from "./PublicLayout-BmUbivea.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, vShow, withCtx, withDirectives, withModifiers } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { ArrowLeft, Award, Calculator, CheckCircle2, ChevronDown, Clock, Crown, Dumbbell, Flame, HelpCircle, MapPin, Phone, Send, Sparkles, Users } from "@lucide/vue";
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region resources/js/Pages/Public/Home.vue
var _sfc_main = {
	__name: "Home",
	__ssrInlineRender: true,
	props: {
		banners: Array,
		plans: Array,
		trainers: Array,
		services: Array,
		faqs: Array,
		featuredProducts: Array,
		featuredBuffet: Array,
		gymSettings: Object
	},
	setup(__props) {
		const leadForm = useForm({
			name: "",
			mobile: "",
			message: ""
		});
		function submitLead() {
			leadForm.post("/lead", {
				preserveScroll: true,
				onSuccess: () => {
					leadForm.reset();
				}
			});
		}
		const activeFaq = ref(0);
		function toggleFaq(index) {
			activeFaq.value = activeFaq.value === index ? null : index;
		}
		const bmiHeight = ref(180);
		const bmiWeight = ref(78);
		const bmiGender = ref("male");
		const bmiAge = ref(26);
		const calculatedBmi = computed(() => {
			if (!bmiHeight.value || !bmiWeight.value) return 0;
			const heightInMeters = bmiHeight.value / 100;
			const bmi = bmiWeight.value / (heightInMeters * heightInMeters);
			return Math.round(bmi * 10) / 10;
		});
		const bmiStatus = computed(() => {
			const val = calculatedBmi.value;
			if (val < 18.5) return {
				text: "کمبود وزن (Underweight)",
				color: "text-amber-400",
				badge: "bg-amber-400/10 border-amber-400/30",
				advice: "تمرکز بر افزایش حجم عضلانی خشک و دریافت کالری مازاد همراه با تمرینات مقاومتی M8."
			};
			if (val <= 24.9) return {
				text: "وزن ایده‌آل و نرمال (Normal)",
				color: "text-lime-400",
				badge: "bg-lime-400/10 border-lime-400/30",
				advice: "عالی هستید! حفظ ترکیب بدنی ایده‌آل و ارتقای رکوردها با برنامه‌های هایپرتروفی مربیان M8."
			};
			if (val <= 29.9) return {
				text: "اضافه وزن ملایم (Overweight)",
				color: "text-orange-400",
				badge: "bg-orange-400/10 border-orange-400/30",
				advice: "ترکیب تمرینات کراس‌فیت و هوازی با رژیم بوفه سلامت M8 برای چربی‌سوزی پرسرعت."
			};
			return {
				text: "چاقی (Obese)",
				color: "text-rose-400",
				badge: "bg-rose-400/10 border-rose-400/30",
				advice: "برنامه اختصاصی کاهش وزن، پایش دوره‌ای InBody و مشاوره تغذیه جهت بازگشت به وزن سلامت."
			};
		});
		const facilities = [
			{
				title: "سالن اصلی بدنسازی و وزنه‌های آزاد",
				subtitle: "Free Weights & Heavy Iron Zone",
				desc: "بیش از ۲۵۰۰ متر مربع فضا با پیشرفته‌ترین دستگاه‌های روز دنیا (برندهای DHZ و Matrix)، دمبل‌های تا ۶۰ کیلوگرم، نیمکت‌های المپیک و صفحات استاندارد.",
				image: "/images/gym/gym_floor_main.jpg",
				badge: "سالن اصلی",
				link: "/#plans"
			},
			{
				title: "کافه و رستوران رژیمی M8",
				subtitle: "Protein Fuel & Healthy Nutrition Bar",
				desc: "بار پروتئینی تخصصی با اسموتی‌های ارگانیک، شیک‌های پس از تمرین، قهوه اسپرسو تخصصی و بشقاب‌های پروتئینی تنظیم‌شده متناسب با درشت‌مغذی‌ها.",
				image: "/images/gym/gym_protein_cafe.jpg",
				badge: "کافه سلامت",
				link: "/cafe"
			},
			{
				title: "مرکز تخصصی ماساژ و ریکاوری",
				subtitle: "M8 Sports Massage & Recovery Spa",
				desc: "ماساژ ورزشی دیپ‌تیشو، بادکش‌درمانی مدرن، ریکاوری مفاصل و آزادسازی میوفاشیال توسط ماسورهای رسمی با اتاق‌های آرامش‌بخش و VIP.",
				image: "/images/gym/gym_massage_spa.jpg",
				badge: "اسپا و ریکاوری",
				link: "/massage"
			},
			{
				title: "آرایشگاه و پیرایش اختصاصی VIP",
				subtitle: "Gentlemen Grooming & Barber Lounge",
				desc: "خدمات کامل گرومینگ، فیشیال پوست، اصلاح مو و گریم حرفه‌ای با رزرو اختصاصی آنلاین بدون معطلی پس از اتمام جلسه تمرین.",
				image: "/images/gym/gym_barber_vip.jpg",
				badge: "پیرایش VIP",
				link: "/hairdresser"
			}
		];
		const defaultCoachImages = [
			"/images/gym/coach_ali.jpg",
			"/images/gym/coach_reza.jpg",
			"https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80"
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "باشگاه بدنسازی و تندرستی M8 ساری | بزرگترین فیت‌کلاب شمال کشور" }, null, _parent, _scopeId));
						_push(`<section class="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/80 pt-6 pb-16" data-v-e83d613b${_scopeId}><div class="absolute top-1/4 -right-20 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" data-v-e83d613b${_scopeId}></div><div class="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" data-v-e83d613b${_scopeId}></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-16" data-v-e83d613b${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center" data-v-e83d613b${_scopeId}><div class="lg:col-span-7 text-right space-y-6" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-lime-400/40 text-lime-400 text-xs font-black shadow-lg shadow-lime-500/10" data-v-e83d613b${_scopeId}><span class="w-2 h-2 rounded-full bg-lime-400 animate-ping" data-v-e83d613b${_scopeId}></span><span data-v-e83d613b${_scopeId}>M8 FIT CLUB • مدرن‌ترین فیت‌کلاب ساری</span></div><h1 class="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.15]" data-v-e83d613b${_scopeId}> فراتر از یک باشگاه؛<br data-v-e83d613b${_scopeId}> اینجا داستان <span class="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400" data-v-e83d613b${_scopeId}> قهرمانی تو <svg class="absolute -bottom-2 left-0 w-full h-3 text-lime-400/50" viewBox="0 0 100 20" preserveAspectRatio="none" data-v-e83d613b${_scopeId}><path d="M0 10 Q50 20 100 10" stroke="currentColor" stroke-width="4" fill="none" data-v-e83d613b${_scopeId}></path></svg></span> آغاز می‌شود </h1><p class="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl" data-v-e83d613b${_scopeId}>${ssrInterpolate(__props.gymSettings.slogan || "بزرگترین و مجهزترین مجموعه ورزشی و تندرستی شمال کشور با ۲۵۰۰ متر مربع فضا، مربیان رسمی فدراسیون، بوفه تغذیه سلامت، اسپا ریکاوری و پیرایشگاه اختصاصی در ساری.")}</p><div class="pt-2 flex flex-wrap items-center gap-4" data-v-e83d613b${_scopeId}><a href="#consultation" class="px-8 py-4 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm transition-all duration-300 shadow-xl shadow-lime-400/25 flex items-center gap-2.5 group cursor-pointer" data-v-e83d613b${_scopeId}><span data-v-e83d613b${_scopeId}>رزرو جلسه ارزیابی و تمرین رایگان</span>`);
						_push(ssrRenderComponent(unref(ArrowLeft), { class: "w-4 h-4 group-hover:-translate-x-1.5 transition-transform" }, null, _parent, _scopeId));
						_push(`</a><a href="#plans" class="px-7 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700/80 hover:border-lime-400/40 transition-all flex items-center gap-2" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Crown), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>مشاهده پلن‌های عضویت</span></a></div><div class="pt-6 border-t border-zinc-800/70 grid grid-cols-3 gap-4 max-w-lg" data-v-e83d613b${_scopeId}><div data-v-e83d613b${_scopeId}><span class="block text-2xl sm:text-3xl font-black text-white font-mono" data-v-e83d613b${_scopeId}>۲,۵۰۰+</span><span class="text-xs text-zinc-400" data-v-e83d613b${_scopeId}>متر مربع مساحت سالن</span></div><div data-v-e83d613b${_scopeId}><span class="block text-2xl sm:text-3xl font-black text-lime-400 font-mono" data-v-e83d613b${_scopeId}>۱۵+</span><span class="text-xs text-zinc-400" data-v-e83d613b${_scopeId}>مربی رسمی فدراسیون</span></div><div data-v-e83d613b${_scopeId}><span class="block text-2xl sm:text-3xl font-black text-white font-mono" data-v-e83d613b${_scopeId}>۷+ سال</span><span class="text-xs text-zinc-400" data-v-e83d613b${_scopeId}>سابقه درخشان در ساری</span></div></div></div><div class="lg:col-span-5 relative flex justify-center" data-v-e83d613b${_scopeId}><div class="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900 group" data-v-e83d613b${_scopeId}><img src="/images/gym/hero_athlete.jpg" alt="M8 Gym Sari Athlete" class="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110" data-v-e83d613b${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" data-v-e83d613b${_scopeId}></div><div class="absolute top-6 right-6 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-zinc-800 shadow-2xl flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-10 h-10 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div><div class="text-right" data-v-e83d613b${_scopeId}><span class="block text-xs font-black text-white" data-v-e83d613b${_scopeId}>۲,۴۵۰+ ورزشکار فعال</span><span class="text-[10px] text-zinc-400" data-v-e83d613b${_scopeId}>جامعه بزرگ قهرمانان M8</span></div></div><div class="absolute bottom-6 left-6 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-lime-400/30 shadow-2xl flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Flame), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div><div class="text-right" data-v-e83d613b${_scopeId}><span class="block text-xs font-black text-white" data-v-e83d613b${_scopeId}>۸۵۰+ کیلوکالری / جلسه</span><span class="text-[10px] text-lime-400" data-v-e83d613b${_scopeId}>چربی‌سوزی با متد HIIT و هایپرتروفی</span></div></div></div></div></div></div></section><div class="w-full bg-lime-400 text-black py-3.5 overflow-hidden whitespace-nowrap border-y border-lime-300 font-black text-sm select-none tracking-wider" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-8 animate-marquee" data-v-e83d613b${_scopeId}><span data-v-e83d613b${_scopeId}>M8 FIT CLUB</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>بزرگترین سالن بدنسازی شمال کشور</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>CROSSFIT &amp; FUNCTIONAL</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>بوفه و کافه رژیمی M8 FUEL</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>مرکز ماساژ تخصصی و ریکاوری</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>آرایشگاه و پیرایش VIP</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>ساری، خیابان قارن</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>تمرین بدون محدودیت</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>M8 FIT CLUB</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>بزرگترین سالن بدنسازی شمال کشور</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>CROSSFIT &amp; FUNCTIONAL</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>بوفه و کافه رژیمی M8 FUEL</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>مرکز ماساژ تخصصی و ریکاوری</span><span data-v-e83d613b${_scopeId}>•</span><span data-v-e83d613b${_scopeId}>آرایشگاه و پیرایش VIP</span></div></div><section id="about" class="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative" data-v-e83d613b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-v-e83d613b${_scopeId}><div class="lg:col-span-6 relative" data-v-e83d613b${_scopeId}><div class="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl" data-v-e83d613b${_scopeId}><img src="/images/gym/gym_floor_main.jpg" alt="سالن ۲۵۰۰ متری باشگاه M8 ساری" class="w-full h-[400px] sm:h-[480px] object-cover object-center filter contrast-110" data-v-e83d613b${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" data-v-e83d613b${_scopeId}></div><div class="absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between" data-v-e83d613b${_scopeId}><div data-v-e83d613b${_scopeId}><span class="text-xs font-bold text-lime-400" data-v-e83d613b${_scopeId}>فضای ۲۵۰۰ متری اختصاصی</span><p class="text-sm font-black text-white mt-0.5" data-v-e83d613b${_scopeId}>مجهز به برترین تجهیزات بیومکانیک ۲۰۲۴</p></div><div class="w-10 h-10 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center font-bold" data-v-e83d613b${_scopeId}> M8 </div></div></div></div><div class="lg:col-span-6 space-y-6 text-right" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Sparkles), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>درباره فیت‌کلاب M8 ساری</span></div><h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight" data-v-e83d613b${_scopeId}> استانداردی نو در <br data-v-e83d613b${_scopeId}><span class="text-lime-400" data-v-e83d613b${_scopeId}>ورزش و تندرستی</span> شمال ایران </h2><p class="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal" data-v-e83d613b${_scopeId}> مجموعه ورزشی M8 با بیش از ۷ سال سابقه و با مساحت وسیع ۲۵۰۰ متر مربع در شهر ساری بنا شده است. هدف ما خلق محیطی حرفه‌ای، باانگیزه و لوکس است که در آن ورزشکاران در هر سطحی—از مبتدی تا قهرمانان بین‌المللی—به تمام ابزارهای رشد جسمانی و ذهنی دسترسی داشته باشند. </p><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs" data-v-e83d613b${_scopeId}><div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div><span class="font-bold text-zinc-200" data-v-e83d613b${_scopeId}>دستگاه‌های وارداتی با زاویه ارگونومیک</span></div><div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div><span class="font-bold text-zinc-200" data-v-e83d613b${_scopeId}>سیستم تهویه هوای بیمارستانی و هوای تازه</span></div><div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div><span class="font-bold text-zinc-200" data-v-e83d613b${_scopeId}>باکس مجزای کراس‌فیت و چمن فانکشنال</span></div><div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div><span class="font-bold text-zinc-200" data-v-e83d613b${_scopeId}>کمد دیجیتال هوشمند و دوش‌های اختصاصی</span></div></div><div class="pt-2" data-v-e83d613b${_scopeId}><a href="#consultation" class="inline-flex items-center gap-2 text-xs font-bold text-lime-400 hover:text-lime-300 transition-colors" data-v-e83d613b${_scopeId}><span data-v-e83d613b${_scopeId}>درخواست بازدید حضوری از مجموعه</span>`);
						_push(ssrRenderComponent(unref(ArrowLeft), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`</a></div></div></div></div></section><section id="facilities" class="py-20 lg:py-28 bg-zinc-900/40 border-b border-zinc-800/80 relative" data-v-e83d613b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="text-center max-w-3xl mx-auto space-y-4 mb-16" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>امکانات و بخش‌های یکپارچه</span></div><h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight" data-v-e83d613b${_scopeId}> همه نیازهای ورزشکار زیر <span class="text-lime-400" data-v-e83d613b${_scopeId}>یک سقف</span></h2><p class="text-xs sm:text-sm text-zinc-400" data-v-e83d613b${_scopeId}> تنها باشگاه جامع شمال کشور که علاوه بر سالن بدنسازی، دارای کافه‌رستوران ارگانیک، ماساژ ورزشی تخصصی، پیرایشگاه VIP و فروشگاه مکمل اورجینال است. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-e83d613b${_scopeId}><!--[-->`);
						ssrRenderList(facilities, (fac, idx) => {
							_push(`<div class="group rounded-3xl bg-zinc-900/80 border border-zinc-800/80 overflow-hidden hover:border-lime-400/40 transition-all duration-500 shadow-xl flex flex-col" data-v-e83d613b${_scopeId}><div class="relative h-64 sm:h-72 overflow-hidden bg-zinc-950" data-v-e83d613b${_scopeId}><img${ssrRenderAttr("src", fac.image)}${ssrRenderAttr("alt", fac.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95" data-v-e83d613b${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" data-v-e83d613b${_scopeId}></div><span class="absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-[11px] font-bold text-lime-400" data-v-e83d613b${_scopeId}>${ssrInterpolate(fac.badge)}</span></div><div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-right" data-v-e83d613b${_scopeId}><div data-v-e83d613b${_scopeId}><span class="text-[11px] font-mono text-zinc-400 tracking-wider uppercase" data-v-e83d613b${_scopeId}>${ssrInterpolate(fac.subtitle)}</span><h3 class="text-xl sm:text-2xl font-black text-white mt-1 group-hover:text-lime-400 transition-colors" data-v-e83d613b${_scopeId}>${ssrInterpolate(fac.title)}</h3><p class="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed font-normal" data-v-e83d613b${_scopeId}>${ssrInterpolate(fac.desc)}</p></div><div class="pt-2" data-v-e83d613b${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: fac.link,
								class: "inline-flex items-center gap-2 text-xs font-black text-white hover:text-lime-400 transition-colors"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<span data-v-e83d613b${_scopeId}>مشاهده جزئیات و رزرو</span>`);
										_push(ssrRenderComponent(unref(ArrowLeft), { class: "w-3.5 h-3.5 text-lime-400 group-hover:-translate-x-1 transition-transform" }, null, _parent, _scopeId));
									} else return [createVNode("span", null, "مشاهده جزئیات و رزرو"), createVNode(unref(ArrowLeft), { class: "w-3.5 h-3.5 text-lime-400 group-hover:-translate-x-1 transition-transform" })];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div></div></div>`);
						});
						_push(`<!--]--></div></div></section><section class="py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800/80 relative overflow-hidden" data-v-e83d613b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-2xl relative" data-v-e83d613b${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" data-v-e83d613b${_scopeId}><div class="lg:col-span-5 text-right space-y-4" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calculator), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>محاسبه‌گر هوشمند توده بدنی (BMI)</span></div><h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight" data-v-e83d613b${_scopeId}> وضعیت فیزیکی خود را <span class="text-lime-400" data-v-e83d613b${_scopeId}>آنلاین بسنجید</span></h2><p class="text-xs sm:text-sm text-zinc-400 leading-relaxed" data-v-e83d613b${_scopeId}> شاخص BMI نشان‌دهنده نسبت قد به وزن شماست. مشخصات خود را وارد کنید تا وضعیت بدنی و پیشنهاد تخصصی مربیان M8 را فوری دریافت کنید. </p><div class="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 mt-6" data-v-e83d613b${_scopeId}><div class="flex items-center justify-between" data-v-e83d613b${_scopeId}><span class="text-xs text-zinc-400" data-v-e83d613b${_scopeId}>شاخص BMI شما:</span><span class="text-3xl font-black text-white font-mono" data-v-e83d613b${_scopeId}>${ssrInterpolate(unref(toPersianDigits)(calculatedBmi.value))}</span></div><div class="flex items-center justify-between pt-2 border-t border-zinc-900" data-v-e83d613b${_scopeId}><span class="text-xs text-zinc-400" data-v-e83d613b${_scopeId}>وضعیت:</span><span class="${ssrRenderClass([[bmiStatus.value.color, bmiStatus.value.badge], "px-2.5 py-1 rounded-full text-xs font-black border"])}" data-v-e83d613b${_scopeId}>${ssrInterpolate(bmiStatus.value.text)}</span></div><p class="text-[11px] text-zinc-400 pt-1 leading-relaxed" data-v-e83d613b${_scopeId}><span class="text-lime-400 font-bold" data-v-e83d613b${_scopeId}>توصیه M8:</span> ${ssrInterpolate(bmiStatus.value.advice)}</p></div></div><div class="lg:col-span-7 bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 space-y-6 text-right" data-v-e83d613b${_scopeId}><div data-v-e83d613b${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-2" data-v-e83d613b${_scopeId}>جنسیت</label><div class="grid grid-cols-2 gap-3" data-v-e83d613b${_scopeId}><button type="button" class="${ssrRenderClass([bmiGender.value === "male" ? "bg-lime-400 text-black border-lime-400 shadow-md" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white", "py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer"])}" data-v-e83d613b${_scopeId}> آقا </button><button type="button" class="${ssrRenderClass([bmiGender.value === "female" ? "bg-lime-400 text-black border-lime-400 shadow-md" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white", "py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer"])}" data-v-e83d613b${_scopeId}> خانم </button></div></div><div data-v-e83d613b${_scopeId}><div class="flex justify-between items-center mb-1 text-xs" data-v-e83d613b${_scopeId}><span class="font-bold text-zinc-300" data-v-e83d613b${_scopeId}>قد شما (سانتی‌متر)</span><span class="font-mono text-lime-400 font-black text-sm" data-v-e83d613b${_scopeId}>${ssrInterpolate(unref(toPersianDigits)(bmiHeight.value))} cm</span></div><input${ssrRenderAttr("value", bmiHeight.value)} type="range" min="130" max="220" class="w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer" data-v-e83d613b${_scopeId}></div><div data-v-e83d613b${_scopeId}><div class="flex justify-between items-center mb-1 text-xs" data-v-e83d613b${_scopeId}><span class="font-bold text-zinc-300" data-v-e83d613b${_scopeId}>وزن شما (کیلوگرم)</span><span class="font-mono text-lime-400 font-black text-sm" data-v-e83d613b${_scopeId}>${ssrInterpolate(unref(toPersianDigits)(bmiWeight.value))} kg</span></div><input${ssrRenderAttr("value", bmiWeight.value)} type="range" min="40" max="160" class="w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer" data-v-e83d613b${_scopeId}></div><div data-v-e83d613b${_scopeId}><div class="flex justify-between items-center mb-1 text-xs" data-v-e83d613b${_scopeId}><span class="font-bold text-zinc-300" data-v-e83d613b${_scopeId}>سن شما</span><span class="font-mono text-white font-bold text-sm" data-v-e83d613b${_scopeId}>${ssrInterpolate(unref(toPersianDigits)(bmiAge.value))} سال</span></div><input${ssrRenderAttr("value", bmiAge.value)} type="range" min="14" max="75" class="w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer" data-v-e83d613b${_scopeId}></div></div></div></div></div></section><section id="plans" class="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative" data-v-e83d613b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="text-center max-w-3xl mx-auto space-y-4 mb-16" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Crown), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>تعرفه‌های اشتراک ورزشی</span></div><h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight" data-v-e83d613b${_scopeId}> پلن متناسب با <span class="text-lime-400" data-v-e83d613b${_scopeId}>هدف خود</span> را انتخاب کنید </h2><p class="text-xs sm:text-sm text-zinc-400" data-v-e83d613b${_scopeId}> بدون هزینه پنهان؛ دسترسی به مدرن‌ترین سالن بدنسازی، کمد دیجیتال هوشمند، برنامه تمرینی و تخفیف‌های ویژه خدمات. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" data-v-e83d613b${_scopeId}><!--[-->`);
						ssrRenderList(__props.plans, (plan, idx) => {
							_push(`<div class="${ssrRenderClass([idx === 1 ? "bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 lg:-translate-y-3" : "bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700", "rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative"])}" data-v-e83d613b${_scopeId}>`);
							if (idx === 1) _push(`<div class="absolute -top-3.5 right-1/2 translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-black text-[11px] font-black uppercase tracking-wider shadow-md" data-v-e83d613b${_scopeId}> پیشنهاد پرطرفدار VIP </div>`);
							else _push(`<!---->`);
							_push(`<div class="space-y-6 text-right" data-v-e83d613b${_scopeId}><div data-v-e83d613b${_scopeId}><h3 class="text-xl font-black text-white" data-v-e83d613b${_scopeId}>${ssrInterpolate(plan.title)}</h3><p class="text-xs text-zinc-400 mt-1 font-mono" data-v-e83d613b${_scopeId}> مدت اعتبار: ${ssrInterpolate(unref(toPersianDigits)(plan.duration_days))} روز `);
							if (plan.sessions_limit) _push(`<span data-v-e83d613b${_scopeId}>(${ssrInterpolate(unref(toPersianDigits)(plan.sessions_limit))} جلسه)</span>`);
							else _push(`<!---->`);
							_push(`</p></div><div class="py-4 border-y border-zinc-800/70" data-v-e83d613b${_scopeId}><span class="text-3xl sm:text-4xl font-black text-lime-400 font-mono" data-v-e83d613b${_scopeId}>${ssrInterpolate(unref(formatPrice)(plan.price))}</span></div><ul class="space-y-3 text-xs text-zinc-300" data-v-e83d613b${_scopeId}><!--[-->`);
							ssrRenderList(plan.benefits, (b, bIdx) => {
								_push(`<li class="flex items-center gap-2.5" data-v-e83d613b${_scopeId}>`);
								_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4 text-lime-400 shrink-0" }, null, _parent, _scopeId));
								_push(`<span data-v-e83d613b${_scopeId}>${ssrInterpolate(b)}</span></li>`);
							});
							_push(`<!--]--></ul></div><div class="pt-8" data-v-e83d613b${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: `/payment/membership/${plan.id}`,
								method: "post",
								as: "button",
								class: ["w-full py-4 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg", idx === 1 ? "bg-lime-400 hover:bg-lime-300 text-black shadow-lime-400/20" : "bg-zinc-800 hover:bg-zinc-700 text-white"]
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<span data-v-e83d613b${_scopeId}>ثبت نام و شروع تمرین</span>`);
										_push(ssrRenderComponent(unref(ArrowLeft), { class: "w-4 h-4" }, null, _parent, _scopeId));
									} else return [createVNode("span", null, "ثبت نام و شروع تمرین"), createVNode(unref(ArrowLeft), { class: "w-4 h-4" })];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div></div>`);
						});
						_push(`<!--]--></div></div></section><section class="py-20 bg-zinc-900/50 border-b border-zinc-800/80 relative" data-v-e83d613b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" data-v-e83d613b${_scopeId}><div class="lg:col-span-5 text-right space-y-4" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>ساعت کاری و زمان‌بندی مجموعه</span></div><h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight" data-v-e83d613b${_scopeId}> تمرین در <span class="text-lime-400" data-v-e83d613b${_scopeId}>ایده‌آل‌ترین ساعات</span> شبانه‌روز </h2><p class="text-xs sm:text-sm text-zinc-400 leading-relaxed" data-v-e83d613b${_scopeId}> باشگاه M8 با ساعات کاری منعطف و بدون وقفه در طول هفته، امکان ورزش را برای شاغلین، دانشجویان و ورزشکاران حرفه‌ای فراهم کرده است. </p><div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-3 h-3 rounded-full bg-lime-400 animate-ping" data-v-e83d613b${_scopeId}></div><span class="text-xs font-bold text-white" data-v-e83d613b${_scopeId}>هم‌اکنون سالن باز و پذیرای شماست</span></div></div><div class="lg:col-span-7" data-v-e83d613b${_scopeId}><div class="rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl" data-v-e83d613b${_scopeId}><table class="w-full text-right text-xs" data-v-e83d613b${_scopeId}><thead data-v-e83d613b${_scopeId}><tr class="border-b border-zinc-800 text-zinc-400 bg-zinc-900/80" data-v-e83d613b${_scopeId}><th class="p-4 sm:p-5" data-v-e83d613b${_scopeId}>روز هفته</th><th class="p-4 sm:p-5" data-v-e83d613b${_scopeId}>ساعت فعالیت</th><th class="p-4 sm:p-5 text-center" data-v-e83d613b${_scopeId}>بخش‌ها و خدمات</th></tr></thead><tbody class="divide-y divide-zinc-800/60" data-v-e83d613b${_scopeId}><tr class="hover:bg-zinc-900/40" data-v-e83d613b${_scopeId}><td class="p-4 sm:p-5 font-bold text-white" data-v-e83d613b${_scopeId}>شنبه الی چهارشنبه</td><td class="p-4 sm:p-5 font-mono text-lime-400 font-bold" data-v-e83d613b${_scopeId}>۰۶:۰۰ صبح الی ۲۳:۳۰ شب</td><td class="p-4 sm:p-5 text-center text-zinc-300" data-v-e83d613b${_scopeId}>بدنسازی، کراس‌فیت، کافه، اسپا و پیرایش</td></tr><tr class="hover:bg-zinc-900/40" data-v-e83d613b${_scopeId}><td class="p-4 sm:p-5 font-bold text-white" data-v-e83d613b${_scopeId}>پنج‌شنبه‌ها</td><td class="p-4 sm:p-5 font-mono text-lime-400 font-bold" data-v-e83d613b${_scopeId}>۰۶:۰۰ صبح الی ۲۲:۰۰ شب</td><td class="p-4 sm:p-5 text-center text-zinc-300" data-v-e83d613b${_scopeId}>تمامی بخش‌ها و کلاس‌های فیتنس</td></tr><tr class="hover:bg-zinc-900/40" data-v-e83d613b${_scopeId}><td class="p-4 sm:p-5 font-bold text-white" data-v-e83d613b${_scopeId}>جمعه‌ها و تعطیلات</td><td class="p-4 sm:p-5 font-mono text-amber-400 font-bold" data-v-e83d613b${_scopeId}>۰۹:۰۰ صبح الی ۲۰:۰۰ شب</td><td class="p-4 sm:p-5 text-center text-zinc-300" data-v-e83d613b${_scopeId}>سالن اصلی، کافه و ماساژ ریکاوری</td></tr></tbody></table></div></div></div></div></section><section id="coaches" class="py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative" data-v-e83d613b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="text-center max-w-3xl mx-auto space-y-4 mb-16" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Award), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>کادر مربیان ارشد M8</span></div><h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight" data-v-e83d613b${_scopeId}> همراه با <span class="text-lime-400" data-v-e83d613b${_scopeId}>بهترین قهرمانان و مربیان</span> تمرین کنید </h2><p class="text-xs sm:text-sm text-zinc-400" data-v-e83d613b${_scopeId}> مربیان رسمی با مدارک بین‌المللی و کارنامه درخشان در تدوین برنامه‌های علمی تمرین، تغذیه و آماده‌سازی مسابقات. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-v-e83d613b${_scopeId}><!--[-->`);
						ssrRenderList(__props.trainers && __props.trainers.length ? __props.trainers : [
							{
								user: { name: "علی رستمی" },
								bio: "سرمربی ارشد فیتنس و بادی‌بیلدینگ با ۱۰ سال سابقه، قهرمان مسابقات کشوری",
								specialties: [
									"هایپرتروفی",
									"آماده‌سازی مسابقات",
									"تغذیه ورزشی"
								]
							},
							{
								user: { name: "رضا طاهری" },
								bio: "مربی رسمی کراس‌فیت فدراسیون، متخصص تمرینات قدرتی و چربی‌سوزی HIIT",
								specialties: [
									"کراس‌فیت",
									"توان انفجاری",
									"اصلاح حرکتی"
								]
							},
							{
								user: { name: "امیرحسین سهرابی" },
								bio: "کارشناس ارشد فیزیولوژی ورزش، متخصص کاهش وزن و طراحی رژیم کتوژیک",
								specialties: [
									"کاهش وزن",
									"آنالیز InBody",
									"فانکشنال"
								]
							},
							{
								user: { name: "محمدرضا کاظمی" },
								bio: "مربی بدنسازی و ماسور ارشد تخصصی ریکاوری و آسیب‌شناسی ورزشی",
								specialties: [
									"ماساژ ورزشی",
									"آسیب‌شناسی",
									"موبیلیتی"
								]
							}
						], (coach, cIdx) => {
							_push(`<div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden group hover:border-lime-400/40 transition-all duration-300 shadow-xl flex flex-col" data-v-e83d613b${_scopeId}><div class="relative h-80 overflow-hidden bg-zinc-950" data-v-e83d613b${_scopeId}><img${ssrRenderAttr("src", defaultCoachImages[cIdx % defaultCoachImages.length])}${ssrRenderAttr("alt", coach.user?.name)} class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-110" data-v-e83d613b${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" data-v-e83d613b${_scopeId}></div></div><div class="p-6 text-right flex-1 flex flex-col justify-between space-y-3" data-v-e83d613b${_scopeId}><div data-v-e83d613b${_scopeId}><h3 class="text-lg font-black text-white group-hover:text-lime-400 transition-colors" data-v-e83d613b${_scopeId}>${ssrInterpolate(coach.user?.name)}</h3><p class="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed" data-v-e83d613b${_scopeId}>${ssrInterpolate(coach.bio)}</p></div><div class="pt-3 border-t border-zinc-800/70 flex flex-wrap gap-1.5 justify-end" data-v-e83d613b${_scopeId}><!--[-->`);
							ssrRenderList(coach.specialties || ["بدنسازی", "برنامه تمرینی"], (spec, sIdx) => {
								_push(`<span class="px-2 py-0.5 rounded-md bg-zinc-800 text-[10px] text-zinc-300 font-semibold" data-v-e83d613b${_scopeId}>${ssrInterpolate(spec)}</span>`);
							});
							_push(`<!--]--></div></div></div>`);
						});
						_push(`<!--]--></div></div></section><section id="consultation" class="py-20 lg:py-28 bg-zinc-900/50 border-b border-zinc-800/80 relative" data-v-e83d613b${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl p-8 sm:p-14" data-v-e83d613b${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-v-e83d613b${_scopeId}><div class="lg:col-span-5 text-right space-y-6" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Sparkles), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>هدیه ویژه عضویت جدید</span></div><h2 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight" data-v-e83d613b${_scopeId}> یک جلسه تمرین یا <br data-v-e83d613b${_scopeId}><span class="text-lime-400" data-v-e83d613b${_scopeId}>مشاوره رایگان</span> مهمان ما باشید </h2><p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal" data-v-e83d613b${_scopeId}> شماره تماس خود را ثبت کنید تا مربیان ارشد M8 جهت ارزیابی ترکیب بدنی و تنظیم وقت مشاوره حضوری در باشگاه با شما تماس بگیرند. </p><div class="space-y-3 text-xs text-zinc-300 pt-2" data-v-e83d613b${_scopeId}><div class="flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-9 h-9 rounded-xl bg-zinc-800 text-lime-400 flex items-center justify-center shrink-0" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div><span data-v-e83d613b${_scopeId}>ساری، مازندران (لوکیشن دقیق باشگاه در مپ)</span></div><div class="flex items-center gap-3" data-v-e83d613b${_scopeId}><div class="w-9 h-9 rounded-xl bg-zinc-800 text-lime-400 flex items-center justify-center shrink-0" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div><span dir="ltr" data-v-e83d613b${_scopeId}>${ssrInterpolate(__props.gymSettings.phone || "011-33221100")}</span></div></div></div><div class="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800" data-v-e83d613b${_scopeId}><form class="space-y-4 text-right" data-v-e83d613b${_scopeId}><div data-v-e83d613b${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5" data-v-e83d613b${_scopeId}>نام و نام خانوادگی</label><input${ssrRenderAttr("value", unref(leadForm).name)} type="text" placeholder="مثال: علیرضا رستمی" class="w-full h-12 bg-zinc-900 border border-zinc-800 rounded-xl px-4 text-xs text-white focus:border-lime-400 outline-none transition-colors" required data-v-e83d613b${_scopeId}></div><div data-v-e83d613b${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5" data-v-e83d613b${_scopeId}>شماره همراه (جهت هماهنگی پیامکی/تماس)</label><input${ssrRenderAttr("value", unref(leadForm).mobile)} type="tel" dir="ltr" placeholder="۰۹۱۲۳۴۵۶۷۸۹" class="w-full h-12 bg-zinc-900 border border-zinc-800 rounded-xl px-4 text-xs text-white focus:border-lime-400 outline-none transition-colors" required data-v-e83d613b${_scopeId}></div><div data-v-e83d613b${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5" data-v-e83d613b${_scopeId}>هدف ورزشی یا پیام شما (اختیاری)</label><textarea rows="3" placeholder="مثال: هدفم کاهش وزن ۱۰ کیلو و عضله‌سازی است..." class="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-xs text-white focus:border-lime-400 outline-none transition-colors" data-v-e83d613b${_scopeId}>${ssrInterpolate(unref(leadForm).message)}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(unref(leadForm).processing) ? " disabled" : ""} class="w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs transition-all shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(Send), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>ثبت درخواست مشاوره رایگان</span></button></form></div></div></div></div></section><section class="py-20 lg:py-24 bg-zinc-950 relative" data-v-e83d613b${_scopeId}><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-v-e83d613b${_scopeId}><div class="text-center space-y-4 mb-14" data-v-e83d613b${_scopeId}><div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" data-v-e83d613b${_scopeId}>`);
						_push(ssrRenderComponent(unref(HelpCircle), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span data-v-e83d613b${_scopeId}>پرسش‌های متداول</span></div><h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight" data-v-e83d613b${_scopeId}> پاسخ به سوالات پرتکرار شما </h2></div><div class="space-y-3 text-right" data-v-e83d613b${_scopeId}><!--[-->`);
						ssrRenderList(__props.faqs, (faq, fIdx) => {
							_push(`<div class="rounded-2xl bg-zinc-900/70 border border-zinc-800/80 overflow-hidden transition-colors" data-v-e83d613b${_scopeId}><button class="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-lime-400 transition-colors cursor-pointer" data-v-e83d613b${_scopeId}><span data-v-e83d613b${_scopeId}>${ssrInterpolate(faq.question)}</span>`);
							_push(ssrRenderComponent(unref(ChevronDown), { class: ["w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0", { "rotate-180 text-lime-400": activeFaq.value === fIdx }] }, null, _parent, _scopeId));
							_push(`</button><div class="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3" style="${ssrRenderStyle(activeFaq.value === fIdx ? null : { display: "none" })}" data-v-e83d613b${_scopeId}>${ssrInterpolate(faq.answer)}</div></div>`);
						});
						_push(`<!--]--></div></div></section>`);
					} else return [
						createVNode(unref(Head), { title: "باشگاه بدنسازی و تندرستی M8 ساری | بزرگترین فیت‌کلاب شمال کشور" }),
						createVNode("section", { class: "relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/80 pt-6 pb-16" }, [
							createVNode("div", { class: "absolute top-1/4 -right-20 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" }),
							createVNode("div", { class: "absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" }),
							createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-16" }, [createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center" }, [createVNode("div", { class: "lg:col-span-7 text-right space-y-6" }, [
								createVNode("div", { class: "inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-lime-400/40 text-lime-400 text-xs font-black shadow-lg shadow-lime-500/10" }, [createVNode("span", { class: "w-2 h-2 rounded-full bg-lime-400 animate-ping" }), createVNode("span", null, "M8 FIT CLUB • مدرن‌ترین فیت‌کلاب ساری")]),
								createVNode("h1", { class: "text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.15]" }, [
									createTextVNode(" فراتر از یک باشگاه؛"),
									createVNode("br"),
									createTextVNode(" اینجا داستان "),
									createVNode("span", { class: "relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400" }, [createTextVNode(" قهرمانی تو "), (openBlock(), createBlock("svg", {
										class: "absolute -bottom-2 left-0 w-full h-3 text-lime-400/50",
										viewBox: "0 0 100 20",
										preserveAspectRatio: "none"
									}, [createVNode("path", {
										d: "M0 10 Q50 20 100 10",
										stroke: "currentColor",
										"stroke-width": "4",
										fill: "none"
									})]))]),
									createTextVNode(" آغاز می‌شود ")
								]),
								createVNode("p", { class: "text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl" }, toDisplayString(__props.gymSettings.slogan || "بزرگترین و مجهزترین مجموعه ورزشی و تندرستی شمال کشور با ۲۵۰۰ متر مربع فضا، مربیان رسمی فدراسیون، بوفه تغذیه سلامت، اسپا ریکاوری و پیرایشگاه اختصاصی در ساری."), 1),
								createVNode("div", { class: "pt-2 flex flex-wrap items-center gap-4" }, [createVNode("a", {
									href: "#consultation",
									class: "px-8 py-4 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm transition-all duration-300 shadow-xl shadow-lime-400/25 flex items-center gap-2.5 group cursor-pointer"
								}, [createVNode("span", null, "رزرو جلسه ارزیابی و تمرین رایگان"), createVNode(unref(ArrowLeft), { class: "w-4 h-4 group-hover:-translate-x-1.5 transition-transform" })]), createVNode("a", {
									href: "#plans",
									class: "px-7 py-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700/80 hover:border-lime-400/40 transition-all flex items-center gap-2"
								}, [createVNode(unref(Crown), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "مشاهده پلن‌های عضویت")])]),
								createVNode("div", { class: "pt-6 border-t border-zinc-800/70 grid grid-cols-3 gap-4 max-w-lg" }, [
									createVNode("div", null, [createVNode("span", { class: "block text-2xl sm:text-3xl font-black text-white font-mono" }, "۲,۵۰۰+"), createVNode("span", { class: "text-xs text-zinc-400" }, "متر مربع مساحت سالن")]),
									createVNode("div", null, [createVNode("span", { class: "block text-2xl sm:text-3xl font-black text-lime-400 font-mono" }, "۱۵+"), createVNode("span", { class: "text-xs text-zinc-400" }, "مربی رسمی فدراسیون")]),
									createVNode("div", null, [createVNode("span", { class: "block text-2xl sm:text-3xl font-black text-white font-mono" }, "۷+ سال"), createVNode("span", { class: "text-xs text-zinc-400" }, "سابقه درخشان در ساری")])
								])
							]), createVNode("div", { class: "lg:col-span-5 relative flex justify-center" }, [createVNode("div", { class: "relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900 group" }, [
								createVNode("img", {
									src: "/images/gym/hero_athlete.jpg",
									alt: "M8 Gym Sari Athlete",
									class: "w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
								}),
								createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" }),
								createVNode("div", { class: "absolute top-6 right-6 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-zinc-800 shadow-2xl flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400" }, [createVNode(unref(Users), { class: "w-5 h-5" })]), createVNode("div", { class: "text-right" }, [createVNode("span", { class: "block text-xs font-black text-white" }, "۲,۴۵۰+ ورزشکار فعال"), createVNode("span", { class: "text-[10px] text-zinc-400" }, "جامعه بزرگ قهرمانان M8")])]),
								createVNode("div", { class: "absolute bottom-6 left-6 p-3.5 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-lime-400/30 shadow-2xl flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400" }, [createVNode(unref(Flame), { class: "w-5 h-5" })]), createVNode("div", { class: "text-right" }, [createVNode("span", { class: "block text-xs font-black text-white" }, "۸۵۰+ کیلوکالری / جلسه"), createVNode("span", { class: "text-[10px] text-lime-400" }, "چربی‌سوزی با متد HIIT و هایپرتروفی")])])
							])])])])
						]),
						createVNode("div", { class: "w-full bg-lime-400 text-black py-3.5 overflow-hidden whitespace-nowrap border-y border-lime-300 font-black text-sm select-none tracking-wider" }, [createVNode("div", { class: "inline-flex items-center gap-8 animate-marquee" }, [
							createVNode("span", null, "M8 FIT CLUB"),
							createVNode("span", null, "•"),
							createVNode("span", null, "بزرگترین سالن بدنسازی شمال کشور"),
							createVNode("span", null, "•"),
							createVNode("span", null, "CROSSFIT & FUNCTIONAL"),
							createVNode("span", null, "•"),
							createVNode("span", null, "بوفه و کافه رژیمی M8 FUEL"),
							createVNode("span", null, "•"),
							createVNode("span", null, "مرکز ماساژ تخصصی و ریکاوری"),
							createVNode("span", null, "•"),
							createVNode("span", null, "آرایشگاه و پیرایش VIP"),
							createVNode("span", null, "•"),
							createVNode("span", null, "ساری، خیابان قارن"),
							createVNode("span", null, "•"),
							createVNode("span", null, "تمرین بدون محدودیت"),
							createVNode("span", null, "•"),
							createVNode("span", null, "M8 FIT CLUB"),
							createVNode("span", null, "•"),
							createVNode("span", null, "بزرگترین سالن بدنسازی شمال کشور"),
							createVNode("span", null, "•"),
							createVNode("span", null, "CROSSFIT & FUNCTIONAL"),
							createVNode("span", null, "•"),
							createVNode("span", null, "بوفه و کافه رژیمی M8 FUEL"),
							createVNode("span", null, "•"),
							createVNode("span", null, "مرکز ماساژ تخصصی و ریکاوری"),
							createVNode("span", null, "•"),
							createVNode("span", null, "آرایشگاه و پیرایش VIP")
						])]),
						createVNode("section", {
							id: "about",
							class: "py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative"
						}, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" }, [createVNode("div", { class: "lg:col-span-6 relative" }, [createVNode("div", { class: "relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl" }, [
							createVNode("img", {
								src: "/images/gym/gym_floor_main.jpg",
								alt: "سالن ۲۵۰۰ متری باشگاه M8 ساری",
								class: "w-full h-[400px] sm:h-[480px] object-cover object-center filter contrast-110"
							}),
							createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" }),
							createVNode("div", { class: "absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between" }, [createVNode("div", null, [createVNode("span", { class: "text-xs font-bold text-lime-400" }, "فضای ۲۵۰۰ متری اختصاصی"), createVNode("p", { class: "text-sm font-black text-white mt-0.5" }, "مجهز به برترین تجهیزات بیومکانیک ۲۰۲۴")]), createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center font-bold" }, " M8 ")])
						])]), createVNode("div", { class: "lg:col-span-6 space-y-6 text-right" }, [
							createVNode("div", { class: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold" }, [createVNode(unref(Sparkles), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "درباره فیت‌کلاب M8 ساری")]),
							createVNode("h2", { class: "text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight" }, [
								createTextVNode(" استانداردی نو در "),
								createVNode("br"),
								createVNode("span", { class: "text-lime-400" }, "ورزش و تندرستی"),
								createTextVNode(" شمال ایران ")
							]),
							createVNode("p", { class: "text-sm sm:text-base text-zinc-300 leading-relaxed font-normal" }, " مجموعه ورزشی M8 با بیش از ۷ سال سابقه و با مساحت وسیع ۲۵۰۰ متر مربع در شهر ساری بنا شده است. هدف ما خلق محیطی حرفه‌ای، باانگیزه و لوکس است که در آن ورزشکاران در هر سطحی—از مبتدی تا قهرمانان بین‌المللی—به تمام ابزارهای رشد جسمانی و ذهنی دسترسی داشته باشند. "),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs" }, [
								createVNode("div", { class: "p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" }, [createVNode("div", { class: "w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" }, [createVNode(unref(CheckCircle2), { class: "w-4 h-4" })]), createVNode("span", { class: "font-bold text-zinc-200" }, "دستگاه‌های وارداتی با زاویه ارگونومیک")]),
								createVNode("div", { class: "p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" }, [createVNode("div", { class: "w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" }, [createVNode(unref(CheckCircle2), { class: "w-4 h-4" })]), createVNode("span", { class: "font-bold text-zinc-200" }, "سیستم تهویه هوای بیمارستانی و هوای تازه")]),
								createVNode("div", { class: "p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" }, [createVNode("div", { class: "w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" }, [createVNode(unref(CheckCircle2), { class: "w-4 h-4" })]), createVNode("span", { class: "font-bold text-zinc-200" }, "باکس مجزای کراس‌فیت و چمن فانکشنال")]),
								createVNode("div", { class: "p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-3" }, [createVNode("div", { class: "w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" }, [createVNode(unref(CheckCircle2), { class: "w-4 h-4" })]), createVNode("span", { class: "font-bold text-zinc-200" }, "کمد دیجیتال هوشمند و دوش‌های اختصاصی")])
							]),
							createVNode("div", { class: "pt-2" }, [createVNode("a", {
								href: "#consultation",
								class: "inline-flex items-center gap-2 text-xs font-bold text-lime-400 hover:text-lime-300 transition-colors"
							}, [createVNode("span", null, "درخواست بازدید حضوری از مجموعه"), createVNode(unref(ArrowLeft), { class: "w-3.5 h-3.5" })])])
						])])])]),
						createVNode("section", {
							id: "facilities",
							class: "py-20 lg:py-28 bg-zinc-900/40 border-b border-zinc-800/80 relative"
						}, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "text-center max-w-3xl mx-auto space-y-4 mb-16" }, [
							createVNode("div", { class: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" }, [createVNode(unref(Dumbbell), { class: "w-3.5 h-3.5" }), createVNode("span", null, "امکانات و بخش‌های یکپارچه")]),
							createVNode("h2", { class: "text-3xl sm:text-5xl font-black text-white tracking-tight" }, [createTextVNode(" همه نیازهای ورزشکار زیر "), createVNode("span", { class: "text-lime-400" }, "یک سقف")]),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-400" }, " تنها باشگاه جامع شمال کشور که علاوه بر سالن بدنسازی، دارای کافه‌رستوران ارگانیک، ماساژ ورزشی تخصصی، پیرایشگاه VIP و فروشگاه مکمل اورجینال است. ")
						]), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [(openBlock(), createBlock(Fragment, null, renderList(facilities, (fac, idx) => {
							return createVNode("div", {
								key: idx,
								class: "group rounded-3xl bg-zinc-900/80 border border-zinc-800/80 overflow-hidden hover:border-lime-400/40 transition-all duration-500 shadow-xl flex flex-col"
							}, [createVNode("div", { class: "relative h-64 sm:h-72 overflow-hidden bg-zinc-950" }, [
								createVNode("img", {
									src: fac.image,
									alt: fac.title,
									class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
								}, null, 8, ["src", "alt"]),
								createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" }),
								createVNode("span", { class: "absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700 text-[11px] font-bold text-lime-400" }, toDisplayString(fac.badge), 1)
							]), createVNode("div", { class: "p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-right" }, [createVNode("div", null, [
								createVNode("span", { class: "text-[11px] font-mono text-zinc-400 tracking-wider uppercase" }, toDisplayString(fac.subtitle), 1),
								createVNode("h3", { class: "text-xl sm:text-2xl font-black text-white mt-1 group-hover:text-lime-400 transition-colors" }, toDisplayString(fac.title), 1),
								createVNode("p", { class: "text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed font-normal" }, toDisplayString(fac.desc), 1)
							]), createVNode("div", { class: "pt-2" }, [createVNode(unref(Link), {
								href: fac.link,
								class: "inline-flex items-center gap-2 text-xs font-black text-white hover:text-lime-400 transition-colors"
							}, {
								default: withCtx(() => [createVNode("span", null, "مشاهده جزئیات و رزرو"), createVNode(unref(ArrowLeft), { class: "w-3.5 h-3.5 text-lime-400 group-hover:-translate-x-1 transition-transform" })]),
								_: 1
							}, 8, ["href"])])])]);
						}), 64))])])]),
						createVNode("section", { class: "py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800/80 relative overflow-hidden" }, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-2xl relative" }, [createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" }, [createVNode("div", { class: "lg:col-span-5 text-right space-y-4" }, [
							createVNode("div", { class: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold" }, [createVNode(unref(Calculator), { class: "w-3.5 h-3.5" }), createVNode("span", null, "محاسبه‌گر هوشمند توده بدنی (BMI)")]),
							createVNode("h2", { class: "text-2xl sm:text-4xl font-black text-white tracking-tight" }, [createTextVNode(" وضعیت فیزیکی خود را "), createVNode("span", { class: "text-lime-400" }, "آنلاین بسنجید")]),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-400 leading-relaxed" }, " شاخص BMI نشان‌دهنده نسبت قد به وزن شماست. مشخصات خود را وارد کنید تا وضعیت بدنی و پیشنهاد تخصصی مربیان M8 را فوری دریافت کنید. "),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3 mt-6" }, [
								createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400" }, "شاخص BMI شما:"), createVNode("span", { class: "text-3xl font-black text-white font-mono" }, toDisplayString(unref(toPersianDigits)(calculatedBmi.value)), 1)]),
								createVNode("div", { class: "flex items-center justify-between pt-2 border-t border-zinc-900" }, [createVNode("span", { class: "text-xs text-zinc-400" }, "وضعیت:"), createVNode("span", { class: ["px-2.5 py-1 rounded-full text-xs font-black border", [bmiStatus.value.color, bmiStatus.value.badge]] }, toDisplayString(bmiStatus.value.text), 3)]),
								createVNode("p", { class: "text-[11px] text-zinc-400 pt-1 leading-relaxed" }, [createVNode("span", { class: "text-lime-400 font-bold" }, "توصیه M8:"), createTextVNode(" " + toDisplayString(bmiStatus.value.advice), 1)])
							])
						]), createVNode("div", { class: "lg:col-span-7 bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 space-y-6 text-right" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-2" }, "جنسیت"), createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("button", {
								type: "button",
								onClick: ($event) => bmiGender.value = "male",
								class: ["py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer", bmiGender.value === "male" ? "bg-lime-400 text-black border-lime-400 shadow-md" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"]
							}, " آقا ", 10, ["onClick"]), createVNode("button", {
								type: "button",
								onClick: ($event) => bmiGender.value = "female",
								class: ["py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer", bmiGender.value === "female" ? "bg-lime-400 text-black border-lime-400 shadow-md" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"]
							}, " خانم ", 10, ["onClick"])])]),
							createVNode("div", null, [createVNode("div", { class: "flex justify-between items-center mb-1 text-xs" }, [createVNode("span", { class: "font-bold text-zinc-300" }, "قد شما (سانتی‌متر)"), createVNode("span", { class: "font-mono text-lime-400 font-black text-sm" }, toDisplayString(unref(toPersianDigits)(bmiHeight.value)) + " cm", 1)]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => bmiHeight.value = $event,
								type: "range",
								min: "130",
								max: "220",
								class: "w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								bmiHeight.value,
								void 0,
								{ number: true }
							]])]),
							createVNode("div", null, [createVNode("div", { class: "flex justify-between items-center mb-1 text-xs" }, [createVNode("span", { class: "font-bold text-zinc-300" }, "وزن شما (کیلوگرم)"), createVNode("span", { class: "font-mono text-lime-400 font-black text-sm" }, toDisplayString(unref(toPersianDigits)(bmiWeight.value)) + " kg", 1)]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => bmiWeight.value = $event,
								type: "range",
								min: "40",
								max: "160",
								class: "w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								bmiWeight.value,
								void 0,
								{ number: true }
							]])]),
							createVNode("div", null, [createVNode("div", { class: "flex justify-between items-center mb-1 text-xs" }, [createVNode("span", { class: "font-bold text-zinc-300" }, "سن شما"), createVNode("span", { class: "font-mono text-white font-bold text-sm" }, toDisplayString(unref(toPersianDigits)(bmiAge.value)) + " سال", 1)]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => bmiAge.value = $event,
								type: "range",
								min: "14",
								max: "75",
								class: "w-full accent-lime-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								bmiAge.value,
								void 0,
								{ number: true }
							]])])
						])])])])]),
						createVNode("section", {
							id: "plans",
							class: "py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative"
						}, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "text-center max-w-3xl mx-auto space-y-4 mb-16" }, [
							createVNode("div", { class: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" }, [createVNode(unref(Crown), { class: "w-3.5 h-3.5" }), createVNode("span", null, "تعرفه‌های اشتراک ورزشی")]),
							createVNode("h2", { class: "text-3xl sm:text-5xl font-black text-white tracking-tight" }, [
								createTextVNode(" پلن متناسب با "),
								createVNode("span", { class: "text-lime-400" }, "هدف خود"),
								createTextVNode(" را انتخاب کنید ")
							]),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-400" }, " بدون هزینه پنهان؛ دسترسی به مدرن‌ترین سالن بدنسازی، کمد دیجیتال هوشمند، برنامه تمرینی و تخفیف‌های ویژه خدمات. ")
						]), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.plans, (plan, idx) => {
							return openBlock(), createBlock("div", {
								key: plan.id,
								class: ["rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative", idx === 1 ? "bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 lg:-translate-y-3" : "bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700"]
							}, [
								idx === 1 ? (openBlock(), createBlock("div", {
									key: 0,
									class: "absolute -top-3.5 right-1/2 translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-black text-[11px] font-black uppercase tracking-wider shadow-md"
								}, " پیشنهاد پرطرفدار VIP ")) : createCommentVNode("", true),
								createVNode("div", { class: "space-y-6 text-right" }, [
									createVNode("div", null, [createVNode("h3", { class: "text-xl font-black text-white" }, toDisplayString(plan.title), 1), createVNode("p", { class: "text-xs text-zinc-400 mt-1 font-mono" }, [createTextVNode(" مدت اعتبار: " + toDisplayString(unref(toPersianDigits)(plan.duration_days)) + " روز ", 1), plan.sessions_limit ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(unref(toPersianDigits)(plan.sessions_limit)) + " جلسه)", 1)) : createCommentVNode("", true)])]),
									createVNode("div", { class: "py-4 border-y border-zinc-800/70" }, [createVNode("span", { class: "text-3xl sm:text-4xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(plan.price)), 1)]),
									createVNode("ul", { class: "space-y-3 text-xs text-zinc-300" }, [(openBlock(true), createBlock(Fragment, null, renderList(plan.benefits, (b, bIdx) => {
										return openBlock(), createBlock("li", {
											key: bIdx,
											class: "flex items-center gap-2.5"
										}, [createVNode(unref(CheckCircle2), { class: "w-4 h-4 text-lime-400 shrink-0" }), createVNode("span", null, toDisplayString(b), 1)]);
									}), 128))])
								]),
								createVNode("div", { class: "pt-8" }, [createVNode(unref(Link), {
									href: `/payment/membership/${plan.id}`,
									method: "post",
									as: "button",
									class: ["w-full py-4 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg", idx === 1 ? "bg-lime-400 hover:bg-lime-300 text-black shadow-lime-400/20" : "bg-zinc-800 hover:bg-zinc-700 text-white"]
								}, {
									default: withCtx(() => [createVNode("span", null, "ثبت نام و شروع تمرین"), createVNode(unref(ArrowLeft), { class: "w-4 h-4" })]),
									_: 1
								}, 8, ["href", "class"])])
							], 2);
						}), 128))])])]),
						createVNode("section", { class: "py-20 bg-zinc-900/50 border-b border-zinc-800/80 relative" }, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" }, [createVNode("div", { class: "lg:col-span-5 text-right space-y-4" }, [
							createVNode("div", { class: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" }, [createVNode(unref(Clock), { class: "w-3.5 h-3.5" }), createVNode("span", null, "ساعت کاری و زمان‌بندی مجموعه")]),
							createVNode("h2", { class: "text-3xl sm:text-4xl font-black text-white tracking-tight" }, [
								createTextVNode(" تمرین در "),
								createVNode("span", { class: "text-lime-400" }, "ایده‌آل‌ترین ساعات"),
								createTextVNode(" شبانه‌روز ")
							]),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-400 leading-relaxed" }, " باشگاه M8 با ساعات کاری منعطف و بدون وقفه در طول هفته، امکان ورزش را برای شاغلین، دانشجویان و ورزشکاران حرفه‌ای فراهم کرده است. "),
							createVNode("div", { class: "p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3" }, [createVNode("div", { class: "w-3 h-3 rounded-full bg-lime-400 animate-ping" }), createVNode("span", { class: "text-xs font-bold text-white" }, "هم‌اکنون سالن باز و پذیرای شماست")])
						]), createVNode("div", { class: "lg:col-span-7" }, [createVNode("div", { class: "rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", null, [createVNode("tr", { class: "border-b border-zinc-800 text-zinc-400 bg-zinc-900/80" }, [
							createVNode("th", { class: "p-4 sm:p-5" }, "روز هفته"),
							createVNode("th", { class: "p-4 sm:p-5" }, "ساعت فعالیت"),
							createVNode("th", { class: "p-4 sm:p-5 text-center" }, "بخش‌ها و خدمات")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [
							createVNode("tr", { class: "hover:bg-zinc-900/40" }, [
								createVNode("td", { class: "p-4 sm:p-5 font-bold text-white" }, "شنبه الی چهارشنبه"),
								createVNode("td", { class: "p-4 sm:p-5 font-mono text-lime-400 font-bold" }, "۰۶:۰۰ صبح الی ۲۳:۳۰ شب"),
								createVNode("td", { class: "p-4 sm:p-5 text-center text-zinc-300" }, "بدنسازی، کراس‌فیت، کافه، اسپا و پیرایش")
							]),
							createVNode("tr", { class: "hover:bg-zinc-900/40" }, [
								createVNode("td", { class: "p-4 sm:p-5 font-bold text-white" }, "پنج‌شنبه‌ها"),
								createVNode("td", { class: "p-4 sm:p-5 font-mono text-lime-400 font-bold" }, "۰۶:۰۰ صبح الی ۲۲:۰۰ شب"),
								createVNode("td", { class: "p-4 sm:p-5 text-center text-zinc-300" }, "تمامی بخش‌ها و کلاس‌های فیتنس")
							]),
							createVNode("tr", { class: "hover:bg-zinc-900/40" }, [
								createVNode("td", { class: "p-4 sm:p-5 font-bold text-white" }, "جمعه‌ها و تعطیلات"),
								createVNode("td", { class: "p-4 sm:p-5 font-mono text-amber-400 font-bold" }, "۰۹:۰۰ صبح الی ۲۰:۰۰ شب"),
								createVNode("td", { class: "p-4 sm:p-5 text-center text-zinc-300" }, "سالن اصلی، کافه و ماساژ ریکاوری")
							])
						])])])])])])]),
						createVNode("section", {
							id: "coaches",
							class: "py-20 lg:py-28 bg-zinc-950 border-b border-zinc-800/80 relative"
						}, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "text-center max-w-3xl mx-auto space-y-4 mb-16" }, [
							createVNode("div", { class: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" }, [createVNode(unref(Award), { class: "w-3.5 h-3.5" }), createVNode("span", null, "کادر مربیان ارشد M8")]),
							createVNode("h2", { class: "text-3xl sm:text-5xl font-black text-white tracking-tight" }, [
								createTextVNode(" همراه با "),
								createVNode("span", { class: "text-lime-400" }, "بهترین قهرمانان و مربیان"),
								createTextVNode(" تمرین کنید ")
							]),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-400" }, " مربیان رسمی با مدارک بین‌المللی و کارنامه درخشان در تدوین برنامه‌های علمی تمرین، تغذیه و آماده‌سازی مسابقات. ")
						]), createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.trainers && __props.trainers.length ? __props.trainers : [
							{
								user: { name: "علی رستمی" },
								bio: "سرمربی ارشد فیتنس و بادی‌بیلدینگ با ۱۰ سال سابقه، قهرمان مسابقات کشوری",
								specialties: [
									"هایپرتروفی",
									"آماده‌سازی مسابقات",
									"تغذیه ورزشی"
								]
							},
							{
								user: { name: "رضا طاهری" },
								bio: "مربی رسمی کراس‌فیت فدراسیون، متخصص تمرینات قدرتی و چربی‌سوزی HIIT",
								specialties: [
									"کراس‌فیت",
									"توان انفجاری",
									"اصلاح حرکتی"
								]
							},
							{
								user: { name: "امیرحسین سهرابی" },
								bio: "کارشناس ارشد فیزیولوژی ورزش، متخصص کاهش وزن و طراحی رژیم کتوژیک",
								specialties: [
									"کاهش وزن",
									"آنالیز InBody",
									"فانکشنال"
								]
							},
							{
								user: { name: "محمدرضا کاظمی" },
								bio: "مربی بدنسازی و ماسور ارشد تخصصی ریکاوری و آسیب‌شناسی ورزشی",
								specialties: [
									"ماساژ ورزشی",
									"آسیب‌شناسی",
									"موبیلیتی"
								]
							}
						], (coach, cIdx) => {
							return openBlock(), createBlock("div", {
								key: cIdx,
								class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden group hover:border-lime-400/40 transition-all duration-300 shadow-xl flex flex-col"
							}, [createVNode("div", { class: "relative h-80 overflow-hidden bg-zinc-950" }, [createVNode("img", {
								src: defaultCoachImages[cIdx % defaultCoachImages.length],
								alt: coach.user?.name,
								class: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-110"
							}, null, 8, ["src", "alt"]), createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90" })]), createVNode("div", { class: "p-6 text-right flex-1 flex flex-col justify-between space-y-3" }, [createVNode("div", null, [createVNode("h3", { class: "text-lg font-black text-white group-hover:text-lime-400 transition-colors" }, toDisplayString(coach.user?.name), 1), createVNode("p", { class: "text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed" }, toDisplayString(coach.bio), 1)]), createVNode("div", { class: "pt-3 border-t border-zinc-800/70 flex flex-wrap gap-1.5 justify-end" }, [(openBlock(true), createBlock(Fragment, null, renderList(coach.specialties || ["بدنسازی", "برنامه تمرینی"], (spec, sIdx) => {
								return openBlock(), createBlock("span", {
									key: sIdx,
									class: "px-2 py-0.5 rounded-md bg-zinc-800 text-[10px] text-zinc-300 font-semibold"
								}, toDisplayString(spec), 1);
							}), 128))])])]);
						}), 128))])])]),
						createVNode("section", {
							id: "consultation",
							class: "py-20 lg:py-28 bg-zinc-900/50 border-b border-zinc-800/80 relative"
						}, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl p-8 sm:p-14" }, [createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" }, [createVNode("div", { class: "lg:col-span-5 text-right space-y-6" }, [
							createVNode("div", { class: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-bold" }, [createVNode(unref(Sparkles), { class: "w-3.5 h-3.5" }), createVNode("span", null, "هدیه ویژه عضویت جدید")]),
							createVNode("h2", { class: "text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight" }, [
								createTextVNode(" یک جلسه تمرین یا "),
								createVNode("br"),
								createVNode("span", { class: "text-lime-400" }, "مشاوره رایگان"),
								createTextVNode(" مهمان ما باشید ")
							]),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal" }, " شماره تماس خود را ثبت کنید تا مربیان ارشد M8 جهت ارزیابی ترکیب بدنی و تنظیم وقت مشاوره حضوری در باشگاه با شما تماس بگیرند. "),
							createVNode("div", { class: "space-y-3 text-xs text-zinc-300 pt-2" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-9 h-9 rounded-xl bg-zinc-800 text-lime-400 flex items-center justify-center shrink-0" }, [createVNode(unref(MapPin), { class: "w-4 h-4" })]), createVNode("span", null, "ساری، مازندران (لوکیشن دقیق باشگاه در مپ)")]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-9 h-9 rounded-xl bg-zinc-800 text-lime-400 flex items-center justify-center shrink-0" }, [createVNode(unref(Phone), { class: "w-4 h-4" })]), createVNode("span", { dir: "ltr" }, toDisplayString(__props.gymSettings.phone || "011-33221100"), 1)])])
						]), createVNode("div", { class: "lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800" }, [createVNode("form", {
							onSubmit: withModifiers(submitLead, ["prevent"]),
							class: "space-y-4 text-right"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "نام و نام خانوادگی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(leadForm).name = $event,
								type: "text",
								placeholder: "مثال: علیرضا رستمی",
								class: "w-full h-12 bg-zinc-900 border border-zinc-800 rounded-xl px-4 text-xs text-white focus:border-lime-400 outline-none transition-colors",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(leadForm).name]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "شماره همراه (جهت هماهنگی پیامکی/تماس)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(leadForm).mobile = $event,
								type: "tel",
								dir: "ltr",
								placeholder: "۰۹۱۲۳۴۵۶۷۸۹",
								class: "w-full h-12 bg-zinc-900 border border-zinc-800 rounded-xl px-4 text-xs text-white focus:border-lime-400 outline-none transition-colors",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(leadForm).mobile]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "هدف ورزشی یا پیام شما (اختیاری)"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(leadForm).message = $event,
								rows: "3",
								placeholder: "مثال: هدفم کاهش وزن ۱۰ کیلو و عضله‌سازی است...",
								class: "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 text-xs text-white focus:border-lime-400 outline-none transition-colors"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(leadForm).message]])]),
							createVNode("button", {
								type: "submit",
								disabled: unref(leadForm).processing,
								class: "w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs transition-all shadow-lg shadow-lime-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
							}, [createVNode(unref(Send), { class: "w-4 h-4" }), createVNode("span", null, "ثبت درخواست مشاوره رایگان")], 8, ["disabled"])
						], 32)])])])])]),
						createVNode("section", { class: "py-20 lg:py-24 bg-zinc-950 relative" }, [createVNode("div", { class: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "text-center space-y-4 mb-14" }, [createVNode("div", { class: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-xs font-bold" }, [createVNode(unref(HelpCircle), { class: "w-3.5 h-3.5" }), createVNode("span", null, "پرسش‌های متداول")]), createVNode("h2", { class: "text-3xl sm:text-4xl font-black text-white tracking-tight" }, " پاسخ به سوالات پرتکرار شما ")]), createVNode("div", { class: "space-y-3 text-right" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.faqs, (faq, fIdx) => {
							return openBlock(), createBlock("div", {
								key: faq.id,
								class: "rounded-2xl bg-zinc-900/70 border border-zinc-800/80 overflow-hidden transition-colors"
							}, [createVNode("button", {
								onClick: ($event) => toggleFaq(fIdx),
								class: "w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-lime-400 transition-colors cursor-pointer"
							}, [createVNode("span", null, toDisplayString(faq.question), 1), createVNode(unref(ChevronDown), { class: ["w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0", { "rotate-180 text-lime-400": activeFaq.value === fIdx }] }, null, 8, ["class"])], 8, ["onClick"]), withDirectives(createVNode("div", { class: "px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3" }, toDisplayString(faq.answer), 513), [[vShow, activeFaq.value === fIdx]])]);
						}), 128))])])])
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Home_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-e83d613b"]]);
//#endregion
export { Home_default as default };
