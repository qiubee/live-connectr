import { get as aGet, post as aPost } from "axios";
async function get(url, params = null) {
	try {
		if (params) {
			return await (await aGet(url, { params: params }));
		} else {
			return await (await aGet(url));
		}
	} catch (error) {
		if (error.response.status >= 400 && error.response.status < 500) {
			console.error(error.response.status + " " + error.response.data.message);
			return error.response;
		} else {
			console.error(error);
		}
	}
}

async function post(url, data) {
	try {
		return await (await aPost(url, data));
	} catch (error) {
		if (error.response.status >= 400 && error.response.status < 500) {
			console.error(error.response.status + " " + error.response.data.message);
			return error.response;
		} else {
			console.error(error);
		}
	}
}

export { get, post };