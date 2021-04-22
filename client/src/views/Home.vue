<template>
	<div class="home">
		<RoomList :socket="socket"/>
		<SearchJourney :socket="socket"/>
	</div>
</template>

<script>
import SearchJourney from "@/components/SearchJourney.vue";
import RoomList from "@/components/RoomList.vue";

export default {
	name: "Home",
	props: {
		socket: Object
	},
	components: {
		RoomList,
		SearchJourney
	}
};
</script>