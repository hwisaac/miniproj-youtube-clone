import axios from '../../api/axios';
import requests from '../../api/requests';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import videoInfoEX from '../../mockup/videoinfo-ex.json';
import { Link } from 'react-router-dom';

const VideoInfo = ({ video }) => {
	// const [videoInfo, setVideoInfo] = useState([]);
	// useEffect(() => {
	//   fetchData();
	// }, []);
	// const fetchData = async () => {
	// 	const response = await axios.get(requests.fetchInfoVideo, {
	// 		params: {
	// 			id: `${video.id.videoId}`,
	// 		},
	// 	});
	// 	setVideoInfo(response.data.items);
	// };

	//로컬스토리지
	// let videoInfo = JSON.parse(localStorage.getItem('response-videoInfo')).data.items[0];
	let videoInfo = videoInfoEX.data.items[0];
	let viewCount = videoInfo.statistics.viewCount;

	return (
		<Container>
			<div>
				<div className="channel">
					<img src={video.snippet.thumbnails.medium.url} className="channel-thumbnail" />
				</div>
				<div className="text-info">
					<h3 className="title">{video.snippet.title}</h3>
					<div className="detail-info">
						<Link to="">
							<div className="channelName">{video.snippet.channelTitle}</div>
						</Link>
						<div className="detail-data">
							<span>{viewCount}</span>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	.channel-thumbnail {
		width: 35px;
		height: 35px;
		margin: 1.2rem 1.2rem 0 0;
		border-radius: 50%;
	}
`;

export default VideoInfo;
