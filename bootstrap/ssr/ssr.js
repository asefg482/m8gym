import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/ssr.js
createServer((page) => createInertiaApp({
	page,
	render: renderToString,
	title: (title) => title ? `${title} - M8 Gym` : "M8 Gym - مجموعه ورزشی و تندرستی ساری",
	resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* #__PURE__ */ Object.assign({
		"./Pages/Auth/Login.vue": () => import("./assets/Login-BTlBKqWf.js"),
		"./Pages/Auth/SelectRole.vue": () => import("./assets/SelectRole-COAZh-ed.js"),
		"./Pages/Panel/Buffet/Dashboard.vue": () => import("./assets/Dashboard-w9NQ4Aa-.js"),
		"./Pages/Panel/Buffet/Menu.vue": () => import("./assets/Menu-CiOvgNur.js"),
		"./Pages/Panel/Buffet/Orders.vue": () => import("./assets/Orders-CxKN01V4.js"),
		"./Pages/Panel/Buffet/Pos.vue": () => import("./assets/Pos-C7sef3kt.js"),
		"./Pages/Panel/Buffet/Sales.vue": () => import("./assets/Sales-DAZB1TEm.js"),
		"./Pages/Panel/Manager/Banners.vue": () => import("./assets/Banners-XKa1v0hP.js"),
		"./Pages/Panel/Manager/Leads.vue": () => import("./assets/Leads-C1Du3Hqy.js"),
		"./Pages/Panel/Manager/Plans.vue": () => import("./assets/Plans-w2Sj1h-g.js"),
		"./Pages/Panel/Manager/RoleMatrix.vue": () => import("./assets/RoleMatrix-B7x6CsiQ.js"),
		"./Pages/Panel/Manager/Settings.vue": () => import("./assets/Settings-BsmbVhu4.js"),
		"./Pages/Panel/Member/Bookings.vue": () => import("./assets/Bookings-DZ5ce6ao.js"),
		"./Pages/Panel/Member/Dashboard.vue": () => import("./assets/Dashboard-Btov5cF4.js"),
		"./Pages/Panel/Member/History.vue": () => import("./assets/History-DeuC2X76.js"),
		"./Pages/Panel/Member/Membership.vue": () => import("./assets/Membership-CoBklutH.js"),
		"./Pages/Panel/Member/Orders.vue": () => import("./assets/Orders-CACxyqrR.js"),
		"./Pages/Panel/Member/Progress.vue": () => import("./assets/Progress-Bfu0zI6h.js"),
		"./Pages/Panel/Member/WorkoutPlans.vue": () => import("./assets/WorkoutPlans-D_rMKTFn.js"),
		"./Pages/Panel/Service/Bookings.vue": () => import("./assets/Bookings-CcT1ERq8.js"),
		"./Pages/Panel/Service/Dashboard.vue": () => import("./assets/Dashboard-BCs-iVyy.js"),
		"./Pages/Panel/Service/Schedule.vue": () => import("./assets/Schedule--AhTFzYu.js"),
		"./Pages/Panel/Service/Services.vue": () => import("./assets/Services-_YVFbLF4.js"),
		"./Pages/Panel/Shop/Categories.vue": () => import("./assets/Categories-C5uLbkCI.js"),
		"./Pages/Panel/Shop/Dashboard.vue": () => import("./assets/Dashboard-By9ew2Ct.js"),
		"./Pages/Panel/Shop/Orders.vue": () => import("./assets/Orders-0Qo3yPmm.js"),
		"./Pages/Panel/Shop/Pos.vue": () => import("./assets/Pos-B_rZjviM.js"),
		"./Pages/Panel/Shop/Products.vue": () => import("./assets/Products-CI4N9N5w.js"),
		"./Pages/Panel/SuperAdmin/Attendances.vue": () => import("./assets/Attendances-d88ER_hw.js"),
		"./Pages/Panel/SuperAdmin/Audit.vue": () => import("./assets/Audit-DqBoIdh9.js"),
		"./Pages/Panel/SuperAdmin/Dashboard.vue": () => import("./assets/Dashboard-BEZwULdP.js"),
		"./Pages/Panel/SuperAdmin/Reports.vue": () => import("./assets/Reports-BN1ZiQ-h.js"),
		"./Pages/Panel/SuperAdmin/Settings.vue": () => import("./assets/Settings-CFPMLClB.js"),
		"./Pages/Panel/SuperAdmin/UserDetail.vue": () => import("./assets/UserDetail-CtLg1iyE.js"),
		"./Pages/Panel/SuperAdmin/Users.vue": () => import("./assets/Users-4PCmJZP7.js"),
		"./Pages/Panel/Trainer/Dashboard.vue": () => import("./assets/Dashboard-D9QH6l7L.js"),
		"./Pages/Panel/Trainer/Incomes.vue": () => import("./assets/Incomes-DTRAxXgA.js"),
		"./Pages/Panel/Trainer/Profile.vue": () => import("./assets/Profile-DfSfb2c9.js"),
		"./Pages/Panel/Trainer/Students.vue": () => import("./assets/Students-CXVf7Ea5.js"),
		"./Pages/Panel/Trainer/WorkoutPlans.vue": () => import("./assets/WorkoutPlans-Cnt28hGP.js"),
		"./Pages/Public/Cafe.vue": () => import("./assets/Cafe-68dxk5rl.js"),
		"./Pages/Public/Hairdresser.vue": () => import("./assets/Hairdresser-CGkWOKns.js"),
		"./Pages/Public/Home.vue": () => import("./assets/Home-BOQoxK44.js"),
		"./Pages/Public/Massage.vue": () => import("./assets/Massage-DwGTWWVu.js"),
		"./Pages/Public/ProductDetail.vue": () => import("./assets/ProductDetail-Bae-Bhct.js"),
		"./Pages/Public/Shop.vue": () => import("./assets/Shop-CNe4L0Lg.js")
	})),
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin);
	}
}));
//#endregion
export {};
