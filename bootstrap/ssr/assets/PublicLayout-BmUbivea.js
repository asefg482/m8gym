import { t as _sfc_main$4 } from "./FlashMessage-D7IaXkt7.js";
import { t as _sfc_main$5 } from "./RoleSwitcher-Sid3IMe_.js";
import { computed, createBlock, createCommentVNode, createTextVNode, createVNode, mergeProps, openBlock, ref, resolveDynamicComponent, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Link, usePage } from "@inertiajs/vue3";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import { Clock, Coffee, Dumbbell, Heart, Home, LayoutDashboard, LogOut, MapPin, Menu, Phone, PhoneCall, Scissors, ShieldCheck, ShoppingBag, Sparkles, User, X } from "@lucide/vue";
//#region resources/js/Components/Navbar.vue
var _sfc_main$3 = {
	__name: "Navbar",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const isMobileMenuOpen = ref(false);
		const auth = page.props.auth;
		const gym = page.props.gym || {};
		const navLinks = [
			{
				title: "صفحه اصلی",
				href: "/",
				icon: Dumbbell
			},
			{
				title: "کافه و رستوران",
				href: "/cafe",
				icon: Coffee
			},
			{
				title: "فروشگاه M8",
				href: "/shop",
				icon: ShoppingBag
			},
			{
				title: "ماساژ و اسپا",
				href: "/massage",
				icon: Sparkles
			},
			{
				title: "آرایشگاه VIP",
				href: "/hairdresser",
				icon: Scissors
			}
		];
		function getPanelUrl() {
			if (!auth || !auth.user) return "/auth/login";
			return `/panel/${auth.active_role || "member"}/dashboard`;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-40 w-full backdrop-blur-xl bg-zinc-950/85 border-b border-zinc-800/80" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-20">`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "flex items-center gap-3 group"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-lg shadow-lime-500/20 group-hover:shadow-lime-500/40 transition-all duration-300"${_scopeId}><div class="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center"${_scopeId}><span class="text-xl font-black tracking-wider text-lime-400 font-sans"${_scopeId}>M8</span></div></div><div class="flex flex-col"${_scopeId}><span class="text-lg font-black tracking-tight text-white group-hover:text-lime-400 transition-colors"${_scopeId}> FIT CLUB </span><span class="text-[10px] text-zinc-400 tracking-wider font-medium"${_scopeId}>ساری • ۲۵۰۰ متر فضا</span></div>`);
					else return [createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5 shadow-lg shadow-lime-500/20 group-hover:shadow-lime-500/40 transition-all duration-300" }, [createVNode("div", { class: "w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center" }, [createVNode("span", { class: "text-xl font-black tracking-wider text-lime-400 font-sans" }, "M8")])]), createVNode("div", { class: "flex flex-col" }, [createVNode("span", { class: "text-lg font-black tracking-tight text-white group-hover:text-lime-400 transition-colors" }, " FIT CLUB "), createVNode("span", { class: "text-[10px] text-zinc-400 tracking-wider font-medium" }, "ساری • ۲۵۰۰ متر فضا")])];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="hidden lg:flex items-center gap-1 xl:gap-2"><!--[-->`);
			ssrRenderList(navLinks, (link) => {
				_push(ssrRenderComponent(unref(Link), {
					key: link.href,
					href: link.href,
					class: ["flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors", { "text-lime-400 bg-lime-400/10 font-bold": _ctx.$page.url === link.href }]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.icon), { class: ["w-4 h-4 text-zinc-400", { "text-lime-400": _ctx.$page.url === link.href }] }, null), _parent, _scopeId);
							_push(`<span${_scopeId}>${ssrInterpolate(link.title)}</span>`);
						} else return [(openBlock(), createBlock(resolveDynamicComponent(link.icon), { class: ["w-4 h-4 text-zinc-400", { "text-lime-400": _ctx.$page.url === link.href }] }, null, 8, ["class"])), createVNode("span", null, toDisplayString(link.title), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav><div class="flex items-center gap-3"><a${ssrRenderAttr("href", "tel:" + (unref(gym).phone || "01133221100"))} class="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">`);
			_push(ssrRenderComponent(unref(PhoneCall), { class: "w-3.5 h-3.5 text-lime-400" }, null, _parent));
			_push(`<span>${ssrInterpolate(unref(gym).phone || "تماس با باشگاه")}</span></a>`);
			if (unref(auth) && unref(auth).user) {
				_push(`<div class="flex items-center gap-2">`);
				_push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
				_push(ssrRenderComponent(unref(Link), {
					href: getPanelUrl(),
					class: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-lime-400 text-black hover:bg-lime-300 transition-all shadow-md shadow-lime-400/20"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(LayoutDashboard), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`<span class="hidden sm:inline"${_scopeId}>داشبورد</span><span class="sm:hidden"${_scopeId}>${ssrInterpolate(unref(auth).user.first_name || "پنل")}</span>`);
						} else return [
							createVNode(unref(LayoutDashboard), { class: "w-4 h-4" }),
							createVNode("span", { class: "hidden sm:inline" }, "داشبورد"),
							createVNode("span", { class: "sm:hidden" }, toDisplayString(unref(auth).user.first_name || "پنل"), 1)
						];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else {
				_push(`<div>`);
				_push(ssrRenderComponent(unref(Link), {
					href: "/auth/login",
					class: "flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold bg-lime-400 text-black hover:bg-lime-300 transition-all shadow-md shadow-lime-400/20"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(ssrRenderComponent(unref(User), { class: "w-4 h-4" }, null, _parent, _scopeId));
							_push(`<span${_scopeId}>ورود / ثبت‌نام</span>`);
						} else return [createVNode(unref(User), { class: "w-4 h-4" }), createVNode("span", null, "ورود / ثبت‌نام")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			}
			_push(`<button type="button" class="lg:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800">`);
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(isMobileMenuOpen.value ? unref(X) : unref(Menu)), { class: "w-5 h-5" }, null), _parent);
			_push(`</button></div></div></div>`);
			if (isMobileMenuOpen.value) {
				_push(`<div class="lg:hidden border-b border-zinc-800 bg-zinc-950 px-4 py-4 space-y-2"><!--[-->`);
				ssrRenderList(navLinks, (link) => {
					_push(ssrRenderComponent(unref(Link), {
						key: link.href,
						href: link.href,
						onClick: ($event) => isMobileMenuOpen.value = false,
						class: ["flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900", { "text-lime-400 bg-lime-400/10 font-bold": _ctx.$page.url === link.href }]
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.icon), { class: "w-4 h-4" }, null), _parent, _scopeId);
								_push(`<span${_scopeId}>${ssrInterpolate(link.title)}</span>`);
							} else return [(openBlock(), createBlock(resolveDynamicComponent(link.icon), { class: "w-4 h-4" })), createVNode("span", null, toDisplayString(link.title), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]-->`);
				if (unref(auth) && unref(auth).user) {
					_push(`<div class="pt-3 border-t border-zinc-900 flex justify-between items-center">`);
					_push(ssrRenderComponent(unref(Link), {
						href: getPanelUrl(),
						onClick: ($event) => isMobileMenuOpen.value = false,
						class: "text-xs text-lime-400 font-bold flex items-center gap-1.5"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(LayoutDashboard), { class: "w-4 h-4" }, null, _parent, _scopeId));
								_push(` ورود به پنل کاربری `);
							} else return [createVNode(unref(LayoutDashboard), { class: "w-4 h-4" }), createTextVNode(" ورود به پنل کاربری ")];
						}),
						_: 1
					}, _parent));
					_push(ssrRenderComponent(unref(Link), {
						href: "/auth/logout",
						method: "post",
						as: "button",
						class: "text-xs text-red-400 flex items-center gap-1"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(ssrRenderComponent(unref(LogOut), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
								_push(` خروج `);
							} else return [createVNode(unref(LogOut), { class: "w-3.5 h-3.5" }), createTextVNode(" خروج ")];
						}),
						_: 1
					}, _parent));
					_push(`</div>`);
				} else _push(`<!---->`);
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</header>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/Footer.vue
var _sfc_main$2 = {
	__name: "Footer",
	__ssrInlineRender: true,
	setup(__props) {
		const gym = usePage().props.gym || {};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 text-sm mt-20 pb-20 lg:pb-8" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"><div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 p-0.5"><div class="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center"><span class="text-base font-black text-lime-400 font-sans">M8</span></div></div><span class="text-lg font-black text-white">M8 FIT CLUB</span></div><p class="text-xs text-zinc-400 leading-relaxed"> پیشرفته‌ترین مجموعه ورزشی و تندرستی ساری با مساحت بیش از ۲۵۰۰ متر مربع، مربیان رسمی فدراسیون، کافه سلامت، ماساژ و آرایشگاه VIP. </p><div class="flex items-center gap-3 pt-2"><a${ssrRenderAttr("href", unref(gym).instagram || "https://www.instagram.com/m8_fitclub/?hl=fa")} target="_blank" rel="noopener" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors" aria-label="Instagram"><svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a><a href="https://www.google.com/maps/search/+SH/?entry=wc&amp;hl=el" target="_blank" rel="noopener" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-lime-400 hover:border-lime-400/50 transition-colors">`);
			_push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4" }, null, _parent));
			_push(`</a></div></div><div class="space-y-3"><h3 class="text-xs font-bold text-white uppercase tracking-wider">دسترسی سریع</h3><ul class="space-y-2 text-xs"><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/",
				class: "hover:text-lime-400 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`صفحه اصلی باشگاه`);
					else return [createTextVNode("صفحه اصلی باشگاه")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/cafe",
				class: "hover:text-lime-400 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`کافه و رستوران رژیمی`);
					else return [createTextVNode("کافه و رستوران رژیمی")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/shop",
				class: "hover:text-lime-400 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`فروشگاه مکمل و پوشاک M8`);
					else return [createTextVNode("فروشگاه مکمل و پوشاک M8")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/massage",
				class: "hover:text-lime-400 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`ماساژ ورزشی و ریکاوری`);
					else return [createTextVNode("ماساژ ورزشی و ریکاوری")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li>`);
			_push(ssrRenderComponent(unref(Link), {
				href: "/hairdresser",
				class: "hover:text-lime-400 transition-colors"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`آرایشگاه و پیرایش اختصاصی`);
					else return [createTextVNode("آرایشگاه و پیرایش اختصاصی")];
				}),
				_: 1
			}, _parent));
			_push(`</li></ul></div><div class="space-y-3"><h3 class="text-xs font-bold text-white uppercase tracking-wider">اطلاعات تماس و ساعت کاری</h3><div class="space-y-2.5 text-xs text-zinc-400"><div class="flex items-start gap-2">`);
			_push(ssrRenderComponent(unref(MapPin), { class: "w-4 h-4 text-lime-400 shrink-0 mt-0.5" }, null, _parent));
			_push(`<span>${ssrInterpolate(unref(gym).address || "مازندران، ساری، خیابان قارن، مجموعه M8")}</span></div><div class="flex items-center gap-2">`);
			_push(ssrRenderComponent(unref(Phone), { class: "w-4 h-4 text-lime-400 shrink-0" }, null, _parent));
			_push(`<span>${ssrInterpolate(unref(gym).phone || "۰۱۱-۳۳۲۲۱۱۰۰")} | ${ssrInterpolate(unref(gym).mobile || "۰۹۱۱۱۲۳۴۵۶۷")}</span></div><div class="flex items-start gap-2">`);
			_push(ssrRenderComponent(unref(Clock), { class: "w-4 h-4 text-lime-400 shrink-0 mt-0.5" }, null, _parent));
			_push(`<span>${ssrInterpolate(unref(gym).work_hours || "۶:۰۰ الی ۲۳:۳۰ (جمعه‌ها ۹ تا ۲۰)")}</span></div></div></div><div class="space-y-3"><h3 class="text-xs font-bold text-white uppercase tracking-wider">مجوزها و نماد اعتماد</h3><div class="grid grid-cols-2 gap-2"><div class="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center flex flex-col items-center justify-center gap-1.5">`);
			_push(ssrRenderComponent(unref(ShieldCheck), { class: "w-6 h-6 text-lime-400" }, null, _parent));
			_push(`<span class="text-[10px] text-zinc-300 font-semibold">پروانه رسمی ورزش</span><span class="text-[9px] text-zinc-400">فدراسیون بدنسازی</span></div><div class="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center flex flex-col items-center justify-center gap-1.5"><div class="w-6 h-6 rounded-full border border-lime-400/50 flex items-center justify-center text-lime-400 text-xs font-bold font-sans"> e </div><span class="text-[10px] text-zinc-300 font-semibold">اینماد الکترونیکی</span><span class="text-[9px] text-zinc-400">نماد تجارت الکترونیک</span></div></div></div></div><div class="border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3"><p>© ۲۰۲۶ تمامی حقوق محفوظ و متعلق به باشگاه ورزشی M8 ساری است.</p><p class="flex items-center gap-1 text-[11px]"> طراحی و توسعه پلتفرم یکپارچه با `);
			_push(ssrRenderComponent(unref(Heart), { class: "w-3.5 h-3.5 text-lime-400 fill-lime-400" }, null, _parent));
			_push(` برای قهرمانان M8 </p></div></div></footer>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Components/BottomNav.vue
var _sfc_main$1 = {
	__name: "BottomNav",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		const auth = computed(() => page.props.auth);
		const profileHref = computed(() => {
			if (auth.value && auth.value.user) return `/panel/${auth.value.active_role || "member"}/dashboard`;
			return "/auth/login";
		});
		const items = computed(() => [
			{
				title: "خانه",
				href: "/",
				icon: Home,
				exact: true
			},
			{
				title: "کافه",
				href: "/cafe",
				icon: Coffee
			},
			{
				title: "فروشگاه",
				href: "/shop",
				icon: ShoppingBag
			},
			{
				title: "خدمات",
				href: "/massage",
				icon: Sparkles
			},
			{
				title: auth.value?.user ? "پروفایل" : "ورود",
				href: profileHref.value,
				icon: auth.value?.user ? LayoutDashboard : User
			}
		]);
		function isActive(item) {
			if (item.exact) return page.url === "/";
			return page.url.startsWith(item.href);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<nav${ssrRenderAttrs(mergeProps({ class: "lg:hidden fixed bottom-0 inset-x-0 z-50 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/80 px-2 py-1.5 safe-bottom" }, _attrs))}><div class="flex items-center justify-around max-w-md mx-auto"><!--[-->`);
			ssrRenderList(items.value, (item) => {
				_push(ssrRenderComponent(unref(Link), {
					key: item.href,
					href: item.href,
					class: ["flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200", isActive(item) ? "text-lime-400 font-bold" : "text-zinc-400 hover:text-zinc-200"]
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="relative"${_scopeId}>`);
							ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), { class: ["w-5 h-5 transition-transform", { "scale-110": isActive(item) }] }, null), _parent, _scopeId);
							if (isActive(item)) _push(`<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime-400 shadow-sm shadow-lime-400"${_scopeId}></span>`);
							else _push(`<!---->`);
							_push(`</div><span class="text-[10px] mt-1 tracking-tight"${_scopeId}>${ssrInterpolate(item.title)}</span>`);
						} else return [createVNode("div", { class: "relative" }, [(openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: ["w-5 h-5 transition-transform", { "scale-110": isActive(item) }] }, null, 8, ["class"])), isActive(item) ? (openBlock(), createBlock("span", {
							key: 0,
							class: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lime-400 shadow-sm shadow-lime-400"
						})) : createCommentVNode("", true)]), createVNode("span", { class: "text-[10px] mt-1 tracking-tight" }, toDisplayString(item.title), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></nav>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BottomNav.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region resources/js/Layouts/PublicLayout.vue
var _sfc_main = {
	__name: "PublicLayout",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-lime-400 selection:text-black" }, _attrs))}>`);
			_push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
			_push(`<main class="flex-1">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main>`);
			_push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
			_push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PublicLayout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as t };
