import { mergeProps, ref, unref, useSSRContext } from "vue";
import { usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Check, ChevronDown, Shield } from "@lucide/vue";
//#region resources/js/Components/RoleSwitcher.vue
var _sfc_main = {
	__name: "RoleSwitcher",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const isOpen = ref(false);
		const roles = page.props.auth?.roles || [];
		const activeRoleKey = page.props.auth?.active_role;
		const activeRole = roles.find((r) => r.key === activeRoleKey) || {
			key: activeRoleKey,
			title: activeRoleKey === "super_admin" ? "مدیر ارشد" : "کاربر"
		};
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(roles).length > 1) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs text-slate-700 hover:text-slate-900 transition-all cursor-pointer shadow-xs">`);
				_push(ssrRenderComponent(unref(Shield), { class: "w-3.5 h-3.5 text-lime-600" }, null, _parent));
				_push(`<span class="font-medium text-slate-500">نقش فعلی:</span><span class="text-lime-700 font-bold">${ssrInterpolate(unref(activeRole).title)}</span>`);
				_push(ssrRenderComponent(unref(ChevronDown), { class: ["w-3.5 h-3.5 text-slate-400 transition-transform duration-200", { "rotate-180": isOpen.value }] }, null, _parent));
				_push(`</button>`);
				if (isOpen.value) {
					_push(`<div class="absolute left-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 p-1.5 animate-in fade-in zoom-in-95 duration-150"><div class="px-3 py-2 text-[11px] font-semibold text-slate-500 border-b border-slate-100 mb-1"> تغییر پنل فعال </div><!--[-->`);
					ssrRenderList(unref(roles), (role) => {
						_push(`<button type="button" class="${ssrRenderClass([role.key === unref(activeRoleKey) ? "bg-lime-50 text-lime-800 font-bold" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900", "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-right"])}"><div class="flex flex-col"><span>${ssrInterpolate(role.title)}</span><span class="text-[10px] text-slate-400 font-normal">${ssrInterpolate(role.description)}</span></div>`);
						if (role.key === unref(activeRoleKey)) _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-lime-600 shrink-0" }, null, _parent));
						else _push(`<!---->`);
						_push(`</button>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else if (unref(activeRoleKey)) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700" }, _attrs))}>`);
				_push(ssrRenderComponent(unref(Shield), { class: "w-3 h-3 text-lime-600" }, null, _parent));
				_push(`<span>${ssrInterpolate(unref(activeRole).title)}</span></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/RoleSwitcher.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
