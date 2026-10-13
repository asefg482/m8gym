import { t as _sfc_main$2 } from "./FlashMessage-D7IaXkt7.js";
import { t as _sfc_main$3 } from "./RoleSwitcher-Sid3IMe_.js";
import { computed, createVNode, mergeProps, ref, resolveDynamicComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import * as LucideIcons from "@lucide/vue";
import { ChevronDown, CreditCard, Crown, ExternalLink, Home, LayoutDashboard, LogOut, Menu, X } from "@lucide/vue";
//#region resources/js/Components/DynamicIcon.vue
var _sfc_main$1 = {
	__name: "DynamicIcon",
	__ssrInlineRender: true,
	props: {
		name: {
			type: String,
			default: "LayoutDashboard"
		},
		size: {
			type: [Number, String],
			default: 20
		},
		class: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const props = __props;
		const iconComponent = computed(() => {
			let pascal = props.name;
			if (pascal.includes("-")) pascal = pascal.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
			return LucideIcons[pascal] || LucideIcons.LayoutDashboard;
		});
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(iconComponent.value), mergeProps({
				size: __props.size,
				class: props.class
			}, _attrs), null), _parent);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DynamicIcon.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/PanelLayout.vue
var _sfc_main = {
	__name: "PanelLayout",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const isSidebarOpen = ref(false);
		const isUserDropdownOpen = ref(false);
		const auth = computed(() => page.props.auth || {});
		const user = computed(() => auth.value.user || {});
		const activeRole = computed(() => auth.value.active_role || "member");
		const menus = computed(() => auth.value.menus || []);
		const roleLabels = {
			super_admin: "مدیریت کل و ادمین",
			manager: "مدیریت وبسایت و محتوا",
			trainer: "پنل مربیان",
			shop: "فروشگاه لوازم و مکمل",
			buffet: "بوفه و کافه سلامت",
			service: "خدمات، ماساژ و آرایشگاه",
			member: "پنل ورزشکاران و اعضا"
		};
		const roleBadgeLabels = {
			super_admin: "ادمین کل",
			manager: "مدیر سایت",
			trainer: "مربی رسمی",
			shop: "فروشگاه",
			buffet: "بوفه سلامت",
			service: "خدمات VIP",
			member: "عضو باشگاه"
		};
		const groupedMenus = computed(() => {
			if (activeRole.value !== "super_admin" && activeRole.value !== "manager") return { [activeRole.value]: menus.value };
			const groups = {};
			for (const menu of menus.value) {
				const groupKey = menu.panel_role_key || "other";
				if (!groups[groupKey]) groups[groupKey] = [];
				groups[groupKey].push(menu);
			}
			return groups;
		});
		function isCurrentRoute(routePath) {
			if (!routePath) return false;
			return page.url === routePath || page.url.startsWith(routePath + "/");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen h-dvh bg-zinc-950 text-zinc-100 flex flex-col overflow-hidden selection:bg-lime-400 selection:text-black" }, _attrs))}>`);
			_push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
			_push(`<header class="shrink-0 z-30 h-16 sm:h-17 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 px-4 sm:px-6 flex items-center justify-between"><div class="flex items-center gap-3 sm:gap-4"><button type="button" class="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800/80 transition-colors" aria-label="باز کردن منو">`);
			_push(ssrRenderComponent(unref(Menu), { class: "w-5 h-5" }, null, _parent));
			_push(`</button><div class="hidden sm:flex flex-col text-right"><span class="text-xs font-bold text-white flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span><span>باشگاه ورزشی و تندرستی M8</span></span><span class="text-[11px] text-zinc-400 mt-0.5"> خوش آمدید، ${ssrInterpolate(user.value.name || "ورزشکار عزیز")} 👋 </span></div></div><div class="flex items-center gap-2.5 sm:gap-3.5">`);
			_push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
			if (user.value.is_vip) {
				_push(`<div class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold shadow-sm shadow-amber-400/10">`);
				_push(ssrRenderComponent(unref(Crown), { class: "w-3.5 h-3.5" }, null, _parent));
				_push(`<span>عضو ویژه VIP</span></div>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Home), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سایت اصلی</span>`);
					} else return [createVNode(unref(Home), { class: "w-3.5 h-3.5 text-lime-400" }), createVNode("span", null, "سایت اصلی")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="relative"><button type="button" class="flex items-center gap-2.5 p-1 sm:px-2.5 sm:py-1.5 rounded-xl hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all cursor-pointer"><div class="relative"><div class="w-9 h-9 rounded-full bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-md shadow-lime-400/10"><div class="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center text-xs font-bold text-lime-400 font-sans">${ssrInterpolate(user.value.first_name ? user.value.first_name.charAt(0) : "U")}</div></div><span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950"></span></div><div class="hidden sm:flex flex-col text-right"><span class="text-xs font-bold text-white leading-tight">${ssrInterpolate(user.value.name)}</span><span class="text-[10px] text-zinc-400 font-medium">${ssrInterpolate(roleBadgeLabels[activeRole.value] || "عضو باشگاه")}</span></div>`);
			_push(ssrRenderComponent(unref(ChevronDown), { class: ["w-3.5 h-3.5 text-zinc-400 hidden sm:block transition-transform duration-200", { "rotate-180": isUserDropdownOpen.value }] }, null, _parent));
			_push(`</button>`);
			if (isUserDropdownOpen.value) {
				_push(`<div class="absolute left-0 mt-2 w-64 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150"><div class="p-3 pb-2.5 border-b border-zinc-800/80 mb-1"><div class="flex items-center gap-2.5"><div class="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-bold text-lime-400">${ssrInterpolate(user.value.first_name ? user.value.first_name.charAt(0) : "U")}</div><div class="flex flex-col"><span class="text-xs font-bold text-white">${ssrInterpolate(user.value.name)}</span><span class="text-[10px] text-zinc-400 font-mono" dir="ltr">${ssrInterpolate(user.value.mobile)}</span></div></div><div class="mt-2.5 flex items-center justify-between text-[10px]"><span class="px-2 py-0.5 rounded-md bg-lime-400/10 text-lime-400 font-bold"> نقش فعال: ${ssrInterpolate(roleBadgeLabels[activeRole.value] || activeRole.value)}</span>`);
				if (user.value.is_vip) {
					_push(`<span class="text-amber-400 font-bold flex items-center gap-1">`);
					_push(ssrRenderComponent(unref(Crown), { class: "w-3 h-3" }, null, _parent));
					_push(` VIP </span>`);
				} else _push(`<!---->`);
				_push(`</div></div>`);
				_push(ssrRenderComponent(unref(Link), {
					href: `/panel/${activeRole.value}/dashboard`,
					onClick: ($event) => isUserDropdownOpen.value = false,
					class: "flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(LayoutDashboard), { class: "w-4 h-4 text-lime-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>داشبورد کاربری</span>`);
						} else return [createVNode(unref(LayoutDashboard), { class: "w-4 h-4 text-lime-400" }), createVNode("span", null, "داشبورد کاربری")];
					}),
					_: 1
				}, _parent));
				if (activeRole.value === "member") _push(ssrRenderComponent(unref(Link), {
					href: "/panel/member/membership",
					onClick: ($event) => isUserDropdownOpen.value = false,
					class: "flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 text-emerald-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>اشتراک و تمدید دوره</span>`);
						} else return [createVNode(unref(CreditCard), { class: "w-4 h-4 text-emerald-400" }), createVNode("span", null, "اشتراک و تمدید دوره")];
					}),
					_: 1
				}, _parent));
				else _push(`<!---->`);
				_push(ssrRenderComponent(unref(Link), {
					href: "/",
					class: "flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(ExternalLink), { class: "w-4 h-4 text-zinc-400" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>مشاهده وب‌سایت اصلی</span>`);
						} else return [createVNode(unref(ExternalLink), { class: "w-4 h-4 text-zinc-400" }), createVNode("span", null, "مشاهده وب‌سایت اصلی")];
					}),
					_: 1
				}, _parent));
				_push(`<div class="pt-1 border-t border-zinc-800/80 mt-1">`);
				_push(ssrRenderComponent(unref(Link), {
					href: "/auth/logout",
					method: "post",
					as: "button",
					class: "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer text-right"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(LogOut), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>خروج از حساب کاربری</span>`);
						} else return [createVNode(unref(LogOut), { class: "w-4 h-4" }), createVNode("span", null, "خروج از حساب کاربری")];
					}),
					_: 1
				}, _parent));
				_push(`</div></div>`);
			} else _push(`<!---->`);
			_push(`</div></div></header><div class="flex-1 min-h-0 flex overflow-hidden"><aside class="${ssrRenderClass(["fixed inset-y-0 right-0 z-40 w-68 sm:w-72 bg-zinc-950 border-l border-zinc-800/80 flex flex-col transition-transform duration-200 lg:static lg:translate-x-0 lg:h-full lg:shrink-0", isSidebarOpen.value ? "translate-x-0" : "translate-x-full lg:translate-x-0"])}"><div class="h-16 sm:h-17 px-5 border-b border-zinc-800/80 flex items-center justify-between shrink-0">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-2.5 group"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-md shadow-lime-400/20 group-hover:shadow-lime-400/40 transition-all"${_scopeId}><div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center"${_scopeId}><span class="text-sm font-black text-lime-400 font-sans"${_scopeId}>M8</span></div></div><div class="flex flex-col"${_scopeId}><span class="text-sm font-black text-white group-hover:text-lime-400 transition-colors tracking-tight"${_scopeId}>M8 FIT CLUB</span><span class="text-[9px] text-zinc-400 font-mono"${_scopeId}>PANEL v2.0</span></div>`);
					else return [createVNode("div", { class: "w-9 h-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-md shadow-lime-400/20 group-hover:shadow-lime-400/40 transition-all" }, [createVNode("div", { class: "w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center" }, [createVNode("span", { class: "text-sm font-black text-lime-400 font-sans" }, "M8")])]), createVNode("div", { class: "flex flex-col" }, [createVNode("span", { class: "text-sm font-black text-white group-hover:text-lime-400 transition-colors tracking-tight" }, "M8 FIT CLUB"), createVNode("span", { class: "text-[9px] text-zinc-400 font-mono" }, "PANEL v2.0")])];
				}),
				_: 1
			}, _parent));
			_push(`<button type="button" class="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900" aria-label="بستن سایدبار">`);
			_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
			_push(`</button></div><div class="p-3.5 mx-3 my-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 shrink-0"><div class="flex items-center gap-3"><div class="relative"><div class="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-sm font-bold text-lime-400">${ssrInterpolate(user.value.first_name ? user.value.first_name.charAt(0) : "U")}</div><span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-900"></span></div><div class="flex flex-col min-w-0 flex-1"><span class="text-xs font-bold text-white truncate">${ssrInterpolate(user.value.name)}</span><div class="flex items-center gap-1.5 mt-0.5"><span class="text-[10px] text-zinc-400 truncate">${ssrInterpolate(roleBadgeLabels[activeRole.value] || "کاربر باشگاه")}</span>`);
			if (user.value.is_vip) _push(`<span class="text-[9px] px-1.5 py-0.2 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 font-bold shrink-0">VIP</span>`);
			else _push(`<!---->`);
			_push(`</div></div></div></div><nav class="flex-1 min-h-0 overflow-y-auto overscroll-contain px-3 py-2 space-y-5"><!--[-->`);
			ssrRenderList(groupedMenus.value, (groupMenus, roleKey) => {
				_push(`<div class="space-y-1"><div class="px-3 pt-2 pb-1 text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center justify-between"><div class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span><span>${ssrInterpolate(roleLabels[roleKey] || roleKey)}</span></div><span class="text-[10px] text-zinc-400 font-mono font-normal">${ssrInterpolate(groupMenus.length)} منو</span></div><!--[-->`);
				ssrRenderList(groupMenus, (menu) => {
					_push(ssrRenderComponent(unref(Link), {
						key: menu.id,
						href: menu.route,
						onClick: ($event) => isSidebarOpen.value = false,
						class: ["group flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all", [isCurrentRoute(menu.route) ? "bg-lime-400/12 text-lime-400 font-bold border-r-3 border-lime-400 shadow-sm" : "text-zinc-400 hover:text-white hover:bg-zinc-900/80"]]
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="${ssrRenderClass([[isCurrentRoute(menu.route) ? "bg-lime-400/20 text-lime-400" : "bg-zinc-900/80 text-zinc-400 group-hover:text-white group-hover:bg-zinc-800"], "w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0"])}"${_scopeId}>`);
								_push(ssrRenderComponent(_sfc_main$1, {
									name: menu.icon,
									class: "w-3.5 h-3.5"
								}, null, _parent, _scopeId));
								_push(`</div><span class="truncate"${_scopeId}>${ssrInterpolate(menu.title)}</span>`);
							} else return [createVNode("div", { class: ["w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0", [isCurrentRoute(menu.route) ? "bg-lime-400/20 text-lime-400" : "bg-zinc-900/80 text-zinc-400 group-hover:text-white group-hover:bg-zinc-800"]] }, [createVNode(_sfc_main$1, {
								name: menu.icon,
								class: "w-3.5 h-3.5"
							}, null, 8, ["name"])], 2), createVNode("span", { class: "truncate" }, toDisplayString(menu.title), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			});
			_push(`<!--]-->`);
			if (menus.value.length === 0) _push(`<div class="p-6 text-center text-xs text-zinc-500"> منویی برای این نقش تعریف نشده است. </div>`);
			else _push(`<!---->`);
			_push(`</nav><div class="p-3.5 border-t border-zinc-900/90 shrink-0 mt-auto bg-zinc-950/80 flex items-center justify-between text-[11px]"><div class="flex items-center gap-2 text-zinc-400"><span class="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span><span>سرور فعال</span></div>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/auth/logout",
				method: "post",
				as: "button",
				class: "text-zinc-400 hover:text-rose-400 transition-colors p-1",
				title: "خروج سریع"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(LogOut), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
					else return [createVNode(unref(LogOut), { class: "w-3.5 h-3.5" })];
				}),
				_: 1
			}, _parent));
			_push(`</div></aside>`);
			if (isSidebarOpen.value) _push(`<div class="fixed inset-0 bg-black/75 backdrop-blur-sm z-30 lg:hidden"></div>`);
			else _push(`<!---->`);
			_push(`<main class="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 lg:p-8 bg-zinc-950">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PanelLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main$1 as n, _sfc_main as t };
