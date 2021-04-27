const router = require("express").Router();

const api = require("./controllers/api");

router.get("/v1/journey", api.getJourneyInfo)
	.get("/v1/journeys", api.getJourneys)
	.get("/v1/stations", api.getStations)
	.get("/v1/train", api.getTrainInfo)
	.get("/v1/allRooms", api.getAllRooms)
	.get("/v1/room", api.getRoom)
	.get("/v1/user", api.getUser)
	.post("/v1/room", api.postRoom)
	.post("/v1/user", api.postUser);

module.exports = router;