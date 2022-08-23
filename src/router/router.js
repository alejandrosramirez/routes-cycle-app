import { createRouter, createWebHashHistory } from "vue-router";

import isAuthGuard from "./isAuthGuard";

const routes = [
	{
		path: "/",
		redirect: "/pokemon",
	},
	{
		path: "/dbz",
		name: "dbz",
		beforeEnter: [isAuthGuard],
		component: () =>
			import(
				/* webpackChunkName: "DBZLayout" */ "@/modules/dbz/layouts/DBZLayout.vue"
			),
		children: [
			{
				path: "characters",
				name: "dbz-characters",
				component: () =>
					import(
						/* webpackChunkName: "CharactersPage" */ "@/modules/dbz/pages/CharactersPage.vue"
					),
			},
			{
				path: "about",
				name: "dbz-about",
				component: () =>
					import(
						/* webpackChunkName: "AboutPage" */ "@/modules/dbz/pages/AboutPage.vue"
					),
			},
			{
				path: "",
				redirect: {
					name: "dbz-characters",
				},
			},
		],
	},
	{
		path: "/pokemon",
		name: "pokemon",
		component: () =>
			import(
				/* webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout.vue"
			),
		children: [
			{
				path: "home",
				name: "pokemon-home",
				component: () =>
					import(
						/* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage.vue"
					),
			},
			{
				path: "about",
				name: "pokemon-about",
				component: () =>
					import(
						/* webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage.vue"
					),
			},
			{
				path: ":id",
				name: "pokemon-id",
				component: () =>
					import(
						/* webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage.vue"
					),
				props: (route) => {
					const id = Number(route.params?.id);

					return isNaN(id) ? { id: 1 } : { id };
				},
			},
			{
				path: "",
				redirect: {
					name: "pokemon-home",
				},
			},
		],
	},
	{
		path: "/:pathMatch(.*)*",
		component: () =>
			import(
				/* webpackChunkName: "NotFoundPage" */ "@/modules/shared/pages/NotFoundPage.vue"
			),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

// SyncGuard
/* router.beforeEach((to, from, next) => {
	const rand = Math.random() * 100;

	if (rand > 50) {
		next();
	} else {
		next({
			name: "pokemon",
		});
	}
}); */

// AsyncGuard
/* const canAccess = () => {
	return new Promise((resolve) => {
		const rand = Math.random() * 100;

		if (rand > 50) {
			resolve(true);
		} else {
			resolve(false);
		}
	});
};

router.beforeEach(async (to, from, next) => {
	const authorized = await canAccess();

	authorized
		? next()
		: next({
				name: "pokemon",
		  });
}); */

export default router;
