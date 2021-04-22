const db = require("../modules/database");
const { watch } = require("fs");
require("dotenv").config();

const FOLDER = process.env.DB_FOLDER || "data";

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

		socket.on("all rooms", function (status) {
			if (status.init) {
				const rooms = collectRooms();
				socket.emit("all rooms", rooms);
			}

			watch(FOLDER + "/rooms.json", function (event) {
				if (event === "change") {
					const rooms = collectRooms();
					socket.emit("all rooms", rooms);
				}
			});
		});

		socket.on("disconnect", function () {
			// remove client from clients list
			clients.splice(clients.findIndex(function (client) {
				return client.id === socket.id;
			}, 1));
			console.log("client disconnected", `(left: ${clients.length})`);
		});
	});
};

function collectRooms() {
	const allRooms = db.getAll("rooms");
	const allJourneys = db.getAll("journeys");
	console.log(allRooms, allJourneys);
}