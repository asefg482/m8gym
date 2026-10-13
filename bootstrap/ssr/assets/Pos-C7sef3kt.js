import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, withCtx, withDirectives } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Bell, CheckCircle2, Coffee, Crown, ShoppingCart, Trash2, Utensils } from "@lucide/vue";
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
						_push(ssrRenderComponent(unref(Head), { title: "صندوق سفارش حضوری بوفه - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Coffee), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>پایانه صندوق کافه و بوفه M8</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>صندوق سفارش حضوری بوفه سلامت</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>سفارش سریع شیک و مکمل، اعمال خودکار تخفیف ۲۰٪ اعضای طلایی VIP و ارسال آنی به مانیتور بوفه</p></div><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/buffet/orders",
							class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-bold transition-colors flex items-center gap-2"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(Bell), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
									_push(`<span${_scopeId}>مانیتور سفارش‌ها</span>`);
								} else return [createVNode(unref(Bell), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "مانیتور سفارش‌ها")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"${_scopeId}><div class="lg:col-span-8 space-y-4"${_scopeId}><div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex items-center justify-between"${_scopeId}><span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Utensils), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>منوی آماده سرو و نوشیدنی‌ها</span></span><span class="text-[11px] text-zinc-400"${_scopeId}>کلیک جهت افزودن سریع به فاکتور</span></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5"${_scopeId}><!--[-->`);
						ssrRenderList(__props.items, (it) => {
							_push(`<button type="button" class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group shadow-lg hover:shadow-lime-400/5"${_scopeId}><div${_scopeId}><span class="text-xs font-bold text-white group-hover:text-lime-400 transition-colors line-clamp-2"${_scopeId}>${ssrInterpolate(it.title)}</span>`);
							if (it.category?.title) _push(`<span class="text-[10px] text-zinc-500 block mt-1"${_scopeId}>${ssrInterpolate(it.category.title)}</span>`);
							else _push(`<!---->`);
							_push(`</div><div class="mt-4 pt-2 border-t border-zinc-800/80 flex items-center justify-between"${_scopeId}><span class="text-[10px] text-zinc-500"${_scopeId}>قیمت:</span><span class="text-xs font-black text-lime-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatPrice)(it.effective_price))}</span></div></button>`);
						});
						_push(`<!--]--></div></div><div class="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-2xl space-y-5 sticky top-24"${_scopeId}><div class="flex items-center justify-between pb-3 border-b border-zinc-800/80"${_scopeId}><h3 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShoppingCart), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سفارش جاری بوفه</span></h3><span class="text-[11px] font-mono font-bold text-lime-400"${_scopeId}>${ssrInterpolate(cart.value.length)} قلم</span></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>انتخاب ورزشکار (اعمال خودکار تخفیف ۲۰٪ VIP)</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, "") : ssrLooseEqual(selectedMemberId.value, "")) ? " selected" : ""}${_scopeId}>مشتری مهمان سالن</option><!--[-->`);
						ssrRenderList(__props.members, (m) => {
							_push(`<option${ssrRenderAttr("value", m.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedMemberId.value) ? ssrLooseContain(selectedMemberId.value, m.id) : ssrLooseEqual(selectedMemberId.value, m.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(m.full_name)} ${ssrInterpolate(m.member_profile?.level === "vip" ? "★ VIP" : "")}</option>`);
						});
						_push(`<!--]--></select></div><div class="divide-y divide-zinc-800/60 text-xs max-h-56 overflow-y-auto space-y-1"${_scopeId}><!--[-->`);
						ssrRenderList(cart.value, (item, idx) => {
							_push(`<div class="py-2.5 flex items-center justify-between"${_scopeId}><div class="min-w-0 pr-2"${_scopeId}><span class="font-bold text-white text-xs truncate block"${_scopeId}>${ssrInterpolate(item.product.title)}</span><span class="text-[11px] text-zinc-400 font-mono mt-0.5 block"${_scopeId}>${ssrInterpolate(item.qty)} × ${ssrInterpolate(unref(formatPrice)(item.product.effective_price))}</span></div><button class="text-rose-400 hover:text-rose-300 p-1.5 cursor-pointer shrink-0"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Trash2), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</button></div>`);
						});
						_push(`<!--]-->`);
						if (cart.value.length === 0) _push(`<div class="py-8 text-center text-zinc-500 text-xs"${_scopeId}> سبد سفارش خالی است. </div>`);
						else _push(`<!---->`);
						_push(`</div><div class="space-y-2 pt-3 border-t border-zinc-800/80 text-xs"${_scopeId}><div class="flex justify-between text-zinc-400"${_scopeId}><span${_scopeId}>مبلغ کل سفارش:</span><span class="font-mono text-white"${_scopeId}>${ssrInterpolate(unref(formatPrice)(subtotal.value))}</span></div>`);
						if (discount.value > 0) {
							_push(`<div class="flex justify-between text-amber-400 font-bold"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Crown), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
							_push(` تخفیف ۲۰٪ عضو VIP:</span><span class="font-mono"${_scopeId}>-${ssrInterpolate(unref(formatPrice)(discount.value))}</span></div>`);
						} else _push(`<!---->`);
						_push(`<div class="flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800"${_scopeId}><span${_scopeId}>مبلغ نهایی:</span><span class="font-mono text-base"${_scopeId}>${ssrInterpolate(unref(formatPrice)(total.value))}</span></div></div><button${ssrIncludeBooleanAttr(cart.value.length === 0) ? " disabled" : ""} class="w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.01] active:scale-[0.99]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت سفارش و ارسال به آشپزخانه</span></button></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "صندوق سفارش حضوری بوفه - Dashlite" }), createVNode("div", { class: "space-y-6" }, [createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
						createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Coffee), { class: "w-4 h-4" }), createVNode("span", null, "پایانه صندوق کافه و بوفه M8")]),
						createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "صندوق سفارش حضوری بوفه سلامت"),
						createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "سفارش سریع شیک و مکمل، اعمال خودکار تخفیف ۲۰٪ اعضای طلایی VIP و ارسال آنی به مانیتور بوفه")
					]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
						href: "/panel/buffet/orders",
						class: "px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-bold transition-colors flex items-center gap-2"
					}, {
						default: withCtx(() => [createVNode(unref(Bell), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "مانیتور سفارش‌ها")]),
						_: 1
					})])]), createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" }, [createVNode("div", { class: "lg:col-span-8 space-y-4" }, [createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg flex items-center justify-between" }, [createVNode("span", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Utensils), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "منوی آماده سرو و نوشیدنی‌ها")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, "کلیک جهت افزودن سریع به فاکتور")]), createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-3.5" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.items, (it) => {
						return openBlock(), createBlock("button", {
							key: it.id,
							onClick: ($event) => addToCart(it),
							type: "button",
							class: "p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-lime-400/50 text-right transition-all flex flex-col justify-between cursor-pointer group shadow-lg hover:shadow-lime-400/5"
						}, [createVNode("div", null, [createVNode("span", { class: "text-xs font-bold text-white group-hover:text-lime-400 transition-colors line-clamp-2" }, toDisplayString(it.title), 1), it.category?.title ? (openBlock(), createBlock("span", {
							key: 0,
							class: "text-[10px] text-zinc-500 block mt-1"
						}, toDisplayString(it.category.title), 1)) : createCommentVNode("", true)]), createVNode("div", { class: "mt-4 pt-2 border-t border-zinc-800/80 flex items-center justify-between" }, [createVNode("span", { class: "text-[10px] text-zinc-500" }, "قیمت:"), createVNode("span", { class: "text-xs font-black text-lime-400 font-mono" }, toDisplayString(unref(formatPrice)(it.effective_price)), 1)])], 8, ["onClick"]);
					}), 128))])]), createVNode("div", { class: "lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-2xl space-y-5 sticky top-24" }, [
						createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-zinc-800/80" }, [createVNode("h3", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(ShoppingCart), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "سفارش جاری بوفه")]), createVNode("span", { class: "text-[11px] font-mono font-bold text-lime-400" }, toDisplayString(cart.value.length) + " قلم", 1)]),
						createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "انتخاب ورزشکار (اعمال خودکار تخفیف ۲۰٪ VIP)"), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => selectedMemberId.value = $event,
							class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
						}, [createVNode("option", { value: "" }, "مشتری مهمان سالن"), (openBlock(true), createBlock(Fragment, null, renderList(__props.members, (m) => {
							return openBlock(), createBlock("option", {
								key: m.id,
								value: m.id
							}, toDisplayString(m.full_name) + " " + toDisplayString(m.member_profile?.level === "vip" ? "★ VIP" : ""), 9, ["value"]);
						}), 128))], 8, ["onUpdate:modelValue"]), [[vModelSelect, selectedMemberId.value]])]),
						createVNode("div", { class: "divide-y divide-zinc-800/60 text-xs max-h-56 overflow-y-auto space-y-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(cart.value, (item, idx) => {
							return openBlock(), createBlock("div", {
								key: idx,
								class: "py-2.5 flex items-center justify-between"
							}, [createVNode("div", { class: "min-w-0 pr-2" }, [createVNode("span", { class: "font-bold text-white text-xs truncate block" }, toDisplayString(item.product.title), 1), createVNode("span", { class: "text-[11px] text-zinc-400 font-mono mt-0.5 block" }, toDisplayString(item.qty) + " × " + toDisplayString(unref(formatPrice)(item.product.effective_price)), 1)]), createVNode("button", {
								onClick: ($event) => removeFromCart(idx),
								class: "text-rose-400 hover:text-rose-300 p-1.5 cursor-pointer shrink-0"
							}, [createVNode(unref(Trash2), { class: "w-4 h-4" })], 8, ["onClick"])]);
						}), 128)), cart.value.length === 0 ? (openBlock(), createBlock("div", {
							key: 0,
							class: "py-8 text-center text-zinc-500 text-xs"
						}, " سبد سفارش خالی است. ")) : createCommentVNode("", true)]),
						createVNode("div", { class: "space-y-2 pt-3 border-t border-zinc-800/80 text-xs" }, [
							createVNode("div", { class: "flex justify-between text-zinc-400" }, [createVNode("span", null, "مبلغ کل سفارش:"), createVNode("span", { class: "font-mono text-white" }, toDisplayString(unref(formatPrice)(subtotal.value)), 1)]),
							discount.value > 0 ? (openBlock(), createBlock("div", {
								key: 0,
								class: "flex justify-between text-amber-400 font-bold"
							}, [createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Crown), { class: "w-3.5 h-3.5" }), createTextVNode(" تخفیف ۲۰٪ عضو VIP:")]), createVNode("span", { class: "font-mono" }, "-" + toDisplayString(unref(formatPrice)(discount.value)), 1)])) : createCommentVNode("", true),
							createVNode("div", { class: "flex justify-between text-sm font-black text-lime-400 pt-2 border-t border-zinc-800" }, [createVNode("span", null, "مبلغ نهایی:"), createVNode("span", { class: "font-mono text-base" }, toDisplayString(unref(formatPrice)(total.value)), 1)])
						]),
						createVNode("button", {
							onClick: completeSale,
							disabled: cart.value.length === 0,
							class: "w-full h-12 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-black text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40 shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
						}, [createVNode(unref(CheckCircle2), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "ثبت سفارش و ارسال به آشپزخانه")], 8, ["disabled"])
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
