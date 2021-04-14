const express = require("express");
const http = require("http");
const socket = require("./features/websockets");
require("dotenv").config();

// server
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

// use public folder for static files
app.use(express.static("public"))
	.disable("x-powered-by");

// socket implementation
socket(server); 

server.listen(PORT, function () {
	console.log(`Listening on ${PORT}`);
});