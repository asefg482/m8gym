import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-DHt3q8cw.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Phone, UserPlus, Users, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Trainer/Students.vue
var _sfc_main = {
	__name: "Students",
	__ssrInlineRender: true,
	props: {
		students: Object,
		allMembers: Array
	},
	setup(__props) {
		const isModalOpen = ref(false);
		const form = useForm({ member_id: "" });
		function addStudent() {
			form.post("/panel/trainer/students", { onSuccess: () => {
				isModalOpen.value = false;
				form.reset();
			} });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "شاگردان من - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>شاگردان و ورزشکاران تحت مربیگری</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>مدیریت شاگردان من</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده مشخصات فیزیکی، وضعیت اعتبار اشتراک باشگاه و انتساب شاگرد جدید</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserPlus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>افزودن شاگرد جدید</span></button></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>لیست شاگردان فعال و سوابق شروع دوره</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>مجموع: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.students.total || __props.students.data?.length || 0)}</b> نفر</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام و نام خانوادگی شاگرد</th><th class="p-4 font-bold"${_scopeId}>شماره تماس مستقیم</th><th class="p-4 font-bold"${_scopeId}>قد و وزن کنونی</th><th class="p-4 font-bold"${_scopeId}>وضعیت اشتراک</th><th class="p-4 font-bold"${_scopeId}>تاریخ شروع دوره</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.students.data, (st) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4 font-bold text-white flex items-center gap-2.5"${_scopeId}><div class="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0"${_scopeId}>${ssrInterpolate(st.student?.first_name ? st.student.first_name.charAt(0) : "S")}</div><span${_scopeId}>${ssrInterpolate(st.student?.full_name || "کاربر بدون نام")}</span></td><td class="p-4 font-mono text-lime-400" dir="ltr"${_scopeId}><a${ssrRenderAttr("href", "tel:" + st.student?.mobile)} class="hover:underline flex items-center gap-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Phone), { class: "w-3.5 h-3.5 text-zinc-500 inline" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>${ssrInterpolate(st.student?.mobile)}</span></a></td><td class="p-4 font-mono text-zinc-300"${_scopeId}>`);
							if (st.student?.member_profile?.height || st.student?.member_profile?.weight) _push(`<span${_scopeId}>${ssrInterpolate(st.student?.member_profile?.height ? `${st.student.member_profile.height} cm` : "-")} / ${ssrInterpolate(st.student?.member_profile?.weight ? `${st.student.member_profile.weight} kg` : "-")}</span>`);
							else _push(`<span class="text-zinc-600 font-sans text-[11px]"${_scopeId}>ثبت نشده</span>`);
							_push(`</td><td class="p-4"${_scopeId}><span class="${ssrRenderClass([st.student?.active_membership ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20", "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"])}"${_scopeId}><span class="${ssrRenderClass([st.student?.active_membership ? "bg-emerald-400" : "bg-amber-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(st.student?.active_membership ? `${st.student.active_membership.plan?.title} (فعال)` : "نیازمند تمدید اشتراک")}</span></td><td class="p-4 text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(st.started_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.students.data || __props.students.data.length === 0) _push(`<tr${_scopeId}><td colspan="5" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> هنوز شاگردی برای شما ثبت نگردیده است. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.students.links,
							from: __props.students.from,
							to: __props.students.to,
							total: __props.students.total
						}, null, _parent, _scopeId));
						_push(`</div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"${_scopeId}><div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(UserPlus), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>انتخاب ورزشکار به عنوان شاگرد</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>انتخاب از اعضای ثبت‌شده باشگاه</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, "") : ssrLooseEqual(unref(form).member_id, "")) ? " selected" : ""}${_scopeId}>عضو مورد نظر را انتخاب فرمایید...</option><!--[-->`);
							ssrRenderList(__props.allMembers, (m) => {
								_push(`<option${ssrRenderAttr("value", m.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, m.id) : ssrLooseEqual(unref(form).member_id, m.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(m.full_name)} (${ssrInterpolate(m.mobile)}) </option>`);
							});
							_push(`<!--]--></select><span class="text-[11px] text-zinc-500 mt-1 block"${_scopeId}>پس از ثبت، ورزشکار به پنل مربیگری شما الصاق می‌گردد.</span></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || !unref(form).member_id) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال ثبت...</span>`);
							else _push(`<span${_scopeId}>افزودن به شاگردان</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "شاگردان من - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Users), { class: "w-4 h-4" }), createVNode("span", null, "شاگردان و ورزشکاران تحت مربیگری")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "مدیریت شاگردان من"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده مشخصات فیزیکی، وضعیت اعتبار اشتراک باشگاه و انتساب شاگرد جدید")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: ($event) => isModalOpen.value = true,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(UserPlus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "افزودن شاگرد جدید")], 8, ["onClick"])])]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
							createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Users), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "لیست شاگردان فعال و سوابق شروع دوره")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, [
								createTextVNode("مجموع: "),
								createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.students.total || __props.students.data?.length || 0), 1),
								createTextVNode(" نفر")
							])]),
							createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-4 font-bold text-white" }, "نام و نام خانوادگی شاگرد"),
								createVNode("th", { class: "p-4 font-bold" }, "شماره تماس مستقیم"),
								createVNode("th", { class: "p-4 font-bold" }, "قد و وزن کنونی"),
								createVNode("th", { class: "p-4 font-bold" }, "وضعیت اشتراک"),
								createVNode("th", { class: "p-4 font-bold" }, "تاریخ شروع دوره")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.students.data, (st) => {
								return openBlock(), createBlock("tr", {
									key: st.id,
									class: "hover:bg-zinc-800/30 transition-colors"
								}, [
									createVNode("td", { class: "p-4 font-bold text-white flex items-center gap-2.5" }, [createVNode("div", { class: "w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0" }, toDisplayString(st.student?.first_name ? st.student.first_name.charAt(0) : "S"), 1), createVNode("span", null, toDisplayString(st.student?.full_name || "کاربر بدون نام"), 1)]),
									createVNode("td", {
										class: "p-4 font-mono text-lime-400",
										dir: "ltr"
									}, [createVNode("a", {
										href: "tel:" + st.student?.mobile,
										class: "hover:underline flex items-center gap-1"
									}, [createVNode(unref(Phone), { class: "w-3.5 h-3.5 text-zinc-500 inline" }), createVNode("span", null, toDisplayString(st.student?.mobile), 1)], 8, ["href"])]),
									createVNode("td", { class: "p-4 font-mono text-zinc-300" }, [st.student?.member_profile?.height || st.student?.member_profile?.weight ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(st.student?.member_profile?.height ? `${st.student.member_profile.height} cm` : "-") + " / " + toDisplayString(st.student?.member_profile?.weight ? `${st.student.member_profile.weight} kg` : "-"), 1)) : (openBlock(), createBlock("span", {
										key: 1,
										class: "text-zinc-600 font-sans text-[11px]"
									}, "ثبت نشده"))]),
									createVNode("td", { class: "p-4" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border", st.student?.active_membership ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", st.student?.active_membership ? "bg-emerald-400" : "bg-amber-400"] }, null, 2), createTextVNode(" " + toDisplayString(st.student?.active_membership ? `${st.student.active_membership.plan?.title} (فعال)` : "نیازمند تمدید اشتراک"), 1)], 2)]),
									createVNode("td", { class: "p-4 text-zinc-400 font-mono" }, toDisplayString(unref(formatJalaliDate)(st.started_at)), 1)
								]);
							}), 128)), !__props.students.data || __props.students.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "5",
								class: "p-12 text-center text-zinc-500 text-xs"
							}, " هنوز شاگردی برای شما ثبت نگردیده است. ")])) : createCommentVNode("", true)])])]),
							createVNode(_sfc_main$2, {
								links: __props.students.links,
								from: __props.students.from,
								to: __props.students.to,
								total: __props.students.total
							}, null, 8, [
								"links",
								"from",
								"to",
								"total"
							])
						]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(UserPlus), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, "انتخاب ورزشکار به عنوان شاگرد")]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(addStudent, ["prevent"]),
							class: "space-y-4"
						}, [createVNode("div", null, [
							createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "انتخاب از اعضای ثبت‌شده باشگاه"),
							withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).member_id = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, [createVNode("option", {
								value: "",
								disabled: ""
							}, "عضو مورد نظر را انتخاب فرمایید..."), (openBlock(true), createBlock(Fragment, null, renderList(__props.allMembers, (m) => {
								return openBlock(), createBlock("option", {
									key: m.id,
									value: m.id
								}, toDisplayString(m.full_name) + " (" + toDisplayString(m.mobile) + ") ", 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).member_id]]),
							createVNode("span", { class: "text-[11px] text-zinc-500 mt-1 block" }, "پس از ثبت، ورزشکار به پنل مربیگری شما الصاق می‌گردد.")
						]), createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							type: "button",
							class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"
						}, "انصراف", 8, ["onClick"]), createVNode("button", {
							type: "submit",
							disabled: unref(form).processing || !unref(form).member_id,
							class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
						}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال ثبت...")) : (openBlock(), createBlock("span", { key: 1 }, "افزودن به شاگردان"))], 8, ["disabled"])])], 32)])])) : createCommentVNode("", true)
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Trainer/Students.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
