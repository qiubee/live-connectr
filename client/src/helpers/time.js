export function getTime(dateTimeString) {
	const date = new Date(dateTimeString);
	const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	return `${hours}:${minutes}:${seconds}`;
}