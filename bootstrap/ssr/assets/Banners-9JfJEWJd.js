import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Edit3, Image, Plus, Trash2, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Manager/Banners.vue
var _sfc_main = {
	__name: "Banners",
	__ssrInlineRender: true,
	props: { banners: Array },
	setup(__props) {
		const isModalOpen = ref(false);
		const editingBanner = ref(null);
		const form = useForm({
			title: "",
			subtitle: "",
			image: "",
			link: "",
			badge: "",
			scope: "home",
			is_active: true
		});
		function openCreate() {
			editingBanner.value = null;
			form.reset();
			isModalOpen.value = true;
		}
		function openEdit(banner) {
			editingBanner.value = banner;
			form.title = banner.title;
			form.subtitle = banner.subtitle || "";
			form.image = banner.image;
			form.link = banner.link || "";
			form.badge = banner.badge || "";
			form.scope = banner.scope || "home";
			form.is_active = Boolean(banner.is_active);
			isModalOpen.value = true;
		}
		function submitForm() {
			if (editingBanner.value) form.put(`/panel/manager/banners/${editingBanner.value.id}`, { onSuccess: () => isModalOpen.value = false });
			else form.post("/panel/manager/banners", { onSuccess: () => isModalOpen.value = false });
		}
		function deleteBanner(id) {
			if (confirm("آیا از حذف این بنر اطمینان دارید؟")) router.delete(`/panel/manager/banners/${id}`);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "مدیریت بنرها و تبلیغات - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Image), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مارکتینگ و کمپین‌های تصویری</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>بنرهای تبلیغاتی و کمپین‌های باشگاه</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت بنرهای اسلایدر صفحه اصلی، کافه سلامت، فروشگاه مکمل و اطلاعیه‌های ویژه</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>افزودن بنر جدید</span></button></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-5"${_scopeId}><!--[-->`);
						ssrRenderList(__props.banners, (banner) => {
							_push(`<div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700/80 transition-all"${_scopeId}><div${_scopeId}><div class="h-48 overflow-hidden relative bg-zinc-950"${_scopeId}><img${ssrRenderAttr("src", banner.image)}${ssrRenderAttr("alt", banner.title)} class="w-full h-full object-cover"${_scopeId}>`);
							if (banner.badge) _push(`<span class="absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-full bg-lime-400 text-black shadow-md"${_scopeId}>${ssrInterpolate(banner.badge)}</span>`);
							else _push(`<!---->`);
							_push(`<span class="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-zinc-300 border border-zinc-700"${_scopeId}> بخش: ${ssrInterpolate(banner.scope === "home" ? "صفحه اصلی" : banner.scope === "cafe" ? "کافه و بوفه" : "فروشگاه")}</span></div><div class="p-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(banner.title)}</h3>`);
							if (banner.subtitle) _push(`<p class="text-xs text-zinc-400 mt-1.5 leading-relaxed"${_scopeId}>${ssrInterpolate(banner.subtitle)}</p>`);
							else _push(`<!---->`);
							_push(`</div></div><div class="p-5 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-2"${_scopeId}><span class="${ssrRenderClass([banner.is_active ? "text-lime-400" : "text-zinc-500", "inline-flex items-center gap-1.5 text-xs font-bold"])}"${_scopeId}><span class="${ssrRenderClass([banner.is_active ? "bg-lime-400" : "bg-zinc-600", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(banner.is_active ? "فعال در وب‌سایت" : "غیرفعال")}</span></span><div class="flex items-center gap-2"${_scopeId}><button class="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white cursor-pointer transition-colors" title="ویرایش بنر"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Edit3), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</button><button class="p-2 rounded-xl bg-zinc-800 hover:bg-rose-500/20 text-rose-400 cursor-pointer transition-colors" title="حذف بنر"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</button></div></div></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.banners || __props.banners.length === 0) _push(`<div class="col-span-full p-16 text-center text-xs text-zinc-500 rounded-2xl bg-zinc-900 border border-zinc-800"${_scopeId}> بنری تعریف نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Image), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingBanner.value ? "ویرایش بنر" : "افزودن بنر جدید")}</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>عنوان بنر</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="مثلاً: تخفیف ویژه عضویت سالانه" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>زیرعنوان / متن تبلیغاتی</label><input${ssrRenderAttr("value", unref(form).subtitle)} type="text" placeholder="مثلاً: همراه با ۲ جلسه ماساژ ورزشی رایگان" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>آدرس اینترنتی تصویر (URL)</label><input${ssrRenderAttr("value", unref(form).image)} type="url" dir="ltr" placeholder="https://..." class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="grid grid-cols-2 gap-3.5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>برچسب (Badge)</label><input${ssrRenderAttr("value", unref(form).badge)} type="text" placeholder="مثلاً: ویژه اعضا" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>محل نمایش</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="home"${ssrIncludeBooleanAttr(Array.isArray(unref(form).scope) ? ssrLooseContain(unref(form).scope, "home") : ssrLooseEqual(unref(form).scope, "home")) ? " selected" : ""}${_scopeId}>صفحه اصلی</option><option value="cafe"${ssrIncludeBooleanAttr(Array.isArray(unref(form).scope) ? ssrLooseContain(unref(form).scope, "cafe") : ssrLooseEqual(unref(form).scope, "cafe")) ? " selected" : ""}${_scopeId}>کافه سلامت</option><option value="shop"${ssrIncludeBooleanAttr(Array.isArray(unref(form).scope) ? ssrLooseContain(unref(form).scope, "shop") : ssrLooseEqual(unref(form).scope, "shop")) ? " selected" : ""}${_scopeId}>فروشگاه</option></select></div></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال ذخیره...</span>`);
							else _push(`<span${_scopeId}>ذخیره بنر</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "مدیریت بنرها و تبلیغات - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Image), { class: "w-4 h-4" }), createVNode("span", null, "مارکتینگ و کمپین‌های تصویری")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "بنرهای تبلیغاتی و کمپین‌های باشگاه"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت بنرهای اسلایدر صفحه اصلی، کافه سلامت، فروشگاه مکمل و اطلاعیه‌های ویژه")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "افزودن بنر جدید")])])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-5" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.banners, (banner) => {
							return openBlock(), createBlock("div", {
								key: banner.id,
								class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700/80 transition-all"
							}, [createVNode("div", null, [createVNode("div", { class: "h-48 overflow-hidden relative bg-zinc-950" }, [
								createVNode("img", {
									src: banner.image,
									alt: banner.title,
									class: "w-full h-full object-cover"
								}, null, 8, ["src", "alt"]),
								banner.badge ? (openBlock(), createBlock("span", {
									key: 0,
									class: "absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-full bg-lime-400 text-black shadow-md"
								}, toDisplayString(banner.badge), 1)) : createCommentVNode("", true),
								createVNode("span", { class: "absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-sm text-zinc-300 border border-zinc-700" }, " بخش: " + toDisplayString(banner.scope === "home" ? "صفحه اصلی" : banner.scope === "cafe" ? "کافه و بوفه" : "فروشگاه"), 1)
							]), createVNode("div", { class: "p-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(banner.title), 1), banner.subtitle ? (openBlock(), createBlock("p", {
								key: 0,
								class: "text-xs text-zinc-400 mt-1.5 leading-relaxed"
							}, toDisplayString(banner.subtitle), 1)) : createCommentVNode("", true)])]), createVNode("div", { class: "p-5 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-2" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 text-xs font-bold", banner.is_active ? "text-lime-400" : "text-zinc-500"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", banner.is_active ? "bg-lime-400" : "bg-zinc-600"] }, null, 2), createVNode("span", null, toDisplayString(banner.is_active ? "فعال در وب‌سایت" : "غیرفعال"), 1)], 2), createVNode("div", { class: "flex items-center gap-2" }, [createVNode("button", {
								onClick: ($event) => openEdit(banner),
								class: "p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white cursor-pointer transition-colors",
								title: "ویرایش بنر"
							}, [createVNode(unref(Edit3), { class: "w-4 h-4" })], 8, ["onClick"]), createVNode("button", {
								onClick: ($event) => deleteBanner(banner.id),
								class: "p-2 rounded-xl bg-zinc-800 hover:bg-rose-500/20 text-rose-400 cursor-pointer transition-colors",
								title: "حذف بنر"
							}, [createVNode(unref(Trash2), { class: "w-4 h-4" })], 8, ["onClick"])])])]);
						}), 128)), !__props.banners || __props.banners.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "col-span-full p-16 text-center text-xs text-zinc-500 rounded-2xl bg-zinc-900 border border-zinc-800"
						}, " بنری تعریف نشده است. ")) : createCommentVNode("", true)]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Image), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingBanner.value ? "ویرایش بنر" : "افزودن بنر جدید"), 1)]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitForm, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "عنوان بنر"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								placeholder: "مثلاً: تخفیف ویژه عضویت سالانه",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "زیرعنوان / متن تبلیغاتی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).subtitle = $event,
								type: "text",
								placeholder: "مثلاً: همراه با ۲ جلسه ماساژ ورزشی رایگان",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).subtitle]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "آدرس اینترنتی تصویر (URL)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).image = $event,
								type: "url",
								dir: "ltr",
								placeholder: "https://...",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).image]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3.5" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "برچسب (Badge)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).badge = $event,
								type: "text",
								placeholder: "مثلاً: ویژه اعضا",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).badge]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "محل نمایش"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).scope = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, [
								createVNode("option", { value: "home" }, "صفحه اصلی"),
								createVNode("option", { value: "cafe" }, "کافه سلامت"),
								createVNode("option", { value: "shop" }, "فروشگاه")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).scope]])])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
							}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال ذخیره...")) : (openBlock(), createBlock("span", { key: 1 }, "ذخیره بنر"))], 8, ["disabled"])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Manager/Banners.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
