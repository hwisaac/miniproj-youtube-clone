// video

interface IThumbnail {
	url: string;
	width: number;
	height: number;
}
interface IVideoItem {
	kind: string;
	etag: string;
	id: string;
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: IThumbnail;
			high: IThumbnail;
			standard: IThumbnail;
			maxres: IThumbnail;
		};
		channelTitle: string;
		tags: string[];
		categoryId: string;
		defaultLanguage: string;
		localized: { title: string; description: string };
	};
	contentDetails: {
		duration: string;
		dimension: string;
		definition: string;
		caption: string;
		licensedContent: boolean;
		contentRating: any;
		projection: string;
	};
	statistics: {
		viewCount: string;
		likeCount: string;
		favoriteCount: string;
		commentCount: string;
	};
	player: { embedHtml: string };
}

interface IVideo {
	kind: string;
	etag: string;
	items: IVideoItem[];
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
}

// comment
interface ICommentItem {
	kind: string;
	etag: string;
	id: string;
	snippet: {
		videoId: string;
		topLevelComment: {
			kind: string;
			etag: string;
			id: string;
			snippet: {
				videoId: string;
				textDisplay: string;
				textOriginal: string;
				authorDisplayName: string;
				authorProfileImageUrl: string;
				authorChannelUrl: string;
				authorChannelId: { value: string };
				canRate: boolean;
				viewerRating: string;
				likeCount: number;
				publishedAt: string;
				updatedAt: string;
			};
		};
		canReply: boolean;
		totalReplyCount: number;
		isPublic: boolean;
	};
}
interface IComments {
	kind: string;
	etag: string;
	nextPageToken: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: ICommentItem[];
}

// channel
interface IChannelItem {
	kind: string;
	etag: string;
	id: string;
	snippet: {
		title: string;
		description: string;
		customUrl: string;
		publishedAt: string;
		thumbnails: {
			default: IThumbnail;
			high: IThumbnail;
			medium: IThumbnail;
		};
		localized: {
			title: string;
			description: string;
		};
		country: string;
	};
	contentDetails: {
		relatedPlaylists: {
			likes: string;
			uploads: string;
		};
	};
	statistics: {
		viewCount: string;
		subscriberCount: string;
		hiddenSubscriberCount: boolean;
		videoCount: string;
	};
}
interface IChannel {
	kind: string;
	etag: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: IChannelItem[];
}

// search
interface ISearchItem {
	kind: string;
	etag: string;
	id: {
		kind: string;
		channelId?: string;
		videoId?: string;
	};
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: { url: string };
			high: { url: string };
			medium: { url: string };
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: string;
	};
}

interface ISearch {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: ISearchItem[];
}

// related videos

interface IRelatedVideosItem {
	kind: string;
	etag: string;
	id: {
		kind: string;
		videoId: string;
	};
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: IThumbnail;
			medium: IThumbnail;
			high: IThumbnail;
			standard: IThumbnail;
			maxres: IThumbnail;
		};
		channelTitle: string;
		liveBroadcastContent: string;
		publishTime: string;
	};
}

interface IRelatedVideos {
	kind: string;
	etag: string;
	items: IRelatedVideosItem[];
}

// VideoContainer
interface IVideoBrief {
	title: string;
	views: string;
	publishedAt: string;
	duration: string;
	thumbnail: string;
	channelTitle: string;
	isLoading: boolean;
}

interface IChannelBrief {
	customUrl: string;
	subscriber: string;
	description: string;
	thumbnail: string;
	title: string;
	isLoading: boolean;
}
