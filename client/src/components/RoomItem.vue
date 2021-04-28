<template>
	<div class="active_room">
		<div class="train">
			<img :src="trainImage" :alt="trainImageAlt">
			<span class="journey_number">{{journey.journeyId}}</span>
		</div>
		<div class="journey">
			<div>
				<span class="operator" :class="journey.operator.toLowerCase()"></span>
				<span class="type" v-if="altTypeName">{{altTypeName}}</span>
				<span class="type" v-else>{{journey.type.name}}</span>
			</div>
			<span class="destination">{{journey.destination}}</span>
			<div class="delay_display delayed" v-if="delayInMinutes >= 1">+{{delayInMinutes}} min.</div>
			<div class="delay_display on_time" v-else>Op tijd</div>
		</div>
		<div class="room_info">
			<div class="users">
				<span v-if="totalMembers === 1">{{totalMembers}} reiziger</span>
				<span v-else>{{totalMembers}} reizigers</span>
			</div>
			<div class="chat" v-if="!game.active">
				<svg viewBox="2 2 16 16" class="chat_icon" focusable="false"><g class="icons-default-fill"><path class="icons-unfilled" d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C8.72679 18 7.49591 17.7018 6.38669 17.1393L6.266 17.075L2.62109 17.9851C2.31127 18.0625 2.02622 17.8369 2.00131 17.5438L2.00114 17.4624L2.01493 17.3787L2.925 13.735L2.86169 13.6153C2.4066 12.7186 2.12433 11.7422 2.03275 10.7283L2.00738 10.3463L2 10C2 5.58172 5.58172 2 10 2ZM10 3C6.13401 3 3 6.13401 3 10C3 11.217 3.31054 12.3878 3.89352 13.4249C3.94046 13.5084 3.9621 13.603 3.95692 13.6973L3.94274 13.7912L3.187 16.812L6.21104 16.0583C6.27294 16.0429 6.33662 16.0396 6.39873 16.0479L6.4903 16.0691L6.57701 16.1075C7.61362 16.6898 8.7837 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3ZM10.5 11C10.7761 11 11 11.2239 11 11.5C11 11.7455 10.8231 11.9496 10.5899 11.9919L10.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2545 7.17688 11.0504 7.41012 11.0081L7.5 11H10.5ZM12.5 8C12.7761 8 13 8.22386 13 8.5C13 8.74546 12.8231 8.94961 12.5899 8.99194L12.5 9H7.5C7.22386 9 7 8.77614 7 8.5C7 8.25454 7.17688 8.05039 7.41012 8.00806L7.5 8H12.5Z"></path><path class="icons-filled" d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C8.72679 18 7.49591 17.7018 6.38669 17.1393L6.266 17.075L2.62109 17.9851C2.31127 18.0625 2.02622 17.8369 2.00131 17.5438L2.00114 17.4624L2.01493 17.3787L2.925 13.735L2.86169 13.6153C2.4066 12.7186 2.12433 11.7422 2.03275 10.7283L2.00738 10.3463L2 10C2 5.58172 5.58172 2 10 2ZM10.5 11H7.5L7.41012 11.0081C7.17688 11.0504 7 11.2545 7 11.5C7 11.7455 7.17688 11.9496 7.41012 11.9919L7.5 12H10.5L10.5899 11.9919C10.8231 11.9496 11 11.7455 11 11.5C11 11.2545 10.8231 11.0504 10.5899 11.0081L10.5 11ZM12.5 8H7.5L7.41012 8.00806C7.17688 8.05039 7 8.25454 7 8.5C7 8.74546 7.17688 8.94961 7.41012 8.99194L7.5 9H12.5L12.5899 8.99194C12.8231 8.94961 13 8.74546 13 8.5C13 8.25454 12.8231 8.05039 12.5899 8.00806L12.5 8Z"></path></g></svg>
				<span>Chat</span>
			</div>
			<div class="game" v-else>
				<span>{{game.type}}</span>
			</div>
		</div>
		<div class="stops">
			via:
			<ol>
				<li v-for="stop in stops" :key="stop.id">
					{{stop}}
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
export default {
	name: "RoomItem",
	props: {
		journey: Object,
		totalMembers: Number,
		game: Object
	},
	data() {
		return {
			trainimage: String,
			stops: [],
			delayInMinutes: Number,
			altTypeName: ""
		};
	},
	created() {
		const journey = this.journey;
		const type = journey.type.name;
		const train = journey.train;
		const delayInSeconds = journey.delayInSeconds;
		const firstTrain = train.parts[0];
		const firstCarImage = firstTrain.carsImages[firstTrain.carsImages.length - 1];
		
		if (journey.stops.length > 3) {
			const stops = journey.stops.filter(function (stop, index) {
				return index % 2 === 1;
			});
			const lastIndex = stops.length - 1;
			const mainStops = [stops[0], stops[Math.floor(lastIndex / 2)], stops[lastIndex]];
			this.stops = mainStops;
		}

		if (delayInSeconds >= 60) {
			this.delayInMinutes = Math.floor(delayInSeconds % 3600 / 60);
		}

		if (type === "ICD") {
			this.altTypeName = "IC Direct";
		}

		this.trainImageAlt = `Voorkant ${journey.type.fullName} trein`;
		this.trainImage = firstCarImage;
	}
};
</script>

<style scoped>
.ns {
	display: block;
	background-size: contain;
	width: 1.9em;
	height: 1.2em;
	background-image: url("https://www.ns.nl/static/generic/2.83.0/images/nslogo.svg");
	background-repeat: no-repeat;
	background-position: 50% center;
}

.type {
	text-transform: capitalize;
	font-style: italic;
	font-weight: 600;
	display: block;
	color: #77778b;
	margin-right: 0.5rem;
}

.destination {
	font-weight: 500;
	font-size: 1.2rem;
}

.delay_display {
	display: inline-block;
	font-weight: 500;
	color: white;
	padding: 0.4rem 0.5rem;
	border-radius: 0.25rem;
}

.delayed {
	background-color: #eb3c62;
}

.on_time {
	background-color: #4fc255;
}

.chat .chat_icon {
	height: 1.1rem;
}

.chat .chat_icon .icons-filled {
	display: none;
}

.chat .chat_icon .icons-unfilled {
	fill: #484644;
}
</style>