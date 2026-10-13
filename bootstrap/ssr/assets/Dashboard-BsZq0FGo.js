import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ShoppingBag } from "@lucide/vue";
//#region resources/js/Pages/Panel/Shop/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	props: {
		stats: Object,
		recentOrders: Array
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد فروشگاه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>داشبورد فروشگاه M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت موجودی مکمل‌ها، پوشاک ورزشی و پیگیری سفارش‌ها</p></div><div class="grid grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>فروش امروز</span><div class="text-xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.today_sales))}</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>تعداد سفارش‌های امروز</span><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.today_orders)} سفارش</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>کالاهای رو به اتمام (کمتر از ۵)</span><div class="text-2xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(__props.stats.low_stock_count)} کالا</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>سفارش‌های نیازمند آماده‌سازی</span><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.pending_orders)} عدد</div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>آخرین سفارش‌های ثبت‌شده</h3>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/shop/orders",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`مشاهده همه سفارش‌ها`);
								else return [createTextVNode("مشاهده همه سفارش‌ها")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentOrders, (ord) => {
							_push(`<div class="py-3 flex items-center justify-between text-xs"${_scopeId}><div${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(ord.customer?.full_name)}</span><span class="text-zinc-500 font-mono block text-[10px]"${_scopeId}>${ssrInterpolate(ord.order_no)}</span></div><div class="text-left font-mono"${_scopeId}><span class="text-lime-400 font-bold block"${_scopeId}>${ssrInterpolate(unref(formatPrice)(ord.total))}</span><span class="text-zinc-500 text-[10px]"${_scopeId}>${ssrInterpolate(ord.status)}</span></div></div>`);
						});
						_push(`<!--]--></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد فروشگاه" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "داشبورد فروشگاه M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت موجودی مکمل‌ها، پوشاک ورزشی و پیگیری سفارش‌ها")]),
						createVNode("div", { class: "grid grid-cols-2 lg:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "فروش امروز"), createVNode("div", { class: "text-xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.today_sales)), 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "تعداد سفارش‌های امروز"), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.today_orders) + " سفارش", 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "کالاهای رو به اتمام (کمتر از ۵)"), createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono" }, toDisplayString(__props.stats.low_stock_count) + " کالا", 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "سفارش‌های نیازمند آماده‌سازی"), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.pending_orders) + " عدد", 1)])
						]),
						createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, "آخرین سفارش‌های ثبت‌شده"), createVNode(unref(Link), {
							href: "/panel/shop/orders",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx(() => [createTextVNode("مشاهده همه سفارش‌ها")]),
							_: 1
						})]), createVNode("div", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentOrders, (ord) => {
							return openBlock(), createBlock("div", {
								key: ord.id,
								class: "py-3 flex items-center justify-between text-xs"
							}, [createVNode("div", null, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(ord.customer?.full_name), 1), createVNode("span", { class: "text-zinc-500 font-mono block text-[10px]" }, toDisplayString(ord.order_no), 1)]), createVNode("div", { class: "text-left font-mono" }, [createVNode("span", { class: "text-lime-400 font-bold block" }, toDisplayString(unref(formatPrice)(ord.total)), 1), createVNode("span", { class: "text-zinc-500 text-[10px]" }, toDisplayString(ord.status), 1)])]);
						}), 128))])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Shop/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
