interface ImportMetaEnv {
	readonly VITE_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// video

interface IThumbnail {
	url: string;
	width: number;
	height: number;
}
interface IItem {
	kind: string;
	etag: string;
	id: string;
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
			standard: {
				url: string;
				width: number;
				height: number;
			};
			maxres: {
				url: string;
				width: number;
				height: number;
			};
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
	items: IItem[];
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
