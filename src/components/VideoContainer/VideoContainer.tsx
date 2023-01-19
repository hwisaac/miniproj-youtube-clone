import React, { useState, useEffect } from 'react';
import videoInfoJson from '../../mockup/videoinfo-ex.json';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import youtube from '../../api/youtubeClass';

const VideoContainer = ({ video }) => {
	// const [videoInfo, setVideoInfo] = useState([]);

	// 비디오 상세정보 get
	// useEffect(() => {
	// 	videoInfoData();
	// }, []);

	// const videoInfoData = async () => {
	// 	const response = await axios.get(requests.fetchInfoVideo, {
	// 		params: {
	// 			id: `${video.id.videoId}`,
	// 		},
	// 	});
	// 	setVideoInfo(response.data.items[0]);
	// };

	// youtube()

	let videoInfo = videoInfoJson.data.items[0];
	if (video.id.kind === 'youtube#video') {
		return (
			<>
				<VideoThumbnail video={video} videoInfo={videoInfo} />
				<VideoInfo video={video} videoInfo={videoInfo} />
			</>
		);
	} else if (video.id.kind === 'youtube#channel') {
		return (
			<div className="channel-element">
				<div className="channel-thumbnail">
					<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
				</div>
				<div className="channel-textInfo">
					<h5 className="channel">{video.snippet.title}</h5>
				</div>
			</div>
		);
	}
};

export default VideoContainer;
