import { t as _sfc_main$1 } from "./PanelLayout-DGUuVM6t.js";
import { r as formatPrice } from "./formatters-GAWR9pZC.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Clock, Edit3, Plus, Scissors, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/Service/Services.vue
var _sfc_main = {
	__name: "Services",
	__ssrInlineRender: true,
	props: { services: Array },
	setup(__props) {
		const isModalOpen = ref(false);
		const editingService = ref(null);
		const form = useForm({
			title: "",
			category: "massage",
			duration_min: 45,
			price: 5e5,
			description: "",
			is_active: true
		});
		function openCreate() {
			editingService.value = null;
			form.reset();
			isModalOpen.value = true;
		}
		function openEdit(srv) {
			editingService.value = srv;
			form.title = srv.title;
			form.category = srv.category;
			form.duration_min = srv.duration_min;
			form.price = srv.price;
			form.description = srv.description || "";
			form.is_active = Boolean(srv.is_active);
			isModalOpen.value = true;
		}
		function submitService() {
			if (editingService.value) form.put(`/panel/service/services/${editingService.value.id}`, { onSuccess: () => isModalOpen.value = false });
			else form.post("/panel/service/services", { onSuccess: () => isModalOpen.value = false });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "تعریف خدمات و تعرفه‌ها - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Scissors), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تعرفه و کاتالوگ خدمات رفاهی</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>تعریف خدمات و تعرفه‌های اسپا و سالن</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیریت انواع ماساژهای درمانی و ورزشی، آرایشگاه اختصاصی آقایان، مدت زمان هر جلسه و نرخ تعرفه‌ها</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>تعریف خدمت جدید</span></button></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Scissors), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>لیست پکیج‌ها و خدمات فعال</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>${ssrInterpolate(__props.services.length)} خدمت فعال</span></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>عنوان خدمت</th><th class="p-4 font-bold"${_scopeId}>دسته‌بندی</th><th class="p-4 font-bold"${_scopeId}>مدت زمان جلسه</th><th class="p-4 font-bold"${_scopeId}>تعرفه (تومان)</th><th class="p-4 font-bold"${_scopeId}>وضعیت ارائه</th><th class="p-4 font-bold text-center"${_scopeId}>عملیات</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.services, (srv) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="font-bold text-white text-xs sm:text-sm"${_scopeId}>${ssrInterpolate(srv.title)}</div>`);
							if (srv.description) _push(`<div class="text-zinc-500 text-[11px] line-clamp-1 mt-0.5"${_scopeId}>${ssrInterpolate(srv.description)}</div>`);
							else _push(`<!---->`);
							_push(`</td><td class="p-4"${_scopeId}><span class="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold"${_scopeId}>${ssrInterpolate(srv.category === "massage" ? "ماساژ و اسپا" : "پیرایشگاه آقایان")}</span></td><td class="p-4 font-mono text-zinc-300 flex items-center gap-1.5 mt-2"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Clock), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>${ssrInterpolate(srv.duration_min)} دقیقه</span></td><td class="p-4 font-mono font-black text-lime-400 text-sm"${_scopeId}>${ssrInterpolate(unref(formatPrice)(srv.price))}</td><td class="p-4"${_scopeId}><span class="${ssrRenderClass([srv.is_active ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-zinc-800 text-zinc-500 border-zinc-700", "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"])}"${_scopeId}><span class="${ssrRenderClass([srv.is_active ? "bg-emerald-400" : "bg-zinc-500", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(srv.is_active ? "فعال و قابل رزرو" : "غیرفعال")}</span></td><td class="p-4 text-center"${_scopeId}><button class="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>ویرایش</span></button></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.services || __props.services.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> خدمتی تعریف نگردیده است. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div></div>`);
						if (isModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Scissors), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingService.value ? "ویرایش تعرفه و خدمت" : "تعریف پکیج خدماتی جدید")}</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>عنوان خدمت</label><input${ssrRenderAttr("value", unref(form).title)} type="text" placeholder="مثلاً: ماساژ ریکاوری عضلانی دیپ تیشو (Deep Tissue)" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400" required${_scopeId}></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5"${_scopeId}><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>دسته‌بندی</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="massage"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "massage") : ssrLooseEqual(unref(form).category, "massage")) ? " selected" : ""}${_scopeId}>ماساژ و اسپا ورزشی</option><option value="barber"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "barber") : ssrLooseEqual(unref(form).category, "barber")) ? " selected" : ""}${_scopeId}>پیرایشگاه اختصاصی آقایان</option></select></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>مدت زمان (دقیقه)</label><input${ssrRenderAttr("value", unref(form).duration_min)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>تعرفه هزینه (تومان)</label><input${ssrRenderAttr("value", unref(form).price)} type="number" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400" required${_scopeId}></div><div${_scopeId}><label class="block text-xs font-bold text-zinc-300 mb-1.5"${_scopeId}>شرح فواید و تجهیزات مورد استفاده</label><textarea rows="2" placeholder="تسکین دردهای عضلانی، بادکش، استفاده از روغن‌های گیاهی ارگانیک..." class="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال ذخیره...</span>`);
							else _push(`<span${_scopeId}>ذخیره خدمت</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "تعریف خدمات و تعرفه‌ها - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Scissors), { class: "w-4 h-4" }), createVNode("span", null, "تعرفه و کاتالوگ خدمات رفاهی")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "تعریف خدمات و تعرفه‌های اسپا و سالن"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیریت انواع ماساژهای درمانی و ورزشی، آرایشگاه اختصاصی آقایان، مدت زمان هر جلسه و نرخ تعرفه‌ها")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 shadow-lg shadow-lime-400/20 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(Plus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "تعریف خدمت جدید")])])]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Scissors), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "لیست پکیج‌ها و خدمات فعال")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, toDisplayString(__props.services.length) + " خدمت فعال", 1)]), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "عنوان خدمت"),
							createVNode("th", { class: "p-4 font-bold" }, "دسته‌بندی"),
							createVNode("th", { class: "p-4 font-bold" }, "مدت زمان جلسه"),
							createVNode("th", { class: "p-4 font-bold" }, "تعرفه (تومان)"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت ارائه"),
							createVNode("th", { class: "p-4 font-bold text-center" }, "عملیات")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.services, (srv) => {
							return openBlock(), createBlock("tr", {
								key: srv.id,
								class: "hover:bg-zinc-800/30 transition-colors"
							}, [
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "font-bold text-white text-xs sm:text-sm" }, toDisplayString(srv.title), 1), srv.description ? (openBlock(), createBlock("div", {
									key: 0,
									class: "text-zinc-500 text-[11px] line-clamp-1 mt-0.5"
								}, toDisplayString(srv.description), 1)) : createCommentVNode("", true)]),
								createVNode("td", { class: "p-4" }, [createVNode("span", { class: "px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold" }, toDisplayString(srv.category === "massage" ? "ماساژ و اسپا" : "پیرایشگاه آقایان"), 1)]),
								createVNode("td", { class: "p-4 font-mono text-zinc-300 flex items-center gap-1.5 mt-2" }, [createVNode(unref(Clock), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, toDisplayString(srv.duration_min) + " دقیقه", 1)]),
								createVNode("td", { class: "p-4 font-mono font-black text-lime-400 text-sm" }, toDisplayString(unref(formatPrice)(srv.price)), 1),
								createVNode("td", { class: "p-4" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border", srv.is_active ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20" : "bg-zinc-800 text-zinc-500 border-zinc-700"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", srv.is_active ? "bg-emerald-400" : "bg-zinc-500"] }, null, 2), createTextVNode(" " + toDisplayString(srv.is_active ? "فعال و قابل رزرو" : "غیرفعال"), 1)], 2)]),
								createVNode("td", { class: "p-4 text-center" }, [createVNode("button", {
									onClick: ($event) => openEdit(srv),
									class: "px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5"
								}, [createVNode(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }), createVNode("span", null, "ویرایش")], 8, ["onClick"])])
							]);
						}), 128)), !__props.services || __props.services.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "p-12 text-center text-zinc-500 text-xs"
						}, " خدمتی تعریف نگردیده است. ")])) : createCommentVNode("", true)])])])]),
						isModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(Scissors), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingService.value ? "ویرایش تعرفه و خدمت" : "تعریف پکیج خدماتی جدید"), 1)]), createVNode("button", {
							onClick: ($event) => isModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitService, ["prevent"]),
							class: "space-y-4"
						}, [
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "عنوان خدمت"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).title = $event,
								type: "text",
								placeholder: "مثلاً: ماساژ ریکاوری عضلانی دیپ تیشو (Deep Tissue)",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).title]])]),
							createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3.5" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "دسته‌بندی"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).category = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, [createVNode("option", { value: "massage" }, "ماساژ و اسپا ورزشی"), createVNode("option", { value: "barber" }, "پیرایشگاه اختصاصی آقایان")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).category]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "مدت زمان (دقیقه)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).duration_min = $event,
								type: "number",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).duration_min,
								void 0,
								{ number: true }
							]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "تعرفه هزینه (تومان)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).price = $event,
								type: "number",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[
								vModelText,
								unref(form).price,
								void 0,
								{ number: true }
							]])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-bold text-zinc-300 mb-1.5" }, "شرح فواید و تجهیزات مورد استفاده"), withDirectives(createVNode("textarea", {
								"onUpdate:modelValue": ($event) => unref(form).description = $event,
								rows: "2",
								placeholder: "تسکین دردهای عضلانی، بادکش، استفاده از روغن‌های گیاهی ارگانیک...",
								class: "w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).description]])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isModalOpen.value = false,
								type: "button",
								class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
							}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال ذخیره...")) : (openBlock(), createBlock("span", { key: 1 }, "ذخیره خدمت"))], 8, ["disabled"])])
						], 32)])])) : createCommentVNode("", true)
					])];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Service/Services.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
