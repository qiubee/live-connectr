const express = require("express");
const http = require("http");
const cors = require("cors");
const router = require("./routes/router");
const socket = require("./features/websockets");
require("dotenv").config();

// server
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

// allow localhost origin in development
if (process.env.NODE_ENV === "development") {
	app.use("/api/", cors({origin: "http://localhost:5000"}));
}

app.use(express.static("public")) // use public folder for static files
	.use(express.urlencoded({extended: true})) // parse data from http body
	.use(express.json()) // parse json body
	.use("/api/", router) // use api router
	.use(function (req, res) {
		res.redirect("/"); // redirect to home on 404
	})
	.disable("x-powered-by");

// socket implementation
socket(server); 

server.listen(PORT, function () {
	console.log(`Listening on ${PORT}`);
});