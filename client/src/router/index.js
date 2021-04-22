import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import io from "socket.io-client";

// const host = location.origin.replace(/^http/, "ws");
const socket = io("http://localhost:8000");

socket.on("connect", function () {
	console.log("connected");
});

socket.on("disconnect", function () {
	console.log("disconnected");
});

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		props: {
			socket: socket
		}
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
		component: () => import(/* webpackChunkName: "journey" */ "../views/Journey.vue"),
		props: {
			socket: socket
		}
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;