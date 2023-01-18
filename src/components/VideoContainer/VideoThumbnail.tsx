import React from 'react';
import styled from 'styled-components';

const VideoThumbnail = ({ video, videoInfo }) => {
	let time = videoInfo.contentDetails.duration;
	const formatDuration = (duration) => {
		let arr = duration.split('');
		let output = '';
		for (let i = 0; i < arr.length; i++) {
			if (!isNaN(arr[i])) {
				output += arr[i];
			} else if (isNaN(arr[i]) && !isNaN(arr[i + 1]) && !isNaN(arr[i - 1])) {
				output += ':';
			}
		}
		return output;
	};

	return (
		<Wrap className="video-thumbnail">
			<img
				key={video.id.videoId}
				className="thumbnail"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
				// onClick={() => handleClick(video)}
			/>
			<div className="duration">
				<span>{formatDuration(time)}</span>
			</div>
		</Wrap>
	);
};

const Wrap = styled.div`
	width: 100%;
	max-height: 62%;
	overflow: hidden;
	object-position: bottom;
	position: relative;

	img {
		width: 100%;
		height: 100%;
	}
	.duration {
		padding: 3px 4px;
		background-color: #000c;
		position: absolute;
		bottom: 2px;
		right: 2px;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default VideoThumbnail;
