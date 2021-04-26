function addToSessionStorage(name, content) {
	try {
		content = JSON.stringify(content);
		sessionStorage.setItem(name, content);
		console.log("Added item to SessionStorage");		
	} catch (error) {
		console.log(error);
	}
}

function checkInSessionStorage(name) {
	try {
		if (sessionStorage.getItem(name)) {
			return true;
		} else { return false; }
	} catch(error) {
		console.log(error);
		return false;
	}
}

function getFromSessionStorage(name) {
	try {
		if (sessionStorage.getItem(name)) {
			return JSON.parse(sessionStorage.getItem(name));
		}
	} catch(error) {
		console.log(error);
	}
}

export {
	addToSessionStorage,
	checkInSessionStorage,
	getFromSessionStorage
};