import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import searchJson from '../../mockup/search-beutifulplace.json';

const Home = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		searchData();
	}, []);

	const searchData = async () => {
		let result = await youtube.search('beautiful');
		const items = result.items;
		setVideos(items);
	};
	return (
		<Main>
			<Container className="video-container">
				{videos.map((video) => (
					<div className="video-element" key={video.id.videoId}>
						<VideoLink to={'/' + video.id.videoId} key={video.id.videoId} className="video-element">
							{video ? <VideoContainer video={video} /> : null}
						</VideoLink>
					</div>
				))}
			</Container>
		</Main>
	);
};

const Main = styled.main`
	grid-area: main;
`;
const Container = styled.div`
	width: 100%;
	top: 60px;
	left: 80px;
	position: absolute;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
	gap: 1rem;
	color: white;

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
	color: inherit;
	text-decoration: none;
`;

export default Home;
