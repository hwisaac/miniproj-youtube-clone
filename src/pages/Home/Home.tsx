import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';
import { resourceLimits } from 'worker_threads';
=======
>>>>>>> 061d8612f045945e6be2f53fde3b8542890a766e

const Home = () => {
	const { isLoading, data: result } = useQuery<ISearch>(['search', 'beautiful'], () => youtube.search('beautiful'));

<<<<<<< HEAD
	return (
		<main>
			<Container>
				{!isLoading &&
					result.items.map((video, index) => (
						<div key={`${index}${video.id.videoId}`}>
							<VideoLink to={`/${video.id.videoId}`} key={video.id.videoId}>
								<VideoContainer video={video} />
							</VideoLink>
						</div>
					))}
=======
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
			<Container className="video-container">
				{videos.map((video, index) => (
					<div className="video-element" key={`${index}${video.id.videoId}`}>
						<VideoLink to={'/' + video.id.videoId} key={video.id.videoId} className="video-element">
							{video ? <VideoContainer video={video} /> : null}
						</VideoLink>
					</div>
				))}
>>>>>>> 061d8612f045945e6be2f53fde3b8542890a766e
			</Container>
		</main>
	);
};

const Container = styled.div`
	min-width: 800px;
	top: 60px;
	left: 80px;
	position: absolute;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
	gap: 1rem;
	color: white;
`;
const VideoLink = styled(Link)`
	text-decoration: none;
	max-height: 360px;
	padding: 1rem;
	color: #fff;
	font-size: 14px;
	letter-spacing: 0.2px;
	justify-items: center;
`;

export default Home;
