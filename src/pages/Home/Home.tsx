import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
	const [videos, setVideos] = useState([]);
	const { toggleSNB } = useOutletContext<any>();
	useEffect(() => {
		searchData();
	}, []);

	const searchData = async () => {
		let result = await youtube.search('beautiful');
		const items = result.items;
		setVideos(items);
	};

	return (
		<main>
			<Container className="video-container" toggleSNB={toggleSNB}>
				{videos.map((video, index) => (
					<div className="video-element" key={`${index}${video.id.videoId}`}>
						<VideoLink to={'/' + video.id.videoId} key={video.id.videoId} className="video-element">
							{video ? <VideoContainer video={video} /> : null}
						</VideoLink>
					</div>
				))}
			</Container>
		</main>
	);
};

const Container = styled.div<{ toggleSNB: boolean }>`
	min-width: 800px;
	top: 60px;
	left: ${(props) => (props.toggleSNB ? '250px' : '90px')};
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
