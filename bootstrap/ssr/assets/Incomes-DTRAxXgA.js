import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-BBik0JPe.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Banknote, CheckCircle2, Clock, Receipt, TrendingUp, Wallet } from "@lucide/vue";
//#region resources/js/Pages/Panel/Trainer/Incomes.vue
var _sfc_main = {
	__name: "Incomes",
	__ssrInlineRender: true,
	props: {
		incomes: Object,
		totalEarned: Number,
		totalSettled: Number,
		totalPending: Number
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "درآمد و کمیسیون‌های مربی - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Wallet), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم تسویه حساب و پورسانت مربیان</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>گزارش درآمد و کمیسیون‌های مربی</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>سهم شما از ثبت‌نام شاگردان، برنامه‌های اختصاصی بدنسازی و جلسات تمرین خصوصی</p></div><div class="flex items-center gap-2"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Receipt), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تسویه خودکار ماهانه</span></span></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>کل کمیسیون کسب‌شده</span><div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Wallet), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalEarned))}</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مجموع سوابق مالی ثبت‌شده</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>تسویه‌شده و واریزی</span><div class="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalSettled))}</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"${_scopeId}></span><span${_scopeId}>واریز به شماره شبا مربی</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>در انتظار تسویه مالی</span><div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalPending))}</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-400"${_scopeId}></span><span${_scopeId}>موجود در نوبت تسویه جاری</span></div></div></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Banknote), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>دفتر کل و ریز تراکنش‌های کمیسیون</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>مجموع رکوردها: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.incomes.total || __props.incomes.data?.length || 0)}</b></span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>منبع تراکنش</th><th class="p-4 font-bold"${_scopeId}>مبلغ کل تراکنش</th><th class="p-4 font-bold"${_scopeId}>سهم مربی (کمیسیون)</th><th class="p-4 font-bold"${_scopeId}>وضعیت تسویه</th><th class="p-4 font-bold"${_scopeId}>تاریخ ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/50 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.incomes.data, (inc) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4 font-sans font-bold text-white"${_scopeId}>${ssrInterpolate(inc.source_type)}</td><td class="p-4 text-zinc-400"${_scopeId}>${ssrInterpolate(unref(formatPrice)(inc.amount))}</td><td class="p-4 text-lime-400 font-bold text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(inc.commission))}</td><td class="p-4 font-sans"${_scopeId}><span class="${ssrRenderClass([inc.settled_at ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20", "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"])}"${_scopeId}><span class="${ssrRenderClass([inc.settled_at ? "bg-emerald-400" : "bg-amber-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(inc.settled_at ? "تسویه‌شده" : "در انتظار تسویه")}</span></td><td class="p-4 text-zinc-400 text-[11px]"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(inc.created_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.incomes.data || __props.incomes.data.length === 0) _push(`<tr${_scopeId}><td colspan="5" class="p-12 text-center text-zinc-500 font-sans text-xs"${_scopeId}> هنوز تراکنش کمیسیونی برای شما ثبت نگردیده است. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.incomes.links,
							from: __props.incomes.from,
							to: __props.incomes.to,
							total: __props.incomes.total
						}, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "درآمد و کمیسیون‌های مربی - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Wallet), { class: "w-4 h-4" }), createVNode("span", null, "سیستم تسویه حساب و پورسانت مربیان")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "گزارش درآمد و کمیسیون‌های مربی"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "سهم شما از ثبت‌نام شاگردان، برنامه‌های اختصاصی بدنسازی و جلسات تمرین خصوصی")
						]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono" }, [createVNode(unref(Receipt), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "تسویه خودکار ماهانه")])])]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "کل کمیسیون کسب‌شده"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Wallet), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(unref(formatPrice)(__props.totalEarned)), 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode(unref(TrendingUp), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "مجموع سوابق مالی ثبت‌شده")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "تسویه‌شده و واریزی"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center font-bold" }, [createVNode(unref(CheckCircle2), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.totalSettled)), 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-400" }), createVNode("span", null, "واریز به شماره شبا مربی")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "در انتظار تسویه مالی"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold" }, [createVNode(unref(Clock), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.totalPending)), 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400" }), createVNode("span", null, "موجود در نوبت تسویه جاری")])])])
						]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
							createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Banknote), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "دفتر کل و ریز تراکنش‌های کمیسیون")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, [createTextVNode("مجموع رکوردها: "), createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.incomes.total || __props.incomes.data?.length || 0), 1)])]),
							createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-4 font-bold text-white" }, "منبع تراکنش"),
								createVNode("th", { class: "p-4 font-bold" }, "مبلغ کل تراکنش"),
								createVNode("th", { class: "p-4 font-bold" }, "سهم مربی (کمیسیون)"),
								createVNode("th", { class: "p-4 font-bold" }, "وضعیت تسویه"),
								createVNode("th", { class: "p-4 font-bold" }, "تاریخ ثبت")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.incomes.data, (inc) => {
								return openBlock(), createBlock("tr", {
									key: inc.id,
									class: "hover:bg-zinc-800/30 transition-colors"
								}, [
									createVNode("td", { class: "p-4 font-sans font-bold text-white" }, toDisplayString(inc.source_type), 1),
									createVNode("td", { class: "p-4 text-zinc-400" }, toDisplayString(unref(formatPrice)(inc.amount)), 1),
									createVNode("td", { class: "p-4 text-lime-400 font-bold text-sm" }, toDisplayString(unref(formatPrice)(inc.commission)), 1),
									createVNode("td", { class: "p-4 font-sans" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border", inc.settled_at ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", inc.settled_at ? "bg-emerald-400" : "bg-amber-400"] }, null, 2), createTextVNode(" " + toDisplayString(inc.settled_at ? "تسویه‌شده" : "در انتظار تسویه"), 1)], 2)]),
									createVNode("td", { class: "p-4 text-zinc-400 text-[11px]" }, toDisplayString(unref(formatJalaliDateTime)(inc.created_at)), 1)
								]);
							}), 128)), !__props.incomes.data || __props.incomes.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "5",
								class: "p-12 text-center text-zinc-500 font-sans text-xs"
							}, " هنوز تراکنش کمیسیونی برای شما ثبت نگردیده است. ")])) : createCommentVNode("", true)])])]),
							createVNode(_sfc_main$2, {
								links: __props.incomes.links,
								from: __props.incomes.from,
								to: __props.incomes.to,
								total: __props.incomes.total
							}, null, 8, [
								"links",
								"from",
								"to",
								"total"
							])
						])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Trainer/Incomes.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
