import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Wallet } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "درآمد و کمیسیون‌های مربی" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Wallet), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>گزارش درآمد و کمیسیون‌های مربی</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>سهم شما از ثبت‌نام شاگردان، برنامه‌های اختصاصی و جلسات خصوصی</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>کل کمیسیون کسب‌شده</span><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalEarned))}</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>تسویه‌شده</span><div class="text-2xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalSettled))}</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>در انتظار تسویه</span><div class="text-2xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.totalPending))}</div></div></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>منبع درآمد</th><th class="p-4 font-bold"${_scopeId}>مبلغ تراکنش</th><th class="p-4 font-bold"${_scopeId}>سهم مربی (کمیسیون)</th><th class="p-4 font-bold"${_scopeId}>وضعیت تسویه</th><th class="p-4 font-bold"${_scopeId}>تاریخ ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.incomes.data, (inc) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 font-sans font-bold text-white"${_scopeId}>${ssrInterpolate(inc.source_type)}</td><td class="p-4 text-zinc-400"${_scopeId}>${ssrInterpolate(unref(formatPrice)(inc.amount))}</td><td class="p-4 text-lime-400 font-bold text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(inc.commission))}</td><td class="p-4 font-sans"${_scopeId}><span class="${ssrRenderClass([inc.status === "settled" ? "bg-lime-400/10 text-lime-400" : "bg-amber-400/10 text-amber-400", "px-2 py-0.5 rounded-md text-[10px] font-bold"])}"${_scopeId}>${ssrInterpolate(inc.status === "settled" ? "تسویه شد" : "در انتظار واریز")}</span></td><td class="p-4 text-zinc-400 font-sans"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(inc.created_at))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table>`);
						if (__props.incomes.data.length === 0) _push(`<div class="p-16 text-center text-xs text-zinc-500 font-sans"${_scopeId}> تراکنش کمیسیونی ثبت نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "درآمد و کمیسیون‌های مربی" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Wallet), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "گزارش درآمد و کمیسیون‌های مربی")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "سهم شما از ثبت‌نام شاگردان، برنامه‌های اختصاصی و جلسات خصوصی")]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "کل کمیسیون کسب‌شده"), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(unref(formatPrice)(__props.totalEarned)), 1)]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "تسویه‌شده"), createVNode("div", { class: "text-2xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.totalSettled)), 1)]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "در انتظار تسویه"), createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.totalPending)), 1)])
						]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "منبع درآمد"),
							createVNode("th", { class: "p-4 font-bold" }, "مبلغ تراکنش"),
							createVNode("th", { class: "p-4 font-bold" }, "سهم مربی (کمیسیون)"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت تسویه"),
							createVNode("th", { class: "p-4 font-bold" }, "تاریخ ثبت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.incomes.data, (inc) => {
							return openBlock(), createBlock("tr", {
								key: inc.id,
								class: "hover:bg-zinc-800/20"
							}, [
								createVNode("td", { class: "p-4 font-sans font-bold text-white" }, toDisplayString(inc.source_type), 1),
								createVNode("td", { class: "p-4 text-zinc-400" }, toDisplayString(unref(formatPrice)(inc.amount)), 1),
								createVNode("td", { class: "p-4 text-lime-400 font-bold text-sm" }, toDisplayString(unref(formatPrice)(inc.commission)), 1),
								createVNode("td", { class: "p-4 font-sans" }, [createVNode("span", { class: ["px-2 py-0.5 rounded-md text-[10px] font-bold", inc.status === "settled" ? "bg-lime-400/10 text-lime-400" : "bg-amber-400/10 text-amber-400"] }, toDisplayString(inc.status === "settled" ? "تسویه شد" : "در انتظار واریز"), 3)]),
								createVNode("td", { class: "p-4 text-zinc-400 font-sans" }, toDisplayString(unref(formatJalaliDateTime)(inc.created_at)), 1)
							]);
						}), 128))])]), __props.incomes.data.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-16 text-center text-xs text-zinc-500 font-sans"
						}, " تراکنش کمیسیونی ثبت نشده است. ")) : createCommentVNode("", true)])
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
