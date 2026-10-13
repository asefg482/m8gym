import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Coffee, Package, ShoppingBag } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "پیگیری سفارش‌های من - M8 FIT CLUB" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سفارش‌ها و فاکتورهای من</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> مشاهده صورت‌حساب، جزییات اقلام خریداری شده از کافه، بار پروتئین و فروشگاه ورزشی M8 </p></div><div class="flex items-center gap-2.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/cafe",
							class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-bold text-zinc-200 flex items-center gap-1.5 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Coffee), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>منوی کافه</span>`);
								} else return [createVNode(unref(Coffee), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "منوی کافه")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: "/shop",
							class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-bold text-zinc-200 flex items-center gap-1.5 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Package), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>فروشگاه مکمل</span>`);
								} else return [createVNode(unref(Package), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "فروشگاه مکمل")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div>`);
						if (__props.orders && __props.orders.length > 0) {
							_push(`<div class="space-y-5"${_scopeId}><!--[-->`);
							ssrRenderList(__props.orders, (order) => {
								_push(`<div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-zinc-800/80 gap-2.5"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="font-mono text-xs font-bold text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-lg border border-lime-400/20"${_scopeId}> #${ssrInterpolate(order.order_no)}</span><span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300"${_scopeId}>${ssrInterpolate(order.scope === "buffet" ? "کافه و بار پروتئین" : "فروشگاه مکمل و پوشاک")}</span></div><div class="text-xs text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(order.created_at))}</div></div><div class="divide-y divide-zinc-800/60 text-xs"${_scopeId}><!--[-->`);
								ssrRenderList(order.items, (item) => {
									_push(`<div class="py-3 flex items-center justify-between"${_scopeId}><span class="text-white font-medium"${_scopeId}>${ssrInterpolate(item.title_snapshot)} <span class="text-zinc-500 font-mono text-[11px]"${_scopeId}>× ${ssrInterpolate(item.qty)}</span></span><span class="font-mono text-zinc-300 font-semibold"${_scopeId}>${ssrInterpolate(unref(formatPrice)(item.price_snapshot * item.qty))}</span></div>`);
								});
								_push(`<!--]--></div><div class="pt-3.5 border-t border-zinc-800/80 flex items-center justify-between text-xs"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-zinc-400 text-[11px]"${_scopeId}>وضعیت:</span><span class="${ssrRenderClass([{
									"bg-emerald-500/10 text-emerald-400 border-emerald-500/20": order.status === "delivered",
									"bg-cyan-500/10 text-cyan-400 border-cyan-500/20": order.status === "ready",
									"bg-amber-500/10 text-amber-400 border-amber-500/20": order.status === "preparing" || order.status === "new",
									"bg-rose-500/10 text-rose-400 border-rose-500/20": order.status === "cancelled"
								}, "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border"])}"${_scopeId}><span class="${ssrRenderClass([{
									"bg-emerald-400": order.status === "delivered",
									"bg-cyan-400": order.status === "ready",
									"bg-amber-400": order.status === "preparing" || order.status === "new",
									"bg-rose-400": order.status === "cancelled"
								}, "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(order.status === "delivered" ? "تحویل داده شد" : order.status === "ready" ? "آماده تحویل در باشگاه" : order.status === "preparing" ? "در حال آماده‌سازی" : order.status === "cancelled" ? "لغو شده" : "ثبت شده")}</span></span></div><div class="font-mono text-sm font-black text-lime-400"${_scopeId}> مبلغ فاکتور: ${ssrInterpolate(unref(formatPrice)(order.total))}</div></div></div>`);
							});
							_push(`<!--]--></div>`);
						} else {
							_push(`<div class="p-16 text-center rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm text-xs text-zinc-500"${_scopeId}>`);
							_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-10 h-10 text-zinc-600 mx-auto mb-3" }, null, _parent, _scopeId));
							_push(`<span class="block font-bold text-white text-sm"${_scopeId}>شما هنوز سفارشی ثبت نکرده‌اید</span><span class="text-zinc-400 block mt-1"${_scopeId}>می‌توانید اسموتی، غذاهای رژیمی یا مکمل‌های ورزشی را آنلاین سفارش دهید.</span></div>`);
						}
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "پیگیری سفارش‌های من - M8 FIT CLUB" }), createVNode("div", { class: "space-y-6 sm:space-y-8 max-w-7xl mx-auto" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5" }, [createVNode(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "سفارش‌ها و فاکتورهای من")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " مشاهده صورت‌حساب، جزییات اقلام خریداری شده از کافه، بار پروتئین و فروشگاه ورزشی M8 ")]), createVNode("div", { class: "flex items-center gap-2.5" }, [createVNode(unref(Link), {
						href: "/cafe",
						class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-bold text-zinc-200 flex items-center gap-1.5 transition-colors"
					}, {
						default: withCtx(() => [createVNode(unref(Coffee), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "منوی کافه")]),
						_: 1
					}), createVNode(unref(Link), {
						href: "/shop",
						class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-bold text-zinc-200 flex items-center gap-1.5 transition-colors"
					}, {
						default: withCtx(() => [createVNode(unref(Package), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "فروشگاه مکمل")]),
						_: 1
					})])]), __props.orders && __props.orders.length > 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "space-y-5"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (order) => {
						return openBlock(), createBlock("div", {
							key: order.id,
							class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4"
						}, [
							createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-zinc-800/80 gap-2.5" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("span", { class: "font-mono text-xs font-bold text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-lg border border-lime-400/20" }, " #" + toDisplayString(order.order_no), 1), createVNode("span", { class: "px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300" }, toDisplayString(order.scope === "buffet" ? "کافه و بار پروتئین" : "فروشگاه مکمل و پوشاک"), 1)]), createVNode("div", { class: "text-xs text-zinc-400 font-mono" }, toDisplayString(unref(formatJalaliDateTime)(order.created_at)), 1)]),
							createVNode("div", { class: "divide-y divide-zinc-800/60 text-xs" }, [(openBlock(true), createBlock(Fragment, null, renderList(order.items, (item) => {
								return openBlock(), createBlock("div", {
									key: item.id,
									class: "py-3 flex items-center justify-between"
								}, [createVNode("span", { class: "text-white font-medium" }, [createTextVNode(toDisplayString(item.title_snapshot) + " ", 1), createVNode("span", { class: "text-zinc-500 font-mono text-[11px]" }, "× " + toDisplayString(item.qty), 1)]), createVNode("span", { class: "font-mono text-zinc-300 font-semibold" }, toDisplayString(unref(formatPrice)(item.price_snapshot * item.qty)), 1)]);
							}), 128))]),
							createVNode("div", { class: "pt-3.5 border-t border-zinc-800/80 flex items-center justify-between text-xs" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("span", { class: "text-zinc-400 text-[11px]" }, "وضعیت:"), createVNode("span", { class: ["inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border", {
								"bg-emerald-500/10 text-emerald-400 border-emerald-500/20": order.status === "delivered",
								"bg-cyan-500/10 text-cyan-400 border-cyan-500/20": order.status === "ready",
								"bg-amber-500/10 text-amber-400 border-amber-500/20": order.status === "preparing" || order.status === "new",
								"bg-rose-500/10 text-rose-400 border-rose-500/20": order.status === "cancelled"
							}] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", {
								"bg-emerald-400": order.status === "delivered",
								"bg-cyan-400": order.status === "ready",
								"bg-amber-400": order.status === "preparing" || order.status === "new",
								"bg-rose-400": order.status === "cancelled"
							}] }, null, 2), createVNode("span", null, toDisplayString(order.status === "delivered" ? "تحویل داده شد" : order.status === "ready" ? "آماده تحویل در باشگاه" : order.status === "preparing" ? "در حال آماده‌سازی" : order.status === "cancelled" ? "لغو شده" : "ثبت شده"), 1)], 2)]), createVNode("div", { class: "font-mono text-sm font-black text-lime-400" }, " مبلغ فاکتور: " + toDisplayString(unref(formatPrice)(order.total)), 1)])
						]);
					}), 128))])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "p-16 text-center rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm text-xs text-zinc-500"
					}, [
						createVNode(unref(ShoppingBag), { class: "w-10 h-10 text-zinc-600 mx-auto mb-3" }),
						createVNode("span", { class: "block font-bold text-white text-sm" }, "شما هنوز سفارشی ثبت نکرده‌اید"),
						createVNode("span", { class: "text-zinc-400 block mt-1" }, "می‌توانید اسموتی، غذاهای رژیمی یا مکمل‌های ورزشی را آنلاین سفارش دهید.")
					]))])];
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
