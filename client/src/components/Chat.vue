<template>
  <div class="chat">
	<div class="chat_header">

	</div>
	<div class="chat_conversation" v-if="messages.length === 0">
		<p>Tijd voor een nieuwe reis en een gezellig gesprek!</p>
	</div>
	<div class="chat_conversation" v-else>
		<ul>
			<ChatMessage v-for="message in messages"
			:key="message.id"
			:user="message.user"
			:message="message.content"
			:date="message.datetime"
			:socket="socket"
			/>
		</ul>
	</div>
	<div class="chat_footer">
		<form action="">
			<input type="text">
			<button>Verstuur</button>
		</form>
	</div>
  </div>
</template>

<script>
import ChatMessage from "@/components/ChatMessage.vue";

export default {
	name: "Chat",
	components: {
		ChatMessage
	},
	props: {
		socket: Object
	},
	data() {
		return {
			messages: []
		};
	},
	mounted() {
		const form = document.querySelector(".chat_footer form");

		form.addEventListener("submit", function (event) {
			event.preventDefault();
		});
		
		this.socket.on("messages", function (data) {
			console.log(data);
		});
	}
};
</script>

<style scoped>

</style>