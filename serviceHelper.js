import axios from "axios";
axios.defaults.withCredentials = true;
// Add a request interceptor
axios.interceptors.request.use(function (config) {
	config.withCredentials = true;
	return config;
});

/**
 * Will unpack the response body from reponse object
 * @param {*} response
 *
 */
/*
- onGlobalSuccess is grabbing the response data from the axios call so in friends we can change 
  onGetFriendsSuccess = (response) to onGetFriendsSuccess = (data), 
  the global successhandler is unpacking the response for us so the component only has to deal with the data,
   possibly creating a smaller work load? ask Q
  
*/
const onGlobalSuccess = (response) => {
	/// Should not use if you need access to anything other than the data
	return response.data;
};

const onGlobalError = (err) => {
	return Promise.reject(err);
};

const API_HOST_PREFIX = process.env.REACT_APP_API_HOST_PREFIX;
const API_NODE_HOST_PREFIX = process.env.REACT_APP_API_NODE_HOST_PREFIX;

//console.log("API_HOST_PREFIX", API_HOST_PREFIX);

export {
	onGlobalError,
	onGlobalSuccess,
	API_HOST_PREFIX,
	API_NODE_HOST_PREFIX,
};
