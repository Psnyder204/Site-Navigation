import axios from "axios";

let logIn = (payload) => {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/users/login",
		data: payload,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};
let register = (payload) => {
	const config = {
		method: "POST",
		url: "https://api.remotebootcamp.dev/api/users/register/",
		data: payload,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

const userService = { logIn, register };
export default userService;
