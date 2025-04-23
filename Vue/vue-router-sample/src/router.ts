import { createRouter, createWebHistory } from "vue-router";

export const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/components/Home.vue"),
	},
	{
		path: "/clubs",
		name: "Clubs",
		component: () => import("@/components/Clubs.vue"),
	},
	{
		path: "/clubs/:clubId",
		component: () => import("@/components/ClubOverview.vue"),
		children: [
			{
				path: "/clubs/:clubId",
				name: "ClubOverview",
				component: () => import("@/components/ClubOverviewMain.vue"),
			},
			{
				path: "/clubs/:clubId/books",
				name: "Books",
				component: () => import("@/components/Books.vue"),
			},
			{
				path: "/clubs/:clubId/books/:bookId",
				component: () => import("@/components/BookOverview.vue"),
				children: [
					{
						path: "/clubs/:clubId/books/:bookId",
						name: "BookOverview",
						component: () => import("@/components/BookOverviewMain.vue"),
						props: true,
					},
				],
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
