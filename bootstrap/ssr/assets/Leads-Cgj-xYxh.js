import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { MessageSquare } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "سرنخ‌های مشاوره رایگان" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(MessageSquare), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سرنخ‌ها و درخواست‌های مشاوره رایگان</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> افرادی که فرم مشاوره سایت را پر کرده‌اند؛ تماس بگیرید یا به مربیان ارجاع دهید. </p></div><div class="flex items-center gap-2"${_scopeId}><button class="${ssrRenderClass([!__props.currentStatus ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}> همه </button><button class="${ssrRenderClass([__props.currentStatus === "new" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}> جدید </button><button class="${ssrRenderClass([__props.currentStatus === "contacted" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}> تماس گرفته شده </button><button class="${ssrRenderClass([__props.currentStatus === "closed" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}> بسته شده </button></div></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام متقاضی</th><th class="p-4 font-bold"${_scopeId}>شماره تماس</th><th class="p-4 font-bold"${_scopeId}>پیام / هدف</th><th class="p-4 font-bold"${_scopeId}>ارجاع به مربی</th><th class="p-4 font-bold"${_scopeId}>وضعیت پیگیری</th><th class="p-4 font-bold"${_scopeId}>تاریخ ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.leads.data, (lead) => {
							_push(`<tr class="hover:bg-zinc-800/30"${_scopeId}><td class="p-4 font-bold text-white"${_scopeId}>${ssrInterpolate(lead.name)}</td><td class="p-4 font-mono text-lime-400" dir="ltr"${_scopeId}><a${ssrRenderAttr("href", "tel:" + lead.mobile)} class="hover:underline"${_scopeId}>${ssrInterpolate(lead.mobile)}</a></td><td class="p-4 text-zinc-300 max-w-xs truncate"${_scopeId}>${ssrInterpolate(lead.message || "-")}</td><td class="p-4"${_scopeId}><select${ssrRenderAttr("value", lead.assigned_to)} class="h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none"${_scopeId}><option value=""${_scopeId}>بدون مربی</option><!--[-->`);
							ssrRenderList(__props.trainers, (t) => {
								_push(`<option${ssrRenderAttr("value", t.id)}${_scopeId}>${ssrInterpolate(t.full_name)}</option>`);
							});
							_push(`<!--]--></select></td><td class="p-4"${_scopeId}><select${ssrRenderAttr("value", lead.status)} class="${ssrRenderClass([{
								"text-amber-400 border-amber-400/40": lead.status === "new",
								"text-cyan-400 border-cyan-400/40": lead.status === "contacted",
								"text-zinc-500 border-zinc-800": lead.status === "closed"
							}, "h-8 bg-zinc-950 border rounded-lg px-2 text-[11px] font-bold focus:outline-none"])}"${_scopeId}><option value="new"${_scopeId}>جدید</option><option value="contacted"${_scopeId}>تماس گرفته شده</option><option value="closed"${_scopeId}>بسته شده</option></select></td><td class="p-4 text-zinc-400 text-[11px] font-mono"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(lead.created_at))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div>`);
						if (__props.leads.data.length === 0) _push(`<div class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> موردی یافت نشد. </div>`);
						else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "سرنخ‌های مشاوره رایگان" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(MessageSquare), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "سرنخ‌ها و درخواست‌های مشاوره رایگان")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " افرادی که فرم مشاوره سایت را پر کرده‌اند؛ تماس بگیرید یا به مربیان ارجاع دهید. ")]), createVNode("div", { class: "flex items-center gap-2" }, [
						createVNode("button", {
							onClick: ($event) => filterStatus(null),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", !__props.currentStatus ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, " همه ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("new"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "new" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, " جدید ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("contacted"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "contacted" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, " تماس گرفته شده ", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("closed"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "closed" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, " بسته شده ", 10, ["onClick"])
					])]), createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]" }, [createVNode("tr", null, [
						createVNode("th", { class: "p-4 font-bold text-white" }, "نام متقاضی"),
						createVNode("th", { class: "p-4 font-bold" }, "شماره تماس"),
						createVNode("th", { class: "p-4 font-bold" }, "پیام / هدف"),
						createVNode("th", { class: "p-4 font-bold" }, "ارجاع به مربی"),
						createVNode("th", { class: "p-4 font-bold" }, "وضعیت پیگیری"),
						createVNode("th", { class: "p-4 font-bold" }, "تاریخ ثبت")
					])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.leads.data, (lead) => {
						return openBlock(), createBlock("tr", {
							key: lead.id,
							class: "hover:bg-zinc-800/30"
						}, [
							createVNode("td", { class: "p-4 font-bold text-white" }, toDisplayString(lead.name), 1),
							createVNode("td", {
								class: "p-4 font-mono text-lime-400",
								dir: "ltr"
							}, [createVNode("a", {
								href: "tel:" + lead.mobile,
								class: "hover:underline"
							}, toDisplayString(lead.mobile), 9, ["href"])]),
							createVNode("td", { class: "p-4 text-zinc-300 max-w-xs truncate" }, toDisplayString(lead.message || "-"), 1),
							createVNode("td", { class: "p-4" }, [createVNode("select", {
								value: lead.assigned_to,
								onChange: ($event) => assignTrainer(lead, $event.target.value),
								class: "h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] text-white focus:outline-none"
							}, [createVNode("option", { value: "" }, "بدون مربی"), (openBlock(true), createBlock(Fragment, null, renderList(__props.trainers, (t) => {
								return openBlock(), createBlock("option", {
									key: t.id,
									value: t.id
								}, toDisplayString(t.full_name), 9, ["value"]);
							}), 128))], 40, ["value", "onChange"])]),
							createVNode("td", { class: "p-4" }, [createVNode("select", {
								value: lead.status,
								onChange: ($event) => updateStatus(lead, $event.target.value),
								class: ["h-8 bg-zinc-950 border rounded-lg px-2 text-[11px] font-bold focus:outline-none", {
									"text-amber-400 border-amber-400/40": lead.status === "new",
									"text-cyan-400 border-cyan-400/40": lead.status === "contacted",
									"text-zinc-500 border-zinc-800": lead.status === "closed"
								}]
							}, [
								createVNode("option", { value: "new" }, "جدید"),
								createVNode("option", { value: "contacted" }, "تماس گرفته شده"),
								createVNode("option", { value: "closed" }, "بسته شده")
							], 42, ["value", "onChange"])]),
							createVNode("td", { class: "p-4 text-zinc-400 text-[11px] font-mono" }, toDisplayString(unref(formatJalaliDateTime)(lead.created_at)), 1)
						]);
					}), 128))])])]), __props.leads.data.length === 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "p-12 text-center text-zinc-500 text-xs"
					}, " موردی یافت نشد. ")) : createCommentVNode("", true)])])];
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
