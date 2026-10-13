import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CalendarCheck, CheckCircle2, Flame } from "@lucide/vue";
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
			return new Set(props.attendances.map((a) => a.date?.substring(0, 10)));
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تاریخچه حضور و غیاب من" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarCheck), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تاریخچه و تقویم حضور و غیاب من</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده روزهای تمرین و ثبات در ورزش باشگاه M8</p></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Flame), { class: "w-6 h-6" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><span class="text-xs text-zinc-400"${_scopeId}>جلسات حضور در ماه جاری:</span><div class="text-2xl font-black text-white font-mono mt-0.5"${_scopeId}>${ssrInterpolate(__props.thisMonthCount)} جلسه </div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarCheck), { class: "w-6 h-6" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><span class="text-xs text-zinc-400"${_scopeId}>کل جلسات تمرین ثبت‌شده:</span><div class="text-2xl font-black text-white font-mono mt-0.5"${_scopeId}>${ssrInterpolate(__props.totalCount)} جلسه </div></div></div></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl"${_scopeId}><div class="p-5 border-b border-zinc-800 flex items-center justify-between"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>لیست روزهای حضور من</h3><span class="text-xs text-lime-400 font-semibold"${_scopeId}>● ثبت تردد الکترونیکی</span></div><div class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.attendances, (att) => {
							_push(`<div class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/20 transition-colors"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
							_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-5 h-5 text-lime-400 shrink-0" }, null, _parent, _scopeId));
							_push(`<div${_scopeId}><span class="text-sm font-bold text-white block"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(att.date))}</span><span class="text-[11px] text-zinc-400"${_scopeId}>حضور داشتم (جلسه تمرین M8)</span></div></div><div class="text-left font-mono text-xs"${_scopeId}><div class="text-zinc-300"${_scopeId}>ورود: ${ssrInterpolate(unref(formatJalaliDateTime)(att.checkin_at))}</div>`);
							if (att.checkout_at) _push(`<div class="text-zinc-500 text-[11px]"${_scopeId}>خروج: ${ssrInterpolate(unref(formatJalaliDateTime)(att.checkout_at))}</div>`);
							else _push(`<!---->`);
							_push(`</div></div>`);
						});
						_push(`<!--]-->`);
						if (__props.attendances.length === 0) _push(`<div class="p-12 text-center text-xs text-zinc-500"${_scopeId}> هنوز جلسه حضوری ثبت نشده است. هنگام ورود به باشگاه، شماره موبایل خود را به پذیرش اعلام فرمایید. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div>`);
					} else return [createVNode(unref(Head), { title: "تاریخچه حضور و غیاب من" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(CalendarCheck), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "تاریخچه و تقویم حضور و غیاب من")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده روزهای تمرین و ثبات در ورزش باشگاه M8")]),
						createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400" }, [createVNode(unref(Flame), { class: "w-6 h-6" })]), createVNode("div", null, [createVNode("span", { class: "text-xs text-zinc-400" }, "جلسات حضور در ماه جاری:"), createVNode("div", { class: "text-2xl font-black text-white font-mono mt-0.5" }, toDisplayString(__props.thisMonthCount) + " جلسه ", 1)])]), createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-300" }, [createVNode(unref(CalendarCheck), { class: "w-6 h-6" })]), createVNode("div", null, [createVNode("span", { class: "text-xs text-zinc-400" }, "کل جلسات تمرین ثبت‌شده:"), createVNode("div", { class: "text-2xl font-black text-white font-mono mt-0.5" }, toDisplayString(__props.totalCount) + " جلسه ", 1)])])]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl" }, [createVNode("div", { class: "p-5 border-b border-zinc-800 flex items-center justify-between" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, "لیست روزهای حضور من"), createVNode("span", { class: "text-xs text-lime-400 font-semibold" }, "● ثبت تردد الکترونیکی")]), createVNode("div", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.attendances, (att) => {
							return openBlock(), createBlock("div", {
								key: att.id,
								class: "p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/20 transition-colors"
							}, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(CheckCircle2), { class: "w-5 h-5 text-lime-400 shrink-0" }), createVNode("div", null, [createVNode("span", { class: "text-sm font-bold text-white block" }, toDisplayString(unref(formatJalaliDate)(att.date)), 1), createVNode("span", { class: "text-[11px] text-zinc-400" }, "حضور داشتم (جلسه تمرین M8)")])]), createVNode("div", { class: "text-left font-mono text-xs" }, [createVNode("div", { class: "text-zinc-300" }, "ورود: " + toDisplayString(unref(formatJalaliDateTime)(att.checkin_at)), 1), att.checkout_at ? (openBlock(), createBlock("div", {
								key: 0,
								class: "text-zinc-500 text-[11px]"
							}, "خروج: " + toDisplayString(unref(formatJalaliDateTime)(att.checkout_at)), 1)) : createCommentVNode("", true)])]);
						}), 128)), __props.attendances.length === 0 ? (openBlock(), createBlock("div", {
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
