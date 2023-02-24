import axios from "axios";
import * as helper from "./serviceHelper";

let getFriends = (pageIndex, pageSize) => {
	const config = {
		method: "GET",
		url: `https://localhost:50001/api/v3/friends/paginate/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

let deleteFriend = (id) => {
	const config = {
		method: "DELETE",
		url: `https://localhost:50001/api/friends/${id}`,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};
	console.log("ajax call");
	return axios(config);
};

let addNewFriend = (payload) => {
	const config = {
		method: "POST",
		url: "https://localhost:50001/api/v3/friends/",
		data: payload,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

let updateFriend = (payload, id) => {
	const config = {
		method: "PUT",
		url: `https://localhost:50001/api/friends/${id}`,
		data: payload,
		withCredentials: true,
		crossdomain: true,
		headers: { "Content-Type": "application/json" },
	};

	return axios(config);
};

const userService = { getFriends, deleteFriend, addNewFriend, updateFriend };
export default userService;
