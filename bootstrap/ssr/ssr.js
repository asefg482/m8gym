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
		"./Pages/Panel/Buffet/Dashboard.vue": () => import("./assets/Dashboard-5o7NDzXD.js"),
		"./Pages/Panel/Buffet/Menu.vue": () => import("./assets/Menu-BcwnnhZq.js"),
		"./Pages/Panel/Buffet/Orders.vue": () => import("./assets/Orders-20tl98lp.js"),
		"./Pages/Panel/Buffet/Pos.vue": () => import("./assets/Pos-DR3Hpfmv.js"),
		"./Pages/Panel/Buffet/Sales.vue": () => import("./assets/Sales-D1dyBo0_.js"),
		"./Pages/Panel/Manager/Banners.vue": () => import("./assets/Banners-9JfJEWJd.js"),
		"./Pages/Panel/Manager/Leads.vue": () => import("./assets/Leads-DRLRX_CL.js"),
		"./Pages/Panel/Manager/Plans.vue": () => import("./assets/Plans-BxT4sLm2.js"),
		"./Pages/Panel/Manager/RoleMatrix.vue": () => import("./assets/RoleMatrix-BYPHH5_P.js"),
		"./Pages/Panel/Manager/Settings.vue": () => import("./assets/Settings-BC-_J1uM.js"),
		"./Pages/Panel/Member/Bookings.vue": () => import("./assets/Bookings-BzaWP6tl.js"),
		"./Pages/Panel/Member/Dashboard.vue": () => import("./assets/Dashboard-DwsrN_IJ.js"),
		"./Pages/Panel/Member/History.vue": () => import("./assets/History-DFBbQK7F.js"),
		"./Pages/Panel/Member/Membership.vue": () => import("./assets/Membership-QrraF3OU.js"),
		"./Pages/Panel/Member/Orders.vue": () => import("./assets/Orders-E4sFXpkR.js"),
		"./Pages/Panel/Member/Progress.vue": () => import("./assets/Progress-D_n1kV8e.js"),
		"./Pages/Panel/Member/WorkoutPlans.vue": () => import("./assets/WorkoutPlans-CCsnBytd.js"),
		"./Pages/Panel/Service/Bookings.vue": () => import("./assets/Bookings-cQkvMS9X.js"),
		"./Pages/Panel/Service/Dashboard.vue": () => import("./assets/Dashboard-Dx-dgdqI.js"),
		"./Pages/Panel/Service/Schedule.vue": () => import("./assets/Schedule-BE5WeTyZ.js"),
		"./Pages/Panel/Service/Services.vue": () => import("./assets/Services-zIGjyp5t.js"),
		"./Pages/Panel/Shop/Categories.vue": () => import("./assets/Categories-CkrZ2bhF.js"),
		"./Pages/Panel/Shop/Dashboard.vue": () => import("./assets/Dashboard-BgfN_NdO.js"),
		"./Pages/Panel/Shop/Orders.vue": () => import("./assets/Orders-Bjo95I6L.js"),
		"./Pages/Panel/Shop/Pos.vue": () => import("./assets/Pos-B5hjyhQf.js"),
		"./Pages/Panel/Shop/Products.vue": () => import("./assets/Products-CuT6fm2C.js"),
		"./Pages/Panel/SuperAdmin/Attendances.vue": () => import("./assets/Attendances-o23Xj_k2.js"),
		"./Pages/Panel/SuperAdmin/Audit.vue": () => import("./assets/Audit-D78bZOgC.js"),
		"./Pages/Panel/SuperAdmin/Dashboard.vue": () => import("./assets/Dashboard-DR12QRts.js"),
		"./Pages/Panel/SuperAdmin/Reports.vue": () => import("./assets/Reports-DQyxn2uE.js"),
		"./Pages/Panel/SuperAdmin/Settings.vue": () => import("./assets/Settings-wZO0o2Dm.js"),
		"./Pages/Panel/SuperAdmin/UserDetail.vue": () => import("./assets/UserDetail-C0sm5KAr.js"),
		"./Pages/Panel/SuperAdmin/Users.vue": () => import("./assets/Users-CewPxyeU.js"),
		"./Pages/Panel/Trainer/Dashboard.vue": () => import("./assets/Dashboard-DsaGTjfV.js"),
		"./Pages/Panel/Trainer/Incomes.vue": () => import("./assets/Incomes-B6tT-_UB.js"),
		"./Pages/Panel/Trainer/Profile.vue": () => import("./assets/Profile-D2K-JoSc.js"),
		"./Pages/Panel/Trainer/Students.vue": () => import("./assets/Students-Hz7PT1Pf.js"),
		"./Pages/Panel/Trainer/WorkoutPlans.vue": () => import("./assets/WorkoutPlans-BgSAL0P8.js"),
		"./Pages/Public/Cafe.vue": () => import("./assets/Cafe-_abdkIio.js"),
		"./Pages/Public/Hairdresser.vue": () => import("./assets/Hairdresser-CEs_peJX.js"),
		"./Pages/Public/Home.vue": () => import("./assets/Home-BCis0gdY.js"),
		"./Pages/Public/Massage.vue": () => import("./assets/Massage-D65t7UbL.js"),
		"./Pages/Public/ProductDetail.vue": () => import("./assets/ProductDetail-DYslJ7aK.js"),
		"./Pages/Public/Shop.vue": () => import("./assets/Shop-BYidZ_VX.js")
	})),
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin);
	}
}));
//#endregion
export {};
