const fs = require("fs");
const path = require("path");

function writeJSONFile(sourcepath, data) {
	try {
		fs.writeFileSync(path.join(__dirname, "../") + sourcepath, JSON.stringify(data));
	} catch (err) {
		console.log(err);
	}
}

function readFile(sourcepath) {
	try {
		return fs.readFileSync(path.join(__dirname, "../") + sourcepath, "utf8");
	} catch (err) {
		console.log(err);
	}
}

function readJSONFile(sourcepath) {
	try {
		return JSON.parse(readFile(sourcepath));
	} catch (err) {
		console.log(err);
	}
}

exports.writeToJSON = writeJSONFile;
exports.read = readFile;
exports.readJSON = readJSONFile;