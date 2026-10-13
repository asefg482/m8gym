import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ChevronLeft, Clock, Dumbbell, Phone, Plus, TrendingUp, Users, Wallet } from "@lucide/vue";
//#region resources/js/Pages/Panel/Trainer/Dashboard.vue
var _sfc_main = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	props: {
		trainer: Object,
		stats: Object,
		recentStudents: Array
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد مربی - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پنل مدیریت مربیان مجرب M8</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>داشبورد اختصاصی مربی</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت شاگردان تحت پوشش، طراحی برنامه‌های تمرین و تغذیه و پیگیری کمیسیون‌های ماهانه</p></div><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/trainer/workout_plans",
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>تنظیم برنامه جدید</span>`);
								} else return [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "تنظیم برنامه جدید")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>شاگردان فعال</span><div class="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.active_students)} نفر</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-lime-400"${_scopeId}></span><span${_scopeId}>تحت نظارت و مربیگری مستقیم</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>برنامه‌های در جریان</span><div class="w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.active_plans)} برنامه</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-blue-400"${_scopeId}></span><span${_scopeId}>تمرینی و تغذیه‌ای معتبر</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>درآمد ماه جاری (کمیسیون)</span><div class="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Wallet), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.monthly_income))}</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(TrendingUp), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سهم مربی از بسته‌های آموزشی</span></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs text-zinc-400 font-medium"${_scopeId}>در انتظار تسویه مالی</span><div class="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-5 h-5" }, null, _parent, _scopeId));
						_push(`</div></div><div class="mt-3"${_scopeId}><div class="text-xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.pending_settlement))}</div><div class="text-[11px] text-zinc-500 mt-1 flex items-center gap-1"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-400"${_scopeId}></span><span${_scopeId}>آماده واریز در سررسید ماه</span></div></div></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<h3 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>شاگردان اخیر</h3></div>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/trainer/students",
							class: "text-xs text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span${_scopeId}>مشاهده همه شاگردان</span>`);
									_push(ssrRenderComponent(unref(ChevronLeft), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
								} else return [createVNode("span", null, "مشاهده همه شاگردان"), createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentStudents, (st) => {
							_push(`<div class="p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0"${_scopeId}>${ssrInterpolate(st.student?.first_name ? st.student.first_name.charAt(0) : "S")}</div><div${_scopeId}><span class="font-bold text-white text-xs sm:text-sm block"${_scopeId}>${ssrInterpolate(st.student?.full_name)}</span><span class="text-zinc-500 font-mono text-[11px] flex items-center gap-1 mt-0.5" dir="ltr"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Phone), { class: "w-3 h-3 text-zinc-600 inline" }, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(st.student?.mobile)}</span></div></div><div class="flex items-center gap-3"${_scopeId}><span class="${ssrRenderClass([st.student?.active_membership ? "bg-lime-400/10 text-lime-400 border-lime-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20", "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border"])}"${_scopeId}><span class="${ssrRenderClass([st.student?.active_membership ? "bg-lime-400" : "bg-amber-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(st.student?.active_membership ? "اشتراک فعال دارد" : "فاقد اشتراک")}</span>`);
							_push(ssrRenderComponent(unref(Link), {
								href: "/panel/trainer/workout_plans",
								class: "p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs",
								title: "مشاهده برنامه‌ها"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent, _scopeId));
									else return [createVNode(unref(ChevronLeft), { class: "w-4 h-4" })];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div></div>`);
						});
						_push(`<!--]-->`);
						if (!__props.recentStudents || __props.recentStudents.length === 0) _push(`<div class="p-12 text-center text-xs text-zinc-500"${_scopeId}> هنوز شاگردی برای شما در سیستم ثبت نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد مربی - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Dumbbell), { class: "w-4 h-4" }), createVNode("span", null, "پنل مدیریت مربیان مجرب M8")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "داشبورد اختصاصی مربی"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت شاگردان تحت پوشش، طراحی برنامه‌های تمرین و تغذیه و پیگیری کمیسیون‌های ماهانه")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
							href: "/panel/trainer/workout_plans",
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, {
							default: withCtx(() => [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "تنظیم برنامه جدید")]),
							_: 1
						})])]),
						createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "شاگردان فعال"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Users), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.active_students) + " نفر", 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-lime-400" }), createVNode("span", null, "تحت نظارت و مربیگری مستقیم")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "برنامه‌های در جریان"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center font-bold" }, [createVNode(unref(Dumbbell), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.active_plans) + " برنامه", 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-400" }), createVNode("span", null, "تمرینی و تغذیه‌ای معتبر")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "درآمد ماه جاری (کمیسیون)"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center font-bold" }, [createVNode(unref(Wallet), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.monthly_income)), 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode(unref(TrendingUp), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "سهم مربی از بسته‌های آموزشی")])])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg relative overflow-hidden group hover:border-zinc-700/80 transition-all" }, [createVNode("div", { class: "flex items-center justify-between" }, [createVNode("span", { class: "text-xs text-zinc-400 font-medium" }, "در انتظار تسویه مالی"), createVNode("div", { class: "w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold" }, [createVNode(unref(Clock), { class: "w-5 h-5" })])]), createVNode("div", { class: "mt-3" }, [createVNode("div", { class: "text-xl font-black text-amber-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.pending_settlement)), 1), createVNode("div", { class: "text-[11px] text-zinc-500 mt-1 flex items-center gap-1" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-400" }), createVNode("span", null, "آماده واریز در سررسید ماه")])])])
						]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden" }, [createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(Users), { class: "w-4 h-4 text-lime-400" }), createVNode("h3", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "شاگردان اخیر")]), createVNode(unref(Link), {
							href: "/panel/trainer/students",
							class: "text-xs text-lime-400 hover:text-lime-300 font-bold flex items-center gap-1"
						}, {
							default: withCtx(() => [createVNode("span", null, "مشاهده همه شاگردان"), createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" })]),
							_: 1
						})]), createVNode("div", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentStudents, (st) => {
							return openBlock(), createBlock("div", {
								key: st.id,
								class: "p-4 sm:px-6 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
							}, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0" }, toDisplayString(st.student?.first_name ? st.student.first_name.charAt(0) : "S"), 1), createVNode("div", null, [createVNode("span", { class: "font-bold text-white text-xs sm:text-sm block" }, toDisplayString(st.student?.full_name), 1), createVNode("span", {
								class: "text-zinc-500 font-mono text-[11px] flex items-center gap-1 mt-0.5",
								dir: "ltr"
							}, [createVNode(unref(Phone), { class: "w-3 h-3 text-zinc-600 inline" }), createTextVNode(" " + toDisplayString(st.student?.mobile), 1)])])]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("span", { class: ["inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border", st.student?.active_membership ? "bg-lime-400/10 text-lime-400 border-lime-400/20" : "bg-amber-400/10 text-amber-400 border-amber-400/20"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", st.student?.active_membership ? "bg-lime-400" : "bg-amber-400"] }, null, 2), createTextVNode(" " + toDisplayString(st.student?.active_membership ? "اشتراک فعال دارد" : "فاقد اشتراک"), 1)], 2), createVNode(unref(Link), {
								href: "/panel/trainer/workout_plans",
								class: "p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs",
								title: "مشاهده برنامه‌ها"
							}, {
								default: withCtx(() => [createVNode(unref(ChevronLeft), { class: "w-4 h-4" })]),
								_: 1
							})])]);
						}), 128)), !__props.recentStudents || __props.recentStudents.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-12 text-center text-xs text-zinc-500"
						}, " هنوز شاگردی برای شما در سیستم ثبت نشده است. ")) : createCommentVNode("", true)])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Trainer/Dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
