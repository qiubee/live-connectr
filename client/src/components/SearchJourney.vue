<template>
	<div class="search_journey">
		<h2>Waar ga jij heen vandaag?</h2>
		<form @submit="searchJourneys" action="">
			<div class="inputs">
				<label><span>Van</span><input @input="giveSearchOptions" @focus="showSuggestions" type="text" name="from"></label>
				<div v-if="suggestOrigin && suggestions.length >= 1" class="suggestions">
					<ul>
						<li @click="setStation" @keyup.enter="setStation" v-for="station in suggestions" :key="station.id" tabindex="0" >{{station.name}}</li>
					</ul>
				</div>
				<label><span>Naar</span><input @input="giveSearchOptions" @focus="showSuggestions" type="text" name="to"></label>
				<div v-if="suggestDestination && suggestions.length >= 1" class="suggestions">
					<ul>
						<li @click="setStation" @keyup.enter="setStation" v-for="station in suggestions" :key="station.id" tabindex="0">{{station.name}}</li>
					</ul>
				</div>
			</div>
			<button @focus="hideSuggestions" class="button">Zoek reis</button>
		</form>
		<div v-if="journeys.length >= 1" class="results">
			<ul>
				<li class="result" v-for="journey in journeys" :key="journey.id">
					<Journey @click="toRoom(journey.id)"
						:operator="journey.operator"
						:destination="journey.destination"
						:departure="journey.departureTime"
						:stops="journey.stops"
						:type="journey.type.name"
					/>
				</li>
			</ul>
		</div>
		<div v-if="noJourneysFound" class="no_results">
			<p>Reis niet gevonden.</p>
		</div>
	</div>
</template>

<script>
import Journey from "@/components/Journey.vue";
import { get, post } from "@/helpers/fetch.js";

const host = process.env.NODE_ENV === "production" ? 
	location.origin : 
	location.origin.replace("5000", "8000");

export default {
	name: "SearchJourney",
	components: {
		Journey
	},
	data() {
		return {
			journeys: [],
			noJourneysFound: false,
			suggestions: Array,
			suggestOrigin: false,
			suggestDestination: false,
		};
	},
	methods: {
		async searchJourneys(event) {
			const formNode = event.target;
			const inputs = Array.from(formNode.elements).filter(function (node) {
				return node.localName === "input";
			}).map(function (node) {
				return { [node.name]: node.value };
			}).reduce(function (arr, input) {
				return Object.assign(arr, input);
			}, {});

			event.preventDefault();
			if (!inputs.from || !inputs.to ) {
				return;
			}

			const journeys = await get(`${host}/api/v1/journeys`, {
				fromStation: inputs.from,
				toStation: inputs.to
			});

			if (journeys.status === 200) {
				if (journeys.data.length === 0) {
					this.noJourneysFound = true;
				}
				this.journeys = journeys.data;
			} else {
				this.noJourneysFound = true;
			}

			return false;
		},
		async giveSearchOptions(event) {
			const node = event.target;
			const input = node.value.replace(/[0-9<>`'"$!@#$%^&*()\]\\/[]/g, "");
			
			if (input.length < 2) {
				this.suggestions = [];
				return;
			}

			if (input.length % 2 === 1 || input[input.length - 1] === " ") {
				return;
			} else {
				const stations = await get(`${host}/api/v1/stations`, {
					stationName: input,
					countryCode: "NL"
				});
				if (stations.status === 200) {
					this.suggestions = stations.data.map(function (station, index) {
						return {
							id: index,
							name: station
						};
					}); 
				}
			}
		},
		showSuggestions(event) {
			const inputName = event.target.attributes.name.nodeValue;
			this.suggestions = [];
			if (inputName === "from") {
				this.suggestOrigin = true;
				this.suggestDestination = false;
			} else if (inputName === "to") {
				this.suggestDestination = true;
				this.suggestOrigin = false;
			}
		},
		hideSuggestions() {
			this.suggestOrigin = false;
			this.suggestDestination = false;
		},
		setStation(event) {
			const node = event.target;
			const station = node.textContent;
			const inputNode = event.target.parentElement.parentElement.previousElementSibling.control;
			inputNode.value = station;

			if (inputNode.name === "from") {
				this.suggestOrigin = false;
			} else if (inputNode.name === "to") {
				this.suggestDestination = false;
			}
		},
		async toRoom(id) {
			const room = await get(`${host}/api/v1/room`, {
				journeyId: id
			});
			
			if (room.status === 404) {
				const addedRoom = await post(`${host}/api/v1/room`, {
					journeyId: id
				});

				if (addedRoom.status === 201) {
					this.$router.push({name: "Journey", params: {id}});
				}
			} else {
				this.$router.push({name: "Journey", params: {id}});
			}
		}
	}
};
</script>

<style scoped>
h2, form, .results {
	margin: 2rem 0;
}

h2 {
	text-align: center;
	color: #38034d
}

form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.inputs label {
	display: flex;
	flex-direction: column;
}

.inputs label:not(:first-child) {
	margin-top: 1.5rem;
}

form label span {
	color: #270535;
	font-weight: 500;
	margin-bottom: 0.25rem;
}

form label input {
	min-width: 15rem;
}

form button {
	min-width: 8rem;
	margin: 2.5rem auto 1.5rem auto;
	background-color: #1770f7;
	font-weight: 500;
}

.results ul {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
}

.results li:not(:first-child) {
	margin-top: 1rem;
}

.results .result {
	max-width: 22.5rem;
	background-color: white;
	transition: all 0.15s ease;
	border-radius: 0.4rem;
}

.results .result:hover {
	cursor: pointer;
	transform: translateY(-0.25em);
	filter: drop-shadow(0em 0.25em 0.25em rgba(3, 25, 53, 0.2));
}

.suggestions {
	position: absolute;
	min-width: 15.6rem;
	background-color: #fffafa;
	border: 0.2rem solid #4189ec;
	border-radius: 0.25rem 0.25rem 0.4rem 0.4rem;
}

.suggestions li {
	padding: 0.5rem 0.3rem;
	font-weight: 500;
}

.suggestions li:not(:last-child) {
	border-bottom: 0.1rem solid rgb(107, 140, 248);
}

.suggestions li:hover, .suggestions li:focus {
	cursor: pointer;
	background-color: #4189ec;
	color: white;
}
</style>