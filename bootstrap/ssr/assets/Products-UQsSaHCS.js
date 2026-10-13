import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Package, Plus, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Shop/Products.vue
var _sfc_main = {
	__name: "Products",
	__ssrInlineRender: true,
	props: {
		products: Object,
		categories: Array
	},
	setup(__props) {
		const isModalOpen = ref(false);
		const editingProduct = ref(null);
		const form = useForm({
			title: "",
			category_id: "",
			price: 0,
			discount_price: "",
			stock: 10,
			sku: "",
			description: "",
			images: ["https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80"],
			is_active: true
		});
		function openCreate() {
			editingProduct.value = null;
			form.reset();
			isModalOpen.value = true;
		}
		function openEdit(p) {
			editingProduct.value = p;
			form.title = p.title;
			form.category_id = p.category_id || "";
			form.price = p.price;
			form.discount_price = p.discount_price || "";
			form.stock = p.stock;
			form.sku = p.sku || "";
			form.description = p.description || "";
			form.images = p.images || [];
			form.is_active = Boolean(p.is_active);
			isModalOpen.value = true;
		}
		function submitProduct() {
			if (editingProduct.value) form.put(`/panel/shop/products/${editingProduct.value.id}`, { onSuccess: () => isModalOpen.value = false });
			else form.post("/panel/shop/products", { onSuccess: () => isModalOpen.value = false });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "مدیریت محصولات فروشگاه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Package), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>محصولات، مکمل‌ها و موجودی انبار</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تعریف کالا، قیمت‌گذاری، تخفیف و کنترل تعداد موجودی</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>افزودن محصول جدید</span></button></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>عنوان کالا</th><th class="p-4 font-bold"${_scopeId}>دسته‌بندی</th><th class="p-4 font-bold"${_scopeId}>قیمت واحد</th><th class="p-4 font-bold"${_scopeId}>قیمت تخفیف‌دار</th><th class="p-4 font-bold"${_scopeId}>موجودی انبار</th><th class="p-4 font-bold text-center"${_scopeId}>عملیات</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.products.data, (p) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 font-sans font-bold text-white"${_scopeId}>${ssrInterpolate(p.title)}</td><td class="p-4 font-sans text-zinc-400"${_scopeId}>${ssrInterpolate(p.category?.title || "-")}</td><td class="p-4 text-zinc-300"${_scopeId}>${ssrInterpolate(unref(formatPrice)(p.price))}</td><td class="p-4 text-lime-400"${_scopeId}>${ssrInterpolate(p.discount_price ? unref(formatPrice)(p.discount_price) : "-")}</td><td class="p-4"${_scopeId}><span class="${ssrRenderClass(p.stock <= 5 ? "text-amber-400 font-bold" : "text-zinc-300")}"${_scopeId}>${ssrInterpolate(p.stock)} عدد </span></td><td class="p-4 text-center font-sans"${_scopeId}><button class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs"${_scopeId}> ویرایش </button></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingProduct.value ? "ویرایش کالا" : "افزودن محصول جدید")}</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>نام محصول</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>دسته‌بندی</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId}>بدون دسته‌بندی</option><!--[-->`);
							ssrRenderList(__props.categories, (c) => {
								_push(`<option${ssrRenderAttr("value", c.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, c.id) : ssrLooseEqual(unref(form).category_id, c.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(c.title)}</option>`);
							});
							_push(`<!--]--></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>تعداد موجودی</label><input${ssrRenderAttr("value", unref(form).stock)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>قیمت (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>قیمت تخفیف‌خورده (اختیاری)</label><input${ssrRenderAttr("value", unref(form).discount_price)} type="number" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>توضیحات</label><textarea rows="2" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ذخیره کالا</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "مدیریت محصولات فروشگاه" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Package), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "محصولات، مکمل‌ها و موجودی انبار")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تعریف کالا، قیمت‌گذاری، تخفیف و کنترل تعداد موجودی")]), createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "افزودن محصول جدید")])]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "عنوان کالا"),
							createVNode("th", { class: "p-4 font-bold" }, "دسته‌بندی"),
							createVNode("th", { class: "p-4 font-bold" }, "قیمت واحد"),
							createVNode("th", { class: "p-4 font-bold" }, "قیمت تخفیف‌دار"),
							createVNode("th", { class: "p-4 font-bold" }, "موجودی انبار"),
							createVNode("th", { class: "p-4 font-bold text-center" }, "عملیات")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (p) => {
							return openBlock(), createBlock("tr", {
								key: p.id,
								class: "hover:bg-zinc-800/20"
							}, [
								createVNode("td", { class: "p-4 font-sans font-bold text-white" }, toDisplayString(p.title), 1),
								createVNode("td", { class: "p-4 font-sans text-zinc-400" }, toDisplayString(p.category?.title || "-"), 1),
								createVNode("td", { class: "p-4 text-zinc-300" }, toDisplayString(unref(formatPrice)(p.price)), 1),
								createVNode("td", { class: "p-4 text-lime-400" }, toDisplayString(p.discount_price ? unref(formatPrice)(p.discount_price) : "-"), 1),
								createVNode("td", { class: "p-4" }, [createVNode("span", { class: p.stock <= 5 ? "text-amber-400 font-bold" : "text-zinc-300" }, toDisplayString(p.stock) + " عدد ", 3)]),
								createVNode("td", { class: "p-4 text-center font-sans" }, [createVNode("button", {
									onClick: ($event) => openEdit(p),
									class: "px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs"
								}, " ویرایش ", 8, ["onClick"])])
							]);
						}), 128))])])]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingProduct.value ? "ویرایش کالا" : "افزودن محصول جدید"), 1), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitProduct, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "نام محصول"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "دسته‌بندی"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, [createVNode("option", { value: "" }, "بدون دسته‌بندی"), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (c) => {
								return openBlock(), createBlock("option", {
									key: c.id,
									value: c.id
								}, toDisplayString(c.title), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "تعداد موجودی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stock = $event,
								type: "number",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).stock,
								void 0,
								{ number: true }
							]])])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "قیمت (تومان)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).price = $event,
								type: "number",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).price,
								void 0,
								{ number: true }
							]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "قیمت تخفیف‌خورده (اختیاری)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).discount_price = $event,
								type: "number",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).discount_price,
								void 0,
								{ number: true }
							]])])]),
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
							}, "ذخیره کالا")])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Shop/Products.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
