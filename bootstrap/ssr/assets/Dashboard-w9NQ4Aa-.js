import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { createVNode, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Bell, Calculator, ChevronLeft, Clock, Coffee, TrendingUp } from "@lucide/vue";
//#region resources/js/Pages/Panel/Buffet/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	props: {
		stats: Object,
		liveOrders: Array
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد بوفه و کافه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>کافه پروتئین و تغذیه ورزشی</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>داشبورد بوفه و کافه سلامت M8</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت سفارش‌های زنده سالن، شیک‌های رژیمی، قهوه و نوشیدنی‌های ریکاوری</p></div><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/buffet/pos",
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Calculator), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>صندوق بوفه (POS)</span>`);
								} else return [createVNode(unref(Calculator), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "صندوق بوفه (POS)")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>درآمد بوفه امروز</span><div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.today_revenue))}</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-lime-400"${_scopeId}></span><span${_scopeId}>محاسبه شده از صندوق و سفارشات آنلاین</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>تعداد کل سفارش‌های امروز</span><div class="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.today_orders)} سفارش</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-blue-400"${_scopeId}></span><span${_scopeId}>ثبت‌شده در کافه سلامت</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>سفارش‌های در حال آماده‌سازی</span><div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(__props.stats.live_orders_count)} سفارش</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"${_scopeId}></span><span${_scopeId}>نیازمند سرو سریع به ورزشکار</span></div></div></div></div><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Bell), { class: "w-6 h-6 animate-bounce" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><h3 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}><span${_scopeId}>مانیتور سفارش‌های زنده بوفه (Kitchen Display)</span><span class="px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 text-[10px] font-bold"${_scopeId}>زنده</span></h3><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده آنی سفارش‌های ثبت‌شده توسط اعضا در اپلیکیشن هنگام تمرین جهت آماده‌سازی فوری شیک و اسموتی</p></div></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/buffet/orders",
							class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black transition-all shadow-md shadow-lime-400/20 flex items-center gap-1.5 shrink-0"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span${_scopeId}>مشاهده مانیتور سفارشات</span>`);
									_push(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent, _scopeId));
								} else return [createVNode("span", null, "مشاهده مانیتور سفارشات"), createVNode(unref(ChevronLeft), { class: "w-4 h-4" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد بوفه و کافه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Coffee), { class: "w-4 h-4" }), createVNode("span", null, "کافه پروتئین و تغذیه ورزشی")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "داشبورد بوفه و کافه سلامت M8"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت سفارش‌های زنده سالن، شیک‌های رژیمی، قهوه و نوشیدنی‌های ریکاوری")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
							href: "/panel/buffet/pos",
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, {
							default: withCtx(() => [createVNode(unref(Calculator), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "صندوق بوفه (POS)")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "درآمد بوفه امروز"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(TrendingUp), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.today_revenue)), 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-lime-400" }), createVNode("span", null, "محاسبه شده از صندوق و سفارشات آنلاین")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "تعداد کل سفارش‌های امروز"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold" }, [createVNode(unref(Coffee), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.today_orders) + " سفارش", 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-400" }), createVNode("span", null, "ثبت‌شده در کافه سلامت")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "سفارش‌های در حال آماده‌سازی"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold" }, [createVNode(unref(Clock), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono" }, toDisplayString(__props.stats.live_orders_count) + " سفارش", 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" }), createVNode("span", null, "نیازمند سرو سریع به ورزشکار")])])])
						]),
						createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold shrink-0" }, [createVNode(unref(Bell), { class: "w-6 h-6 animate-bounce" })]), createVNode("div", null, [createVNode("h3", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode("span", null, "مانیتور سفارش‌های زنده بوفه (Kitchen Display)"), createVNode("span", { class: "px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 text-[10px] font-bold" }, "زنده")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده آنی سفارش‌های ثبت‌شده توسط اعضا در اپلیکیشن هنگام تمرین جهت آماده‌سازی فوری شیک و اسموتی")])]), createVNode(unref(Link), {
							href: "/panel/buffet/orders",
							class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black transition-all shadow-md shadow-lime-400/20 flex items-center gap-1.5 shrink-0"
						}, {
							default: withCtx(() => [createVNode("span", null, "مشاهده مانیتور سفارشات"), createVNode(unref(ChevronLeft), { class: "w-4 h-4" })]),
							_: 1
						})])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Buffet/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
