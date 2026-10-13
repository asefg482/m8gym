import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-DHt3q8cw.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Edit3, Package, Plus, X } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "مدیریت کالاهای فروشگاه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Package), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>انبارداری و کاتالوگ فروشگاه</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>مدیریت کالاهای فروشگاه ورزشی</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تعریف مکمل‌های ورزشی، پوشاک، قیمت‌گذاری، بارکد انبارداری (SKU) و موجودی کالا</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تعریف محصول جدید</span></button></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Package), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>لیست اقلام و وضعیت موجودی انبار</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>مجموع کالاها: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.products.total || __props.products.data?.length || 0)}</b> قلم</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام کالا و تصویر</th><th class="p-4 font-bold"${_scopeId}>دسته‌بندی</th><th class="p-4 font-bold"${_scopeId}>قیمت فروش</th><th class="p-4 font-bold"${_scopeId}>موجودی انبار</th><th class="p-4 font-bold"${_scopeId}>شناسه SKU</th><th class="p-4 font-bold text-center"${_scopeId}>عملیات</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.products.data, (p) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0"${_scopeId}>`);
							if (p.images && p.images[0]) _push(`<img${ssrRenderAttr("src", p.images[0])} class="w-full h-full object-cover" alt=""${_scopeId}>`);
							else {
								_push(`<div class="w-full h-full flex items-center justify-center text-zinc-600"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Package), { class: "w-5 h-5" }, null, _parent, _scopeId));
								_push(`</div>`);
							}
							_push(`</div><div${_scopeId}><span class="font-bold text-white text-xs sm:text-sm block"${_scopeId}>${ssrInterpolate(p.title)}</span>`);
							if (p.description) _push(`<span class="text-zinc-500 text-[11px] line-clamp-1 mt-0.5"${_scopeId}>${ssrInterpolate(p.description)}</span>`);
							else _push(`<!---->`);
							_push(`</div></div></td><td class="p-4"${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold"${_scopeId}>${ssrInterpolate(p.category?.title || "عمومی")}</span></td><td class="p-4 font-mono"${_scopeId}><div class="text-lime-400 font-black text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(p.price))}</div>`);
							if (p.discount_price) _push(`<div class="text-zinc-500 text-[11px] line-through"${_scopeId}>${ssrInterpolate(unref(formatPrice)(p.discount_price))}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="p-4 font-mono"${_scopeId}><span class="${ssrRenderClass([p.stock > 5 ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : p.stock > 0 ? "bg-amber-400/10 text-amber-400 border-amber-400/20" : "bg-rose-400/10 text-rose-400 border-rose-400/20", "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border"])}"${_scopeId}><span class="${ssrRenderClass([p.stock > 5 ? "bg-emerald-400" : p.stock > 0 ? "bg-amber-400" : "bg-rose-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(p.stock)} عدد </span></td><td class="p-4 font-mono text-zinc-400 text-[11px]"${_scopeId}>${ssrInterpolate(p.sku || "-")}</td><td class="p-4 text-center"${_scopeId}><button class="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>ویرایش</span></button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.products.data || __props.products.data.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> کالایی در فروشگاه تعریف نگردیده است. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.products.links,
							from: __props.products.from,
							to: __props.products.to,
							total: __props.products.total
						}, null, _parent, _scopeId));
						_push(`</div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in"${_scopeId}><div class="w-full max-w-xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8 relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Package), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingProduct.value ? "ویرایش اطلاعات کالا" : "تعریف کالای جدید در فروشگاه")}</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>عنوان کالا</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="مثلاً: پروتئین وی ۱۰۰٪ ایزوله ۲ کیلوگرمی" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>دسته‌بندی</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId}>انتخاب دسته...</option><!--[-->`);
							ssrRenderList(__props.categories, (c) => {
								_push(`<option${ssrRenderAttr("value", c.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, c.id) : ssrLooseEqual(unref(form).category_id, c.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(c.title)}</option>`);
							});
							_push(`<!--]--></select></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>بارکد انبار (SKU)</label><input${ssrRenderAttr("value", unref(form).sku)} type="text" placeholder="WHEY-2KG-01" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>قیمت فروش (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>موجودی در انبار</label><input${ssrRenderAttr("value", unref(form).stock)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>توضیحات و مشخصات کالا</label><textarea rows="3" placeholder="ترکیبات، طعم، طریقه مصرف..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال ثبت...</span>`);
							else _push(`<span${_scopeId}>ذخیره کالا</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "مدیریت کالاهای فروشگاه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Package), { class: "w-4 h-4" }), createVNode("span", null, "انبارداری و کاتالوگ فروشگاه")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "مدیریت کالاهای فروشگاه ورزشی"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تعریف مکمل‌های ورزشی، پوشاک، قیمت‌گذاری، بارکد انبارداری (SKU) و موجودی کالا")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "تعریف محصول جدید")])])]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
							createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Package), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "لیست اقلام و وضعیت موجودی انبار")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, [
								createTextVNode("مجموع کالاها: "),
								createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.products.total || __props.products.data?.length || 0), 1),
								createTextVNode(" قلم")
							])]),
							createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-4 font-bold text-white" }, "نام کالا و تصویر"),
								createVNode("th", { class: "p-4 font-bold" }, "دسته‌بندی"),
								createVNode("th", { class: "p-4 font-bold" }, "قیمت فروش"),
								createVNode("th", { class: "p-4 font-bold" }, "موجودی انبار"),
								createVNode("th", { class: "p-4 font-bold" }, "شناسه SKU"),
								createVNode("th", { class: "p-4 font-bold text-center" }, "عملیات")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (p) => {
								return openBlock(), createBlock("tr", {
									key: p.id,
									class: "hover:bg-zinc-800/30 transition-colors"
								}, [
									createVNode("td", { class: "p-4" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0" }, [p.images && p.images[0] ? (openBlock(), createBlock("img", {
										key: 0,
										src: p.images[0],
										class: "w-full h-full object-cover",
										alt: ""
									}, null, 8, ["src"])) : (openBlock(), createBlock("div", {
										key: 1,
										class: "w-full h-full flex items-center justify-center text-zinc-600"
									}, [createVNode(unref(Package), { class: "w-5 h-5" })]))]), createVNode("div", null, [createVNode("span", { class: "font-bold text-white text-xs sm:text-sm block" }, toDisplayString(p.title), 1), p.description ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-zinc-500 text-[11px] line-clamp-1 mt-0.5"
									}, toDisplayString(p.description), 1)) : createCommentVNode("", true)])])]),
									createVNode("td", { class: "p-4" }, [createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold" }, toDisplayString(p.category?.title || "عمومی"), 1)]),
									createVNode("td", { class: "p-4 font-mono" }, [createVNode("div", { class: "text-lime-400 font-black text-sm" }, toDisplayString(unref(formatPrice)(p.price)), 1), p.discount_price ? (openBlock(), createBlock("div", {
										key: 0,
										class: "text-zinc-500 text-[11px] line-through"
									}, toDisplayString(unref(formatPrice)(p.discount_price)), 1)) : createCommentVNode("", true)]),
									createVNode("td", { class: "p-4 font-mono" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", p.stock > 5 ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : p.stock > 0 ? "bg-amber-400/10 text-amber-400 border-amber-400/20" : "bg-rose-400/10 text-rose-400 border-rose-400/20"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", p.stock > 5 ? "bg-emerald-400" : p.stock > 0 ? "bg-amber-400" : "bg-rose-400"] }, null, 2), createTextVNode(" " + toDisplayString(p.stock) + " عدد ", 1)], 2)]),
									createVNode("td", { class: "p-4 font-mono text-zinc-400 text-[11px]" }, toDisplayString(p.sku || "-"), 1),
									createVNode("td", { class: "p-4 text-center" }, [createVNode("button", {
										onClick: ($event) => openEdit(p),
										class: "px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"
									}, [createVNode(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }), createVNode("span", null, "ویرایش")], 8, ["onClick"])])
								]);
							}), 128)), !__props.products.data || __props.products.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "6",
								class: "p-12 text-center text-zinc-500 text-xs"
							}, " کالایی در فروشگاه تعریف نگردیده است. ")])) : createCommentVNode("", true)])])]),
							createVNode(_sfc_main$2, {
								links: __props.products.links,
								from: __props.products.from,
								to: __props.products.to,
								total: __props.products.total
							}, null, 8, [
								"links",
								"from",
								"to",
								"total"
							])
						]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-xl rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8 relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Package), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingProduct.value ? "ویرایش اطلاعات کالا" : "تعریف کالای جدید در فروشگاه"), 1)]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitProduct, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "عنوان کالا"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								placeholder: "مثلاً: پروتئین وی ۱۰۰٪ ایزوله ۲ کیلوگرمی",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3.5" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "دسته‌بندی"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).category_id = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, [createVNode("option", {
								value: "",
								disabled: ""
							}, "انتخاب دسته..."), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (c) => {
								return openBlock(), createBlock("option", {
									key: c.id,
									value: c.id
								}, toDisplayString(c.title), 9, ["value"]);
							}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category_id]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "بارکد انبار (SKU)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).sku = $event,
								type: "text",
								placeholder: "WHEY-2KG-01",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).sku]])])]),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3.5" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "قیمت فروش (تومان)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).price = $event,
								type: "number",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).price,
								void 0,
								{ number: true }
							]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "موجودی در انبار"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stock = $event,
								type: "number",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).stock,
								void 0,
								{ number: true }
							]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "توضیحات و مشخصات کالا"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								rows: "3",
								placeholder: "ترکیبات، طعم، طریقه مصرف...",
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
							}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال ثبت...")) : (openBlock(), createBlock("span", { key: 1 }, "ذخیره کالا"))], 8, ["disabled"])])
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
