import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime, r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Calendar } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "تقویم رزروها و نوبت‌ها" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calendar), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تقویم نوبت‌ها و رزروهای خدمات</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>تایید، تکمیل، لغو نوبت و جلوگیری خودکار از تداخل زمانی (Overlap)</p></div><div class="flex items-center gap-2"${_scopeId}><button class="${ssrRenderClass([!__props.currentStatus ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>همه</button><button class="${ssrRenderClass([__props.currentStatus === "pending" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>در انتظار</button><button class="${ssrRenderClass([__props.currentStatus === "confirmed" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>تایید شده</button><button class="${ssrRenderClass([__props.currentStatus === "completed" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-3 py-1.5 rounded-xl text-xs font-bold transition-all"])}"${_scopeId}>انجام شد</button></div></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950 text-zinc-400 border-b border-zinc-800"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام ورزشکار</th><th class="p-4 font-bold"${_scopeId}>خدمت انتخابی</th><th class="p-4 font-bold"${_scopeId}>ارائه‌دهنده</th><th class="p-4 font-bold"${_scopeId}>زمان شروع و پایان</th><th class="p-4 font-bold"${_scopeId}>مبلغ</th><th class="p-4 font-bold"${_scopeId}>وضعیت نوبت</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.bookings.data, (b) => {
							_push(`<tr class="hover:bg-zinc-800/20"${_scopeId}><td class="p-4 font-sans font-bold text-white"${_scopeId}>${ssrInterpolate(b.member?.full_name)}</td><td class="p-4 font-sans text-zinc-300"${_scopeId}>${ssrInterpolate(b.service?.title)}</td><td class="p-4 font-sans text-zinc-400"${_scopeId}>${ssrInterpolate(b.provider?.full_name)}</td><td class="p-4 text-zinc-300"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(b.starts_at))}</td><td class="p-4 text-lime-400 font-bold"${_scopeId}>${ssrInterpolate(unref(formatPrice)(b.price))}</td><td class="p-4 font-sans"${_scopeId}><select${ssrRenderAttr("value", b.status)} class="h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] font-bold focus:outline-none"${_scopeId}><option value="pending"${_scopeId}>در انتظار تایید</option><option value="confirmed"${_scopeId}>تایید شده</option><option value="completed"${_scopeId}>انجام شد</option><option value="cancelled"${_scopeId}>لغو شده</option><option value="no_show"${_scopeId}>عدم حضور (غایب)</option></select></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div>`);
					} else return [createVNode(unref(Head), { title: "تقویم رزروها و نوبت‌ها" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Calendar), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "تقویم نوبت‌ها و رزروهای خدمات")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "تایید، تکمیل، لغو نوبت و جلوگیری خودکار از تداخل زمانی (Overlap)")]), createVNode("div", { class: "flex items-center gap-2" }, [
						createVNode("button", {
							onClick: ($event) => filterStatus(null),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", !__props.currentStatus ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "همه", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("pending"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "pending" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "در انتظار", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("confirmed"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "confirmed" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "تایید شده", 10, ["onClick"]),
						createVNode("button", {
							onClick: ($event) => filterStatus("completed"),
							class: ["px-3 py-1.5 rounded-xl text-xs font-bold transition-all", __props.currentStatus === "completed" ? "bg-lime-400 text-black" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
						}, "انجام شد", 10, ["onClick"])
					])]), createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950 text-zinc-400 border-b border-zinc-800" }, [createVNode("tr", null, [
						createVNode("th", { class: "p-4 font-bold text-white" }, "نام ورزشکار"),
						createVNode("th", { class: "p-4 font-bold" }, "خدمت انتخابی"),
						createVNode("th", { class: "p-4 font-bold" }, "ارائه‌دهنده"),
						createVNode("th", { class: "p-4 font-bold" }, "زمان شروع و پایان"),
						createVNode("th", { class: "p-4 font-bold" }, "مبلغ"),
						createVNode("th", { class: "p-4 font-bold" }, "وضعیت نوبت")
					])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.bookings.data, (b) => {
						return openBlock(), createBlock("tr", {
							key: b.id,
							class: "hover:bg-zinc-800/20"
						}, [
							createVNode("td", { class: "p-4 font-sans font-bold text-white" }, toDisplayString(b.member?.full_name), 1),
							createVNode("td", { class: "p-4 font-sans text-zinc-300" }, toDisplayString(b.service?.title), 1),
							createVNode("td", { class: "p-4 font-sans text-zinc-400" }, toDisplayString(b.provider?.full_name), 1),
							createVNode("td", { class: "p-4 text-zinc-300" }, toDisplayString(unref(formatJalaliDateTime)(b.starts_at)), 1),
							createVNode("td", { class: "p-4 text-lime-400 font-bold" }, toDisplayString(unref(formatPrice)(b.price)), 1),
							createVNode("td", { class: "p-4 font-sans" }, [createVNode("select", {
								value: b.status,
								onChange: ($event) => updateStatus(b, $event.target.value),
								class: "h-8 bg-zinc-950 border border-zinc-800 rounded-lg px-2 text-[11px] font-bold focus:outline-none"
							}, [
								createVNode("option", { value: "pending" }, "در انتظار تایید"),
								createVNode("option", { value: "confirmed" }, "تایید شده"),
								createVNode("option", { value: "completed" }, "انجام شد"),
								createVNode("option", { value: "cancelled" }, "لغو شده"),
								createVNode("option", { value: "no_show" }, "عدم حضور (غایب)")
							], 40, ["value", "onChange"])])
						]);
					}), 128))])])])])];
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
