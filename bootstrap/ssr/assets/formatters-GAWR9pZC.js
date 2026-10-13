//#region resources/js/Utils/formatters.js
/**
* Convert English digits to Persian digits.
*/
function toPersianDigits(input) {
	if (input === null || input === void 0) return "";
	const str = String(input);
	const persianDigits = [
		"۰",
		"۱",
		"۲",
		"۳",
		"۴",
		"۵",
		"۶",
		"۷",
		"۸",
		"۹"
	];
	return str.replace(/[0-9]/g, (w) => persianDigits[+w]);
}
/**
* Format currency amount to Tomans with thousands separator.
*/
function formatPrice(amount, unit = "تومان") {
	if (amount === null || amount === void 0) return "۰ " + unit;
	return `${new Intl.NumberFormat("fa-IR").format(amount)} ${unit}`;
}
/**
* Format Gregorian date to Jalali date string.
*/
function formatJalaliDate(dateInput, options = {}) {
	if (!dateInput) return "-";
	try {
		const date = new Date(dateInput);
		if (isNaN(date.getTime())) return "-";
		const defaultOptions = {
			calendar: "persian",
			year: "numeric",
			month: "long",
			day: "numeric",
			...options
		};
		return new Intl.DateTimeFormat("fa-IR-u-ca-persian", defaultOptions).format(date);
	} catch (e) {
		return String(dateInput);
	}
}
/**
* Format date with time.
*/
function formatJalaliDateTime(dateInput) {
	return formatJalaliDate(dateInput, {
		hour: "2-digit",
		minute: "2-digit"
	});
}
//#endregion
export { toPersianDigits as i, formatJalaliDateTime as n, formatPrice as r, formatJalaliDate as t };
