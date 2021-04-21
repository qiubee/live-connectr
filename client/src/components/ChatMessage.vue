<template>
	<div class="message" :class="{sender: user.sender}">
		<p>{{message}}</p>
		<div>
			<span v-if="!user.sender">{{user.name}}</span>
			<span>
				<time v-bind:datetime="datetime">{{timeString}}</time>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "ChatMessage",
	props: {
		user: Object,
		message: String,
		datetime: String
	},
	data() {
		return {
			timeString: String
		};
	},
	mounted() {
		const datetime = this.datetime;
		const hours = new Date(datetime).getHours();
		const minutes = new Date(datetime).getMinutes();
		const fullHours = hours === 0 ? 24 : hours < 10 ? "0" + hours : hours;
		const fullMinutes = minutes < 10 ? "0" + minutes : minutes;
		this.timeString = `${fullHours}:${fullMinutes}`;
	}
};
</script>

<style>

</style>