import { postRequest } from "./requests";
import { endpoints } from "./urls";

const endpoint = endpoints.auth;

const getToken = (reqData) => {
	return postRequest(endpoint.auth, reqData);
};
export { getToken };
