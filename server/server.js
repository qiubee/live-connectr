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

// use public folder for static files
app.use(express.static("public"))
	.use(express.urlencoded({extended: true})) // get data from http body
	.use(express.json())
	.use("/", cors({origin: "http://localhost:5000"}), router)
	.disable("x-powered-by");

// socket implementation
socket(server); 

server.listen(PORT, function () {
	console.log(`Listening on ${PORT}`);
});