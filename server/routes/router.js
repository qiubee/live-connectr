const router = require("express").Router();

const api = require("./controllers/api");

router.get("/api/v1/journey", api.getJourneyInfo)
	.get("/api/v1/journeys", api.getJourneys)
	.get("/api/v1/stations", api.getStations)
	.get("/api/v1/train", api.getTrainInfo)
	.get("/api/v1/allRooms", api.getAllRooms)
	.get("/api/v1/room", api.getRoom)
	.get("/api/v1/user", api.getUser)
	.post("/api/v1/room", api.postRoom)
	.post("/api/v1/user", api.postUser);

module.exports = router;