import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Coffee, Plus, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Buffet/Menu.vue
var _sfc_main = {
	__name: "Menu",
	__ssrInlineRender: true,
	props: {
		items: Array,
		categories: Array
	},
	setup(__props) {
		const isModalOpen = ref(false);
		const editingItem = ref(null);
		const form = useForm({
			title: "",
			category_id: "",
			price: 1e5,
			discount_price: "",
			description: "",
			images: ["https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80"],
			nutritional_info: {
				protein: "30g",
				calories: "350 kcal"
			},
			is_active: true
		});
		function openCreate() {
			editingItem.value = null;
			form.reset();
			isModalOpen.value = true;
		}
		function openEdit(it) {
			editingItem.value = it;
			form.title = it.title;
			form.category_id = it.category_id || "";
			form.price = it.price;
			form.discount_price = it.discount_price || "";
			form.description = it.description || "";
			form.images = it.images || [];
			form.nutritional_info = it.nutritional_info || {};
			form.is_active = Boolean(it.is_active);
			isModalOpen.value = true;
		}
		function toggleItem(item) {
			router.post(`/panel/buffet/menu/${item.id}/toggle`, {}, { preserveScroll: true });
		}
		function submitForm() {
			if (editingItem.value) form.put(`/panel/buffet/menu/${editingItem.value.id}`, { onSuccess: () => isModalOpen.value = false });
			else form.post("/panel/buffet/menu", { onSuccess: () => isModalOpen.value = false });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "منوی غذا و نوشیدنی بوفه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مدیریت منوی غذا و نوشیدنی‌های بوفه</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تغییر وضعیت موجود/ناموجود با یک کلیک، قیمت‌گذاری و ثبت اطلاعات پروتئین/کالری</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>آیتم جدید در منو</span></button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items, (item) => {
							_push(`<div class="${ssrRenderClass([item.is_active ? "border-zinc-800" : "border-zinc-800/40 opacity-60 bg-zinc-950/40", "p-5 rounded-3xl bg-zinc-900 border flex flex-col justify-between transition-all"])}"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between mb-3"${_scopeId}><div${_scopeId}><span class="text-[10px] text-zinc-500 font-bold uppercase"${_scopeId}>${ssrInterpolate(item.category?.title)}</span><h3 class="text-sm font-bold text-white mt-0.5"${_scopeId}>${ssrInterpolate(item.title)}</h3></div><button type="button" class="${ssrRenderClass([item.is_active ? "bg-lime-400/20 text-lime-400 border border-lime-400/40" : "bg-zinc-800 text-zinc-500 border border-zinc-700", "px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer"])}"${_scopeId}>${ssrInterpolate(item.is_active ? "● موجود" : "○ ناموجود")}</button></div><p class="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed"${_scopeId}>${ssrInterpolate(item.description)}</p>`);
							if (item.nutritional_info) {
								_push(`<div class="flex gap-2 text-[10px] text-zinc-400 font-mono mb-4"${_scopeId}>`);
								if (item.nutritional_info.protein) _push(`<span class="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-lime-400"${_scopeId}> پرو: ${ssrInterpolate(item.nutritional_info.protein)}</span>`);
								else _push(`<!---->`);
								if (item.nutritional_info.calories) _push(`<span class="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800"${_scopeId}> کالری: ${ssrInterpolate(item.nutritional_info.calories)}</span>`);
								else _push(`<!---->`);
								_push(`</div>`);
							} else _push(`<!---->`);
							_push(`</div><div class="pt-3 border-t border-zinc-800 flex items-center justify-between"${_scopeId}><span class="text-sm font-bold text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(item.effective_price))}</span><button class="text-xs text-lime-400 font-bold hover:underline cursor-pointer"${_scopeId}> ویرایش </button></div></div>`);
						});
						_push(`<!--]--></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingItem.value ? "ویرایش آیتم منو" : "آیتم جدید بوفه")}</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>نام غذا / نوشیدنی</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>دسته‌بندی</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId}>انتخاب دسته‌بندی...</option><!--[-->`);
							ssrRenderList(__props.categories, (c) => {
								_push(`<option${ssrRenderAttr("value", c.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, c.id) : ssrLooseEqual(unref(form).category_id, c.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(c.title)}</option>`);
							});
							_push(`<!--]--></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>قیمت (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>توضیحات و ترکیبات</label><textarea rows="2" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ذخیره آیتم</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "منوی غذا و نوشیدنی بوفه" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Coffee), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "مدیریت منوی غذا و نوشیدنی‌های بوفه")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تغییر وضعیت موجود/ناموجود با یک کلیک، قیمت‌گذاری و ثبت اطلاعات پروتئین/کالری")]), createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "آیتم جدید در منو")])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
							return openBlock(), createBlock("div", {
								key: item.id,
								class: ["p-5 rounded-3xl bg-zinc-900 border flex flex-col justify-between transition-all", item.is_active ? "border-zinc-800" : "border-zinc-800/40 opacity-60 bg-zinc-950/40"]
							}, [createVNode("div", null, [
								createVNode("div", { class: "flex items-start justify-between mb-3" }, [createVNode("div", null, [createVNode("span", { class: "text-[10px] text-zinc-500 font-bold uppercase" }, toDisplayString(item.category?.title), 1), createVNode("h3", { class: "text-sm font-bold text-white mt-0.5" }, toDisplayString(item.title), 1)]), createVNode("button", {
									onClick: ($event) => toggleItem(item),
									type: "button",
									class: ["px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer", item.is_active ? "bg-lime-400/20 text-lime-400 border border-lime-400/40" : "bg-zinc-800 text-zinc-500 border border-zinc-700"]
								}, toDisplayString(item.is_active ? "● موجود" : "○ ناموجود"), 11, ["onClick"])]),
								createVNode("p", { class: "text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed" }, toDisplayString(item.description), 1),
								item.nutritional_info ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex gap-2 text-[10px] text-zinc-400 font-mono mb-4"
								}, [item.nutritional_info.protein ? (openBlock(), createBlock("span", {
									key: 0,
									class: "px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-lime-400"
								}, " پرو: " + toDisplayString(item.nutritional_info.protein), 1)) : createCommentVNode("", true), item.nutritional_info.calories ? (openBlock(), createBlock("span", {
									key: 1,
									class: "px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800"
								}, " کالری: " + toDisplayString(item.nutritional_info.calories), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true)
							]), createVNode("div", { class: "pt-3 border-t border-zinc-800 flex items-center justify-between" }, [createVNode("span", { class: "text-sm font-bold text-white font-mono" }, toDisplayString(unref(formatPrice)(item.effective_price)), 1), createVNode("button", {
								onClick: ($event) => openEdit(item),
								class: "text-xs text-lime-400 font-bold hover:underline cursor-pointer"
							}, " ویرایش ", 8, ["onClick"])])], 2);
						}), 128))]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingItem.value ? "ویرایش آیتم منو" : "آیتم جدید بوفه"), 1), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitForm, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "نام غذا / نوشیدنی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "دسته‌بندی"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, [createVNode("option", { value: "" }, "انتخاب دسته‌بندی..."), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (c) => {
								return openBlock(), createBlock("option", {
									key: c.id,
									value: c.id
								}, toDisplayString(c.title), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "قیمت (تومان)"), withDirectives(createVNode("input", {
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
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "توضیحات و ترکیبات"), withDirectives(createVNode("textarea", {
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
							}, "ذخیره آیتم")])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Buffet/Menu.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
