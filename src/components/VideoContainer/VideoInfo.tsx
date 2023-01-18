import styled from 'styled-components';
import { formatView } from './VideoFunction';
import { formatDate } from './VideoFunction';

const VideoInfo = ({ video, videoInfo }) => {
	let date = video.snippet.publishedAt;
	let view = videoInfo.statistics.viewCount;

	return (
		<Container>
			<div className="info-container">
				<div className="channel">
					<img src={video.snippet.thumbnails.medium.url} className="channel-thumbnail" alt={video.snippet.title} />
				</div>
				<div className="text-info">
					<h3 className="title">{video.snippet.title}</h3>
					<div className="detail-info">
						<div className="channel">
							<div className="channelName">{video.snippet.channelTitle}</div>
						</div>
						<div className="detail-data">
							<span>{formatView(view)}</span>
							<span className="dot"> • </span>
							<span>{formatDate(date)}</span>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	.info-container {
		display: flex;
	}
	.channel {
		margin-right: 1rem;
	}
	.channel-thumbnail {
		width: 35px;
		height: 35px;

		border-radius: 50%;
	}
`;

export default VideoInfo;
