import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { n as formatJalaliDateTime } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$2 } from "./Pagination-BBik0JPe.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withKeys } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Clock, Globe, Search, ShieldAlert, Terminal } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/Audit.vue
var _sfc_main = {
	__name: "Audit",
	__ssrInlineRender: true,
	props: { logs: Object },
	setup(__props) {
		const search = ref("");
		function handleSearch() {
			router.get("/panel/super_admin/audit", { search: search.value }, { preserveState: true });
		}
		function resetSearch() {
			search.value = "";
			handleSearch();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "لاگ رویدادهای سیستم (Audit) - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShieldAlert), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم امنیت و لاگ یکپارچه</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>ثبت وقایع و لاگ امنیتی (Audit Logs)</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>ردیابی تمامی عملیات‌های حساس، تغییرات نقش‌ها، پرداخت‌ها، مجوزها و ورودهای کاربران در سراسر پنل‌ها</p></div><div class="flex items-center gap-3"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Terminal), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>Audit Trail v2.4</span></span></div></div><div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg backdrop-blur-sm flex flex-col sm:flex-row gap-3 items-center justify-between"${_scopeId}><div class="relative w-full sm:max-w-md"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="جستجو در شرح عملیات و آدرس IP..." class="w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/40 transition-all"${_scopeId}><button class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Search), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</button></div><div class="text-[11px] text-zinc-400 flex items-center gap-2"${_scopeId}>`);
						if (search.value) _push(`<button class="text-xs text-zinc-400 hover:text-white underline cursor-pointer ml-2"${_scopeId}> پاکسازی </button>`);
						else _push(`<!---->`);
						_push(`<span class="w-2 h-2 rounded-full bg-lime-400"${_scopeId}></span><span${_scopeId}>تعداد رکوردها: <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.logs.total || __props.logs.data?.length || 0)}</b></span></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تاریخچه رویدادهای ثبت‌شده</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>ثبت بدون امکان تغییر (Append-Only)</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>کاربر عامل</th><th class="p-4 font-bold"${_scopeId}>نقش فعال</th><th class="p-4 font-bold"${_scopeId}>شرح عملیات</th><th class="p-4 font-bold"${_scopeId}>آدرس IP</th><th class="p-4 font-bold"${_scopeId}>زمان دقیق</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.logs.data, (log) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}><div class="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0"${_scopeId}>${ssrInterpolate(log.user ? log.user.full_name?.charAt(0) : "S")}</div><div${_scopeId}><div class="font-bold text-white"${_scopeId}>${ssrInterpolate(log.user ? log.user.full_name : "سیستم خودکار باشگاه")}</div>`);
							if (log.user) _push(`<div class="text-[10px] text-zinc-500 font-mono" dir="ltr"${_scopeId}>${ssrInterpolate(log.user.mobile)}</div>`);
							else _push(`<!---->`);
							_push(`</div></div></td><td class="p-4"${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-300"${_scopeId}>${ssrInterpolate(log.role_key || "guest")}</span></td><td class="p-4"${_scopeId}><div class="font-bold text-zinc-200"${_scopeId}>${ssrInterpolate(log.action)}</div>`);
							if (log.meta) _push(`<div class="text-[10px] text-zinc-500 font-mono mt-1 max-w-sm truncate bg-zinc-950/60 px-2 py-0.5 rounded border border-zinc-800/50" dir="ltr"${_scopeId}>${ssrInterpolate(JSON.stringify(log.meta))}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="p-4 font-mono text-zinc-400 text-[11px]" dir="ltr"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Globe), { class: "w-3 h-3 text-zinc-600 inline" }, null, _parent, _scopeId));
							_push(` ${ssrInterpolate(log.ip || "127.0.0.1")}</span></td><td class="p-4 font-mono text-zinc-400 text-[11px]" dir="ltr"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(log.created_at))}</td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.logs.data || __props.logs.data.length === 0) _push(`<tr${_scopeId}><td colspan="5" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> هیچ لاگی یافت نشد. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.logs.links,
							from: __props.logs.from,
							to: __props.logs.to,
							total: __props.logs.total
						}, null, _parent, _scopeId));
						_push(`</div></div>`);
					} else return [createVNode(unref(Head), { title: "لاگ رویدادهای سیستم (Audit) - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(ShieldAlert), { class: "w-4 h-4" }), createVNode("span", null, "سیستم امنیت و لاگ یکپارچه")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "ثبت وقایع و لاگ امنیتی (Audit Logs)"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "ردیابی تمامی عملیات‌های حساس، تغییرات نقش‌ها، پرداخت‌ها، مجوزها و ورودهای کاربران در سراسر پنل‌ها")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono" }, [createVNode(unref(Terminal), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "Audit Trail v2.4")])])]),
						createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg backdrop-blur-sm flex flex-col sm:flex-row gap-3 items-center justify-between" }, [createVNode("div", { class: "relative w-full sm:max-w-md" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							onKeyup: withKeys(handleSearch, ["enter"]),
							type: "text",
							placeholder: "جستجو در شرح عملیات و آدرس IP...",
							class: "w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/40 transition-all"
						}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]]), createVNode("button", {
							onClick: handleSearch,
							class: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
						}, [createVNode(unref(Search), { class: "w-4 h-4" })])]), createVNode("div", { class: "text-[11px] text-zinc-400 flex items-center gap-2" }, [
							search.value ? (openBlock(), createBlock("button", {
								key: 0,
								onClick: resetSearch,
								class: "text-xs text-zinc-400 hover:text-white underline cursor-pointer ml-2"
							}, " پاکسازی ")) : createCommentVNode("", true),
							createVNode("span", { class: "w-2 h-2 rounded-full bg-lime-400" }),
							createVNode("span", null, [createTextVNode("تعداد رکوردها: "), createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.logs.total || __props.logs.data?.length || 0), 1)])
						])]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [
							createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Clock), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "تاریخچه رویدادهای ثبت‌شده")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, "ثبت بدون امکان تغییر (Append-Only)")]),
							createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
								createVNode("th", { class: "p-4 font-bold text-white" }, "کاربر عامل"),
								createVNode("th", { class: "p-4 font-bold" }, "نقش فعال"),
								createVNode("th", { class: "p-4 font-bold" }, "شرح عملیات"),
								createVNode("th", { class: "p-4 font-bold" }, "آدرس IP"),
								createVNode("th", { class: "p-4 font-bold" }, "زمان دقیق")
							])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.logs.data, (log) => {
								return openBlock(), createBlock("tr", {
									key: log.id,
									class: "hover:bg-zinc-800/30 transition-colors"
								}, [
									createVNode("td", { class: "p-4" }, [createVNode("div", { class: "flex items-center gap-2.5" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 shrink-0" }, toDisplayString(log.user ? log.user.full_name?.charAt(0) : "S"), 1), createVNode("div", null, [createVNode("div", { class: "font-bold text-white" }, toDisplayString(log.user ? log.user.full_name : "سیستم خودکار باشگاه"), 1), log.user ? (openBlock(), createBlock("div", {
										key: 0,
										class: "text-[10px] text-zinc-500 font-mono",
										dir: "ltr"
									}, toDisplayString(log.user.mobile), 1)) : createCommentVNode("", true)])])]),
									createVNode("td", { class: "p-4" }, [createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-300" }, toDisplayString(log.role_key || "guest"), 1)]),
									createVNode("td", { class: "p-4" }, [createVNode("div", { class: "font-bold text-zinc-200" }, toDisplayString(log.action), 1), log.meta ? (openBlock(), createBlock("div", {
										key: 0,
										class: "text-[10px] text-zinc-500 font-mono mt-1 max-w-sm truncate bg-zinc-950/60 px-2 py-0.5 rounded border border-zinc-800/50",
										dir: "ltr"
									}, toDisplayString(JSON.stringify(log.meta)), 1)) : createCommentVNode("", true)]),
									createVNode("td", {
										class: "p-4 font-mono text-zinc-400 text-[11px]",
										dir: "ltr"
									}, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Globe), { class: "w-3 h-3 text-zinc-600 inline" }), createTextVNode(" " + toDisplayString(log.ip || "127.0.0.1"), 1)])]),
									createVNode("td", {
										class: "p-4 font-mono text-zinc-400 text-[11px]",
										dir: "ltr"
									}, toDisplayString(unref(formatJalaliDateTime)(log.created_at)), 1)
								]);
							}), 128)), !__props.logs.data || __props.logs.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
								colspan: "5",
								class: "p-12 text-center text-zinc-500 text-xs"
							}, " هیچ لاگی یافت نشد. ")])) : createCommentVNode("", true)])])]),
							createVNode(_sfc_main$2, {
								links: __props.logs.links,
								from: __props.logs.from,
								to: __props.logs.to,
								total: __props.logs.total
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/SuperAdmin/Audit.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
