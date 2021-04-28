<template>
	<div class="journey_room">
		<Room :socket="socket"/>
	</div>
</template>

<script>
import Room from "@/components/Room.vue";


export default {
	name: "Journey",
	components: {
		Room
	},
	props: {
		socket: Object
	}
};
</script>