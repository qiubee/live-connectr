<template>
	<Room :socket="socket"/>
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