import React, { useState, useEffect } from 'react';
import videoInfoJson from '../../mockup/videoinfo-ex.json';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import youtube from '../../api/youtubeClass';

const VideoContainer = ({ video }) => {
	// let videoInfo = videoInfoJson.data.items[0];
	const [videoInfo, setVideoInfo] = useState([]);

	// 비디오 상세정보 get
	useEffect(() => {
		videoInfoData(video.id.videoId);
	}, [video.id.videoId]);

	const videoInfoData = async (Id) => {
		const data = await youtube.video(Id);
		const item = data.items[0];
		setVideoInfo(item);
	};

	if (video.id.kind === 'youtube#video') {
		return (
			<>
				{video ? (
					<>
						<VideoThumbnail video={video} />
						<VideoInfo video={video} />
					</>
				) : null}
			</>
		);
	} else if (video.id.kind === 'youtube#channel') {
		return (
			<Channel className="channel-element">
				<div className="channel-thumbnail">
					<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
				</div>
				<div className="channel-textInfo">
					<h5 className="channel">{video.snippet.title}</h5>
				</div>
			</Channel>
		);
	}
};

const Channel = styled.div`
	display: flex;
	justify-content: space-between;
	img {
		border-radius: 50%;
		margin-right: 50px;
	}
`;

export default VideoContainer;
