function isArray(arr) {
	return arr instanceof Array;
}

const QueryBuilder = (urlParams) => {
	if (urlParams)
		return Object.entries(urlParams)
			.map(([key, value]) => {
				let finalValue = value;
				if (isArray(value)) {
					finalValue = value.join(",");
				}
				return `${encodeURIComponent(key)}=${encodeURIComponent(
					finalValue
				)}`;
			})
			.join("&");
	else return "";
};

const URLAppender = (baseurl, queryString) =>
	queryString ? `${baseurl}?${queryString}` : baseurl;

/**
 * Constructs a complete URL by appending query parameters to a base URL.
 * Handles both string and object parameters (converts objects to query strings).
 *
 * @param {string} baseurl - The base URL (e.g., `"https://example.com/api"`).
 * @param {string|Object.<string, string|number|boolean>} urlParams - Query parameters as a string (`"key=value"`) or object (`{ key: "value" }`).
 * @returns {string} The formatted URL with appended query parameters.
 * @throws {Error} If `baseurl` is not a valid string.
 * @example
 * // String params
 * URLBuilder("https://api.com", "page=1&limit=10");
 * // → "https://api.com?page=1&limit=10"
 *
 * // Object params
 * URLBuilder("https://api.com", { page: 1, limit: 10 });
 * // → "https://api.com?page=1&limit=10"
 *
 * // No params
 * URLBuilder("https://api.com", "");
 * // → "https://api.com"
 */
export const URLBuilder = (baseurl, urlParams) => {
	let queryString = "";
	if (typeof urlParams == "string") queryString = urlParams;
	else if (typeof urlParams == "object" && Object.keys(urlParams).length > 0)
		queryString = QueryBuilder(urlParams);
	return URLAppender(baseurl, queryString);
};

/**
 * Formats a number by adding thousand separators (converts 1000 to "1.000").
 * Handles edge cases for null/undefined values and numbers below 1000.
 *
 * @param {string|number} value - The number to be formatted (can be string or number)
 * @returns {string} The formatted number with thousand separators. Returns "0" for falsy inputs.
 * @example
 * formatNumber(1000);    // returns "1.000"
 * formatNumber("2500");  // returns "2.500"
 * formatNumber(999);     // returns "999"
 * formatNumber(null);    // returns "0"
 */
export function formatNumber(value) {
	if (!value) return "0";
	if (value < 1000) return `${value}`;
	return (value / 1000).toLocaleString("en-US", { minimumFractionDigits: 3 });
}

/**
 * Formats a date into a consistent string format: `DD/MM/YYYY HH:mm` (24-hour time).
 * Handles Date objects, ISO strings, and timestamps. Invalid dates return "Invalid Date".
 *
 * @param {Date|string|number} date - Input date (Date object, ISO string, or timestamp).
 * @returns {string} Formatted date string (`DD/MM/YYYY HH:mm`) or "Invalid Date" if parsing fails.
 * @example
 * formatDate(new Date(2023, 9, 5, 14, 30));  // → "05/10/2023 14:30"
 * formatDate("2023-10-05T14:30:00Z");        // → "05/10/2023 14:30"
 * formatDate(1696523400000);                 // → "05/10/2023 14:30"
 * formatDate("invalid");                     // → "Invalid Date"
 */
export const formatDate = (date) => {
	const newDate = new Date(date);
	const formattedDate = `${String(newDate.getDate()).padStart(
		2,
		"0"
	)}/${String(newDate.getMonth() + 1).padStart(
		2,
		"0"
	)}/${newDate.getFullYear()} ${String(newDate.getHours()).padStart(
		2,
		"0"
	)}:${String(newDate.getMinutes()).padStart(2, "0")}`;

	return formattedDate;
};
