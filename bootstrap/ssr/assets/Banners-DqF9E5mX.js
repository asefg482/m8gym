import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Edit, Image, Plus, Trash2, X } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "مدیریت بنرها و تبلیغات" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Image), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>بنرهای تبلیغاتی و کمپین‌ها</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت بنرهای اسلایدر صفحه اصلی و صفحات کافه و فروشگاه</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>افزودن بنر جدید</span></button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><!--[-->`);
						ssrRenderList(__props.banners, (banner) => {
							_push(`<div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="h-44 overflow-hidden relative"${_scopeId}><img${ssrRenderAttr("src", banner.image)}${ssrRenderAttr("alt", banner.title)} class="w-full h-full object-cover"${_scopeId}>`);
							if (banner.badge) _push(`<span class="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-lime-400 text-black"${_scopeId}>${ssrInterpolate(banner.badge)}</span>`);
							else _push(`<!---->`);
							_push(`</div><div class="p-5"${_scopeId}><span class="text-[10px] text-zinc-500 font-bold uppercase"${_scopeId}>بخش: ${ssrInterpolate(banner.scope)}</span><h3 class="text-sm font-bold text-white mt-1"${_scopeId}>${ssrInterpolate(banner.title)}</h3><p class="text-xs text-zinc-400 mt-1.5"${_scopeId}>${ssrInterpolate(banner.subtitle)}</p></div></div><div class="p-5 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-4"${_scopeId}><span class="${ssrRenderClass([banner.is_active ? "text-lime-400" : "text-zinc-500", "text-xs"])}"${_scopeId}>${ssrInterpolate(banner.is_active ? "● فعال در سایت" : "○ غیرفعال")}</span><div class="flex items-center gap-2"${_scopeId}><button class="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Edit), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
							_push(`</button><button class="p-2 rounded-lg bg-zinc-800 text-red-400 hover:text-red-300"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Trash2), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
							_push(`</button></div></div></div>`);
						});
						_push(`<!--]--></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingBanner.value ? "ویرایش بنر" : "افزودن بنر جدید")}</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>عنوان بنر</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>زیرعنوان / توضیح</label><input${ssrRenderAttr("value", unref(form).subtitle)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>آدرس تصویر (URL)</label><input${ssrRenderAttr("value", unref(form).image)} type="url" dir="ltr" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>برچسب (Badge)</label><input${ssrRenderAttr("value", unref(form).badge)} type="text" placeholder="مثلاً: ویژه VIP" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>محل نمایش</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value="home"${ssrIncludeBooleanAttr(Array.isArray(unref(form).scope) ? ssrLooseContain(unref(form).scope, "home") : ssrLooseEqual(unref(form).scope, "home")) ? " selected" : ""}${_scopeId}>صفحه اصلی</option><option value="cafe"${ssrIncludeBooleanAttr(Array.isArray(unref(form).scope) ? ssrLooseContain(unref(form).scope, "cafe") : ssrLooseEqual(unref(form).scope, "cafe")) ? " selected" : ""}${_scopeId}>کافه و رستوران</option><option value="shop"${ssrIncludeBooleanAttr(Array.isArray(unref(form).scope) ? ssrLooseContain(unref(form).scope, "shop") : ssrLooseEqual(unref(form).scope, "shop")) ? " selected" : ""}${_scopeId}>فروشگاه</option></select></div></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ذخیره بنر</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "مدیریت بنرها و تبلیغات" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Image), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "بنرهای تبلیغاتی و کمپین‌ها")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت بنرهای اسلایدر صفحه اصلی و صفحات کافه و فروشگاه")]), createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
						}, [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "افزودن بنر جدید")])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.banners, (banner) => {
							return openBlock(), createBlock("div", {
								key: banner.id,
								class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col justify-between"
							}, [createVNode("div", null, [createVNode("div", { class: "h-44 overflow-hidden relative" }, [createVNode("img", {
								src: banner.image,
								alt: banner.title,
								class: "w-full h-full object-cover"
							}, null, 8, ["src", "alt"]), banner.badge ? (openBlock(), createBlock("span", {
								key: 0,
								class: "absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-lime-400 text-black"
							}, toDisplayString(banner.badge), 1)) : createCommentVNode("", true)]), createVNode("div", { class: "p-5" }, [
								createVNode("span", { class: "text-[10px] text-zinc-500 font-bold uppercase" }, "بخش: " + toDisplayString(banner.scope), 1),
								createVNode("h3", { class: "text-sm font-bold text-white mt-1" }, toDisplayString(banner.title), 1),
								createVNode("p", { class: "text-xs text-zinc-400 mt-1.5" }, toDisplayString(banner.subtitle), 1)
							])]), createVNode("div", { class: "p-5 pt-0 flex items-center justify-between border-t border-zinc-800/60 mt-4" }, [createVNode("span", { class: ["text-xs", banner.is_active ? "text-lime-400" : "text-zinc-500"] }, toDisplayString(banner.is_active ? "● فعال در سایت" : "○ غیرفعال"), 3), createVNode("div", { class: "flex items-center gap-2" }, [createVNode("button", {
								onClick: ($event) => openEdit(banner),
								class: "p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white"
							}, [createVNode(unref(Edit), { class: "w-3.5 h-3.5" })], 8, ["onClick"]), createVNode("button", {
								onClick: ($event) => deleteBanner(banner.id),
								class: "p-2 rounded-lg bg-zinc-800 text-red-400 hover:text-red-300"
							}, [createVNode(unref(Trash2), { class: "w-3.5 h-3.5" })], 8, ["onClick"])])])]);
						}), 128))]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingBanner.value ? "ویرایش بنر" : "افزودن بنر جدید"), 1), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitForm, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "عنوان بنر"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "زیرعنوان / توضیح"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).subtitle = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).subtitle]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "آدرس تصویر (URL)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).image = $event,
								type: "url",
								dir: "ltr",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).image]])]),
							createVNode("div", { class: "grid grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "برچسب (Badge)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).badge = $event,
								type: "text",
								placeholder: "مثلاً: ویژه VIP",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).badge]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "محل نمایش"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).scope = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, [
								createVNode("option", { value: "home" }, "صفحه اصلی"),
								createVNode("option", { value: "cafe" }, "کافه و رستوران"),
								createVNode("option", { value: "shop" }, "فروشگاه")
							], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).scope]])])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2 rounded-xl text-xs text-zinc-400"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"
							}, "ذخیره بنر")])
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
