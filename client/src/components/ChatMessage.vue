<template>
	<li>
		<div class="message">
			<div>
				<p>{{message}}</p>
			</div>
			<div>
				<span>{{user.name}}</span>
				<span>
					<time v-bind:datetime="datetime">{{timeString}}</time>
				</span>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: "ChatMessage",
	props: {
		user: Object,
		socket: Object,
		message: String,
		datetime: String
	},
	data() {
		return {
			timeString: ""
		};
	},
	mounted() {
	}
};
</script>

<style>

</style>