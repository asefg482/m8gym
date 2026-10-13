import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Activity, CreditCard, DollarSign, FileText, Plus, QrCode, ShieldAlert, TrendingUp, Users } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد جامع مدیریت باشگاه - M8 FIT CLUB" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Activity), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>داشبورد جامع مدیریت باشگاه M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> دید کلی بر شاخص‌های مالی، اعضای فعال، گیت تردد، فروشگاه و رویدادهای سیستمی </p></div><div class="flex items-center gap-2.5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/reports",
							class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(FileText), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>گزارشات مالی</span>`);
								} else return [createVNode(unref(FileText), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "گزارشات مالی")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/users",
							class: "px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-lime-400/20"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>ثبت عضو جدید</span>`);
								} else return [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "ثبت عضو جدید")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><span class="text-xs font-bold text-zinc-400"${_scopeId}>درآمد امروز</span><div class="w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(DollarSign), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div></div><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.today_revenue))}</div></div><div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]"${_scopeId}><span class="text-emerald-400 font-bold flex items-center gap-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-3 h-3" }, null, _parent, _scopeId));
						_push(` تراکنش‌های موفق </span><span class="text-zinc-500 font-mono"${_scopeId}>شاپرک و POS</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><span class="text-xs font-bold text-zinc-400"${_scopeId}>درآمد ماه جاری</span><div class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div></div><div class="text-2xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.month_revenue))}</div></div><div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]"${_scopeId}><span class="text-zinc-400"${_scopeId}>مجموع اشتراک و خدمات</span><span class="text-lime-400 font-bold font-mono"${_scopeId}>M8 Finance</span></div></div><div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><span class="text-xs font-bold text-zinc-400"${_scopeId}>اعضای فعال باشگاه</span><div class="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div></div><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.active_members)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>ورزشکار</span></div></div><div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]"${_scopeId}><span class="text-zinc-400"${_scopeId}>دارای اشتراک معتبر</span>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/users",
							class: "text-lime-400 font-bold hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`لیست اعضا ←`);
								else return [createTextVNode("لیست اعضا ←")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><span class="text-xs font-bold text-zinc-400"${_scopeId}>تردد و ورود امروز</span><div class="w-8 h-8 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center"${_scopeId}>`);
						_push(ssrRenderComponent(unref(QrCode), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div></div><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.today_attendances)} <span class="text-xs font-normal text-zinc-400"${_scopeId}>نفر</span></div></div><div class="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]"${_scopeId}><span class="text-emerald-400 font-bold"${_scopeId}>● گیت فعال</span>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/attendances",
							class: "text-lime-400 font-bold hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`لاگ تردد ←`);
								else return [createTextVNode("لاگ تردد ←")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"${_scopeId}><div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>اشتراک‌های رو به انقضا</span><div class="text-lg font-black text-amber-400 font-mono mt-1"${_scopeId}>${ssrInterpolate(__props.stats.expiring_soon)} نفر</div></div><div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>سفارش‌های در جریان بوفه</span><div class="text-lg font-black text-white font-mono mt-1"${_scopeId}>${ssrInterpolate(__props.stats.pending_orders)} سفارش</div></div><div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>نوبت‌های رزرو امروز</span><div class="text-lg font-black text-purple-400 font-mono mt-1"${_scopeId}>${ssrInterpolate(__props.stats.today_bookings)} نوبت</div></div><div class="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between"${_scopeId}><span class="text-[11px] text-zinc-400"${_scopeId}>سرنخ‌های جدید مشاوره</span><div class="text-lg font-black text-lime-400 font-mono mt-1"${_scopeId}>${ssrInterpolate(__props.stats.new_leads)} پیام</div></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"${_scopeId}><div class="lg:col-span-7 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-zinc-800/80"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h2 class="text-sm font-bold text-white"${_scopeId}>آخرین تراکنش‌ها و پرداخت‌ها</h2></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/reports",
							class: "text-xs font-bold text-lime-400 hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` گزارش کامل → `);
								else return [createTextVNode(" گزارش کامل → ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-3 font-bold"${_scopeId}>کاربر</th><th class="p-3 font-bold"${_scopeId}>بابت</th><th class="p-3 font-bold"${_scopeId}>مبلغ</th><th class="p-3 font-bold"${_scopeId}>روش</th><th class="p-3 font-bold"${_scopeId}>زمان</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentPayments, (pay) => {
							_push(`<tr class="hover:bg-zinc-800/20 transition-colors"${_scopeId}><td class="p-3 font-sans font-bold text-white"${_scopeId}>${ssrInterpolate(pay.user?.full_name || "کاربر سیستم")}</td><td class="p-3 font-sans text-zinc-300"${_scopeId}>${ssrInterpolate(pay.payable_type?.split("\\").pop())}</td><td class="p-3 text-lime-400 font-bold"${_scopeId}>${ssrInterpolate(unref(formatPrice)(pay.amount))}</td><td class="p-3 font-sans text-zinc-400"${_scopeId}><span class="px-2 py-0.5 rounded-md text-[10px] bg-zinc-950 border border-zinc-800"${_scopeId}>${ssrInterpolate(pay.method === "online" ? "شاپرک" : "کارتخوان")}</span></td><td class="p-3 text-zinc-500 text-[11px]"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(pay.created_at))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table>`);
						if (!__props.recentPayments || __props.recentPayments.length === 0) _push(`<div class="p-8 text-center text-xs text-zinc-500 font-sans"${_scopeId}> تراکنشی یافت نشد. </div>`);
						else _push(`<!---->`);
						_push(`</div></div><div class="lg:col-span-5 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-zinc-800/80"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShieldAlert), { class: "w-4 h-4 text-purple-400" }, null, _parent, _scopeId));
						_push(`<h2 class="text-sm font-bold text-white"${_scopeId}>رویدادهای امنیتی و تغییرات</h2></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/audit",
							class: "text-xs font-bold text-lime-400 hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(` مشاهده لاگ‌ها `);
								else return [createTextVNode(" مشاهده لاگ‌ها ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentAuditLogs, (log) => {
							_push(`<div class="py-3 px-1 text-xs space-y-1"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(log.action)}</span><span class="font-mono text-[10px] text-zinc-500"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(log.created_at))}</span></div><p class="text-zinc-400 text-[11px] line-clamp-1"${_scopeId}>${ssrInterpolate(log.description)}</p></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.recentAuditLogs || __props.recentAuditLogs.length === 0) _push(`<div class="p-8 text-center text-xs text-zinc-500"${_scopeId}> رویداد جدیدی ثبت نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد جامع مدیریت باشگاه - M8 FIT CLUB" }), createVNode("div", { class: "space-y-6 sm:space-y-8 max-w-7xl mx-auto" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800/80" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5" }, [createVNode(unref(Activity), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "داشبورد جامع مدیریت باشگاه M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " دید کلی بر شاخص‌های مالی، اعضای فعال، گیت تردد، فروشگاه و رویدادهای سیستمی ")]), createVNode("div", { class: "flex items-center gap-2.5" }, [createVNode(unref(Link), {
							href: "/panel/super_admin/reports",
							class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
						}, {
							default: withCtx(() => [createVNode(unref(FileText), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "گزارشات مالی")]),
							_: 1
						}), createVNode(unref(Link), {
							href: "/panel/super_admin/users",
							class: "px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-lime-400/20"
						}, {
							default: withCtx(() => [createVNode(unref(Plus), { class: "w-4 h-4" }), createVNode("span", null, "ثبت عضو جدید")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" }, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors" }, [createVNode("div", null, [createVNode("div", { class: "flex items-center justify-between mb-3" }, [createVNode("span", { class: "text-xs font-bold text-zinc-400" }, "درآمد امروز"), createVNode("div", { class: "w-8 h-8 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center" }, [createVNode(unref(DollarSign), { class: "w-4 h-4" })])]), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.today_revenue)), 1)]), createVNode("div", { class: "pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]" }, [createVNode("span", { class: "text-emerald-400 font-bold flex items-center gap-1" }, [createVNode(unref(TrendingUp), { class: "w-3 h-3" }), createTextVNode(" تراکنش‌های موفق ")]), createVNode("span", { class: "text-zinc-500 font-mono" }, "شاپرک و POS")])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors" }, [createVNode("div", null, [createVNode("div", { class: "flex items-center justify-between mb-3" }, [createVNode("span", { class: "text-xs font-bold text-zinc-400" }, "درآمد ماه جاری"), createVNode("div", { class: "w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center" }, [createVNode(unref(TrendingUp), { class: "w-4 h-4" })])]), createVNode("div", { class: "text-2xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.month_revenue)), 1)]), createVNode("div", { class: "pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]" }, [createVNode("span", { class: "text-zinc-400" }, "مجموع اشتراک و خدمات"), createVNode("span", { class: "text-lime-400 font-bold font-mono" }, "M8 Finance")])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors" }, [createVNode("div", null, [createVNode("div", { class: "flex items-center justify-between mb-3" }, [createVNode("span", { class: "text-xs font-bold text-zinc-400" }, "اعضای فعال باشگاه"), createVNode("div", { class: "w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center" }, [createVNode(unref(Users), { class: "w-4 h-4" })])]), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, [createTextVNode(toDisplayString(__props.stats.active_members) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "ورزشکار")])]), createVNode("div", { class: "pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]" }, [createVNode("span", { class: "text-zinc-400" }, "دارای اشتراک معتبر"), createVNode(unref(Link), {
								href: "/panel/super_admin/users",
								class: "text-lime-400 font-bold hover:underline"
							}, {
								default: withCtx(() => [createTextVNode("لیست اعضا ←")]),
								_: 1
							})])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between hover:border-zinc-700 transition-colors" }, [createVNode("div", null, [createVNode("div", { class: "flex items-center justify-between mb-3" }, [createVNode("span", { class: "text-xs font-bold text-zinc-400" }, "تردد و ورود امروز"), createVNode("div", { class: "w-8 h-8 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center" }, [createVNode(unref(QrCode), { class: "w-4 h-4" })])]), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, [createTextVNode(toDisplayString(__props.stats.today_attendances) + " ", 1), createVNode("span", { class: "text-xs font-normal text-zinc-400" }, "نفر")])]), createVNode("div", { class: "pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]" }, [createVNode("span", { class: "text-emerald-400 font-bold" }, "● گیت فعال"), createVNode(unref(Link), {
								href: "/panel/super_admin/attendances",
								class: "text-lime-400 font-bold hover:underline"
							}, {
								default: withCtx(() => [createTextVNode("لاگ تردد ←")]),
								_: 1
							})])])
						]),
						createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "اشتراک‌های رو به انقضا"), createVNode("div", { class: "text-lg font-black text-amber-400 font-mono mt-1" }, toDisplayString(__props.stats.expiring_soon) + " نفر", 1)]),
							createVNode("div", { class: "p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "سفارش‌های در جریان بوفه"), createVNode("div", { class: "text-lg font-black text-white font-mono mt-1" }, toDisplayString(__props.stats.pending_orders) + " سفارش", 1)]),
							createVNode("div", { class: "p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "نوبت‌های رزرو امروز"), createVNode("div", { class: "text-lg font-black text-purple-400 font-mono mt-1" }, toDisplayString(__props.stats.today_bookings) + " نوبت", 1)]),
							createVNode("div", { class: "p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex flex-col justify-between" }, [createVNode("span", { class: "text-[11px] text-zinc-400" }, "سرنخ‌های جدید مشاوره"), createVNode("div", { class: "text-lg font-black text-lime-400 font-mono mt-1" }, toDisplayString(__props.stats.new_leads) + " پیام", 1)])
						]),
						createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6" }, [createVNode("div", { class: "lg:col-span-7 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4" }, [createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-zinc-800/80" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }), createVNode("h2", { class: "text-sm font-bold text-white" }, "آخرین تراکنش‌ها و پرداخت‌ها")]), createVNode(unref(Link), {
							href: "/panel/super_admin/reports",
							class: "text-xs font-bold text-lime-400 hover:underline"
						}, {
							default: withCtx(() => [createTextVNode(" گزارش کامل → ")]),
							_: 1
						})]), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-3 font-bold" }, "کاربر"),
							createVNode("th", { class: "p-3 font-bold" }, "بابت"),
							createVNode("th", { class: "p-3 font-bold" }, "مبلغ"),
							createVNode("th", { class: "p-3 font-bold" }, "روش"),
							createVNode("th", { class: "p-3 font-bold" }, "زمان")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentPayments, (pay) => {
							return openBlock(), createBlock("tr", {
								key: pay.id,
								class: "hover:bg-zinc-800/20 transition-colors"
							}, [
								createVNode("td", { class: "p-3 font-sans font-bold text-white" }, toDisplayString(pay.user?.full_name || "کاربر سیستم"), 1),
								createVNode("td", { class: "p-3 font-sans text-zinc-300" }, toDisplayString(pay.payable_type?.split("\\").pop()), 1),
								createVNode("td", { class: "p-3 text-lime-400 font-bold" }, toDisplayString(unref(formatPrice)(pay.amount)), 1),
								createVNode("td", { class: "p-3 font-sans text-zinc-400" }, [createVNode("span", { class: "px-2 py-0.5 rounded-md text-[10px] bg-zinc-950 border border-zinc-800" }, toDisplayString(pay.method === "online" ? "شاپرک" : "کارتخوان"), 1)]),
								createVNode("td", { class: "p-3 text-zinc-500 text-[11px]" }, toDisplayString(unref(formatJalaliDateTime)(pay.created_at)), 1)
							]);
						}), 128))])]), !__props.recentPayments || __props.recentPayments.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-8 text-center text-xs text-zinc-500 font-sans"
						}, " تراکنشی یافت نشد. ")) : createCommentVNode("", true)])]), createVNode("div", { class: "lg:col-span-5 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-sm space-y-4" }, [createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-zinc-800/80" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(ShieldAlert), { class: "w-4 h-4 text-purple-400" }), createVNode("h2", { class: "text-sm font-bold text-white" }, "رویدادهای امنیتی و تغییرات")]), createVNode(unref(Link), {
							href: "/panel/super_admin/audit",
							class: "text-xs font-bold text-lime-400 hover:underline"
						}, {
							default: withCtx(() => [createTextVNode(" مشاهده لاگ‌ها ")]),
							_: 1
						})]), createVNode("div", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentAuditLogs, (log) => {
							return openBlock(), createBlock("div", {
								key: log.id,
								class: "py-3 px-1 text-xs space-y-1"
							}, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(log.action), 1), createVNode("span", { class: "font-mono text-[10px] text-zinc-500" }, toDisplayString(unref(formatJalaliDateTime)(log.created_at)), 1)]), createVNode("p", { class: "text-zinc-400 text-[11px] line-clamp-1" }, toDisplayString(log.description), 1)]);
						}), 128)), !__props.recentAuditLogs || __props.recentAuditLogs.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-8 text-center text-xs text-zinc-500"
						}, " رویداد جدیدی ثبت نشده است. ")) : createCommentVNode("", true)])])])
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
