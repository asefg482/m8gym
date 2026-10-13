import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { createVNode, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { BarChart3, Coffee, CreditCard, Scissors, ShoppingBag } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/Reports.vue
var _sfc_main = {
	__name: "Reports",
	__ssrInlineRender: true,
	props: {
		sources: Object,
		totalRevenue: Number
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "گزارش‌های مالی تجمیعی" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(BarChart3), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>گزارش مالی تجمیعی باشگاه M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تفکیک منابع درآمد به تفکیک اشتراک‌ها، فروشگاه، بوفه و خدمات</p></div><div class="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"${_scopeId}><div${_scopeId}><span class="text-xs text-zinc-400 font-semibold uppercase tracking-wider"${_scopeId}>مجموع کل درآمد محقق‌شده</span><div class="text-3xl sm:text-4xl font-black text-lime-400 font-mono mt-2"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalRevenue))}</div></div><div class="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400"${_scopeId}> سیستم حسابداری یکپارچه و ضد مغایرت </div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"${_scopeId}><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800"${_scopeId}>شهریه‌ها</span></div><div${_scopeId}><h3 class="text-xs text-zinc-400"${_scopeId}>درآمد اشتراک‌ها</h3><div class="text-lg font-black text-white font-mono mt-1"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.memberships))}</div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800"${_scopeId}>مکمل و پوشاک</span></div><div${_scopeId}><h3 class="text-xs text-zinc-400"${_scopeId}>فروشگاه M8</h3><div class="text-lg font-black text-white font-mono mt-1"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.shop))}</div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800"${_scopeId}>کافه سلامت</span></div><div${_scopeId}><h3 class="text-xs text-zinc-400"${_scopeId}>بوفه و نوشیدنی‌ها</h3><div class="text-lg font-black text-white font-mono mt-1"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.buffet))}</div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Scissors), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800"${_scopeId}>اسپا و پیرایش</span></div><div${_scopeId}><h3 class="text-xs text-zinc-400"${_scopeId}>خدمات ماساژ و آرایشگاه</h3><div class="text-lg font-black text-white font-mono mt-1"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.sources.services))}</div></div></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "گزارش‌های مالی تجمیعی" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(BarChart3), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "گزارش مالی تجمیعی باشگاه M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تفکیک منابع درآمد به تفکیک اشتراک‌ها، فروشگاه، بوفه و خدمات")]),
						createVNode("div", { class: "p-8 rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl" }, [createVNode("div", null, [createVNode("span", { class: "text-xs text-zinc-400 font-semibold uppercase tracking-wider" }, "مجموع کل درآمد محقق‌شده"), createVNode("div", { class: "text-3xl sm:text-4xl font-black text-lime-400 font-mono mt-2" }, toDisplayString(unref(formatPrice)(__props.totalRevenue)), 1)]), createVNode("div", { class: "p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400" }, " سیستم حسابداری یکپارچه و ضد مغایرت ")]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" }, [
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode(unref(CreditCard), { class: "w-6 h-6 text-lime-400" }), createVNode("span", { class: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800" }, "شهریه‌ها")]), createVNode("div", null, [createVNode("h3", { class: "text-xs text-zinc-400" }, "درآمد اشتراک‌ها"), createVNode("div", { class: "text-lg font-black text-white font-mono mt-1" }, toDisplayString(unref(formatPrice)(__props.sources.memberships)), 1)])]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }), createVNode("span", { class: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800" }, "مکمل و پوشاک")]), createVNode("div", null, [createVNode("h3", { class: "text-xs text-zinc-400" }, "فروشگاه M8"), createVNode("div", { class: "text-lg font-black text-white font-mono mt-1" }, toDisplayString(unref(formatPrice)(__props.sources.shop)), 1)])]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode(unref(Coffee), { class: "w-6 h-6 text-lime-400" }), createVNode("span", { class: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800" }, "کافه سلامت")]), createVNode("div", null, [createVNode("h3", { class: "text-xs text-zinc-400" }, "بوفه و نوشیدنی‌ها"), createVNode("div", { class: "text-lg font-black text-white font-mono mt-1" }, toDisplayString(unref(formatPrice)(__props.sources.buffet)), 1)])]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode(unref(Scissors), { class: "w-6 h-6 text-lime-400" }), createVNode("span", { class: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800" }, "اسپا و پیرایش")]), createVNode("div", null, [createVNode("h3", { class: "text-xs text-zinc-400" }, "خدمات ماساژ و آرایشگاه"), createVNode("div", { class: "text-lg font-black text-white font-mono mt-1" }, toDisplayString(unref(formatPrice)(__props.sources.services)), 1)])])
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
