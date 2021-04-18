import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	}, {
		path: "/over-zugo",
		name: "Over",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "over" */ "../views/Over.vue")
	}, {
		path: "/reis/:id",
		name: "Journey",
		component: () => import(/* webpackChunkName: "journey" */ "../views/Journey.vue")
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;