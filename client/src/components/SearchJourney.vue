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
		<div v-if="journeys.length > 0" class="results">
			<ul>
				<li v-for="journey in journeys" :key="journey.id">
					<Journey  @click="findRoom(journey.id)"
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
		<div v-else-if="noJourneys" class="no_results">
			<p>Reis niet gevonden.</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Journey from "@/components/Journey.vue";
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
		const fetchData = this.fetchData;
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
			
			const journeyResults = await fetchData("http://localhost:8000/api/v1/search", {
				fromStation: inputs.from,
				toStation: inputs.to
			});
			if (journeyResults) {
				vm.journeys = journeyResults;
			} else {
				vm.noJourneys = true;
			}

			return false;
		});
		
	},
	methods: {
		async fetchData(url, params = null) {
			try {
				if (params) {
					return await (await axios.get(url, { params: params })).data;
				} else {
					return await (await axios.get(url)).data;
				}
			} catch (error) {
				if (error.response.status >= 400 && error.response.status < 500) {
					console.error(error.response.status + " " + error.response.data.message);
				} else {
					console.error(error);
				}
			}
		},
		async giveSearchOptions(event) {
			const node = event.target;
			const input = node.value.replace(/[0-9<>`'"$!@#$%^&*()\]\\/[]/g, "");
			
			if (input.length < 2) {
				this.suggestions = [];
			}

			if (input.length % 2 === 1 || input[input.length - 1] === " ") {
				return;
			}

			const suggestions = await this.fetchData("http://localhost:8000/api/v1/stations", {
				stationName: input,
				countryCode: "NL"
			});

			if (suggestions) {
				this.suggestions = suggestions; 
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
</style>