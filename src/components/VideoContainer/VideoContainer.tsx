import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';

const VideoContainer = () => {
	// const [videos, setVideos] = useState([]);
	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// const fetchData = async () => {
	// 	const response = await axios.get(requests.fetchSearchVideo, {
	// 		params: {
	// 			q: 'beautiful place',
	// 		},
	// 	});
	// 	console.log(response);
	// 	setVideos(response.data.items);
	// };

	// const handleClick = (video) => {};

	//로컬스토리지 사용

	let videos = JSON.parse(localStorage.getItem('response')).data.items;

	return (
		<Container>
			{videos.map((video) => (
				<Box>
					<VideoThumbnail video={video} />
					<VideoInfo video={video} />
				</Box>
			))}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
	background-color: #181818;
	color: white;
`;

const Box = styled.a`
	width: 100%;
`;

export default VideoContainer;
