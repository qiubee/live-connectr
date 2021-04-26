const axios = require("axios");
const db = require("../../modules/database");
require("dotenv").config();

const apiToken = process.env.NS_API_KEY;

function getJourneyInfo(req, res) {
	if (/^[0-9]{1,}$/g.test(req.query.journeyId) === false) {
		return res.status(400).json({
			status: 400,
			message: "Could not handle request due to incorrect data type"
		});
	}

	const journeyId = Number(req.query.journeyId);
	const journeyData = db.getOne("journeys", function (journey) {
		return journey.journeyId === journeyId;
	});
	
	if (journeyData) {
		return res.json(journeyData);
	} else {
		return res.status(404).json({
			status: 404,
			message: "Journey not found"
		});
	}
}

function getUser(req, res) {
	const userName = req.query.name;

	if (/^[0-9a-zA-Z]{1,}$/g.test(req.query.journeyId) === false) {
		return res.status(400).json({
			status: 400,
			message: "Incorrect data type"
		});
	}

	const user = db.getOne("users", function (user) {
		return user.name === userName;
	});
	
	if (user) {
		return res.json(user);
	} else {
		return res.status(404).json({
			status: 404,
			message: "User not found"
		});
	}
}

function addUser(req, res) {
	const data = req.body;
	if (!data.name || !data.roomId) {
		return res.status(400).json({
			status: 400,
			message: "Incorrect data to process request"
		});
	}
	const foundUser = db.getAll("users").find(function (user) {
		return user.name === data.name;
	});

	if (foundUser) {
		if (!foundUser.inRooms.includes(data.roomId)) {
			db.update("users", function (user) {
				return user === data.name;
			}, function (user) {
				user.rooms.push(data.roomId);
				return user;
			});
		} 	
		return res.json({
			status: 200,
			message: "User information updated"
		});
	} else {
		const user = {
			name: data.name,
			inRooms: [data.roomId]
		};

		db.insertOne("users", user);
		return res.status(201).json({
			status: 201,
			message: "User added"
		});
	}
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
	const apiResponse = {status: 200, data: db.getAll("testjourneys3")};

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
		
			return journey.legs
			.filter(function (route) {
				return route.origin.actualDateTime;
			})
			.map(function (route) {
				const stops = route.stops.filter(function (stop) {
						return stop.uicCode !== uicCodes.fromStation && stop.uicCode !== uicCodes.toStation && stop.name !== route.direction;
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

				const type = {
					name: route.product.shortCategoryName,
					fullName: route.product.longCategoryName
				};
			
				return {
					id: Number(route.product.number),
					destination: route.direction,
					departureTime: route.origin.actualDateTime || route.origin.plannedDateTime,
					type: type,
					operator: route.product.operatorName,
					stops: stops
				};
			});
		}).flat().filter(function (journey, index) {
			return index < 5;
		}).sort(function (journey, nextJourney) {
			return new Date(journey.departureTime) - new Date(nextJourney.departureTime);
		});
		return res.json(journeys);
	} else if (apiResponse.status === 400) {
		return res.status(400).json({
			status: 400,
			message: "Bad Request"
		});
	} else if (apiResponse.status === 404) {
		return res.status(404).json({
			status: 404,
			message: "Journey not found"
		});
	}
}

function getTrainInfo(req, res) {
}

function getRoom(req, res) {
	if (/^[0-9]{1,}$/g.test(req.query.journeyId) === false) {
		return res.status(400).json({
			status: 400,
			message: "Could not handle request due to incorrect data type"
		});
	} 
	const journeyId = Number(req.query.journeyId);

	const room = db.getOne("rooms", function (room) {
		return room.journeyId === journeyId;
	});

	if (!room) {
		return res.status(404).json({
			status: 404,
			message: "Room not found"
		});
	} else {
		return res.json(room);
	}
}

function getAllRooms(req, res) {
	const allRooms = db.getAll("rooms");

	if (!allRooms) {
		return res.status(404).json({
			status: 404,
			message: "No rooms found"
		});
	} else {
		return res.json(allRooms);
	}
}

