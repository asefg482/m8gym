import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Dumbbell, Users } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "داشبورد مربی" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>داشبورد اختصاصی مربی</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت شاگردان، تنظیم برنامه‌های تمرین و پیگیری کمیسیون‌ها</p></div><div class="grid grid-cols-2 lg:grid-cols-4 gap-4"${_scopeId}><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>شاگردان فعال</span><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.active_students)} نفر</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>برنامه‌های در جریان</span><div class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(__props.stats.active_plans)} برنامه</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>درآمد ماه جاری (کمیسیون)</span><div class="text-xl font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.monthly_income))}</div></div><div class="p-5 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><span class="text-xs text-zinc-400 block mb-1"${_scopeId}>در انتظار تسویه</span><div class="text-xl font-black text-amber-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.stats.pending_settlement))}</div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><h3 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>شاگردان اخیر</span></h3>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/trainer/students",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`مشاهده همه`);
								else return [createTextVNode("مشاهده همه")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div><div class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.recentStudents, (st) => {
							_push(`<div class="py-3 flex items-center justify-between text-xs"${_scopeId}><div${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(st.student?.full_name)}</span><span class="text-zinc-500 font-mono block text-[10px]" dir="ltr"${_scopeId}>${ssrInterpolate(st.student?.mobile)}</span></div><span class="text-zinc-400"${_scopeId}>${ssrInterpolate(st.student?.active_membership ? "اشتراک فعال دارد" : "فاقد اشتراک")}</span></div>`);
						});
						_push(`<!--]-->`);
						if (__props.recentStudents.length === 0) _push(`<div class="p-8 text-center text-xs text-zinc-500"${_scopeId}> هنوز شاگردی ثبت نشده است. </div>`);
						else _push(`<!---->`);
						_push(`</div></div></div>`);
					} else return [createVNode(unref(Head), { title: "داشبورد مربی" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Dumbbell), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "داشبورد اختصاصی مربی")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت شاگردان، تنظیم برنامه‌های تمرین و پیگیری کمیسیون‌ها")]),
						createVNode("div", { class: "grid grid-cols-2 lg:grid-cols-4 gap-4" }, [
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "شاگردان فعال"), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.active_students) + " نفر", 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "برنامه‌های در جریان"), createVNode("div", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(__props.stats.active_plans) + " برنامه", 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "درآمد ماه جاری (کمیسیون)"), createVNode("div", { class: "text-xl font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.monthly_income)), 1)]),
							createVNode("div", { class: "p-5 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("span", { class: "text-xs text-zinc-400 block mb-1" }, "در انتظار تسویه"), createVNode("div", { class: "text-xl font-black text-amber-400 font-mono" }, toDisplayString(unref(formatPrice)(__props.stats.pending_settlement)), 1)])
						]),
						createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800" }, [createVNode("div", { class: "flex items-center justify-between mb-4" }, [createVNode("h3", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode(unref(Users), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "شاگردان اخیر")]), createVNode(unref(Link), {
							href: "/panel/trainer/students",
							class: "text-xs text-lime-400 hover:underline"
						}, {
							default: withCtx(() => [createTextVNode("مشاهده همه")]),
							_: 1
						})]), createVNode("div", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.recentStudents, (st) => {
							return openBlock(), createBlock("div", {
								key: st.id,
								class: "py-3 flex items-center justify-between text-xs"
							}, [createVNode("div", null, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(st.student?.full_name), 1), createVNode("span", {
								class: "text-zinc-500 font-mono block text-[10px]",
								dir: "ltr"
							}, toDisplayString(st.student?.mobile), 1)]), createVNode("span", { class: "text-zinc-400" }, toDisplayString(st.student?.active_membership ? "اشتراک فعال دارد" : "فاقد اشتراک"), 1)]);
						}), 128)), __props.recentStudents.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "p-8 text-center text-xs text-zinc-500"
						}, " هنوز شاگردی ثبت نشده است. ")) : createCommentVNode("", true)])])
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
