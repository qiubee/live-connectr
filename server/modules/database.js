const { readJSON, writeToJSON} = require("./file");
const { currentDateTime } = require("./date");
require("dotenv").config();

const FOLDER = process.env.DB_FOLDER || "data";

function addToDatabase(name, data) {
	JSON.stringify(writeToJSON(`${FOLDER}/` + name + ".json", data));
	console.log(currentDateTime() + `: Data added to: ${FOLDER}/${name}.json`);
}

function readFromDatabase(name) {
	console.log(currentDateTime() + `: Data collected from: ${FOLDER}/${name}.json`);
	return readJSON(`${FOLDER}/` + name + ".json");
}


// methods for interacting with database

function insertOne(name, data) {
	const collection = readFromDatabase(name);
	data.id = collection.length + 1;
	collection.push(data);
	addToDatabase(name, collection);
}

function deleteOne(name, data) {
	const collection = readFromDatabase(name);
	const newCollection = collection.filter(function (item) {
		return item !== data;
	});
	addToDatabase(name, newCollection);
}

function deleteMany(name, query) {
	const collection = readFromDatabase(name);
	const newCollection = collection.filter(query);
	addToDatabase(name, newCollection);
}

function updateOne(name, filterQuery, updateQuery) {
	const collection = readFromDatabase(name);
	const index = collection.findIndex(filterQuery);
	const item = [collection.find(filterQuery)];
	const updatedItem = item.map(updateQuery)[0];
	const newCollection = collection.slice(index, 1, updatedItem);
	addToDatabase(name, newCollection);
}

function getOne(name, filterQuery) {
	return readFromDatabase(name).find(filterQuery);
}

function getMany(name, filterQuery) {
	return readFromDatabase(name).filter(filterQuery);
}

exports.insertOne = insertOne;
exports.deleteOne = deleteOne;
exports.deleteMany = deleteMany;
exports.updateOne = updateOne;
exports.getOne = getOne;
exports.getMany = getMany;
exports.getAll = readFromDatabase;