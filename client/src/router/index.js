import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import io from "socket.io-client";

const host = process.env.NODE_ENV === "production" ? 
	location.origin.replace(/^http/, "ws") : 
	location.origin.replace("5000", "8000");
const socket = io(host);

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
		path: "/zoek-reis",
		name: "Search",
		component: () => import(/* webpackChunkName: "search" */ "@/views/Search.vue"),
		props: {
			socket: socket
		}
	}, {
		path: "/reis/:id",
		name: "Journey",
		component: () => import(/* webpackChunkName: "journey" */ "@/views/Journey.vue"),
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