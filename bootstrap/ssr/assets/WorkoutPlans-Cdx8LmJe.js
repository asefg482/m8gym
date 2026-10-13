import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Dumbbell } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "برنامه‌های تمرینی و تغذیه من" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>برنامه‌های تمرینی و رژیم غذایی من</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>طراحی‌شده اختصاصی توسط مربیان باشگاه M8</p></div>`);
						if (__props.plans.length > 0) {
							_push(`<div class="space-y-6"${_scopeId}><!--[-->`);
							ssrRenderList(__props.plans, (plan) => {
								_push(`<div class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><h2 class="text-base font-bold text-white"${_scopeId}>${ssrInterpolate(plan.title)}</h2><span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-lime-400/10 text-lime-400"${_scopeId}>${ssrInterpolate(plan.type === "workout" ? "برنامه تمرینی" : "برنامه تغذیه")}</span></div><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مربی مسئول: ${ssrInterpolate(plan.trainer?.full_name)}</p></div><div class="text-xs text-zinc-400 font-mono"${_scopeId}> اعتبار: ${ssrInterpolate(unref(formatJalaliDate)(plan.starts_at))} تا ${ssrInterpolate(unref(formatJalaliDate)(plan.ends_at))}</div></div>`);
								if (plan.notes) _push(`<div class="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-300"${_scopeId}><span class="font-bold text-lime-400 block mb-1"${_scopeId}>توصیه و یادداشت مربی:</span> ${ssrInterpolate(plan.notes)}</div>`);
								else _push(`<!---->`);
								_push(`<div class="rounded-2xl border border-zinc-800 overflow-hidden"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-3.5 font-bold"${_scopeId}>روز</th><th class="p-3.5 font-bold"${_scopeId}>عنوان حرکت / وعده</th><th class="p-3.5 font-bold text-center"${_scopeId}>ست‌ها</th><th class="p-3.5 font-bold text-center"${_scopeId}>تکرار / مقدار</th><th class="p-3.5 font-bold"${_scopeId}>توضیحات تکمیلی</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
								ssrRenderList(plan.items, (item) => {
									_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-3.5 font-bold text-lime-400"${_scopeId}>${ssrInterpolate(item.day)}</td><td class="p-3.5 font-bold text-white"${_scopeId}>${ssrInterpolate(item.title)}</td><td class="p-3.5 text-center font-mono text-zinc-300"${_scopeId}>${ssrInterpolate(item.sets || "-")}</td><td class="p-3.5 text-center font-mono text-zinc-300"${_scopeId}>${ssrInterpolate(item.reps || "-")}</td><td class="p-3.5 text-zinc-400"${_scopeId}>${ssrInterpolate(item.notes || "-")}</td></tr>`);
								});
								_push(`<!--]--></tbody></table></div></div>`);
							});
							_push(`<!--]--></div>`);
						} else {
							_push(`<div class="p-16 text-center rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Dumbbell), { class: "w-10 h-10 text-zinc-600 mx-auto mb-3" }, null, _parent, _scopeId));
							_push(`<h3 class="text-sm font-bold text-white"${_scopeId}>هنوز برنامه‌ای برای شما ثبت نشده است</h3><p class="text-xs text-zinc-400 mt-1"${_scopeId}>با مربی اختصاصی خود جهت تدوین برنامه ورزشی و تغذیه هماهنگ کنید.</p></div>`);
						}
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "برنامه‌های تمرینی و تغذیه من" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "برنامه‌های تمرینی و رژیم غذایی من")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "طراحی‌شده اختصاصی توسط مربیان باشگاه M8")]), __props.plans.length > 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "space-y-6"
					}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.plans, (plan) => {
						return openBlock(), createBlock("div", {
							key: plan.id,
							class: "p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6"
						}, [
							createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2" }, [createVNode("div", null, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("h2", { class: "text-base font-bold text-white" }, toDisplayString(plan.title), 1), createVNode("span", { class: "px-2 py-0.5 rounded-md text-[10px] font-bold bg-lime-400/10 text-lime-400" }, toDisplayString(plan.type === "workout" ? "برنامه تمرینی" : "برنامه تغذیه"), 1)]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مربی مسئول: " + toDisplayString(plan.trainer?.full_name), 1)]), createVNode("div", { class: "text-xs text-zinc-400 font-mono" }, " اعتبار: " + toDisplayString(unref(formatJalaliDate)(plan.starts_at)) + " تا " + toDisplayString(unref(formatJalaliDate)(plan.ends_at)), 1)]),
							plan.notes ? (openBlock(), createBlock("div", {
								key: 0,
								class: "p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-300"
							}, [createVNode("span", { class: "font-bold text-lime-400 block mb-1" }, "توصیه و یادداشت مربی:"), createTextVNode(" " + toDisplayString(plan.notes), 1)])) : createCommentVNode("", true),
							createVNode("div", { class: "rounded-2xl border border-zinc-800 overflow-hidden" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-3.5 font-bold" }, "روز"),
								createVNode("th", { class: "p-3.5 font-bold" }, "عنوان حرکت / وعده"),
								createVNode("th", { class: "p-3.5 font-bold text-center" }, "ست‌ها"),
								createVNode("th", { class: "p-3.5 font-bold text-center" }, "تکرار / مقدار"),
								createVNode("th", { class: "p-3.5 font-bold" }, "توضیحات تکمیلی")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(plan.items, (item) => {
								return openBlock(), createBlock("tr", {
									key: item.id,
									class: "hover:bg-zinc-800/20"
								}, [
									createVNode("td", { class: "p-3.5 font-bold text-lime-400" }, toDisplayString(item.day), 1),
									createVNode("td", { class: "p-3.5 font-bold text-white" }, toDisplayString(item.title), 1),
									createVNode("td", { class: "p-3.5 text-center font-mono text-zinc-300" }, toDisplayString(item.sets || "-"), 1),
									createVNode("td", { class: "p-3.5 text-center font-mono text-zinc-300" }, toDisplayString(item.reps || "-"), 1),
									createVNode("td", { class: "p-3.5 text-zinc-400" }, toDisplayString(item.notes || "-"), 1)
								]);
							}), 128))])])])
						]);
					}), 128))])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "p-16 text-center rounded-3xl bg-zinc-900 border border-zinc-800"
					}, [
						createVNode(unref(Dumbbell), { class: "w-10 h-10 text-zinc-600 mx-auto mb-3" }),
						createVNode("h3", { class: "text-sm font-bold text-white" }, "هنوز برنامه‌ای برای شما ثبت نشده است"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "با مربی اختصاصی خود جهت تدوین برنامه ورزشی و تغذیه هماهنگ کنید.")
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
