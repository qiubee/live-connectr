const db = require("../modules/database");

module.exports = function (server) {
	const io = require("socket.io")(server, {
		cors: {
			origin: "http://localhost:5000",
		}
	});
	const clients = [];
	io.on("connection", function (socket) {
		// add client to clients list
		clients.push({
			id: socket.id,
		});
		console.log("client connected",`(total: ${clients.length})`);

		socket.on("join room", function (room) {
			socket.join(room);
		});

		socket.on("add message", function (message) {
			db.insertOne("messages", message);
			const user = db.getOne("users", function (user) {
				return user.id === message.userId;
			});
			message.user = user;
			delete message.userId;
			socket.emit("new message", message);
		});

		socket.on("messages", function (roomId) {
			// find users of room
			const roomMembers = db.getOne("rooms", function (room) {
				return room.id === roomId;
			}).users;
			const users = db.getMany("users", function (user) {
				for (const userId of roomMembers) {
					if (user.id === userId) {
						return user;
					}
				}
			});

			// retrieve messages from users in room
			const messages = db.getMany("messages", function (message) {
				return message.roomId === roomId;
			}).map(function (message) {
				const user = users.find(function (user) {
					return user.id === message.userId;
				});
				message.user = user;
				delete message.userId;
				return message;
			});

			// socket.to(room.name).emit("messages", messages);
			socket.emit("messages", messages);
		});

		socket.on("disconnect", function () {
			console.log("client disconnected");
			// remove client from clients list
			clients.splice(clients.findIndex(function (client) {
				return client.id === socket.id;
			}, 1));
		});
	});
};