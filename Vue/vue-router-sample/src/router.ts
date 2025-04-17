import { createRouter, createWebHistory } from "vue-router";

export const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/components/Home.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/components/Login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("@/components/Register.vue"),
	},
	{
		path: "/clubs",
		name: "Clubs",
		component: () => import("@/components/Clubs.vue"),
	},
	{
		path: "/clubs/:clubId",
		component: () => import("@/components/ClubOverview.vue"),
		props: true,
		children: [
			{
				path: "",
				name: "ClubOverview",
				component: () => import("@/components/ClubOverviewMain.vue"),
			},
			{
				path: "/books",
				name: "Books",
				component: () => import("@/components/Books.vue"),
			},
			{
				path: "books/:bookId",
				name: "BookOverview",
				component: () => import("@/components/BookOverview.vue"),
				props: true,
			},
		],
	},
	{
		path: "/settings",
		name: "Settings",
		component: () => import("@/components/Settings.vue"),
	},
	{
		path: "/profile",
		name: "Profile",
		component: () => import("@/components/Profile.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/components/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
