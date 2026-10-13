import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$1 } from "./PublicLayout-B_Abv_MX.js";
import { Fragment, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelText, withCtx, withDirectives, withKeys } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Eye, Search } from "@lucide/vue";
//#region resources/js/Pages/Public/Shop.vue
var _sfc_main = {
	__name: "Shop",
	__ssrInlineRender: true,
	props: {
		products: Object,
		categories: Array,
		currentCategory: [String, Number]
	},
	setup(__props) {
		const props = __props;
		const search = ref("");
		function filterCategory(catId) {
			router.get("/shop", {
				category: catId,
				search: search.value
			}, { preserveState: true });
		}
		function handleSearch() {
			router.get("/shop", {
				category: props.currentCategory,
				search: search.value
			}, { preserveState: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "فروشگاه مکمل و تجهیزات ورزشی M8 | ساری" }, null, _parent, _scopeId));
						_push(`<section class="relative bg-zinc-950 border-b border-zinc-800/80 py-14 sm:py-20 overflow-hidden mb-8"${_scopeId}><div class="absolute inset-0 z-0"${_scopeId}><img src="/images/gym/m8_hero_training.jpg" alt="فروشگاه تجهیزات M8" class="w-full h-full object-cover opacity-20"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"${_scopeId}></div><div class="absolute -top-24 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"${_scopeId}></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-6"${_scopeId}><div${_scopeId}><span class="inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/30 mb-3"${_scopeId}> فروشگاه اختصاصی و مکمل اورجینال M8 </span><h1 class="text-3xl sm:text-5xl font-black text-white"${_scopeId}>مکمل‌های اصل و لوازم تخصصی تمرین</h1><p class="text-xs sm:text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed"${_scopeId}> تضمین اصالت کالا، معتبرترین برندهای پروتئین وی، کراتین، آمینو، شیکرها و کمربندهای حرفه‌ای بدنسازی. </p></div><div class="relative w-full md:w-80 shrink-0"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="جستجوی مکمل، شیکر، کمربند..." class="w-full h-12 bg-zinc-900/90 border border-zinc-700/80 rounded-2xl pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 backdrop-blur-md"${_scopeId}><button class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Search), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</button></div></div></div></section><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"${_scopeId}><div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8"${_scopeId}><button class="${ssrRenderClass([!__props.currentCategory ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer"])}"${_scopeId}> همه محصولات </button><!--[-->`);
						ssrRenderList(__props.categories, (cat) => {
							_push(`<button class="${ssrRenderClass([__props.currentCategory == cat.id ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800", "px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer"])}"${_scopeId}>${ssrInterpolate(cat.title)}</button>`);
						});
						_push(`<!--]--></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"${_scopeId}><!--[-->`);
						ssrRenderList(__props.products.data, (product) => {
							_push(`<div class="rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-5 flex flex-col justify-between group hover:border-lime-400/40 transition-all"${_scopeId}><div${_scopeId}><div class="h-48 rounded-2xl overflow-hidden bg-zinc-950 mb-4 relative"${_scopeId}><img${ssrRenderAttr("src", product.images?.[0] || "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80")}${ssrRenderAttr("alt", product.title)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"${_scopeId}>`);
							if (product.stock <= 5 && product.stock > 0) _push(`<span class="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-md bg-amber-500/80 text-black"${_scopeId}> تنها ${ssrInterpolate(product.stock)} عدد مانده </span>`);
							else _push(`<!---->`);
							_push(`</div><span class="text-[10px] text-zinc-500 font-medium"${_scopeId}>${ssrInterpolate(product.category?.title)}</span><h3 class="text-xs font-bold text-white mt-1 line-clamp-2"${_scopeId}>${ssrInterpolate(product.title)}</h3><p class="text-[11px] text-zinc-400 line-clamp-2 mt-2 leading-relaxed"${_scopeId}>${ssrInterpolate(product.description)}</p></div><div class="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between"${_scopeId}><div${_scopeId}><div class="text-sm font-bold text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(product.effective_price))}</div>`);
							if (product.discount_price) _push(`<div class="text-[10px] text-zinc-500 line-through font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(product.price))}</div>`);
							else _push(`<!---->`);
							_push(`</div>`);
							_push(ssrRenderComponent(unref(Link), {
								href: "/shop/" + product.slug,
								class: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(unref(Eye), { class: "w-4 h-4" }, null, _parent, _scopeId));
									else return [createVNode(unref(Eye), { class: "w-4 h-4" })];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`</div></div>`);
						});
						_push(`<!--]--></div>`);
						if (__props.products.data.length === 0) _push(`<div class="p-16 text-center text-zinc-500"${_scopeId}> محصولی در این دسته‌بندی یافت نشد. </div>`);
						else _push(`<!---->`);
						_push(`</div>`);
					} else return [
						createVNode(unref(Head), { title: "فروشگاه مکمل و تجهیزات ورزشی M8 | ساری" }),
						createVNode("section", { class: "relative bg-zinc-950 border-b border-zinc-800/80 py-14 sm:py-20 overflow-hidden mb-8" }, [createVNode("div", { class: "absolute inset-0 z-0" }, [
							createVNode("img", {
								src: "/images/gym/m8_hero_training.jpg",
								alt: "فروشگاه تجهیزات M8",
								class: "w-full h-full object-cover opacity-20"
							}),
							createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" }),
							createVNode("div", { class: "absolute -top-24 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" })
						]), createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" }, [createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-6" }, [createVNode("div", null, [
							createVNode("span", { class: "inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold border border-lime-400/30 mb-3" }, " فروشگاه اختصاصی و مکمل اورجینال M8 "),
							createVNode("h1", { class: "text-3xl sm:text-5xl font-black text-white" }, "مکمل‌های اصل و لوازم تخصصی تمرین"),
							createVNode("p", { class: "text-xs sm:text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed" }, " تضمین اصالت کالا، معتبرترین برندهای پروتئین وی، کراتین، آمینو، شیکرها و کمربندهای حرفه‌ای بدنسازی. ")
						]), createVNode("div", { class: "relative w-full md:w-80 shrink-0" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							onKeyup: withKeys(handleSearch, ["enter"]),
							type: "text",
							placeholder: "جستجوی مکمل، شیکر، کمربند...",
							class: "w-full h-12 bg-zinc-900/90 border border-zinc-700/80 rounded-2xl pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 backdrop-blur-md"
						}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]]), createVNode("button", {
							onClick: handleSearch,
							class: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
						}, [createVNode(unref(Search), { class: "w-4 h-4" })])])])])]),
						createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" }, [
							createVNode("div", { class: "flex items-center gap-2 overflow-x-auto pb-4 mb-8" }, [createVNode("button", {
								onClick: ($event) => filterCategory(null),
								class: ["px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer", !__props.currentCategory ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
							}, " همه محصولات ", 10, ["onClick"]), (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (cat) => {
								return openBlock(), createBlock("button", {
									key: cat.id,
									onClick: ($event) => filterCategory(cat.id),
									class: ["px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer", __props.currentCategory == cat.id ? "bg-lime-400 text-black shadow-md shadow-lime-400/20" : "bg-zinc-900 text-zinc-400 border border-zinc-800"]
								}, toDisplayString(cat.title), 11, ["onClick"]);
							}), 128))]),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.products.data, (product) => {
								return openBlock(), createBlock("div", {
									key: product.id,
									class: "rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-5 flex flex-col justify-between group hover:border-lime-400/40 transition-all"
								}, [createVNode("div", null, [
									createVNode("div", { class: "h-48 rounded-2xl overflow-hidden bg-zinc-950 mb-4 relative" }, [createVNode("img", {
										src: product.images?.[0] || "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80",
										alt: product.title,
										class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									}, null, 8, ["src", "alt"]), product.stock <= 5 && product.stock > 0 ? (openBlock(), createBlock("span", {
										key: 0,
										class: "absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-md bg-amber-500/80 text-black"
									}, " تنها " + toDisplayString(product.stock) + " عدد مانده ", 1)) : createCommentVNode("", true)]),
									createVNode("span", { class: "text-[10px] text-zinc-500 font-medium" }, toDisplayString(product.category?.title), 1),
									createVNode("h3", { class: "text-xs font-bold text-white mt-1 line-clamp-2" }, toDisplayString(product.title), 1),
									createVNode("p", { class: "text-[11px] text-zinc-400 line-clamp-2 mt-2 leading-relaxed" }, toDisplayString(product.description), 1)
								]), createVNode("div", { class: "mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between" }, [createVNode("div", null, [createVNode("div", { class: "text-sm font-bold text-white font-mono" }, toDisplayString(unref(formatPrice)(product.effective_price)), 1), product.discount_price ? (openBlock(), createBlock("div", {
									key: 0,
									class: "text-[10px] text-zinc-500 line-through font-mono"
								}, toDisplayString(unref(formatPrice)(product.price)), 1)) : createCommentVNode("", true)]), createVNode(unref(Link), {
									href: "/shop/" + product.slug,
									class: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-lime-400 hover:bg-lime-400 hover:text-black transition-colors"
								}, {
									default: withCtx(() => [createVNode(unref(Eye), { class: "w-4 h-4" })]),
									_: 1
								}, 8, ["href"])])]);
							}), 128))]),
							__props.products.data.length === 0 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "p-16 text-center text-zinc-500"
							}, " محصولی در این دسته‌بندی یافت نشد. ")) : createCommentVNode("", true)
						])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Shop.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
