<template>
	<div class="journey">
		<div>
			<span class="destination">{{destination}}</span>
			<div>
				<div class="category">
					<span class="type">{{type.name}}</span>
					<span class="operator" :class="operator.toLowerCase()"></span>
				</div>
				<span class="departuretime">{{departureTime}}</span>
			</div>
		</div>
		<div class="stops">
			<span>Via: </span>
			<ul v-if="mainStops">
				<li v-for="stop in mainStops" :key="stop.uicCode">
					{{stop.name}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { getTime } from "@/helpers/time.js";
export default {
	name: "Journey",
	props: {
		id: Number,
		operator: String,
		destination: String,
		departure: String,
		stops: Array,
		type: Object
	},
	data() {
		return {
			mainStops: Array,
			departureTime: String
		};
	},
	created() {
		const allStops = this.stops;
		const departure = this.departure;
		const journeyType = this.type.name;

		if (journeyType === "IC") {
			if (allStops.length > 2) {
				const mainStops = allStops.filter(function (stop, index) {
					return (index + 1) % 2 === 0;
				});
				console.log(mainStops);
				if (mainStops.length > 5) {
					this.mainStops = mainStops.filter(function (stop, index) {
						return (index + 1) % 2 === 0;
					});
				} else {
					this.mainStops = mainStops;
				}
			} else {
				this.mainStops = allStops;
			}
		}

		this.departureTime = getTime(departure)
			.split(":")
			.slice(0, -1)
			.join(":");
	}
};
</script>

<style scoped>
.journey {
	max-width: 22.5rem;
	width: 100%;
	height: 100%;
	min-height: 6rem;
	padding: 0.5rem 0.5rem;
	margin: 1rem 0;
	border: 0.15rem solid #2372cc;
	border-radius: 0.4rem;
	background-color: white;
}

.journey:hover {
	cursor: pointer;
}

.journey div:first-child, .journey div:first-child * div {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.journey div:first-child > div:not(.category) {
	display: flex;
	flex-direction: column;
}

.journey > div:first-child {
	margin-bottom: 1em;
}

.journey .stops, .journey .stops ul {
	display: flex;
}

.journey .stops {
	flex-direction: column;
	color: #3d4246;
	font-style: italic;
}

.journey .stops span {
	font-weight: 500;
}

.journey .stops ul {
	flex-wrap: wrap;
	margin-bottom: 0.5rem;
}

.journey .stops ul li {
	margin-right: 0.4em;
	white-space: nowrap;
}

.journey .stops ul li:not(:last-child)::after {
	content: ",";
}

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
	text-transform: uppercase;
	font-style: italic;
	font-weight: 600;
	display: block;
	color: #77778b;
	margin-right: 0.5rem;
}

.destination {
	font-weight: 500;
	font-size: 1.1rem;
}

.departuretime {
	align-self: flex-end;
	font-weight: 500;
}
</style>