import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { n as formatJalaliDateTime, t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Activity, CalendarCheck, CheckCircle2, Flame } from "@lucide/vue";
//#region resources/js/Pages/Panel/Member/History.vue
var _sfc_main = {
	__name: "History",
	__ssrInlineRender: true,
	props: {
		attendances: Array,
		thisMonthCount: Number,
		totalCount: Number
	},
	setup(__props) {
		const props = __props;
		computed(() => {
			return new Set((props.attendances || []).map((a) => a.date?.substring(0, 10)));
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تاریخچه حضور و غیاب - M8 FIT CLUB" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarCheck), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تاریخچه و لاگ حضور و غیاب من</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> ثبت الکترونیکی ترددها، ثبات در تمرین و جلسات ورزشی شما در باشگاه ۲۵۰۰ متری M8 </p></div><div class="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-xs"${_scopeId}><span class="w-2 h-2 rounded-full bg-emerald-500"${_scopeId}></span><span class="text-zinc-400"${_scopeId}>تردد الکترونیک:</span><span class="font-bold text-white font-mono"${_scopeId}>آنلاین و متصل</span></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Flame), { class: "w-6 h-6" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><span class="text-xs font-bold text-zinc-400 block"${_scopeId}>جلسات حضور در ماه جاری:</span><div class="text-2xl font-black text-white font-mono mt-0.5"${_scopeId}>${ssrInterpolate(__props.thisMonthCount)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>جلسه تمرین</span></div><span class="text-[11px] text-emerald-400 mt-1 inline-block"${_scopeId}>● استمرار ورزشی فعال</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Activity), { class: "w-6 h-6" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><span class="text-xs font-bold text-zinc-400 block"${_scopeId}>کل جلسات تمرین ثبت‌شده:</span><div class="text-2xl font-black text-lime-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(__props.totalCount)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>جلسه کل دوره</span></div><span class="text-[11px] text-zinc-400 mt-1 inline-block"${_scopeId}>از زمان اولین عضویت در M8</span></div></div></div><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-zinc-800/80"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarCheck), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h3 class="text-sm font-bold text-white"${_scopeId}>لیست دقیق روزها و ساعات ورود/خروج</h3></div><span class="text-xs text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(__props.attendances ? __props.attendances.length : 0)} رکورد</span></div><div class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.attendances, (att) => {
							_push(`<div class="py-3.5 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-800/20 rounded-xl transition-colors"${_scopeId}><div class="flex items-center gap-3.5"${_scopeId}><div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><span class="text-xs font-bold text-white block"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(att.date))}</span><span class="text-[11px] text-zinc-400"${_scopeId}>جلسه تمرینی سالن اصلی باشگاه M8</span></div></div><div class="flex items-center gap-4 text-xs font-mono pr-11 sm:pr-0"${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300"${_scopeId}> ورود: ${ssrInterpolate(unref(formatJalaliDateTime)(att.checkin_at))}</span>`);
							if (att.checkout_at) _push(`<span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 text-[11px]"${_scopeId}> خروج: ${ssrInterpolate(unref(formatJalaliDateTime)(att.checkout_at))}</span>`);
							else _push(`<!---->`);
							_push(`</div></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.attendances || __props.attendances.length === 0) _push(`<div class="p-12 text-center text-xs text-zinc-500"${_scopeId}> هنوز جلسه حضوری ثبت نشده است. هنگام ورود به باشگاه، شماره موبایل خود را به پذیرش اعلام فرمایید. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div>`);
					} else return [createVNode(unref(Head), { title: "تاریخچه حضور و غیاب - M8 FIT CLUB" }), createVNode("div", { class: "space-y-6 sm:space-y-8 max-w-7xl mx-auto" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5" }, [createVNode(unref(CalendarCheck), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "تاریخچه و لاگ حضور و غیاب من")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " ثبت الکترونیکی ترددها، ثبات در تمرین و جلسات ورزشی شما در باشگاه ۲۵۰۰ متری M8 ")]), createVNode("div", { class: "px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-xs" }, [
							createVNode("span", { class: "w-2 h-2 rounded-full bg-emerald-500" }),
							createVNode("span", { class: "text-zinc-400" }, "تردد الکترونیک:"),
							createVNode("span", { class: "font-bold text-white font-mono" }, "آنلاین و متصل")
						])]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0" }, [createVNode(unref(Flame), { class: "w-6 h-6" })]), createVNode("div", null, [
							createVNode("span", { class: "text-xs font-bold text-zinc-400 block" }, "جلسات حضور در ماه جاری:"),
							createVNode("div", { class: "text-2xl font-black text-white font-mono mt-0.5" }, [createTextVNode(toDisplayString(__props.thisMonthCount) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "جلسه تمرین")]),
							createVNode("span", { class: "text-[11px] text-emerald-400 mt-1 inline-block" }, "● استمرار ورزشی فعال")
						])]), createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0" }, [createVNode(unref(Activity), { class: "w-6 h-6" })]), createVNode("div", null, [
							createVNode("span", { class: "text-xs font-bold text-zinc-400 block" }, "کل جلسات تمرین ثبت‌شده:"),
							createVNode("div", { class: "text-2xl font-black text-lime-400 font-mono mt-0.5" }, [createTextVNode(toDisplayString(__props.totalCount) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "جلسه کل دوره")]),
							createVNode("span", { class: "text-[11px] text-zinc-400 mt-1 inline-block" }, "از زمان اولین عضویت در M8")
						])])]),
						createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4" }, [createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-zinc-800/80" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(CalendarCheck), { class: "w-4 h-4 text-lime-400" }), createVNode("h3", { class: "text-sm font-bold text-white" }, "لیست دقیق روزها و ساعات ورود/خروج")]), createVNode("span", { class: "text-xs text-zinc-400 font-mono" }, toDisplayString(__props.attendances ? __props.attendances.length : 0) + " رکورد", 1)]), createVNode("div", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.attendances, (att) => {
							return openBlock(), createBlock("div", {
								key: att.id,
								class: "py-3.5 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-800/20 rounded-xl transition-colors"
							}, [createVNode("div", { class: "flex items-center gap-3.5" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0" }, [createVNode(unref(CheckCircle2), { class: "w-4 h-4" })]), createVNode("div", null, [createVNode("span", { class: "text-xs font-bold text-white block" }, toDisplayString(unref(formatJalaliDate)(att.date)), 1), createVNode("span", { class: "text-[11px] text-zinc-400" }, "جلسه تمرینی سالن اصلی باشگاه M8")])]), createVNode("div", { class: "flex items-center gap-4 text-xs font-mono pr-11 sm:pr-0" }, [createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300" }, " ورود: " + toDisplayString(unref(formatJalaliDateTime)(att.checkin_at)), 1), att.checkout_at ? (openBlock(), createBlock("span", {
								key: 0,
								class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 text-[11px]"
							}, " خروج: " + toDisplayString(unref(formatJalaliDateTime)(att.checkout_at)), 1)) : createCommentVNode("", true)])]);
						}), 128)), !__props.attendances || __props.attendances.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-12 text-center text-xs text-zinc-500"
						}, " هنوز جلسه حضوری ثبت نشده است. هنگام ورود به باشگاه، شماره موبایل خود را به پذیرش اعلام فرمایید. ")) : createCommentVNode("", true)])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Member/History.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
