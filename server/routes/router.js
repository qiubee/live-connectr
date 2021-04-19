const router = require("express").Router();

const api = require("./controllers/api");

router.get("/api/v1/journey", api.journey)
	.get("/api/v1/search", api.search)
	.get("/api/v1/stations", api.stations)
	.get("/api/v1/train", api.train);

module.exports = router;