import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { createBlock, createVNode, openBlock, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { CalendarClock, CreditCard, RefreshCw, Save, Settings } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/Settings.vue
var _sfc_main = {
	__name: "Settings",
	__ssrInlineRender: true,
	props: { settings: Object },
	setup(__props) {
		const props = __props;
		const form = useForm({
			gateway_default: props.settings.gateway_default || "sandbox",
			sms_provider: props.settings.sms_provider || "log",
			tax_percent: props.settings.tax_percent || "0",
			cancel_booking_hours: props.settings.cancel_booking_hours || "4",
			max_active_sessions: props.settings.max_active_sessions || "1"
		});
		function save() {
			form.post("/panel/super_admin/settings", { preserveScroll: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تنظیمات کلان سیستم - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-4xl"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Settings), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پیکربندی هسته مرکزی سامانه</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>تنظیمات کلان و فنی سیستم</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>پیکربندی درگاه پرداخت شتابی، ارائه‌دهنده پیامک OTP، مالیات و قوانین رزرو خدمات</p></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						if (unref(form).processing) _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(Save), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>${ssrInterpolate(unref(form).processing ? "در حال ذخیره‌سازی..." : "ذخیره تنظیمات سیستم")}</span></button></div><form class="space-y-5"${_scopeId}><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5"${_scopeId}><div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h2 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>سرویس‌های بانکی و اطلاع‌رسانی</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>ارائه‌دهنده درگاه پرداخت آنلاین</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="sandbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gateway_default) ? ssrLooseContain(unref(form).gateway_default, "sandbox") : ssrLooseEqual(unref(form).gateway_default, "sandbox")) ? " selected" : ""}${_scopeId}>درگاه شبیه‌ساز امن شتابی (محیط آزمایشی Sandbox)</option><option value="zarinpal"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gateway_default) ? ssrLooseContain(unref(form).gateway_default, "zarinpal") : ssrLooseEqual(unref(form).gateway_default, "zarinpal")) ? " selected" : ""}${_scopeId}>زرین‌پال (ZarinPal IPG)</option><option value="offline"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gateway_default) ? ssrLooseContain(unref(form).gateway_default, "offline") : ssrLooseEqual(unref(form).gateway_default, "offline")) ? " selected" : ""}${_scopeId}>پرداخت حضوری با کارتخوان پذیرش باشگاه</option></select><span class="text-[11px] text-zinc-500 mt-1 block"${_scopeId}>درگاه پیش‌فرض جهت خرید اشتراک و شارژ کیف‌پول</span></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>ارائه‌دهنده وب‌سرویس پیامک (SMS OTP)</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="ippanel"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sms_provider) ? ssrLooseContain(unref(form).sms_provider, "ippanel") : ssrLooseEqual(unref(form).sms_provider, "ippanel")) ? " selected" : ""}${_scopeId}>IPPanel / فراپیامک (سامانه پترن سریع)</option><option value="kavenegar"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sms_provider) ? ssrLooseContain(unref(form).sms_provider, "kavenegar") : ssrLooseEqual(unref(form).sms_provider, "kavenegar")) ? " selected" : ""}${_scopeId}>کاوه‌نگار (Kavenegar)</option><option value="log"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sms_provider) ? ssrLooseContain(unref(form).sms_provider, "log") : ssrLooseEqual(unref(form).sms_provider, "log")) ? " selected" : ""}${_scopeId}>لاگ فایل سیستم (تست لوکال و بدون مصرف پیامک)</option></select><span class="text-[11px] text-zinc-500 mt-1 block"${_scopeId}>ارسال کد تایید ورود اعضا و یادآوری جلسات</span></div></div></div><div class="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5"${_scopeId}><div class="flex items-center gap-2 pb-3 border-b border-zinc-800/80"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarClock), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h2 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>قوانین رزرو، تردد و امور مالیاتی</h2></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>مهلت مجاز لغو رزرو قبل از نوبت (به ساعت)</label><input${ssrRenderAttr("value", unref(form).cancel_booking_hours)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}><span class="text-[11px] text-zinc-500 mt-1 block"${_scopeId}>در صورت لغو پس از این زمان، جلسه از حساب ورزشکار کسر می‌گردد.</span></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>درصد مالیات بر ارزش افزوده در فاکتورها (%)</label><input${ssrRenderAttr("value", unref(form).tax_percent)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}><span class="text-[11px] text-zinc-500 mt-1 block"${_scopeId}>اعمال خودکار بر روی فاکتورهای فروشگاه، بوفه و اشتراک‌ها</span></div></div></div></form></div>`);
					} else return [createVNode(unref(Head), { title: "تنظیمات کلان سیستم - Dashlite" }), createVNode("div", { class: "space-y-6 max-w-4xl" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Settings), { class: "w-4 h-4" }), createVNode("span", null, "پیکربندی هسته مرکزی سامانه")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "تنظیمات کلان و فنی سیستم"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "پیکربندی درگاه پرداخت شتابی، ارائه‌دهنده پیامک OTP، مالیات و قوانین رزرو خدمات")
					]), createVNode("button", {
						onClick: save,
						disabled: unref(form).processing,
						class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
					}, [unref(form).processing ? (openBlock(), createBlock(unref(RefreshCw), {
						key: 0,
						class: "w-4 h-4 animate-spin"
					})) : (openBlock(), createBlock(unref(Save), {
						key: 1,
						class: "w-4 h-4 stroke-[2.5]"
					})), createVNode("span", null, toDisplayString(unref(form).processing ? "در حال ذخیره‌سازی..." : "ذخیره تنظیمات سیستم"), 1)], 8, ["disabled"])]), createVNode("form", {
						onSubmit: withModifiers(save, ["prevent"]),
						class: "space-y-5"
					}, [createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5" }, [createVNode("div", { class: "flex items-center gap-2 pb-3 border-b border-zinc-800/80" }, [createVNode(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }), createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "سرویس‌های بانکی و اطلاع‌رسانی")]), createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [createVNode("div", null, [
						createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "ارائه‌دهنده درگاه پرداخت آنلاین"),
						withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => unref(form).gateway_default = $event,
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
						}, [
							createVNode("option", { value: "sandbox" }, "درگاه شبیه‌ساز امن شتابی (محیط آزمایشی Sandbox)"),
							createVNode("option", { value: "zarinpal" }, "زرین‌پال (ZarinPal IPG)"),
							createVNode("option", { value: "offline" }, "پرداخت حضوری با کارتخوان پذیرش باشگاه")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).gateway_default]]),
						createVNode("span", { class: "text-[11px] text-zinc-500 mt-1 block" }, "درگاه پیش‌فرض جهت خرید اشتراک و شارژ کیف‌پول")
					]), createVNode("div", null, [
						createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "ارائه‌دهنده وب‌سرویس پیامک (SMS OTP)"),
						withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => unref(form).sms_provider = $event,
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
						}, [
							createVNode("option", { value: "ippanel" }, "IPPanel / فراپیامک (سامانه پترن سریع)"),
							createVNode("option", { value: "kavenegar" }, "کاوه‌نگار (Kavenegar)"),
							createVNode("option", { value: "log" }, "لاگ فایل سیستم (تست لوکال و بدون مصرف پیامک)")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).sms_provider]]),
						createVNode("span", { class: "text-[11px] text-zinc-500 mt-1 block" }, "ارسال کد تایید ورود اعضا و یادآوری جلسات")
					])])]), createVNode("div", { class: "p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5" }, [createVNode("div", { class: "flex items-center gap-2 pb-3 border-b border-zinc-800/80" }, [createVNode(unref(CalendarClock), { class: "w-4 h-4 text-lime-400" }), createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "قوانین رزرو، تردد و امور مالیاتی")]), createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [createVNode("div", null, [
						createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "مهلت مجاز لغو رزرو قبل از نوبت (به ساعت)"),
						withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).cancel_booking_hours = $event,
							type: "number",
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
						}, null, 8, ["onUpdate:modelValue"]), [[
							vModelText,
							unref(form).cancel_booking_hours,
							void 0,
							{ number: true }
						]]),
						createVNode("span", { class: "text-[11px] text-zinc-500 mt-1 block" }, "در صورت لغو پس از این زمان، جلسه از حساب ورزشکار کسر می‌گردد.")
					]), createVNode("div", null, [
						createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "درصد مالیات بر ارزش افزوده در فاکتورها (%)"),
						withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).tax_percent = $event,
							type: "number",
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
						}, null, 8, ["onUpdate:modelValue"]), [[
							vModelText,
							unref(form).tax_percent,
							void 0,
							{ number: true }
						]]),
						createVNode("span", { class: "text-[11px] text-zinc-500 mt-1 block" }, "اعمال خودکار بر روی فاکتورهای فروشگاه، بوفه و اشتراک‌ها")
					])])])], 32)])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/SuperAdmin/Settings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
