<template>
	<main class="room">
		<div v-if="joined">
			<Chat :socket="socket" :room="room" :user="user"/>
		</div>
		<form @submit.prevent="joinRoom()" v-else action="">
			<h1>Wat is je naam?</h1>
			<span v-if="empty" class="empty_text_field">Voer eerst je naam in</span>
			<input v-model="name" type="text">
			<button>Ga naar chat</button>
		</form>
	</main>
</template>

<script>
import Chat from "@/components/Chat.vue";
import { get, post } from "@/helpers/fetch.js";
const host = process.env.NODE_ENV === "production" ? 
	location.origin : 
	location.origin.replace("5000", "8000");

export default {
	name: "Room",
	components: {
		Chat
	},
	props: {
		socket: Object
	},
	data() {
		return {
			room: Object,
			user: Object,
			joined: false,
			empty: false,
			name: ""
		};
	},
	async mounted() {
		const journeyId = this.$route.params.id;
		const room = await get(`${host}/api/v1/room`, {
			journeyId: journeyId
		});
		this.room = room;
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
		async joinRoom() {
			const name = this.name;
			const roomId = this.room.id;
			const formButton = document.querySelector(".room form button");

			if (name === "") {
				this.empty = true;
				return;
			} else {
				formButton.setAttribute("disabled", "disabled");
				const response = await post(`${host}/api/v1/user`, {
					name,
					roomId
				});
				if (response.status === 200 || response.status === 201) {
					const user = await get(`${host}/api/v1/user`, {
						name: name
					});
					if (!user) {
						formButton.removeAttribute("disabled");
					} else {
						this.user = user;
						this.joined = true;
					}
				} else if (response.status === 400) {
					formButton.removeAttribute("disabled");
				}
			}
		}
	}
};
</script>

<style>

</style>