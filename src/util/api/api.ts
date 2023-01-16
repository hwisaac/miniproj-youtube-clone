import axios from 'axios';

const baseURL = 'https://youtube.googleapis.com/youtube/v3';

interface IParams {
	keyword: string;
}
export default class Youtube {
	client;
	constructor() {
		this.client = axios.create({
			baseURL,
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}

	async search(input: string) {
		return this.client.get('search', {
			part: 'snippet',
			maxResults: 10,
			q: input,
		});
	}
	async video(params: IParams) {
		return this.client.get('video', params);
	}
}

export const searchTest = async (input) => {
	console.log('apikey', process.env.REACT_APP_YOUTUBE_API_KEY);
	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
	);
	const json = await res.json();
	console.log('searchTest', json);

	return json;
};

export const axiosSearchTest = async (input: string) => {
	const json = await axios.get(
		baseURL + `/search?part=snippet&maxResults=10&q=${input}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
	);
	console.log('axiosSearchTest', json);
	return json;
};
