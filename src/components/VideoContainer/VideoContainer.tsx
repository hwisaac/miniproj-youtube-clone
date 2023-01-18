import React, { useState, useEffect } from 'react';
// import videoInfoJson from '../../mockup/videoinfo-ex.json';
import axios from '../../api/axios';
import requests from '../../api/requests';
import videoInfoJson from '../../mockup/videoinfo-ex.json';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VideoContainer = ({ video }) => {
	// const [videoInfo, setVideoInfo] = useState([]);
	// let id = video.id.videoId;

	// 비디오 상세정보 get
	// useEffect(() => {
	// 	videoInfoData(id);
	// }, [id]);

	// const videoInfoData = async (id) => {
	// 	const response = await axios.get(requests.fetchInfoVideo, {
	// 		params: {
	// 			id: `${id}`,
	// 		},
	// 	});
	// 	setVideoInfo(response.data.items[0]);
	// };

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
