import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Plus, Scissors, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Service/Services.vue
var _sfc_main = {
	__name: "Services",
	__ssrInlineRender: true,
	props: { services: Array },
	setup(__props) {
		const isModalOpen = ref(false);
		const editingService = ref(null);
		const form = useForm({
			title: "",
			category: "massage",
			duration_min: 45,
			price: 5e5,
			description: "",
			is_active: true
		});
		function openCreate() {
			editingService.value = null;
			form.reset();
			isModalOpen.value = true;
		}
		function openEdit(srv) {
			editingService.value = srv;
			form.title = srv.title;
			form.category = srv.category;
			form.duration_min = srv.duration_min;
			form.price = srv.price;
			form.description = srv.description || "";
			form.is_active = Boolean(srv.is_active);
			isModalOpen.value = true;
		}
		function submitService() {
			if (editingService.value) form.put(`/panel/service/services/${editingService.value.id}`, { onSuccess: () => isModalOpen.value = false });
			else form.post("/panel/service/services", { onSuccess: () => isModalOpen.value = false });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تعریف خدمات و تعرفه‌ها" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Scissors), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تعریف خدمات، مدت زمان و تعرفه‌ها</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت خدمات ماساژ ورزشی، پیرایشگاه و پکیج‌های اسپا</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>خدمت جدید</span></button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
						ssrRenderList(__props.services, (srv) => {
							_push(`<div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-2"${_scopeId}><span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-950 text-lime-400 border border-zinc-800 uppercase"${_scopeId}>${ssrInterpolate(srv.category)}</span><span class="text-xs text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(srv.duration_min)} دقیقه</span></div><h3 class="text-base font-bold text-white mt-2"${_scopeId}>${ssrInterpolate(srv.title)}</h3><p class="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed"${_scopeId}>${ssrInterpolate(srv.description)}</p></div><div class="pt-4 border-t border-zinc-800/80 mt-6 flex items-center justify-between"${_scopeId}><div class="text-sm font-bold text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(srv.price))}</div><button class="text-xs text-lime-400 font-bold hover:underline cursor-pointer"${_scopeId}> ویرایش </button></div></div>`);
						});
						_push(`<!--]--></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingService.value ? "ویرایش خدمت" : "تعریف خدمت جدید")}</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>عنوان خدمت</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>دسته‌بندی</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value="massage"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "massage") : ssrLooseEqual(unref(form).category, "massage")) ? " selected" : ""}${_scopeId}>ماساژ و اسپا</option><option value="hairdresser"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "hairdresser") : ssrLooseEqual(unref(form).category, "hairdresser")) ? " selected" : ""}${_scopeId}>پیرایشگاه مردانه</option></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>مدت زمان (دقیقه)</label><input${ssrRenderAttr("value", unref(form).duration_min)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>قیمت (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>توضیحات</label><textarea rows="2" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ذخیره خدمت</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "تعریف خدمات و تعرفه‌ها" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Scissors), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "تعریف خدمات، مدت زمان و تعرفه‌ها")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت خدمات ماساژ ورزشی، پیرایشگاه و پکیج‌های اسپا")]), createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "خدمت جدید")])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.services, (srv) => {
							return openBlock(), createBlock("div", {
								key: srv.id,
								class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
							}, [createVNode("div", null, [
								createVNode("div", { class: "flex items-center justify-between mb-2" }, [createVNode("span", { class: "text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-950 text-lime-400 border border-zinc-800 uppercase" }, toDisplayString(srv.category), 1), createVNode("span", { class: "text-xs text-zinc-400 font-mono" }, toDisplayString(srv.duration_min) + " دقیقه", 1)]),
								createVNode("h3", { class: "text-base font-bold text-white mt-2" }, toDisplayString(srv.title), 1),
								createVNode("p", { class: "text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed" }, toDisplayString(srv.description), 1)
							]), createVNode("div", { class: "pt-4 border-t border-zinc-800/80 mt-6 flex items-center justify-between" }, [createVNode("div", { class: "text-sm font-bold text-white font-mono" }, toDisplayString(unref(formatPrice)(srv.price)), 1), createVNode("button", {
								onClick: ($event) => openEdit(srv),
								class: "text-xs text-lime-400 font-bold hover:underline cursor-pointer"
							}, " ویرایش ", 8, ["onClick"])])]);
						}), 128))]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingService.value ? "ویرایش خدمت" : "تعریف خدمت جدید"), 1), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitService, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "عنوان خدمت"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "دسته‌بندی"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).category = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, [createVNode("option", { value: "massage" }, "ماساژ و اسپا"), createVNode("option", { value: "hairdresser" }, "پیرایشگاه مردانه")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "مدت زمان (دقیقه)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).duration_min = $event,
								type: "number",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).duration_min,
								void 0,
								{ number: true }
							]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "قیمت (تومان)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).price = $event,
								type: "number",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).price,
								void 0,
								{ number: true }
							]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "توضیحات"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								rows: "2",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2 rounded-xl text-xs text-zinc-400"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"
							}, "ذخیره خدمت")])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Service/Services.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
