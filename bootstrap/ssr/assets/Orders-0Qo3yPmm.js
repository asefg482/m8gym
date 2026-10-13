import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-BBik0JPe.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { PackageCheck, ShoppingBag, Store, Truck } from "@lucide/vue";
//#region resources/js/Pages/Panel/Shop/Orders.vue
var _sfc_main = {
	__name: "Orders",
	__ssrInlineRender: true,
	props: {
		orders: Object,
		currentStatus: String
	},
	setup(__props) {
		function updateStatus(order, newStatus) {
			router.put(`/panel/shop/orders/${order.id}/status`, { status: newStatus }, { preserveScroll: true });
		}
		function filterStatus(status) {
			router.get("/panel/shop/orders", { status }, { preserveState: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "سفارش‌ها و مرسولات فروشگاه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>لجستیک و تحویل سفارشات</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>سفارش‌ها و مرسولات فروشگاه M8</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت چرخه سفارش (آماده‌سازی، ارسال پستی، تحویل حضوری در سالن یا استرداد کالا)</p></div><div class="flex items-center gap-2 flex-wrap"${_scopeId}><button class="${ssrRenderClass([!__props.currentStatus ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> همه </button><button class="${ssrRenderClass([__props.currentStatus === "new" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> جدید </button><button class="${ssrRenderClass([__props.currentStatus === "preparing" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> در حال آماده‌سازی </button><button class="${ssrRenderClass([__props.currentStatus === "delivered" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> تحویل داده شده </button></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(PackageCheck), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>فهرست فاکتورها و وضعیت ارسال</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>مجموع: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.orders.total || __props.orders.data?.length || 0)}</b> فاکتور</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>شماره سفارش</th><th class="p-4 font-bold"${_scopeId}>خریدار و آدرس تحویل</th><th class="p-4 font-bold"${_scopeId}>اقلام فاکتور</th><th class="p-4 font-bold"${_scopeId}>مبلغ نهایی</th><th class="p-4 font-bold"${_scopeId}>وضعیت سفارش</th><th class="p-4 font-bold"${_scopeId}>زمان ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.orders.data, (ord) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4 font-mono font-bold text-lime-400"${_scopeId}>${ssrInterpolate(ord.order_no)}</td><td class="p-4"${_scopeId}><div class="font-bold text-white text-xs sm:text-sm"${_scopeId}>${ssrInterpolate(ord.customer?.full_name || "مشتری حضوری")}</div><div class="text-[11px] text-zinc-400 mt-1 flex items-center gap-1.5"${_scopeId}>`);
							if (ord.delivery_type === "delivery") _push(ssrRenderComponent(unref(Truck), { class: "w-3.5 h-3.5 text-blue-400 shrink-0" }, null, _parent, _scopeId));
							else _push(ssrRenderComponent(unref(Store), { class: "w-3.5 h-3.5 text-lime-400 shrink-0" }, null, _parent, _scopeId));
							_push(`<span class="line-clamp-1"${_scopeId}>${ssrInterpolate(ord.delivery_type === "delivery" ? `پستی: ${ord.shipping_address || "آدرس ثبت‌نشده"}` : "تحویل حضوری در سالن باشگاه")}</span></div></td><td class="p-4"${_scopeId}><ul class="space-y-1 text-[11px] text-zinc-300"${_scopeId}><!--[-->`);
							ssrRenderList(ord.items, (it) => {
								_push(`<li class="flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-zinc-600"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(it.title_snapshot)}</span><span class="font-mono text-zinc-500 font-bold"${_scopeId}>(${ssrInterpolate(it.qty)}×)</span></li>`);
							});
							_push(`<!--]--></ul></td><td class="p-4 font-mono font-black text-white text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(ord.total))}</td><td class="p-4"${_scopeId}><select${ssrRenderAttr("value", ord.status)} class="${ssrRenderClass([{
								"text-amber-400 border-amber-400/30": ord.status === "new" || ord.status === "preparing",
								"text-emerald-400 border-emerald-400/30": ord.status === "delivered" || ord.status === "ready",
								"text-rose-400 border-rose-400/30": ord.status === "cancelled"
							}, "h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs font-bold focus:outline-none focus:border-lime-400 transition-colors"])}"${_scopeId}><option value="new"${_scopeId}>جدید (ثبت اولیه)</option><option value="preparing"${_scopeId}>در حال آماده‌سازی</option><option value="ready"${_scopeId}>آماده تحویل / ارسال</option><option value="delivered"${_scopeId}>تحویل داده شد</option><option value="cancelled"${_scopeId}>لغو سفارش (برگشت انبار)</option></select></td><td class="p-4 text-zinc-400 font-mono text-[11px]"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(ord.created_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.orders.data || __props.orders.data.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> سفارشی در این وضعیت موجود نیست. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.orders.links,
							from: __props.orders.from,
							to: __props.orders.to,
							total: __props.orders.total
						}, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "سفارش‌ها و مرسولات فروشگاه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(ShoppingBag), { class: "w-4 h-4" }), createVNode("span", null, "لجستیک و تحویل سفارشات")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "سفارش‌ها و مرسولات فروشگاه M8"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت چرخه سفارش (آماده‌سازی، ارسال پستی، تحویل حضوری در سالن یا استرداد کالا)")
					]), createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
						createVNode("button", {
							onClick: ($event) => filterStatus(null),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", !__props.currentStatus ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " همه ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("new"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "new" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " جدید ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("preparing"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "preparing" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " در حال آماده‌سازی ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("delivered"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "delivered" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " تحویل داده شده ", 10, ["onClick"])
					])]), createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
						createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(PackageCheck), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "فهرست فاکتورها و وضعیت ارسال")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, [
							createTextVNode("مجموع: "),
							createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.orders.total || __props.orders.data?.length || 0), 1),
							createTextVNode(" فاکتور")
						])]),
						createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "شماره سفارش"),
							createVNode("th", { class: "p-4 font-bold" }, "خریدار و آدرس تحویل"),
							createVNode("th", { class: "p-4 font-bold" }, "اقلام فاکتور"),
							createVNode("th", { class: "p-4 font-bold" }, "مبلغ نهایی"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت سفارش"),
							createVNode("th", { class: "p-4 font-bold" }, "زمان ثبت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.orders.data, (ord) => {
							return openBlock(), createBlock("tr", {
								key: ord.id,
								class: "hover:bg-zinc-800/30 transition-colors"
							}, [
								createVNode("td", { class: "p-4 font-mono font-bold text-lime-400" }, toDisplayString(ord.order_no), 1),
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "font-bold text-white text-xs sm:text-sm" }, toDisplayString(ord.customer?.full_name || "مشتری حضوری"), 1), createVNode("div", { class: "text-[11px] text-zinc-400 mt-1 flex items-center gap-1.5" }, [ord.delivery_type === "delivery" ? (openBlock(), createBlock(unref(Truck), {
									key: 0,
									class: "w-3.5 h-3.5 text-blue-400 shrink-0"
								})) : (openBlock(), createBlock(unref(Store), {
									key: 1,
									class: "w-3.5 h-3.5 text-lime-400 shrink-0"
								})), createVNode("span", { class: "line-clamp-1" }, toDisplayString(ord.delivery_type === "delivery" ? `پستی: ${ord.shipping_address || "آدرس ثبت‌نشده"}` : "تحویل حضوری در سالن باشگاه"), 1)])]),
								createVNode("td", { class: "p-4" }, [createVNode("ul", { class: "space-y-1 text-[11px] text-zinc-300" }, [(openBlock(true), createBlock(Fragment, null, renderList(ord.items, (it) => {
									return openBlock(), createBlock("li", {
										key: it.id,
										class: "flex items-center gap-1"
									}, [
										createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-zinc-600" }),
										createVNode("span", null, toDisplayString(it.title_snapshot), 1),
										createVNode("span", { class: "font-mono text-zinc-500 font-bold" }, "(" + toDisplayString(it.qty) + "×)", 1)
									]);
								}), 128))])]),
								createVNode("td", { class: "p-4 font-mono font-black text-white text-sm" }, toDisplayString(unref(formatPrice)(ord.total)), 1),
								createVNode("td", { class: "p-4" }, [createVNode("select", {
									value: ord.status,
									onChange: ($event) => updateStatus(ord, $event.target.value),
									class: ["h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs font-bold focus:outline-none focus:border-lime-400 transition-colors", {
										"text-amber-400 border-amber-400/30": ord.status === "new" || ord.status === "preparing",
										"text-emerald-400 border-emerald-400/30": ord.status === "delivered" || ord.status === "ready",
										"text-rose-400 border-rose-400/30": ord.status === "cancelled"
									}]
								}, [
									createVNode("option", { value: "new" }, "جدید (ثبت اولیه)"),
									createVNode("option", { value: "preparing" }, "در حال آماده‌سازی"),
									createVNode("option", { value: "ready" }, "آماده تحویل / ارسال"),
									createVNode("option", { value: "delivered" }, "تحویل داده شد"),
									createVNode("option", { value: "cancelled" }, "لغو سفارش (برگشت انبار)")
								], 42, ["value", "onChange"])]),
								createVNode("td", { class: "p-4 text-zinc-400 font-mono text-[11px]" }, toDisplayString(unref(formatJalaliDateTime)(ord.created_at)), 1)
							]);
						}), 128)), !__props.orders.data || __props.orders.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "p-12 text-center text-zinc-500 text-xs"
						}, " سفارشی در این وضعیت موجود نیست. ")])) : createCommentVNode("", true)])])]),
						createVNode(_sfc_main$2, {
							links: __props.orders.links,
							from: __props.orders.from,
							to: __props.orders.to,
							total: __props.orders.total
						}, null, 8, [
							"links",
							"from",
							"to",
							"total"
						])
					])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Shop/Orders.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
