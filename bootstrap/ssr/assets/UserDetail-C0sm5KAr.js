import { t as _sfc_main$1 } from "./PanelLayout-Q01EXykc.js";
import { t as formatJalaliDate } from "./formatters-GAWR9pZC.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, openBlock, ref, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Calendar, ChevronRight, CreditCard, Crown, Dumbbell, Phone, Sliders, User } from "@lucide/vue";
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
				color: "text-rose-400 bg-rose-400/10 border-rose-400/20"
			};
			if (override === "allow") return {
				text: "مجاز (اختصاصی)",
				color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
			};
			if (props.viewUser.roles?.some((r) => r.key === "super_admin")) return {
				text: "مجاز (ادمین ارشد)",
				color: "text-lime-400 bg-lime-400/10 border-lime-400/20"
			};
			return {
				text: "طبق نقش کاربر",
				color: "text-zinc-400 bg-zinc-950 border-zinc-800"
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
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: "/panel/super_admin/users",
							class: "w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shrink-0",
							title: "بازگشت به لیست کاربران"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(ChevronRight), { class: "w-5 h-5" }, null, _parent, _scopeId));
								else return [createVNode(unref(ChevronRight), { class: "w-5 h-5" })];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div${_scopeId}><div class="flex items-center gap-2 mb-1"${_scopeId}><span class="text-xs text-lime-400 font-bold uppercase tracking-wider"${_scopeId}>پرونده اطلاعات کاربر</span>`);
						if (__props.viewUser.member_profile?.level === "vip") {
							_push(`<span class="px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] text-amber-400 flex items-center gap-1 font-bold"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Crown), { class: "w-3 h-3" }, null, _parent, _scopeId));
							_push(` VIP طلایی </span>`);
						} else _push(`<!---->`);
						_push(`</div><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-3"${_scopeId}><span${_scopeId}>${ssrInterpolate(__props.viewUser.first_name || "کاربر")} ${ssrInterpolate(__props.viewUser.last_name || "")}</span></h1><div class="text-xs text-zinc-400 mt-1 flex flex-wrap items-center gap-4"${_scopeId}><span class="flex items-center gap-1.5 font-mono text-zinc-300" dir="ltr"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Phone), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
						_push(` ${ssrInterpolate(__props.viewUser.mobile)}</span>`);
						if (__props.viewUser.national_code) _push(`<span class="font-mono text-zinc-400"${_scopeId}>کد ملی: ${ssrInterpolate(__props.viewUser.national_code)}</span>`);
						else _push(`<!---->`);
						_push(`<span${_scopeId}>عضویت: ${ssrInterpolate(unref(formatJalaliDate)(__props.viewUser.created_at))}</span></div></div></div><div class="flex items-center gap-3"${_scopeId}><span class="${ssrRenderClass([__props.viewUser.status === "active" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border"])}"${_scopeId}><span class="${ssrRenderClass([__props.viewUser.status === "active" ? "bg-emerald-400" : "bg-rose-400", "w-2 h-2 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(__props.viewUser.status === "active" ? "حساب کاربری فعال" : "معلق / غیرفعال")}</span></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-5"${_scopeId}><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-zinc-800/80 pb-3"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(User), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>مشخصات فردی و نقش‌ها</span></h2></div><div class="space-y-3 text-xs"${_scopeId}><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>جنسیت:</span><span class="text-white font-medium"${_scopeId}>${ssrInterpolate(__props.viewUser.gender === "female" ? "بانوان" : "آقایان")}</span></div><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>کد ملی:</span><span class="text-white font-mono"${_scopeId}>${ssrInterpolate(__props.viewUser.national_code || "ثبت نشده")}</span></div><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>شماره پرونده:</span><span class="text-lime-400 font-mono font-bold"${_scopeId}>#${ssrInterpolate(__props.viewUser.id)}</span></div><div class="pt-3 border-t border-zinc-800/60"${_scopeId}><span class="text-zinc-400 block mb-2"${_scopeId}>نقش‌های سازمانی:</span><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
						ssrRenderList(__props.viewUser.roles, (r) => {
							_push(`<span class="${ssrRenderClass([{ "text-lime-400 border-lime-400/30": r.key === "super_admin" }, "px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold"])}"${_scopeId}>${ssrInterpolate(r.title)}</span>`);
						});
						_push(`<!--]--></div></div></div></div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-zinc-800/80 pb-3"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>اشتراک ورزشی</span></h2></div>`);
						if (__props.viewUser.active_membership) _push(`<div class="space-y-3 text-xs"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span class="text-zinc-400"${_scopeId}>پلن فعال:</span><span class="text-lime-400 font-bold text-sm"${_scopeId}>${ssrInterpolate(__props.viewUser.active_membership.plan?.title)}</span></div><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>تاریخ انقضا:</span><span class="text-white font-medium"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(__props.viewUser.active_membership.end_date))}</span></div><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>جلسات باقی‌مانده:</span><span class="font-mono font-bold text-lime-400 text-sm"${_scopeId}>${ssrInterpolate(__props.viewUser.active_membership.remaining_sessions ?? "نامحدود")}</span></div></div>`);
						else _push(`<div class="text-center py-8 text-zinc-500 text-xs"${_scopeId}> کاربر در حال حاضر اشتراک فعالی ندارد. </div>`);
						_push(`</div><div class="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4"${_scopeId}><div class="flex items-center justify-between border-b border-zinc-800/80 pb-3"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Dumbbell), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>وضعیت مربیگری</span></h2></div>`);
						if (__props.viewUser.trainer_profile) _push(`<div class="space-y-3 text-xs"${_scopeId}><div class="flex justify-between items-center text-zinc-400"${_scopeId}><span${_scopeId}>درصد پورسانت:</span><span class="text-lime-400 font-bold font-mono text-sm"${_scopeId}>%${ssrInterpolate(__props.viewUser.trainer_profile.commission_rate)}</span></div><div class="text-zinc-400"${_scopeId}><span class="block mb-1"${_scopeId}>تخصص‌ها و گرایش‌ها:</span><p class="text-zinc-300 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.viewUser.trainer_profile.specialties?.join("، ") || "ثبت نشده")}</p></div></div>`);
						else _push(`<div class="text-center py-8 text-zinc-500 text-xs"${_scopeId}> این کاربر به عنوان مربی در سیستم تعریف نشده است. </div>`);
						_push(`</div></div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Calendar), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>آخرین سوابق تردد و ورود/خروج کاربر</span></h2><span class="text-[11px] text-zinc-400"${_scopeId}>۱۰ تردد اخیر</span></div>`);
						if (__props.viewUser.attendances && __props.viewUser.attendances.length) {
							_push(`<div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-3.5 font-bold"${_scopeId}>تاریخ</th><th class="p-3.5 font-bold"${_scopeId}>زمان ورود</th><th class="p-3.5 font-bold"${_scopeId}>زمان خروج</th><th class="p-3.5 font-bold text-center"${_scopeId}>شیوه ثبت تردد</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
							ssrRenderList(__props.viewUser.attendances, (att) => {
								_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-3.5 text-zinc-300"${_scopeId}>${ssrInterpolate(unref(formatJalaliDate)(att.check_in))}</td><td class="p-3.5 text-white font-mono" dir="ltr"${_scopeId}>${ssrInterpolate(new Date(att.check_in).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								}))}</td><td class="p-3.5 text-zinc-400 font-mono" dir="ltr"${_scopeId}>`);
								if (att.check_out) _push(`<span${_scopeId}>${ssrInterpolate(new Date(att.check_out).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								}))}</span>`);
								else _push(`<span class="text-lime-400 font-bold text-[10px] bg-lime-400/10 px-2 py-0.5 rounded-full"${_scopeId}>در حال تمرین</span>`);
								_push(`</td><td class="p-3.5 text-center"${_scopeId}><span class="px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px]"${_scopeId}>${ssrInterpolate(att.method === "card" ? "کارت هوشمند" : att.method === "qr" ? "اسکن بارکد" : "ثبت دستی پذیرش")}</span></td></tr>`);
							});
							_push(`<!--]--></tbody></table></div>`);
						} else _push(`<div class="text-center py-10 text-zinc-500 text-xs"${_scopeId}> هیچ سابقه‌ی ترددی برای این کاربر ثبت نشده است. </div>`);
						_push(`</div><div class="rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden"${_scopeId}><div class="p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80"${_scopeId}><h2 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Sliders), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>دسترسی‌های اختصاصی کاربر به منوها (User Menu Overrides)</span></h2><p class="text-xs text-zinc-400 mt-1"${_scopeId}>مدیر سیستم می‌تواند منوی خاصی را منحصراً برای این کاربر مجاز (Allow) یا مسدود (Deny) کند.</p></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60"${_scopeId}><tr${_scopeId}><th class="p-3.5 font-bold"${_scopeId}>عنوان منو</th><th class="p-3.5 font-bold"${_scopeId}>کلید سیستم</th><th class="p-3.5 font-bold"${_scopeId}>پنل مربوطه</th><th class="p-3.5 font-bold text-center"${_scopeId}>وضعیت دسترسی موثر</th><th class="p-3.5 font-bold text-center"${_scopeId}>تنظیم اورراید اختصاصی</th></tr></thead><tbody class="divide-y divide-zinc-800/50"${_scopeId}><!--[-->`);
						ssrRenderList(__props.menus, (menu) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-3.5 font-bold text-white"${_scopeId}>${ssrInterpolate(menu.title)}</td><td class="p-3.5 font-mono text-zinc-400 text-[11px]"${_scopeId}>${ssrInterpolate(menu.key)}</td><td class="p-3.5 text-zinc-400"${_scopeId}><span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px]"${_scopeId}>${ssrInterpolate(menu.panel_role_key)}</span></td><td class="p-3.5 text-center"${_scopeId}><span class="${ssrRenderClass([getEffectiveStatus(menu).color, "px-2.5 py-1 rounded-full text-[10px] font-bold border"])}"${_scopeId}>${ssrInterpolate(getEffectiveStatus(menu).text)}</span></td><td class="p-3.5 text-center"${_scopeId}><select${ssrRenderAttr("value", userOverridesMap.value[menu.id] || "none")}${ssrIncludeBooleanAttr(isUpdating.value === menu.id) ? " disabled" : ""} class="bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-1.5 text-xs text-white focus:border-lime-400 focus:outline-none transition-colors disabled:opacity-50"${_scopeId}><option value="none"${_scopeId}>پیش‌فرض نقش</option><option value="allow"${_scopeId}>مجاز ویژه (Allow)</option><option value="deny"${_scopeId}>مسدودسازی (Deny)</option></select></td></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div></div>`);
					} else return [createVNode(unref(Head), { title: `جزئیات کاربر: ${__props.viewUser.first_name || ""} ${__props.viewUser.last_name || __props.viewUser.mobile}` }, null, 8, ["title"]), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60" }, [createVNode("div", { class: "flex items-center gap-4" }, [createVNode(unref(Link), {
							href: "/panel/super_admin/users",
							class: "w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shrink-0",
							title: "بازگشت به لیست کاربران"
						}, {
							default: withCtx(() => [createVNode(unref(ChevronRight), { class: "w-5 h-5" })]),
							_: 1
						}), createVNode("div", null, [
							createVNode("div", { class: "flex items-center gap-2 mb-1" }, [createVNode("span", { class: "text-xs text-lime-400 font-bold uppercase tracking-wider" }, "پرونده اطلاعات کاربر"), __props.viewUser.member_profile?.level === "vip" ? (openBlock(), createBlock("span", {
								key: 0,
								class: "px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] text-amber-400 flex items-center gap-1 font-bold"
							}, [createVNode(unref(Crown), { class: "w-3 h-3" }), createTextVNode(" VIP طلایی ")])) : createCommentVNode("", true)]),
							createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-3" }, [createVNode("span", null, toDisplayString(__props.viewUser.first_name || "کاربر") + " " + toDisplayString(__props.viewUser.last_name || ""), 1)]),
							createVNode("div", { class: "text-xs text-zinc-400 mt-1 flex flex-wrap items-center gap-4" }, [
								createVNode("span", {
									class: "flex items-center gap-1.5 font-mono text-zinc-300",
									dir: "ltr"
								}, [createVNode(unref(Phone), { class: "w-3.5 h-3.5 text-lime-400" }), createTextVNode(" " + toDisplayString(__props.viewUser.mobile), 1)]),
								__props.viewUser.national_code ? (openBlock(), createBlock("span", {
									key: 0,
									class: "font-mono text-zinc-400"
								}, "کد ملی: " + toDisplayString(__props.viewUser.national_code), 1)) : createCommentVNode("", true),
								createVNode("span", null, "عضویت: " + toDisplayString(unref(formatJalaliDate)(__props.viewUser.created_at)), 1)
							])
						])]), createVNode("div", { class: "flex items-center gap-3" }, [createVNode("span", { class: ["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border", __props.viewUser.status === "active" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"] }, [createVNode("span", { class: ["w-2 h-2 rounded-full", __props.viewUser.status === "active" ? "bg-emerald-400" : "bg-rose-400"] }, null, 2), createTextVNode(" " + toDisplayString(__props.viewUser.status === "active" ? "حساب کاربری فعال" : "معلق / غیرفعال"), 1)], 2)])]),
						createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-5" }, [
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4" }, [createVNode("div", { class: "flex items-center justify-between border-b border-zinc-800/80 pb-3" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(User), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "مشخصات فردی و نقش‌ها")])]), createVNode("div", { class: "space-y-3 text-xs" }, [
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "جنسیت:"), createVNode("span", { class: "text-white font-medium" }, toDisplayString(__props.viewUser.gender === "female" ? "بانوان" : "آقایان"), 1)]),
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "کد ملی:"), createVNode("span", { class: "text-white font-mono" }, toDisplayString(__props.viewUser.national_code || "ثبت نشده"), 1)]),
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "شماره پرونده:"), createVNode("span", { class: "text-lime-400 font-mono font-bold" }, "#" + toDisplayString(__props.viewUser.id), 1)]),
								createVNode("div", { class: "pt-3 border-t border-zinc-800/60" }, [createVNode("span", { class: "text-zinc-400 block mb-2" }, "نقش‌های سازمانی:"), createVNode("div", { class: "flex flex-wrap gap-1.5" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.viewUser.roles, (r) => {
									return openBlock(), createBlock("span", {
										key: r.id,
										class: ["px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold", { "text-lime-400 border-lime-400/30": r.key === "super_admin" }]
									}, toDisplayString(r.title), 3);
								}), 128))])])
							])]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4" }, [createVNode("div", { class: "flex items-center justify-between border-b border-zinc-800/80 pb-3" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(CreditCard), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "اشتراک ورزشی")])]), __props.viewUser.active_membership ? (openBlock(), createBlock("div", {
								key: 0,
								class: "space-y-3 text-xs"
							}, [
								createVNode("div", { class: "flex justify-between items-center" }, [createVNode("span", { class: "text-zinc-400" }, "پلن فعال:"), createVNode("span", { class: "text-lime-400 font-bold text-sm" }, toDisplayString(__props.viewUser.active_membership.plan?.title), 1)]),
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "تاریخ انقضا:"), createVNode("span", { class: "text-white font-medium" }, toDisplayString(unref(formatJalaliDate)(__props.viewUser.active_membership.end_date)), 1)]),
								createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "جلسات باقی‌مانده:"), createVNode("span", { class: "font-mono font-bold text-lime-400 text-sm" }, toDisplayString(__props.viewUser.active_membership.remaining_sessions ?? "نامحدود"), 1)])
							])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "text-center py-8 text-zinc-500 text-xs"
							}, " کاربر در حال حاضر اشتراک فعالی ندارد. "))]),
							createVNode("div", { class: "p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-lg space-y-4" }, [createVNode("div", { class: "flex items-center justify-between border-b border-zinc-800/80 pb-3" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Dumbbell), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "وضعیت مربیگری")])]), __props.viewUser.trainer_profile ? (openBlock(), createBlock("div", {
								key: 0,
								class: "space-y-3 text-xs"
							}, [createVNode("div", { class: "flex justify-between items-center text-zinc-400" }, [createVNode("span", null, "درصد پورسانت:"), createVNode("span", { class: "text-lime-400 font-bold font-mono text-sm" }, "%" + toDisplayString(__props.viewUser.trainer_profile.commission_rate), 1)]), createVNode("div", { class: "text-zinc-400" }, [createVNode("span", { class: "block mb-1" }, "تخصص‌ها و گرایش‌ها:"), createVNode("p", { class: "text-zinc-300 line-clamp-2" }, toDisplayString(__props.viewUser.trainer_profile.specialties?.join("، ") || "ثبت نشده"), 1)])])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "text-center py-8 text-zinc-500 text-xs"
							}, " این کاربر به عنوان مربی در سیستم تعریف نشده است. "))])
						]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden" }, [createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80 flex items-center justify-between" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Calendar), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "آخرین سوابق تردد و ورود/خروج کاربر")]), createVNode("span", { class: "text-[11px] text-zinc-400" }, "۱۰ تردد اخیر")]), __props.viewUser.attendances && __props.viewUser.attendances.length ? (openBlock(), createBlock("div", {
							key: 0,
							class: "overflow-x-auto"
						}, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-3.5 font-bold" }, "تاریخ"),
							createVNode("th", { class: "p-3.5 font-bold" }, "زمان ورود"),
							createVNode("th", { class: "p-3.5 font-bold" }, "زمان خروج"),
							createVNode("th", { class: "p-3.5 font-bold text-center" }, "شیوه ثبت تردد")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.viewUser.attendances, (att) => {
							return openBlock(), createBlock("tr", {
								key: att.id,
								class: "hover:bg-zinc-800/30 transition-colors"
							}, [
								createVNode("td", { class: "p-3.5 text-zinc-300" }, toDisplayString(unref(formatJalaliDate)(att.check_in)), 1),
								createVNode("td", {
									class: "p-3.5 text-white font-mono",
									dir: "ltr"
								}, toDisplayString(new Date(att.check_in).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								})), 1),
								createVNode("td", {
									class: "p-3.5 text-zinc-400 font-mono",
									dir: "ltr"
								}, [att.check_out ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(new Date(att.check_out).toLocaleTimeString("fa-IR", {
									hour: "2-digit",
									minute: "2-digit"
								})), 1)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "text-lime-400 font-bold text-[10px] bg-lime-400/10 px-2 py-0.5 rounded-full"
								}, "در حال تمرین"))]),
								createVNode("td", { class: "p-3.5 text-center" }, [createVNode("span", { class: "px-2 py-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-[10px]" }, toDisplayString(att.method === "card" ? "کارت هوشمند" : att.method === "qr" ? "اسکن بارکد" : "ثبت دستی پذیرش"), 1)])
							]);
						}), 128))])])])) : (openBlock(), createBlock("div", {
							key: 1,
							class: "text-center py-10 text-zinc-500 text-xs"
						}, " هیچ سابقه‌ی ترددی برای این کاربر ثبت نشده است. "))]),
						createVNode("div", { class: "rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl overflow-hidden" }, [createVNode("div", { class: "p-4 sm:px-6 bg-zinc-950/70 border-b border-zinc-800/80" }, [createVNode("h2", { class: "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2" }, [createVNode(unref(Sliders), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "دسترسی‌های اختصاصی کاربر به منوها (User Menu Overrides)")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, "مدیر سیستم می‌تواند منوی خاصی را منحصراً برای این کاربر مجاز (Allow) یا مسدود (Deny) کند.")]), createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/40 text-zinc-400 uppercase text-[11px] border-b border-zinc-800/60" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-3.5 font-bold" }, "عنوان منو"),
							createVNode("th", { class: "p-3.5 font-bold" }, "کلید سیستم"),
							createVNode("th", { class: "p-3.5 font-bold" }, "پنل مربوطه"),
							createVNode("th", { class: "p-3.5 font-bold text-center" }, "وضعیت دسترسی موثر"),
							createVNode("th", { class: "p-3.5 font-bold text-center" }, "تنظیم اورراید اختصاصی")
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/50" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.menus, (menu) => {
							return openBlock(), createBlock("tr", {
								key: menu.id,
								class: "hover:bg-zinc-800/30 transition-colors"
							}, [
								createVNode("td", { class: "p-3.5 font-bold text-white" }, toDisplayString(menu.title), 1),
								createVNode("td", { class: "p-3.5 font-mono text-zinc-400 text-[11px]" }, toDisplayString(menu.key), 1),
								createVNode("td", { class: "p-3.5 text-zinc-400" }, [createVNode("span", { class: "px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px]" }, toDisplayString(menu.panel_role_key), 1)]),
								createVNode("td", { class: "p-3.5 text-center" }, [createVNode("span", { class: ["px-2.5 py-1 rounded-full text-[10px] font-bold border", getEffectiveStatus(menu).color] }, toDisplayString(getEffectiveStatus(menu).text), 3)]),
								createVNode("td", { class: "p-3.5 text-center" }, [createVNode("select", {
									value: userOverridesMap.value[menu.id] || "none",
									onChange: ($event) => handleOverrideChange(menu.id, $event),
									disabled: isUpdating.value === menu.id,
									class: "bg-zinc-950 border border-zinc-700/80 rounded-xl px-3 py-1.5 text-xs text-white focus:border-lime-400 focus:outline-none transition-colors disabled:opacity-50"
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