async function addRoom(req, res) {
	if (/^[0-9]{1,}$/g.test(req.body.journeyId) === false) {
		return res.status(400).json({
			status: 400,
			message: "Could not handle request due to incorrect data type"
		});
	}
	const journeyId = Number(req.body.journeyId);

	const duplicate = db.getOne("rooms", function (room) {
		return room.journeyId === journeyId;
	});

	if (duplicate) {
		return res.json({
			status: 200,
			message: "Room updated"
		});
	}

	// const apiResponse = await fetch("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/journey", {
	// 	params: {
	// 		train: journeyId
	// 	},
	// 	headers: {
	// 		"Authorization": `Primary-${apiToken}`,
	// 		"Ocp-Apim-Subscription-Key": apiToken
	// 	}
	// });

	// test sample
	const apiResponse = {status: 200, data: db.getAll("testjourneydetail")};

	if (apiResponse.status === 200) {
		const data = apiResponse.data.payload;

		const [origin, destination] = data.stops.filter(function (stop) {
			return stop.status === "ORIGIN" || stop.status === "DESTINATION";
		}).map(function (place) {
			const data = {
				name: place.stop.name,
				countryCode: place.stop.countryCode,
				uicCode: place.stop.uicCode,
				stationCode: place.id.split("_")[0],
			};

			if (place.status === "ORIGIN") {
				data.departureDateTime = place.departures[0].actualTime;
			} else if (place.status === "DESTINATION") {
				data.arrivalDateTime = place.arrivals[0].actualTime;
			}

			return data;
		});

		const stops = data.stops.filter(function (stop) {
			return stop.status !== "PASSING" && 
				stop.status !== "ORIGIN" &&
				stop.status !== "DESTINATION";
		}).map(function (stop) {
			return {
				name: stop.stop.name,
				countryCode: stop.stop.countryCode,
				uicCode: stop.stop.uicCode,
				stationCode: stop.id.split("_")[0],
				arrivalDateTime: stop.arrivals[0].actualTime,
				departureDateTime: stop.departures[0].actualTime,
			};
		});

		const routeStations = data.stops.map(function (station) {
			return {
				name: station.stop.name,
				uicCode: station.stop.uicCode,
				stationCode: station.id.split("_")[0],
			};
		});

		stops.map(function (stop, index, self) {
			const nextStop = self[index + 1];
			const previousStop = self[index - 1];
			if (index === 0) {
				const tailIndex = routeStations.findIndex(function (station) {
					return station.uicCode === stop.uicCode;
				});
				const passingStations = routeStations.slice(1, tailIndex).filter(function (station) {
					return station.uicCode !== stop.uicCode;
				});
				const nextStation = routeStations.find(function (station) {
					return station.uicCode === nextStop.uicCode;
				});
				stop.passedStations = passingStations;
				stop.nextStop = nextStation;
				return stop;
			}

			if (!nextStop) {
				const headIndex = routeStations.findIndex(function (station) {
					return station.uicCode === stop.uicCode;
				});
				const passingStations = routeStations.slice(headIndex, -1).filter(function (station) {
					return station.uicCode !== stop.uicCode;
				});
				const nextStation = routeStations[routeStations.length - 1];
				stop.passedStations = passingStations;
				stop.nextStop = nextStation;
				return stop;
			}

			const headIndex = routeStations.findIndex(function (station) {
				return station.uicCode === previousStop.uicCode;
			});

			const tailIndex = routeStations.findIndex(function (station) {
				return station.uicCode === stop.uicCode;
			});

			const passingStations = routeStations.slice(headIndex, tailIndex).filter(function (station) {
				return station.uicCode !== stop.uicCode && station.uicCode !== previousStop.uicCode;
			});
			const nextStation = routeStations.find(function (station) {
				return station.uicCode === nextStop.uicCode;
			});

			stop.passedStations = passingStations;
			stop.nextStop = nextStation;
			return stop;
		});

		const type = {
			name: data.stops[0].departures[0].product.categoryCode,
			fullName: data.stops[0].departures[0].product.longCategoryName
		};

		const operator = data.stops[0].departures[0].product.operatorName;

		const journeyData = {
			origin: origin,
			stops: stops,
			destination: destination,
			journeyId: journeyId,
			type: type,
			operator: operator,
			delayInSeconds: 0,
			cancelled: false,
		};

		db.insertOne("journeys", journeyData);

		const totalRooms = db.getAll("rooms").length;
		const newRoom = {
			created: new Date().toUTCString(),
			updated: new Date().toUTCString(),
			journeyId: journeyId,
			chatId: totalRooms + 1,
			users: [],
			game: { active: false }
		};
		db.insertOne("rooms", newRoom);
		return res.status(201).json({
			status: 201,
			message: "Room created"
		});
	} else if (apiResponse.status === 400) {
		return res.status(400).json({
			status: 400,
			message: "Could not process request due to incorrect parameters"
		});
	} else if (apiResponse.status === 404) {
		return res.status(404).json({
			status: 404,
			message: "Journey not found"
		});
	}
}

function getStations(req, res) {
	const data = req.query;
	const allStations = db.getAll("stations");
	if (data) {
		if (!data.stationName && data.countryCode) {
			const countryCode = data.countryCode;
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
					message: "Unkown country code"
				});
			}
			const response = allStations.filter(function (station) {
				return station.countryCode === countryCode;
			});
			return res.json(response);
		} else if (data.stationName.length >= 1) {
			const stationName = data.stationName;
			if (!/[a-z A-z]/g.test(stationName)) {
				return res.status(400).json({
					status: 400,
					message: "Incorrect station name"
				});
			}
			const regex = new RegExp(`^${stationName}`, "gi");
			const results = allStations.filter(function (station) {
				if (data.countryCode) {
					const countryCode = data.countryCode;
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
							message: "Unkown country code"
						});
					}
					return station.name.match(regex) && station.countryCode === countryCode;
				} else {
					return station.name.match(regex);
				}
			}).reduce(function (arr, next) {
				if (next.name) {
					arr.push(next.name);
					if (next.alternateNames) {
						next.alternateNames.map(function (name) {
							arr.push(name);
						});
					}
				}
				return arr;
			}, []);

			if (results.length < 1) {
				return res.status(404).json({
					status: 404,
					message: "Station not found"
				});
			}
			if (data.totalResults && /^[0-9]{0,4}$/g.test(data.totalResults)) {
				if (results.length <= data.totalResults) {
					return res.json(results);
				} else {
					const response = results.slice(0, data.totalResults);
					return res.json(response);
				}
			} else {
				const response = results.length > 5 ? filterRandom(results, 5) : results;
				return res.json(response);
			}
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

exports.getJourneyInfo = getJourneyInfo;
exports.getJourneys = searchJourney;
exports.getTrainInfo = getTrainInfo;
exports.getStations = getStations;
exports.getUser = getUser;
exports.getRoom = getRoom;
exports.getAllRooms = getAllRooms;
exports.postUser = addUser;
exports.postRoom = addRoom;