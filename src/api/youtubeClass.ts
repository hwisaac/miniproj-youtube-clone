import mockupSearch from '../mockup/search.json';
import mockupComment from '../mockup/comment.json';
import mockupVideo from '../mockup/video.json';
import mockupChannel from '../mockup/channel.json';
import mockupRelated from '../mockup/relatedVideo.json';
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
		console.log('Fetching: search:', query);
		return this.axiosClient
			.get(`/search?part=snippet&maxResults=10&q=${query}`)
			.then((result) => result.data)
			.catch((error) => {
				console.log('search에러발생', error);
				return mockupSearch;
			});
	}
	async searchByToken({ query, pageToken }) {
		console.log('Fetching: search:', query, pageToken);
		return this.axiosClient
			.get(`/search?part=snippet&maxResults=10&pageToken=${pageToken}&q=${query}`)
			.then((result) => result.data)
			.catch((error) => {
				console.log('searchByTOken에러발생', error);
				return mockupSearch;
			});
	}

	async video(videoId: string) {
		// console.log('Fetching: videoId', videoId);
		return this.axiosClient
			.get('/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=' + videoId)
			.then((result) => result.data)
			.catch((error) => {
				console.log('video에러발생', error);
				return mockupVideo;
			});
	}

	async channel(channelId: string) {
		// console.log('Fetching: channelId', channelId);
		return this.axiosClient
			.get(`/channels?part=snippet&part=statistics&part=contentDetails&id=${channelId}`)
			.then((result) => result.data)
			.catch((error) => {
				console.log('channel에러발생', error);
				return mockupChannel;
			});
	}

	async comment(videoId: string) {
		// console.log(`패칭: comment(${videoId})`);
		return this.axiosClient
			.get(`/commentThreads?part=snippet&videoId=${videoId}`)
			.then((result) => result.data)
			.catch((error) => {
				console.log('에러발생', error);
				return mockupComment;
			});
	}

	async commentByToken({ videoId, pageToken }) {
		// console.log(`패칭: commentByToken({${videoId},${pageToken}})`);
		return this.axiosClient
			.get(`/commentThreads?part=snippet&pageToken=${pageToken}&videoId=${videoId}&`)
			.then((result) => result.data)
			.catch((error) => {
				console.log('에러발생', error);
				return mockupComment;
			});
	}

	async related(videoId: string) {
		console.log('Fetching: videoId', videoId);
		return this.axiosClient
			.get(`/search?part=snippet&maxResults=10&type=video&relatedToVideoId=${videoId}`)
			.then((result) => result.data)
			.catch((error) => {
				console.log('에러발생', error);
				return mockupRelated;
			});
	}
}

class FakeYoutube {
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
		return mockupSearch;
	}
	async searchByToken({ query, pageToken }) {
		console.log('Fetching: search:', query);
		return mockupSearch;
	}

	async video(videoId: string) {
		return mockupVideo;
	}

	async channel(channelId: string) {
		return mockupChannel;
	}

	async comment(videoId: string) {
		// console.log(`패칭: comment(${videoId})`);
		return mockupComment;
	}

	async commentByToken({ videoId, pageToken }) {
		// console.log(`패칭: commentByToken({${videoId},${pageToken}})`);
		return mockupComment;
	}

	async related(videoId: string) {
		return mockupRelated;
	}
}
const youtube = new Youtube();
// const youtube = new FakeYoutube();

export default youtube;
