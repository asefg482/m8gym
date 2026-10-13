import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Banknote, Calculator, CheckCircle2, CreditCard, Crown, Package, ShoppingBag, ShoppingCart, Trash2 } from "@lucide/vue";
//#region resources/js/Pages/Panel/Shop/Pos.vue
var _sfc_main = {
	__name: "Pos",
	__ssrInlineRender: true,
	props: {
		products: Array,
		members: Array
	},
	setup(__props) {
		const props = __props;
		const selectedMemberId = ref("");
		const cart = ref([]);
		const paymentMethod = ref("pos");
		const selectedMember = computed(() => {
			return props.members.find((m) => m.id === selectedMemberId.value);
		});
		function addToCart(p) {
			const existing = cart.value.find((item) => item.product.id === p.id);
			if (existing) {
				if (existing.qty < p.stock) existing.qty++;
			} else cart.value.push({
				product: p,
				qty: 1
			});
		}
		function removeFromCart(index) {
			cart.value.splice(index, 1);
		}
		const subtotal = computed(() => {
			return cart.value.reduce((acc, item) => acc + item.product.effective_price * item.qty, 0);
		});
		const discount = computed(() => {
			if (selectedMember.value?.member_profile?.level === "vip") return Math.round(subtotal.value * .15);
			return 0;
		});
		const total = computed(() => {
			return Math.max(0, subtotal.value - discount.value);
		});
		function completeSale() {
			if (cart.value.length === 0) return;
			router.post("/payment/checkout", {
				items: cart.value.map((item) => ({
					product_id: item.product.id,
					qty: item.qty
				})),
				scope: "shop",
				payment_method: paymentMethod.value,
				delivery_type: "pickup"
			}, { onSuccess: () => {
				cart.value = [];
			} });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "صندوق فروش حضوری (POS) - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calculator), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سیستم پایانه فروشگاهی پیشرفته M8</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>صندوق فروش حضوری (POS فروشگاه)</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>فروش سریع اقلام به اعضا و مشتریان گذری، محاسبه خودکار تخفیف اعضای VIP و تسویه آنی</p></div><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/shop/orders",
							class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-bold transition-colors flex items-center gap-2"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(ShoppingBag), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>سفارش‌ها و فاکتورها</span>`);
								} else return [createVNode(unref(ShoppingBag), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "سفارش‌ها و فاکتورها")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"${_scopeId}><div class="lg:col-span-8 space-y-4"${_scopeId}><div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex items-center justify-between"${_scopeId}><span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Package), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>اقلام موجود برای فروش سریع</span></span><span class="text-[11px] text-zinc-400"${_scopeId}>کلیک روی هر کالا جهت افزودن به فاکتور</span></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5"${_scopeId}><!--[-->`);
						ssrRenderList(__props.products, (p) => {
							_push(`<button type="button"${ssrIncludeBooleanAttr(p.stock <= 0) ? " disabled" : ""} class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group shadow-lg hover:shadow-lime-400/5 disabled:opacity-40 disabled:cursor-not-allowed"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2"${_scopeId}><span class="text-xs font-bold text-white group-hover:text-lime-400 transition-colors line-clamp-2"${_scopeId}>${ssrInterpolate(p.title)}</span></div><div class="mt-2 flex items-center gap-1.5"${_scopeId}><span class="${ssrRenderClass([p.stock > 5 ? "bg-emerald-400" : p.stock > 0 ? "bg-amber-400" : "bg-rose-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span><span class="text-[11px] text-zinc-400 font-mono"${_scopeId}>موجودی: ${ssrInterpolate(p.stock)}</span></div></div><div class="mt-4 pt-2 border-t border-zinc-800/80 flex items-center justify-between"${_scopeId}><span class="text-[10px] text-zinc-500"${_scopeId}>قیمت:</span><span class="text-xs font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(p.effective_price))}</span></div></button>`);
						});
						_push(`<!--]--></div></div><div class="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-2xl space-y-5 sticky top-24"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-zinc-800/80"${_scopeId}><h3 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingCart), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پیش‌فاکتور صندوق (POS)</span></h3><span class="text-[11px] font-mono font-bold text-lime-400"${_scopeId}>${ssrInterpolate(cart.value.length)} قلم</span></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>خریدار (اعمال تخفیف خودکار اعضا)</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, "") : ssrLooseEqual(selectedMemberId.value, "")) ? " selected" : ""}${_scopeId}>مشتری گذری / مهمان آزاد</option><!--[-->`);
						ssrRenderList(__props.members, (m) => {
							_push(`<option${ssrRenderAttr("value", m.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, m.id) : ssrLooseEqual(selectedMemberId.value, m.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(m.full_name)} ${ssrInterpolate(m.member_profile?.level === "vip" ? "★ VIP" : "")}</option>`);
						});
						_push(`<!--]--></select></div><div class="divide-y divide-zinc-800/60 max-h-56 overflow-y-auto space-y-1"${_scopeId}><!--[-->`);
						ssrRenderList(cart.value, (item, idx) => {
							_push(`<div class="py-2.5 flex items-center justify-between"${_scopeId}><div class="min-w-0 pr-2"${_scopeId}><div class="font-bold text-white text-xs truncate"${_scopeId}>${ssrInterpolate(item.product.title)}</div><div class="text-[11px] text-zinc-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(item.qty)} × ${ssrInterpolate(unref(formatPrice)(item.product.effective_price))}</div></div><button class="text-rose-400 hover:text-rose-300 p-1.5 cursor-pointer shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</button></div>`);
						});
						_push(`<!--]-->`);
						if (cart.value.length === 0) _push(`<div class="py-8 text-center text-zinc-500 text-xs"${_scopeId}> سبد خرید خالی است. کالاها را انتخاب فرمایید. </div>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>شیوه تسویه و پرداخت</label><div class="grid grid-cols-2 gap-2"${_scopeId}><button type="button" class="${ssrRenderClass([paymentMethod.value === "pos" ? "bg-lime-400 text-black border-lime-400 shadow-md shadow-lime-400/20" : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white", "p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"])}"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>دستگاه کارتخوان</span></button><button type="button" class="${ssrRenderClass([paymentMethod.value === "cash" ? "bg-lime-400 text-black border-lime-400 shadow-md shadow-lime-400/20" : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white", "p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"])}"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Banknote), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>نقدی صندوق</span></button></div></div><div class="space-y-2 pt-3 border-t border-zinc-800/80 text-xs"${_scopeId}><div class="flex justify-between text-zinc-400"${_scopeId}><span${_scopeId}>جمع اقلام:</span><span class="font-mono text-white"${_scopeId}>${ssrInterpolate(unref(formatPrice)(subtotal.value))}</span></div>`);
						if (discount.value > 0) {
							_push(`<div class="flex justify-between text-amber-400 font-bold"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Crown), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
							_push(` تخفیف VIP (۱۵٪):</span><span class="font-mono"${_scopeId}>-${ssrInterpolate(unref(formatPrice)(discount.value))}</span></div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800"${_scopeId}><span${_scopeId}>مبلغ نهایی فاکتور:</span><span class="font-mono text-base"${_scopeId}>${ssrInterpolate(unref(formatPrice)(total.value))}</span></div></div><button${ssrIncludeBooleanAttr(cart.value.length === 0) ? " disabled" : ""} class="w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.01] active:scale-[0.99]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت و صدور فاکتور نهایی</span></button></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "صندوق فروش حضوری (POS) - Dashlite" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Calculator), { class: "w-4 h-4" }), createVNode("span", null, "سیستم پایانه فروشگاهی پیشرفته M8")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "صندوق فروش حضوری (POS فروشگاه)"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "فروش سریع اقلام به اعضا و مشتریان گذری، محاسبه خودکار تخفیف اعضای VIP و تسویه آنی")
					]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: "/panel/shop/orders",
						class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-bold transition-colors flex items-center gap-2"
					}, {
						default: withCtx(() => [createVNode(unref(ShoppingBag), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "سفارش‌ها و فاکتورها")]),
						_: 1
					})])]), createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" }, [createVNode("div", { class: "lg:col-span-8 space-y-4" }, [createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex items-center justify-between" }, [createVNode("span", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Package), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "اقلام موجود برای فروش سریع")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, "کلیک روی هر کالا جهت افزودن به فاکتور")]), createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-3.5" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.products, (p) => {
						return openBlock(), createBlock("button", {
							key: p.id,
							onClick: ($event) => addToCart(p),
							type: "button",
							disabled: p.stock <= 0,
							class: "p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group shadow-lg hover:shadow-lime-400/5 disabled:opacity-40 disabled:cursor-not-allowed"
						}, [createVNode("div", null, [createVNode("div", { class: "flex items-start justify-between gap-2" }, [createVNode("span", { class: "text-xs font-bold text-white group-hover:text-lime-400 transition-colors line-clamp-2" }, toDisplayString(p.title), 1)]), createVNode("div", { class: "mt-2 flex items-center gap-1.5" }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", p.stock > 5 ? "bg-emerald-400" : p.stock > 0 ? "bg-amber-400" : "bg-rose-400"] }, null, 2), createVNode("span", { class: "text-[11px] text-zinc-400 font-mono" }, "موجودی: " + toDisplayString(p.stock), 1)])]), createVNode("div", { class: "mt-4 pt-2 border-t border-zinc-800/80 flex items-center justify-between" }, [createVNode("span", { class: "text-[10px] text-zinc-500" }, "قیمت:"), createVNode("span", { class: "text-xs font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(p.effective_price)), 1)])], 8, ["onClick", "disabled"]);
					}), 128))])]), createVNode("div", { class: "lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-2xl space-y-5 sticky top-24" }, [
						createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-zinc-800/80" }, [createVNode("h3", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(ShoppingCart), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "پیش‌فاکتور صندوق (POS)")]), createVNode("span", { class: "text-[11px] font-mono font-bold text-lime-400" }, toDisplayString(cart.value.length) + " قلم", 1)]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "خریدار (اعمال تخفیف خودکار اعضا)"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => selectedMemberId.value = $event,
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
						}, [createVNode("option", { value: "" }, "مشتری گذری / مهمان آزاد"), (openBlock(true), createBlock(Fragment, null, renderList(__props.members, (m) => {
							return openBlock(), createBlock("option", {
								key: m.id,
								value: m.id
							}, toDisplayString(m.full_name) + " " + toDisplayString(m.member_profile?.level === "vip" ? "★ VIP" : ""), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, selectedMemberId.value]])]),
						createVNode("div", { class: "divide-y divide-zinc-800/60 max-h-56 overflow-y-auto space-y-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(cart.value, (item, idx) => {
							return openBlock(), createBlock("div", {
								key: idx,
								class: "py-2.5 flex items-center justify-between"
							}, [createVNode("div", { class: "min-w-0 pr-2" }, [createVNode("div", { class: "font-bold text-white text-xs truncate" }, toDisplayString(item.product.title), 1), createVNode("div", { class: "text-[11px] text-zinc-400 font-mono mt-0.5" }, toDisplayString(item.qty) + " × " + toDisplayString(unref(formatPrice)(item.product.effective_price)), 1)]), createVNode("button", {
								onClick: ($event) => removeFromCart(idx),
								class: "text-rose-400 hover:text-rose-300 p-1.5 cursor-pointer shrink-0"
							}, [createVNode(unref(Trash2), { class: "w-4 h-4" })], 8, ["onClick"])]);
						}), 128)), cart.value.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "py-8 text-center text-zinc-500 text-xs"
						}, " سبد خرید خالی است. کالاها را انتخاب فرمایید. ")) : createCommentVNode("", true)]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "شیوه تسویه و پرداخت"), createVNode("div", { class: "grid grid-cols-2 gap-2" }, [createVNode("button", {
							onClick: ($event) => paymentMethod.value = "pos",
							type: "button",
							class: ["p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer", paymentMethod.value === "pos" ? "bg-lime-400 text-black border-lime-400 shadow-md shadow-lime-400/20" : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white"]
						}, [createVNode(unref(CreditCard), { class: "w-3.5 h-3.5" }), createVNode("span", null, "دستگاه کارتخوان")], 10, ["onClick"]), createVNode("button", {
							onClick: ($event) => paymentMethod.value = "cash",
							type: "button",
							class: ["p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer", paymentMethod.value === "cash" ? "bg-lime-400 text-black border-lime-400 shadow-md shadow-lime-400/20" : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white"]
						}, [createVNode(unref(Banknote), { class: "w-3.5 h-3.5" }), createVNode("span", null, "نقدی صندوق")], 10, ["onClick"])])]),
						createVNode("div", { class: "space-y-2 pt-3 border-t border-zinc-800/80 text-xs" }, [
							createVNode("div", { class: "flex justify-between text-zinc-400" }, [createVNode("span", null, "جمع اقلام:"), createVNode("span", { class: "font-mono text-white" }, toDisplayString(unref(formatPrice)(subtotal.value)), 1)]),
							discount.value > 0 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex justify-between text-amber-400 font-bold"
							}, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Crown), { class: "w-3.5 h-3.5" }), createTextVNode(" تخفیف VIP (۱۵٪):")]), createVNode("span", { class: "font-mono" }, "-" + toDisplayString(unref(formatPrice)(discount.value)), 1)])) : createCommentVNode("", true),
							createVNode("div", { class: "flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800" }, [createVNode("span", null, "مبلغ نهایی فاکتور:"), createVNode("span", { class: "font-mono text-base" }, toDisplayString(unref(formatPrice)(total.value)), 1)])
						]),
						createVNode("button", {
							onClick: completeSale,
							disabled: cart.value.length === 0,
							class: "w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
						}, [createVNode(unref(CheckCircle2), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "ثبت و صدور فاکتور نهایی")], 8, ["disabled"])
					])])])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Shop/Pos.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
