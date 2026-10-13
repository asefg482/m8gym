import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { Fragment, createBlock, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Tags } from "@lucide/vue";
//#region resources/js/Pages/Panel/Shop/Categories.vue
var _sfc_main = {
	__name: "Categories",
	__ssrInlineRender: true,
	props: { categories: Array },
	setup(__props) {
		const form = useForm({ title: "" });
		function addCategory() {
			form.post("/panel/shop/categories", { onSuccess: () => form.reset() });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "دسته‌بندی‌های فروشگاه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-2xl"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Tags), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>دسته‌بندی‌های کالا در فروشگاه</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تعریف گروه‌های مکمل‌ها، پوشاک و لوازم ورزشی M8</p></div><form class="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-3"${_scopeId}><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="عنوان دسته‌بندی جدید (مثلاً: ساک و کوله ورزشی)..." class="flex-1 h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}><button type="submit" class="px-5 rounded-xl bg-lime-400 text-black text-xs font-bold cursor-pointer"${_scopeId}> افزودن </button></form><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden"${_scopeId}><div class="divide-y divide-zinc-800/60 text-xs"${_scopeId}><!--[-->`);
						ssrRenderList(__props.categories, (c) => {
							_push(`<div class="p-4 flex items-center justify-between"${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(c.title)}</span><span class="text-zinc-500 font-mono"${_scopeId}>${ssrInterpolate(c.products_count)} کالا</span></div>`);
						});
						_push(`<!--]--></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "دسته‌بندی‌های فروشگاه" }), createVNode("div", { class: "space-y-6 max-w-2xl" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Tags), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "دسته‌بندی‌های کالا در فروشگاه")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تعریف گروه‌های مکمل‌ها، پوشاک و لوازم ورزشی M8")]),
						createVNode("form", {
							onSubmit: withModifiers(addCategory, ["prevent"]),
							class: "p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-3"
						}, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).title = $event,
							type: "text",
							placeholder: "عنوان دسته‌بندی جدید (مثلاً: ساک و کوله ورزشی)...",
							class: "flex-1 h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400",
							required: ""
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]]), createVNode("button", {
							type: "submit",
							class: "px-5 rounded-xl bg-lime-400 text-black text-xs font-bold cursor-pointer"
						}, " افزودن ")], 32),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden" }, [createVNode("div", { class: "divide-y divide-zinc-800/60 text-xs" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (c) => {
							return openBlock(), createBlock("div", {
								key: c.id,
								class: "p-4 flex items-center justify-between"
							}, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(c.title), 1), createVNode("span", { class: "text-zinc-500 font-mono" }, toDisplayString(c.products_count) + " کالا", 1)]);
						}), 128))])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Shop/Categories.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
