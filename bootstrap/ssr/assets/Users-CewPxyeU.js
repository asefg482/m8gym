import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { t as _sfc_main$2 } from "./Pagination-DHt3q8cw.js";
import { Fragment, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, vModelCheckbox, vModelSelect, vModelText, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { Head, Link, router, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { CheckCircle2, ChevronLeft, Crown, Edit3, Phone, Search, UserPlus, Users, X } from "@lucide/vue";
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
		const search = ref(props.filters?.search || "");
		const roleFilter = ref(props.filters?.role || "");
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
		function resetFilters() {
			search.value = "";
			roleFilter.value = "";
			handleSearch();
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
		function getInitials(user) {
			if (user.first_name && user.last_name) return `${user.first_name.charAt(0)} ${user.last_name.charAt(0)}`;
			if (user.first_name) return user.first_name.charAt(0);
			return user.mobile ? user.mobile.slice(-2) : "M8";
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "مدیریت کاربران و نقش‌ها - Dashlite" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Users), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سامانه اعضا و مجوزهای دسترسی</span></div><h1 class="text-xl sm:text-2xl font-black text-white"${_scopeId}>مدیریت کاربران و تخصیص نقش‌ها</h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مشاهده پایگاه داده اعضا، ثبت کاربر جدید، انتساب چندگانه نقش‌ها و نظارت بر اشتراک‌ها</p></div><div class="flex items-center gap-3"${_scopeId}><button class="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"${_scopeId}>`);
						_push(ssrRenderComponent(unref(UserPlus), { class: "w-4 h-4 stroke-[2.5]" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ثبت کاربر جدید</span></button></div></div><div class="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg backdrop-blur-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between"${_scopeId}><div class="flex flex-1 flex-col sm:flex-row gap-3 items-center"${_scopeId}><div class="relative w-full sm:max-w-md"${_scopeId}><input${ssrRenderAttr("value", search.value)} type="text" placeholder="جستجو با شماره موبایل، نام یا کد ملی..." class="w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/40 transition-all"${_scopeId}><button class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Search), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`</button></div><div class="w-full sm:w-56"${_scopeId}><select class="w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl px-3 text-xs text-zinc-200 focus:outline-none focus:border-lime-400"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, "") : ssrLooseEqual(roleFilter.value, "")) ? " selected" : ""}${_scopeId}>همه نقش‌های سازمانی</option><!--[-->`);
						ssrRenderList(__props.roles, (r) => {
							_push(`<option${ssrRenderAttr("value", r.key)}${ssrIncludeBooleanAttr(Array.isArray(roleFilter.value) ? ssrLooseContain(roleFilter.value, r.key) : ssrLooseEqual(roleFilter.value, r.key)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(r.title)}</option>`);
						});
						_push(`<!--]--></select></div>`);
						if (search.value || roleFilter.value) _push(`<button class="text-xs text-zinc-400 hover:text-white underline cursor-pointer shrink-0"${_scopeId}> پاکسازی فیلتر </button>`);
						else _push(`<!---->`);
						_push(`</div><div class="text-[11px] text-zinc-400 flex items-center gap-1.5 self-end md:self-center"${_scopeId}><span class="w-2 h-2 rounded-full bg-lime-400"${_scopeId}></span><span${_scopeId}>تعداد در صفحه: <b class="font-mono text-white"${_scopeId}>${ssrInterpolate(__props.users.data?.length || 0)}</b> از <b class="font-mono text-lime-400"${_scopeId}>${ssrInterpolate(__props.users.total || 0)}</b></span></div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/80 border-b border-zinc-800/80 text-zinc-400 uppercase text-[11px] tracking-wider"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white"${_scopeId}>کاربر</th><th class="p-4 font-bold"${_scopeId}>نقش‌های منتسب</th><th class="p-4 font-bold"${_scopeId}>سطح عضویت</th><th class="p-4 font-bold"${_scopeId}>وضعیت اشتراک</th><th class="p-4 font-bold"${_scopeId}>وضعیت حساب</th><th class="p-4 font-bold text-center"${_scopeId}>عملیات مدیریت</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.users.data, (u) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors group"${_scopeId}><td class="p-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 group-hover:border-lime-400/40 transition-colors shrink-0"${_scopeId}>${ssrInterpolate(getInitials(u))}</div><div${_scopeId}><div class="font-bold text-white text-xs sm:text-sm flex items-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(u.full_name || "بدون نام")}</span>`);
							if (u.gender === "female") _push(`<span class="text-[10px] text-pink-400"${_scopeId}>بانوان</span>`);
							else _push(`<!---->`);
							_push(`</div><div class="text-[11px] font-mono text-zinc-400 flex items-center gap-2 mt-0.5" dir="ltr"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Phone), { class: "w-3 h-3 text-zinc-500 inline" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>${ssrInterpolate(u.mobile)}</span></div></div></div></td><td class="p-4"${_scopeId}><div class="flex flex-wrap gap-1.5 max-w-xs"${_scopeId}><!--[-->`);
							ssrRenderList(u.roles, (r) => {
								_push(`<span class="${ssrRenderClass([r.key === "super_admin" ? "bg-lime-400/10 text-lime-400 border-lime-400/30" : "bg-zinc-950 text-zinc-300 border-zinc-800", "px-2 py-0.5 rounded-lg text-[10px] font-bold border transition-colors"])}"${_scopeId}>${ssrInterpolate(r.title)}</span>`);
							});
							_push(`<!--]--></div></td><td class="p-4"${_scopeId}>`);
							if (u.member_profile?.level === "vip") {
								_push(`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/30"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Crown), { class: "w-3 h-3" }, null, _parent, _scopeId));
								_push(` VIP طلایی </span>`);
							} else _push(`<span class="text-zinc-500 text-[11px]"${_scopeId}>عادی</span>`);
							_push(`</td><td class="p-4"${_scopeId}>`);
							if (u.active_membership) {
								_push(`<div${_scopeId}><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20"${_scopeId}>`);
								_push(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3" }, null, _parent, _scopeId));
								_push(` ${ssrInterpolate(u.active_membership.plan?.title || "اشتراک ورزشی")}</span></div>`);
							} else _push(`<span class="text-zinc-500 text-[11px]"${_scopeId}>فاقد اشتراک معتبر</span>`);
							_push(`</td><td class="p-4"${_scopeId}><span class="${ssrRenderClass([u.status === "active" ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "bg-rose-400/10 text-rose-400 border border-rose-400/20", "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"])}"${_scopeId}><span class="${ssrRenderClass([u.status === "active" ? "bg-emerald-400" : "bg-rose-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(u.status === "active" ? "فعال" : "معلق / مسدود")}</span></td><td class="p-4 text-center"${_scopeId}><div class="flex items-center justify-center gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: `/panel/super_admin/users/${u.id}`,
								class: "px-2.5 py-1.5 rounded-xl bg-lime-400/10 hover:bg-lime-400/20 text-lime-400 text-xs font-bold transition-all flex items-center gap-1",
								title: "مشاهده جزئیات پروفایل و دسترسی‌ها"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<span${_scopeId}>پروفایل و دسترسی</span>`);
										_push(ssrRenderComponent(unref(ChevronLeft), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
									} else return [createVNode("span", null, "پروفایل و دسترسی"), createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" })];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`<button class="px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1" title="ویرایش سریع اطلاعات"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>ویرایش</span></button></div></td></tr>`);
						});
						_push(`<!--]-->`);
						if (!__props.users.data || __props.users.data.length === 0) _push(`<tr${_scopeId}><td colspan="6" class="p-12 text-center text-zinc-500 text-xs"${_scopeId}> هیچ کاربری با مشخصات جستجویافته یافت نشد. </td></tr>`);
						else _push(`<!---->`);
						_push(`</tbody></table></div>`);
						_push(ssrRenderComponent(_sfc_main$2, {
							links: __props.users.links,
							from: __props.users.from,
							to: __props.users.to,
							total: __props.users.total
						}, null, _parent, _scopeId));
						_push(`</div>`);
						if (isCreateModalOpen.value) {
							_push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"${_scopeId}><div class="w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl relative"${_scopeId}><div class="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(UserPlus), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`</div><h3 class="text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(editingUser.value ? "ویرایش مشخصات و نقش‌های کاربر" : "ثبت کاربر جدید در پایگاه باشگاه")}</h3></div><button class="text-zinc-400 hover:text-white transition-colors cursor-pointer"${_scopeId}>`);
							_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent, _scopeId));
							_push(`</button></div><form class="space-y-4"${_scopeId}>`);
							if (!editingUser.value) _push(`<div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>شماره تلفن همراه (جهت ورود با OTP)</label><input${ssrRenderAttr("value", unref(form).mobile)} type="tel" dir="ltr" placeholder="۰۹۱۲۳۴۵۶۷۸۹" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30" required${_scopeId}></div>`);
							else _push(`<!---->`);
							_push(`<div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>نام</label><input${ssrRenderAttr("value", unref(form).first_name)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>نام خانوادگی</label><input${ssrRenderAttr("value", unref(form).last_name)} type="text" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}></div></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>کد ملی</label><input${ssrRenderAttr("value", unref(form).national_code)} type="text" dir="ltr" class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>جنسیت</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="male"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, "male") : ssrLooseEqual(unref(form).gender, "male")) ? " selected" : ""}${_scopeId}>آقایان</option><option value="female"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, "female") : ssrLooseEqual(unref(form).gender, "female")) ? " selected" : ""}${_scopeId}>بانوان</option></select></div></div><div class="grid grid-cols-2 gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>سطح عضویت</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="normal"${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "normal") : ssrLooseEqual(unref(form).level, "normal")) ? " selected" : ""}${_scopeId}>عادی</option><option value="vip"${ssrIncludeBooleanAttr(Array.isArray(unref(form).level) ? ssrLooseContain(unref(form).level, "vip") : ssrLooseEqual(unref(form).level, "vip")) ? " selected" : ""}${_scopeId}>طلایی VIP (تخفیف ویژه باشگاه)</option></select></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-1.5"${_scopeId}>وضعیت حساب کاربری</label><select class="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"${_scopeId}><option value="active"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "active") : ssrLooseEqual(unref(form).status, "active")) ? " selected" : ""}${_scopeId}>فعال</option><option value="suspended"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "suspended") : ssrLooseEqual(unref(form).status, "suspended")) ? " selected" : ""}${_scopeId}>معلق / غیرفعال</option></select></div></div><div${_scopeId}><label class="block text-xs font-semibold text-zinc-300 mb-2"${_scopeId}>نقش‌های سازمانی کاربر (انتخاب همزمان چند نقش):</label><div class="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 max-h-44 overflow-y-auto"${_scopeId}><!--[-->`);
							ssrRenderList(__props.roles, (r) => {
								_push(`<label class="${ssrRenderClass([unref(form).role_ids.includes(r.id) ? "bg-zinc-900 border-lime-400/40 text-white font-bold" : "text-zinc-400", "flex items-center gap-2.5 p-2 rounded-xl border border-zinc-900 hover:border-zinc-800 cursor-pointer text-xs transition-colors"])}"${_scopeId}><input type="checkbox"${ssrRenderAttr("value", r.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role_ids) ? ssrLooseContain(unref(form).role_ids, r.id) : unref(form).role_ids) ? " checked" : ""} class="rounded border-zinc-700 bg-zinc-900 text-lime-400 focus:ring-0"${_scopeId}><span${_scopeId}>${ssrInterpolate(r.title)}</span></label>`);
							});
							_push(`<!--]--></div></div><div class="pt-4 border-t border-zinc-800 flex justify-end gap-3"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors"${_scopeId}>انصراف</button><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"${_scopeId}>`);
							if (unref(form).processing) _push(`<span${_scopeId}>در حال ذخیره...</span>`);
							else _push(`<span${_scopeId}>ذخیره اطلاعات</span>`);
							_push(`</button></div></form></div></div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
					} else return [createVNode(unref(Head), { title: "مدیریت کاربران و نقش‌ها - Dashlite" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 text-xs text-lime-400 font-bold uppercase tracking-wider mb-1" }, [createVNode(unref(Users), { class: "w-4 h-4" }), createVNode("span", null, "سامانه اعضا و مجوزهای دسترسی")]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white" }, "مدیریت کاربران و تخصیص نقش‌ها"),
							createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مشاهده پایگاه داده اعضا، ثبت کاربر جدید، انتساب چندگانه نقش‌ها و نظارت بر اشتراک‌ها")
						]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("button", {
							onClick: openCreate,
							class: "px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
						}, [createVNode(unref(UserPlus), { class: "w-4 h-4 stroke-[2.5]" }), createVNode("span", null, "ثبت کاربر جدید")])])]),
						createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg backdrop-blur-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between" }, [createVNode("div", { class: "flex flex-1 flex-col sm:flex-row gap-3 items-center" }, [
							createVNode("div", { class: "relative w-full sm:max-w-md" }, [withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => search.value = $event,
								onKeyup: withKeys(handleSearch, ["enter"]),
								type: "text",
								placeholder: "جستجو با شماره موبایل، نام یا کد ملی...",
								class: "w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/40 transition-all"
							}, null, 40, ["onUpdate:modelValue"]), [[vModelText, search.value]]), createVNode("button", {
								onClick: handleSearch,
								class: "absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
							}, [createVNode(unref(Search), { class: "w-4 h-4" })])]),
							createVNode("div", { class: "w-full sm:w-56" }, [withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => roleFilter.value = $event,
								onChange: handleSearch,
								class: "w-full h-10 bg-zinc-950 border border-zinc-800/90 rounded-xl px-3 text-xs text-zinc-200 focus:outline-none focus:border-lime-400"
							}, [createVNode("option", { value: "" }, "همه نقش‌های سازمانی"), (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (r) => {
								return openBlock(), createBlock("option", {
									key: r.id,
									value: r.key
								}, toDisplayString(r.title), 9, ["value"]);
							}), 128))], 40, ["onUpdate:modelValue"]), [[vModelSelect, roleFilter.value]])]),
							search.value || roleFilter.value ? (openBlock(), createBlock("button", {
								key: 0,
								onClick: resetFilters,
								class: "text-xs text-zinc-400 hover:text-white underline cursor-pointer shrink-0"
							}, " پاکسازی فیلتر ")) : createCommentVNode("", true)
						]), createVNode("div", { class: "text-[11px] text-zinc-400 flex items-center gap-1.5 self-end md:self-center" }, [createVNode("span", { class: "w-2 h-2 rounded-full bg-lime-400" }), createVNode("span", null, [
							createTextVNode("تعداد در صفحه: "),
							createVNode("b", { class: "font-mono text-white" }, toDisplayString(__props.users.data?.length || 0), 1),
							createTextVNode(" از "),
							createVNode("b", { class: "font-mono text-lime-400" }, toDisplayString(__props.users.total || 0), 1)
						])])]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 overflow-hidden shadow-xl" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/80 border-b border-zinc-800/80 text-zinc-400 uppercase text-[11px] tracking-wider" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white" }, "کاربر"),
							createVNode("th", { class: "p-4 font-bold" }, "نقش‌های منتسب"),
							createVNode("th", { class: "p-4 font-bold" }, "سطح عضویت"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت اشتراک"),
							createVNode("th", { class: "p-4 font-bold" }, "وضعیت حساب"),
							createVNode("th", { class: "p-4 font-bold text-center" }, "عملیات مدیریت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (u) => {
							return openBlock(), createBlock("tr", {
								key: u.id,
								class: "hover:bg-zinc-800/30 transition-colors group"
							}, [
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode("div", { class: "w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xs text-lime-400 group-hover:border-lime-400/40 transition-colors shrink-0" }, toDisplayString(getInitials(u)), 1), createVNode("div", null, [createVNode("div", { class: "font-bold text-white text-xs sm:text-sm flex items-center gap-2" }, [createVNode("span", null, toDisplayString(u.full_name || "بدون نام"), 1), u.gender === "female" ? (openBlock(), createBlock("span", {
									key: 0,
									class: "text-[10px] text-pink-400"
								}, "بانوان")) : createCommentVNode("", true)]), createVNode("div", {
									class: "text-[11px] font-mono text-zinc-400 flex items-center gap-2 mt-0.5",
									dir: "ltr"
								}, [createVNode(unref(Phone), { class: "w-3 h-3 text-zinc-500 inline" }), createVNode("span", null, toDisplayString(u.mobile), 1)])])])]),
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "flex flex-wrap gap-1.5 max-w-xs" }, [(openBlock(true), createBlock(Fragment, null, renderList(u.roles, (r) => {
									return openBlock(), createBlock("span", {
										key: r.id,
										class: ["px-2 py-0.5 rounded-lg text-[10px] font-bold border transition-colors", r.key === "super_admin" ? "bg-lime-400/10 text-lime-400 border-lime-400/30" : "bg-zinc-950 text-zinc-300 border-zinc-800"]
									}, toDisplayString(r.title), 3);
								}), 128))])]),
								createVNode("td", { class: "p-4" }, [u.member_profile?.level === "vip" ? (openBlock(), createBlock("span", {
									key: 0,
									class: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400/10 text-amber-400 border border-amber-400/30"
								}, [createVNode(unref(Crown), { class: "w-3 h-3" }), createTextVNode(" VIP طلایی ")])) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-zinc-500 text-[11px]"
								}, "عادی"))]),
								createVNode("td", { class: "p-4" }, [u.active_membership ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20" }, [createVNode(unref(CheckCircle2), { class: "w-3 h-3" }), createTextVNode(" " + toDisplayString(u.active_membership.plan?.title || "اشتراک ورزشی"), 1)])])) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-zinc-500 text-[11px]"
								}, "فاقد اشتراک معتبر"))]),
								createVNode("td", { class: "p-4" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold", u.status === "active" ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "bg-rose-400/10 text-rose-400 border border-rose-400/20"] }, [createVNode("span", { class: ["w-1.5 h-1.5 rounded-full", u.status === "active" ? "bg-emerald-400" : "bg-rose-400"] }, null, 2), createTextVNode(" " + toDisplayString(u.status === "active" ? "فعال" : "معلق / مسدود"), 1)], 2)]),
								createVNode("td", { class: "p-4 text-center" }, [createVNode("div", { class: "flex items-center justify-center gap-2" }, [createVNode(unref(Link), {
									href: `/panel/super_admin/users/${u.id}`,
									class: "px-2.5 py-1.5 rounded-xl bg-lime-400/10 hover:bg-lime-400/20 text-lime-400 text-xs font-bold transition-all flex items-center gap-1",
									title: "مشاهده جزئیات پروفایل و دسترسی‌ها"
								}, {
									default: withCtx(() => [createVNode("span", null, "پروفایل و دسترسی"), createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" })]),
									_: 1
								}, 8, ["href"]), createVNode("button", {
									onClick: ($event) => openEdit(u),
									class: "px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold cursor-pointer transition-colors flex items-center gap-1",
									title: "ویرایش سریع اطلاعات"
								}, [createVNode(unref(Edit3), { class: "w-3.5 h-3.5 text-zinc-400" }), createVNode("span", null, "ویرایش")], 8, ["onClick"])])])
							]);
						}), 128)), !__props.users.data || __props.users.data.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [createVNode("td", {
							colspan: "6",
							class: "p-12 text-center text-zinc-500 text-xs"
						}, " هیچ کاربری با مشخصات جستجویافته یافت نشد. ")])) : createCommentVNode("", true)])])]), createVNode(_sfc_main$2, {
							links: __props.users.links,
							from: __props.users.from,
							to: __props.users.to,
							total: __props.users.total
						}, null, 8, [
							"links",
							"from",
							"to",
							"total"
						])]),
						isCreateModalOpen.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
						}, [createVNode("div", { class: "w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl relative" }, [createVNode("div", { class: "flex items-center justify-between pb-4 border-b border-zinc-800 mb-5" }, [createVNode("div", { class: "flex items-center gap-2" }, [createVNode("div", { class: "w-8 h-8 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center font-bold" }, [createVNode(unref(UserPlus), { class: "w-4 h-4" })]), createVNode("h3", { class: "text-sm font-bold text-white" }, toDisplayString(editingUser.value ? "ویرایش مشخصات و نقش‌های کاربر" : "ثبت کاربر جدید در پایگاه باشگاه"), 1)]), createVNode("button", {
							onClick: ($event) => isCreateModalOpen.value = false,
							class: "text-zinc-400 hover:text-white transition-colors cursor-pointer"
						}, [createVNode(unref(X), { class: "w-5 h-5" })], 8, ["onClick"])]), createVNode("form", {
							onSubmit: withModifiers(submitUser, ["prevent"]),
							class: "space-y-4"
						}, [
							!editingUser.value ? (openBlock(), createBlock("div", { key: 0 }, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "شماره تلفن همراه (جهت ورود با OTP)"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).mobile = $event,
								type: "tel",
								dir: "ltr",
								placeholder: "۰۹۱۲۳۴۵۶۷۸۹",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/30",
								required: ""
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).mobile]])])) : createCommentVNode("", true),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "نام"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).first_name = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).first_name]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "نام خانوادگی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).last_name = $event,
								type: "text",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).last_name]])])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "کد ملی"), withDirectives(createVNode("input", {
								"onUpdate:modelValue": ($event) => unref(form).national_code = $event,
								type: "text",
								dir: "ltr",
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 text-xs text-white font-mono focus:outline-none focus:border-lime-400"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, unref(form).national_code]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "جنسیت"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).gender = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
							}, [createVNode("option", { value: "male" }, "آقایان"), createVNode("option", { value: "female" }, "بانوان")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).gender]])])]),
							createVNode("div", { class: "grid grid-cols-2 gap-3" }, [createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "سطح عضویت"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).level = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
							}, [createVNode("option", { value: "normal" }, "عادی"), createVNode("option", { value: "vip" }, "طلایی VIP (تخفیف ویژه باشگاه)")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).level]])]), createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-1.5" }, "وضعیت حساب کاربری"), withDirectives(createVNode("select", {
								"onUpdate:modelValue": ($event) => unref(form).status = $event,
								class: "w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
							}, [createVNode("option", { value: "active" }, "فعال"), createVNode("option", { value: "suspended" }, "معلق / غیرفعال")], 8, ["onUpdate:modelValue"]), [[vModelSelect, unref(form).status]])])]),
							createVNode("div", null, [createVNode("label", { class: "block text-xs font-semibold text-zinc-300 mb-2" }, "نقش‌های سازمانی کاربر (انتخاب همزمان چند نقش):"), createVNode("div", { class: "grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 max-h-44 overflow-y-auto" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (r) => {
								return openBlock(), createBlock("label", {
									key: r.id,
									class: ["flex items-center gap-2.5 p-2 rounded-xl border border-zinc-900 hover:border-zinc-800 cursor-pointer text-xs transition-colors", unref(form).role_ids.includes(r.id) ? "bg-zinc-900 border-lime-400/40 text-white font-bold" : "text-zinc-400"]
								}, [withDirectives(createVNode("input", {
									type: "checkbox",
									value: r.id,
									"onUpdate:modelValue": ($event) => unref(form).role_ids = $event,
									class: "rounded border-zinc-700 bg-zinc-900 text-lime-400 focus:ring-0"
								}, null, 8, ["value", "onUpdate:modelValue"]), [[vModelCheckbox, unref(form).role_ids]]), createVNode("span", null, toDisplayString(r.title), 1)], 2);
							}), 128))])]),
							createVNode("div", { class: "pt-4 border-t border-zinc-800 flex justify-end gap-3" }, [createVNode("button", {
								onClick: ($event) => isCreateModalOpen.value = false,
								type: "button",
								class: "px-4 py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors"
							}, "انصراف", 8, ["onClick"]), createVNode("button", {
								type: "submit",
								disabled: unref(form).processing,
								class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-black shadow-lg shadow-lime-400/20 cursor-pointer disabled:opacity-50 transition-all"
							}, [unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "در حال ذخیره...")) : (openBlock(), createBlock("span", { key: 1 }, "ذخیره اطلاعات"))], 8, ["disabled"])])
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
