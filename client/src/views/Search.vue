<template>
	<div class="search">
	<SearchJourney :socket="socket"/>
	</div>
</template>

<script>
import SearchJourney from "@/components/SearchJourney.vue";

export default {
	name: "Search",
	components: {
		SearchJourney
	},
	props: {
		socket: Object
	}
};
</script>