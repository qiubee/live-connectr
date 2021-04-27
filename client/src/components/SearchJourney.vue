<template>
	<div class="search">
		<h2>Waar ga jij heen vandaag?</h2>
		<form action="">
			<label><span>Van</span><input @input="giveSearchOptions" @focus="showSuggestions" @blur="hideSuggestions" type="text" name="from"></label>
			<div v-if="suggestOrigin" class="suggestions">
				<ul>
					<li v-for="option in suggestions" :key="option">
						<span>{{option}}</span>
					</li>
				</ul>
			</div>
			<label><span>Naar</span><input @input="giveSearchOptions" @focus="showSuggestions" @blur="hideSuggestions" type="text" name="to"></label>
			<div v-if="suggestDestination" class="suggestions">
				<ul>
					<li v-for="option in suggestions" :key="option">
						<span>{{option}}</span>
					</li>
				</ul>
			</div>
			<button>Zoek reis</button>
		</form>
		<div v-if="!noJourneys" class="results">
			<ul>
				<li class="result" v-for="journey in journeys" :key="journey.id">
					<Journey  @click="toRoom(journey.id)"
						:id="journey.id"
						:operator="journey.operator"
						:destination="journey.destination"
						:departure="journey.departureTime"
						:stops="journey.stops"
						:type="journey.type"
					/>
				</li>
			</ul>
		</div>
		<div v-else class="no_results">
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
			noJourneys: false,
			suggestions: Array,
			suggestOrigin: false,
			suggestDestination: false,
		};
	},
	mounted() {
		const form = document.querySelector(".search form");
		const vm = this;

		form.addEventListener("submit", async function (event) {
			const inputs = Array.from(form.children).filter(function (node) {
				return node.control;
			}).map(function (node) {
				return { [node.control.name]: node.control.value };
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
				vm.journeys = journeys.data;
			} else {
				vm.noJourneys = true;
			}

			return false;
		});
		
	},
	methods: {
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
					this.suggestions = stations.data; 
				}
			}
		},
		showSuggestions(event) {
			const inputName = event.target.attributes.name.nodeValue;
			this.suggestions = [];
			if (inputName === "from") {
				this.suggestOrigin = true;
			} else if (inputName === "to") {
				this.suggestDestination = true;
			}
		},
		hideSuggestions(event) {
			const inputName = event.target.attributes.name.nodeValue;
			if (inputName === "from") {
				this.suggestOrigin = false;
			} else if (inputName === "to") {
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
.search form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 20rem;
}

.search form label {
	display: flex;
	margin: 0.5rem 0;
	flex-direction: column;
}

.search form label span {
	font-weight: 500;
}

.search form label input {
	min-width: 15rem;
}

.search form button {
	min-width: 8rem;
	margin-top: 1rem;
}

.results .result {
	max-width: 22.5rem;
	background-color: white;
	transition: all 0.15s ease;
}

.results .result:hover {
	cursor: pointer;
	transform: translateY(-0.25em);
	filter: drop-shadow(0em 0.25em 0.25em rgba(3, 25, 53, 0.2));
}
</style>