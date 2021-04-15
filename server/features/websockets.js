module.exports = function (server) {
	const io = require("socket.io")(server, {
		cors: {
			origin: "http://localhost:5000",
		}
	});
	io.on("connection", function (socket) {
		console.log("client connected");
		socket.send("connected");

		socket.on("disconnect", function () {
			console.log("client disconnected");
		});
	});
};