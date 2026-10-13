import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { createVNode, unref, useSSRContext, vModelCheckbox, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Save, UserCheck } from "@lucide/vue";
//#region resources/js/Pages/Panel/Trainer/Profile.vue
var _sfc_main = {
	__name: "Profile",
	__ssrInlineRender: true,
	props: {
		trainer: Object,
		profile: Object
	},
	setup(__props) {
		const props = __props;
		const form = useForm({
			bio: props.profile?.bio || "",
			photo: props.profile?.photo || "",
			specialties: props.profile?.specialties || [
				"هایپرتروفی",
				"چربی‌سوزی",
				"حرکات اصلاحی"
			],
			is_public: props.profile?.is_public ?? true
		});
		function saveProfile() {
			form.post("/panel/trainer/profile", { preserveScroll: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "پروفایل عمومی مربی" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-3xl"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserCheck), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پروفایل و رزومه عمومی مربی</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>اطلاعاتی که در صفحه اصلی باشگاه برای عموم ورزشکاران نمایش داده می‌شود</p></div><button class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Save), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ذخیره پروفایل</span></button></div><form class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>بیوگرافی و سوابق ورزشی</label><textarea rows="4" placeholder="عناوین قهرمانی، مدارک فدراسیون، سال‌های مربیگری..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white leading-relaxed"${_scopeId}>${ssrInterpolate(unref(form).bio)}</textarea></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>لینک تصویر پرسنلی / ورزشی</label><input${ssrRenderAttr("value", unref(form).photo)} type="url" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div><div${_scopeId}><label class="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_public) ? ssrLooseContain(unref(form).is_public, null) : unref(form).is_public) ? " checked" : ""}${_scopeId}><span${_scopeId}>نمایش نام و مشخصات من در لیست مربیان صفحه اصلی وب‌سایت</span></label></div></form></div>`);
					} else return [createVNode(unref(Head), { title: "پروفایل عمومی مربی" }), createVNode("div", { class: "space-y-6 max-w-3xl" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(UserCheck), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "پروفایل و رزومه عمومی مربی")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "اطلاعاتی که در صفحه اصلی باشگاه برای عموم ورزشکاران نمایش داده می‌شود")]), createVNode("button", {
						onClick: saveProfile,
						class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer"
					}, [createVNode(unref(Save), { class: "w-4 h-4" }), createVNode("span", null, "ذخیره پروفایل")])]), createVNode("form", {
						onSubmit: withModifiers(saveProfile, ["prevent"]),
						class: "p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-5"
					}, [
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "بیوگرافی و سوابق ورزشی"), withDirectives(createVNode("textarea", {
							"onUpdate:modelValue": ($event) => unref(form).bio = $event,
							rows: "4",
							placeholder: "عناوین قهرمانی، مدارک فدراسیون، سال‌های مربیگری...",
							class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white leading-relaxed"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).bio]])]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "لینک تصویر پرسنلی / ورزشی"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).photo = $event,
							type: "url",
							dir: "ltr",
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).photo]])]),
						createVNode("div", null, [createVNode("label", { class: "flex items-center gap-2 text-xs text-zinc-300 cursor-pointer" }, [withDirectives(createVNode("input", {
							type: "checkbox",
							"onUpdate:modelValue": ($event) => unref(form).is_public = $event
						}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_public]]), createVNode("span", null, "نمایش نام و مشخصات من در لیست مربیان صفحه اصلی وب‌سایت")])])
					], 32)])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Trainer/Profile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
