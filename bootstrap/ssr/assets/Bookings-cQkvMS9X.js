import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-DHt3q8cw.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Calendar, CalendarCheck } from "@lucide/vue";
//#region resources/js/Pages/Panel/Service/Bookings.vue
var _sfc_main = {
	__name: "Bookings",
	__ssrInlineRender: true,
	props: {
		bookings: Object,
		services: Array,
		providers: Array,
		members: Array,
		currentStatus: String
	},
	setup(__props) {
		function updateStatus(booking, newStatus) {
			router.put(`/panel/service/bookings/${booking.id}/status`, { status: newStatus }, { preserveScroll: true });
		}
		function filterStatus(status) {
			router.get("/panel/service/bookings", { status }, { preserveState: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تقویم رزروها و نوبت‌ها - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CalendarCheck), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم نوبت‌دهی هوشمند بدون تداخل</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>تقویم نوبت‌ها و رزروهای خدمات</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تایید، تغییر وضعیت، مدیریت کنسلی و جلوگیری هوشمند از همپوشانی زمانی نوبت‌ها</p></div><div class="flex items-center gap-2 flex-wrap"${_scopeId}><button class="${ssrRenderClass([!__props.currentStatus ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> همه </button><button class="${ssrRenderClass([__props.currentStatus === "pending" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> در انتظار تایید </button><button class="${ssrRenderClass([__props.currentStatus === "confirmed" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> تایید شده </button><button class="${ssrRenderClass([__props.currentStatus === "completed" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> انجام شده </button></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>فهرست نوبت‌های ثبت‌شده در سیستم</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>مجموع: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.bookings.total || __props.bookings.data?.length || 0)}</b> نوبت</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام ورزشکار</th><th class="p-4 font-bold"${_scopeId}>خدمت انتخابی</th><th class="p-4 font-bold"${_scopeId}>متخصص / ارائه‌دهنده</th><th class="p-4 font-bold"${_scopeId}>زمان نوبت</th><th class="p-4 font-bold"${_scopeId}>تعرفه</th><th class="p-4 font-bold"${_scopeId}>وضعیت نوبت</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.bookings.data, (b) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="font-bold text-white text-xs sm:text-sm"${_scopeId}>${ssrInterpolate(b.member?.full_name || "کاربر مهمان")}</div><div class="text-[10px] text-zinc-500 font-mono mt-0.5" dir="ltr"${_scopeId}>${ssrInterpolate(b.member?.mobile)}</div></td><td class="p-4"${_scopeId}><span class="font-bold text-zinc-200"${_scopeId}>${ssrInterpolate(b.service?.title)}</span><span class="text-zinc-500 text-[10px] block mt-0.5"${_scopeId}>${ssrInterpolate(b.service?.category === "massage" ? "ماساژ ورزشی" : "پیرایشگاه VIP")}</span></td><td class="p-4 text-zinc-300"${_scopeId}>${ssrInterpolate(b.provider?.full_name || "تخصیص نیافته")}</td><td class="p-4 font-mono text-white text-xs" dir="ltr"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(b.starts_at))}</td><td class="p-4 font-mono font-black text-lime-400 text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(b.price))}</td><td class="p-4"${_scopeId}><select${ssrRenderAttr("value", b.status)} class="${ssrRenderClass([{
								"text-amber-400 border-amber-400/30": b.status === "pending",
								"text-blue-400 border-blue-400/30": b.status === "confirmed",
								"text-emerald-400 border-emerald-400/30": b.status === "completed",
								"text-rose-400 border-rose-400/30": b.status === "cancelled" || b.status === "no_show"
							}, "h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs font-bold focus:outline-none focus:border-lime-400 transition-colors"])}"${_scopeId}><option value="pending"${_scopeId}>در انتظار تایید</option><option value="confirmed"${_scopeId}>تایید شده</option><option value="completed"${_scopeId}>انجام شد (تسویه نهایی)</option><option value="cancelled"${_scopeId}>لغو شده</option><option value="no_show"${_scopeId}>عدم حضور (غیبت)</option></select></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.bookings.data || __props.bookings.data.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> نوبتی در این وضعیت یافت نشد. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.bookings.links,
							from: __props.bookings.from,
							to: __props.bookings.to,
							total: __props.bookings.total
						}, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "تقویم رزروها و نوبت‌ها - Dashlite" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(CalendarCheck), { class: "w-4 h-4" }), createVNode("span", null, "سیستم نوبت‌دهی هوشمند بدون تداخل")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "تقویم نوبت‌ها و رزروهای خدمات"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تایید، تغییر وضعیت، مدیریت کنسلی و جلوگیری هوشمند از همپوشانی زمانی نوبت‌ها")
					]), createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
						createVNode("button", {
							onClick: ($event) => filterStatus(null),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", !__props.currentStatus ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " همه ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("pending"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "pending" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " در انتظار تایید ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("confirmed"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "confirmed" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " تایید شده ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("completed"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "completed" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " انجام شده ", 10, ["onClick"])
					])]), createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
						createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Calendar), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "فهرست نوبت‌های ثبت‌شده در سیستم")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, [
							createTextVNode("مجموع: "),
							createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.bookings.total || __props.bookings.data?.length || 0), 1),
							createTextVNode(" نوبت")
						])]),
						createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "نام ورزشکار"),
							createVNode("th", { class: "p-4 font-bold" }, "خدمت انتخابی"),
							createVNode("th", { class: "p-4 font-bold" }, "متخصص / ارائه‌دهنده"),
							createVNode("th", { class: "p-4 font-bold" }, "زمان نوبت"),
							createVNode("th", { class: "p-4 font-bold" }, "تعرفه"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت نوبت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.bookings.data, (b) => {
							return openBlock(), createBlock("tr", {
								key: b.id,
								class: "hover:bg-zinc-800/30 transition-colors"
							}, [
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "font-bold text-white text-xs sm:text-sm" }, toDisplayString(b.member?.full_name || "کاربر مهمان"), 1), createVNode("div", {
									class: "text-[10px] text-zinc-500 font-mono mt-0.5",
									dir: "ltr"
								}, toDisplayString(b.member?.mobile), 1)]),
								createVNode("td", { class: "p-4" }, [createVNode("span", { class: "font-bold text-zinc-200" }, toDisplayString(b.service?.title), 1), createVNode("span", { class: "text-zinc-500 text-[10px] block mt-0.5" }, toDisplayString(b.service?.category === "massage" ? "ماساژ ورزشی" : "پیرایشگاه VIP"), 1)]),
								createVNode("td", { class: "p-4 text-zinc-300" }, toDisplayString(b.provider?.full_name || "تخصیص نیافته"), 1),
								createVNode("td", {
									class: "p-4 font-mono text-white text-xs",
									dir: "ltr"
								}, toDisplayString(unref(formatJalaliDateTime)(b.starts_at)), 1),
								createVNode("td", { class: "p-4 font-mono font-black text-lime-400 text-sm" }, toDisplayString(unref(formatPrice)(b.price)), 1),
								createVNode("td", { class: "p-4" }, [createVNode("select", {
									value: b.status,
									onChange: ($event) => updateStatus(b, $event.target.value),
									class: ["h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs font-bold focus:outline-none focus:border-lime-400 transition-colors", {
										"text-amber-400 border-amber-400/30": b.status === "pending",
										"text-blue-400 border-blue-400/30": b.status === "confirmed",
										"text-emerald-400 border-emerald-400/30": b.status === "completed",
										"text-rose-400 border-rose-400/30": b.status === "cancelled" || b.status === "no_show"
									}]
								}, [
									createVNode("option", { value: "pending" }, "در انتظار تایید"),
									createVNode("option", { value: "confirmed" }, "تایید شده"),
									createVNode("option", { value: "completed" }, "انجام شد (تسویه نهایی)"),
									createVNode("option", { value: "cancelled" }, "لغو شده"),
									createVNode("option", { value: "no_show" }, "عدم حضور (غیبت)")
								], 42, ["value", "onChange"])])
							]);
						}), 128)), !__props.bookings.data || __props.bookings.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "p-12 text-center text-zinc-500 text-xs"
						}, " نوبتی در این وضعیت یافت نشد. ")])) : createCommentVNode("", true)])])]),
						createVNode(_sfc_main$2, {
							links: __props.bookings.links,
							from: __props.bookings.from,
							to: __props.bookings.to,
							total: __props.bookings.total
						}, null, 8, [
							"links",
							"from",
							"to",
							"total"
						])
					])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Service/Bookings.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
