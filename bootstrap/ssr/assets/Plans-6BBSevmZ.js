import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CheckCircle, CreditCard, Plus, X } from "@lucide/vue";
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
			benefits: ["دسترسی به تمامی تجهیزات", "استفاده از کمد اختصاصی"],
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
						_push(ssrRenderComponent(unref(Head), { title: "تعریف پلن‌های عضویت" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تعریف و مدیریت پلن‌های عضویت</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدت زمان، شهریه، تعداد جلسات و امکانات هر دوره اشتراک</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پلن جدید</span></button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
						ssrRenderList(__props.plans, (plan) => {
							_push(`<div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><h3 class="text-base font-bold text-white"${_scopeId}>${ssrInterpolate(plan.title)}</h3><span class="text-xs font-bold text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(plan.duration_days)} روز</span></div><div class="text-xl font-black text-white font-mono mb-4"${_scopeId}>${ssrInterpolate(unref(formatPrice)(plan.price))}</div><ul class="space-y-2 text-xs text-zinc-400 mb-6"${_scopeId}><!--[-->`);
							ssrRenderList(plan.benefits || [], (b, i) => {
								_push(`<li class="flex items-start gap-2"${_scopeId}>`);
								_push(ssrRenderComponent(unref(CheckCircle), { class: "w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" }, null, _parent, _scopeId));
								_push(`<span${_scopeId}>${ssrInterpolate(b)}</span></li>`);
							});
							_push(`<!--]--></ul></div><div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs"${_scopeId}><span class="text-zinc-500 font-mono"${_scopeId}>${ssrInterpolate(plan.memberships_count)} عضو ثبت‌شده</span><button class="text-lime-400 font-bold hover:underline cursor-pointer"${_scopeId}> ویرایش پلن </button></div></div>`);
						});
						_push(`<!--]--></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingPlan.value ? "ویرایش پلن" : "پلن عضویت جدید")}</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>عنوان پلن</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>مدت (روز)</label><input${ssrRenderAttr("value", unref(form).duration_days)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>شهریه (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ذخیره پلن</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "تعریف پلن‌های عضویت" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(CreditCard), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "تعریف و مدیریت پلن‌های عضویت")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدت زمان، شهریه، تعداد جلسات و امکانات هر دوره اشتراک")]), createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "پلن جدید")])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.plans, (plan) => {
							return openBlock(), createBlock("div", {
								key: plan.id,
								class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
							}, [createVNode("div", null, [
								createVNode("div", { class: "flex items-center justify-between mb-3" }, [createVNode("h3", { class: "text-base font-bold text-white" }, toDisplayString(plan.title), 1), createVNode("span", { class: "text-xs font-bold text-lime-400 font-mono" }, toDisplayString(plan.duration_days) + " روز", 1)]),
								createVNode("div", { class: "text-xl font-black text-white font-mono mb-4" }, toDisplayString(unref(formatPrice)(plan.price)), 1),
								createVNode("ul", { class: "space-y-2 text-xs text-zinc-400 mb-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(plan.benefits || [], (b, i) => {
									return openBlock(), createBlock("li", {
										key: i,
										class: "flex items-start gap-2"
									}, [createVNode(unref(CheckCircle), { class: "w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" }), createVNode("span", null, toDisplayString(b), 1)]);
								}), 128))])
							]), createVNode("div", { class: "pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs" }, [createVNode("span", { class: "text-zinc-500 font-mono" }, toDisplayString(plan.memberships_count) + " عضو ثبت‌شده", 1), createVNode("button", {
								onClick: ($event) => openEdit(plan),
								class: "text-lime-400 font-bold hover:underline cursor-pointer"
							}, " ویرایش پلن ", 8, ["onClick"])])]);
						}), 128))]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingPlan.value ? "ویرایش پلن" : "پلن عضویت جدید"), 1), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitForm, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "عنوان پلن"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "مدت (روز)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).duration_days = $event,
								type: "number",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).duration_days,
								void 0,
								{ number: true }
							]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "شهریه (تومان)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).price = $event,
								type: "number",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono",
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
								class: "px-4 py-2 rounded-xl text-xs text-zinc-400"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"
							}, "ذخیره پلن")])
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
