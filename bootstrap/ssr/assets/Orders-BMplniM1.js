import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Bell, RefreshCw } from "@lucide/vue";
//#region resources/js/Pages/Panel/Buffet/Orders.vue
var _sfc_main = {
	__name: "Orders",
	__ssrInlineRender: true,
	props: { orders: Object },
	setup(__props) {
		function updateStatus(order, newStatus) {
			router.put(`/panel/buffet/orders/${order.id}/status`, { status: newStatus }, { preserveScroll: true });
		}
		function refreshOrders() {
			router.reload({ only: ["orders"] });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "سفارش‌های زنده بوفه و کافه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Bell), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مانیتور سفارش‌های زنده بوفه و کافه M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده آنی سفارش‌های ثبت‌شده؛ آماده‌سازی و تغییر وضعیت</p></div><button class="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-semibold text-zinc-300 flex items-center gap-2 cursor-pointer"${_scopeId}>`);
						_push(ssrRenderComponent(unref(RefreshCw), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>بروزرسانی لیست</span></button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
						ssrRenderList(__props.orders.data, (ord) => {
							_push(`<div class="${ssrRenderClass([{
								"border-lime-400/80 shadow-xl shadow-lime-400/10 ring-1 ring-lime-400/30": ord.status === "new",
								"border-cyan-400/50": ord.status === "preparing",
								"border-zinc-800 opacity-80": ord.status === "delivered"
							}, "p-6 rounded-3xl bg-zinc-900 border flex flex-col justify-between transition-all"])}"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3"${_scopeId}><div${_scopeId}><span class="font-bold text-white text-sm"${_scopeId}>${ssrInterpolate(ord.customer?.full_name)}</span><span class="text-[10px] text-zinc-500 font-mono block"${_scopeId}>${ssrInterpolate(ord.order_no)}</span></div><span class="${ssrRenderClass([{
								"bg-lime-400 text-black animate-pulse": ord.status === "new",
								"bg-cyan-400/20 text-cyan-400": ord.status === "preparing",
								"bg-zinc-800 text-zinc-400": ord.status === "delivered"
							}, "px-2.5 py-1 rounded-full text-[10px] font-bold"])}"${_scopeId}>${ssrInterpolate(ord.status === "new" ? "سفارش جدید!" : ord.status === "preparing" ? "در حال آماده‌سازی" : ord.status === "ready" ? "آماده تحویل" : "تحویل شد")}</span></div><div class="space-y-2 mb-4 text-xs"${_scopeId}><!--[-->`);
							ssrRenderList(ord.items, (it) => {
								_push(`<div class="flex items-center justify-between p-2 rounded-xl bg-zinc-950 border border-zinc-800/80"${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(it.title_snapshot)}</span><span class="font-mono text-lime-400 font-bold"${_scopeId}>${ssrInterpolate(it.qty)} عدد</span></div>`);
							});
							_push(`<!--]--></div>`);
							if (ord.note) _push(`<div class="text-[11px] text-amber-400 mb-3 p-2 rounded-lg bg-amber-400/10 border border-amber-400/20"${_scopeId}> یادداشت مشتری: ${ssrInterpolate(ord.note)}</div>`);
							else _push(`<!---->`);
							_push(`</div><div class="pt-3 border-t border-zinc-800 flex items-center justify-between"${_scopeId}><span class="text-xs font-mono font-bold text-white"${_scopeId}>${ssrInterpolate(unref(formatPrice)(ord.total))}</span><div class="flex items-center gap-1.5"${_scopeId}>`);
							if (ord.status === "new") _push(`<button class="px-3 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold cursor-pointer"${_scopeId}> شروع آماده‌سازی </button>`);
							else _push(`<!---->`);
							if (ord.status === "preparing") _push(`<button class="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold cursor-pointer"${_scopeId}> آماده شد </button>`);
							else _push(`<!---->`);
							if (ord.status === "ready") _push(`<button class="px-3 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold cursor-pointer"${_scopeId}> تحویل به ورزشکار </button>`);
							else _push(`<!---->`);
							_push(`</div></div></div>`);
						});
						_push(`<!--]-->`);
						if (__props.orders.data.length === 0) _push(`<div class="col-span-3 p-16 text-center text-xs text-zinc-500"${_scopeId}> سفارشی در جریان نیست. </div>`);
						else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "سفارش‌های زنده بوفه و کافه" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Bell), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "مانیتور سفارش‌های زنده بوفه و کافه M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده آنی سفارش‌های ثبت‌شده؛ آماده‌سازی و تغییر وضعیت")]), createVNode("button", {
						onClick: refreshOrders,
						class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs font-semibold text-zinc-300 flex items-center gap-2 cursor-pointer"
					}, [createVNode(unref(RefreshCw), { class: "w-3.5 h-3.5" }), createVNode("span", null, "بروزرسانی لیست")])]), createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.orders.data, (ord) => {
						return openBlock(), createBlock("div", {
							key: ord.id,
							class: ["p-6 rounded-3xl bg-zinc-900 border flex flex-col justify-between transition-all", {
								"border-lime-400/80 shadow-xl shadow-lime-400/10 ring-1 ring-lime-400/30": ord.status === "new",
								"border-cyan-400/50": ord.status === "preparing",
								"border-zinc-800 opacity-80": ord.status === "delivered"
							}]
						}, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-zinc-800 mb-3" }, [createVNode("div", null, [createVNode("span", { class: "font-bold text-white text-sm" }, toDisplayString(ord.customer?.full_name), 1), createVNode("span", { class: "text-[10px] text-zinc-500 font-mono block" }, toDisplayString(ord.order_no), 1)]), createVNode("span", { class: ["px-2.5 py-1 rounded-full text-[10px] font-bold", {
								"bg-lime-400 text-black animate-pulse": ord.status === "new",
								"bg-cyan-400/20 text-cyan-400": ord.status === "preparing",
								"bg-zinc-800 text-zinc-400": ord.status === "delivered"
							}] }, toDisplayString(ord.status === "new" ? "سفارش جدید!" : ord.status === "preparing" ? "در حال آماده‌سازی" : ord.status === "ready" ? "آماده تحویل" : "تحویل شد"), 3)]),
							createVNode("div", { class: "space-y-2 mb-4 text-xs" }, [(openBlock(true), createBlock(Fragment, null, renderList(ord.items, (it) => {
								return openBlock(), createBlock("div", {
									key: it.id,
									class: "flex items-center justify-between p-2 rounded-xl bg-zinc-950 border border-zinc-800/80"
								}, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(it.title_snapshot), 1), createVNode("span", { class: "font-mono text-lime-400 font-bold" }, toDisplayString(it.qty) + " عدد", 1)]);
							}), 128))]),
							ord.note ? (openBlock(), createBlock("div", {
								key: 0,
								class: "text-[11px] text-amber-400 mb-3 p-2 rounded-lg bg-amber-400/10 border border-amber-400/20"
							}, " یادداشت مشتری: " + toDisplayString(ord.note), 1)) : createCommentVNode("", true)
						]), createVNode("div", { class: "pt-3 border-t border-zinc-800 flex items-center justify-between" }, [createVNode("span", { class: "text-xs font-mono font-bold text-white" }, toDisplayString(unref(formatPrice)(ord.total)), 1), createVNode("div", { class: "flex items-center gap-1.5" }, [
							ord.status === "new" ? (openBlock(), createBlock("button", {
								key: 0,
								onClick: ($event) => updateStatus(ord, "preparing"),
								class: "px-3 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold cursor-pointer"
							}, " شروع آماده‌سازی ", 8, ["onClick"])) : createCommentVNode("", true),
							ord.status === "preparing" ? (openBlock(), createBlock("button", {
								key: 1,
								onClick: ($event) => updateStatus(ord, "ready"),
								class: "px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold cursor-pointer"
							}, " آماده شد ", 8, ["onClick"])) : createCommentVNode("", true),
							ord.status === "ready" ? (openBlock(), createBlock("button", {
								key: 2,
								onClick: ($event) => updateStatus(ord, "delivered"),
								class: "px-3 py-1.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold cursor-pointer"
							}, " تحویل به ورزشکار ", 8, ["onClick"])) : createCommentVNode("", true)
						])])], 2);
					}), 128)), __props.orders.data.length === 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "col-span-3 p-16 text-center text-xs text-zinc-500"
					}, " سفارشی در جریان نیست. ")) : createCommentVNode("", true)])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Buffet/Orders.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
