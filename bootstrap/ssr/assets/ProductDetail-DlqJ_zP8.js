import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { t as _sfc_main$1 } from "./PublicLayout-BmUbivea.js";
import { createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { ShieldCheck, ShoppingBag, Truck } from "@lucide/vue";
//#region resources/js/Pages/Public/ProductDetail.vue
var _sfc_main = {
	__name: "ProductDetail",
	__ssrInlineRender: true,
	props: {
		product: Object,
		related: Array
	},
	setup(__props) {
		const props = __props;
		const qty = ref(1);
		function checkout() {
			router.post("/payment/checkout", {
				items: [{
					product_id: props.product.id,
					qty: qty.value
				}],
				scope: "shop",
				payment_method: "online",
				delivery_type: "delivery"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: __props.product.title }, null, _parent, _scopeId));
						_push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"${_scopeId}><div class="flex items-center gap-2 text-xs text-zinc-500 mb-8"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/",
							class: "hover:text-zinc-300"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`خانه`);
								else return [createTextVNode("خانه")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<span${_scopeId}>/</span>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/shop",
							class: "hover:text-zinc-300"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`فروشگاه`);
								else return [createTextVNode("فروشگاه")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<span${_scopeId}>/</span><span class="text-zinc-300"${_scopeId}>${ssrInterpolate(__props.product.title)}</span></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"${_scopeId}><div class="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", __props.product.images?.[0] || "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80")}${ssrRenderAttr("alt", __props.product.title)} class="max-h-96 object-contain rounded-2xl"${_scopeId}></div><div class="flex flex-col justify-between"${_scopeId}><div${_scopeId}><span class="text-xs font-bold text-lime-400 uppercase tracking-widest"${_scopeId}>${ssrInterpolate(__props.product.category?.title || "تجهیزات M8")}</span><h1 class="text-2xl sm:text-3xl font-black text-white mt-2"${_scopeId}>${ssrInterpolate(__props.product.title)}</h1><div class="mt-4 flex items-baseline gap-3"${_scopeId}><span class="text-2xl font-black text-white font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.product.effective_price))}</span>`);
						if (__props.product.discount_price) _push(`<span class="text-sm text-zinc-500 line-through font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.product.price))}</span>`);
						else _push(`<!---->`);
						_push(`</div><div class="mt-4 flex items-center gap-2 text-xs"${_scopeId}><span class="${ssrRenderClass([__props.product.stock > 0 ? "bg-lime-400" : "bg-red-500", "w-2.5 h-2.5 rounded-full"])}"${_scopeId}></span><span class="${ssrRenderClass(__props.product.stock > 0 ? "text-zinc-300" : "text-red-400")}"${_scopeId}>${ssrInterpolate(__props.product.stock > 0 ? `موجود در انبار باشگاه (${__props.product.stock} عدد)` : "ناموجود")}</span></div><div class="mt-6 text-xs text-zinc-400 leading-relaxed space-y-3"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.product.description)}</p></div><div class="mt-6 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Truck), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>امکان ارسال پستی به سراسر کشور یا تحویل حضوری در باشگاه M8 ساری</span></div><div class="flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShieldCheck), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ضمانت اصالت ۱۰۰٪ کالا و تاییدیه سلامت وزارت بهداشت</span></div></div></div><div class="mt-8 pt-6 border-t border-zinc-800 flex items-center gap-4"${_scopeId}><div class="flex items-center border border-zinc-800 rounded-2xl bg-zinc-900 px-3 py-2"${_scopeId}><button class="px-2 text-zinc-400 hover:text-white"${_scopeId}>-</button><span class="px-3 text-sm font-bold text-white font-mono"${_scopeId}>${ssrInterpolate(qty.value)}</span><button class="px-2 text-zinc-400 hover:text-white"${_scopeId}>+</button></div><button${ssrIncludeBooleanAttr(__props.product.stock <= 0) ? " disabled" : ""} class="flex-1 h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-40"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>خرید مستقیم و پرداخت آنلاین</span></button></div></div></div></div>`);
					} else return [createVNode(unref(Head), { title: __props.product.title }, null, 8, ["title"]), createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" }, [createVNode("div", { class: "flex items-center gap-2 text-xs text-zinc-500 mb-8" }, [
						createVNode(unref(Link), {
							href: "/",
							class: "hover:text-zinc-300"
						}, {
							default: withCtx(() => [createTextVNode("خانه")]),
							_: 1
						}),
						createVNode("span", null, "/"),
						createVNode(unref(Link), {
							href: "/shop",
							class: "hover:text-zinc-300"
						}, {
							default: withCtx(() => [createTextVNode("فروشگاه")]),
							_: 1
						}),
						createVNode("span", null, "/"),
						createVNode("span", { class: "text-zinc-300" }, toDisplayString(__props.product.title), 1)
					]), createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" }, [createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 p-6 flex items-center justify-center" }, [createVNode("img", {
						src: __props.product.images?.[0] || "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&q=80",
						alt: __props.product.title,
						class: "max-h-96 object-contain rounded-2xl"
					}, null, 8, ["src", "alt"])]), createVNode("div", { class: "flex flex-col justify-between" }, [createVNode("div", null, [
						createVNode("span", { class: "text-xs font-bold text-lime-400 uppercase tracking-widest" }, toDisplayString(__props.product.category?.title || "تجهیزات M8"), 1),
						createVNode("h1", { class: "text-2xl sm:text-3xl font-black text-white mt-2" }, toDisplayString(__props.product.title), 1),
						createVNode("div", { class: "mt-4 flex items-baseline gap-3" }, [createVNode("span", { class: "text-2xl font-black text-white font-mono" }, toDisplayString(unref(formatPrice)(__props.product.effective_price)), 1), __props.product.discount_price ? (openBlock(), createBlock("span", {
							key: 0,
							class: "text-sm text-zinc-500 line-through font-mono"
						}, toDisplayString(unref(formatPrice)(__props.product.price)), 1)) : createCommentVNode("", true)]),
						createVNode("div", { class: "mt-4 flex items-center gap-2 text-xs" }, [createVNode("span", { class: ["w-2.5 h-2.5 rounded-full", __props.product.stock > 0 ? "bg-lime-400" : "bg-red-500"] }, null, 2), createVNode("span", { class: __props.product.stock > 0 ? "text-zinc-300" : "text-red-400" }, toDisplayString(__props.product.stock > 0 ? `موجود در انبار باشگاه (${__props.product.stock} عدد)` : "ناموجود"), 3)]),
						createVNode("div", { class: "mt-6 text-xs text-zinc-400 leading-relaxed space-y-3" }, [createVNode("p", null, toDisplayString(__props.product.description), 1)]),
						createVNode("div", { class: "mt-6 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-2" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(Truck), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "امکان ارسال پستی به سراسر کشور یا تحویل حضوری در باشگاه M8 ساری")]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode(unref(ShieldCheck), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "ضمانت اصالت ۱۰۰٪ کالا و تاییدیه سلامت وزارت بهداشت")])])
					]), createVNode("div", { class: "mt-8 pt-6 border-t border-zinc-800 flex items-center gap-4" }, [createVNode("div", { class: "flex items-center border border-zinc-800 rounded-2xl bg-zinc-900 px-3 py-2" }, [
						createVNode("button", {
							onClick: ($event) => qty.value > 1 && qty.value--,
							class: "px-2 text-zinc-400 hover:text-white"
						}, "-", 8, ["onClick"]),
						createVNode("span", { class: "px-3 text-sm font-bold text-white font-mono" }, toDisplayString(qty.value), 1),
						createVNode("button", {
							onClick: ($event) => qty.value < __props.product.stock && qty.value++,
							class: "px-2 text-zinc-400 hover:text-white"
						}, "+", 8, ["onClick"])
					]), createVNode("button", {
						onClick: checkout,
						disabled: __props.product.stock <= 0,
						class: "flex-1 h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-40"
					}, [createVNode(unref(ShoppingBag), { class: "w-4 h-4" }), createVNode("span", null, "خرید مستقیم و پرداخت آنلاین")], 8, ["disabled"])])])])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/ProductDetail.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
