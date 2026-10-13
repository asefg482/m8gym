import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { computed, createVNode, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { BarChart3, Coffee, CreditCard, Scissors, ShieldCheck, ShoppingBag, Wallet } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/Reports.vue
var _sfc_main = {
	__name: "Reports",
	__ssrInlineRender: true,
	props: {
		sources: Object,
		totalRevenue: Number
	},
	setup(__props) {
		const props = __props;
		const membershipPercent = computed(() => {
			if (!props.totalRevenue) return 0;
			return Math.round((props.sources?.memberships || 0) / props.totalRevenue * 100);
		});
		const shopPercent = computed(() => {
			if (!props.totalRevenue) return 0;
			return Math.round((props.sources?.shop || 0) / props.totalRevenue * 100);
		});
		const buffetPercent = computed(() => {
			if (!props.totalRevenue) return 0;
			return Math.round((props.sources?.buffet || 0) / props.totalRevenue * 100);
		});
		const servicePercent = computed(() => {
			if (!props.totalRevenue) return 0;
			return Math.round((props.sources?.services || 0) / props.totalRevenue * 100);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "گزارش‌های مالی تجمیعی - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(BarChart3), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سامانه تحلیل مالی و حسابداری تجمیعی</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>گزارش مالی تجمیعی و منابع درآمد باشگاه M8</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تفکیک درآمدها به تفکیک شهریه اشتراک‌ها، فروشگاه مکمل، بوفه و کافه سلامت و خدمات تخصصی اسپا</p></div><div class="flex items-center gap-2"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShieldCheck), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم ضد مغایرت آنی</span></span></div></div><div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-l from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden"${_scopeId}><div class="absolute -left-10 -bottom-10 w-48 h-48 bg-lime-400/5 rounded-full blur-3xl pointer-events-none"${_scopeId}></div><div class="relative z-10"${_scopeId}><div class="flex items-center gap-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Wallet), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مجموع کل درآمدهای محقق‌شده سیستم</span></div><div class="text-3xl sm:text-5xl font-black text-lime-400 font-mono mt-3 tracking-tight"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalRevenue))}</div><p class="text-xs text-zinc-400 mt-2"${_scopeId}>تسویه‌شده از درگاه‌های شتابی و پرداخت‌های کارتخوان پذیرش باشگاه</p></div><div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10"${_scopeId}><div class="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300"${_scopeId}><span class="text-zinc-500 block text-[10px]"${_scopeId}>وضعیت پایدار صندوق</span><div class="text-white font-bold text-sm mt-1"${_scopeId}>تراکنش‌های موفق ۱۰۰٪</div></div></div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div><span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 font-mono"${_scopeId}> %${ssrInterpolate(membershipPercent.value)}</span></div><h3 class="text-xs font-bold text-zinc-400"${_scopeId}>درآمد اشتراک‌ها و شهریه</h3><div class="text-xl font-black text-white font-mono mt-2"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.memberships))}</div></div><div class="mt-4 pt-3 border-t border-zinc-800/60"${_scopeId}><div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden"${_scopeId}><div class="bg-lime-400 h-1.5 rounded-full" style="${ssrRenderStyle({ width: `${membershipPercent.value}%` })}"${_scopeId}></div></div><span class="text-[10px] text-zinc-500 mt-1.5 block"${_scopeId}>پلن‌های عادی، طلایی و سالانه</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div><span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 font-mono"${_scopeId}> %${ssrInterpolate(shopPercent.value)}</span></div><h3 class="text-xs font-bold text-zinc-400"${_scopeId}>فروشگاه مکمل و پوشاک</h3><div class="text-xl font-black text-white font-mono mt-2"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.shop))}</div></div><div class="mt-4 pt-3 border-t border-zinc-800/60"${_scopeId}><div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden"${_scopeId}><div class="bg-amber-400 h-1.5 rounded-full" style="${ssrRenderStyle({ width: `${shopPercent.value}%` })}"${_scopeId}></div></div><span class="text-[10px] text-zinc-500 mt-1.5 block"${_scopeId}>فروش حضوری POS و سفارشات آنلاین</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div><span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 font-mono"${_scopeId}> %${ssrInterpolate(buffetPercent.value)}</span></div><h3 class="text-xs font-bold text-zinc-400"${_scopeId}>بوفه و کافه سلامت M8</h3><div class="text-xl font-black text-white font-mono mt-2"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.buffet))}</div></div><div class="mt-4 pt-3 border-t border-zinc-800/60"${_scopeId}><div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden"${_scopeId}><div class="bg-cyan-400 h-1.5 rounded-full" style="${ssrRenderStyle({ width: `${buffetPercent.value}%` })}"${_scopeId}></div></div><span class="text-[10px] text-zinc-500 mt-1.5 block"${_scopeId}>انواع شیک پروتئینی، قهوه و تغذیه رژیمی</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="w-10 h-10 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Scissors), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div><span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20 font-mono"${_scopeId}> %${ssrInterpolate(servicePercent.value)}</span></div><h3 class="text-xs font-bold text-zinc-400"${_scopeId}>خدمات اسپا و پیرایشگاه VIP</h3><div class="text-xl font-black text-white font-mono mt-2"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.services))}</div></div><div class="mt-4 pt-3 border-t border-zinc-800/60"${_scopeId}><div class="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden"${_scopeId}><div class="bg-purple-400 h-1.5 rounded-full" style="${ssrRenderStyle({ width: `${servicePercent.value}%` })}"${_scopeId}></div></div><span class="text-[10px] text-zinc-500 mt-1.5 block"${_scopeId}>رزرو ماساژ تخصصی و سالن پیرایش آقایان</span></div></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "گزارش‌های مالی تجمیعی - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(BarChart3), { class: "w-4 h-4" }), createVNode("span", null, "سامانه تحلیل مالی و حسابداری تجمیعی")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "گزارش مالی تجمیعی و منابع درآمد باشگاه M8"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تفکیک درآمدها به تفکیک شهریه اشتراک‌ها، فروشگاه مکمل، بوفه و کافه سلامت و خدمات تخصصی اسپا")
						]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold" }, [createVNode(unref(ShieldCheck), { class: "w-4 h-4" }), createVNode("span", null, "سیستم ضد مغایرت آنی")])])]),
						createVNode("div", { class: "p-6 sm:p-8 rounded-3xl bg-gradient-to-l from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden" }, [
							createVNode("div", { class: "absolute -left-10 -bottom-10 w-48 h-48 bg-lime-400/5 rounded-full blur-3xl pointer-events-none" }),
							createVNode("div", { class: "relative z-10" }, [
								createVNode("div", { class: "flex items-center gap-2 text-xs text-zinc-400 font-semibold uppercase tracking-wider" }, [createVNode(unref(Wallet), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "مجموع کل درآمدهای محقق‌شده سیستم")]),
								createVNode("div", { class: "text-3xl sm:text-5xl font-black text-lime-400 font-mono mt-3 tracking-tight" }, toDisplayString(unref(formatPrice)(__props.totalRevenue)), 1),
								createVNode("p", { class: "text-xs text-zinc-400 mt-2" }, "تسویه‌شده از درگاه‌های شتابی و پرداخت‌های کارتخوان پذیرش باشگاه")
							]),
							createVNode("div", { class: "flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10" }, [createVNode("div", { class: "p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300" }, [createVNode("span", { class: "text-zinc-500 block text-[10px]" }, "وضعیت پایدار صندوق"), createVNode("div", { class: "text-white font-bold text-sm mt-1" }, "تراکنش‌های موفق ۱۰۰٪")])])
						]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" }, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all" }, [createVNode("div", null, [
								createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(CreditCard), { class: "w-5 h-5" })]), createVNode("span", { class: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 font-mono" }, " %" + toDisplayString(membershipPercent.value), 1)]),
								createVNode("h3", { class: "text-xs font-bold text-zinc-400" }, "درآمد اشتراک‌ها و شهریه"),
								createVNode("div", { class: "text-xl font-black text-white font-mono mt-2" }, toDisplayString(unref(formatPrice)(__props.sources.memberships)), 1)
							]), createVNode("div", { class: "mt-4 pt-3 border-t border-zinc-800/60" }, [createVNode("div", { class: "w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden" }, [createVNode("div", {
								class: "bg-lime-400 h-1.5 rounded-full",
								style: { width: `${membershipPercent.value}%` }
							}, null, 4)]), createVNode("span", { class: "text-[10px] text-zinc-500 mt-1.5 block" }, "پلن‌های عادی، طلایی و سالانه")])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all" }, [createVNode("div", null, [
								createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold" }, [createVNode(unref(ShoppingBag), { class: "w-5 h-5" })]), createVNode("span", { class: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 font-mono" }, " %" + toDisplayString(shopPercent.value), 1)]),
								createVNode("h3", { class: "text-xs font-bold text-zinc-400" }, "فروشگاه مکمل و پوشاک"),
								createVNode("div", { class: "text-xl font-black text-white font-mono mt-2" }, toDisplayString(unref(formatPrice)(__props.sources.shop)), 1)
							]), createVNode("div", { class: "mt-4 pt-3 border-t border-zinc-800/60" }, [createVNode("div", { class: "w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden" }, [createVNode("div", {
								class: "bg-amber-400 h-1.5 rounded-full",
								style: { width: `${shopPercent.value}%` }
							}, null, 4)]), createVNode("span", { class: "text-[10px] text-zinc-500 mt-1.5 block" }, "فروش حضوری POS و سفارشات آنلاین")])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all" }, [createVNode("div", null, [
								createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold" }, [createVNode(unref(Coffee), { class: "w-5 h-5" })]), createVNode("span", { class: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 font-mono" }, " %" + toDisplayString(buffetPercent.value), 1)]),
								createVNode("h3", { class: "text-xs font-bold text-zinc-400" }, "بوفه و کافه سلامت M8"),
								createVNode("div", { class: "text-xl font-black text-white font-mono mt-2" }, toDisplayString(unref(formatPrice)(__props.sources.buffet)), 1)
							]), createVNode("div", { class: "mt-4 pt-3 border-t border-zinc-800/60" }, [createVNode("div", { class: "w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden" }, [createVNode("div", {
								class: "bg-cyan-400 h-1.5 rounded-full",
								style: { width: `${buffetPercent.value}%` }
							}, null, 4)]), createVNode("span", { class: "text-[10px] text-zinc-500 mt-1.5 block" }, "انواع شیک پروتئینی، قهوه و تغذیه رژیمی")])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all" }, [createVNode("div", null, [
								createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold" }, [createVNode(unref(Scissors), { class: "w-5 h-5" })]), createVNode("span", { class: "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20 font-mono" }, " %" + toDisplayString(servicePercent.value), 1)]),
								createVNode("h3", { class: "text-xs font-bold text-zinc-400" }, "خدمات اسپا و پیرایشگاه VIP"),
								createVNode("div", { class: "text-xl font-black text-white font-mono mt-2" }, toDisplayString(unref(formatPrice)(__props.sources.services)), 1)
							]), createVNode("div", { class: "mt-4 pt-3 border-t border-zinc-800/60" }, [createVNode("div", { class: "w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden" }, [createVNode("div", {
								class: "bg-purple-400 h-1.5 rounded-full",
								style: { width: `${servicePercent.value}%` }
							}, null, 4)]), createVNode("span", { class: "text-[10px] text-zinc-500 mt-1.5 block" }, "رزرو ماساژ تخصصی و سالن پیرایش آقایان")])])
						])
					])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/SuperAdmin/Reports.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
