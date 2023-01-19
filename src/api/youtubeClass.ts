import axios from 'axios';
let { REACT_APP_YOUTUBE_API_KEY } = process.env;

const baseURL = 'https://youtube.googleapis.com/youtube/v3';

class Youtube {
	axiosClient;

	constructor() {
		this.axiosClient = axios.create({
			baseURL: 'https://youtube.googleapis.com/youtube/v3',
			params: {
				key: REACT_APP_YOUTUBE_API_KEY,
			},
		});
	}

	async search(query: string) {
		console.log('Fetching: search: ', query);
		return this.axiosClient.get('/search?part=snippet&maxResults=10&q=' + query).then((result) => result.data);
	}
	async video(videoId: string) {
		// console.log('Fetching: videoId', videoId);
		return this.axiosClient
			.get('/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=' + videoId)
			.then((result) => result.data);
	}

	async channel(channelId: string) {
		// console.log('Fetching: channelId', channelId);
		return this.axiosClient
			.get('/channels?part=snippet&part=statistics&part=contentDetails&id=' + channelId)
			.then((result) => result.data);
	}
	async comment(videoId: string) {
		// console.log(`패칭: comment(${videoId})`);
		return this.axiosClient.get('/commentThreads?part=snippet&videoId=' + videoId).then((result) => result.data);
	}
	async commentByToken({ videoId, pageToken }) {
		// console.log(`패칭: commentByToken({${videoId},${pageToken}})`);
		return this.axiosClient
			.get(`/commentThreads?part=snippet&pageToken=${pageToken}&videoId=${videoId}&`)
			.then((result) => result.data);
	}

	async related(videoId: string) {
		console.log('Fetching: videoId', videoId);
		return this.axiosClient
			.get('/search?part=snippet&maxResults=10&type=video&relatedToVideoId=' + videoId)
			.then((result) => result.data);
	}
}

const youtube = new Youtube();

export default youtube;
