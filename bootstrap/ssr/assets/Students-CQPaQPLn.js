import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { UserPlus, Users, X } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "شاگردان من" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مدیریت شاگردان من</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده وضعیت اشتراک، مشخصات و افزودن شاگرد جدید</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserPlus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>افزودن شاگرد</span></button></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام شاگرد</th><th class="p-4 font-bold"${_scopeId}>شماره تماس</th><th class="p-4 font-bold"${_scopeId}>قد و وزن</th><th class="p-4 font-bold"${_scopeId}>وضعیت اشتراک</th><th class="p-4 font-bold"${_scopeId}>تاریخ شروع</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.students.data, (st) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 font-bold text-white"${_scopeId}>${ssrInterpolate(st.student?.full_name)}</td><td class="p-4 font-mono text-lime-400" dir="ltr"${_scopeId}><a${ssrRenderAttr("href", "tel:" + st.student?.mobile)} class="hover:underline"${_scopeId}>${ssrInterpolate(st.student?.mobile)}</a></td><td class="p-4 text-zinc-300 font-mono"${_scopeId}>${ssrInterpolate(st.student?.member_profile?.height ? `${st.student.member_profile.height} cm` : "-")} / ${ssrInterpolate(st.student?.member_profile?.weight ? `${st.student.member_profile.weight} kg` : "-")}</td><td class="p-4"${_scopeId}>`);
							if (st.student?.active_membership) _push(`<span class="text-lime-400 font-bold text-[11px]"${_scopeId}>${ssrInterpolate(st.student.active_membership.plan?.title)} (فعال) </span>`);
							else _push(`<span class="text-amber-400 text-[11px]"${_scopeId}> نیاز به تمدید </span>`);
							_push(`</td><td class="p-4 text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(st.started_at))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table>`);
						if (__props.students.data.length === 0) _push(`<div class="p-16 text-center text-xs text-zinc-500"${_scopeId}> شاگردی ثبت نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>انتخاب ورزشکار به عنوان شاگرد</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>انتخاب عضو باشگاه</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, "") : ssrLooseEqual(unref(form).member_id, "")) ? " selected" : ""}${_scopeId}>انتخاب کنید...</option><!--[-->`);
							ssrRenderList(__props.allMembers, (m) => {
								_push(`<option${ssrRenderAttr("value", m.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).member_id) ? ssrLooseContain(unref(form).member_id, m.id) : ssrLooseEqual(unref(form).member_id, m.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(m.full_name)} (${ssrInterpolate(m.mobile)}) </option>`);
							});
							_push(`<!--]--></select></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>افزودن</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "شاگردان من" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Users), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "مدیریت شاگردان من")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده وضعیت اشتراک، مشخصات و افزودن شاگرد جدید")]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = true,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
						}, [createVNode(unref(UserPlus), { class: "w-4 h-4" }), createVNode("span", null, "افزودن شاگرد")], 8, ["onClick"])]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "نام شاگرد"),
							createVNode("th", { class: "p-4 font-bold" }, "شماره تماس"),
							createVNode("th", { class: "p-4 font-bold" }, "قد و وزن"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت اشتراک"),
							createVNode("th", { class: "p-4 font-bold" }, "تاریخ شروع")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.students.data, (st) => {
							return openBlock(), createBlock("tr", {
								key: st.id,
								class: "hover:bg-zinc-800/20"
							}, [
								createVNode("td", { class: "p-4 font-bold text-white" }, toDisplayString(st.student?.full_name), 1),
								createVNode("td", {
									class: "p-4 font-mono text-lime-400",
									dir: "ltr"
								}, [createVNode("a", {
									href: "tel:" + st.student?.mobile,
									class: "hover:underline"
								}, toDisplayString(st.student?.mobile), 9, ["href"])]),
								createVNode("td", { class: "p-4 text-zinc-300 font-mono" }, toDisplayString(st.student?.member_profile?.height ? `${st.student.member_profile.height} cm` : "-") + " / " + toDisplayString(st.student?.member_profile?.weight ? `${st.student.member_profile.weight} kg` : "-"), 1),
								createVNode("td", { class: "p-4" }, [st.student?.active_membership ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-lime-400 font-bold text-[11px]"
								}, toDisplayString(st.student.active_membership.plan?.title) + " (فعال) ", 1)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-amber-400 text-[11px]"
								}, " نیاز به تمدید "))]),
								createVNode("td", { class: "p-4 text-zinc-400 font-mono" }, toDisplayString(unref(formatJalaliDate)(st.started_at)), 1)
							]);
						}), 128))])]), __props.students.data.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-16 text-center text-xs text-zinc-500"
						}, " شاگردی ثبت نشده است. ")) : createCommentVNode("", true)]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, "انتخاب ورزشکار به عنوان شاگرد"), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(addStudent, ["prevent"]),
							class: "space-y-4"
						}, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "انتخاب عضو باشگاه"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => unref(form).member_id = $event,
							class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
							required: ""
						}, [createVNode("option", {
							value: "",
							disabled: ""
						}, "انتخاب کنید..."), (openBlock(true), createBlock(Fragment, null, renderList(__props.allMembers, (m) => {
							return openBlock(), createBlock("option", {
								key: m.id,
								value: m.id
							}, toDisplayString(m.full_name) + " (" + toDisplayString(m.mobile) + ") ", 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).member_id]])]), createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							type: "button",
							class: "px-4 py-2 rounded-xl text-xs text-zinc-400"
						}, "انصراف", 8, ["onClick"]), createVNode("button", {
							type: "submit",
							class: "px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"
						}, "افزودن")])], 32)])])) : createCommentVNode("", true)
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
