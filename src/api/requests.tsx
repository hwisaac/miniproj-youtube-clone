const requests = {
	fetchSearchVideo: '/search?part=snippet&maxResults=10&q={검색어}',
	fetchInfoVideo: '/videos?part=snippet&part=contentDetails&part=player&part=statistics&id={videoId}',
	fetchInfoChannel: '/channels?part=snippet&part=statistics&part=contentDetails&id={channelId}',
	fetchComment: '/commentThreads?part=snippet&videoId={videoId}',
	fetchRelatedVideo: '/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video',
};

export default requests;