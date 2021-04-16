module.exports = function (server) {
	const io = require("socket.io")(server, {
		cors: {
			origin: "http://localhost:5000",
		}
	});
	io.on("connection", function (socket) {
		console.log("client connected");
		
		socket.on("messages", function () {
			// 1. get room id
			// 2. fetch messages
			// 3. emit messages
		});

		socket.on("disconnect", function () {
			console.log("client disconnected");
		});
	});
};