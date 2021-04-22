const router = require("express").Router();

const api = require("./controllers/api");

router.get("/api/v1/journeyDetail", api.getJourneyInfo)
	.get("/api/v1/journeys", api.getJourneys)
	.get("/api/v1/stations", api.getStations)
	.get("/api/v1/trainDetail", api.getTrainInfo)
	.get("/api/v1/allRooms", api.getAllRooms)
	.get("/api/v1/room", api.getRoom)
	.post("/api/v1/room", api.postRoom);

module.exports = router;