import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { AlertTriangle, QrCode, UserCheck } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "کنترل تردد و حضور و غیاب" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(QrCode), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم کنترل تردد و حضور و غیاب باشگاه</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>ثبت ورود/خروج اعضا و اعتبارسنجی خودکار اشتراک فعال هنگام ورود</p></div><div class="p-3 px-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-left"${_scopeId}><span class="text-xs text-zinc-400"${_scopeId}>تردد امروز:</span><span class="text-lg font-black text-lime-400 mr-2 font-mono"${_scopeId}>${ssrInterpolate(__props.todayCount)} نفر</span></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 max-w-xl"${_scopeId}><h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider mb-3"${_scopeId}>ثبت تردد سریع (پذیرش / اسکن)</h3><form class="flex items-center gap-3"${_scopeId}><div class="relative flex-1"${_scopeId}><input${ssrRenderAttr("value", unref(form).mobile)} type="text" placeholder="شماره موبایل ورزشکار را وارد کنید..." dir="ltr" autofocus class="w-full h-12 bg-zinc-950 border border-zinc-800 rounded-2xl px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 text-center font-mono"${_scopeId}></div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing || !unref(form).mobile) ? " disabled" : ""} class="h-12 px-6 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-40"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserCheck), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت تردد</span></button></form><p class="text-[11px] text-zinc-500 mt-2"${_scopeId}> نکته: در صورت ورود قبلی در همان روز، خروج عضو به صورت خودکار ثبت می‌گردد. </p></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام ورزشکار</th><th class="p-4 font-bold"${_scopeId}>شماره موبایل</th><th class="p-4 font-bold"${_scopeId}>وضعیت اشتراک</th><th class="p-4 font-bold"${_scopeId}>زمان ورود</th><th class="p-4 font-bold"${_scopeId}>زمان خروج</th><th class="p-4 font-bold"${_scopeId}>شیوه ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.attendances.data, (att) => {
							_push(`<tr class="hover:bg-zinc-800/30"${_scopeId}><td class="p-4 font-bold text-white"${_scopeId}>${ssrInterpolate(att.member?.full_name)}</td><td class="p-4 font-mono text-zinc-300" dir="ltr"${_scopeId}>${ssrInterpolate(att.member?.mobile)}</td><td class="p-4"${_scopeId}>`);
							if (att.member?.active_membership) _push(`<span class="text-lime-400 font-bold text-[11px]"${_scopeId}>${ssrInterpolate(att.member.active_membership.plan?.title)}</span>`);
							else {
								_push(`<span class="text-amber-400 font-bold text-[11px] flex items-center gap-1"${_scopeId}>`);
								_push(ssrRenderComponent(unref(AlertTriangle), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
								_push(` فاقد اشتراک معتبر </span>`);
							}
							_push(`</td><td class="p-4 font-mono text-zinc-300"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(att.checkin_at))}</td><td class="p-4 font-mono text-zinc-400"${_scopeId}>${ssrInterpolate(att.checkout_at ? unref(formatJalaliDateTime)(att.checkout_at) : "حاضر در سالن")}</td><td class="p-4 text-zinc-400"${_scopeId}>${ssrInterpolate(att.method === "reception" ? "پذیرش" : att.method)}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "کنترل تردد و حضور و غیاب" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(QrCode), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "سیستم کنترل تردد و حضور و غیاب باشگاه")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "ثبت ورود/خروج اعضا و اعتبارسنجی خودکار اشتراک فعال هنگام ورود")]), createVNode("div", { class: "p-3 px-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-left" }, [createVNode("span", { class: "text-xs text-zinc-400" }, "تردد امروز:"), createVNode("span", { class: "text-lg font-black text-lime-400 mr-2 font-mono" }, toDisplayString(__props.todayCount) + " نفر", 1)])]),
						createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 max-w-xl" }, [
							createVNode("h3", { class: "text-xs font-bold text-lime-400 uppercase tracking-wider mb-3" }, "ثبت تردد سریع (پذیرش / اسکن)"),
							createVNode("form", {
								onSubmit: withModifiers(record, ["prevent"]),
								class: "flex items-center gap-3"
							}, [createVNode("div", { class: "relative flex-1" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).mobile = $event,
								type: "text",
								placeholder: "شماره موبایل ورزشکار را وارد کنید...",
								dir: "ltr",
								autofocus: "",
								class: "w-full h-12 bg-zinc-950 border border-zinc-800 rounded-2xl px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 text-center font-mono"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).mobile]])]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing || !unref(form).mobile,
								class: "h-12 px-6 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center gap-2 cursor-pointer disabled:opacity-40"
							}, [createVNode(unref(UserCheck), { class: "w-4 h-4" }), createVNode("span", null, "ثبت تردد")], 8, ["disabled"])], 32),
							createVNode("p", { class: "text-[11px] text-zinc-500 mt-2" }, " نکته: در صورت ورود قبلی در همان روز، خروج عضو به صورت خودکار ثبت می‌گردد. ")
						]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "نام ورزشکار"),
							createVNode("th", { class: "p-4 font-bold" }, "شماره موبایل"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت اشتراک"),
							createVNode("th", { class: "p-4 font-bold" }, "زمان ورود"),
							createVNode("th", { class: "p-4 font-bold" }, "زمان خروج"),
							createVNode("th", { class: "p-4 font-bold" }, "شیوه ثبت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.attendances.data, (att) => {
							return openBlock(), createBlock("tr", {
								key: att.id,
								class: "hover:bg-zinc-800/30"
							}, [
								createVNode("td", { class: "p-4 font-bold text-white" }, toDisplayString(att.member?.full_name), 1),
								createVNode("td", {
									class: "p-4 font-mono text-zinc-300",
									dir: "ltr"
								}, toDisplayString(att.member?.mobile), 1),
								createVNode("td", { class: "p-4" }, [att.member?.active_membership ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-lime-400 font-bold text-[11px]"
								}, toDisplayString(att.member.active_membership.plan?.title), 1)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-amber-400 font-bold text-[11px] flex items-center gap-1"
								}, [createVNode(unref(AlertTriangle), { class: "w-3.5 h-3.5" }), createTextVNode(" فاقد اشتراک معتبر ")]))]),
								createVNode("td", { class: "p-4 font-mono text-zinc-300" }, toDisplayString(unref(formatJalaliDateTime)(att.checkin_at)), 1),
								createVNode("td", { class: "p-4 font-mono text-zinc-400" }, toDisplayString(att.checkout_at ? unref(formatJalaliDateTime)(att.checkout_at) : "حاضر در سالن"), 1),
								createVNode("td", { class: "p-4 text-zinc-400" }, toDisplayString(att.method === "reception" ? "پذیرش" : att.method), 1)
							]);
						}), 128))])])])])
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
