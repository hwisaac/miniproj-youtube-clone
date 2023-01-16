interface ImportMetaEnv {
	readonly VITE_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

interface IThumbnail {
	url: string;
	width: number;
	height: number;
}

// video
interface ISnippet {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: { default: IThumbnail; high: IThumbnail; standard: IThumbnail; maxres: IThumbnail };
	channelTitle: string;
	tags: string[];
	categoryId: string;
	defaultLanguage: string;
	localized: { title: string; description: string };
}

interface IItem {
	kind: string;
	etag: string;
	id: string;
	snippet: ISnippet;
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
