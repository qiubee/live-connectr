<template>
	<div class="all_rooms" v-if="rooms.length >= 1">
		<ul>
			<li class="room" v-for="room in rooms" :key="room.id">
				<RoomItem @click="toRoom(room.journey.journeyId)"
					:journey="room.journey"
					:totalMembers="room.users.length"
					:game="room.game"
				/>
			</li>
		</ul>
		<div>
			<p>Zit jouw reis er niet bij?</p>
			<router-link class="button" to="/zoek-reis">Zoek reis</router-link>
		</div>
	</div>
	<div class="no_rooms" v-else>
			<p>Er zijn op dit moment geen personen die reizen.</p>
			<p>Zoek jouw eigen reis en speel mini-games totdat anderen meereizen.</p>
			<router-link class="button" to="/zoek-reis">Zoek reis</router-link>
		</div>
</template>

<script>
import RoomItem from "@/components/RoomItem.vue";


export default {
	name: "RoomList",
	props: {
		socket: Object
	},
	components: {
		RoomItem
	},
	data() {
		return {
			rooms: [],
		};
	},
	created() {
		const vm = this;
		const socket = this.socket;
		socket.emit("all rooms", {init: true});
		
		socket.on("all rooms", function (rooms) {
			vm.rooms = rooms;
		});
	},
	methods: {
		toRoom(id) {
			this.$router.push({name: "Journey", params: {id}});
		}
	}
};
</script>

<style scoped>
.all_rooms .room:hover {
	cursor: pointer;
}

.no_rooms {
	text-align: center;
}

.no_rooms p:first-child {
	font-weight: 500;
	margin-bottom: 2rem;
}

.no_rooms p {
	margin-bottom: 1rem;
}
</style>