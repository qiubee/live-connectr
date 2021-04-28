<template>
	<SearchJourney :socket="socket"/>
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

<style>

</style>