import { t as _sfc_main$1 } from "./FlashMessage-D7IaXkt7.js";
import { createTextVNode, createVNode, onUnmounted, ref, unref, useSSRContext, withCtx } from "vue";
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Phone, RefreshCw, ShieldCheck } from "@lucide/vue";
//#region resources/js/Pages/Auth/Login.vue
var _sfc_main = {
	__name: "Login",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const step = ref("mobile");
		const countdown = ref(60);
		const mobileForm = useForm({ mobile: "" });
		const codeForm = useForm({
			mobile: "",
			code: ""
		});
		onUnmounted(() => {});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), { title: "ورود و ثبت‌نام سریع" }, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			_push(`<div class="min-h-screen bg-zinc-950 flex flex-col justify-center items-center p-4 sm:p-6 selection:bg-lime-400 selection:text-black relative overflow-hidden"><div class="absolute -top-32 -left-32 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div><div class="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div><div class="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative z-10"><div class="flex flex-col items-center text-center mb-8">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "mb-4"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-xl shadow-lime-500/20"${_scopeId}><div class="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center"${_scopeId}><span class="text-2xl font-black text-lime-400 font-sans"${_scopeId}>M8</span></div></div>`);
					else return [createVNode("div", { class: "w-16 h-16 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-xl shadow-lime-500/20" }, [createVNode("div", { class: "w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center" }, [createVNode("span", { class: "text-2xl font-black text-lime-400 font-sans" }, "M8")])])];
				}),
				_: 1
			}, _parent));
			_push(`<h1 class="text-xl font-black text-white">ورود و ثبت‌نام در M8 Fit Club</h1><p class="text-xs text-zinc-400 mt-1">بدون رمز عبور، با تایید پیامکی شماره موبایل</p></div>`);
			if (unref(page).props.flash?.dev_otp) _push(`<div class="mb-5 p-3 rounded-xl bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs flex items-center justify-between"><span>کد تست تایید (محیط آزمایشی):</span><span class="font-mono text-base font-bold tracking-widest">${ssrInterpolate(unref(page).props.flash.dev_otp)}</span></div>`);
			else _push(`<!---->`);
			if (step.value === "mobile") {
				_push(`<form class="space-y-5"><div><label class="block text-xs font-semibold text-zinc-300 mb-2">شماره تلفن همراه</label><div class="relative"><input${ssrRenderAttr("value", unref(mobileForm).mobile)} type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" dir="ltr" autofocus class="w-full h-12 bg-zinc-950 border border-zinc-800 rounded-2xl px-4 pl-11 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-center font-mono tracking-wider transition-colors">`);
				_push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" }, null, _parent));
				_push(`</div>`);
				if (unref(mobileForm).errors.mobile) _push(`<p class="text-xs text-red-400 mt-2 font-medium">${ssrInterpolate(unref(mobileForm).errors.mobile)}</p>`);
				else _push(`<!---->`);
				_push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(mobileForm).processing) ? " disabled" : ""} class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 transition-all cursor-pointer disabled:opacity-50">`);
				if (unref(mobileForm).processing) _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent));
				else _push(`<span>دریافت کد تایید یک‌بار مصرف</span>`);
				_push(`</button><div class="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-[11px] text-zinc-400 space-y-1"><p class="flex items-center gap-1.5 text-zinc-300 font-semibold">`);
				_push(ssrRenderComponent(unref(ShieldCheck), { class: "w-4 h-4 text-lime-400" }, null, _parent));
				_push(` حساب‌های نمونه جهت تست پنل‌ها: </p><p class="font-mono text-zinc-400">ادمین کل: ۰۹۱۱۱۲۳۴۵۶۷ | مدیر سایت: ۰۹۱۱۲۲۲۳۳۳۳</p><p class="font-mono text-zinc-400">مربی: ۰۹۱۱۳۳۳۴۴۴۴ | عضو VIP: ۰۹۱۱۸۸۸۹۹۹۹</p></div></form>`);
			} else {
				_push(`<form class="space-y-5"><div class="text-center pb-1"><p class="text-xs text-zinc-400">کد تایید ۵ رقمی ارسال‌شده به شماره زیر را وارد نمایید:</p><div class="flex items-center justify-center gap-2 mt-1"><span class="font-mono text-sm text-lime-400 font-bold" dir="ltr">${ssrInterpolate(unref(codeForm).mobile)}</span><button type="button" class="text-[11px] text-zinc-500 hover:text-zinc-300 underline cursor-pointer"> (ویرایش شماره) </button></div></div><div><label class="block text-xs font-semibold text-zinc-300 mb-2 text-center">کد تایید پیامک‌شده</label><div class="relative"><input${ssrRenderAttr("value", unref(codeForm).code)} type="text" maxlength="6" placeholder="• • • • •" dir="ltr" autofocus class="w-full h-14 bg-zinc-950 border border-zinc-800 rounded-2xl px-4 text-xl text-lime-400 placeholder-zinc-700 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-center font-mono tracking-[0.5em] transition-colors font-bold"></div>`);
				if (unref(codeForm).errors.code) _push(`<p class="text-xs text-red-400 mt-2 font-medium text-center">${ssrInterpolate(unref(codeForm).errors.code)}</p>`);
				else _push(`<!---->`);
				_push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(codeForm).processing || !unref(codeForm).code) ? " disabled" : ""} class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 transition-all cursor-pointer disabled:opacity-50">`);
				if (unref(codeForm).processing) _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent));
				else _push(`<span>ورود به پلتفرم</span>`);
				_push(`</button><div class="flex items-center justify-between text-xs pt-1">`);
				if (countdown.value === 0) _push(`<button type="button" class="text-lime-400 hover:text-lime-300 font-medium cursor-pointer"> ارسال مجدد کد تایید </button>`);
				else _push(`<span class="text-zinc-500 font-mono"> ارسال مجدد تا ${ssrInterpolate(countdown.value)} ثانیه دیگر </span>`);
				_push(`<button type="button" class="text-zinc-400 hover:text-zinc-200 cursor-pointer"> بازگشت </button></div></form>`);
			}
			_push(`<div class="mt-8 pt-4 border-t border-zinc-800/80 text-center">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "text-xs text-zinc-400 hover:text-lime-400 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` ← بازگشت به صفحه اصلی سایت `);
					else return [createTextVNode(" ← بازگشت به صفحه اصلی سایت ")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div><!--]-->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
