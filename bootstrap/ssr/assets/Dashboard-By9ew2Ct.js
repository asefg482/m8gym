import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { AlertTriangle, Box, Calculator, ChevronLeft, ShoppingBag, TrendingUp } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد فروشگاه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>فروشگاه اختصاصی مکمل و تجهیزات</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>داشبورد فروشگاه ورزشی M8</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت انبار مکمل‌های اورجینال، پوشاک، صندوق فروش حضوری (POS) و رهگیری مرسولات</p></div><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/shop/pos",
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Calculator), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>صندوق فروش حضوری (POS)</span>`);
								} else return [createVNode(unref(Calculator), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "صندوق فروش حضوری (POS)")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>فروش کل امروز</span><div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.today_sales))}</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-lime-400"${_scopeId}></span><span${_scopeId}>حضوری و آنلاین تجمیعی</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>تعداد فاکتورهای امروز</span><div class="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.today_orders)} سفارش</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-blue-400"${_scopeId}></span><span${_scopeId}>ثبت‌شده در دیتابیس فروش</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>کالاهای رو به اتمام (کسری)</span><div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(AlertTriangle), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(__props.stats.low_stock_count)} کالا</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-400"${_scopeId}></span><span${_scopeId}>موجودی کمتر از ۵ عدد در انبار</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>سفارش‌های نیازمند آماده‌سازی</span><div class="w-10 h-10 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Box), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-purple-400 font-mono"${_scopeId}>${ssrInterpolate(__props.stats.pending_orders)} بسته</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-purple-400"${_scopeId}></span><span${_scopeId}>منتظر بسته‌بندی یا تحویل</span></div></div></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h3 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>آخرین سفارش‌های ثبت‌شده فروشگاه</h3></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/shop/orders",
							class: "text-xs text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span${_scopeId}>مشاهده همه سفارش‌ها</span>`);
									_push(ssrRenderComponent(unref(ChevronLeft), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
								} else return [createVNode("span", null, "مشاهده همه سفارش‌ها"), createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentOrders, (ord) => {
							_push(`<div class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Box), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><span class="font-bold text-white text-xs sm:text-sm block"${_scopeId}>${ssrInterpolate(ord.customer?.full_name || "مشتری حضوری")}</span><span class="text-zinc-500 font-mono text-[11px] block mt-0.5"${_scopeId}>شناسه: ${ssrInterpolate(ord.order_no)}</span></div></div><div class="text-left font-mono"${_scopeId}><span class="text-lime-400 font-black text-sm block"${_scopeId}>${ssrInterpolate(unref(formatPrice)(ord.total))}</span><span class="${ssrRenderClass([ord.status === "delivered" ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20", "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold mt-1 font-sans border"])}"${_scopeId}><span class="${ssrRenderClass([ord.status === "delivered" ? "bg-emerald-400" : "bg-amber-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(ord.status === "delivered" ? "تحویل‌شده" : "در حال پردازش")}</span></div></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.recentOrders || __props.recentOrders.length === 0) _push(`<div class="p-12 text-center text-xs text-zinc-500"${_scopeId}> سفارشی ثبت نگردیده است. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد فروشگاه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(ShoppingBag), { class: "w-4 h-4" }), createVNode("span", null, "فروشگاه اختصاصی مکمل و تجهیزات")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "داشبورد فروشگاه ورزشی M8"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت انبار مکمل‌های اورجینال، پوشاک، صندوق فروش حضوری (POS) و رهگیری مرسولات")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
							href: "/panel/shop/pos",
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, {
							default: withCtx(() => [createVNode(unref(Calculator), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "صندوق فروش حضوری (POS)")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "فروش کل امروز"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(TrendingUp), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.today_sales)), 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-lime-400" }), createVNode("span", null, "حضوری و آنلاین تجمیعی")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "تعداد فاکتورهای امروز"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold" }, [createVNode(unref(ShoppingBag), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.today_orders) + " سفارش", 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-400" }), createVNode("span", null, "ثبت‌شده در دیتابیس فروش")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "کالاهای رو به اتمام (کسری)"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold" }, [createVNode(unref(AlertTriangle), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono" }, toDisplayString(__props.stats.low_stock_count) + " کالا", 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400" }), createVNode("span", null, "موجودی کمتر از ۵ عدد در انبار")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "سفارش‌های نیازمند آماده‌سازی"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold" }, [createVNode(unref(Box), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-purple-400 font-mono" }, toDisplayString(__props.stats.pending_orders) + " بسته", 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-purple-400" }), createVNode("span", null, "منتظر بسته‌بندی یا تحویل")])])])
						]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden" }, [createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(ShoppingBag), { class: "w-4 h-4 text-lime-400" }), createVNode("h3", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "آخرین سفارش‌های ثبت‌شده فروشگاه")]), createVNode(unref(Link), {
							href: "/panel/shop/orders",
							class: "text-xs text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1"
						}, {
							default: withCtx(() => [createVNode("span", null, "مشاهده همه سفارش‌ها"), createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" })]),
							_: 1
						})]), createVNode("div", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentOrders, (ord) => {
							return openBlock(), createBlock("div", {
								key: ord.id,
								class: "p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
							}, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0" }, [createVNode(unref(Box), { class: "w-5 h-5" })]), createVNode("div", null, [createVNode("span", { class: "font-bold text-white text-xs sm:text-sm block" }, toDisplayString(ord.customer?.full_name || "مشتری حضوری"), 1), createVNode("span", { class: "text-zinc-500 font-mono text-[11px] block mt-0.5" }, "شناسه: " + toDisplayString(ord.order_no), 1)])]), createVNode("div", { class: "text-left font-mono" }, [createVNode("span", { class: "text-lime-400 font-black text-sm block" }, toDisplayString(unref(formatPrice)(ord.total)), 1), createVNode("span", { class: ["inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold mt-1 font-sans border", ord.status === "delivered" ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", ord.status === "delivered" ? "bg-emerald-400" : "bg-amber-400"] }, null, 2), createTextVNode(" " + toDisplayString(ord.status === "delivered" ? "تحویل‌شده" : "در حال پردازش"), 1)], 2)])]);
						}), 128)), !__props.recentOrders || __props.recentOrders.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-12 text-center text-xs text-zinc-500"
						}, " سفارشی ثبت نگردیده است. ")) : createCommentVNode("", true)])])
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
