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
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-xs text-zinc-200 transition-all cursor-pointer shadow-sm">`);
				_push(ssrRenderComponent(unref(Shield), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent));
				_push(`<span class="font-medium">نقش فعلی:</span><span class="text-lime-400 font-semibold">${ssrInterpolate(unref(activeRole).title)}</span>`);
				_push(ssrRenderComponent(unref(ChevronDown), { class: ["w-3.5 h-3.5 text-zinc-400 transition-transform duration-200", { "rotate-180": isOpen.value }] }, null, _parent));
				_push(`</button>`);
				if (isOpen.value) {
					_push(`<div class="absolute left-0 mt-2 w-56 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl z-50 p-1.5 animate-in fade-in zoom-in-95 duration-150"><div class="px-3 py-2 text-[11px] font-semibold text-zinc-400 border-b border-zinc-800/80 mb-1"> تغییر پنل فعال </div><!--[-->`);
					ssrRenderList(unref(roles), (role) => {
						_push(`<button type="button" class="${ssrRenderClass([role.key === unref(activeRoleKey) ? "bg-lime-400/10 text-lime-400 font-bold" : "text-zinc-300 hover:bg-zinc-800 hover:text-white", "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer text-right"])}"><div class="flex flex-col"><span>${ssrInterpolate(role.title)}</span><span class="text-[10px] text-zinc-500 font-normal">${ssrInterpolate(role.description)}</span></div>`);
						if (role.key === unref(activeRoleKey)) _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-lime-400 shrink-0" }, null, _parent));
						else _push(`<!---->`);
						_push(`</button>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else if (unref(activeRoleKey)) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300" }, _attrs))}>`);
				_push(ssrRenderComponent(unref(Shield), { class: "w-3 h-3 text-lime-400" }, null, _parent));
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
