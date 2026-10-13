import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ShoppingBag } from "@lucide/vue";
//#region resources/js/Pages/Panel/Member/Orders.vue
var _sfc_main = {
	__name: "Orders",
	__ssrInlineRender: true,
	props: { orders: Array },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "پیگیری سفارش‌های من" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پیگیری سفارش‌های کافه و فروشگاه M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده فاکتور، جزییات اقلام و وضعیت آماده‌سازی سفارش‌ها</p></div><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/cafe",
							class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` سفارش از کافه `);
								else return [createTextVNode(" سفارش از کافه ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: "/shop",
							class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` خرید از فروشگاه `);
								else return [createTextVNode(" خرید از فروشگاه ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="space-y-4"${_scopeId}><!--[-->`);
						ssrRenderList(__props.orders, (order) => {
							_push(`<div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-800 gap-2"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="font-mono text-xs font-bold text-lime-400"${_scopeId}>${ssrInterpolate(order.order_no)}</span><span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300"${_scopeId}>${ssrInterpolate(order.scope === "buffet" ? "بوفه و کافه" : "فروشگاه مکمل/پوشاک")}</span></div><div class="text-xs text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(order.created_at))}</div></div><div class="divide-y divide-zinc-800/60 text-xs"${_scopeId}><!--[-->`);
							ssrRenderList(order.items, (item) => {
								_push(`<div class="py-2.5 flex items-center justify-between"${_scopeId}><span class="text-white font-medium"${_scopeId}>${ssrInterpolate(item.title_snapshot)} <span class="text-zinc-500 font-mono"${_scopeId}>(${ssrInterpolate(item.qty)} عدد)</span></span><span class="font-mono text-zinc-300"${_scopeId}>${ssrInterpolate(unref(formatPrice)(item.price_snapshot * item.qty))}</span></div>`);
							});
							_push(`<!--]--></div><div class="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-zinc-400"${_scopeId}>وضعیت سفارش:</span><span class="${ssrRenderClass([{
								"bg-lime-400/10 text-lime-400": order.status === "delivered",
								"bg-cyan-400/10 text-cyan-400": order.status === "ready",
								"bg-amber-400/10 text-amber-400": order.status === "preparing" || order.status === "new",
								"bg-red-400/10 text-red-400": order.status === "cancelled"
							}, "px-2.5 py-1 rounded-full text-[11px] font-bold"])}"${_scopeId}>${ssrInterpolate(order.status === "delivered" ? "تحویل داده شد" : order.status === "ready" ? "آماده تحویل" : order.status === "preparing" ? "در حال آماده‌سازی" : order.status === "cancelled" ? "لغو شده" : "ثبت شده")}</span></div><div class="font-mono text-sm font-black text-lime-400"${_scopeId}> مبلغ کل: ${ssrInterpolate(unref(formatPrice)(order.total))}</div></div></div>`);
						});
						_push(`<!--]-->`);
						if (__props.orders.length === 0) _push(`<div class="p-16 text-center rounded-3xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-500"${_scopeId}> شما سفارشی ثبت نکرده‌اید. </div>`);
						else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "پیگیری سفارش‌های من" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "پیگیری سفارش‌های کافه و فروشگاه M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده فاکتور، جزییات اقلام و وضعیت آماده‌سازی سفارش‌ها")]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(Link), {
						href: "/cafe",
						class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400"
					}, {
						default: withCtx(() => [createTextVNode(" سفارش از کافه ")]),
						_: 1
					}), createVNode(unref(Link), {
						href: "/shop",
						class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400"
					}, {
						default: withCtx(() => [createTextVNode(" خرید از فروشگاه ")]),
						_: 1
					})])]), createVNode("div", { class: "space-y-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (order) => {
						return openBlock(), createBlock("div", {
							key: order.id,
							class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"
						}, [
							createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-800 gap-2" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("span", { class: "font-mono text-xs font-bold text-lime-400" }, toDisplayString(order.order_no), 1), createVNode("span", { class: "px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300" }, toDisplayString(order.scope === "buffet" ? "بوفه و کافه" : "فروشگاه مکمل/پوشاک"), 1)]), createVNode("div", { class: "text-xs text-zinc-400 font-mono" }, toDisplayString(unref(formatJalaliDateTime)(order.created_at)), 1)]),
							createVNode("div", { class: "divide-y divide-zinc-800/60 text-xs" }, [(openBlock(true), createBlock(Fragment, null, renderList(order.items, (item) => {
								return openBlock(), createBlock("div", {
									key: item.id,
									class: "py-2.5 flex items-center justify-between"
								}, [createVNode("span", { class: "text-white font-medium" }, [createTextVNode(toDisplayString(item.title_snapshot) + " ", 1), createVNode("span", { class: "text-zinc-500 font-mono" }, "(" + toDisplayString(item.qty) + " عدد)", 1)]), createVNode("span", { class: "font-mono text-zinc-300" }, toDisplayString(unref(formatPrice)(item.price_snapshot * item.qty)), 1)]);
							}), 128))]),
							createVNode("div", { class: "pt-3 border-t border-zinc-800 flex items-center justify-between text-xs" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("span", { class: "text-zinc-400" }, "وضعیت سفارش:"), createVNode("span", { class: ["px-2.5 py-1 rounded-full text-[11px] font-bold", {
								"bg-lime-400/10 text-lime-400": order.status === "delivered",
								"bg-cyan-400/10 text-cyan-400": order.status === "ready",
								"bg-amber-400/10 text-amber-400": order.status === "preparing" || order.status === "new",
								"bg-red-400/10 text-red-400": order.status === "cancelled"
							}] }, toDisplayString(order.status === "delivered" ? "تحویل داده شد" : order.status === "ready" ? "آماده تحویل" : order.status === "preparing" ? "در حال آماده‌سازی" : order.status === "cancelled" ? "لغو شده" : "ثبت شده"), 3)]), createVNode("div", { class: "font-mono text-sm font-black text-lime-400" }, " مبلغ کل: " + toDisplayString(unref(formatPrice)(order.total)), 1)])
						]);
					}), 128)), __props.orders.length === 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "p-16 text-center rounded-3xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-500"
					}, " شما سفارشی ثبت نکرده‌اید. ")) : createCommentVNode("", true)])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Member/Orders.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
