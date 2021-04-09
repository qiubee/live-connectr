const host = location.origin.replace(/^http/, "ws");
const socket = io(host);

socket.on("connect", function () {
	socket.send("connected!");
});