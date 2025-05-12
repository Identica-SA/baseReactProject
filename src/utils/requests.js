import { config } from "./urls";

export const getRequest = (url) => {
	return fetch(config.apiBaseUrl + url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		// credentials: 'include' // if you need to send cookies
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.catch((error) => {
			console.error("Error in GET request:", error);
			throw error;
		});
};

export const postRequest = (url, reqData) => {
	return fetch(config.apiBaseUrl + url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(reqData),
		// credentials: 'include' // if you need to send cookies
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.catch((error) => {
			console.error("Error in POST request:", error);
			throw error;
		});
};
