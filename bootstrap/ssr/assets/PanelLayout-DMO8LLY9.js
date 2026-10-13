import { t as _sfc_main$2 } from "./FlashMessage-D7IaXkt7.js";
import { t as _sfc_main$3 } from "./RoleSwitcher-Sid3IMe_.js";
import { computed, createVNode, mergeProps, ref, resolveDynamicComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import * as LucideIcons from "@lucide/vue";
import { Crown, Home, LogOut, Menu, X } from "@lucide/vue";
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
			_push(`<header class="shrink-0 z-30 h-16 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 px-4 sm:px-6 flex items-center justify-between"><div class="flex items-center gap-3"><button class="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800">`);
			_push(ssrRenderComponent(unref(Menu), { class: "w-5 h-5" }, null, _parent));
			_push(`</button>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-2.5"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5"${_scopeId}><div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center"${_scopeId}><span class="text-sm font-black text-lime-400 font-sans"${_scopeId}>M8</span></div></div><span class="text-sm font-black hidden sm:inline text-white"${_scopeId}>M8 FIT CLUB</span>`);
					else return [createVNode("div", { class: "w-9 h-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5" }, [createVNode("div", { class: "w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center" }, [createVNode("span", { class: "text-sm font-black text-lime-400 font-sans" }, "M8")])]), createVNode("span", { class: "text-sm font-black hidden sm:inline text-white" }, "M8 FIT CLUB")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="flex items-center gap-2.5 sm:gap-4">`);
			_push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
			if (user.value.is_vip) {
				_push(`<div class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold">`);
				_push(ssrRenderComponent(unref(Crown), { class: "w-3.5 h-3.5" }, null, _parent));
				_push(`<span>عضو طلایی VIP</span></div>`);
			} else _push(`<!---->`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800/60"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Home), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>سایت اصلی</span>`);
					} else return [createVNode(unref(Home), { class: "w-3.5 h-3.5" }), createVNode("span", null, "سایت اصلی")];
				}),
				_: 1
			}, _parent));
			_push(`<div class="flex items-center gap-2 border-r border-zinc-800 pr-2.5 sm:pr-4"><div class="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-xs font-bold text-lime-400 border border-zinc-700">${ssrInterpolate(user.value.first_name ? user.value.first_name.charAt(0) : "M")}</div><div class="hidden sm:flex flex-col text-right"><span class="text-xs font-bold text-white">${ssrInterpolate(user.value.name)}</span><span class="text-[10px] text-zinc-400">${ssrInterpolate(user.value.mobile)}</span></div></div>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/auth/logout",
				method: "post",
				as: "button",
				class: "p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-zinc-900 border border-zinc-800/60 transition-colors cursor-pointer",
				title: "خروج از حساب"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(LogOut), { class: "w-4 h-4" }, null, _parent, _scopeId));
					else return [createVNode(unref(LogOut), { class: "w-4 h-4" })];
				}),
				_: 1
			}, _parent));
			_push(`</div></header><div class="flex-1 min-h-0 flex overflow-hidden"><aside class="${ssrRenderClass(["fixed inset-y-0 right-0 z-40 w-64 bg-zinc-950 border-l border-zinc-800/80 flex flex-col transition-transform duration-200 lg:static lg:translate-x-0 lg:h-full lg:shrink-0", isSidebarOpen.value ? "translate-x-0" : "translate-x-full lg:translate-x-0"])}"><div class="lg:hidden flex items-center justify-between p-4 pb-3 border-b border-zinc-900 shrink-0"><span class="text-xs font-bold text-zinc-400">منوی ناوبری پنل</span><button class="p-1 text-zinc-400 hover:text-white">`);
			_push(ssrRenderComponent(unref(X), { class: "w-5 h-5" }, null, _parent));
			_push(`</button></div><nav class="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-6"><!--[-->`);
			ssrRenderList(groupedMenus.value, (groupMenus, roleKey) => {
				_push(`<div class="space-y-1.5">`);
				if (activeRole.value === "super_admin" || activeRole.value === "manager") _push(`<div class="px-3 py-1 text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span><span>${ssrInterpolate(roleLabels[roleKey] || roleKey)}</span></div>`);
				else _push(`<!---->`);
				_push(`<!--[-->`);
				ssrRenderList(groupMenus, (menu) => {
					_push(ssrRenderComponent(unref(Link), {
						key: menu.id,
						href: menu.route,
						onClick: ($event) => isSidebarOpen.value = false,
						class: ["flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors", isCurrentRoute(menu.route) ? "bg-lime-400/10 text-lime-400 font-bold border border-lime-400/20" : "text-zinc-400 hover:text-white hover:bg-zinc-900"]
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(_sfc_main$1, {
									name: menu.icon,
									class: ["w-4 h-4 shrink-0", { "text-lime-400": isCurrentRoute(menu.route) }]
								}, null, _parent, _scopeId));
								_push(`<span${_scopeId}>${ssrInterpolate(menu.title)}</span>`);
							} else return [createVNode(_sfc_main$1, {
								name: menu.icon,
								class: ["w-4 h-4 shrink-0", { "text-lime-400": isCurrentRoute(menu.route) }]
							}, null, 8, ["name", "class"]), createVNode("span", null, toDisplayString(menu.title), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			});
			_push(`<!--]-->`);
			if (menus.value.length === 0) _push(`<div class="p-4 text-center text-xs text-zinc-500"> منویی برای این نقش تعریف نشده است. </div>`);
			else _push(`<!---->`);
			_push(`</nav><div class="p-4 border-t border-zinc-900/80 shrink-0 mt-auto text-[11px] text-zinc-400 flex items-center justify-between"><span>M8 Club v2.0</span><span class="text-lime-400 font-mono">آنلاین</span></div></aside>`);
			if (isSidebarOpen.value) _push(`<div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"></div>`);
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
