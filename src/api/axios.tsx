import axios from 'axios';
let { REACT_APP_YOUTUBE_API_KEY } = process.env;

const instance = axios.create({
	baseURL: 'https://youtube.googleapis.com/youtube/v3',
	params: {
		key: `${REACT_APP_YOUTUBE_API_KEY}`,
	},
});

export default instance;
