import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { r as formatPrice, t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { BarChart2, Calendar, TrendingUp } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "گزارش فروش روزانه بوفه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>آمار و تحلیل فروش بوفه</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>گزارش فروش روزانه بوفه و کافه سلامت</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>بررسی روند و درآمد حاصل از فروش اقلام خوراکی و نوشیدنی‌های رژیمی در ۳۰ روز اخیر</p></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(BarChart2), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>گردش روزانه صندوق بوفه</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>${ssrInterpolate(__props.dailySales.length)} روز معاملاتی</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>تاریخ</th><th class="p-4 font-bold"${_scopeId}>تعداد سفارش‌ها</th><th class="p-4 font-bold"${_scopeId}>مجموع درآمد روزانه</th></tr></thead><tbody class="divide-y divide-zinc-800/50 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.dailySales, (d) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4 font-sans font-bold text-white flex items-center gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Calendar), { class: "w-3.5 h-3.5 text-zinc-500 inline" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(d.date))}</span></td><td class="p-4 text-zinc-300 font-bold"${_scopeId}>${ssrInterpolate(d.count)} فاکتور</td><td class="p-4 text-lime-400 font-black text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(d.revenue))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.dailySales || __props.dailySales.length === 0) _push(`<tr${_scopeId}><td colspan="3" class="p-12 text-center text-zinc-500 font-sans text-xs"${_scopeId}> سابقه‌ای در این بازه زمانی یافت نشد. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "گزارش فروش روزانه بوفه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(TrendingUp), { class: "w-4 h-4" }), createVNode("span", null, "آمار و تحلیل فروش بوفه")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "گزارش فروش روزانه بوفه و کافه سلامت"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "بررسی روند و درآمد حاصل از فروش اقلام خوراکی و نوشیدنی‌های رژیمی در ۳۰ روز اخیر")
					])]), createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(BarChart2), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "گردش روزانه صندوق بوفه")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, toDisplayString(__props.dailySales.length) + " روز معاملاتی", 1)]), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
						createVNode("th", { class: "p-4 font-bold text-white" }, "تاریخ"),
						createVNode("th", { class: "p-4 font-bold" }, "تعداد سفارش‌ها"),
						createVNode("th", { class: "p-4 font-bold" }, "مجموع درآمد روزانه")
					])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.dailySales, (d) => {
						return openBlock(), createBlock("tr", {
							key: d.date,
							class: "hover:bg-zinc-800/30 transition-colors"
						}, [
							createVNode("td", { class: "p-4 font-sans font-bold text-white flex items-center gap-2" }, [createVNode(unref(Calendar), { class: "w-3.5 h-3.5 text-zinc-500 inline" }), createVNode("span", null, toDisplayString(unref(formatJalaliDate)(d.date)), 1)]),
							createVNode("td", { class: "p-4 text-zinc-300 font-bold" }, toDisplayString(d.count) + " فاکتور", 1),
							createVNode("td", { class: "p-4 text-lime-400 font-black text-sm" }, toDisplayString(unref(formatPrice)(d.revenue)), 1)
						]);
					}), 128)), !__props.dailySales || __props.dailySales.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
						colspan: "3",
						class: "p-12 text-center text-zinc-500 font-sans text-xs"
					}, " سابقه‌ای در این بازه زمانی یافت نشد. ")])) : createCommentVNode("", true)])])])])])];
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
