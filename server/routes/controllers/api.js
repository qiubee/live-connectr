const axios = require("axios");
const sample = require("./sample.js");
const { readJSON, writeToJSON } = require("../../modules/file");
require("dotenv").config();

const apiToken = process.env.NS_API_KEY;

function getJourneyInfo(req, res) {
	const query = req.query;
	console.log(query);
	// res.json(data);
}

async function searchJourney(req, res) {
	const query = req.query;
	// const journeys = await fetch("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips", {
	// 	params: query,
	// 	headers: {
	// 		"Authorization": `Primary-${apiToken}`,
	// 		"Ocp-Apim-Subscription-Key": apiToken
	// 	}
	// });

	sample.trips.map(function (journey) {
		console.log(journey.legs[0].direction);
		console.log(journey.legs[0].product.shortCategoryName);
		console.log(journey.legs[0].product.operatorName);
		console.log(journey.legs[0].destination.plannedDateTime);
		journey.legs.map(function (route) {
			console.log(route.stops);
		});
	});

}

function getTrainInfo(req, res) {
}

function getStations(req, res) {
	const allStations = readJSON("data/stations.json");
	if (req.query) {
		if (req.query.length === 1 && req.query.countryCode) {
			const countryCode = req.query.countryCode;
			const allCountrycodes = allStations.reduce(function (arr, next) {
				if (arr.indexOf(next.countryCode) < 0) {
					arr.push(next.countryCode);
				}
				return arr;
			}, []);
			const correctCode = allCountrycodes.indexOf(countryCode) >= 0 ? true : false;
			if (!correctCode) {
				return res.status(400).json({
					status: 400,
					message: "Unkown parameter value"
				});
			}
			const response = allStations.filter(function (station) {
				return station.countryCode === countryCode;
			});
			return res.json(response);
		} else if (req.query.stationName) {
			const stationName = req.query.stationName;
			if (!/[a-z A-z]/g.test(stationName)) {
				return res.status(400).json({
					status: 400,
					message: "Bad Request"
				});
			}
			const regex = new RegExp(`^${stationName}`, "gi");
			const results = allStations.filter(function (station) {
				if (req.query.countryCode) {
					const code = req.query.countryCode;
					return station.name.match(regex) && station.countryCode === code;
				} else {
					return station.name.match(regex);
				}
			}).reduce(function (arr, next) {
				arr.push(next.name);
				if (next.alternateNames) {
					next.alternateNames.map(function (name) {
						arr.push(name);
					});
				}
				return arr;
			}, []);

			if (results.length < 1) {
				return res.status(404).json({
					status: 404,
					message: "Station not found"
				});
			}
			
			const response = results.length > 5 ? filterRandom(results, 5) : results;

			return res.json(response);
		}
	} else {
		return res.json(allStations); 
	}
}

async function fetch(url, options) {
	try {
		const response = await axios.get(url, options);
		return {
			data: response.data,
			status: response.status,
			statusText: response.statusText
		};
	} catch(error) {
		if (error.response.status < 500) {
			return {
				data: error.response.data,
				status: error.response.status,
				statusText: error.response.statusText
			};
		}
	}
}

function getRandomItem(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function filterRandom(arr, count) {
	const randomResults = new Set();
	while (randomResults.size < count) {
		randomResults.add(getRandomItem(arr));
	}
	return Array.from(randomResults);
}

exports.journey = getJourneyInfo;
exports.search = searchJourney;
exports.train = getTrainInfo;
exports.stations = getStations;