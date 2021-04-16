<template>
  <Chat :socket="socket"/>
</template>

<script>
import Chat from "@/components/Chat.vue";
import io from "socket.io-client";

export default {
	name: "Room",
	components: {
		Chat
	},
	data() {
		return {
			socket: Object
		};
	},
	created() {
		// const host = location.origin.replace(/^http/, "ws");
		const socket = io("http://localhost:8000");

		socket.on("connect", function () {
			console.log("connected");
		});

		socket.on("disconnect", function () {
			console.log("disconnected");
		});

		this.socket = socket;
	}
};
</script>

<style>

</style>