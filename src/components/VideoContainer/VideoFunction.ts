import { formatDistanceToNowStrict } from 'date-fns';

export const formatDuration = (duration) => {
	let arr = duration.split('');
	let output = '';
	for (let i = 0; i < arr.length; i++) {
		if (!isNaN(arr[i])) {
			output += arr[i];
		} else if (isNaN(arr[i]) && !isNaN(arr[i + 1]) && !isNaN(arr[i - 1])) {
			output += ':';
		}
	}
	return output;
};

export const formatDate = (date) => {
	const today = new Date(date);
	return formatDistanceToNowStrict(today);
};

export const formatView = (view) => {
	if (view >= 1000000000) {
		return (view / 1000000000).toFixed(0) + 'G';
	}
	if (view >= 1000000) {
		return (view / 1000000).toFixed(0) + 'M';
	}
	if (view >= 1000) {
		return (view / 1000).toFixed(0) + 'K';
	}
	return view;
};
