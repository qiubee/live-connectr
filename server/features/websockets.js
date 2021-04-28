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
	const rooms = [];
	io.on("connection", function (socket) {
		// add client to clients list
		clients.push({
			id: socket.id,
		});
		console.log("client connected",`(total: ${clients.length})`);

		socket.on("join room", function (data) {
			const room = data.room;
			const user = data.user;

			if (room.journeyId) {
				const journeyId = "" + room.journeyId;
				const joined = db.getOne("rooms", function (item) {
					return item.id === room.id;
				}).users.includes(user.id);

				if (joined) {
					socket.emit("join room", {
						joined: true
					});
					return;
				} else {
					db.updateOne("rooms", function (item) {
						return item.id === room.id;
					}, function (item) {
						item.users.push(user.id);
						return item;
					});
					socket.join(journeyId);
					
					socket.emit("join room", {
						joined: true
					});
				}

				const roomIndex = rooms.findIndex(function (item) {
					return item.name === journeyId;
				});

				if (roomIndex >= 0) {
					rooms[roomIndex].members.push({
						socketId: socket.id,
						userId: user.id
					});
					console.log(`client joined room: ${rooms[roomIndex].name} (total members: ${rooms[roomIndex].members.length})`);
				} else {
					rooms.push({
						id: room.id,
						journeyId: room.journeyId,
						name: journeyId,
						members: [{
							socketId: socket.id,
							userId: user.id
						}]
					});
					console.log(`room ${journeyId} created`,`(total rooms: ${rooms.length})`);
				}
			}
		});

		socket.on("add message", function (newMessage) {
			const message = newMessage;
			const roomName = "" + newMessage.roomName;
			delete newMessage.roomName;
			db.insertOne("messages", newMessage);
			const user = db.getOne("users", function (user) {
				return user.id === newMessage.userId;
			});

			message.user = user;
			delete message.userId;
			delete message.roomName;

			socket.to(roomName).emit("new message", message);
			socket.emit("new message", message);
		});

		socket.on("messages", function (roomData) {
			// find users of room
			const roomMembers = db.getOne("rooms", function (room) {
				return room.id === roomData.id;
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
				return message.roomId === roomData.id;
			}).map(function (message) {
				const user = users.find(function (user) {
					return user.id === message.userId;
				});
				message.user = user;
				delete message.userId;
				return message;
			});

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
			if (clients.length >= 0) {
				console.log("client disconnected", `(total: ${clients.length})`);
			} else {
				console.log("client disconnected", "(no clients connected)");
			}

			// remove client
			if (rooms.length >= 1) {
				const roomIndex = rooms.findIndex(function (room) {
					const user = room.members.findIndex(function (member) {
						return member.socketId === socket.id;
					});
					return user >= 0;
				});
				if (roomIndex >= 0) {
					const memberIndex = rooms[roomIndex].members.findIndex(function (member) {
						return member.socketId === socket.id;
					});

					// remove user from room
					const oldUser = rooms[roomIndex].members[memberIndex];

					db.updateMany("rooms", function (room) {
						const userIndex = room.users.indexOf(oldUser.userId);
						if (userIndex >=0) {
							room.users.splice(userIndex, 1);
						}
						return room;
					});

					db.delete("users", function (user) {
						return user.id !== oldUser.userId;
					});
					
					rooms[roomIndex].members.splice(memberIndex, 1);
					if (rooms[roomIndex].members.length >= 1) {
						console.log(`client left room ${rooms[roomIndex].name} (total members: ${rooms[roomIndex].members.length})`);
					} else {
						// delete room, journey & room messages from database
						const roomId = rooms[roomIndex].id;
						const journeyId = rooms[roomIndex].journeyId;

						db.delete("rooms", function (room) {
							return room.id !== roomId;
						});
						db.delete("messages", function (message) {
							return message.roomId !== roomId;
						});
						db.delete("journeys", function (journey) {
							return journey.journeyId !== journeyId;
						});

						rooms.filter(function (room) {
							return room.id !== roomId;
						});
						console.log(`client left room ${rooms[roomIndex].name} & room has closed`);
					}
				}
			}
		});
	});
};

function collectRooms() {
	const allRooms = db.getAll("rooms");
	if (!allRooms || allRooms.length < 0) {
		return [];
	}
 	const allJourneys = db.getAll("journeys");
	const rooms = allRooms.map(function (room) {
		const journey = allJourneys.find(function (journey) {
			return journey.journeyId === room.journeyId;
		});
		
		const stops = journey.stops.map(function (stop) {
			return stop.name;
		});

		journey.stops = stops;
		journey.destination = journey.destination.name;
		journey.origin = journey.origin.name;
		delete journey.id;

		room.journey = journey;
		
		delete room.journeyId;
		delete room.chatId;
		delete room.created;
		return room;
	});
	return rooms;
}