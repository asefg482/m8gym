import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { Fragment, createBlock, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Calendar, Clock } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "ساعات کاری و مرخصی‌ها - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-4xl"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تقویم کاری و مدیریت شیفت‌ها</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>برنامه کاری و زمان‌های حضور ارائه‌دهندگان</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تعیین شیفت‌های کاری هفتگی، بازه‌های فعال رزرو و ثبت ایام تعطیل جهت جلوگیری از رزروهای متداخل</p></div></div><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-zinc-800/80 pb-3"${_scopeId}><h3 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ساعات حضور و پذیرش ماساژ و پیرایش در طول هفته</span></h3><span class="text-[11px] text-lime-400 font-bold"${_scopeId}>شیفت استاندارد</span></div><div class="divide-y divide-zinc-800/50 text-xs"${_scopeId}><!--[-->`);
						ssrRenderList(weekdays, (day, index) => {
							_push(`<div class="py-3.5 flex items-center justify-between hover:bg-zinc-800/20 px-2 rounded-xl transition-colors"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}><span class="${ssrRenderClass([day === "جمعه" ? "bg-amber-400" : "bg-lime-400", "w-2 h-2 rounded-full"])}"${_scopeId}></span><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(day)}</span></div><div class="flex items-center gap-2 text-zinc-300 font-mono"${_scopeId}><span class="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-bold text-white"${_scopeId}>۰۹:۰۰</span><span class="text-zinc-500 font-sans text-xs"${_scopeId}>الی</span><span class="px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-bold text-lime-400"${_scopeId}>۲۱:۰۰</span></div></div>`);
						});
						_push(`<!--]--></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "ساعات کاری و مرخصی‌ها - Dashlite" }), createVNode("div", { class: "space-y-6 max-w-4xl" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Clock), { class: "w-4 h-4" }), createVNode("span", null, "تقویم کاری و مدیریت شیفت‌ها")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "برنامه کاری و زمان‌های حضور ارائه‌دهندگان"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تعیین شیفت‌های کاری هفتگی، بازه‌های فعال رزرو و ثبت ایام تعطیل جهت جلوگیری از رزروهای متداخل")
					])]), createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-4" }, [createVNode("div", { class: "flex items-center justify-between border-b border-zinc-800/80 pb-3" }, [createVNode("h3", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Calendar), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "ساعات حضور و پذیرش ماساژ و پیرایش در طول هفته")]), createVNode("span", { class: "text-[11px] text-lime-400 font-bold" }, "شیفت استاندارد")]), createVNode("div", { class: "divide-y divide-zinc-800/50 text-xs" }, [(openBlock(), createBlock(Fragment, null, renderList(weekdays, (day, index) => {
						return createVNode("div", {
							key: index,
							class: "py-3.5 flex items-center justify-between hover:bg-zinc-800/20 px-2 rounded-xl transition-colors"
						}, [createVNode("div", { class: "flex items-center gap-2.5" }, [createVNode("span", { class: ["w-2 h-2 rounded-full", day === "جمعه" ? "bg-amber-400" : "bg-lime-400"] }, null, 2), createVNode("span", { class: "font-bold text-white" }, toDisplayString(day), 1)]), createVNode("div", { class: "flex items-center gap-2 text-zinc-300 font-mono" }, [
							createVNode("span", { class: "px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-bold text-white" }, "۰۹:۰۰"),
							createVNode("span", { class: "text-zinc-500 font-sans text-xs" }, "الی"),
							createVNode("span", { class: "px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 font-bold text-lime-400" }, "۲۱:۰۰")
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
