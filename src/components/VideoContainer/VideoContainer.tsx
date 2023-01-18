import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';
import videoInfoJson from '../../mockup/videoinfo-ex.json';
import searchJson from '../../mockup/search-beutifulplace.json';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
	// const [videos, setVideos] = useState([]);
	// const [videoInfo, setVideoInfo] = useState([]);
	// 검색데이터 get
	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// const fetchData = async () => {
	// 	const response = await axios.get(requests.fetchSearchVideo, {
	// 		params: {
	// 			q: 'beautiful place',
	// 		},
	// 	});
	// 	setVideos(response.data.items);
	// };
	//비디오 상세정보 get
	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// const fetchData = async () => {
	// 	const response = await axios.get(requests.fetchInfoVideo, {
	// 		params: {
	// 			id: `${video.id.videoId}`,
	// 		},
	// 	});
	// 	setVideoInfo(response.data.items[0]);
	// };

	let videoInfo = videoInfoJson.data.items[0];
	let videos = searchJson.data.items;

	return (
		<Container className="video-container">
			{videos.map((video) => (
				<div className="video-element">
					<VideoLink to="" key={video.id.videoId}>
						<VideoThumbnail video={video} videoInfo={videoInfo} />
						<VideoInfo video={video} videoInfo={videoInfo} />
					</VideoLink>
				</div>
			))}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	top: 60px;
	left: 80px;
	position: absolute;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
	gap: 1rem;
	background-color: #181818;
	color: white;
	z-index: -1;

	.video-element {
		max-height: 360px;
		padding: 1rem;
		color: #fff;
		font-size: 14px;
		letter-spacing: 0.2px;
		justify-items: center;
	}
`;

const VideoLink = styled(Link)`
	color: white;
	text-decoration: none;
	width: 100%;
	height: 100%;
`;

export default VideoContainer;
