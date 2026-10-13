import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CheckCircle2, CreditCard, Edit3, Plus, Users, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Manager/Plans.vue
var _sfc_main = {
	__name: "Plans",
	__ssrInlineRender: true,
	props: { plans: Array },
	setup(__props) {
		const isModalOpen = ref(false);
		const editingPlan = ref(null);
		const form = useForm({
			title: "",
			duration_days: 30,
			sessions_limit: "",
			price: 15e5,
			benefits: ["دسترسی کامل به تمامی تجهیزات و سالن", "کمد اختصاصی و دوش آب گرم"],
			is_active: true
		});
		function openCreate() {
			editingPlan.value = null;
			form.reset();
			isModalOpen.value = true;
		}
		function openEdit(plan) {
			editingPlan.value = plan;
			form.title = plan.title;
			form.duration_days = plan.duration_days;
			form.sessions_limit = plan.sessions_limit || "";
			form.price = plan.price;
			form.benefits = plan.benefits || [];
			form.is_active = Boolean(plan.is_active);
			isModalOpen.value = true;
		}
		function submitForm() {
			if (editingPlan.value) form.put(`/panel/manager/plans/${editingPlan.value.id}`, { onSuccess: () => isModalOpen.value = false });
			else form.post("/panel/manager/plans", { onSuccess: () => isModalOpen.value = false });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تعریف پلن‌های عضویت - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>شهریه‌ها و تعرفه‌های عضویت</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>تعریف و مدیریت پلن‌های عضویت</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تنظیم مدت دوره، شهریه اشتراک، سقف جلسات و امکانات اختصاصی هر بسته ورزشی</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تعریف پلن جدید</span></button></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"${_scopeId}><!--[-->`);
						ssrRenderList(__props.plans, (plan) => {
							_push(`<div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex flex-col justify-between hover:border-zinc-700/80 transition-all relative overflow-hidden group"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><h3 class="text-base font-bold text-white"${_scopeId}>${ssrInterpolate(plan.title)}</h3><span class="px-2.5 py-1 rounded-full text-xs font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 font-mono"${_scopeId}>${ssrInterpolate(plan.duration_days)} روزه </span></div><div class="text-2xl font-black text-white font-mono mb-4"${_scopeId}>${ssrInterpolate(unref(formatPrice)(plan.price))}</div><ul class="space-y-2 text-xs text-zinc-400 mb-6"${_scopeId}><!--[-->`);
							ssrRenderList(plan.benefits || [], (b, i) => {
								_push(`<li class="flex items-start gap-2"${_scopeId}>`);
								_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" }, null, _parent, _scopeId));
								_push(`<span${_scopeId}>${ssrInterpolate(b)}</span></li>`);
							});
							_push(`<!--]--></ul></div><div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs"${_scopeId}><span class="text-zinc-500 font-mono flex items-center gap-1.5"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Users), { class: "w-3.5 h-3.5 text-zinc-600 inline" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>${ssrInterpolate(plan.memberships_count || 0)} عضو فعال</span></span><button class="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>ویرایش پلن</span></button></div></div>`);
						});
						_push(`<!--]--></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"${_scopeId}><div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingPlan.value ? "ویرایش پلن عضویت" : "تعریف پلن عضویت جدید")}</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>عنوان پلن</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="مثلاً: اشتراک طلایی ۳ ماهه VIP" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="grid grid-cols-2 gap-3.5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>مدت دوره (روز)</label><input${ssrRenderAttr("value", unref(form).duration_days)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>شهریه (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال ذخیره...</span>`);
							else _push(`<span${_scopeId}>ذخیره پلن</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "تعریف پلن‌های عضویت - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(CreditCard), { class: "w-4 h-4" }), createVNode("span", null, "شهریه‌ها و تعرفه‌های عضویت")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "تعریف و مدیریت پلن‌های عضویت"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تنظیم مدت دوره، شهریه اشتراک، سقف جلسات و امکانات اختصاصی هر بسته ورزشی")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "تعریف پلن جدید")])])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.plans, (plan) => {
							return openBlock(), createBlock("div", {
								key: plan.id,
								class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex flex-col justify-between hover:border-zinc-700/80 transition-all relative overflow-hidden group"
							}, [createVNode("div", null, [
								createVNode("div", { class: "flex items-center justify-between mb-3" }, [createVNode("h3", { class: "text-base font-bold text-white" }, toDisplayString(plan.title), 1), createVNode("span", { class: "px-2.5 py-1 rounded-full text-xs font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 font-mono" }, toDisplayString(plan.duration_days) + " روزه ", 1)]),
								createVNode("div", { class: "text-2xl font-black text-white font-mono mb-4" }, toDisplayString(unref(formatPrice)(plan.price)), 1),
								createVNode("ul", { class: "space-y-2 text-xs text-zinc-400 mb-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(plan.benefits || [], (b, i) => {
									return openBlock(), createBlock("li", {
										key: i,
										class: "flex items-start gap-2"
									}, [createVNode(unref(CheckCircle2), { class: "w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" }), createVNode("span", null, toDisplayString(b), 1)]);
								}), 128))])
							]), createVNode("div", { class: "pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs" }, [createVNode("span", { class: "text-zinc-500 font-mono flex items-center gap-1.5" }, [createVNode(unref(Users), { class: "w-3.5 h-3.5 text-zinc-600 inline" }), createVNode("span", null, toDisplayString(plan.memberships_count || 0) + " عضو فعال", 1)]), createVNode("button", {
								onClick: ($event) => openEdit(plan),
								class: "px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"
							}, [createVNode(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }), createVNode("span", null, "ویرایش پلن")], 8, ["onClick"])])]);
						}), 128))]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(CreditCard), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingPlan.value ? "ویرایش پلن عضویت" : "تعریف پلن عضویت جدید"), 1)]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitForm, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "عنوان پلن"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								placeholder: "مثلاً: اشتراک طلایی ۳ ماهه VIP",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3.5" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "مدت دوره (روز)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).duration_days = $event,
								type: "number",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).duration_days,
								void 0,
								{ number: true }
							]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "شهریه (تومان)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).price = $event,
								type: "number",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).price,
								void 0,
								{ number: true }
							]])])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
							}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال ذخیره...")) : (openBlock(), createBlock("span", { key: 1 }, "ذخیره پلن"))], 8, ["disabled"])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Manager/Plans.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
