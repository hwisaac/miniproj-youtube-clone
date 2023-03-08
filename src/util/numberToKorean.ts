const numberToKorean = (number: number | string): string => {
	if (typeof number === 'string') {
		number = Number(number);
	}

	if (number < 0) return;
	let result = number;

	if (number > 9000) {
		return `${(number / 10000).toFixed(1)} 만`;
	} else if (number > 900) {
		return `${(number / 1000).toFixed(1)} 천`;
	}
	return `${result}`;
};

export default numberToKorean;
