import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { FolderTree, Plus, Tags } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "دسته‌بندی‌های فروشگاه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-2xl"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Tags), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>طبقه‌بندی محصولات انبار</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>دسته‌بندی‌های فروشگاه M8</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تعریف گروه‌های مکمل‌ها، پوشاک و لوازم ورزشی تخصصی</p></div></div><form class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex gap-3 items-center"${_scopeId}><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="عنوان دسته جدید (مثلاً: پروتئین و کراتین، پوشاک بدنسازی)..." class="flex-1 h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400" required${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || !unref(form).title) ? " disabled" : ""} class="h-11 px-5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>افزودن</span></button></form><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(FolderTree), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>دسته‌های تعریف‌شده</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>${ssrInterpolate(__props.categories.length)} دسته</span></div><div class="divide-y divide-zinc-800/50 text-xs"${_scopeId}><!--[-->`);
						ssrRenderList(__props.categories, (c) => {
							_push(`<div class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-8 h-8 rounded-lg bg-zinc-800 text-lime-400 flex items-center justify-center font-bold text-xs shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Tags), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><span class="font-bold text-white text-xs sm:text-sm"${_scopeId}>${ssrInterpolate(c.title)}</span></div><span class="px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 font-mono text-[11px]"${_scopeId}>${ssrInterpolate(c.products_count || 0)} محصول </span></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.categories || __props.categories.length === 0) _push(`<div class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> هنوز دسته‌ای تعریف نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div>`);
					} else return [createVNode(unref(Head), { title: "دسته‌بندی‌های فروشگاه - Dashlite" }), createVNode("div", { class: "space-y-6 max-w-2xl" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Tags), { class: "w-4 h-4" }), createVNode("span", null, "طبقه‌بندی محصولات انبار")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "دسته‌بندی‌های فروشگاه M8"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تعریف گروه‌های مکمل‌ها، پوشاک و لوازم ورزشی تخصصی")
						])]),
						createVNode("form", {
							onSubmit: withModifiers(addCategory, ["prevent"]),
							class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl flex gap-3 items-center"
						}, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).title = $event,
							type: "text",
							placeholder: "عنوان دسته جدید (مثلاً: پروتئین و کراتین، پوشاک بدنسازی)...",
							class: "flex-1 h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400",
							required: ""
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]]), createVNode("button", {
							type: "submit",
							disabled: unref(form).processing || !unref(form).title,
							class: "h-11 px-5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all shrink-0"
						}, [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "افزودن")], 8, ["disabled"])], 32),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden" }, [createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(FolderTree), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "دسته‌های تعریف‌شده")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, toDisplayString(__props.categories.length) + " دسته", 1)]), createVNode("div", { class: "divide-y divide-zinc-800/50 text-xs" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (c) => {
							return openBlock(), createBlock("div", {
								key: c.id,
								class: "p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
							}, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-zinc-800 text-lime-400 flex items-center justify-center font-bold text-xs shrink-0" }, [createVNode(unref(Tags), { class: "w-4 h-4" })]), createVNode("span", { class: "font-bold text-white text-xs sm:text-sm" }, toDisplayString(c.title), 1)]), createVNode("span", { class: "px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 font-mono text-[11px]" }, toDisplayString(c.products_count || 0) + " محصول ", 1)]);
						}), 128)), !__props.categories || __props.categories.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-12 text-center text-zinc-500 text-xs"
						}, " هنوز دسته‌ای تعریف نشده است. ")) : createCommentVNode("", true)])])
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
