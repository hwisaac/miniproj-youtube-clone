import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import { formatDuration } from './VideoFunction';

const VideoThumbnail = ({ video }) => {
	const [details, setDetails] = useState({
		duration: '',
	});

	const fetchStaticsData = async (id) => {
		const newData = await youtube.video(id);
		setDetails({
			duration: formatDuration(newData.items[0].statistics.duration),
		});
	};

	useEffect(() => {
		fetchStaticsData(video.id.videoId);
	}, []);

	return (
		<Wrap className="video-thumbnail">
			<img
				key={video.id.videoId}
				className="thumbnail"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="duration">
				<span>{details.duration}</span>
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
