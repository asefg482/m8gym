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
		"./Pages/Panel/Buffet/Dashboard.vue": () => import("./assets/Dashboard-COoA7T7u.js"),
		"./Pages/Panel/Buffet/Menu.vue": () => import("./assets/Menu-Bxgj0i_7.js"),
		"./Pages/Panel/Buffet/Orders.vue": () => import("./assets/Orders-BMplniM1.js"),
		"./Pages/Panel/Buffet/Pos.vue": () => import("./assets/Pos-DAlfS6Gz.js"),
		"./Pages/Panel/Buffet/Sales.vue": () => import("./assets/Sales-CuSXsfU3.js"),
		"./Pages/Panel/Manager/Banners.vue": () => import("./assets/Banners-DqF9E5mX.js"),
		"./Pages/Panel/Manager/Leads.vue": () => import("./assets/Leads-Cgj-xYxh.js"),
		"./Pages/Panel/Manager/Plans.vue": () => import("./assets/Plans-6BBSevmZ.js"),
		"./Pages/Panel/Manager/RoleMatrix.vue": () => import("./assets/RoleMatrix-BJIQ3wgL.js"),
		"./Pages/Panel/Manager/Settings.vue": () => import("./assets/Settings-CGpHPles.js"),
		"./Pages/Panel/Member/Bookings.vue": () => import("./assets/Bookings-BiCEL7Sb.js"),
		"./Pages/Panel/Member/Dashboard.vue": () => import("./assets/Dashboard-CZLb2_r7.js"),
		"./Pages/Panel/Member/History.vue": () => import("./assets/History-BqTbSO65.js"),
		"./Pages/Panel/Member/Membership.vue": () => import("./assets/Membership-BnqoGI9e.js"),
		"./Pages/Panel/Member/Orders.vue": () => import("./assets/Orders-B90qXaNx.js"),
		"./Pages/Panel/Member/Progress.vue": () => import("./assets/Progress-_6slrIpo.js"),
		"./Pages/Panel/Member/WorkoutPlans.vue": () => import("./assets/WorkoutPlans-Cdx8LmJe.js"),
		"./Pages/Panel/Service/Bookings.vue": () => import("./assets/Bookings-tEP_Wgqe.js"),
		"./Pages/Panel/Service/Dashboard.vue": () => import("./assets/Dashboard-CkXsQhz7.js"),
		"./Pages/Panel/Service/Schedule.vue": () => import("./assets/Schedule-fal-6wDd.js"),
		"./Pages/Panel/Service/Services.vue": () => import("./assets/Services-CQX3UlS2.js"),
		"./Pages/Panel/Shop/Categories.vue": () => import("./assets/Categories-CjuMQM08.js"),
		"./Pages/Panel/Shop/Dashboard.vue": () => import("./assets/Dashboard-BsZq0FGo.js"),
		"./Pages/Panel/Shop/Orders.vue": () => import("./assets/Orders-DLaLiMJ3.js"),
		"./Pages/Panel/Shop/Pos.vue": () => import("./assets/Pos-CvXeFQvO.js"),
		"./Pages/Panel/Shop/Products.vue": () => import("./assets/Products-UQsSaHCS.js"),
		"./Pages/Panel/SuperAdmin/Attendances.vue": () => import("./assets/Attendances-Dz16uMW5.js"),
		"./Pages/Panel/SuperAdmin/Audit.vue": () => import("./assets/Audit-CHaD0HL0.js"),
		"./Pages/Panel/SuperAdmin/Dashboard.vue": () => import("./assets/Dashboard-p6qXujWo.js"),
		"./Pages/Panel/SuperAdmin/Reports.vue": () => import("./assets/Reports-DhTTHnAs.js"),
		"./Pages/Panel/SuperAdmin/Settings.vue": () => import("./assets/Settings-DlubPHUY.js"),
		"./Pages/Panel/SuperAdmin/UserDetail.vue": () => import("./assets/UserDetail-C8kbd95m.js"),
		"./Pages/Panel/SuperAdmin/Users.vue": () => import("./assets/Users-7kWEXIOs.js"),
		"./Pages/Panel/Trainer/Dashboard.vue": () => import("./assets/Dashboard-OLh2Mqdr.js"),
		"./Pages/Panel/Trainer/Incomes.vue": () => import("./assets/Incomes-D_aRxumR.js"),
		"./Pages/Panel/Trainer/Profile.vue": () => import("./assets/Profile-B27ru6u-.js"),
		"./Pages/Panel/Trainer/Students.vue": () => import("./assets/Students-CQPaQPLn.js"),
		"./Pages/Panel/Trainer/WorkoutPlans.vue": () => import("./assets/WorkoutPlans-ChTMHcGV.js"),
		"./Pages/Public/Cafe.vue": () => import("./assets/Cafe-Cp0sacPT.js"),
		"./Pages/Public/Hairdresser.vue": () => import("./assets/Hairdresser-BpUDU9WQ.js"),
		"./Pages/Public/Home.vue": () => import("./assets/Home-D8yA5zJx.js"),
		"./Pages/Public/Massage.vue": () => import("./assets/Massage-B7EGT_SX.js"),
		"./Pages/Public/ProductDetail.vue": () => import("./assets/ProductDetail-DlqJ_zP8.js"),
		"./Pages/Public/Shop.vue": () => import("./assets/Shop-BToCMcSS.js")
	})),
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin);
	}
}));
//#endregion
export {};
