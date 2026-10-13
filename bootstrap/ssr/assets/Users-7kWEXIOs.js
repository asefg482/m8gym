import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Crown, Search, UserPlus, Users, X } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/Users.vue
var _sfc_main = {
	__name: "Users",
	__ssrInlineRender: true,
	props: {
		users: Object,
		roles: Array,
		filters: Object
	},
	setup(__props) {
		const props = __props;
		const search = ref(props.filters.search || "");
		const roleFilter = ref(props.filters.role || "");
		const isCreateModalOpen = ref(false);
		const editingUser = ref(null);
		const form = useForm({
			mobile: "",
			first_name: "",
			last_name: "",
			national_code: "",
			gender: "male",
			status: "active",
			level: "normal",
			role_ids: []
		});
		function handleSearch() {
			router.get("/panel/super_admin/users", {
				search: search.value,
				role: roleFilter.value
			}, { preserveState: true });
		}
		function openCreate() {
			editingUser.value = null;
			form.reset();
			form.role_ids = [props.roles.find((r) => r.key === "member")?.id].filter(Boolean);
			isCreateModalOpen.value = true;
		}
		function openEdit(user) {
			editingUser.value = user;
			form.mobile = user.mobile;
			form.first_name = user.first_name || "";
			form.last_name = user.last_name || "";
			form.national_code = user.national_code || "";
			form.gender = user.gender || "male";
			form.status = user.status;
			form.level = user.member_profile?.level || "normal";
			form.role_ids = user.roles.map((r) => r.id);
			isCreateModalOpen.value = true;
		}
		function submitUser() {
			if (editingUser.value) form.put(`/panel/super_admin/users/${editingUser.value.id}`, { onSuccess: () => isCreateModalOpen.value = false });
			else form.post("/panel/super_admin/users", { onSuccess: () => isCreateModalOpen.value = false });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "مدیریت کاربران و نقش‌ها" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مدیریت کاربران و تخصیص نقش‌ها</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده، ثبت کاربر جدید، انتساب چند نقش و کنترل وضعیت حساب</p></div><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserPlus), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت کاربر جدید</span></button></div><div class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-wrap gap-4 items-center"${_scopeId}><div class="relative flex-1 min-w-[200px]"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="جستجو با شماره موبایل، نام یا کد ملی..." class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><button class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Search), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`</button></div><select class="h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "") : ssrLooseEqual(roleFilter.value, "")) ? " selected" : ""}${_scopeId}>همه نقش‌ها</option><!--[-->`);
						ssrRenderList(__props.roles, (r) => {
							_push(`<option${ssrRenderAttr("value", r.key)}${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, r.key) : ssrLooseEqual(roleFilter.value, r.key)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(r.title)}</option>`);
						});
						_push(`<!--]--></select></div><div class="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>نام و شماره موبایل</th><th class="p-4 font-bold"${_scopeId}>نقش‌های منتسب</th><th class="p-4 font-bold"${_scopeId}>سطح عضویت</th><th class="p-4 font-bold"${_scopeId}>وضعیت اشتراک</th><th class="p-4 font-bold"${_scopeId}>وضعیت حساب</th><th class="p-4 font-bold text-center"${_scopeId}>عملیات</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.users.data, (u) => {
							_push(`<tr class="hover:bg-zinc-800/30"${_scopeId}><td class="p-4"${_scopeId}><div class="font-bold text-white"${_scopeId}>${ssrInterpolate(u.full_name)}</div><div class="text-[11px] font-mono text-zinc-400" dir="ltr"${_scopeId}>${ssrInterpolate(u.mobile)}</div></td><td class="p-4"${_scopeId}><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
							ssrRenderList(u.roles, (r) => {
								_push(`<span class="${ssrRenderClass([{ "text-lime-400 border-lime-400/30": r.key === "super_admin" }, "px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300"])}"${_scopeId}>${ssrInterpolate(r.title)}</span>`);
							});
							_push(`<!--]--></div></td><td class="p-4"${_scopeId}>`);
							if (u.member_profile?.level === "vip") {
								_push(`<span class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Crown), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
								_push(` VIP </span>`);
							} else _push(`<span class="text-zinc-500 text-[11px]"${_scopeId}>عادی</span>`);
							_push(`</td><td class="p-4"${_scopeId}>`);
							if (u.active_membership) _push(`<span class="text-lime-400 font-bold text-[11px]"${_scopeId}>${ssrInterpolate(u.active_membership.plan?.title)} (فعال) </span>`);
							else _push(`<span class="text-zinc-500 text-[11px]"${_scopeId}>فاقد اشتراک</span>`);
							_push(`</td><td class="p-4"${_scopeId}><span class="${ssrRenderClass([u.status === "active" ? "bg-lime-400/10 text-lime-400" : "bg-red-400/10 text-red-400", "px-2 py-0.5 rounded-full text-[10px] font-bold"])}"${_scopeId}>${ssrInterpolate(u.status === "active" ? "فعال" : "معلق")}</span></td><td class="p-4 text-center"${_scopeId}><div class="flex items-center justify-center gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: `/panel/super_admin/users/${u.id}`,
								class: "px-2.5 py-1.5 rounded-xl bg-lime-400/10 hover:bg-lime-400/20 text-lime-400 text-xs font-semibold cursor-pointer transition-colors"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` جزئیات و دسترسی‌ها `);
									else return [createTextVNode(" جزئیات و دسترسی‌ها ")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`<button class="px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold cursor-pointer transition-colors"${_scopeId}> ویرایش سریع </button></div></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div>`);
						if (isCreateModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingUser.value ? "ویرایش اطلاعات و نقش‌های کاربر" : "ثبت کاربر جدید")}</h3><button class="text-zinc-400 hover:text-white"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}>`);
							if (!editingUser.value) _push(`<div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>شماره همراه</label><input${ssrRenderAttr("value", unref(form).mobile)} type="tel" dir="ltr" placeholder="۰۹۱۲۳۴۵۶۷۸۹" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white" required${_scopeId}></div>`);
							else _push(`<!---->`);
							_push(`<div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>نام</label><input${ssrRenderAttr("value", unref(form).first_name)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>نام خانوادگی</label><input${ssrRenderAttr("value", unref(form).last_name)} type="text" class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}></div></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>سطح عضویت</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value="normal"${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "normal") : ssrLooseEqual(unref(form).level, "normal")) ? " selected" : ""}${_scopeId}>عادی</option><option value="vip"${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "vip") : ssrLooseEqual(unref(form).level, "vip")) ? " selected" : ""}${_scopeId}>طلایی VIP (تخفیف ویژه)</option></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1"${_scopeId}>وضعیت حساب</label><select class="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"${_scopeId}><option value="active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "active") : ssrLooseEqual(unref(form).status, "active")) ? " selected" : ""}${_scopeId}>فعال</option><option value="suspended"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "suspended") : ssrLooseEqual(unref(form).status, "suspended")) ? " selected" : ""}${_scopeId}>معلق / مسدود</option></select></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-2"${_scopeId}>نقش‌های کاربر (قابلیت انتخاب چند نقش):</label><div class="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-zinc-950 border border-zinc-800"${_scopeId}><!--[-->`);
							ssrRenderList(__props.roles, (r) => {
								_push(`<label class="flex items-center gap-2 text-xs text-zinc-300 cursor-pointer"${_scopeId}><input type="checkbox"${ssrRenderAttr("value", r.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role_ids) ? ssrLooseContain(unref(form).role_ids, r.id) : unref(form).role_ids) ? " checked" : ""}${_scopeId}><span${_scopeId}>${ssrInterpolate(r.title)}</span></label>`);
							});
							_push(`<!--]--></div></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl text-xs text-zinc-400"${_scopeId}>انصراف</button><button type="submit" class="px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"${_scopeId}>ذخیره اطلاعات</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "مدیریت کاربران و نقش‌ها" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(Users), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "مدیریت کاربران و تخصیص نقش‌ها")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده، ثبت کاربر جدید، انتساب چند نقش و کنترل وضعیت حساب")]), createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
						}, [createVNode(unref(UserPlus), { class: "w-4 h-4" }), createVNode("span", null, "ثبت کاربر جدید")])]),
						createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-wrap gap-4 items-center" }, [createVNode("div", { class: "relative flex-1 min-w-[200px]" }, [withDirectives(createVNode("input", {
							"onUpdate:modelValue": ($event) => search.value = $event,
							onKeyup: withKeys(handleSearch, ["enter"]),
							type: "text",
							placeholder: "جستجو با شماره موبایل، نام یا کد ملی...",
							class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 text-xs text-white focus:outline-none focus:border-lime-400"
						}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]]), createVNode("button", {
							onClick: handleSearch,
							class: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
						}, [createVNode(unref(Search), { class: "w-3.5 h-3.5" })])]), withDirectives(createVNode("select", {
							"onUpdate:modelValue": ($event) => roleFilter.value = $event,
							onChange: handleSearch,
							class: "h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none"
						}, [createVNode("option", { value: "" }, "همه نقش‌ها"), (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (r) => {
							return openBlock(), createBlock("option", {
								key: r.id,
								value: r.key
							}, toDisplayString(r.title), 9, ["value"]);
						}), 128))], 40, ["onUpdate:modelValue"]), [[vModelSelect, roleFilter.value]])]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "نام و شماره موبایل"),
							createVNode("th", { class: "p-4 font-bold" }, "نقش‌های منتسب"),
							createVNode("th", { class: "p-4 font-bold" }, "سطح عضویت"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت اشتراک"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت حساب"),
							createVNode("th", { class: "p-4 font-bold text-center" }, "عملیات")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (u) => {
							return openBlock(), createBlock("tr", {
								key: u.id,
								class: "hover:bg-zinc-800/30"
							}, [
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "font-bold text-white" }, toDisplayString(u.full_name), 1), createVNode("div", {
									class: "text-[11px] font-mono text-zinc-400",
									dir: "ltr"
								}, toDisplayString(u.mobile), 1)]),
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "flex flex-wrap gap-1.5" }, [(openBlock(true), createBlock(Fragment, null, renderList(u.roles, (r) => {
									return openBlock(), createBlock("span", {
										key: r.id,
										class: ["px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-950 border border-zinc-800 text-zinc-300", { "text-lime-400 border-lime-400/30": r.key === "super_admin" }]
									}, toDisplayString(r.title), 3);
								}), 128))])]),
								createVNode("td", { class: "p-4" }, [u.member_profile?.level === "vip" ? (openBlock(), createBlock("span", {
									key: 0,
									class: "inline-flex items-center gap-1 text-[11px] font-bold text-amber-400"
								}, [createVNode(unref(Crown), { class: "w-3.5 h-3.5" }), createTextVNode(" VIP ")])) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-zinc-500 text-[11px]"
								}, "عادی"))]),
								createVNode("td", { class: "p-4" }, [u.active_membership ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-lime-400 font-bold text-[11px]"
								}, toDisplayString(u.active_membership.plan?.title) + " (فعال) ", 1)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-zinc-500 text-[11px]"
								}, "فاقد اشتراک"))]),
								createVNode("td", { class: "p-4" }, [createVNode("span", { class: ["px-2 py-0.5 rounded-full text-[10px] font-bold", u.status === "active" ? "bg-lime-400/10 text-lime-400" : "bg-red-400/10 text-red-400"] }, toDisplayString(u.status === "active" ? "فعال" : "معلق"), 3)]),
								createVNode("td", { class: "p-4 text-center" }, [createVNode("div", { class: "flex items-center justify-center gap-2" }, [createVNode(unref(Link), {
									href: `/panel/super_admin/users/${u.id}`,
									class: "px-2.5 py-1.5 rounded-xl bg-lime-400/10 hover:bg-lime-400/20 text-lime-400 text-xs font-semibold cursor-pointer transition-colors"
								}, {
									default: withCtx(() => [createTextVNode(" جزئیات و دسترسی‌ها ")]),
									_: 1
								}, 8, ["href"]), createVNode("button", {
									onClick: ($event) => openEdit(u),
									class: "px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold cursor-pointer transition-colors"
								}, " ویرایش سریع ", 8, ["onClick"])])])
							]);
						}), 128))])])])]),
						isCreateModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingUser.value ? "ویرایش اطلاعات و نقش‌های کاربر" : "ثبت کاربر جدید"), 1), createVNode("button", {
							onClick: ($event) => isCreateModalOpen.value = false,
							class: "text-zinc-400 hover:text-white"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitUser, ["prevent"]),
							class: "space-y-4"
						}, [
							!editingUser.value ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "شماره همراه"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).mobile = $event,
								type: "tel",
								dir: "ltr",
								placeholder: "۰۹۱۲۳۴۵۶۷۸۹",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).mobile]])])) : createCommentVNode("", true),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "نام"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).first_name = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).first_name]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "نام خانوادگی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).last_name = $event,
								type: "text",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).last_name]])])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "سطح عضویت"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).level = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, [createVNode("option", { value: "normal" }, "عادی"), createVNode("option", { value: "vip" }, "طلایی VIP (تخفیف ویژه)")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).level]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1" }, "وضعیت حساب"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).status = $event,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white"
							}, [createVNode("option", { value: "active" }, "فعال"), createVNode("option", { value: "suspended" }, "معلق / مسدود")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-2" }, "نقش‌های کاربر (قابلیت انتخاب چند نقش):"), createVNode("div", { class: "grid grid-cols-2 gap-2 p-3 rounded-2xl bg-zinc-950 border border-zinc-800" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (r) => {
								return openBlock(), createBlock("label", {
									key: r.id,
									class: "flex items-center gap-2 text-xs text-zinc-300 cursor-pointer"
								}, [withDirectives(createVNode("input", {
									type: "checkbox",
									value: r.id,
									"onUpdate:modelValue": ($event) => unref(form).role_ids = $event
								}, null, 8, ["value", "onUpdate:modelValue"]), [[vModelCheckbox, unref(form).role_ids]]), createVNode("span", null, toDisplayString(r.title), 1)]);
							}), 128))])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isCreateModalOpen.value = false,
								type: "button",
								class: "px-4 py-2 rounded-xl text-xs text-zinc-400"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								class: "px-5 py-2 rounded-xl bg-lime-400 text-black text-xs font-bold"
							}, "ذخیره اطلاعات")])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/SuperAdmin/Users.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
