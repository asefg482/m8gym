import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Dumbbell, FileText, Sparkles, User } from "@lucide/vue";
//#region resources/js/Pages/Panel/Member/WorkoutPlans.vue
var _sfc_main = {
	__name: "WorkoutPlans",
	__ssrInlineRender: true,
	props: { plans: Array },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "برنامه‌های تمرینی و تغذیه - M8 FIT CLUB" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>برنامه‌های تمرینی و رژیم غذایی من</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> طراحی و تنظیم اختصاصی توسط کادر مربیان رسمی باشگاه M8 بر اساس فیزیولوژی و اهداف شما </p></div><div class="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-xs"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span class="text-zinc-400"${_scopeId}>تعداد برنامه‌ها:</span><span class="font-bold text-white font-mono"${_scopeId}>${ssrInterpolate(__props.plans ? __props.plans.length : 0)} برنامه</span></div></div>`);
						if (__props.plans && __props.plans.length > 0) {
							_push(`<div class="space-y-6"${_scopeId}><!--[-->`);
							ssrRenderList(__props.plans, (plan) => {
								_push(`<div class="p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800/80 gap-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Dumbbell), { class: "w-5 h-5" }, null, _parent, _scopeId));
								_push(`</div><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><h2 class="text-base font-bold text-white"${_scopeId}>${ssrInterpolate(plan.title)}</h2><span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20"${_scopeId}>${ssrInterpolate(plan.type === "workout" ? "برنامه تمرینی" : "برنامه تغذیه و رژیم")}</span></div><p class="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5"${_scopeId}>`);
								_push(ssrRenderComponent(unref(User), { class: "w-3.5 h-3.5 text-zinc-500" }, null, _parent, _scopeId));
								_push(`<span${_scopeId}>مربی مسئول: ${ssrInterpolate(plan.trainer?.full_name || "کادر فنی")}</span></p></div></div><div class="px-3 py-1 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-mono"${_scopeId}> دوره اجرا: ${ssrInterpolate(unref(formatJalaliDate)(plan.starts_at))} تا ${ssrInterpolate(unref(formatJalaliDate)(plan.ends_at))}</div></div>`);
								if (plan.notes) {
									_push(`<div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs text-zinc-300"${_scopeId}><div class="flex items-center gap-2 font-bold text-lime-400 mb-1.5"${_scopeId}>`);
									_push(ssrRenderComponent(unref(FileText), { class: "w-4 h-4" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>توصیه‌ها و نکات کلیدی مربی:</span></div><p class="leading-relaxed"${_scopeId}>${ssrInterpolate(plan.notes)}</p></div>`);
								} else _push(`<!---->`);
								_push(`<div class="rounded-xl border border-zinc-800/90 overflow-hidden bg-zinc-950/40"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-3.5 font-bold"${_scopeId}>روز / نوبت</th><th class="p-3.5 font-bold"${_scopeId}>عنوان حرکت یا وعده غذایی</th><th class="p-3.5 font-bold text-center"${_scopeId}>ست‌ها</th><th class="p-3.5 font-bold text-center"${_scopeId}>تکرار / مقدار</th><th class="p-3.5 font-bold"${_scopeId}>توضیحات و الگوی اجرا</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-sans"${_scopeId}><!--[-->`);
								ssrRenderList(plan.items, (item) => {
									_push(`<tr class="hover:bg-zinc-800/20 transition-colors"${_scopeId}><td class="p-3.5 font-bold text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(item.day)}</td><td class="p-3.5 font-bold text-white"${_scopeId}>${ssrInterpolate(item.title)}</td><td class="p-3.5 text-center font-mono text-zinc-200"${_scopeId}>${ssrInterpolate(item.sets || "-")}</td><td class="p-3.5 text-center font-mono text-zinc-200"${_scopeId}>${ssrInterpolate(item.reps || "-")}</td><td class="p-3.5 text-zinc-400"${_scopeId}>${ssrInterpolate(item.notes || "-")}</td></tr>`);
								});
								_push(`<!--]--></tbody></table></div></div>`);
							});
							_push(`<!--]--></div>`);
						} else {
							_push(`<div class="p-16 text-center rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm"${_scopeId}><div class="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 mx-auto mb-4"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Dumbbell), { class: "w-8 h-8" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>هنوز برنامه‌ای برای شما ثبت نشده است</h3><p class="text-xs text-zinc-400 mt-1 max-w-sm mx-auto"${_scopeId}> جهت دریافت برنامه تمرینی یا رژیم اختصاصی، در سالن با مربیان باشگاه هماهنگ نمایید تا برنامه شما در پنل بارگذاری شود. </p></div>`);
						}
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "برنامه‌های تمرینی و تغذیه - M8 FIT CLUB" }), createVNode("div", { class: "space-y-6 sm:space-y-8 max-w-7xl mx-auto" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5" }, [createVNode(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "برنامه‌های تمرینی و رژیم غذایی من")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " طراحی و تنظیم اختصاصی توسط کادر مربیان رسمی باشگاه M8 بر اساس فیزیولوژی و اهداف شما ")]), createVNode("div", { class: "px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-xs" }, [
						createVNode(unref(Sparkles), { class: "w-4 h-4 text-lime-400" }),
						createVNode("span", { class: "text-zinc-400" }, "تعداد برنامه‌ها:"),
						createVNode("span", { class: "font-bold text-white font-mono" }, toDisplayString(__props.plans ? __props.plans.length : 0) + " برنامه", 1)
					])]), __props.plans && __props.plans.length > 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "space-y-6"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.plans, (plan) => {
						return openBlock(), createBlock("div", {
							key: plan.id,
							class: "p-6 sm:p-7 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-6"
						}, [
							createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800/80 gap-3" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0" }, [createVNode(unref(Dumbbell), { class: "w-5 h-5" })]), createVNode("div", null, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("h2", { class: "text-base font-bold text-white" }, toDisplayString(plan.title), 1), createVNode("span", { class: "px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20" }, toDisplayString(plan.type === "workout" ? "برنامه تمرینی" : "برنامه تغذیه و رژیم"), 1)]), createVNode("p", { class: "text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5" }, [createVNode(unref(User), { class: "w-3.5 h-3.5 text-zinc-500" }), createVNode("span", null, "مربی مسئول: " + toDisplayString(plan.trainer?.full_name || "کادر فنی"), 1)])])]), createVNode("div", { class: "px-3 py-1 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-mono" }, " دوره اجرا: " + toDisplayString(unref(formatJalaliDate)(plan.starts_at)) + " تا " + toDisplayString(unref(formatJalaliDate)(plan.ends_at)), 1)]),
							plan.notes ? (openBlock(), createBlock("div", {
								key: 0,
								class: "p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs text-zinc-300"
							}, [createVNode("div", { class: "flex items-center gap-2 font-bold text-lime-400 mb-1.5" }, [createVNode(unref(FileText), { class: "w-4 h-4" }), createVNode("span", null, "توصیه‌ها و نکات کلیدی مربی:")]), createVNode("p", { class: "leading-relaxed" }, toDisplayString(plan.notes), 1)])) : createCommentVNode("", true),
							createVNode("div", { class: "rounded-xl border border-zinc-800/90 overflow-hidden bg-zinc-950/40" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-3.5 font-bold" }, "روز / نوبت"),
								createVNode("th", { class: "p-3.5 font-bold" }, "عنوان حرکت یا وعده غذایی"),
								createVNode("th", { class: "p-3.5 font-bold text-center" }, "ست‌ها"),
								createVNode("th", { class: "p-3.5 font-bold text-center" }, "تکرار / مقدار"),
								createVNode("th", { class: "p-3.5 font-bold" }, "توضیحات و الگوی اجرا")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-sans" }, [(openBlock(true), createBlock(Fragment, null, renderList(plan.items, (item) => {
								return openBlock(), createBlock("tr", {
									key: item.id,
									class: "hover:bg-zinc-800/20 transition-colors"
								}, [
									createVNode("td", { class: "p-3.5 font-bold text-lime-400 font-mono" }, toDisplayString(item.day), 1),
									createVNode("td", { class: "p-3.5 font-bold text-white" }, toDisplayString(item.title), 1),
									createVNode("td", { class: "p-3.5 text-center font-mono text-zinc-200" }, toDisplayString(item.sets || "-"), 1),
									createVNode("td", { class: "p-3.5 text-center font-mono text-zinc-200" }, toDisplayString(item.reps || "-"), 1),
									createVNode("td", { class: "p-3.5 text-zinc-400" }, toDisplayString(item.notes || "-"), 1)
								]);
							}), 128))])])])
						]);
					}), 128))])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "p-16 text-center rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm"
					}, [
						createVNode("div", { class: "w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 mx-auto mb-4" }, [createVNode(unref(Dumbbell), { class: "w-8 h-8" })]),
						createVNode("h3", { class: "text-sm font-bold text-white" }, "هنوز برنامه‌ای برای شما ثبت نشده است"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1 max-w-sm mx-auto" }, " جهت دریافت برنامه تمرینی یا رژیم اختصاصی، در سالن با مربیان باشگاه هماهنگ نمایید تا برنامه شما در پنل بارگذاری شود. ")
					]))])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Member/WorkoutPlans.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
