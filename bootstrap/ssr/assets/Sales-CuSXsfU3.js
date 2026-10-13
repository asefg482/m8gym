import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice, t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { TrendingUp } from "@lucide/vue";
//#region resources/js/Pages/Panel/Buffet/Sales.vue
var _sfc_main = {
	__name: "Sales",
	__ssrInlineRender: true,
	props: { dailySales: Array },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "گزارش فروش بوفه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>گزارش فروش روزانه بوفه و کافه سلامت</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>روند فروش اقلام و نوشیدنی‌های بوفه در ۳۰ روز گذشته</p></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>تاریخ</th><th class="p-4 font-bold"${_scopeId}>تعداد سفارش‌ها</th><th class="p-4 font-bold"${_scopeId}>درآمد فروش</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.dailySales, (d) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 font-sans font-bold text-white"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(d.date))}</td><td class="p-4 text-zinc-300"${_scopeId}>${ssrInterpolate(d.count)} سفارش</td><td class="p-4 text-lime-400 font-bold text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(d.revenue))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div>`);
					} else return [createVNode(unref(Head), { title: "گزارش فروش بوفه" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(TrendingUp), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "گزارش فروش روزانه بوفه و کافه سلامت")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "روند فروش اقلام و نوشیدنی‌های بوفه در ۳۰ روز گذشته")]), createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
						createVNode("th", { class: "p-4 font-bold text-white" }, "تاریخ"),
						createVNode("th", { class: "p-4 font-bold" }, "تعداد سفارش‌ها"),
						createVNode("th", { class: "p-4 font-bold" }, "درآمد فروش")
					])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.dailySales, (d) => {
						return openBlock(), createBlock("tr", {
							key: d.date,
							class: "hover:bg-zinc-800/20"
						}, [
							createVNode("td", { class: "p-4 font-sans font-bold text-white" }, toDisplayString(unref(formatJalaliDate)(d.date)), 1),
							createVNode("td", { class: "p-4 text-zinc-300" }, toDisplayString(d.count) + " سفارش", 1),
							createVNode("td", { class: "p-4 text-lime-400 font-bold text-sm" }, toDisplayString(unref(formatPrice)(d.revenue)), 1)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Buffet/Sales.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
