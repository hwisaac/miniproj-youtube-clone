const requests = {
	fetchSearchVideo: '/search?part=snippet&maxResults=10&q=',
	fetchInfoVideo: '/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=',
	fetchInfoChannel: '/channels?part=snippet&part=statistics&part=contentDetails&id=',
	fetchComment: '/commentThreads?part=snippet&videoId=',
	fetchRelatedVideo: '/search?part=snippet&maxResults=10&type=video&relatedToVideoId=',
};

export default requests;
