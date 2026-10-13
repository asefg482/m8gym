import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CheckCircle, Coffee, Trash2 } from "@lucide/vue";
//#region resources/js/Pages/Panel/Buffet/Pos.vue
var _sfc_main = {
	__name: "Pos",
	__ssrInlineRender: true,
	props: {
		items: Array,
		members: Array
	},
	setup(__props) {
		const props = __props;
		const selectedMemberId = ref("");
		const cart = ref([]);
		const selectedMember = computed(() => {
			return props.members.find((m) => m.id === selectedMemberId.value);
		});
		function addToCart(it) {
			const existing = cart.value.find((item) => item.product.id === it.id);
			if (existing) existing.qty++;
			else cart.value.push({
				product: it,
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
			if (selectedMember.value?.member_profile?.level === "vip") return Math.round(subtotal.value * .2);
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
				scope: "buffet",
				payment_method: "pos",
				delivery_type: "dine_in"
			}, { onSuccess: () => {
				cart.value = [];
			} });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "ثبت سفارش حضوری بوفه" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>صندوق سفارش حضوری بوفه و کافه M8</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>انتخاب سریع شیک‌ها و غذاهای رژیمی و اعمال خودکار ۲۰٪ تخفیف اعضای VIP</p></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"${_scopeId}><div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items, (it) => {
							_push(`<button type="button" class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group"${_scopeId}><span class="text-xs font-bold text-white group-hover:text-lime-400"${_scopeId}>${ssrInterpolate(it.title)}</span><span class="mt-3 text-xs font-bold text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(it.effective_price))}</span></button>`);
						});
						_push(`<!--]--></div><div class="lg:col-span-4 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><h3 class="text-xs font-bold text-lime-400 uppercase tracking-wider"${_scopeId}>سفارش جاری بوفه</h3><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>انتخاب ورزشکار (اعمال تخفیف ۲۰٪ VIP)</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, "") : ssrLooseEqual(selectedMemberId.value, "")) ? " selected" : ""}${_scopeId}>مشتری مهمان</option><!--[-->`);
						ssrRenderList(__props.members, (m) => {
							_push(`<option${ssrRenderAttr("value", m.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, m.id) : ssrLooseEqual(selectedMemberId.value, m.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(m.full_name)} ${ssrInterpolate(m.member_profile?.level === "vip" ? "(VIP)" : "")}</option>`);
						});
						_push(`<!--]--></select></div><div class="divide-y divide-zinc-800 text-xs max-h-56 overflow-y-auto space-y-1"${_scopeId}><!--[-->`);
						ssrRenderList(cart.value, (item, idx) => {
							_push(`<div class="py-2 flex items-center justify-between"${_scopeId}><div${_scopeId}><span class="font-bold text-white"${_scopeId}>${ssrInterpolate(item.product.title)}</span><span class="text-[10px] text-zinc-400 font-mono block"${_scopeId}>${ssrInterpolate(item.qty)} × ${ssrInterpolate(unref(formatPrice)(item.product.effective_price))}</span></div><button class="text-red-400 p-1 cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Trash2), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
							_push(`</button></div>`);
						});
						_push(`<!--]--></div><div class="space-y-1 pt-3 border-t border-zinc-800 text-xs"${_scopeId}><div class="flex justify-between text-zinc-400"${_scopeId}><span${_scopeId}>مبلغ کل:</span><span class="font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(subtotal.value))}</span></div>`);
						if (discount.value > 0) _push(`<div class="flex justify-between text-amber-400 font-bold"${_scopeId}><span${_scopeId}>تخفیف ۲۰٪ عضو VIP:</span><span class="font-mono"${_scopeId}>-${ssrInterpolate(unref(formatPrice)(discount.value))}</span></div>`);
						else _push(`<!---->`);
						_push(`<div class="flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800/60"${_scopeId}><span${_scopeId}>مبلغ نهایی:</span><span class="font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(total.value))}</span></div></div><button${ssrIncludeBooleanAttr(cart.value.length === 0) ? " disabled" : ""} class="w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت سفارش و ارسال به آشپزخانه</span></button></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "ثبت سفارش حضوری بوفه" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Coffee), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "صندوق سفارش حضوری بوفه و کافه M8")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "انتخاب سریع شیک‌ها و غذاهای رژیمی و اعمال خودکار ۲۰٪ تخفیف اعضای VIP")]), createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6" }, [createVNode("div", { class: "lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (it) => {
						return openBlock(), createBlock("button", {
							key: it.id,
							onClick: ($event) => addToCart(it),
							type: "button",
							class: "p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group"
						}, [createVNode("span", { class: "text-xs font-bold text-white group-hover:text-lime-400" }, toDisplayString(it.title), 1), createVNode("span", { class: "mt-3 text-xs font-bold text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(it.effective_price)), 1)], 8, ["onClick"]);
					}), 128))]), createVNode("div", { class: "lg:col-span-4 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4" }, [
						createVNode("h3", { class: "text-xs font-bold text-lime-400 uppercase tracking-wider" }, "سفارش جاری بوفه"),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "انتخاب ورزشکار (اعمال تخفیف ۲۰٪ VIP)"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => selectedMemberId.value = $event,
							class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
						}, [createVNode("option", { value: "" }, "مشتری مهمان"), (openBlock(true), createBlock(Fragment, null, renderList(__props.members, (m) => {
							return openBlock(), createBlock("option", {
								key: m.id,
								value: m.id
							}, toDisplayString(m.full_name) + " " + toDisplayString(m.member_profile?.level === "vip" ? "(VIP)" : ""), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, selectedMemberId.value]])]),
						createVNode("div", { class: "divide-y divide-zinc-800 text-xs max-h-56 overflow-y-auto space-y-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(cart.value, (item, idx) => {
							return openBlock(), createBlock("div", {
								key: idx,
								class: "py-2 flex items-center justify-between"
							}, [createVNode("div", null, [createVNode("span", { class: "font-bold text-white" }, toDisplayString(item.product.title), 1), createVNode("span", { class: "text-[10px] text-zinc-400 font-mono block" }, toDisplayString(item.qty) + " × " + toDisplayString(unref(formatPrice)(item.product.effective_price)), 1)]), createVNode("button", {
								onClick: ($event) => removeFromCart(idx),
								class: "text-red-400 p-1 cursor-pointer"
							}, [createVNode(unref(Trash2), { class: "w-3.5 h-3.5" })], 8, ["onClick"])]);
						}), 128))]),
						createVNode("div", { class: "space-y-1 pt-3 border-t border-zinc-800 text-xs" }, [
							createVNode("div", { class: "flex justify-between text-zinc-400" }, [createVNode("span", null, "مبلغ کل:"), createVNode("span", { class: "font-mono" }, toDisplayString(unref(formatPrice)(subtotal.value)), 1)]),
							discount.value > 0 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex justify-between text-amber-400 font-bold"
							}, [createVNode("span", null, "تخفیف ۲۰٪ عضو VIP:"), createVNode("span", { class: "font-mono" }, "-" + toDisplayString(unref(formatPrice)(discount.value)), 1)])) : createCommentVNode("", true),
							createVNode("div", { class: "flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800/60" }, [createVNode("span", null, "مبلغ نهایی:"), createVNode("span", { class: "font-mono" }, toDisplayString(unref(formatPrice)(total.value)), 1)])
						]),
						createVNode("button", {
							onClick: completeSale,
							disabled: cart.value.length === 0,
							class: "w-full h-12 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
						}, [createVNode(unref(CheckCircle), { class: "w-4 h-4" }), createVNode("span", null, "ثبت سفارش و ارسال به آشپزخانه")], 8, ["disabled"])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Buffet/Pos.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
