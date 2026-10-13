import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Activity, Flame, Plus, Scale, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Member/Progress.vue
var _sfc_main = {
	__name: "Progress",
	__ssrInlineRender: true,
	props: { logs: Array },
	setup(__props) {
		const props = __props;
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
		const latestLog = computed(() => {
			return props.logs && props.logs.length > 0 ? props.logs[0] : null;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "روند تغییرات و پایش بدنی - M8 FIT CLUB" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Activity), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>روند تغییرات و پایش پیشرفت بدنی</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> ثبت دوره‌ای وزن، درصد چربی و بررسی نمودار پیشرفت فیت‌نس در باشگاه M8 </p></div><button type="button" class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-md shadow-lime-400/20 transition-all cursor-pointer shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت رکورد وزن جدید</span></button></div>`);
						if (latestLog.value) {
							_push(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-5"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Scale), { class: "w-6 h-6" }, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><span class="text-xs font-bold text-zinc-400 block"${_scopeId}>آخرین وزن ثبت‌شده:</span><div class="text-2xl font-black text-white font-mono mt-0.5"${_scopeId}>${ssrInterpolate(latestLog.value.weight)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>کیلوگرم</span></div><span class="text-[10px] text-zinc-500 font-mono mt-0.5 block"${_scopeId}>ثبت: ${ssrInterpolate(unref(formatJalaliDate)(latestLog.value.date))}</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Flame), { class: "w-6 h-6" }, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><span class="text-xs font-bold text-zinc-400 block"${_scopeId}>درصد چربی بدنی:</span><div class="text-2xl font-black text-amber-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(latestLog.value.body_fat ? `${latestLog.value.body_fat}%` : "ثبت نشده")}</div><span class="text-[10px] text-zinc-500 font-mono mt-0.5 block"${_scopeId}>آنالیز بیومتریک M8</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4"${_scopeId}><div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Activity), { class: "w-6 h-6" }, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><span class="text-xs font-bold text-zinc-400 block"${_scopeId}>تعداد دفعات پایش:</span><div class="text-2xl font-black text-white font-mono mt-0.5"${_scopeId}>${ssrInterpolate(__props.logs ? __props.logs.length : 0)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>رکورد</span></div><span class="text-[10px] text-emerald-400 mt-0.5 block"${_scopeId}>● مستمر و دقیق</span></div></div></div>`);
						} else _push(`<!---->`);
						_push(`<div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-zinc-800/80"${_scopeId}><h2 class="text-sm font-bold text-white"${_scopeId}>تاریخچه اندازه‌گیری‌ها و رکوردها</h2><span class="text-xs text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(__props.logs ? __props.logs.length : 0)} رکورد</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-3.5 font-bold"${_scopeId}>تاریخ ثبت</th><th class="p-3.5 font-bold"${_scopeId}>وزن (کیلوگرم)</th><th class="p-3.5 font-bold"${_scopeId}>درصد چربی (%)</th><th class="p-3.5 font-bold"${_scopeId}>یادداشت و وضعیت</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.logs, (log) => {
							_push(`<tr class="hover:bg-zinc-800/20 transition-colors"${_scopeId}><td class="p-3.5 text-zinc-300 font-sans font-bold"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(log.date))}</td><td class="p-3.5 text-lime-400 font-black text-sm"${_scopeId}>${ssrInterpolate(log.weight)} kg</td><td class="p-3.5 text-zinc-300"${_scopeId}>${ssrInterpolate(log.body_fat ? `${log.body_fat}%` : "-")}</td><td class="p-3.5 font-sans text-zinc-400"${_scopeId}>${ssrInterpolate(log.note || "-")}</td></tr>`);
						});
						_push(`<!--]--></tbody></table>`);
						if (!__props.logs || __props.logs.length === 0) {
							_push(`<div class="p-16 text-center text-xs text-zinc-500 font-sans"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Scale), { class: "w-10 h-10 text-zinc-600 mx-auto mb-3" }, null, _parent, _scopeId));
							_push(`<span class="block font-bold text-white text-sm"${_scopeId}>هنوز رکوردی ثبت نشده است</span><span class="text-zinc-400 block mt-1"${_scopeId}>با کلیک بر روی دکمه «ثبت رکورد وزن جدید» اولین وزن خود را ثبت نمایید.</span></div>`);
						} else _push(`<!---->`);
						_push(`</div></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"${_scopeId}><div class="w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-7 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Scale), { class: "w-5 h-5 text-lime-400" }, null, _parent, _scopeId));
							_push(`<h3 class="text-sm font-bold text-white"${_scopeId}>ثبت شاخص‌های بدنی جدید</h3></div><button class="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>تاریخ اندازه‌گیری</label><input${ssrRenderAttr("value", unref(form).date)} type="date" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>وزن (کیلوگرم)</label><input${ssrRenderAttr("value", unref(form).weight)} type="number" step="0.1" placeholder="۷۸.۵" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>درصد چربی (اختیاری)</label><input${ssrRenderAttr("value", unref(form).body_fat)} type="number" step="0.1" placeholder="۱۴.۲" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>یادداشت شرایط (اختیاری)</label><textarea rows="2" placeholder="ناشتا، بعد از تمرین، تغییر رژیم..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}>${ssrInterpolate(unref(form).note)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-2.5"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20"${_scopeId}>ثبت رکورد</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "روند تغییرات و پایش بدنی - M8 FIT CLUB" }), createVNode("div", { class: "space-y-6 sm:space-y-8 max-w-7xl mx-auto" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5" }, [createVNode(unref(Activity), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "روند تغییرات و پایش پیشرفت بدنی")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " ثبت دوره‌ای وزن، درصد چربی و بررسی نمودار پیشرفت فیت‌نس در باشگاه M8 ")]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = true,
							type: "button",
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-md shadow-lime-400/20 transition-all cursor-pointer shrink-0"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "ثبت رکورد وزن جدید")], 8, ["onClick"])]),
						latestLog.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "grid grid-cols-1 sm:grid-cols-3 gap-5"
						}, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0" }, [createVNode(unref(Scale), { class: "w-6 h-6" })]), createVNode("div", null, [
								createVNode("span", { class: "text-xs font-bold text-zinc-400 block" }, "آخرین وزن ثبت‌شده:"),
								createVNode("div", { class: "text-2xl font-black text-white font-mono mt-0.5" }, [createTextVNode(toDisplayString(latestLog.value.weight) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "کیلوگرم")]),
								createVNode("span", { class: "text-[10px] text-zinc-500 font-mono mt-0.5 block" }, "ثبت: " + toDisplayString(unref(formatJalaliDate)(latestLog.value.date)), 1)
							])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0" }, [createVNode(unref(Flame), { class: "w-6 h-6" })]), createVNode("div", null, [
								createVNode("span", { class: "text-xs font-bold text-zinc-400 block" }, "درصد چربی بدنی:"),
								createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono mt-0.5" }, toDisplayString(latestLog.value.body_fat ? `${latestLog.value.body_fat}%` : "ثبت نشده"), 1),
								createVNode("span", { class: "text-[10px] text-zinc-500 font-mono mt-0.5 block" }, "آنالیز بیومتریک M8")
							])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm flex items-center gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0" }, [createVNode(unref(Activity), { class: "w-6 h-6" })]), createVNode("div", null, [
								createVNode("span", { class: "text-xs font-bold text-zinc-400 block" }, "تعداد دفعات پایش:"),
								createVNode("div", { class: "text-2xl font-black text-white font-mono mt-0.5" }, [createTextVNode(toDisplayString(__props.logs ? __props.logs.length : 0) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "رکورد")]),
								createVNode("span", { class: "text-[10px] text-emerald-400 mt-0.5 block" }, "● مستمر و دقیق")
							])])
						])) : createCommentVNode("", true),
						createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4" }, [createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-zinc-800/80" }, [createVNode("h2", { class: "text-sm font-bold text-white" }, "تاریخچه اندازه‌گیری‌ها و رکوردها"), createVNode("span", { class: "text-xs text-zinc-400 font-mono" }, toDisplayString(__props.logs ? __props.logs.length : 0) + " رکورد", 1)]), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-3.5 font-bold" }, "تاریخ ثبت"),
							createVNode("th", { class: "p-3.5 font-bold" }, "وزن (کیلوگرم)"),
							createVNode("th", { class: "p-3.5 font-bold" }, "درصد چربی (%)"),
							createVNode("th", { class: "p-3.5 font-bold" }, "یادداشت و وضعیت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.logs, (log) => {
							return openBlock(), createBlock("tr", {
								key: log.id,
								class: "hover:bg-zinc-800/20 transition-colors"
							}, [
								createVNode("td", { class: "p-3.5 text-zinc-300 font-sans font-bold" }, toDisplayString(unref(formatJalaliDate)(log.date)), 1),
								createVNode("td", { class: "p-3.5 text-lime-400 font-black text-sm" }, toDisplayString(log.weight) + " kg", 1),
								createVNode("td", { class: "p-3.5 text-zinc-300" }, toDisplayString(log.body_fat ? `${log.body_fat}%` : "-"), 1),
								createVNode("td", { class: "p-3.5 font-sans text-zinc-400" }, toDisplayString(log.note || "-"), 1)
							]);
						}), 128))])]), !__props.logs || __props.logs.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-16 text-center text-xs text-zinc-500 font-sans"
						}, [
							createVNode(unref(Scale), { class: "w-10 h-10 text-zinc-600 mx-auto mb-3" }),
							createVNode("span", { class: "block font-bold text-white text-sm" }, "هنوز رکوردی ثبت نشده است"),
							createVNode("span", { class: "text-zinc-400 block mt-1" }, "با کلیک بر روی دکمه «ثبت رکورد وزن جدید» اولین وزن خود را ثبت نمایید.")
						])) : createCommentVNode("", true)])]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 1,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
						}, [createVNode("div", { class: "w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-7 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(Scale), { class: "w-5 h-5 text-lime-400" }), createVNode("h3", { class: "text-sm font-bold text-white" }, "ثبت شاخص‌های بدنی جدید")]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitLog, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "تاریخ اندازه‌گیری"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).date = $event,
								type: "date",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).date]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "وزن (کیلوگرم)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).weight = $event,
								type: "number",
								step: "0.1",
								placeholder: "۷۸.۵",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).weight]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "درصد چربی (اختیاری)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).body_fat = $event,
								type: "number",
								step: "0.1",
								placeholder: "۱۴.۲",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).body_fat]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "یادداشت شرایط (اختیاری)"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).note = $event,
								rows: "2",
								placeholder: "ناشتا، بعد از تمرین، تغییر رژیم...",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).note]])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-2.5" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white transition-colors"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold transition-all shadow-md shadow-lime-400/20"
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
