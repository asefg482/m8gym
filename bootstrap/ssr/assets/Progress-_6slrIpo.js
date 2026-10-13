import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Activity, Plus, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Member/Progress.vue
var _sfc_main = {
	__name: "Progress",
	__ssrInlineRender: true,
	props: { logs: Array },
	setup(__props) {
		const isModalOpen = ref(false);
		const form = useForm({
			date: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
			weight: "",
			body_fat: "",
			note: ""
		});
		function submitLog() {
			form.post("/panel/member/progress", { onSuccess: () => {
				isModalOpen.value = false;
				form.reset("weight", "body_fat", "note");
			} });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "روند تغییرات و آنالیز بدنی" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Activity), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>روند تغییرات و پایش پیشرفت بدنی</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>ثبت وزن، درصد چربی و اندازه‌گیری‌های دوره‌ای</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت رکورد وزن جدید</span></button></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold"${_scopeId}>تاریخ ثبت</th><th class="p-4 font-bold"${_scopeId}>وزن (کیلوگرم)</th><th class="p-4 font-bold"${_scopeId}>درصد چربی بدنی (%)</th><th class="p-4 font-bold"${_scopeId}>یادداشت</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.logs, (log) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 text-zinc-300 font-sans font-bold"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(log.date))}</td><td class="p-4 text-lime-400 font-bold text-sm"${_scopeId}>${ssrInterpolate(log.weight)} kg</td><td class="p-4 text-zinc-300"${_scopeId}>${ssrInterpolate(log.body_fat ? `${log.body_fat}%` : "-")}</td><td class="p-4 font-sans text-zinc-400"${_scopeId}>${ssrInterpolate(log.note || "-")}</td></tr>`);
						});
						_push(`<!--]--></tbody></table>`);
						if (__props.logs.length === 0) _push(`<div class="p-16 text-center text-xs text-zinc-500 font-sans"${_scopeId}> هنوز رکوردی ثبت نشده است. با دکمه بالا اولین وزن خود را ثبت نمایید. </div>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>ثبت شاخص‌های بدنی جدید</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>تاریخ</label><input${ssrRenderAttr("value", unref(form).date)} type="date" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>وزن (کیلوگرم)</label><input${ssrRenderAttr("value", unref(form).weight)} type="number" step="0.1" placeholder="۷۸.۵" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>درصد چربی (اختیاری)</label><input${ssrRenderAttr("value", unref(form).body_fat)} type="number" step="0.1" placeholder="۱۴.۲" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>یادداشت یا تغییر شرایط</label><textarea rows="2" placeholder="ناشتا، پس از تمرین، شروع کراتین..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"${_scopeId}>${ssrInterpolate(unref(form).note)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ثبت رکورد</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "روند تغییرات و آنالیز بدنی" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Activity), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "روند تغییرات و پایش پیشرفت بدنی")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "ثبت وزن، درصد چربی و اندازه‌گیری‌های دوره‌ای")]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = true,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "ثبت رکورد وزن جدید")], 8, ["onClick"])]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold" }, "تاریخ ثبت"),
							createVNode("th", { class: "p-4 font-bold" }, "وزن (کیلوگرم)"),
							createVNode("th", { class: "p-4 font-bold" }, "درصد چربی بدنی (%)"),
							createVNode("th", { class: "p-4 font-bold" }, "یادداشت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.logs, (log) => {
							return openBlock(), createBlock("tr", {
								key: log.id,
								class: "hover:bg-zinc-800/20"
							}, [
								createVNode("td", { class: "p-4 text-zinc-300 font-sans font-bold" }, toDisplayString(unref(formatJalaliDate)(log.date)), 1),
								createVNode("td", { class: "p-4 text-lime-400 font-bold text-sm" }, toDisplayString(log.weight) + " kg", 1),
								createVNode("td", { class: "p-4 text-zinc-300" }, toDisplayString(log.body_fat ? `${log.body_fat}%` : "-"), 1),
								createVNode("td", { class: "p-4 font-sans text-zinc-400" }, toDisplayString(log.note || "-"), 1)
							]);
						}), 128))])]), __props.logs.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-16 text-center text-xs text-zinc-500 font-sans"
						}, " هنوز رکوردی ثبت نشده است. با دکمه بالا اولین وزن خود را ثبت نمایید. ")) : createCommentVNode("", true)]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, "ثبت شاخص‌های بدنی جدید"), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitLog, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "تاریخ"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).date = $event,
								type: "date",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).date]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "وزن (کیلوگرم)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).weight = $event,
								type: "number",
								step: "0.1",
								placeholder: "۷۸.۵",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).weight]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "درصد چربی (اختیاری)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).body_fat = $event,
								type: "number",
								step: "0.1",
								placeholder: "۱۴.۲",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).body_fat]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "یادداشت یا تغییر شرایط"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).note = $event,
								rows: "2",
								placeholder: "ناشتا، پس از تمرین، شروع کراتین...",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).note]])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2 rounded-xl text-xs text-zinc-400"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"
							}, "ثبت رکورد")])
						], 32)])])) : createCommentVNode("", true)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Member/Progress.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
