<template>
	<div class="room">
		<div v-if="joined">
			<!-- <GeneralJourneyInfo v-if="journeyInformationAvailable"
			destination: String,
			nextStop: String,
			delayedInSeconds: Number,
			operator: String,
			type: Object,
			currentPlace: String
			/> -->
			<Chat :socket="socket" :room="room" :user="user"/>
		</div>
		<form @submit.prevent="joinRoom()" v-else action="">
			<h1>Wat is je naam?</h1>
			<span v-if="empty" class="empty_text_field">Voer eerst je naam in</span>
			<input v-model="name" type="text">
			<button>Ga naar chat</button>
		</form>
	</div>
</template>

<script>
import Chat from "@/components/Chat.vue";
import GeneralJourneyInfo from "@/components/GeneralJourneyInfo.vue";
import { get, post } from "@/helpers/fetch.js";
import { checkInSessionStorage, getFromSessionStorage, addToSessionStorage } from "@/helpers/storage.js";
const host = process.env.NODE_ENV === "production" ? 
	location.origin : 
	location.origin.replace("5000", "8000");

export default {
	name: "Room",
	components: {
		Chat,
		GeneralJourneyInfo
	},
	props: {
		socket: Object
	},
	data() {
		return {
			room: Object,
			journey: Object,
			user: Object,
			joined: false,
			empty: false,
			journeyInformationAvailable: false,
			name: ""
		};
	},
	async mounted() {
		const journeyId = Number(this.$route.params.id);
		const journey = await get(`${host}/api/v1/journey`, {
			journeyId
		});
		const room = await get(`${host}/api/v1/room`, {
			journeyId
		});
		if (room.status === 200) {
			const userInStorage = checkInSessionStorage("user");
			if (userInStorage) {
				const user = getFromSessionStorage("user");
				this.user = user;
				this.joined = true;
			}
			this.room = room.data;
		}
		if (journey.status === 200) {
			this.journey = journey.data;
			this.journeyInformationAvailable = true;
		}
	},
	watch: {
		joined: function (newValue) {
			if (newValue === true) {
				const socket = this.socket;
				const room = this.room;
				socket.emit("messages", room);
			}
		}
	},
	methods: {
		async joinRoom() {
			const vm = this;
			const name = this.name;
			const room = this.room;
			const socket = this.socket;
			const formButton = document.querySelector(".room form button");
			if (name === "") {
				this.empty = true;
				return;
			} else {
				formButton.setAttribute("disabled", "disabled");
				const postResponse = await post(`${host}/api/v1/user`, {
					name: name,
					roomId: room.id
				});
				if (postResponse.status === 200 || postResponse.status === 201) {
					const user = await get(`${host}/api/v1/user`, {
						name: name
					});
					if (user.status === 200) {
						addToSessionStorage("user", user.data);
						socket.emit("join room", { user: user.data, room });
						socket.on("join room", function (room) {
							if (room.joined === true) {
								vm.user = user.data;
								vm.joined = true;
							}
						});
					} else if (user.status === 404) {
						formButton.removeAttribute("disabled");
					}
				} else if (postResponse.status === 400) {
					formButton.removeAttribute("disabled");
				}
			}
		}
	}
};
</script>

<style>

</style>