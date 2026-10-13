import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { n as formatJalaliDateTime } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-DHt3q8cw.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MessageSquare, Phone, UserCheck } from "@lucide/vue";
//#region resources/js/Pages/Panel/Manager/Leads.vue
var _sfc_main = {
	__name: "Leads",
	__ssrInlineRender: true,
	props: {
		leads: Object,
		trainers: Array,
		currentStatus: String
	},
	setup(__props) {
		function updateStatus(lead, newStatus) {
			router.put(`/panel/manager/leads/${lead.id}`, {
				status: newStatus,
				assigned_to: lead.assigned_to,
				note: lead.note
			}, { preserveScroll: true });
		}
		function assignTrainer(lead, trainerId) {
			router.put(`/panel/manager/leads/${lead.id}`, {
				status: lead.status,
				assigned_to: trainerId,
				note: lead.note
			}, { preserveScroll: true });
		}
		function filterStatus(status) {
			router.get("/panel/manager/leads", { status }, { preserveState: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "سرنخ‌های مشاوره رایگان - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MessageSquare), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>جذب اعضا و درخواست‌های مشاوره آنلاین</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>سرنخ‌ها و لیدهای مشاوره ورزشی</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> ورزشکارانی که فرم مشاوره رایگان سایت را ارسال کرده‌اند؛ پیگیری تماس، ارجاع به مربیان اختصاصی و تعیین وضعیت </p></div><div class="flex items-center gap-2 flex-wrap"${_scopeId}><button class="${ssrRenderClass([!__props.currentStatus ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> همه </button><button class="${ssrRenderClass([__props.currentStatus === "new" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> جدید </button><button class="${ssrRenderClass([__props.currentStatus === "contacted" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> تماس گرفته شده </button><button class="${ssrRenderClass([__props.currentStatus === "closed" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"])}"${_scopeId}> بسته شده </button></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserCheck), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>فهرست متقاضیان و ثبت درخواست‌ها</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>مجموع: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.leads.total || __props.leads.data?.length || 0)}</b> سرنخ</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام متقاضی</th><th class="p-4 font-bold"${_scopeId}>شماره تماس</th><th class="p-4 font-bold"${_scopeId}>هدف ورزشی / پیام</th><th class="p-4 font-bold"${_scopeId}>ارجاع به مربی</th><th class="p-4 font-bold"${_scopeId}>وضعیت پیگیری</th><th class="p-4 font-bold"${_scopeId}>تاریخ ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.leads.data, (lead) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4 font-bold text-white"${_scopeId}>${ssrInterpolate(lead.name)}</td><td class="p-4 font-mono text-lime-400" dir="ltr"${_scopeId}><a${ssrRenderAttr("href", "tel:" + lead.mobile)} class="hover:underline flex items-center gap-1.5"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Phone), { class: "w-3.5 h-3.5 text-zinc-500 inline" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>${ssrInterpolate(lead.mobile)}</span></a></td><td class="p-4 text-zinc-300 max-w-xs truncate"${_scopeId}>${ssrInterpolate(lead.message || "-")}</td><td class="p-4"${_scopeId}><select${ssrRenderAttr("value", lead.assigned_to)} class="h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs text-white focus:outline-none focus:border-lime-400 transition-colors"${_scopeId}><option value=""${_scopeId}>بدون مربی تخصیصی</option><!--[-->`);
							ssrRenderList(__props.trainers, (t) => {
								_push(`<option${ssrRenderAttr("value", t.id)}${_scopeId}>${ssrInterpolate(t.full_name)}</option>`);
							});
							_push(`<!--]--></select></td><td class="p-4"${_scopeId}><select${ssrRenderAttr("value", lead.status)} class="${ssrRenderClass([{
								"text-amber-400 border-amber-400/40": lead.status === "new",
								"text-cyan-400 border-cyan-400/40": lead.status === "contacted",
								"text-zinc-500 border-zinc-800": lead.status === "closed"
							}, "h-9 bg-zinc-950 border rounded-xl px-2.5 text-xs font-bold focus:outline-none transition-colors"])}"${_scopeId}><option value="new"${_scopeId}>جدید (بررسی نشده)</option><option value="contacted"${_scopeId}>تماس حاصل شده</option><option value="closed"${_scopeId}>پرونده بسته شد</option></select></td><td class="p-4 text-zinc-400 text-[11px] font-mono" dir="ltr"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(lead.created_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.leads.data || __props.leads.data.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> موردی در این وضعیت یافت نشد. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.leads.links,
							from: __props.leads.from,
							to: __props.leads.to,
							total: __props.leads.total
						}, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "سرنخ‌های مشاوره رایگان - Dashlite" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(MessageSquare), { class: "w-4 h-4" }), createVNode("span", null, "جذب اعضا و درخواست‌های مشاوره آنلاین")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "سرنخ‌ها و لیدهای مشاوره ورزشی"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " ورزشکارانی که فرم مشاوره رایگان سایت را ارسال کرده‌اند؛ پیگیری تماس، ارجاع به مربیان اختصاصی و تعیین وضعیت ")
					]), createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
						createVNode("button", {
							onClick: ($event) => filterStatus(null),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", !__props.currentStatus ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " همه ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("new"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "new" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " جدید ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("contacted"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "contacted" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " تماس گرفته شده ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("closed"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer", __props.currentStatus === "closed" ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"]
						}, " بسته شده ", 10, ["onClick"])
					])]), createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
						createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(UserCheck), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "فهرست متقاضیان و ثبت درخواست‌ها")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, [
							createTextVNode("مجموع: "),
							createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.leads.total || __props.leads.data?.length || 0), 1),
							createTextVNode(" سرنخ")
						])]),
						createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "نام متقاضی"),
							createVNode("th", { class: "p-4 font-bold" }, "شماره تماس"),
							createVNode("th", { class: "p-4 font-bold" }, "هدف ورزشی / پیام"),
							createVNode("th", { class: "p-4 font-bold" }, "ارجاع به مربی"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت پیگیری"),
							createVNode("th", { class: "p-4 font-bold" }, "تاریخ ثبت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.leads.data, (lead) => {
							return openBlock(), createBlock("tr", {
								key: lead.id,
								class: "hover:bg-zinc-800/30 transition-colors"
							}, [
								createVNode("td", { class: "p-4 font-bold text-white" }, toDisplayString(lead.name), 1),
								createVNode("td", {
									class: "p-4 font-mono text-lime-400",
									dir: "ltr"
								}, [createVNode("a", {
									href: "tel:" + lead.mobile,
									class: "hover:underline flex items-center gap-1.5"
								}, [createVNode(unref(Phone), { class: "w-3.5 h-3.5 text-zinc-500 inline" }), createVNode("span", null, toDisplayString(lead.mobile), 1)], 8, ["href"])]),
								createVNode("td", { class: "p-4 text-zinc-300 max-w-xs truncate" }, toDisplayString(lead.message || "-"), 1),
								createVNode("td", { class: "p-4" }, [createVNode("select", {
									value: lead.assigned_to,
									onChange: ($event) => assignTrainer(lead, $event.target.value),
									class: "h-9 bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 text-xs text-white focus:outline-none focus:border-lime-400 transition-colors"
								}, [createVNode("option", { value: "" }, "بدون مربی تخصیصی"), (openBlock(true), createBlock(Fragment, null, renderList(__props.trainers, (t) => {
									return openBlock(), createBlock("option", {
										key: t.id,
										value: t.id
									}, toDisplayString(t.full_name), 9, ["value"]);
								}), 128))], 40, ["value", "onChange"])]),
								createVNode("td", { class: "p-4" }, [createVNode("select", {
									value: lead.status,
									onChange: ($event) => updateStatus(lead, $event.target.value),
									class: ["h-9 bg-zinc-950 border rounded-xl px-2.5 text-xs font-bold focus:outline-none transition-colors", {
										"text-amber-400 border-amber-400/40": lead.status === "new",
										"text-cyan-400 border-cyan-400/40": lead.status === "contacted",
										"text-zinc-500 border-zinc-800": lead.status === "closed"
									}]
								}, [
									createVNode("option", { value: "new" }, "جدید (بررسی نشده)"),
									createVNode("option", { value: "contacted" }, "تماس حاصل شده"),
									createVNode("option", { value: "closed" }, "پرونده بسته شد")
								], 42, ["value", "onChange"])]),
								createVNode("td", {
									class: "p-4 text-zinc-400 text-[11px] font-mono",
									dir: "ltr"
								}, toDisplayString(unref(formatJalaliDateTime)(lead.created_at)), 1)
							]);
						}), 128)), !__props.leads.data || __props.leads.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "p-12 text-center text-zinc-500 text-xs"
						}, " موردی در این وضعیت یافت نشد. ")])) : createCommentVNode("", true)])])]),
						createVNode(_sfc_main$2, {
							links: __props.leads.links,
							from: __props.leads.from,
							to: __props.leads.to,
							total: __props.leads.total
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Manager/Leads.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
