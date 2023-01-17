import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';

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

	//목업데이터 사용
	let videos = JSON.parse(localStorage.getItem('response')).data.items;

	return (
		<Container>
			{videos.map((video) => (
				<div className={video.id.videoId}>
					<img
						key={video.id.videoId}
						className="thumbnail"
						src={video.snippet.thumbnails.default.url}
						alt={video.snippet.title}
						// onClick={() => handleClick(video)}
					/>
					<h3>{video.snippet.title}</h3>
				</div>
			))}
		</Container>
	);
};

const Container = styled.a`
	display: grid;
	background-color: #212529;
	color: white;
`;

export default VideoContainer;
