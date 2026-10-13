import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-DHt3q8cw.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Apple, Dumbbell, Layers, Plus, Trash2, X } from "@lucide/vue";
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
				day: "جلسه تمرینی",
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
						_push(ssrRenderComponent(unref(Head), { title: "برنامه‌های تمرینی و تغذیه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم طراحی تمرین و رژیم</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>طراحی و تدوین برنامه‌های تمرین و تغذیه</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>ساخت، زمان‌بندی و انتشار اختصاصی برنامه‌های تمرینی و مکمل در پنل ورزشی شاگردان</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>طراحی برنامه جدید</span></button></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Layers), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>برنامه‌های صادرشده و وضعیت اجرا</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>مجموع: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.plans.total || __props.plans.data?.length || 0)}</b> برنامه</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>عنوان برنامه</th><th class="p-4 font-bold"${_scopeId}>شاگرد مخاطب</th><th class="p-4 font-bold"${_scopeId}>نوع برنامه</th><th class="p-4 font-bold"${_scopeId}>تعداد حرکات</th><th class="p-4 font-bold"${_scopeId}>بازه اعتبار</th><th class="p-4 font-bold text-center"${_scopeId}>وضعیت</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.plans.data, (p) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="font-bold text-white text-xs sm:text-sm"${_scopeId}>${ssrInterpolate(p.title)}</div>`);
							if (p.notes) _push(`<div class="text-[11px] text-zinc-500 line-clamp-1 mt-0.5"${_scopeId}>${ssrInterpolate(p.notes)}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="p-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-7 h-7 rounded-lg bg-zinc-800 text-lime-400 flex items-center justify-center font-bold text-xs shrink-0"${_scopeId}>${ssrInterpolate(p.member?.first_name ? p.member.first_name.charAt(0) : "S")}</div><span class="text-white font-medium"${_scopeId}>${ssrInterpolate(p.member?.full_name || "بدون نام")}</span></div></td><td class="p-4"${_scopeId}><span class="${ssrRenderClass([p.type === "workout" ? "bg-blue-400/10 text-blue-400 border-blue-400/20" : "bg-emerald-400/10 text-emerald-400 border-emerald-400/20", "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"])}"${_scopeId}>`);
							if (p.type === "workout") _push(ssrRenderComponent(unref(Dumbbell), { class: "w-3 h-3" }, null, _parent, _scopeId));
							else _push(ssrRenderComponent(unref(Apple), { class: "w-3 h-3" }, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(p.type === "workout" ? "تمرین بدنسازی" : "برنامه تغذیه و رژیم")}</span></td><td class="p-4 font-mono text-zinc-300"${_scopeId}>${ssrInterpolate(p.items?.length || 0)} ایستگاه</td><td class="p-4 font-mono text-zinc-400 text-[11px]"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(p.starts_at))} تا ${ssrInterpolate(unref(formatJalaliDate)(p.ends_at))}</td><td class="p-4 text-center"${_scopeId}><span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-lime-400"${_scopeId}></span> فعال در پنل </span></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.plans.data || __props.plans.data.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> هنوز برنامه‌ای تدوین نگردیده است. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.plans.links,
							from: __props.plans.from,
							to: __props.plans.to,
							total: __props.plans.total
						}, null, _parent, _scopeId));
						_push(`</div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in"${_scopeId}><div class="w-full max-w-2xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8 relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Dumbbell), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>تدوین برنامه تمرینی / رژیم جدید</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>شاگرد مخاطب</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, "") : ssrLooseEqual(unref(form).member_id, "")) ? " selected" : ""}${_scopeId}>شاگرد را انتخاب فرمایید...</option><!--[-->`);
							ssrRenderList(__props.students, (s) => {
								_push(`<option${ssrRenderAttr("value", s.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, s.id) : ssrLooseEqual(unref(form).member_id, s.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(s.full_name)}</option>`);
							});
							_push(`<!--]--></select></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>نوع برنامه</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="workout"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "workout") : ssrLooseEqual(unref(form).type, "workout")) ? " selected" : ""}${_scopeId}>برنامه تمرینی بدنسازی</option><option value="diet"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "diet") : ssrLooseEqual(unref(form).type, "diet")) ? " selected" : ""}${_scopeId}>برنامه رژیم و تغذیه</option></select></div></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>عنوان دوره و هدف تمرین</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="مثلاً: دوره هایپرتروفی و حجم عضلانی ۴ روزه" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="space-y-3 pt-2"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><label class="text-xs font-bold text-lime-400 flex items-center gap-1.5"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Layers), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>حرکات و ایستگاه‌های تمرینی / وعده‌های غذایی:</span></label><button type="button" class="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lime-400 text-xs font-bold cursor-pointer transition-colors"${_scopeId}> + افزودن ردیف حرکت </button></div><div class="space-y-2 max-h-60 overflow-y-auto p-2 bg-zinc-950 rounded-2xl border border-zinc-800/80"${_scopeId}><!--[-->`);
							ssrRenderList(unref(form).items, (item, idx) => {
								_push(`<div class="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 grid grid-cols-12 gap-2 items-center"${_scopeId}><div class="col-span-3"${_scopeId}><input${ssrRenderAttr("value", item.day)} type="text" placeholder="روز / جلسه" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none focus:border-lime-400"${_scopeId}></div><div class="col-span-4"${_scopeId}><input${ssrRenderAttr("value", item.title)} type="text" placeholder="نام حرکت" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="col-span-2"${_scopeId}><input${ssrRenderAttr("value", item.sets)} type="number" placeholder="ست" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div class="col-span-2"${_scopeId}><input${ssrRenderAttr("value", item.reps)} type="text" placeholder="تکرار" class="w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div class="col-span-1 text-center"${_scopeId}><button type="button" class="text-rose-400 hover:text-rose-300 cursor-pointer p-1"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent, _scopeId));
								_push(`</button></div></div>`);
							});
							_push(`<!--]--></div></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>توضیحات و توصیه‌های کلیدی مربی</label><textarea rows="2" placeholder="نکات مهم در اجرای حرکات، استراحت بین ست‌ها..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}>${ssrInterpolate(unref(form).notes)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال انتشار...</span>`);
							else _push(`<span${_scopeId}>ثبت و ارسال به پنل شاگرد</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "برنامه‌های تمرینی و تغذیه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Dumbbell), { class: "w-4 h-4" }), createVNode("span", null, "سیستم طراحی تمرین و رژیم")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "طراحی و تدوین برنامه‌های تمرین و تغذیه"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "ساخت، زمان‌بندی و انتشار اختصاصی برنامه‌های تمرینی و مکمل در پنل ورزشی شاگردان")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: ($event) => isModalOpen.value = true,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "طراحی برنامه جدید")], 8, ["onClick"])])]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
							createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Layers), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "برنامه‌های صادرشده و وضعیت اجرا")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, [
								createTextVNode("مجموع: "),
								createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.plans.total || __props.plans.data?.length || 0), 1),
								createTextVNode(" برنامه")
							])]),
							createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-4 font-bold text-white" }, "عنوان برنامه"),
								createVNode("th", { class: "p-4 font-bold" }, "شاگرد مخاطب"),
								createVNode("th", { class: "p-4 font-bold" }, "نوع برنامه"),
								createVNode("th", { class: "p-4 font-bold" }, "تعداد حرکات"),
								createVNode("th", { class: "p-4 font-bold" }, "بازه اعتبار"),
								createVNode("th", { class: "p-4 font-bold text-center" }, "وضعیت")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.plans.data, (p) => {
								return openBlock(), createBlock("tr", {
									key: p.id,
									class: "hover:bg-zinc-800/30 transition-colors"
								}, [
									createVNode("td", { class: "p-4" }, [createVNode("div", { class: "font-bold text-white text-xs sm:text-sm" }, toDisplayString(p.title), 1), p.notes ? (openBlock(), createBlock("div", {
										key: 0,
										class: "text-[11px] text-zinc-500 line-clamp-1 mt-0.5"
									}, toDisplayString(p.notes), 1)) : createCommentVNode("", true)]),
									createVNode("td", { class: "p-4" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-7 h-7 rounded-lg bg-zinc-800 text-lime-400 flex items-center justify-center font-bold text-xs shrink-0" }, toDisplayString(p.member?.first_name ? p.member.first_name.charAt(0) : "S"), 1), createVNode("span", { class: "text-white font-medium" }, toDisplayString(p.member?.full_name || "بدون نام"), 1)])]),
									createVNode("td", { class: "p-4" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border", p.type === "workout" ? "bg-blue-400/10 text-blue-400 border-blue-400/20" : "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"] }, [p.type === "workout" ? (openBlock(), createBlock(unref(Dumbbell), {
										key: 0,
										class: "w-3 h-3"
									})) : (openBlock(), createBlock(unref(Apple), {
										key: 1,
										class: "w-3 h-3"
									})), createTextVNode(" " + toDisplayString(p.type === "workout" ? "تمرین بدنسازی" : "برنامه تغذیه و رژیم"), 1)], 2)]),
									createVNode("td", { class: "p-4 font-mono text-zinc-300" }, toDisplayString(p.items?.length || 0) + " ایستگاه", 1),
									createVNode("td", { class: "p-4 font-mono text-zinc-400 text-[11px]" }, toDisplayString(unref(formatJalaliDate)(p.starts_at)) + " تا " + toDisplayString(unref(formatJalaliDate)(p.ends_at)), 1),
									createVNode("td", { class: "p-4 text-center" }, [createVNode("span", { class: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-lime-400" }), createTextVNode(" فعال در پنل ")])])
								]);
							}), 128)), !__props.plans.data || __props.plans.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "6",
								class: "p-12 text-center text-zinc-500 text-xs"
							}, " هنوز برنامه‌ای تدوین نگردیده است. ")])) : createCommentVNode("", true)])])]),
							createVNode(_sfc_main$2, {
								links: __props.plans.links,
								from: __props.plans.from,
								to: __props.plans.to,
								total: __props.plans.total
							}, null, 8, [
								"links",
								"from",
								"to",
								"total"
							])
						]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-2xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8 relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Dumbbell), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, "تدوین برنامه تمرینی / رژیم جدید")]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitPlan, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3.5" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "شاگرد مخاطب"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).member_id = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, [createVNode("option", {
								value: "",
								disabled: ""
							}, "شاگرد را انتخاب فرمایید..."), (openBlock(true), createBlock(Fragment, null, renderList(__props.students, (s) => {
								return openBlock(), createBlock("option", {
									key: s.id,
									value: s.id
								}, toDisplayString(s.full_name), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).member_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "نوع برنامه"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).type = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, [createVNode("option", { value: "workout" }, "برنامه تمرینی بدنسازی"), createVNode("option", { value: "diet" }, "برنامه رژیم و تغذیه")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).type]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "عنوان دوره و هدف تمرین"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								placeholder: "مثلاً: دوره هایپرتروفی و حجم عضلانی ۴ روزه",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "space-y-3 pt-2" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("label", { class: "text-xs font-bold text-lime-400 flex items-center gap-1.5" }, [createVNode(unref(Layers), { class: "w-3.5 h-3.5" }), createVNode("span", null, "حرکات و ایستگاه‌های تمرینی / وعده‌های غذایی:")]), createVNode("button", {
								onClick: addItem,
								type: "button",
								class: "px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-lime-400 text-xs font-bold cursor-pointer transition-colors"
							}, " + افزودن ردیف حرکت ")]), createVNode("div", { class: "space-y-2 max-h-60 overflow-y-auto p-2 bg-zinc-950 rounded-2xl border border-zinc-800/80" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).items, (item, idx) => {
								return openBlock(), createBlock("div", {
									key: idx,
									class: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 grid grid-cols-12 gap-2 items-center"
								}, [
									createVNode("div", { class: "col-span-3" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => item.day = $event,
										type: "text",
										placeholder: "روز / جلسه",
										class: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none focus:border-lime-400"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, item.day]])]),
									createVNode("div", { class: "col-span-4" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => item.title = $event,
										type: "text",
										placeholder: "نام حرکت",
										class: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none focus:border-lime-400",
										required: ""
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, item.title]])]),
									createVNode("div", { class: "col-span-2" }, [withDirectives(createVNode("input", {
										"onUpdate:modelValue": ($event) => item.sets = $event,
										type: "number",
										placeholder: "ست",
										class: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono focus:outline-none focus:border-lime-400"
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
										class: "w-full h-9 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white text-center font-mono focus:outline-none focus:border-lime-400"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, item.reps]])]),
									createVNode("div", { class: "col-span-1 text-center" }, [createVNode("button", {
										onClick: ($event) => removeItem(idx),
										type: "button",
										class: "text-rose-400 hover:text-rose-300 cursor-pointer p-1"
									}, [createVNode(unref(Trash2), { class: "w-4 h-4" })], 8, ["onClick"])])
								]);
							}), 128))])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "توضیحات و توصیه‌های کلیدی مربی"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).notes = $event,
								rows: "2",
								placeholder: "نکات مهم در اجرای حرکات، استراحت بین ست‌ها...",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).notes]])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
							}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال انتشار...")) : (openBlock(), createBlock("span", { key: 1 }, "ثبت و ارسال به پنل شاگرد"))], 8, ["disabled"])])
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
