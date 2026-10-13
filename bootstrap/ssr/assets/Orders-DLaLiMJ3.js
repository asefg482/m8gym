import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ShoppingBag } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "سفارش‌ها و مرسولات فروشگاه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سفارش‌ها و ارسال مرسولات فروشگاه M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تغییر وضعیت سفارش (آماده‌سازی، ارسال پستی، تحویل حضوری یا لغو با بازگشت موجودی)</p></div><div class="flex items-center gap-2"${_scopeId}><button class="${ssrRenderClass([!__props.currentStatus ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>همه</button><button class="${ssrRenderClass([__props.currentStatus === "new" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>جدید</button><button class="${ssrRenderClass([__props.currentStatus === "preparing" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>در حال آماده‌سازی</button><button class="${ssrRenderClass([__props.currentStatus === "delivered" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>تحویل شده</button></div></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>شماره سفارش</th><th class="p-4 font-bold"${_scopeId}>خریدار و آدرس</th><th class="p-4 font-bold"${_scopeId}>اقلام سفارش</th><th class="p-4 font-bold"${_scopeId}>مبلغ کل</th><th class="p-4 font-bold"${_scopeId}>وضعیت سفارش</th><th class="p-4 font-bold"${_scopeId}>تاریخ</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.orders.data, (ord) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 font-mono font-bold text-lime-400"${_scopeId}>${ssrInterpolate(ord.order_no)}</td><td class="p-4"${_scopeId}><div class="font-bold text-white"${_scopeId}>${ssrInterpolate(ord.customer?.full_name)}</div><div class="text-[10px] text-zinc-400 mt-0.5"${_scopeId}>${ssrInterpolate(ord.delivery_type === "delivery" ? `ارسال پستی: ${ord.shipping_address || "آدرس ثبت‌نشده"}` : "تحویل حضوری در باشگاه")}</div></td><td class="p-4"${_scopeId}><ul class="space-y-1 text-[11px] text-zinc-300"${_scopeId}><!--[-->`);
							ssrRenderList(ord.items, (it) => {
								_push(`<li${_scopeId}> • ${ssrInterpolate(it.title_snapshot)} <span class="font-mono text-zinc-500"${_scopeId}>(${ssrInterpolate(it.qty)} عدد)</span></li>`);
							});
							_push(`<!--]--></ul></td><td class="p-4 font-mono font-bold text-white"${_scopeId}>${ssrInterpolate(unref(formatPrice)(ord.total))}</td><td class="p-4"${_scopeId}><select${ssrRenderAttr("value", ord.status)} class="h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] font-bold focus:outline-none"${_scopeId}><option value="new"${_scopeId}>جدید</option><option value="preparing"${_scopeId}>در حال آماده‌سازی</option><option value="ready"${_scopeId}>آماده ارسال/تحویل</option><option value="delivered"${_scopeId}>تحویل داده شد</option><option value="cancelled"${_scopeId}>لغو سفارش (برگشت موجودی)</option></select></td><td class="p-4 text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(ord.created_at))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div>`);
					} else return [createVNode(unref(Head), { title: "سفارش‌ها و مرسولات فروشگاه" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(ShoppingBag), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "سفارش‌ها و ارسال مرسولات فروشگاه M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تغییر وضعیت سفارش (آماده‌سازی، ارسال پستی، تحویل حضوری یا لغو با بازگشت موجودی)")]), createVNode("div", { class: "flex items-center gap-2" }, [
						createVNode("button", {
							onClick: ($event) => filterStatus(null),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", !__props.currentStatus ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "همه", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("new"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "new" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "جدید", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("preparing"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "preparing" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "در حال آماده‌سازی", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("delivered"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "delivered" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "تحویل شده", 10, ["onClick"])
					])]), createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
						createVNode("th", { class: "p-4 font-bold text-white" }, "شماره سفارش"),
						createVNode("th", { class: "p-4 font-bold" }, "خریدار و آدرس"),
						createVNode("th", { class: "p-4 font-bold" }, "اقلام سفارش"),
						createVNode("th", { class: "p-4 font-bold" }, "مبلغ کل"),
						createVNode("th", { class: "p-4 font-bold" }, "وضعیت سفارش"),
						createVNode("th", { class: "p-4 font-bold" }, "تاریخ")
					])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.orders.data, (ord) => {
						return openBlock(), createBlock("tr", {
							key: ord.id,
							class: "hover:bg-zinc-800/20"
						}, [
							createVNode("td", { class: "p-4 font-mono font-bold text-lime-400" }, toDisplayString(ord.order_no), 1),
							createVNode("td", { class: "p-4" }, [createVNode("div", { class: "font-bold text-white" }, toDisplayString(ord.customer?.full_name), 1), createVNode("div", { class: "text-[10px] text-zinc-400 mt-0.5" }, toDisplayString(ord.delivery_type === "delivery" ? `ارسال پستی: ${ord.shipping_address || "آدرس ثبت‌نشده"}` : "تحویل حضوری در باشگاه"), 1)]),
							createVNode("td", { class: "p-4" }, [createVNode("ul", { class: "space-y-1 text-[11px] text-zinc-300" }, [(openBlock(true), createBlock(Fragment, null, renderList(ord.items, (it) => {
								return openBlock(), createBlock("li", { key: it.id }, [createTextVNode(" • " + toDisplayString(it.title_snapshot) + " ", 1), createVNode("span", { class: "font-mono text-zinc-500" }, "(" + toDisplayString(it.qty) + " عدد)", 1)]);
							}), 128))])]),
							createVNode("td", { class: "p-4 font-mono font-bold text-white" }, toDisplayString(unref(formatPrice)(ord.total)), 1),
							createVNode("td", { class: "p-4" }, [createVNode("select", {
								value: ord.status,
								onChange: ($event) => updateStatus(ord, $event.target.value),
								class: "h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] font-bold focus:outline-none"
							}, [
								createVNode("option", { value: "new" }, "جدید"),
								createVNode("option", { value: "preparing" }, "در حال آماده‌سازی"),
								createVNode("option", { value: "ready" }, "آماده ارسال/تحویل"),
								createVNode("option", { value: "delivered" }, "تحویل داده شد"),
								createVNode("option", { value: "cancelled" }, "لغو سفارش (برگشت موجودی)")
							], 40, ["value", "onChange"])]),
							createVNode("td", { class: "p-4 text-zinc-400 font-mono" }, toDisplayString(unref(formatJalaliDateTime)(ord.created_at)), 1)
						]);
					}), 128))])])])])];
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
