import { mergeProps, unref, useSSRContext } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "@lucide/vue";
//#region resources/js/Components/Pagination.vue
var _sfc_main = {
	__name: "Pagination",
	__ssrInlineRender: true,
	props: {
		links: {
			type: Array,
			default: () => []
		},
		from: Number,
		to: Number,
		total: Number
	},
	setup(__props) {
		function formatLabel(label) {
			if (label.includes("&laquo;") || label.includes("Previous")) return "قبلی";
			if (label.includes("&raquo;") || label.includes("Next")) return "بعدی";
			return label;
		}
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.links && __props.links.length > 3) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" }, _attrs))}><div class="text-slate-500 text-[11px]">`);
				if (__props.total !== void 0 && __props.from !== void 0 && __props.to !== void 0) _push(`<span> نمایش ردیف <span class="font-mono font-bold text-slate-800">${ssrInterpolate(__props.from)}</span> تا <span class="font-mono font-bold text-slate-800">${ssrInterpolate(__props.to)}</span> از کل <span class="font-mono font-bold text-lime-700">${ssrInterpolate(__props.total)}</span> رکورد </span>`);
				else _push(`<span> صفحات نتایج </span>`);
				_push(`</div><nav class="flex items-center gap-1.5 flex-wrap justify-center"><!--[-->`);
				ssrRenderList(__props.links, (link, key) => {
					_push(`<!--[-->`);
					if (!link.url) _push(`<span class="px-3 py-1.5 rounded-lg text-[11px] text-slate-400 border border-slate-200 bg-slate-50 cursor-not-allowed select-none">${formatLabel(link.label) ?? ""}</span>`);
					else _push(ssrRenderComponent(unref(Link), {
						href: link.url,
						class: ["px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all", [link.active ? "bg-lime-400 text-black shadow-xs" : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900"]]
					}, null, _parent));
					_push(`<!--]-->`);
				});
				_push(`<!--]--></nav></div>`);
			} else _push(`<!---->`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
