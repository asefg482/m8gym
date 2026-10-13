import { n as _sfc_main$2, t as _sfc_main$1 } from "./PanelLayout-DMO8LLY9.js";
import { Fragment, createBlock, createTextVNode, createVNode, openBlock, renderList, toDisplayString, unref, useSSRContext, withCtx } from "vue";
import { Head, useForm } from "@inertiajs/vue3";
import { ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Check, Lock, RefreshCw, Save, ShieldCheck } from "@lucide/vue";
//#region resources/js/Pages/Panel/Manager/RoleMatrix.vue
var _sfc_main = {
	__name: "RoleMatrix",
	__ssrInlineRender: true,
	props: {
		roles: Array,
		menus: Array,
		matrix: Object
	},
	setup(__props) {
		const props = __props;
		const initialRoleMenus = {};
		for (const role of props.roles) {
			initialRoleMenus[role.id] = [];
			for (const menu of props.menus) if (props.matrix[menu.id]?.[role.key]) initialRoleMenus[role.id].push(menu.id);
		}
		const form = useForm({ matrix: initialRoleMenus });
		function togglePermission(roleId, menuId, roleKey) {
			if (roleKey === "super_admin") return;
			const currentList = form.matrix[roleId] || [];
			const index = currentList.indexOf(menuId);
			if (index > -1) currentList.splice(index, 1);
			else currentList.push(menuId);
		}
		function hasPermission(roleId, menuId, roleKey) {
			if (roleKey === "super_admin") return true;
			return form.matrix[roleId]?.includes(menuId);
		}
		function saveMatrix() {
			form.post("/panel/manager/matrix", { preserveScroll: true });
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Head), { title: "ماتریس دسترسی نقش–منو" }, null, _parent, _scopeId));
						_push(`<div class="space-y-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h1 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(unref(ShieldCheck), { class: "w-6 h-6 text-lime-400" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ماتریس دسترسی و سطوح دسترسی منوها</span></h1><p class="text-xs text-zinc-400 mt-1"${_scopeId}> تعیین کنید کدام نقش‌ها به کدام صفحات و منوهای پنل دسترسی داشته باشند (منبع پویای سیستم مجوزها). </p></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all cursor-pointer disabled:opacity-50"${_scopeId}>`);
						if (unref(form).processing) _push(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4 animate-spin" }, null, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(Save), { class: "w-4 h-4" }, null, _parent, _scopeId));
						_push(`<span${_scopeId}>ذخیره تغییرات ماتریس</span></button></div><div class="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-3"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Lock), { class: "w-4 h-4 text-lime-400 shrink-0 mt-0.5" }, null, _parent, _scopeId));
						_push(`<p${_scopeId}> طبق قوانین سیستم، مدیر ارشد (<span class="text-lime-400 font-bold"${_scopeId}>super_admin</span>) به تمامی منوها دسترسی کامل دارد و غیرقابل محدود شدن است. تغییرات بلافاصله و بدون نیاز به ورود مجدد کاربران روی درخواست‌های بعدی آنها اعمال می‌گردد. </p></div><div class="rounded-3xl bg-zinc-900/80 border border-zinc-800 overflow-hidden shadow-2xl"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="w-full text-right text-xs"${_scopeId}><thead class="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]"${_scopeId}><tr${_scopeId}><th class="p-4 font-bold text-white min-w-[200px]"${_scopeId}>منو / بخش پنل</th><th class="p-4 font-bold text-zinc-400"${_scopeId}>پنل مبدأ</th><!--[-->`);
						ssrRenderList(__props.roles, (role) => {
							_push(`<th class="${ssrRenderClass([{ "text-lime-400": role.key === "super_admin" }, "p-4 font-bold text-center min-w-[110px]"])}"${_scopeId}><div class="flex flex-col items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(role.title)}</span><span class="text-[9px] font-mono text-zinc-500 font-normal"${_scopeId}>(${ssrInterpolate(role.key)})</span></div></th>`);
						});
						_push(`<!--]--></tr></thead><tbody class="divide-y divide-zinc-800/60"${_scopeId}><!--[-->`);
						ssrRenderList(__props.menus, (menu) => {
							_push(`<tr class="hover:bg-zinc-800/30 transition-colors"${_scopeId}><td class="p-4"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$2, {
								name: menu.icon,
								class: "w-4 h-4 text-lime-400"
							}, null, _parent, _scopeId));
							_push(`<div${_scopeId}><div class="font-bold text-white"${_scopeId}>${ssrInterpolate(menu.title)}</div><div class="text-[10px] text-zinc-500 font-mono" dir="ltr"${_scopeId}>${ssrInterpolate(menu.route)}</div></div></div></td><td class="p-4 text-zinc-400 text-[11px]"${_scopeId}><span class="px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800"${_scopeId}>${ssrInterpolate(menu.panel_role_key)}</span></td><!--[-->`);
							ssrRenderList(__props.roles, (role) => {
								_push(`<td class="p-4 text-center"${_scopeId}>`);
								if (role.key === "super_admin") {
									_push(`<button disabled type="button" class="w-6 h-6 rounded-lg bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center opacity-80 cursor-not-allowed" title="دسترسی همیشگی مدیر ارشد"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Lock), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
									_push(`</button>`);
								} else {
									_push(`<button type="button" class="${ssrRenderClass([hasPermission(role.id, menu.id, role.key) ? "bg-lime-400 text-black border-lime-400 font-bold" : "bg-zinc-950 border-zinc-800 text-transparent hover:border-zinc-700", "w-6 h-6 rounded-lg mx-auto flex items-center justify-center transition-all cursor-pointer border"])}"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Check), { class: "w-3.5 h-3.5" }, null, _parent, _scopeId));
									_push(`</button>`);
								}
								_push(`</td>`);
							});
							_push(`<!--]--></tr>`);
						});
						_push(`<!--]--></tbody></table></div></div></div>`);
					} else return [createVNode(unref(Head), { title: "ماتریس دسترسی نقش–منو" }), createVNode("div", { class: "space-y-6" }, [
						createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [createVNode("div", null, [createVNode("h1", { class: "text-xl sm:text-2xl font-black text-white flex items-center gap-2" }, [createVNode(unref(ShieldCheck), { class: "w-6 h-6 text-lime-400" }), createVNode("span", null, "ماتریس دسترسی و سطوح دسترسی منوها")]), createVNode("p", { class: "text-xs text-zinc-400 mt-1" }, " تعیین کنید کدام نقش‌ها به کدام صفحات و منوهای پنل دسترسی داشته باشند (منبع پویای سیستم مجوزها). ")]), createVNode("button", {
							onClick: saveMatrix,
							disabled: unref(form).processing,
							class: "px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 shadow-lg shadow-lime-400/20 transition-all cursor-pointer disabled:opacity-50"
						}, [unref(form).processing ? (openBlock(), createBlock(unref(RefreshCw), {
							key: 0,
							class: "w-4 h-4 animate-spin"
						})) : (openBlock(), createBlock(unref(Save), {
							key: 1,
							class: "w-4 h-4"
						})), createVNode("span", null, "ذخیره تغییرات ماتریس")], 8, ["disabled"])]),
						createVNode("div", { class: "p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-3" }, [createVNode(unref(Lock), { class: "w-4 h-4 text-lime-400 shrink-0 mt-0.5" }), createVNode("p", null, [
							createTextVNode(" طبق قوانین سیستم، مدیر ارشد ("),
							createVNode("span", { class: "text-lime-400 font-bold" }, "super_admin"),
							createTextVNode(") به تمامی منوها دسترسی کامل دارد و غیرقابل محدود شدن است. تغییرات بلافاصله و بدون نیاز به ورود مجدد کاربران روی درخواست‌های بعدی آنها اعمال می‌گردد. ")
						])]),
						createVNode("div", { class: "rounded-3xl bg-zinc-900/80 border border-zinc-800 overflow-hidden shadow-2xl" }, [createVNode("div", { class: "overflow-x-auto" }, [createVNode("table", { class: "w-full text-right text-xs" }, [createVNode("thead", { class: "bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 uppercase text-[11px]" }, [createVNode("tr", null, [
							createVNode("th", { class: "p-4 font-bold text-white min-w-[200px]" }, "منو / بخش پنل"),
							createVNode("th", { class: "p-4 font-bold text-zinc-400" }, "پنل مبدأ"),
							(openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
								return openBlock(), createBlock("th", {
									key: role.id,
									class: ["p-4 font-bold text-center min-w-[110px]", { "text-lime-400": role.key === "super_admin" }]
								}, [createVNode("div", { class: "flex flex-col items-center" }, [createVNode("span", null, toDisplayString(role.title), 1), createVNode("span", { class: "text-[9px] font-mono text-zinc-500 font-normal" }, "(" + toDisplayString(role.key) + ")", 1)])], 2);
							}), 128))
						])]), createVNode("tbody", { class: "divide-y divide-zinc-800/60" }, [(openBlock(true), createBlock(Fragment, null, renderList(__props.menus, (menu) => {
							return openBlock(), createBlock("tr", {
								key: menu.id,
								class: "hover:bg-zinc-800/30 transition-colors"
							}, [
								createVNode("td", { class: "p-4" }, [createVNode("div", { class: "flex items-center gap-2.5" }, [createVNode(_sfc_main$2, {
									name: menu.icon,
									class: "w-4 h-4 text-lime-400"
								}, null, 8, ["name"]), createVNode("div", null, [createVNode("div", { class: "font-bold text-white" }, toDisplayString(menu.title), 1), createVNode("div", {
									class: "text-[10px] text-zinc-500 font-mono",
									dir: "ltr"
								}, toDisplayString(menu.route), 1)])])]),
								createVNode("td", { class: "p-4 text-zinc-400 text-[11px]" }, [createVNode("span", { class: "px-2 py-0.5 rounded-md bg-zinc-950 border border-zinc-800" }, toDisplayString(menu.panel_role_key), 1)]),
								(openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
									return openBlock(), createBlock("td", {
										key: role.id,
										class: "p-4 text-center"
									}, [role.key === "super_admin" ? (openBlock(), createBlock("button", {
										key: 0,
										disabled: "",
										type: "button",
										class: "w-6 h-6 rounded-lg bg-lime-400/20 text-lime-400 mx-auto flex items-center justify-center opacity-80 cursor-not-allowed",
										title: "دسترسی همیشگی مدیر ارشد"
									}, [createVNode(unref(Lock), { class: "w-3.5 h-3.5" })])) : (openBlock(), createBlock("button", {
										key: 1,
										onClick: ($event) => togglePermission(role.id, menu.id, role.key),
										type: "button",
										class: ["w-6 h-6 rounded-lg mx-auto flex items-center justify-center transition-all cursor-pointer border", hasPermission(role.id, menu.id, role.key) ? "bg-lime-400 text-black border-lime-400 font-bold" : "bg-zinc-950 border-zinc-800 text-transparent hover:border-zinc-700"]
									}, [createVNode(unref(Check), { class: "w-3.5 h-3.5" })], 10, ["onClick"]))]);
								}), 128))
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Panel/Manager/RoleMatrix.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { _sfc_main as default };
