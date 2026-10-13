import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Clock, Scissors, Sparkles } from "@lucide/vue";
//#region resources/js/Pages/Panel/Member/Bookings.vue
var _sfc_main = {
	__name: "Bookings",
	__ssrInlineRender: true,
	props: { bookings: Array },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "نوبت‌های رزرو من" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>نوبت‌های رزرو من (ماساژ و پیرایشگاه)</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت نوبت‌ها و پیگیری وضعیت خدمات</p></div><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/massage",
							class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400 hover:border-lime-400/50"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` + رزرو ماساژ `);
								else return [createTextVNode(" + رزرو ماساژ ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: "/hairdresser",
							class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400 hover:border-lime-400/50"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` + رزرو آرایشگاه `);
								else return [createTextVNode(" + رزرو آرایشگاه ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl"${_scopeId}><div class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.bookings, (b) => {
							_push(`<div class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-800/20"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lime-400 shrink-0"${_scopeId}>`);
							if (b.service?.category === "massage") _push(ssrRenderComponent(unref(Sparkles), { class: "w-6 h-6" }, null, _parent, _scopeId));
							else _push(ssrRenderComponent(unref(Scissors), { class: "w-6 h-6" }, null, _parent, _scopeId));
							_push(`</div><div${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(b.service?.title)}</h3><p class="text-xs text-zinc-400 mt-0.5"${_scopeId}>متخصص: ${ssrInterpolate(b.provider?.full_name)}</p><span class="text-[11px] text-zinc-500 font-mono block mt-1"${_scopeId}> زمان رزرو: ${ssrInterpolate(unref(formatJalaliDateTime)(b.starts_at))}</span></div></div><div class="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-800"${_scopeId}><div class="font-mono text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(unref(formatPrice)(b.price))}</div><span class="${ssrRenderClass([{
								"bg-lime-400/10 text-lime-400": b.status === "confirmed",
								"bg-amber-400/10 text-amber-400": b.status === "pending",
								"bg-zinc-800 text-zinc-400": b.status === "completed",
								"bg-red-400/10 text-red-400": b.status === "cancelled"
							}, "px-3 py-1 rounded-full text-xs font-bold"])}"${_scopeId}>${ssrInterpolate(b.status === "confirmed" ? "تایید شده" : b.status === "pending" ? "در انتظار بررسی" : b.status === "completed" ? "انجام شد" : "لغو شده")}</span></div></div>`);
						});
						_push(`<!--]-->`);
						if (__props.bookings.length === 0) _push(`<div class="p-16 text-center text-xs text-zinc-500"${_scopeId}> شما نوبت ثبت‌شده‌ای ندارید. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div>`);
					} else return [createVNode(unref(Head), { title: "نوبت‌های رزرو من" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Clock), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "نوبت‌های رزرو من (ماساژ و پیرایشگاه)")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت نوبت‌ها و پیگیری وضعیت خدمات")]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(Link), {
						href: "/massage",
						class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400 hover:border-lime-400/50"
					}, {
						default: withCtx(() => [createTextVNode(" + رزرو ماساژ ")]),
						_: 1
					}), createVNode(unref(Link), {
						href: "/hairdresser",
						class: "px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-lime-400 hover:border-lime-400/50"
					}, {
						default: withCtx(() => [createTextVNode(" + رزرو آرایشگاه ")]),
						_: 1
					})])]), createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl" }, [createVNode("div", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.bookings, (b) => {
						return openBlock(), createBlock("div", {
							key: b.id,
							class: "p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-800/20"
						}, [createVNode("div", { class: "flex items-start gap-4" }, [createVNode("div", { class: "w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lime-400 shrink-0" }, [b.service?.category === "massage" ? (openBlock(), createBlock(unref(Sparkles), {
							key: 0,
							class: "w-6 h-6"
						})) : (openBlock(), createBlock(unref(Scissors), {
							key: 1,
							class: "w-6 h-6"
						}))]), createVNode("div", null, [
							createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(b.service?.title), 1),
							createVNode("p", { class: "text-xs text-zinc-400 mt-0.5" }, "متخصص: " + toDisplayString(b.provider?.full_name), 1),
							createVNode("span", { class: "text-[11px] text-zinc-500 font-mono block mt-1" }, " زمان رزرو: " + toDisplayString(unref(formatJalaliDateTime)(b.starts_at)), 1)
						])]), createVNode("div", { class: "flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-800" }, [createVNode("div", { class: "font-mono text-sm font-bold text-white" }, toDisplayString(unref(formatPrice)(b.price)), 1), createVNode("span", { class: ["px-3 py-1 rounded-full text-xs font-bold", {
							"bg-lime-400/10 text-lime-400": b.status === "confirmed",
							"bg-amber-400/10 text-amber-400": b.status === "pending",
							"bg-zinc-800 text-zinc-400": b.status === "completed",
							"bg-red-400/10 text-red-400": b.status === "cancelled"
						}] }, toDisplayString(b.status === "confirmed" ? "تایید شده" : b.status === "pending" ? "در انتظار بررسی" : b.status === "completed" ? "انجام شد" : "لغو شده"), 3)])]);
					}), 128)), __props.bookings.length === 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "p-16 text-center text-xs text-zinc-500"
					}, " شما نوبت ثبت‌شده‌ای ندارید. ")) : createCommentVNode("", true)])])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Member/Bookings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
