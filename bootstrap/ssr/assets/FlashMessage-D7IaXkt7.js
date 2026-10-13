import { mergeProps, ref, unref, useSSRContext, watch } from "vue";
import { usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { AlertCircle, CheckCircle2, Info, X } from "@lucide/vue";
//#region resources/js/Components/FlashMessage.vue
var _sfc_main = {
	__name: "FlashMessage",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const visible = ref(true);
		watch(() => page.props.flash, (flash) => {
			if (flash?.success || flash?.error || flash?.info) {
				visible.value = true;
				setTimeout(() => {
					visible.value = false;
				}, 6e3);
			}
		}, {
			deep: true,
			immediate: true
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (visible.value && (unref(page).props.flash?.success || unref(page).props.flash?.error || unref(page).props.flash?.info)) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-24 left-4 right-4 sm:right-auto sm:left-6 z-50 max-w-md w-full animate-in slide-in-from-top-4 duration-300 pointer-events-auto" }, _attrs))}>`);
				if (unref(page).props.flash?.success) {
					_push(`<div class="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/95 border border-lime-400/40 text-lime-400 shadow-2xl backdrop-blur-xl"><div class="flex items-center gap-3">`);
					_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-5 h-5 shrink-0 text-lime-400" }, null, _parent));
					_push(`<span class="text-xs font-semibold text-zinc-100">${ssrInterpolate(unref(page).props.flash.success)}</span></div><button class="p-1 hover:text-white cursor-pointer">`);
					_push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
					_push(`</button></div>`);
				} else if (unref(page).props.flash?.error) {
					_push(`<div class="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/95 border border-red-500/40 text-red-400 shadow-2xl backdrop-blur-xl"><div class="flex items-center gap-3">`);
					_push(ssrRenderComponent(unref(AlertCircle), { class: "w-5 h-5 shrink-0 text-red-400" }, null, _parent));
					_push(`<span class="text-xs font-semibold text-zinc-100">${ssrInterpolate(unref(page).props.flash.error)}</span></div><button class="p-1 hover:text-white cursor-pointer">`);
					_push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
					_push(`</button></div>`);
				} else if (unref(page).props.flash?.info) {
					_push(`<div class="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/95 border border-cyan-500/40 text-cyan-400 shadow-2xl backdrop-blur-xl"><div class="flex items-center gap-3">`);
					_push(ssrRenderComponent(unref(Info), { class: "w-5 h-5 shrink-0 text-cyan-400" }, null, _parent));
					_push(`<span class="text-xs font-semibold text-zinc-100">${ssrInterpolate(unref(page).props.flash.info)}</span></div><button class="p-1 hover:text-white cursor-pointer">`);
					_push(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent));
					_push(`</button></div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FlashMessage.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
