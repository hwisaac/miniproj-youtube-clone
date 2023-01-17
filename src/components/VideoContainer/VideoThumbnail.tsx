import React from 'react';
import styled from 'styled-components';

const VideoThumbnail = ({ video }) => {
	return (
		<div>
			<Wrap className={video.id.videoId}>
				<div className="video-thumbnail">
					<img
						key={video.id.videoId}
						className="thumbnail"
						src={video.snippet.thumbnails.medium.url}
						alt={video.snippet.title}
						// onClick={() => handleClick(video)}
					/>
				</div>
			</Wrap>
		</div>
	);
};

const Wrap = styled.a`
	width: 100%;
	height: 100%;
	padding: 1rem;
	justify-content: center;
	.video-thumbnail {
		width: 100%;
	}
	img {
		width: 100%;
		height: 100%;
	}
`;

export default VideoThumbnail;
