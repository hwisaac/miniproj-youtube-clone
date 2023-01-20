import { formatDistanceToNowStrict } from 'date-fns';

export const formatDate = (date) => {
	const today = new Date(date);
	return formatDistanceToNowStrict(today);
};

export const formatView = (view) => {
	if (view >= 1000000000) {
		return (view / 1000000000).toFixed(0) + 'B';
	}
	if (view >= 1000000) {
		return (view / 1000000).toFixed(0) + 'M';
	}
	if (view >= 1000) {
		return (view / 1000).toFixed(0) + 'K';
	}
	return view;
};
