import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Clock, Scissors } from "@lucide/vue";
//#region resources/js/Pages/Panel/Service/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	props: {
		stats: Object,
		upcoming: Array
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد خدمات (ماساژ و پیرایشگاه)" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Scissors), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>داشبورد خدمات، نوبت‌دهی و اسپا</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت نوبت‌های ماساژ ورزشی، آرایشگاه و برنامه‌های زمانی</p></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>نوبت‌های رزرو امروز</span><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.today_bookings)} نوبت</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>در انتظار تایید</span><div class="text-2xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(__props.stats.pending_bookings)} نوبت</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>درآمد خدمات ماه جاری</span><div class="text-2xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.monthly_revenue))}</div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><h3 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>نوبت‌های رزرو پیش‌رو</span></h3>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/service/bookings",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`مشاهده همه نوبت‌ها`);
								else return [createTextVNode("مشاهده همه نوبت‌ها")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.upcoming, (b) => {
							_push(`<div class="py-3 flex items-center justify-between text-xs"${_scopeId}><div${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(b.member?.full_name)}</span><span class="text-zinc-400 block text-[11px]"${_scopeId}>${ssrInterpolate(b.service?.title)}</span></div><div class="text-left font-mono"${_scopeId}><span class="text-zinc-300 block"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(b.starts_at))}</span><span class="text-lime-400 font-bold text-[10px]"${_scopeId}>${ssrInterpolate(b.status)}</span></div></div>`);
						});
						_push(`<!--]--></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد خدمات (ماساژ و پیرایشگاه)" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Scissors), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "داشبورد خدمات، نوبت‌دهی و اسپا")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت نوبت‌های ماساژ ورزشی، آرایشگاه و برنامه‌های زمانی")]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "نوبت‌های رزرو امروز"), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.today_bookings) + " نوبت", 1)]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "در انتظار تایید"), createVNode("div", { class: "text-2xl font-black text-amber-400 font-mono" }, toDisplayString(__props.stats.pending_bookings) + " نوبت", 1)]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "درآمد خدمات ماه جاری"), createVNode("div", { class: "text-2xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.monthly_revenue)), 1)])
						]),
						createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("h3", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode(unref(Clock), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "نوبت‌های رزرو پیش‌رو")]), createVNode(unref(Link), {
							href: "/panel/service/bookings",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx(() => [createTextVNode("مشاهده همه نوبت‌ها")]),
							_: 1
						})]), createVNode("div", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.upcoming, (b) => {
							return openBlock(), createBlock("div", {
								key: b.id,
								class: "py-3 flex items-center justify-between text-xs"
							}, [createVNode("div", null, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(b.member?.full_name), 1), createVNode("span", { class: "text-zinc-400 block text-[11px]" }, toDisplayString(b.service?.title), 1)]), createVNode("div", { class: "text-left font-mono" }, [createVNode("span", { class: "text-zinc-300 block" }, toDisplayString(unref(formatJalaliDateTime)(b.starts_at)), 1), createVNode("span", { class: "text-lime-400 font-bold text-[10px]" }, toDisplayString(b.status), 1)])]);
						}), 128))])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Service/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
