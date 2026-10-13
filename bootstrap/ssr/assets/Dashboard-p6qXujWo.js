import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CreditCard, DollarSign, QrCode, ShieldAlert, TrendingUp, Users } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	props: {
		stats: Object,
		recentPayments: Array,
		recentAuditLogs: Array
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد کل باشگاه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-8"${_scopeId}><div${_scopeId}><h1 class="text-2xl font-black text-white"${_scopeId}>داشبورد جامع مدیریت باشگاه M8</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>دید کلی بر عملکرد، مالی، تردد و اعضای باشگاه</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"${_scopeId}><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between text-zinc-400 mb-2"${_scopeId}><span class="text-xs font-semibold"${_scopeId}>درآمد امروز</span>`);
						_push(ssrRenderComponent(unref(DollarSign), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`</div><div class="text-xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.today_revenue))}</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between text-zinc-400 mb-2"${_scopeId}><span class="text-xs font-semibold"${_scopeId}>درآمد ماه جاری</span>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`</div><div class="text-xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.month_revenue))}</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between text-zinc-400 mb-2"${_scopeId}><span class="text-xs font-semibold"${_scopeId}>اعضای فعال باشگاه</span>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`</div><div class="text-xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.active_members)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>ورزشکار</span></div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between text-zinc-400 mb-2"${_scopeId}><span class="text-xs font-semibold"${_scopeId}>ورود و تردد امروز</span>`);
						_push(ssrRenderComponent(unref(QrCode), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`</div><div class="text-xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.today_attendances)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>نفر</span></div></div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"${_scopeId}><div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>اشتراک‌های در شرف انقضا</span><div class="text-base font-bold text-amber-400 mt-1"${_scopeId}>${ssrInterpolate(__props.stats.expiring_soon)} نفر</div></div><div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>سفارش‌های در جریان بوفه/فروشگاه</span><div class="text-base font-bold text-white mt-1"${_scopeId}>${ssrInterpolate(__props.stats.pending_orders)} سفارش</div></div><div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>نوبت‌های رزرو امروز</span><div class="text-base font-bold text-white mt-1"${_scopeId}>${ssrInterpolate(__props.stats.today_bookings)} نوبت</div></div><div class="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>سرنخ‌های جدید مشاوره</span><div class="text-base font-bold text-lime-400 mt-1"${_scopeId}>${ssrInterpolate(__props.stats.new_leads)} درخواست</div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6"${_scopeId}><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><h3 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تراکنش‌های اخیر مالی</span></h3>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/reports",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`مشاهده همه`);
								else return [createTextVNode("مشاهده همه")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="space-y-3"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentPayments, (pay) => {
							_push(`<div class="p-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs"${_scopeId}><div${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(pay.user?.full_name || "کاربر")}</span><span class="text-zinc-500 font-mono block text-[10px]"${_scopeId}>${ssrInterpolate(pay.method)} • ${ssrInterpolate(pay.status)}</span></div><div class="text-left font-mono font-bold text-lime-400"${_scopeId}>${ssrInterpolate(unref(formatPrice)(pay.amount))}</div></div>`);
						});
						_push(`<!--]-->`);
						if (__props.recentPayments.length === 0) _push(`<div class="p-4 text-center text-xs text-zinc-500"${_scopeId}> تراکنشی ثبت نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><h3 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShieldAlert), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>گزارش فعالیت‌های اخیر (Audit)</span></h3>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/audit",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`مشاهده همه`);
								else return [createTextVNode("مشاهده همه")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="space-y-3"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentAuditLogs, (log) => {
							_push(`<div class="p-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="text-zinc-200 font-medium"${_scopeId}>${ssrInterpolate(log.action)}</span><span class="text-[10px] text-zinc-500"${_scopeId}>${ssrInterpolate(log.user?.full_name)} (${ssrInterpolate(log.role_key || "عمومی")})</span></div><span class="text-[10px] text-zinc-500 font-mono"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(log.created_at))}</span></div>`);
						});
						_push(`<!--]--></div></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد کل باشگاه" }), createVNode("div", { class: "space-y-8" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-2xl font-black text-white" }, "داشبورد جامع مدیریت باشگاه M8"), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "دید کلی بر عملکرد، مالی، تردد و اعضای باشگاه")]),
						createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between text-zinc-400 mb-2" }, [createVNode("span", { class: "text-xs font-semibold" }, "درآمد امروز"), createVNode(unref(DollarSign), { class: "w-4 h-4 text-lime-400" })]), createVNode("div", { class: "text-xl font-black text-white font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.today_revenue)), 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between text-zinc-400 mb-2" }, [createVNode("span", { class: "text-xs font-semibold" }, "درآمد ماه جاری"), createVNode(unref(TrendingUp), { class: "w-4 h-4 text-lime-400" })]), createVNode("div", { class: "text-xl font-black text-white font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.month_revenue)), 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between text-zinc-400 mb-2" }, [createVNode("span", { class: "text-xs font-semibold" }, "اعضای فعال باشگاه"), createVNode(unref(Users), { class: "w-4 h-4 text-lime-400" })]), createVNode("div", { class: "text-xl font-black text-white font-mono" }, [createTextVNode(toDisplayString(__props.stats.active_members) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "ورزشکار")])]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between text-zinc-400 mb-2" }, [createVNode("span", { class: "text-xs font-semibold" }, "ورود و تردد امروز"), createVNode(unref(QrCode), { class: "w-4 h-4 text-lime-400" })]), createVNode("div", { class: "text-xl font-black text-white font-mono" }, [createTextVNode(toDisplayString(__props.stats.today_attendances) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "نفر")])])
						]),
						createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "اشتراک‌های در شرف انقضا"), createVNode("div", { class: "text-base font-bold text-amber-400 mt-1" }, toDisplayString(__props.stats.expiring_soon) + " نفر", 1)]),
							createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "سفارش‌های در جریان بوفه/فروشگاه"), createVNode("div", { class: "text-base font-bold text-white mt-1" }, toDisplayString(__props.stats.pending_orders) + " سفارش", 1)]),
							createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "نوبت‌های رزرو امروز"), createVNode("div", { class: "text-base font-bold text-white mt-1" }, toDisplayString(__props.stats.today_bookings) + " نوبت", 1)]),
							createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "سرنخ‌های جدید مشاوره"), createVNode("div", { class: "text-base font-bold text-lime-400 mt-1" }, toDisplayString(__props.stats.new_leads) + " درخواست", 1)])
						]),
						createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("h3", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "تراکنش‌های اخیر مالی")]), createVNode(unref(Link), {
							href: "/panel/super_admin/reports",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx(() => [createTextVNode("مشاهده همه")]),
							_: 1
						})]), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentPayments, (pay) => {
							return openBlock(), createBlock("div", {
								key: pay.id,
								class: "p-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs"
							}, [createVNode("div", null, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(pay.user?.full_name || "کاربر"), 1), createVNode("span", { class: "text-zinc-500 font-mono block text-[10px]" }, toDisplayString(pay.method) + " • " + toDisplayString(pay.status), 1)]), createVNode("div", { class: "text-left font-mono font-bold text-lime-400" }, toDisplayString(unref(formatPrice)(pay.amount)), 1)]);
						}), 128)), __props.recentPayments.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-4 text-center text-xs text-zinc-500"
						}, " تراکنشی ثبت نشده است. ")) : createCommentVNode("", true)])]), createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("h3", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode(unref(ShieldAlert), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "گزارش فعالیت‌های اخیر (Audit)")]), createVNode(unref(Link), {
							href: "/panel/super_admin/audit",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx(() => [createTextVNode("مشاهده همه")]),
							_: 1
						})]), createVNode("div", { class: "space-y-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentAuditLogs, (log) => {
							return openBlock(), createBlock("div", {
								key: log.id,
								class: "p-3 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs"
							}, [createVNode("div", { class: "flex flex-col" }, [createVNode("span", { class: "text-zinc-200 font-medium" }, toDisplayString(log.action), 1), createVNode("span", { class: "text-[10px] text-zinc-500" }, toDisplayString(log.user?.full_name) + " (" + toDisplayString(log.role_key || "عمومی") + ")", 1)]), createVNode("span", { class: "text-[10px] text-zinc-500 font-mono" }, toDisplayString(unref(formatJalaliDateTime)(log.created_at)), 1)]);
						}), 128))])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/SuperAdmin/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
