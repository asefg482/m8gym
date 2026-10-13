import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { createTextVNode, createVNode, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Bell, Coffee } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد بوفه و کافه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>داشبورد بوفه و کافه سلامت M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت سفارش‌های زنده، شیک‌های پروتئینی و فروش روزانه</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>درآمد بوفه امروز</span><div class="text-2xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.today_revenue))}</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>سفارش‌های امروز</span><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.today_orders)} سفارش</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>سفارش‌های در حال آماده‌سازی</span><div class="text-2xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(__props.stats.live_orders_count)} سفارش</div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-between"${_scopeId}><div${_scopeId}><h3 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Bell), { class: "w-4 h-4 text-lime-400 animate-bounce" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مانیتور سفارش‌های زنده بوفه</span></h3><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده آنی سفارش‌های ثبت‌شده توسط اعضا در سالن جهت آماده‌سازی فوری</p></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/buffet/orders",
							class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` مشاهده مانیتور زنده → `);
								else return [createTextVNode(" مشاهده مانیتور زنده → ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد بوفه و کافه" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Coffee), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "داشبورد بوفه و کافه سلامت M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت سفارش‌های زنده، شیک‌های پروتئینی و فروش روزانه")]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "درآمد بوفه امروز"), createVNode("div", { class: "text-2xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.today_revenue)), 1)]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "سفارش‌های امروز"), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.today_orders) + " سفارش", 1)]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "سفارش‌های در حال آماده‌سازی"), createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono" }, toDisplayString(__props.stats.live_orders_count) + " سفارش", 1)])
						]),
						createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-between" }, [createVNode("div", null, [createVNode("h3", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode(unref(Bell), { class: "w-4 h-4 text-lime-400 animate-bounce" }), createVNode("span", null, "مانیتور سفارش‌های زنده بوفه")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده آنی سفارش‌های ثبت‌شده توسط اعضا در سالن جهت آماده‌سازی فوری")]), createVNode(unref(Link), {
							href: "/panel/buffet/orders",
							class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20"
						}, {
							default: withCtx(() => [createTextVNode(" مشاهده مانیتور زنده → ")]),
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
