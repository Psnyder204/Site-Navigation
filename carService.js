import axios from "axios";
import * as helper from "../../../services/serviceHelper";

let getAll = (payload) => {
	const config = {
		method: "GET",
		url: "https://my-json-server.typicode.com/selvaicodes/cars/cars",
		data: payload,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config).then(helper.onGlobalSuccess);
};

const userService = { getAll };
export default userService;
