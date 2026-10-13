import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { Fragment, createBlock, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Clock } from "@lucide/vue";
//#region resources/js/Pages/Panel/Service/Schedule.vue
var _sfc_main = {
	__name: "Schedule",
	__ssrInlineRender: true,
	props: {
		schedules: Array,
		timeOffs: Array
	},
	setup(__props) {
		const weekdays = [
			"شنبه",
			"یکشنبه",
			"دوشنبه",
			"سه‌شنبه",
			"چهارشنبه",
			"پنجشنبه",
			"جمعه"
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "ساعات کاری و مرخصی‌ها" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-4xl"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>برنامه کاری و زمان‌های حضور ارائه‌دهنده</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تعیین شیفت‌های کاری هفتگی و ثبت روزهای مرخصی جهت عدم نوبت‌دهی تداخلی</p></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider"${_scopeId}>ساعات حضور در طول هفته</h3><div class="divide-y divide-zinc-800 text-xs"${_scopeId}><!--[-->`);
						ssrRenderList(weekdays, (day, index) => {
							_push(`<div class="py-3 flex items-center justify-between"${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(day)}</span><div class="flex items-center gap-2 text-zinc-300 font-mono"${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800"${_scopeId}>۰۹:۰۰</span><span${_scopeId}>تا</span><span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800"${_scopeId}>۲۱:۰۰</span></div></div>`);
						});
						_push(`<!--]--></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "ساعات کاری و مرخصی‌ها" }), createVNode("div", { class: "space-y-6 max-w-4xl" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Clock), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "برنامه کاری و زمان‌های حضور ارائه‌دهنده")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تعیین شیفت‌های کاری هفتگی و ثبت روزهای مرخصی جهت عدم نوبت‌دهی تداخلی")]), createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4" }, [createVNode("h3", { class: "text-xs font-bold text-lime-400 uppercase tracking-wider" }, "ساعات حضور در طول هفته"), createVNode("div", { class: "divide-y divide-zinc-800 text-xs" }, [(openBlock(), createBlock(Fragment, null, renderList(weekdays, (day, index) => {
						return createVNode("div", {
							key: index,
							class: "py-3 flex items-center justify-between"
						}, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(day), 1), createVNode("div", { class: "flex items-center gap-2 text-zinc-300 font-mono" }, [
							createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800" }, "۰۹:۰۰"),
							createVNode("span", null, "تا"),
							createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800" }, "۲۱:۰۰")
						])]);
					}), 64))])])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Service/Schedule.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
