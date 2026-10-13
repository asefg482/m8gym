import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$1 } from "./PublicLayout-B_Abv_MX.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vShow, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { Flame, ShoppingCart } from "@lucide/vue";
//#region resources/js/Pages/Public/Cafe.vue
var _sfc_main = {
	__name: "Cafe",
	__ssrInlineRender: true,
	props: {
		banners: Array,
		categories: Array
	},
	setup(__props) {
		const activeCategory = ref(__props.categories[0]?.id || null);
		function orderItem(item) {
			router.post("/payment/checkout", {
				items: [{
					product_id: item.id,
					qty: 1
				}],
				scope: "buffet",
				payment_method: "online",
				delivery_type: "dine_in"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "کافه و رستوران رژیمی M8 | ساری" }, null, _parent, _scopeId));
						_push(`<section class="relative bg-zinc-950 border-b border-zinc-800/80 py-16 sm:py-24 overflow-hidden"${_scopeId}><div class="absolute inset-0 z-0"${_scopeId}><img src="/images/gym/cafe_smoothie_clean.jpg" alt="کافه بار پروتئینی M8" class="w-full h-full object-cover opacity-25"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"${_scopeId}></div><div class="absolute -top-24 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"${_scopeId}></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"${_scopeId}><div class="max-w-3xl"${_scopeId}><span class="inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/30 mb-3"${_scopeId}> کافه سلامت و بار پروتئینی M8 </span><h1 class="text-3xl sm:text-5xl font-black text-white"${_scopeId}>تغذیه سالم، سوخت عضله‌سازی شما</h1><p class="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed"${_scopeId}> انواع شیک‌های پروتئینی، سالادهای غنی، وعده‌های رژیمی گریل و قهوه‌های تخصصی پیش از تمرین. </p><div class="mt-4 p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs inline-flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Flame), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>اعضای ویژه VIP از ۲۰٪ تخفیف اختصاصی در کلیه سفارش‌های کافه برخوردارند.</span></div></div></div></section><section class="py-12 bg-zinc-950"${_scopeId}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-zinc-900"${_scopeId}><!--[-->`);
						ssrRenderList(__props.categories, (cat) => {
							_push(`<button class="${ssrRenderClass([activeCategory.value === cat.id ? "bg-lime-400 text-black shadow-lg shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800", "px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer"])}"${_scopeId}>${ssrInterpolate(cat.title)}</button>`);
						});
						_push(`<!--]--></div><!--[-->`);
						ssrRenderList(__props.categories, (cat) => {
							_push(`<div${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style="${ssrRenderStyle(activeCategory.value === cat.id ? null : { display: "none" })}"${_scopeId}><!--[-->`);
							ssrRenderList(cat.products, (item) => {
								_push(`<div class="p-5 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-lime-400/40 transition-all flex flex-col justify-between group"${_scopeId}><div${_scopeId}><div class="h-44 rounded-2xl overflow-hidden mb-4 bg-zinc-950"${_scopeId}><img${ssrRenderAttr("src", item.images?.[0] || "/images/gym/cafe_smoothie_clean.jpg")}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"${_scopeId}></div><div class="flex items-start justify-between gap-2 mb-2"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(item.title)}</h3>`);
								if (item.discount_price) _push(`<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400"${_scopeId}> تخفیف </span>`);
								else _push(`<!---->`);
								_push(`</div><p class="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed"${_scopeId}>${ssrInterpolate(item.description)}</p>`);
								if (item.nutritional_info) {
									_push(`<div class="flex flex-wrap gap-2 mb-4 text-[11px] text-zinc-400"${_scopeId}>`);
									if (item.nutritional_info.protein) _push(`<span class="px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-lime-400 font-mono"${_scopeId}> پروتئین: ${ssrInterpolate(item.nutritional_info.protein)}</span>`);
									else _push(`<!---->`);
									if (item.nutritional_info.calories) _push(`<span class="px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 font-mono"${_scopeId}> کالری: ${ssrInterpolate(item.nutritional_info.calories)}</span>`);
									else _push(`<!---->`);
									_push(`</div>`);
								} else _push(`<!---->`);
								_push(`</div><div class="pt-4 border-t border-zinc-800/80 flex items-center justify-between"${_scopeId}><div class="text-sm font-bold text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(item.effective_price))}</div><button type="button" class="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"${_scopeId}>`);
								_push(ssrRenderComponent(unref(ShoppingCart), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
								_push(`<span${_scopeId}>سفارش فوری</span></button></div></div>`);
							});
							_push(`<!--]--></div></div>`);
						});
						_push(`<!--]--></div></section>`);
					} else return [
						createVNode(unref(Head), { title: "کافه و رستوران رژیمی M8 | ساری" }),
						createVNode("section", { class: "relative bg-zinc-950 border-b border-zinc-800/80 py-16 sm:py-24 overflow-hidden" }, [createVNode("div", { class: "absolute inset-0 z-0" }, [
							createVNode("img", {
								src: "/images/gym/cafe_smoothie_clean.jpg",
								alt: "کافه بار پروتئینی M8",
								class: "w-full h-full object-cover opacity-25"
							}),
							createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" }),
							createVNode("div", { class: "absolute -top-24 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" })
						]), createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" }, [createVNode("div", { class: "max-w-3xl" }, [
							createVNode("span", { class: "inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/30 mb-3" }, " کافه سلامت و بار پروتئینی M8 "),
							createVNode("h1", { class: "text-3xl sm:text-5xl font-black text-white" }, "تغذیه سالم، سوخت عضله‌سازی شما"),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed" }, " انواع شیک‌های پروتئینی، سالادهای غنی، وعده‌های رژیمی گریل و قهوه‌های تخصصی پیش از تمرین. "),
							createVNode("div", { class: "mt-4 p-3 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs inline-flex items-center gap-2" }, [createVNode(unref(Flame), { class: "w-4 h-4" }), createVNode("span", null, "اعضای ویژه VIP از ۲۰٪ تخفیف اختصاصی در کلیه سفارش‌های کافه برخوردارند.")])
						])])]),
						createVNode("section", { class: "py-12 bg-zinc-950" }, [createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-zinc-900" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
							return openBlock(), createBlock("button", {
								key: cat.id,
								onClick: ($event) => activeCategory.value = cat.id,
								class: ["px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer", activeCategory.value === cat.id ? "bg-lime-400 text-black shadow-lg shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"]
							}, toDisplayString(cat.title), 11, ["onClick"]);
						}), 128))]), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
							return openBlock(), createBlock("div", { key: cat.id }, [withDirectives(createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(cat.products, (item) => {
								return openBlock(), createBlock("div", {
									key: item.id,
									class: "p-5 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-lime-400/40 transition-all flex flex-col justify-between group"
								}, [createVNode("div", null, [
									createVNode("div", { class: "h-44 rounded-2xl overflow-hidden mb-4 bg-zinc-950" }, [createVNode("img", {
										src: item.images?.[0] || "/images/gym/cafe_smoothie_clean.jpg",
										alt: item.title,
										class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									}, null, 8, ["src", "alt"])]),
									createVNode("div", { class: "flex items-start justify-between gap-2 mb-2" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(item.title), 1), item.discount_price ? (openBlock(), createBlock("span", {
										key: 0,
										class: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400"
									}, " تخفیف ")) : createCommentVNode("", true)]),
									createVNode("p", { class: "text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed" }, toDisplayString(item.description), 1),
									item.nutritional_info ? (openBlock(), createBlock("div", {
										key: 0,
										class: "flex flex-wrap gap-2 mb-4 text-[11px] text-zinc-400"
									}, [item.nutritional_info.protein ? (openBlock(), createBlock("span", {
										key: 0,
										class: "px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-lime-400 font-mono"
									}, " پروتئین: " + toDisplayString(item.nutritional_info.protein), 1)) : createCommentVNode("", true), item.nutritional_info.calories ? (openBlock(), createBlock("span", {
										key: 1,
										class: "px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 font-mono"
									}, " کالری: " + toDisplayString(item.nutritional_info.calories), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true)
								]), createVNode("div", { class: "pt-4 border-t border-zinc-800/80 flex items-center justify-between" }, [createVNode("div", { class: "text-sm font-bold text-white font-mono" }, toDisplayString(unref(formatPrice)(item.effective_price)), 1), createVNode("button", {
									onClick: ($event) => orderItem(item),
									type: "button",
									class: "px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
								}, [createVNode(unref(ShoppingCart), { class: "w-3.5 h-3.5" }), createVNode("span", null, "سفارش فوری")], 8, ["onClick"])])]);
							}), 128))], 512), [[vShow, activeCategory.value === cat.id]])]);
						}), 128))])])
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Cafe.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
