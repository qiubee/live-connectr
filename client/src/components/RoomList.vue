<template>
	<div class="current_rooms" v-if="!noRooms">
		<ul>
			<li v-for="room in rooms" :key="room.id">
				<div class="active_room">
					{{room}}
				</div>
			</li>
		</ul>
		<div>
			<p>Zit jouw reis er niet bij?</p>
			<button>Zoek reis</button>
		</div>
	</div>
	<div class="no_rooms" v-else>
			<p>Er zijn op dit moment geen personen die reizen. Zoek jouw eigen reis en speel mini-games totdat anderen meereizen.</p>
			<button>Zoek reis</button>
		</div>
</template>

<script>
export default {
	name: "RoomList",
	props: {
		socket: Object
	},
	data() {
		return {
			rooms: Array,
			noRooms: true
		};
	},
	created() {
		const socket = this.socket;
		socket.emit("all rooms", {init: true});
		
		socket.on("all rooms", function (rooms) {
			if (rooms) {
				if (rooms.length > 0) {
					this.noRooms = false;
				} else {
					this.noRooms = true;
				}
				this.rooms = rooms;
			}
		});
	}
};
</script>

<style>

</style>