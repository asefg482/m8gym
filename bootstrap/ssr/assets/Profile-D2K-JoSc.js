import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { createVNode, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Award, Image, Save, UserCheck } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "پروفایل عمومی مربی - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-3xl"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserCheck), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>معرفی و پرسونال برندینگ مربی</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>پروفایل و رزومه عمومی مربی</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشخصات، سوابق و بیوگرافی شما که در بخش معرفی مربیان وب‌سایت برای عموم ورزشکاران به نمایش درمی‌آید</p></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Save), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>${ssrInterpolate(unref(form).processing ? "در حال ذخیره‌سازی..." : "ذخیره مشخصات پروفایل")}</span></button></div><form class="p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Award), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>بیوگرافی و افتخارات ورزشی</span></label><textarea rows="4" placeholder="عناوین قهرمانی کشور، مدارک فدراسیون بدنسازی و پرورش اندام، سوابق مربیگری بین‌المللی و دانشگاهی..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white leading-relaxed focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30"${_scopeId}>${ssrInterpolate(unref(form).bio)}</textarea></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Image), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>لینک تصویر پرسنلی / ورزشی مربی (URL)</span></label><input${ssrRenderAttr("value", unref(form).photo)} type="url" dir="ltr" placeholder="https://..." class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400 font-mono"${_scopeId}></div><div class="pt-2"${_scopeId}><label class="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-zinc-700 transition-colors"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_public) ? ssrLooseContain(unref(form).is_public, null) : unref(form).is_public) ? " checked" : ""} class="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-lime-400 focus:ring-0"${_scopeId}><div class="text-xs"${_scopeId}><span class="font-bold text-white block"${_scopeId}>نمایش در لیست مربیان وب‌سایت اصلی</span><span class="text-zinc-500 text-[11px]"${_scopeId}>با فعال‌سازی این گزینه، کارت رزومه شما در لندینگ پیج باشگاه M8 به ورزشکاران نمایش داده می‌شود.</span></div></label></div></form></div>`);
					} else return [createVNode(unref(Head), { title: "پروفایل عمومی مربی - Dashlite" }), createVNode("div", { class: "space-y-6 max-w-3xl" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(UserCheck), { class: "w-4 h-4" }), createVNode("span", null, "معرفی و پرسونال برندینگ مربی")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "پروفایل و رزومه عمومی مربی"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشخصات، سوابق و بیوگرافی شما که در بخش معرفی مربیان وب‌سایت برای عموم ورزشکاران به نمایش درمی‌آید")
					]), createVNode("button", {
						onClick: saveProfile,
						disabled: unref(form).processing,
						class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
					}, [createVNode(unref(Save), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, toDisplayString(unref(form).processing ? "در حال ذخیره‌سازی..." : "ذخیره مشخصات پروفایل"), 1)], 8, ["disabled"])]), createVNode("form", {
						onSubmit: withModifiers(saveProfile, ["prevent"]),
						class: "p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5"
					}, [
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-2" }, [createVNode(unref(Award), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "بیوگرافی و افتخارات ورزشی")]), withDirectives(createVNode("textarea", {
							"onUpdate:modelValue": ($event) => unref(form).bio = $event,
							rows: "4",
							placeholder: "عناوین قهرمانی کشور، مدارک فدراسیون بدنسازی و پرورش اندام، سوابق مربیگری بین‌المللی و دانشگاهی...",
							class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-white leading-relaxed focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).bio]])]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5 flex items-center gap-2" }, [createVNode(unref(Image), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "لینک تصویر پرسنلی / ورزشی مربی (URL)")]), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).photo = $event,
							type: "url",
							dir: "ltr",
							placeholder: "https://...",
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400 font-mono"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).photo]])]),
						createVNode("div", { class: "pt-2" }, [createVNode("label", { class: "flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 cursor-pointer hover:border-zinc-700 transition-colors" }, [withDirectives(createVNode("input", {
							type: "checkbox",
							"onUpdate:modelValue": ($event) => unref(form).is_public = $event,
							class: "w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-lime-400 focus:ring-0"
						}, null, 8, ["onUpdate:modelValue"]), [[vModelCheckbox, unref(form).is_public]]), createVNode("div", { class: "text-xs" }, [createVNode("span", { class: "font-bold text-white block" }, "نمایش در لیست مربیان وب‌سایت اصلی"), createVNode("span", { class: "text-zinc-500 text-[11px]" }, "با فعال‌سازی این گزینه، کارت رزومه شما در لندینگ پیج باشگاه M8 به ورزشکاران نمایش داده می‌شود.")])])])
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
