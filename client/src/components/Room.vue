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

export default {
	name: "Room",
	components: {
		Chat
	},
	props: {
		room: Object,
		socket: Object
	},
	data() {
		return {
			joined: false,
			empty: false
		};
	},
	watch: {
		joined: function (newValue) {
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