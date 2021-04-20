const axios = require("axios");
const db = require("../../modules/database");
require("dotenv").config();

const apiToken = process.env.NS_API_KEY;

function getJourneyInfo(req, res) {
	const query = req.query;
	console.log(query);
	// res.json(data);
}

async function searchJourney(req, res) {
	const query = req.query;

	// const apiResponse = await fetch("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips", {
	// 	params: query,
	// 	headers: {
	// 		"Authorization": `Primary-${apiToken}`,
	// 		"Ocp-Apim-Subscription-Key": apiToken
	// 	}
	// });

	// test sample
	const apiResponse = {status: 200, data: db.getAll("testjourneys")};

	if (apiResponse.status === 200) {
		const data = apiResponse.data;
	
		const journeys = data.trips.map(function (journey) {
			const uicCodes = journey.uid.split("|").filter(function (item) {
				return /Station/g.test(item);
			}).map(function (str) {
				const [field, code] = str.split("=");
				return {
					[field]: code
				};
			}).reduce(function (arr, item) {
				return Object.assign(arr, item);
			}, {});
		
			return journey.legs.filter(function (route) {
				return uicCodes.toStation === route.destination.uicCode && uicCodes.fromStation === route.origin.uicCode;
			}).map(function (route) {
				const stops = route.stops.filter(function (stop) {
						return stop.name !== route.origin.name && stop.name !== route.destination.name;
					}).flat().filter(function (stop) {
					return !stop.passing && !stop.cancelled;
				}).map(function (stop) {
					return {
						name: stop.name,
						uicCode: stop.uicCode,
						plannedArrival: stop.plannedArrivalDateTime,
						track: stop.actualArrivalTrack
					};
				});
			
				return {
					journeyId: route.product.number,
					destination: route.direction,
					departureTime: route.origin.plannedDateTime,
					type: route.product.shortCategoryName,
					operator: route.product.operatorName,
					stops: stops
				};
			});
		}).flat();

		return res.json(journeys);
	} else if (apiResponse.status === 400) {
		return res.status(400).json({
			status: 400,
			message: "Bad Request"
		});
	}
}

function getTrainInfo(req, res) {
}

function getStations(req, res) {
	const allStations = db.getAll("stations");
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