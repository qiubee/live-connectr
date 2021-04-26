<template>
	<div class="journey_info">
		<div class="category">
			<span class="type" v-if="altTypeName">{{altTypeName}}</span>
			<span class="type" v-else>{{type.name}}</span>
			<span class="operator" :class="operator.toLowerCase()"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: "GeneralJourneyInfo",
	props: {
		destination: String,
		nextStop: String,
		delayedInSeconds: Number,
		operator: String,
		type: Object,
		currentPlace: String
	}
};
</script>

<style scoped>

</style>