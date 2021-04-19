<template>
	<main class="room">
		<div v-if="joined">
			<Chat :socket="socket"/>
		</div>
		<form v-else action="">
			<h1>Wat is je naam?</h1>
			<span v-if="empty" class="empty_text_field">Voer eerst je naam in</span>
			<input type="text">
			<button @click="joinRoom()">Ga naar chat</button>
		</form>
	</main>
</template>

<script>
import Chat from "@/components/Chat.vue";
import io from "socket.io-client";

export default {
	name: "Room",
	components: {
		Chat
	},
	props: {
		room: Object
	},
	data() {
		return {
			socket: Object,
			joined: false,
			empty: false
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
	},
	watch: {
		joined: function (newValue, oldValue) {
			if (newValue === true) {
				const socket = this.socket;
				const room = this.room;
				socket.emit("messages", room.id);
			}
		}
	},
	methods: {
		joinRoom() {
			const vm = this;
			const form = document.querySelector(".room > form");
			const input = document.querySelector(".room > form input");

			form.addEventListener("submit", function (event) {
				event.preventDefault();
				if (input.value === "") {
					vm.empty = true;
					return;
				}
				// TODO: add user to room & save in LocalStorage
				vm.joined = true;
			});
		}
	}
};
</script>

<style>

</style>