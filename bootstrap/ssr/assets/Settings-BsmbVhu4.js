import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { createBlock, createVNode, openBlock, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { BarChart3, Building2, Clock, MapPin, Phone, RefreshCw, Save, Settings } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "تنظیمات محتوای سایت (CMS) - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-4xl"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Settings), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم مدیریت محتوای پرتال (CMS)</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>مدیریت متون و محتوای سایت</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> ویرایش برخط مشخصات، شماره تماس‌ها، آدرس باشگاه در ساری، متن درباره ما و آمارهای صفحه اصلی وب‌سایت </p></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						if (unref(form).processing) _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(Save), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>${ssrInterpolate(unref(form).processing ? "در حال ذخیره‌سازی..." : "ذخیره محتوا")}</span></button></div><form class="space-y-5"${_scopeId}><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5"${_scopeId}><div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Building2), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h2 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>عنوان، برندینگ و شعار مجموعه</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>نام رسمی باشگاه</label><input${ssrRenderAttr("value", unref(form).gym_name)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>شعار سربرگ (Slogan)</label><input${ssrRenderAttr("value", unref(form).gym_slogan)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>متن معرفی و درباره ما</label><textarea rows="3" class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white leading-relaxed focus:outline-none focus:border-lime-400"${_scopeId}>${ssrInterpolate(unref(form).gym_about)}</textarea></div></div><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5"${_scopeId}><div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h2 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>اطلاعات تماس، آدرس ساری و اینستاگرام</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>تلفن ثابت مجموعه</label><input${ssrRenderAttr("value", unref(form).gym_phone)} type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>شماره همراه پذیرش و پیامک</label><input${ssrRenderAttr("value", unref(form).gym_mobile)} type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MapPin), { class: "w-3.5 h-3.5 text-lime-400 inline" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>آدرس پستی دقیق باشگاه در ساری</span></label><input${ssrRenderAttr("value", unref(form).gym_address)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5"${_scopeId}><svg class="w-3.5 h-3.5 text-pink-400 inline fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"${_scopeId}></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"${_scopeId}></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"${_scopeId}></line></svg><span${_scopeId}>پیج اینستاگرام باشگاه</span></label><input${ssrRenderAttr("value", unref(form).gym_instagram)} type="text" dir="ltr" placeholder="m8_fitclub" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-3.5 h-3.5 text-lime-400 inline" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ساعات کاری و شیفت‌ها</span></label><input${ssrRenderAttr("value", unref(form).gym_work_hours)} type="text" placeholder="همه‌روزه از ۶ صبح الی ۲۳" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div></div></div><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5"${_scopeId}><div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80"${_scopeId}>`);
						_push(ssrRenderComponent(unref(BarChart3), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h2 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>آمارهای کلیدی نمایش‌داده‌شده در لندینگ پیج</h2></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"${_scopeId}><div${_scopeId}><label class="block text-[11px] font-bold text-zinc-400 mb-1"${_scopeId}>تعداد اعضای فعال</label><input${ssrRenderAttr("value", unref(form).stat_active_members)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-[11px] font-bold text-zinc-400 mb-1"${_scopeId}>تعداد مربیان مجرب</label><input${ssrRenderAttr("value", unref(form).stat_trainers_count)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-[11px] font-bold text-zinc-400 mb-1"${_scopeId}>متراژ فضای باشگاه</label><input${ssrRenderAttr("value", unref(form).stat_gym_area)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-[11px] font-bold text-zinc-400 mb-1"${_scopeId}>سال سابقه فعالیت</label><input${ssrRenderAttr("value", unref(form).stat_experience_years)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div></div></div></form></div>`);
					} else return [createVNode(unref(Head), { title: "تنظیمات محتوای سایت (CMS) - Dashlite" }), createVNode("div", { class: "space-y-6 max-w-4xl" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Settings), { class: "w-4 h-4" }), createVNode("span", null, "سیستم مدیریت محتوای پرتال (CMS)")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "مدیریت متون و محتوای سایت"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " ویرایش برخط مشخصات، شماره تماس‌ها، آدرس باشگاه در ساری، متن درباره ما و آمارهای صفحه اصلی وب‌سایت ")
					]), createVNode("button", {
						onClick: saveSettings,
						disabled: unref(form).processing,
						class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
					}, [unref(form).processing ? (openBlock(), createBlock(unref(RefreshCw), {
						key: 0,
						class: "w-4 h-4 animate-spin"
					})) : (openBlock(), createBlock(unref(Save), {
						key: 1,
						class: "w-4 h-4 stroke-[2.5]"
					})), createVNode("span", null, toDisplayString(unref(form).processing ? "در حال ذخیره‌سازی..." : "ذخیره محتوا"), 1)], 8, ["disabled"])]), createVNode("form", {
						onSubmit: withModifiers(saveSettings, ["prevent"]),
						class: "space-y-5"
					}, [
						createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5" }, [
							createVNode("div", { class: "flex items-center gap-2 pb-3 border-b border-zinc-800/80" }, [createVNode(unref(Building2), { class: "w-4 h-4 text-lime-400" }), createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "عنوان، برندینگ و شعار مجموعه")]),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "نام رسمی باشگاه"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_name = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_name]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "شعار سربرگ (Slogan)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_slogan = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_slogan]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "متن معرفی و درباره ما"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).gym_about = $event,
								rows: "3",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white leading-relaxed focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_about]])])
						]),
						createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5" }, [createVNode("div", { class: "flex items-center gap-2 pb-3 border-b border-zinc-800/80" }, [createVNode(unref(Phone), { class: "w-4 h-4 text-lime-400" }), createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "اطلاعات تماس، آدرس ساری و اینستاگرام")]), createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "تلفن ثابت مجموعه"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_phone = $event,
								type: "text",
								dir: "ltr",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_phone]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "شماره همراه پذیرش و پیامک"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_mobile = $event,
								type: "text",
								dir: "ltr",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_mobile]])]),
							createVNode("div", { class: "sm:col-span-2" }, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5" }, [createVNode(unref(MapPin), { class: "w-3.5 h-3.5 text-lime-400 inline" }), createVNode("span", null, "آدرس پستی دقیق باشگاه در ساری")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_address = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_address]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5" }, [(openBlock(), createBlock("svg", {
								class: "w-3.5 h-3.5 text-pink-400 inline fill-none stroke-current",
								viewBox: "0 0 24 24",
								"stroke-width": "2",
								"stroke-linecap": "round",
								"stroke-linejoin": "round"
							}, [
								createVNode("rect", {
									width: "20",
									height: "20",
									x: "2",
									y: "2",
									rx: "5",
									ry: "5"
								}),
								createVNode("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
								createVNode("line", {
									x1: "17.5",
									x2: "17.51",
									y1: "6.5",
									y2: "6.5"
								})
							])), createVNode("span", null, "پیج اینستاگرام باشگاه")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_instagram = $event,
								type: "text",
								dir: "ltr",
								placeholder: "m8_fitclub",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_instagram]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-1.5" }, [createVNode(unref(Clock), { class: "w-3.5 h-3.5 text-lime-400 inline" }), createVNode("span", null, "ساعات کاری و شیفت‌ها")]), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).gym_work_hours = $event,
								type: "text",
								placeholder: "همه‌روزه از ۶ صبح الی ۲۳",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).gym_work_hours]])])
						])]),
						createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5" }, [createVNode("div", { class: "flex items-center gap-2 pb-3 border-b border-zinc-800/80" }, [createVNode(unref(BarChart3), { class: "w-4 h-4 text-lime-400" }), createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "آمارهای کلیدی نمایش‌داده‌شده در لندینگ پیج")]), createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-4" }, [
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-bold text-zinc-400 mb-1" }, "تعداد اعضای فعال"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_active_members = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).stat_active_members]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-bold text-zinc-400 mb-1" }, "تعداد مربیان مجرب"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_trainers_count = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).stat_trainers_count]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-bold text-zinc-400 mb-1" }, "متراژ فضای باشگاه"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_gym_area = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).stat_gym_area]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-[11px] font-bold text-zinc-400 mb-1" }, "سال سابقه فعالیت"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).stat_experience_years = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white text-center font-mono focus:outline-none focus:border-lime-400"
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
