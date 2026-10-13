import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { n as formatJalaliDateTime } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withKeys } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Search, ShieldAlert } from "@lucide/vue";
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
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "لاگ رویدادهای سیستم (Audit)" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShieldAlert), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت وقایع و لاگ امنیتی (Audit Log)</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>ردیابی تمامی عملیات‌های حساس، تغییرات نقش‌ها، پرداخت‌ها و ورودهای کاربران</p></div><div class="relative w-full sm:w-72"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="جستجو در شرح عملیات..." class="w-full h-10 bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><button class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Search), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`</button></div></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>کاربر عامل</th><th class="p-4 font-bold"${_scopeId}>نقش فعال</th><th class="p-4 font-bold"${_scopeId}>شرح رویداد</th><th class="p-4 font-bold"${_scopeId}>آدرس IP</th><th class="p-4 font-bold"${_scopeId}>زمان دقیق</th></tr></thead><tbody class="divide-y divide-zinc-800/60 font-mono"${_scopeId}><!--[-->`);
						ssrRenderList(__props.logs.data, (log) => {
							_push(`<tr class="hover:bg-zinc-800/30"${_scopeId}><td class="p-4 font-sans font-bold text-white"${_scopeId}>${ssrInterpolate(log.user ? log.user.full_name : "سیستم خودکار")} `);
							if (log.user) _push(`<span class="block text-[10px] text-zinc-500 font-mono" dir="ltr"${_scopeId}>${ssrInterpolate(log.user.mobile)}</span>`);
							else _push(`<!---->`);
							_push(`</td><td class="p-4 text-zinc-300"${_scopeId}><span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[11px]"${_scopeId}>${ssrInterpolate(log.role_key || "guest")}</span></td><td class="p-4 font-sans text-zinc-200"${_scopeId}><div${_scopeId}>${ssrInterpolate(log.action)}</div>`);
							if (log.meta) _push(`<div class="text-[10px] text-zinc-500 mt-1 max-w-md truncate" dir="ltr"${_scopeId}>${ssrInterpolate(JSON.stringify(log.meta))}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="p-4 text-zinc-400 text-[11px]"${_scopeId}>${ssrInterpolate(log.ip || "127.0.0.1")}</td><td class="p-4 text-zinc-400 text-[11px]"${_scopeId}>${ssrInterpolate(unref(formatJalaliDateTime)(log.created_at))}</td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "لاگ رویدادهای سیستم (Audit)" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(ShieldAlert), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "ثبت وقایع و لاگ امنیتی (Audit Log)")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "ردیابی تمامی عملیات‌های حساس، تغییرات نقش‌ها، پرداخت‌ها و ورودهای کاربران")]), createVNode("div", { class: "relative w-full sm:w-72" }, [withDirectives(createVNode("input", {
						"onUpdate:modelValue": ($event) => search.value = $event,
						onKeyup: withKeys(handleSearch, ["enter"]),
						type: "text",
						placeholder: "جستجو در شرح عملیات...",
						class: "w-full h-10 bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 text-xs text-white focus:outline-none focus:border-lime-400"
					}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]]), createVNode("button", {
						onClick: handleSearch,
						class: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
					}, [createVNode(unref(Search), { class: "w-3.5 h-3.5" })])])]), createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]" }, [createVNode("tr", null, [
						createVNode("th", { class: "p-4 font-bold text-white" }, "کاربر عامل"),
						createVNode("th", { class: "p-4 font-bold" }, "نقش فعال"),
						createVNode("th", { class: "p-4 font-bold" }, "شرح رویداد"),
						createVNode("th", { class: "p-4 font-bold" }, "آدرس IP"),
						createVNode("th", { class: "p-4 font-bold" }, "زمان دقیق")
					])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60 font-mono" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.logs.data, (log) => {
						return openBlock(), createBlock("tr", {
							key: log.id,
							class: "hover:bg-zinc-800/30"
						}, [
							createVNode("td", { class: "p-4 font-sans font-bold text-white" }, [createTextVNode(toDisplayString(log.user ? log.user.full_name : "سیستم خودکار") + " ", 1), log.user ? (openBlock(), createBlock("span", {
								key: 0,
								class: "block text-[10px] text-zinc-500 font-mono",
								dir: "ltr"
							}, toDisplayString(log.user.mobile), 1)) : createCommentVNode("", true)]),
							createVNode("td", { class: "p-4 text-zinc-300" }, [createVNode("span", { class: "px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[11px]" }, toDisplayString(log.role_key || "guest"), 1)]),
							createVNode("td", { class: "p-4 font-sans text-zinc-200" }, [createVNode("div", null, toDisplayString(log.action), 1), log.meta ? (openBlock(), createBlock("div", {
								key: 0,
								class: "text-[10px] text-zinc-500 mt-1 max-w-md truncate",
								dir: "ltr"
							}, toDisplayString(JSON.stringify(log.meta)), 1)) : createCommentVNode("", true)]),
							createVNode("td", { class: "p-4 text-zinc-400 text-[11px]" }, toDisplayString(log.ip || "127.0.0.1"), 1),
							createVNode("td", { class: "p-4 text-zinc-400 text-[11px]" }, toDisplayString(unref(formatJalaliDateTime)(log.created_at)), 1)
						]);
					}), 128))])])])])])];
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
