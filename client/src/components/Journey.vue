<template>
	<div class="journey">
		<div>
			<span class="destination">{{destination}}</span>
			<div>
				<div class="category">
					<span class="type" v-if="altTypeName">{{altTypeName}}</span>
					<span class="type" v-else>{{type}}</span>
					<span class="operator" :class="operator.toLowerCase()"></span>
				</div>
				<span class="departuretime">{{departureTime}}</span>
			</div>
		</div>
		<div class="stops" v-if="mainStops.length > 0">
			<span>Via: </span>
			<ul>
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
		operator: String,
		destination: String,
		departure: String,
		stops: Array,
		type: String
	},
	data() {
		return {
			mainStops: Array,
			departureTime: String,
			altTypeName: ""
		};
	},
	created() {
		const allStops = this.stops;
		const departure = this.departure;
		const type = this.type;

		if (type === "ICD") {
			this.altTypeName = "IC Direct";
		}

		if (allStops.length > 2) {
			const mainStops = allStops.filter(function (stop, index) {
				return (index + 1) % 2 === 1;
			});
			if (mainStops.length > 5) {
				this.mainStops = allStops.filter(function (stop, index) {
					return index < 5;
				});
			} else {
				this.mainStops = mainStops;
			}
		} else {
			this.mainStops = allStops;
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
	padding: 0.5rem 0.5rem;
	border: 0.1rem solid #2372cc;
	border-radius: 0.4rem;
	background-color: white;
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

.journey .stops, .journey .stops ul {
	display: flex;
}

.journey .stops {
	flex-direction: column;
	color: #3d4246;
	font-style: italic;
	margin-top: 0.25em;
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
	text-transform: capitalize;
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