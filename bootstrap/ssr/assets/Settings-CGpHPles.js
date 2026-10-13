import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { createBlock, createVNode, openBlock, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { RefreshCw, Save, Settings } from "@lucide/vue";
//#region resources/js/Pages/Panel/Manager/Settings.vue
var _sfc_main = {
	__name: "Settings",
	__ssrInlineRender: true,
	props: { settings: Object },
	setup(__props) {
		const props = __props;
		const form = useForm({
			gym_name: props.settings.gym_name || "",
			gym_slogan: props.settings.gym_slogan || "",
			gym_about: props.settings.gym_about || "",
			gym_phone: props.settings.gym_phone || "",
			gym_mobile: props.settings.gym_mobile || "",
			gym_address: props.settings.gym_address || "",
			gym_instagram: props.settings.gym_instagram || "",
			gym_work_hours: props.settings.gym_work_hours || "",
			stat_active_members: props.settings.stat_active_members || "",
			stat_trainers_count: props.settings.stat_trainers_count || "",
			stat_gym_area: props.settings.stat_gym_area || "",
			stat_experience_years: props.settings.stat_experience_years || ""
		});
		function saveSettings() {
			form.post("/panel/manager/cms", { preserveScroll: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تنظیمات محتوای سایت (CMS)" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-4xl"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Settings), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مدیریت متون و محتوای سایت (CMS)</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> ویرایش اطلاعات عمومی، آمارها، آدرس و شماره تلفن‌های باشگاه بدون نیاز به دیپلوی مجدد. </p></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50"${_scopeId}>`);
						if (unref(form).processing) _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(Save), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ذخیره تنظیمات</span></button></div><form class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6"${_scopeId}><div class="border-b border-zinc-800 pb-6 space-y-4"${_scopeId}><h2 class="text-xs font-bold text-lime-400 uppercase tracking-wider"${_scopeId}>عنوان و شعار اصلی</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>نام باشگاه</label><input${ssrRenderAttr("value", unref(form).gym_name)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>شعار هدر</label><input${ssrRenderAttr("value", unref(form).gym_slogan)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>درباره ما</label><textarea rows="3" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"${_scopeId}>${ssrInterpolate(unref(form).gym_about)}</textarea></div></div><div class="border-b border-zinc-800 pb-6 space-y-4"${_scopeId}><h2 class="text-xs font-bold text-lime-400 uppercase tracking-wider"${_scopeId}>اطلاعات تماس و آدرس ساری</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>تلفن ثابت</label><input${ssrRenderAttr("value", unref(form).gym_phone)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>شماره همراه پشتیبانی</label><input${ssrRenderAttr("value", unref(form).gym_mobile)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>آدرس دقیق مجموعه</label><input${ssrRenderAttr("value", unref(form).gym_address)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>لینک اینستاگرام</label><input${ssrRenderAttr("value", unref(form).gym_instagram)} type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>ساعات کاری</label><input${ssrRenderAttr("value", unref(form).gym_work_hours)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div></div></div><div class="space-y-4"${_scopeId}><h2 class="text-xs font-bold text-lime-400 uppercase tracking-wider"${_scopeId}>آمارهای برجسته صفحه اصلی</h2><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><label class="block text-[11px] font-semibold text-zinc-400 mb-1"${_scopeId}>تعداد اعضای فعال</label><input${ssrRenderAttr("value", unref(form).stat_active_members)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"${_scopeId}></div><div${_scopeId}><label class="block text-[11px] font-semibold text-zinc-400 mb-1"${_scopeId}>تعداد مربیان</label><input${ssrRenderAttr("value", unref(form).stat_trainers_count)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"${_scopeId}></div><div${_scopeId}><label class="block text-[11px] font-semibold text-zinc-400 mb-1"${_scopeId}>متراژ فضا</label><input${ssrRenderAttr("value", unref(form).stat_gym_area)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"${_scopeId}></div><div${_scopeId}><label class="block text-[11px] font-semibold text-zinc-400 mb-1"${_scopeId}>سابقه فعالیت</label><input${ssrRenderAttr("value", unref(form).stat_experience_years)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"${_scopeId}></div></div></div></form></div>`);
					} else return [createVNode(unref(Head), { title: "تنظیمات محتوای سایت (CMS)" }), createVNode("div", { class: "space-y-6 max-w-4xl" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Settings), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "مدیریت متون و محتوای سایت (CMS)")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " ویرایش اطلاعات عمومی، آمارها، آدرس و شماره تلفن‌های باشگاه بدون نیاز به دیپلوی مجدد. ")]), createVNode("button", {
						onClick: saveSettings,
						disabled: unref(form).processing,
						class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50"
					}, [unref(form).processing ? (openBlock(), createBlock(unref(RefreshCw), {
						key: 0,
						class: "w-4 h-4 animate-spin"
					})) : (openBlock(), createBlock(unref(Save), {
						key: 1,
						class: "w-4 h-4"
					})), createVNode("span", null, "ذخیره تنظیمات")], 8, ["disabled"])]), createVNode("form", {
						onSubmit: withModifiers(saveSettings, ["prevent"]),
						class: "p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6"
					}, [
						createVNode("div", { class: "border-b border-zinc-800 pb-6 space-y-4" }, [
							createVNode("h2", { class: "text-xs font-bold text-lime-400 uppercase tracking-wider" }, "عنوان و شعار اصلی"),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "نام باشگاه"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_name = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_name]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "شعار هدر"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_slogan = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_slogan]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "درباره ما"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).gym_about = $event,
								rows: "3",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_about]])])
						]),
						createVNode("div", { class: "border-b border-zinc-800 pb-6 space-y-4" }, [createVNode("h2", { class: "text-xs font-bold text-lime-400 uppercase tracking-wider" }, "اطلاعات تماس و آدرس ساری"), createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "تلفن ثابت"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_phone = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_phone]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "شماره همراه پشتیبانی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_mobile = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_mobile]])]),
							createVNode("div", { class: "sm:col-span-2" }, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "آدرس دقیق مجموعه"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_address = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_address]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "لینک اینستاگرام"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_instagram = $event,
								type: "text",
								dir: "ltr",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_instagram]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "ساعات کاری"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_work_hours = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_work_hours]])])
						])]),
						createVNode("div", { class: "space-y-4" }, [createVNode("h2", { class: "text-xs font-bold text-lime-400 uppercase tracking-wider" }, "آمارهای برجسته صفحه اصلی"), createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-4" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-semibold text-zinc-400 mb-1" }, "تعداد اعضای فعال"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_active_members = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).stat_active_members]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-semibold text-zinc-400 mb-1" }, "تعداد مربیان"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_trainers_count = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).stat_trainers_count]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-semibold text-zinc-400 mb-1" }, "متراژ فضا"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_gym_area = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).stat_gym_area]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-semibold text-zinc-400 mb-1" }, "سابقه فعالیت"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_experience_years = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).stat_experience_years]])])
						])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Manager/Settings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
