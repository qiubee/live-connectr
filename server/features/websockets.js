const db = require("../modules/database");

module.exports = function (server) {
	const io = require("socket.io")(server, {
		cors: {
			origin: "http://localhost:5000",
		}
	});
	io.on("connection", function (socket) {
		console.log("client connected");
		
		socket.on("join room", function (room) {
			socket.join(room);
		});

		socket.on("add message", function (data) {
			console.log(data);
		});

		socket.on("messages", function (roomId) {
			const chatId = db.getOne("rooms", function (room) {
				return room.id === roomId;
			}).chatId;
			const messages = db.getOne("chats", function (chat) {
				return chat.id === chatId;
			}).messages;
			// socket.to(room.name).emit("messages", messages);
			socket.emit("messages", messages);
		});

		socket.on("disconnect", function () {
			console.log("client disconnected");
		});
	});
};