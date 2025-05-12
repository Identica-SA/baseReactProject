const emailValidate = (email) =>
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email.toLowerCase()
	);

const phoneValidate = (phone) =>
	/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
		phone
	);

const nitValidate = (nit) => /^\d{5,12}-?\d?$/.test(nit);

const plateValidate = (plate) => {
	const carPlateRegex = /^[A-Z]{3}\d{3}$/;
	const motorcyclePlateRegex = /^[A-Z]{3}\d{2}[A-Z]{1}$/;
	return carPlateRegex.test(plate) || motorcyclePlateRegex.test(plate);
};

const serialValidate = (serial) => serial.match(/^\d{4}[I]\d{6}$/);

export {
	nitValidate,
	emailValidate,
	phoneValidate,
	plateValidate,
	serialValidate,
};
