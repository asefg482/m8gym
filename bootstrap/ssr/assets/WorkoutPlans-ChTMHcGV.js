import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Dumbbell, Plus, Trash2, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Trainer/WorkoutPlans.vue
var _sfc_main = {
	__name: "WorkoutPlans",
	__ssrInlineRender: true,
	props: {
		plans: Object,
		students: Array
	},
	setup(__props) {
		const isModalOpen = ref(false);
		const form = useForm({
			member_id: "",
			title: "",
			type: "workout",
			starts_at: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
			ends_at: new Date(Date.now() + 2592e6).toISOString().substring(0, 10),
			notes: "",
			items: [
				{
					day: "شنبه (سینه و پشت‌بازو)",
					title: "پرس سینه هالتر",
					sets: 4,
					reps: "10-8-8-6",
					notes: "کنترل فاز منفی"
				},
				{
					day: "شنبه (سینه و پشت‌بازو)",
					title: "بالاسینه دمبل",
					sets: 3,
					reps: "12-10-10",
					notes: ""
				},
				{
					day: "یکشنبه (زیربغل و جلوبازو)",
					title: "لت سیم‌کش دست باز",
					sets: 4,
					reps: "12-10-8",
					notes: "کشش کامل"
				}
			]
		});
		function addItem() {
			form.items.push({
				day: "دوشنبه",
				title: "",
				sets: 3,
				reps: "12-10-8",
				notes: ""
			});
		}
		function removeItem(index) {
			if (form.items.length > 1) form.items.splice(index, 1);
		}
		function submitPlan() {
			form.post("/panel/trainer/workout_plans", { onSuccess: () => {
				isModalOpen.value = false;
			} });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "برنامه‌های تمرینی و تغذیه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>طراحی و تدوین برنامه‌های تمرین و تغذیه</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>ساخت و ارسال مستقیم برنامه به پنل شاگردان</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>برنامه جدید</span></button></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>عنوان برنامه</th><th class="p-4 font-bold"${_scopeId}>شاگرد</th><th class="p-4 font-bold"${_scopeId}>نوع</th><th class="p-4 font-bold"${_scopeId}>تعداد آیتم‌ها</th><th class="p-4 font-bold"${_scopeId}>بازه زمانی</th><th class="p-4 font-bold"${_scopeId}>وضعیت</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.plans.data, (p) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 font-bold text-white"${_scopeId}>${ssrInterpolate(p.title)}</td><td class="p-4"${_scopeId}>${ssrInterpolate(p.member?.full_name)}</td><td class="p-4"${_scopeId}><span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300"${_scopeId}>${ssrInterpolate(p.type === "workout" ? "تمرین" : "رژیم غذایی")}</span></td><td class="p-4 font-mono text-zinc-400"${_scopeId}>${ssrInterpolate(p.items?.length || 0)} حرکت</td><td class="p-4 font-mono text-zinc-400"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(p.starts_at))} تا ${ssrInterpolate(unref(formatJalaliDate)(p.ends_at))}</td><td class="p-4 text-lime-400 font-bold"${_scopeId}>فعال</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"${_scopeId}><div class="w-full max-w-2xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>تدوین برنامه تمرینی / رژیم جدید</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>شاگرد مخاطب</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, "") : ssrLooseEqual(unref(form).member_id, "")) ? " selected" : ""}${_scopeId}>انتخاب شاگرد...</option><!--[-->`);
							ssrRenderList(__props.students, (s) => {
								_push(`<option${ssrRenderAttr("value", s.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, s.id) : ssrLooseEqual(unref(form).member_id, s.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(s.full_name)}</option>`);
							});
							_push(`<!--]--></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>نوع برنامه</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value="workout"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "workout") : ssrLooseEqual(unref(form).type, "workout")) ? " selected" : ""}${_scopeId}>برنامه تمرینی بدنسازی</option><option value="diet"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "diet") : ssrLooseEqual(unref(form).type, "diet")) ? " selected" : ""}${_scopeId}>رژیم غذایی</option></select></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>عنوان برنامه</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="مثلاً: دوره تفکیک و کات فشرده" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div class="space-y-2 pt-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><label class="text-xs font-bold text-lime-400"${_scopeId}>حرکات و ایستگاه‌های تمرینی:</label><button type="button" class="text-xs text-lime-400 font-bold hover:underline cursor-pointer"${_scopeId}> + افزودن حرکت </button></div><!--[-->`);
							ssrRenderList(unref(form).items, (item, idx) => {
								_push(`<div class="p-3 rounded-2xl bg-zinc-950 border border-zinc-800 grid grid-cols-12 gap-2 items-center"${_scopeId}><div class="col-span-3"${_scopeId}><input${ssrRenderAttr("value", item.day)} type="text" placeholder="روز / جلسه" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white"${_scopeId}></div><div class="col-span-4"${_scopeId}><input${ssrRenderAttr("value", item.title)} type="text" placeholder="نام حرکت / وعده" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white" required${_scopeId}></div><div class="col-span-2"${_scopeId}><input${ssrRenderAttr("value", item.sets)} type="number" placeholder="ست" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono"${_scopeId}></div><div class="col-span-2"${_scopeId}><input${ssrRenderAttr("value", item.reps)} type="text" placeholder="تکرار" class="w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono"${_scopeId}></div><div class="col-span-1 text-center"${_scopeId}><button type="button" class="text-red-400 hover:text-red-300 cursor-pointer"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent, _scopeId));
								_push(`</button></div></div>`);
							});
							_push(`<!--]--></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ثبت و ارسال به شاگرد</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "برنامه‌های تمرینی و تغذیه" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "طراحی و تدوین برنامه‌های تمرین و تغذیه")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "ساخت و ارسال مستقیم برنامه به پنل شاگردان")]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = true,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "برنامه جدید")], 8, ["onClick"])]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "عنوان برنامه"),
							createVNode("th", { class: "p-4 font-bold" }, "شاگرد"),
							createVNode("th", { class: "p-4 font-bold" }, "نوع"),
							createVNode("th", { class: "p-4 font-bold" }, "تعداد آیتم‌ها"),
							createVNode("th", { class: "p-4 font-bold" }, "بازه زمانی"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.plans.data, (p) => {
							return openBlock(), createBlock("tr", {
								key: p.id,
								class: "hover:bg-zinc-800/20"
							}, [
								createVNode("td", { class: "p-4 font-bold text-white" }, toDisplayString(p.title), 1),
								createVNode("td", { class: "p-4" }, toDisplayString(p.member?.full_name), 1),
								createVNode("td", { class: "p-4" }, [createVNode("span", { class: "px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300" }, toDisplayString(p.type === "workout" ? "تمرین" : "رژیم غذایی"), 1)]),
								createVNode("td", { class: "p-4 font-mono text-zinc-400" }, toDisplayString(p.items?.length || 0) + " حرکت", 1),
								createVNode("td", { class: "p-4 font-mono text-zinc-400" }, toDisplayString(unref(formatJalaliDate)(p.starts_at)) + " تا " + toDisplayString(unref(formatJalaliDate)(p.ends_at)), 1),
								createVNode("td", { class: "p-4 text-lime-400 font-bold" }, "فعال")
							]);
						}), 128))])])]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
						}, [createVNode("div", { class: "w-full max-w-2xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, "تدوین برنامه تمرینی / رژیم جدید"), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitPlan, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "شاگرد مخاطب"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).member_id = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, [createVNode("option", {
								value: "",
								disabled: ""
							}, "انتخاب شاگرد..."), (openBlock(true), createBlock(Fragment, null, renderList(__props.students, (s) => {
								return openBlock(), createBlock("option", {
									key: s.id,
									value: s.id
								}, toDisplayString(s.full_name), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).member_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "نوع برنامه"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).type = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, [createVNode("option", { value: "workout" }, "برنامه تمرینی بدنسازی"), createVNode("option", { value: "diet" }, "رژیم غذایی")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).type]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "عنوان برنامه"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								placeholder: "مثلاً: دوره تفکیک و کات فشرده",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "space-y-2 pt-2" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("label", { class: "text-xs font-bold text-lime-400" }, "حرکات و ایستگاه‌های تمرینی:"), createVNode("button", {
								onClick: addItem,
								type: "button",
								class: "text-xs text-lime-400 font-bold hover:underline cursor-pointer"
							}, " + افزودن حرکت ")]), (openBlock(true), createBlock(Fragment, null, renderList(unref(form).items, (item, idx) => {
								return openBlock(), createBlock("div", {
									key: idx,
									class: "p-3 rounded-2xl bg-zinc-950 border border-zinc-800 grid grid-cols-12 gap-2 items-center"
								}, [
									createVNode("div", { class: "col-span-3" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => item.day = $event,
										type: "text",
										placeholder: "روز / جلسه",
										class: "w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, item.day]])]),
									createVNode("div", { class: "col-span-4" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => item.title = $event,
										type: "text",
										placeholder: "نام حرکت / وعده",
										class: "w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white",
										required: ""
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, item.title]])]),
									createVNode("div", { class: "col-span-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => item.sets = $event,
										type: "number",
										placeholder: "ست",
										class: "w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono"
									}, null, 8, ["onUpdate:modelValue"]), [[
										vModelText,
										item.sets,
										void 0,
										{ number: true }
									]])]),
									createVNode("div", { class: "col-span-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => item.reps = $event,
										type: "text",
										placeholder: "تکرار",
										class: "w-full h-8 bg-zinc-900 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, item.reps]])]),
									createVNode("div", { class: "col-span-1 text-center" }, [createVNode("button", {
										onClick: ($event) => removeItem(idx),
										type: "button",
										class: "text-red-400 hover:text-red-300 cursor-pointer"
									}, [createVNode(unref(Trash2), { class: "w-4 h-4" })], 8, ["onClick"])])
								]);
							}), 128))]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2 rounded-xl text-xs text-zinc-400"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"
							}, "ثبت و ارسال به شاگرد")])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Trainer/WorkoutPlans.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
