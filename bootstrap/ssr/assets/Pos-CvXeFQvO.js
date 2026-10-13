import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Calculator, CheckCircle, Trash2 } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "فروش حضوری فروشگاه (POS)" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calculator), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>صندوق فروش حضوری (POS فروشگاه M8)</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>فروش سریع اقلام، انتخاب خریدار با تخفیف خودکار VIP و تسویه کارتخوان یا نقدی</p></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"${_scopeId}><div class="lg:col-span-8 space-y-4"${_scopeId}><div class="grid grid-cols-2 sm:grid-cols-3 gap-3"${_scopeId}><!--[-->`);
						ssrRenderList(__props.products, (p) => {
							_push(`<button type="button" class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group"${_scopeId}><div${_scopeId}><span class="text-xs font-bold text-white group-hover:text-lime-400"${_scopeId}>${ssrInterpolate(p.title)}</span><span class="text-[10px] text-zinc-500 block mt-1"${_scopeId}>موجودی: ${ssrInterpolate(p.stock)}</span></div><div class="mt-3 text-xs font-bold text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(p.effective_price))}</div></button>`);
						});
						_push(`<!--]--></div></div><div class="lg:col-span-4 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-5"${_scopeId}><h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider"${_scopeId}>فاکتور جاری</h3><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>عضو خریدار (اختیاری جهت اعمال تخفیف VIP)</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, "") : ssrLooseEqual(selectedMemberId.value, "")) ? " selected" : ""}${_scopeId}>مشتری گذری / مهمان</option><!--[-->`);
						ssrRenderList(__props.members, (m) => {
							_push(`<option${ssrRenderAttr("value", m.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, m.id) : ssrLooseEqual(selectedMemberId.value, m.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(m.full_name)} ${ssrInterpolate(m.member_profile?.level === "vip" ? "(VIP)" : "")}</option>`);
						});
						_push(`<!--]--></select></div><div class="divide-y divide-zinc-800 text-xs max-h-56 overflow-y-auto space-y-1"${_scopeId}><!--[-->`);
						ssrRenderList(cart.value, (item, idx) => {
							_push(`<div class="py-2 flex items-center justify-between"${_scopeId}><div${_scopeId}><div class="font-bold text-white"${_scopeId}>${ssrInterpolate(item.product.title)}</div><div class="text-[10px] text-zinc-400 font-mono"${_scopeId}>${ssrInterpolate(item.qty)} × ${ssrInterpolate(unref(formatPrice)(item.product.effective_price))}</div></div><button class="text-red-400 hover:text-red-300 p-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Trash2), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
							_push(`</button></div>`);
						});
						_push(`<!--]-->`);
						if (cart.value.length === 0) _push(`<div class="py-8 text-center text-zinc-500 text-xs"${_scopeId}> سبد خالی است. روی کالاها کلیک کنید. </div>`);
						else _push(`<!---->`);
						_push(`</div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>روش پرداخت</label><div class="grid grid-cols-2 gap-2"${_scopeId}><button type="button" class="${ssrRenderClass([paymentMethod.value === "pos" ? "bg-lime-400 text-black border-lime-400" : "bg-zinc-950 text-zinc-400 border-zinc-800", "p-2 rounded-xl border text-xs font-bold"])}"${_scopeId}> کارتخوان (POS) </button><button type="button" class="${ssrRenderClass([paymentMethod.value === "cash" ? "bg-lime-400 text-black border-lime-400" : "bg-zinc-950 text-zinc-400 border-zinc-800", "p-2 rounded-xl border text-xs font-bold"])}"${_scopeId}> نقدی در صندوق </button></div></div><div class="space-y-1.5 pt-3 border-t border-zinc-800 text-xs"${_scopeId}><div class="flex justify-between text-zinc-400"${_scopeId}><span${_scopeId}>جمع کل:</span><span class="font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(subtotal.value))}</span></div>`);
						if (discount.value > 0) _push(`<div class="flex justify-between text-amber-400 font-bold"${_scopeId}><span${_scopeId}>تخفیف VIP:</span><span class="font-mono"${_scopeId}>-${ssrInterpolate(unref(formatPrice)(discount.value))}</span></div>`);
						else _push(`<!---->`);
						_push(`<div class="flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800/60"${_scopeId}><span${_scopeId}>مبلغ قابل پرداخت:</span><span class="font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(total.value))}</span></div></div><button${ssrIncludeBooleanAttr(cart.value.length === 0) ? " disabled" : ""} class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت و صدور فاکتور نهایی</span></button></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "فروش حضوری فروشگاه (POS)" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Calculator), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "صندوق فروش حضوری (POS فروشگاه M8)")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "فروش سریع اقلام، انتخاب خریدار با تخفیف خودکار VIP و تسویه کارتخوان یا نقدی")]), createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6" }, [createVNode("div", { class: "lg:col-span-8 space-y-4" }, [createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.products, (p) => {
						return openBlock(), createBlock("button", {
							key: p.id,
							onClick: ($event) => addToCart(p),
							type: "button",
							class: "p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group"
						}, [createVNode("div", null, [createVNode("span", { class: "text-xs font-bold text-white group-hover:text-lime-400" }, toDisplayString(p.title), 1), createVNode("span", { class: "text-[10px] text-zinc-500 block mt-1" }, "موجودی: " + toDisplayString(p.stock), 1)]), createVNode("div", { class: "mt-3 text-xs font-bold text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(p.effective_price)), 1)], 8, ["onClick"]);
					}), 128))])]), createVNode("div", { class: "lg:col-span-4 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-5" }, [
						createVNode("h3", { class: "text-xs font-bold text-lime-400 uppercase tracking-wider" }, "فاکتور جاری"),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "عضو خریدار (اختیاری جهت اعمال تخفیف VIP)"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => selectedMemberId.value = $event,
							class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
						}, [createVNode("option", { value: "" }, "مشتری گذری / مهمان"), (openBlock(true), createBlock(Fragment, null, renderList(__props.members, (m) => {
							return openBlock(), createBlock("option", {
								key: m.id,
								value: m.id
							}, toDisplayString(m.full_name) + " " + toDisplayString(m.member_profile?.level === "vip" ? "(VIP)" : ""), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, selectedMemberId.value]])]),
						createVNode("div", { class: "divide-y divide-zinc-800 text-xs max-h-56 overflow-y-auto space-y-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(cart.value, (item, idx) => {
							return openBlock(), createBlock("div", {
								key: idx,
								class: "py-2 flex items-center justify-between"
							}, [createVNode("div", null, [createVNode("div", { class: "font-bold text-white" }, toDisplayString(item.product.title), 1), createVNode("div", { class: "text-[10px] text-zinc-400 font-mono" }, toDisplayString(item.qty) + " × " + toDisplayString(unref(formatPrice)(item.product.effective_price)), 1)]), createVNode("button", {
								onClick: ($event) => removeFromCart(idx),
								class: "text-red-400 hover:text-red-300 p-1"
							}, [createVNode(unref(Trash2), { class: "w-3.5 h-3.5" })], 8, ["onClick"])]);
						}), 128)), cart.value.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "py-8 text-center text-zinc-500 text-xs"
						}, " سبد خالی است. روی کالاها کلیک کنید. ")) : createCommentVNode("", true)]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "روش پرداخت"), createVNode("div", { class: "grid grid-cols-2 gap-2" }, [createVNode("button", {
							onClick: ($event) => paymentMethod.value = "pos",
							type: "button",
							class: ["p-2 rounded-xl border text-xs font-bold", paymentMethod.value === "pos" ? "bg-lime-400 text-black border-lime-400" : "bg-zinc-950 text-zinc-400 border-zinc-800"]
						}, " کارتخوان (POS) ", 10, ["onClick"]), createVNode("button", {
							onClick: ($event) => paymentMethod.value = "cash",
							type: "button",
							class: ["p-2 rounded-xl border text-xs font-bold", paymentMethod.value === "cash" ? "bg-lime-400 text-black border-lime-400" : "bg-zinc-950 text-zinc-400 border-zinc-800"]
						}, " نقدی در صندوق ", 10, ["onClick"])])]),
						createVNode("div", { class: "space-y-1.5 pt-3 border-t border-zinc-800 text-xs" }, [
							createVNode("div", { class: "flex justify-between text-zinc-400" }, [createVNode("span", null, "جمع کل:"), createVNode("span", { class: "font-mono" }, toDisplayString(unref(formatPrice)(subtotal.value)), 1)]),
							discount.value > 0 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex justify-between text-amber-400 font-bold"
							}, [createVNode("span", null, "تخفیف VIP:"), createVNode("span", { class: "font-mono" }, "-" + toDisplayString(unref(formatPrice)(discount.value)), 1)])) : createCommentVNode("", true),
							createVNode("div", { class: "flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800/60" }, [createVNode("span", null, "مبلغ قابل پرداخت:"), createVNode("span", { class: "font-mono" }, toDisplayString(unref(formatPrice)(total.value)), 1)])
						]),
						createVNode("button", {
							onClick: completeSale,
							disabled: cart.value.length === 0,
							class: "w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
						}, [createVNode(unref(CheckCircle), { class: "w-4 h-4" }), createVNode("span", null, "ثبت و صدور فاکتور نهایی")], 8, ["disabled"])
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
