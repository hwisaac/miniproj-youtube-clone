import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import { useQuery } from '@tanstack/react-query';
import { resourceLimits } from 'worker_threads';

const Home = () => {
	const { toggleSNB } = useOutletContext<any>();
	const { isLoading, data: result } = useQuery<ISearch>(['search', 'beautiful'], () => youtube.search('beautiful'));

	return (
		<main>
			<Container toggleSNB={toggleSNB}>
				{!isLoading &&
					result.items.map((video, index) => (
						<div key={`${index}${video.id.videoId}`}>
							<VideoLink to={`/${video.id.videoId}`} key={video.id.videoId}>
								<VideoContainer video={video} />
							</VideoLink>
						</div>
					))}
			</Container>
		</main>
	);
};

const Container = styled.div<{ toggleSNB: boolean }>`
	min-width: ${(props) => (props.toggleSNB ? '700px' : '800px')};
	top: 60px;
	left: ${(props) => (props.toggleSNB ? '250px' : '90px')};
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
