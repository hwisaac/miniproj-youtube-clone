import axios from 'axios';

const { VITE_API_KEY } = import.meta.env;

const instance = axios.create({
	baseURL: 'https://youtube.googleapis.com/youtube/v3',
	params: {
		key: VITE_API_KEY,
	},
});

export default instance;
