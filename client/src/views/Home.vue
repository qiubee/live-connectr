<template>
	<div class="home">
		<SearchJourney/>
		<Room/>
		
	</div>
</template>

<script>
import Room from "@/components/Room.vue";
import SearchJourney from "@/components/SearchJourney.vue";


export default {
	name: "Home",
	components: {
		Room,
		SearchJourney
	}
};
</script>