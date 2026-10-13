import { t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { ArrowRight, Calendar, CreditCard, Crown, Dumbbell, Phone, Sliders, User } from "@lucide/vue";
//#region resources/js/Pages/Panel/SuperAdmin/UserDetail.vue
var _sfc_main = {
	__name: "UserDetail",
	__ssrInlineRender: true,
	props: {
		viewUser: Object,
		menus: Array
	},
	setup(__props) {
		const props = __props;
		const isUpdating = ref(null);
		const userOverridesMap = computed(() => {
			const map = {};
			if (props.viewUser.menu_overrides) props.viewUser.menu_overrides.forEach((o) => {
				map[o.menu_id] = o.effect;
			});
			return map;
		});
		function getEffectiveStatus(menu) {
			const override = userOverridesMap.value[menu.id];
			if (override === "deny") return {
				text: "مسدود شده (اختصاصی)",
				color: "text-rose-400 bg-rose-400/10"
			};
			if (override === "allow") return {
				text: "مجاز (اختصاصی)",
				color: "text-emerald-400 bg-emerald-400/10"
			};
			if (props.viewUser.roles?.some((r) => r.key === "super_admin")) return {
				text: "مجاز (ادمین کل)",
				color: "text-lime-400 bg-lime-400/10"
			};
			return {
				text: "طبق نقش‌های کاربر",
				color: "text-zinc-400 bg-zinc-800"
			};
		}
		function handleOverrideChange(menuId, event) {
			const effect = event.target.value;
			isUpdating.value = menuId;
			router.post(`/panel/manager/matrix/user/${props.viewUser.id}`, {
				menu_id: menuId,
				effect
			}, {
				preserveScroll: true,
				onFinish: () => {
					isUpdating.value = null;
				}
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: `جزئیات کاربر: ${__props.viewUser.first_name || ""} ${__props.viewUser.last_name || __props.viewUser.mobile}` }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/users",
							class: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors",
							title: "بازگشت به لیست کاربران"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(ArrowRight), { class: "w-5 h-5" }, null, _parent, _scopeId));
								else return [createVNode(unref(ArrowRight), { class: "w-5 h-5" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}><span${_scopeId}>${ssrInterpolate(__props.viewUser.first_name || "کاربر")} ${ssrInterpolate(__props.viewUser.last_name || "")}</span>`);
						if (__props.viewUser.member_profile?.level === "vip") {
							_push(`<span class="px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] text-amber-400 flex items-center gap-1 font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Crown), { class: "w-3 h-3" }, null, _parent, _scopeId));
							_push(` VIP </span>`);
						} else _push(`<!---->`);
						_push(`</h1><p class="text-xs text-zinc-400 mt-1 flex items-center gap-3"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Phone), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(__props.viewUser.mobile)}</span>`);
						if (__props.viewUser.national_code) _push(`<span${_scopeId}>کد ملی: ${ssrInterpolate(__props.viewUser.national_code)}</span>`);
						else _push(`<!---->`);
						_push(`<span${_scopeId}>عضویت: ${ssrInterpolate(unref(formatJalaliDate)(__props.viewUser.created_at))}</span></p></div></div><div class="flex items-center gap-2"${_scopeId}><span class="${ssrRenderClass([__props.viewUser.status === "active" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400", "px-3 py-1.5 rounded-xl text-xs font-bold border"])}"${_scopeId}>${ssrInterpolate(__props.viewUser.status === "active" ? "حساب فعال" : "معلق / غیرفعال")}</span></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId}><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><h2 class="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(User), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مشخصات فردی و نقش‌ها</span></h2><div class="space-y-3 text-xs"${_scopeId}><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>جنسیت:</span><span class="text-zinc-200"${_scopeId}>${ssrInterpolate(__props.viewUser.gender === "female" ? "خانم" : "آقا")}</span></div><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>کد ملی:</span><span class="text-zinc-200"${_scopeId}>${ssrInterpolate(__props.viewUser.national_code || "ثبت نشده")}</span></div><div class="flex justify-between items-start text-zinc-400 pt-2 border-t border-zinc-800/60"${_scopeId}><span${_scopeId}>نقش‌های انتساب داده شده:</span><div class="flex flex-wrap gap-1 justify-end max-w-[60%]"${_scopeId}><!--[-->`);
						ssrRenderList(__props.viewUser.roles, (r) => {
							_push(`<span class="px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-300 text-[10px] font-semibold"${_scopeId}>${ssrInterpolate(r.title)}</span>`);
						});
						_push(`<!--]--></div></div></div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><h2 class="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>اشتراک ورزشی</span></h2>`);
						if (__props.viewUser.active_membership) _push(`<div class="space-y-3 text-xs"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span class="text-zinc-400"${_scopeId}>پلن جاری:</span><span class="text-white font-bold"${_scopeId}>${ssrInterpolate(__props.viewUser.active_membership.plan?.title)}</span></div><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>تاریخ پایان:</span><span class="text-zinc-200 font-medium"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(__props.viewUser.active_membership.end_date))}</span></div><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>جلسات باقیمانده:</span><span class="text-lime-400 font-bold"${_scopeId}>${ssrInterpolate(__props.viewUser.active_membership.remaining_sessions ?? "نامحدود")}</span></div></div>`);
						else _push(`<div class="text-center py-6 text-zinc-500 text-xs"${_scopeId}> کاربر در حال حاضر اشتراک فعالی ندارد. </div>`);
						_push(`</div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><h2 class="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>وضعیت مربیگری</span></h2>`);
						if (__props.viewUser.trainer_profile) _push(`<div class="space-y-3 text-xs"${_scopeId}><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>درصد پورسانت:</span><span class="text-lime-400 font-bold"${_scopeId}>%${ssrInterpolate(__props.viewUser.trainer_profile.commission_rate)}</span></div><div class="text-zinc-400"${_scopeId}><span${_scopeId}>تخصص‌ها:</span><p class="text-zinc-300 mt-1 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.viewUser.trainer_profile.specialties?.join("، ") || "ثبت نشده")}</p></div></div>`);
						else _push(`<div class="text-center py-6 text-zinc-500 text-xs"${_scopeId}> این کاربر به عنوان مربی تعریف نشده است. </div>`);
						_push(`</div></div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><h2 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>آخرین ترددها و حضور و غیاب</span></h2>`);
						if (__props.viewUser.attendances && __props.viewUser.attendances.length) {
							_push(`<div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead${_scopeId}><tr class="border-b border-zinc-800 text-zinc-400"${_scopeId}><th class="p-3"${_scopeId}>تاریخ</th><th class="p-3"${_scopeId}>زمان ورود</th><th class="p-3"${_scopeId}>زمان خروج</th><th class="p-3"${_scopeId}>روش ثبت</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
							ssrRenderList(__props.viewUser.attendances, (att) => {
								_push(`<tr class="hover:bg-zinc-800/30"${_scopeId}><td class="p-3 text-zinc-300"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(att.check_in))}</td><td class="p-3 text-white font-mono" dir="ltr"${_scopeId}>${ssrInterpolate(new Date(att.check_in).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								}))}</td><td class="p-3 text-zinc-400 font-mono" dir="ltr"${_scopeId}>${ssrInterpolate(att.check_out ? new Date(att.check_out).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								}) : "در حال ورزش")}</td><td class="p-3"${_scopeId}><span class="px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-400 text-[10px]"${_scopeId}>${ssrInterpolate(att.method === "card" ? "کارت هوشمند" : att.method === "qr" ? "اسکن بارکد" : "دستی")}</span></td></tr>`);
							});
							_push(`<!--]--></tbody></table></div>`);
						} else _push(`<div class="text-center py-6 text-zinc-500 text-xs"${_scopeId}> هیچ سابقه‌ی حضوری ثبت نشده است. </div>`);
						_push(`</div><div class="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4"${_scopeId}><div${_scopeId}><h2 class="text-sm font-bold text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Sliders), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>دسترسی‌های اختصاصی کاربر به منوها (User Menu Overrides)</span></h2><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیر سیستم می‌تواند منوی خاصی را منحصراً برای این کاربر مجاز (Allow) یا مسدود (Deny) کند.</p></div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead${_scopeId}><tr class="border-b border-zinc-800 text-zinc-400"${_scopeId}><th class="p-3"${_scopeId}>عنوان منو</th><th class="p-3"${_scopeId}>کلید سیستم</th><th class="p-3"${_scopeId}>پنل مربوطه</th><th class="p-3 text-center"${_scopeId}>وضعیت موثر</th><th class="p-3 text-center"${_scopeId}>تنظیم اورراید</th></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.menus, (menu) => {
							_push(`<tr class="hover:bg-zinc-800/30"${_scopeId}><td class="p-3 font-semibold text-white"${_scopeId}>${ssrInterpolate(menu.title)}</td><td class="p-3 font-mono text-zinc-400 text-[11px]"${_scopeId}>${ssrInterpolate(menu.key)}</td><td class="p-3 text-zinc-400"${_scopeId}><span class="px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 text-[10px]"${_scopeId}>${ssrInterpolate(menu.panel_role_key)}</span></td><td class="p-3 text-center"${_scopeId}><span class="${ssrRenderClass([getEffectiveStatus(menu).color, "px-2.5 py-1 rounded-full text-[10px] font-bold"])}"${_scopeId}>${ssrInterpolate(getEffectiveStatus(menu).text)}</span></td><td class="p-3 text-center"${_scopeId}><select${ssrRenderAttr("value", userOverridesMap.value[menu.id] || "none")}${ssrIncludeBooleanAttr(isUpdating.value === menu.id) ? " disabled" : ""} class="bg-zinc-950 border border-zinc-700 rounded-xl px-2.5 py-1 text-xs text-white focus:border-lime-400 transition-colors disabled:opacity-50"${_scopeId}><option value="none"${_scopeId}>پیش‌فرض نقش</option><option value="allow"${_scopeId}>مجاز ویژه (Allow)</option><option value="deny"${_scopeId}>مسدودسازی (Deny)</option></select></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div></div>`);
					} else return [createVNode(unref(Head), { title: `جزئیات کاربر: ${__props.viewUser.first_name || ""} ${__props.viewUser.last_name || __props.viewUser.mobile}` }, null, 8, ["title"]), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", { class: "flex items-center gap-3" }, [createVNode(unref(Link), {
							href: "/panel/super_admin/users",
							class: "p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors",
							title: "بازگشت به لیست کاربران"
						}, {
							default: withCtx(() => [createVNode(unref(ArrowRight), { class: "w-5 h-5" })]),
							_: 1
						}), createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode("span", null, toDisplayString(__props.viewUser.first_name || "کاربر") + " " + toDisplayString(__props.viewUser.last_name || ""), 1), __props.viewUser.member_profile?.level === "vip" ? (openBlock(), createBlock("span", {
							key: 0,
							class: "px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] text-amber-400 flex items-center gap-1 font-bold"
						}, [createVNode(unref(Crown), { class: "w-3 h-3" }), createTextVNode(" VIP ")])) : createCommentVNode("", true)]), createVNode("p", { class: "text-xs text-zinc-400 mt-1 flex items-center gap-3" }, [
							createVNode("span", { class: "flex items-center gap-1" }, [createVNode(unref(Phone), { class: "w-3.5 h-3.5" }), createTextVNode(" " + toDisplayString(__props.viewUser.mobile), 1)]),
							__props.viewUser.national_code ? (openBlock(), createBlock("span", { key: 0 }, "کد ملی: " + toDisplayString(__props.viewUser.national_code), 1)) : createCommentVNode("", true),
							createVNode("span", null, "عضویت: " + toDisplayString(unref(formatJalaliDate)(__props.viewUser.created_at)), 1)
						])])]), createVNode("div", { class: "flex items-center gap-2" }, [createVNode("span", { class: ["px-3 py-1.5 rounded-xl text-xs font-bold border", __props.viewUser.status === "active" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"] }, toDisplayString(__props.viewUser.status === "active" ? "حساب فعال" : "معلق / غیرفعال"), 3)])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4" }, [createVNode("h2", { class: "text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3" }, [createVNode(unref(User), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "مشخصات فردی و نقش‌ها")]), createVNode("div", { class: "space-y-3 text-xs" }, [
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "جنسیت:"), createVNode("span", { class: "text-zinc-200" }, toDisplayString(__props.viewUser.gender === "female" ? "خانم" : "آقا"), 1)]),
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "کد ملی:"), createVNode("span", { class: "text-zinc-200" }, toDisplayString(__props.viewUser.national_code || "ثبت نشده"), 1)]),
								createVNode("div", { class: "flex justify-between items-start text-zinc-400 pt-2 border-t border-zinc-800/60" }, [createVNode("span", null, "نقش‌های انتساب داده شده:"), createVNode("div", { class: "flex flex-wrap gap-1 justify-end max-w-[60%]" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.viewUser.roles, (r) => {
									return openBlock(), createBlock("span", {
										key: r.id,
										class: "px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-300 text-[10px] font-semibold"
									}, toDisplayString(r.title), 1);
								}), 128))])])
							])]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4" }, [createVNode("h2", { class: "text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3" }, [createVNode(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "اشتراک ورزشی")]), __props.viewUser.active_membership ? (openBlock(), createBlock("div", {
								key: 0,
								class: "space-y-3 text-xs"
							}, [
								createVNode("div", { class: "flex justify-between items-center" }, [createVNode("span", { class: "text-zinc-400" }, "پلن جاری:"), createVNode("span", { class: "text-white font-bold" }, toDisplayString(__props.viewUser.active_membership.plan?.title), 1)]),
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "تاریخ پایان:"), createVNode("span", { class: "text-zinc-200 font-medium" }, toDisplayString(unref(formatJalaliDate)(__props.viewUser.active_membership.end_date)), 1)]),
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "جلسات باقیمانده:"), createVNode("span", { class: "text-lime-400 font-bold" }, toDisplayString(__props.viewUser.active_membership.remaining_sessions ?? "نامحدود"), 1)])
							])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "text-center py-6 text-zinc-500 text-xs"
							}, " کاربر در حال حاضر اشتراک فعالی ندارد. "))]),
							createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4" }, [createVNode("h2", { class: "text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3" }, [createVNode(unref(Dumbbell), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "وضعیت مربیگری")]), __props.viewUser.trainer_profile ? (openBlock(), createBlock("div", {
								key: 0,
								class: "space-y-3 text-xs"
							}, [createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "درصد پورسانت:"), createVNode("span", { class: "text-lime-400 font-bold" }, "%" + toDisplayString(__props.viewUser.trainer_profile.commission_rate), 1)]), createVNode("div", { class: "text-zinc-400" }, [createVNode("span", null, "تخصص‌ها:"), createVNode("p", { class: "text-zinc-300 mt-1 line-clamp-2" }, toDisplayString(__props.viewUser.trainer_profile.specialties?.join("، ") || "ثبت نشده"), 1)])])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "text-center py-6 text-zinc-500 text-xs"
							}, " این کاربر به عنوان مربی تعریف نشده است. "))])
						]),
						createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4" }, [createVNode("h2", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode(unref(Calendar), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "آخرین ترددها و حضور و غیاب")]), __props.viewUser.attendances && __props.viewUser.attendances.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "overflow-x-auto"
						}, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", null, [createVNode("tr", { class: "border-b border-zinc-800 text-zinc-400" }, [
							createVNode("th", { class: "p-3" }, "تاریخ"),
							createVNode("th", { class: "p-3" }, "زمان ورود"),
							createVNode("th", { class: "p-3" }, "زمان خروج"),
							createVNode("th", { class: "p-3" }, "روش ثبت")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.viewUser.attendances, (att) => {
							return openBlock(), createBlock("tr", {
								key: att.id,
								class: "hover:bg-zinc-800/30"
							}, [
								createVNode("td", { class: "p-3 text-zinc-300" }, toDisplayString(unref(formatJalaliDate)(att.check_in)), 1),
								createVNode("td", {
									class: "p-3 text-white font-mono",
									dir: "ltr"
								}, toDisplayString(new Date(att.check_in).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								})), 1),
								createVNode("td", {
									class: "p-3 text-zinc-400 font-mono",
									dir: "ltr"
								}, toDisplayString(att.check_out ? new Date(att.check_out).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								}) : "در حال ورزش"), 1),
								createVNode("td", { class: "p-3" }, [createVNode("span", { class: "px-2 py-0.5 rounded-lg bg-zinc-800 text-zinc-400 text-[10px]" }, toDisplayString(att.method === "card" ? "کارت هوشمند" : att.method === "qr" ? "اسکن بارکد" : "دستی"), 1)])
							]);
						}), 128))])])])) : (openBlock(), createBlock("div", {
							key: 1,
							class: "text-center py-6 text-zinc-500 text-xs"
						}, " هیچ سابقه‌ی حضوری ثبت نشده است. "))]),
						createVNode("div", { class: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4" }, [createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4" }, [createVNode("div", null, [createVNode("h2", { class: "text-sm font-bold text-white flex items-center gap-2" }, [createVNode(unref(Sliders), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "دسترسی‌های اختصاصی کاربر به منوها (User Menu Overrides)")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیر سیستم می‌تواند منوی خاصی را منحصراً برای این کاربر مجاز (Allow) یا مسدود (Deny) کند.")])]), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", null, [createVNode("tr", { class: "border-b border-zinc-800 text-zinc-400" }, [
							createVNode("th", { class: "p-3" }, "عنوان منو"),
							createVNode("th", { class: "p-3" }, "کلید سیستم"),
							createVNode("th", { class: "p-3" }, "پنل مربوطه"),
							createVNode("th", { class: "p-3 text-center" }, "وضعیت موثر"),
							createVNode("th", { class: "p-3 text-center" }, "تنظیم اورراید")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.menus, (menu) => {
							return openBlock(), createBlock("tr", {
								key: menu.id,
								class: "hover:bg-zinc-800/30"
							}, [
								createVNode("td", { class: "p-3 font-semibold text-white" }, toDisplayString(menu.title), 1),
								createVNode("td", { class: "p-3 font-mono text-zinc-400 text-[11px]" }, toDisplayString(menu.key), 1),
								createVNode("td", { class: "p-3 text-zinc-400" }, [createVNode("span", { class: "px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 text-[10px]" }, toDisplayString(menu.panel_role_key), 1)]),
								createVNode("td", { class: "p-3 text-center" }, [createVNode("span", { class: ["px-2.5 py-1 rounded-full text-[10px] font-bold", getEffectiveStatus(menu).color] }, toDisplayString(getEffectiveStatus(menu).text), 3)]),
								createVNode("td", { class: "p-3 text-center" }, [createVNode("select", {
									value: userOverridesMap.value[menu.id] || "none",
									onChange: ($event) => handleOverrideChange(menu.id, $event),
									disabled: isUpdating.value === menu.id,
									class: "bg-zinc-950 border border-zinc-700 rounded-xl px-2.5 py-1 text-xs text-white focus:border-lime-400 transition-colors disabled:opacity-50"
								}, [
									createVNode("option", { value: "none" }, "پیش‌فرض نقش"),
									createVNode("option", { value: "allow" }, "مجاز ویژه (Allow)"),
									createVNode("option", { value: "deny" }, "مسدودسازی (Deny)")
								], 40, [
									"value",
									"onChange",
									"disabled"
								])])
							]);
						}), 128))])])])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/SuperAdmin/UserDetail.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
