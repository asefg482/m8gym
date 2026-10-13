import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Coffee, Edit3, Flame, Plus, X, Zap } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "منوی غذا و نوشیدنی بوفه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>منوی پروتئین و تغذیه سالم</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>مدیریت منوی غذا و نوشیدنی‌های بوفه</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تغییر وضعیت موجود/ناموجود با یک کلیک، قیمت‌گذاری و ثبت اطلاعات پروتئین و کالری هر آیتم</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>آیتم جدید در منو</span></button></div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items, (item) => {
							_push(`<div class="${ssrRenderClass([item.is_active ? "border-zinc-800/90 hover:border-zinc-700/80" : "border-zinc-800/40 opacity-60 bg-zinc-950/40", "p-5 rounded-2xl bg-zinc-900/90 border shadow-lg flex flex-col justify-between transition-all"])}"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between mb-3"${_scopeId}><div${_scopeId}><span class="text-[10px] text-zinc-500 font-bold uppercase block"${_scopeId}>${ssrInterpolate(item.category?.title || "عمومی")}</span><h3 class="text-sm font-bold text-white mt-1"${_scopeId}>${ssrInterpolate(item.title)}</h3></div><button type="button" class="${ssrRenderClass([item.is_active ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-zinc-800 text-zinc-500 border-zinc-700", "px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 border"])}"${_scopeId}><span class="${ssrRenderClass([item.is_active ? "bg-emerald-400" : "bg-zinc-500", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(item.is_active ? "موجود" : "ناموجود")}</span></button></div><p class="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed"${_scopeId}>${ssrInterpolate(item.description)}</p>`);
							if (item.nutritional_info) {
								_push(`<div class="flex gap-2 text-[10px] text-zinc-400 font-mono mb-4 flex-wrap"${_scopeId}>`);
								if (item.nutritional_info.protein) {
									_push(`<span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-lime-400 font-bold flex items-center gap-1"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Zap), { class: "w-3 h-3 text-lime-400 inline" }, null, _parent, _scopeId));
									_push(` پرو: ${ssrInterpolate(item.nutritional_info.protein)}</span>`);
								} else _push(`<!---->`);
								if (item.nutritional_info.calories) {
									_push(`<span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 font-bold flex items-center gap-1"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Flame), { class: "w-3 h-3 text-amber-400 inline" }, null, _parent, _scopeId));
									_push(` کالری: ${ssrInterpolate(item.nutritional_info.calories)}</span>`);
								} else _push(`<!---->`);
								_push(`</div>`);
							} else _push(`<!---->`);
							_push(`</div><div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between"${_scopeId}><span class="text-sm font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(item.effective_price))}</span><button class="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Edit3), { class: "w-3 h-3 text-zinc-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>ویرایش</span></button></div></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.items || __props.items.length === 0) _push(`<div class="col-span-full p-12 text-center text-zinc-500 text-xs rounded-2xl bg-zinc-900 border border-zinc-800"${_scopeId}> آیتمی در منوی بوفه ثبت نگردیده است. </div>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Coffee), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingItem.value ? "ویرایش آیتم منو" : "آیتم جدید بوفه و کافه")}</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>نام غذا / نوشیدنی</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="مثلاً: شیک پروتئین موز کره بادام‌زمینی" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>دسته‌بندی</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId}>انتخاب دسته‌بندی...</option><!--[-->`);
							ssrRenderList(__props.categories, (c) => {
								_push(`<option${ssrRenderAttr("value", c.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, c.id) : ssrLooseEqual(unref(form).category_id, c.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(c.title)}</option>`);
							});
							_push(`<!--]--></select></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>قیمت (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>توضیحات و ترکیبات خوراکی</label><textarea rows="2" placeholder="ترکیبات اصلی، حجم، طعم..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال ذخیره...</span>`);
							else _push(`<span${_scopeId}>ذخیره آیتم</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "منوی غذا و نوشیدنی بوفه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Coffee), { class: "w-4 h-4" }), createVNode("span", null, "منوی پروتئین و تغذیه سالم")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "مدیریت منوی غذا و نوشیدنی‌های بوفه"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تغییر وضعیت موجود/ناموجود با یک کلیک، قیمت‌گذاری و ثبت اطلاعات پروتئین و کالری هر آیتم")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "آیتم جدید در منو")])])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item) => {
							return openBlock(), createBlock("div", {
								key: item.id,
								class: ["p-5 rounded-2xl bg-zinc-900/90 border shadow-lg flex flex-col justify-between transition-all", item.is_active ? "border-zinc-800/90 hover:border-zinc-700/80" : "border-zinc-800/40 opacity-60 bg-zinc-950/40"]
							}, [createVNode("div", null, [
								createVNode("div", { class: "flex items-start justify-between mb-3" }, [createVNode("div", null, [createVNode("span", { class: "text-[10px] text-zinc-500 font-bold uppercase block" }, toDisplayString(item.category?.title || "عمومی"), 1), createVNode("h3", { class: "text-sm font-bold text-white mt-1" }, toDisplayString(item.title), 1)]), createVNode("button", {
									onClick: ($event) => toggleItem(item),
									type: "button",
									class: ["px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 border", item.is_active ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-zinc-800 text-zinc-500 border-zinc-700"]
								}, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", item.is_active ? "bg-emerald-400" : "bg-zinc-500"] }, null, 2), createVNode("span", null, toDisplayString(item.is_active ? "موجود" : "ناموجود"), 1)], 10, ["onClick"])]),
								createVNode("p", { class: "text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed" }, toDisplayString(item.description), 1),
								item.nutritional_info ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex gap-2 text-[10px] text-zinc-400 font-mono mb-4 flex-wrap"
								}, [item.nutritional_info.protein ? (openBlock(), createBlock("span", {
									key: 0,
									class: "px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-lime-400 font-bold flex items-center gap-1"
								}, [createVNode(unref(Zap), { class: "w-3 h-3 text-lime-400 inline" }), createTextVNode(" پرو: " + toDisplayString(item.nutritional_info.protein), 1)])) : createCommentVNode("", true), item.nutritional_info.calories ? (openBlock(), createBlock("span", {
									key: 1,
									class: "px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 font-bold flex items-center gap-1"
								}, [createVNode(unref(Flame), { class: "w-3 h-3 text-amber-400 inline" }), createTextVNode(" کالری: " + toDisplayString(item.nutritional_info.calories), 1)])) : createCommentVNode("", true)])) : createCommentVNode("", true)
							]), createVNode("div", { class: "pt-3 border-t border-zinc-800/80 flex items-center justify-between" }, [createVNode("span", { class: "text-sm font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(item.effective_price)), 1), createVNode("button", {
								onClick: ($event) => openEdit(item),
								class: "px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1"
							}, [createVNode(unref(Edit3), { class: "w-3 h-3 text-zinc-400" }), createVNode("span", null, "ویرایش")], 8, ["onClick"])])], 2);
						}), 128)), !__props.items || __props.items.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "col-span-full p-12 text-center text-zinc-500 text-xs rounded-2xl bg-zinc-900 border border-zinc-800"
						}, " آیتمی در منوی بوفه ثبت نگردیده است. ")) : createCommentVNode("", true)]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Coffee), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingItem.value ? "ویرایش آیتم منو" : "آیتم جدید بوفه و کافه"), 1)]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitForm, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "نام غذا / نوشیدنی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								placeholder: "مثلاً: شیک پروتئین موز کره بادام‌زمینی",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3.5" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "دسته‌بندی"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, [createVNode("option", { value: "" }, "انتخاب دسته‌بندی..."), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (c) => {
								return openBlock(), createBlock("option", {
									key: c.id,
									value: c.id
								}, toDisplayString(c.title), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "قیمت (تومان)"), withDirectives(createVNode("input", {
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
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "توضیحات و ترکیبات خوراکی"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								rows: "2",
								placeholder: "ترکیبات اصلی، حجم، طعم...",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
							}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال ذخیره...")) : (openBlock(), createBlock("span", { key: 1 }, "ذخیره آیتم"))], 8, ["disabled"])])
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
