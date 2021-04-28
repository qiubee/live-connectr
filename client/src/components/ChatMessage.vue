<template>
	<div class="message" :class="{sender: user.sender}">
		<div class="content">
			<p>{{message}}</p>
		</div>
		<div class="info">
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

<style scoped>
.message {
	max-width: 15rem;
	margin-bottom: 1rem;
}

.message .content {
	padding: 0.5rem 0 0.5rem 0.75rem;
	border-radius: 0.75rem;
	background-color: #7593ec;
	color: white;
}
</style>