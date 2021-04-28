<template>
	<div class="home">
		<RoomList :socket="socket"/>
	</div>
</template>

<script>
import RoomList from "@/components/RoomList.vue";

export default {
	name: "Home",
	props: {
		socket: Object
	},
	components: {
		RoomList,
	}
};
</script>