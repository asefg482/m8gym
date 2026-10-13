import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { n as formatJalaliDateTime } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-BBik0JPe.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { AlertTriangle, CheckCircle2, Clock, QrCode, UserCheck, Users } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/Attendances.vue
var _sfc_main = {
	__name: "Attendances",
	__ssrInlineRender: true,
	props: {
		attendances: Object,
		todayCount: Number
	},
	setup(__props) {
		const form = useForm({
			mobile: "",
			method: "reception"
		});
		function record() {
			form.post("/panel/super_admin/attendances", {
				preserveScroll: true,
				onSuccess: () => {
					form.reset("mobile");
				}
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "کنترل تردد و حضور و غیاب - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(QrCode), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پذیرش و گیت‌های هوشمند</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>کنترل تردد و حضور و غیاب باشگاه</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>ثبت ورود/خروج اعضا و اعتبارسنجی خودکار اشتراک ورزشی هنگام عبور از گیت</p></div><div class="flex items-center gap-3"${_scopeId}><div class="px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 flex items-center gap-3 shadow-lg"${_scopeId}><div class="w-9 h-9 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</div><div${_scopeId}><span class="text-[10px] text-zinc-400 block font-medium"${_scopeId}>ورودهای امروز:</span><span class="text-base font-black text-white font-mono leading-none"${_scopeId}>${ssrInterpolate(__props.todayCount)} نفر</span></div></div></div></div><div class="p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl backdrop-blur-sm max-w-2xl"${_scopeId}><div class="flex items-center gap-2 mb-3"${_scopeId}><span class="w-2 h-2 rounded-full bg-lime-400 animate-pulse"${_scopeId}></span><h3 class="text-xs font-bold text-white uppercase tracking-wider"${_scopeId}>ثبت تردد سریع (پذیرش / اسکن بارکد یا کارت)</h3></div><form class="flex flex-col sm:flex-row items-stretch gap-3"${_scopeId}><div class="relative flex-1"${_scopeId}><input${ssrRenderAttr("value", unref(form).mobile)} type="text" placeholder="شماره موبایل ورزشکار را وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)..." dir="ltr" autofocus class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30 text-center font-mono transition-all"${_scopeId}></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || !unref(form).mobile) ? " disabled" : ""} class="h-11 px-6 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all shrink-0"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserCheck), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>${ssrInterpolate(unref(form).processing ? "در حال ثبت..." : "ثبت ورود / خروج")}</span></button></form><div class="flex items-center gap-2 text-[11px] text-zinc-500 mt-3"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-zinc-600"${_scopeId}></span><span${_scopeId}>سیستم در صورت وجود ورود باز در همان روز، به صورت خودکار خروج کاربر را با محاسبه مدت حضور ثبت می‌کند.</span></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>گزارش زنده آخرین ترددهای ثبت‌شده</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>به‌روزرسانی آنی</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>ورزشکار</th><th class="p-4 font-bold"${_scopeId}>شماره موبایل</th><th class="p-4 font-bold"${_scopeId}>وضعیت اشتراک</th><th class="p-4 font-bold"${_scopeId}>زمان ورود</th><th class="p-4 font-bold"${_scopeId}>زمان خروج</th><th class="p-4 font-bold text-center"${_scopeId}>شیوه ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.attendances.data, (att) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4 font-bold text-white flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0"${_scopeId}>${ssrInterpolate(att.member?.first_name ? att.member.first_name.charAt(0) : "M")}</div><span${_scopeId}>${ssrInterpolate(att.member?.full_name || "کاربر مهمان")}</span></td><td class="p-4 font-mono text-zinc-300" dir="ltr"${_scopeId}>${ssrInterpolate(att.member?.mobile)}</td><td class="p-4"${_scopeId}>`);
							if (att.member?.active_membership) {
								_push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20"${_scopeId}>`);
								_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3" }, null, _parent, _scopeId));
								_push(` ${ssrInterpolate(att.member.active_membership.plan?.title)}</span>`);
							} else {
								_push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20"${_scopeId}>`);
								_push(ssrRenderComponent(unref(AlertTriangle), { class: "w-3 h-3" }, null, _parent, _scopeId));
								_push(` فاقد اشتراک معتبر </span>`);
							}
							_push(`</td><td class="p-4 font-mono text-white" dir="ltr"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(att.check_in))}</td><td class="p-4 font-mono text-zinc-400" dir="ltr"${_scopeId}>`);
							if (att.check_out) _push(`<span${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(att.check_out))}</span>`);
							else _push(`<span class="text-lime-400 font-bold text-[10px] bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20"${_scopeId}>در حال تمرین</span>`);
							_push(`</td><td class="p-4 text-center"${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px] font-medium"${_scopeId}>${ssrInterpolate(att.method === "card" ? "کارت هوشمند" : att.method === "qr" ? "اسکن بارکد" : "ثبت گیت پذیرش")}</span></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.attendances.data || __props.attendances.data.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> امروز هنوز ترددی ثبت نگردیده است. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.attendances.links,
							from: __props.attendances.from,
							to: __props.attendances.to,
							total: __props.attendances.total
						}, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "کنترل تردد و حضور و غیاب - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(QrCode), { class: "w-4 h-4" }), createVNode("span", null, "پذیرش و گیت‌های هوشمند")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "کنترل تردد و حضور و غیاب باشگاه"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "ثبت ورود/خروج اعضا و اعتبارسنجی خودکار اشتراک ورزشی هنگام عبور از گیت")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 flex items-center gap-3 shadow-lg" }, [createVNode("div", { class: "w-9 h-9 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Users), { class: "w-4 h-4" })]), createVNode("div", null, [createVNode("span", { class: "text-[10px] text-zinc-400 block font-medium" }, "ورودهای امروز:"), createVNode("span", { class: "text-base font-black text-white font-mono leading-none" }, toDisplayString(__props.todayCount) + " نفر", 1)])])])]),
						createVNode("div", { class: "p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl backdrop-blur-sm max-w-2xl" }, [
							createVNode("div", { class: "flex items-center gap-2 mb-3" }, [createVNode("span", { class: "w-2 h-2 rounded-full bg-lime-400 animate-pulse" }), createVNode("h3", { class: "text-xs font-bold text-white uppercase tracking-wider" }, "ثبت تردد سریع (پذیرش / اسکن بارکد یا کارت)")]),
							createVNode("form", {
								onSubmit: withModifiers(record, ["prevent"]),
								class: "flex flex-col sm:flex-row items-stretch gap-3"
							}, [createVNode("div", { class: "relative flex-1" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).mobile = $event,
								type: "text",
								placeholder: "شماره موبایل ورزشکار را وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)...",
								dir: "ltr",
								autofocus: "",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30 text-center font-mono transition-all"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).mobile]])]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing || !unref(form).mobile,
								class: "h-11 px-6 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all shrink-0"
							}, [createVNode(unref(UserCheck), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, toDisplayString(unref(form).processing ? "در حال ثبت..." : "ثبت ورود / خروج"), 1)], 8, ["disabled"])], 32),
							createVNode("div", { class: "flex items-center gap-2 text-[11px] text-zinc-500 mt-3" }, [createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-zinc-600" }), createVNode("span", null, "سیستم در صورت وجود ورود باز در همان روز، به صورت خودکار خروج کاربر را با محاسبه مدت حضور ثبت می‌کند.")])
						]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
							createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Clock), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "گزارش زنده آخرین ترددهای ثبت‌شده")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, "به‌روزرسانی آنی")]),
							createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-4 font-bold text-white" }, "ورزشکار"),
								createVNode("th", { class: "p-4 font-bold" }, "شماره موبایل"),
								createVNode("th", { class: "p-4 font-bold" }, "وضعیت اشتراک"),
								createVNode("th", { class: "p-4 font-bold" }, "زمان ورود"),
								createVNode("th", { class: "p-4 font-bold" }, "زمان خروج"),
								createVNode("th", { class: "p-4 font-bold text-center" }, "شیوه ثبت")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.attendances.data, (att) => {
								return openBlock(), createBlock("tr", {
									key: att.id,
									class: "hover:bg-zinc-800/30 transition-colors"
								}, [
									createVNode("td", { class: "p-4 font-bold text-white flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0" }, toDisplayString(att.member?.first_name ? att.member.first_name.charAt(0) : "M"), 1), createVNode("span", null, toDisplayString(att.member?.full_name || "کاربر مهمان"), 1)]),
									createVNode("td", {
										class: "p-4 font-mono text-zinc-300",
										dir: "ltr"
									}, toDisplayString(att.member?.mobile), 1),
									createVNode("td", { class: "p-4" }, [att.member?.active_membership ? (openBlock(), createBlock("span", {
										key: 0,
										class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20"
									}, [createVNode(unref(CheckCircle2), { class: "w-3 h-3" }), createTextVNode(" " + toDisplayString(att.member.active_membership.plan?.title), 1)])) : (openBlock(), createBlock("span", {
										key: 1,
										class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/20"
									}, [createVNode(unref(AlertTriangle), { class: "w-3 h-3" }), createTextVNode(" فاقد اشتراک معتبر ")]))]),
									createVNode("td", {
										class: "p-4 font-mono text-white",
										dir: "ltr"
									}, toDisplayString(unref(formatJalaliDateTime)(att.check_in)), 1),
									createVNode("td", {
										class: "p-4 font-mono text-zinc-400",
										dir: "ltr"
									}, [att.check_out ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(formatJalaliDateTime)(att.check_out)), 1)) : (openBlock(), createBlock("span", {
										key: 1,
										class: "text-lime-400 font-bold text-[10px] bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20"
									}, "در حال تمرین"))]),
									createVNode("td", { class: "p-4 text-center" }, [createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px] font-medium" }, toDisplayString(att.method === "card" ? "کارت هوشمند" : att.method === "qr" ? "اسکن بارکد" : "ثبت گیت پذیرش"), 1)])
								]);
							}), 128)), !__props.attendances.data || __props.attendances.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "6",
								class: "p-12 text-center text-zinc-500 text-xs"
							}, " امروز هنوز ترددی ثبت نگردیده است. ")])) : createCommentVNode("", true)])])]),
							createVNode(_sfc_main$2, {
								links: __props.attendances.links,
								from: __props.attendances.from,
								to: __props.attendances.to,
								total: __props.attendances.total
							}, null, 8, [
								"links",
								"from",
								"to",
								"total"
							])
						])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/SuperAdmin/Attendances.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
