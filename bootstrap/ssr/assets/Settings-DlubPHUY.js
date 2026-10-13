import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { createBlock, createVNode, openBlock, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { RefreshCw, Save, Settings } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "تنظیمات کلان سیستم" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 max-w-4xl"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Settings), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تنظیمات کلان و فنی سیستم</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>پیکربندی درگاه پرداخت، سرویس پیامک و قوانین رزرو</p></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50"${_scopeId}>`);
						if (unref(form).processing) _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(Save), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ذخیره تنظیمات</span></button></div><form class="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>ارائه‌دهنده درگاه پرداخت</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value="sandbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gateway_default) ? ssrLooseContain(unref(form).gateway_default, "sandbox") : ssrLooseEqual(unref(form).gateway_default, "sandbox")) ? " selected" : ""}${_scopeId}>درگاه شبیه‌ساز امن (تستی)</option><option value="zarinpal"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gateway_default) ? ssrLooseContain(unref(form).gateway_default, "zarinpal") : ssrLooseEqual(unref(form).gateway_default, "zarinpal")) ? " selected" : ""}${_scopeId}>زرین‌پال (ZarinPal)</option><option value="offline"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gateway_default) ? ssrLooseContain(unref(form).gateway_default, "offline") : ssrLooseEqual(unref(form).gateway_default, "offline")) ? " selected" : ""}${_scopeId}>پرداخت حضوری / کارتخوان</option></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>ارائه‌دهنده پیامک (SMS)</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value="log"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sms_provider) ? ssrLooseContain(unref(form).sms_provider, "log") : ssrLooseEqual(unref(form).sms_provider, "log")) ? " selected" : ""}${_scopeId}>لاگ سیستم (محیط توسعه و تست)</option><option value="kavenegar"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sms_provider) ? ssrLooseContain(unref(form).sms_provider, "kavenegar") : ssrLooseEqual(unref(form).sms_provider, "kavenegar")) ? " selected" : ""}${_scopeId}>کاوه نگار (Kavenegar)</option><option value="ippanel"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sms_provider) ? ssrLooseContain(unref(form).sms_provider, "ippanel") : ssrLooseEqual(unref(form).sms_provider, "ippanel")) ? " selected" : ""}${_scopeId}>IPPanel / فراپیامک</option></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>مهلت لغو رزرو قبل از نوبت (ساعت)</label><input${ssrRenderAttr("value", unref(form).cancel_booking_hours)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>درصد مالیات بر ارزش افزوده (%)</label><input${ssrRenderAttr("value", unref(form).tax_percent)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"${_scopeId}></div></div></form></div>`);
					} else return [createVNode(unref(Head), { title: "تنظیمات کلان سیستم" }), createVNode("div", { class: "space-y-6 max-w-4xl" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Settings), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "تنظیمات کلان و فنی سیستم")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "پیکربندی درگاه پرداخت، سرویس پیامک و قوانین رزرو")]), createVNode("button", {
						onClick: save,
						disabled: unref(form).processing,
						class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50"
					}, [unref(form).processing ? (openBlock(), createBlock(unref(RefreshCw), {
						key: 0,
						class: "w-4 h-4 animate-spin"
					})) : (openBlock(), createBlock(unref(Save), {
						key: 1,
						class: "w-4 h-4"
					})), createVNode("span", null, "ذخیره تنظیمات")], 8, ["disabled"])]), createVNode("form", {
						onSubmit: withModifiers(save, ["prevent"]),
						class: "p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6"
					}, [createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "ارائه‌دهنده درگاه پرداخت"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => unref(form).gateway_default = $event,
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
						}, [
							createVNode("option", { value: "sandbox" }, "درگاه شبیه‌ساز امن (تستی)"),
							createVNode("option", { value: "zarinpal" }, "زرین‌پال (ZarinPal)"),
							createVNode("option", { value: "offline" }, "پرداخت حضوری / کارتخوان")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).gateway_default]])]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "ارائه‌دهنده پیامک (SMS)"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => unref(form).sms_provider = $event,
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
						}, [
							createVNode("option", { value: "log" }, "لاگ سیستم (محیط توسعه و تست)"),
							createVNode("option", { value: "kavenegar" }, "کاوه نگار (Kavenegar)"),
							createVNode("option", { value: "ippanel" }, "IPPanel / فراپیامک")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).sms_provider]])]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "مهلت لغو رزرو قبل از نوبت (ساعت)"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).cancel_booking_hours = $event,
							type: "number",
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"
						}, null, 8, ["onUpdate:modelValue"]), [[
							vModelText,
							unref(form).cancel_booking_hours,
							void 0,
							{ number: true }
						]])]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "درصد مالیات بر ارزش افزوده (%)"), withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => unref(form).tax_percent = $event,
							type: "number",
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white font-mono"
						}, null, 8, ["onUpdate:modelValue"]), [[
							vModelText,
							unref(form).tax_percent,
							void 0,
							{ number: true }
						]])])
					])], 32)])];
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
