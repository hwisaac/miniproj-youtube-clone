import axios from '../../api/axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import requests from '../../api/requests';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Search = () => {
	const [videos, setVideos] = useState([]);
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let query = useQuery();
	const searchTerm = query.get('q');
	useEffect(() => {
		if (searchTerm) {
			searchData(searchTerm);
		}
	}, [searchTerm]);

	const searchData = async (searchTerm) => {
		try {
			const response = await axios.get(requests.fetchSearchVideo, {
				params: {
					q: `${searchTerm}`,
				},
			});
			setVideos(response.data.items);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Main>
			<Container>
				{videos.map((video) => (
					<div className="search-element">
						<VideoLink
							to={'/' + (video.id.videoId && video.snippet.channelTitle)}
							key={video.id.videoId}
							className="video-element"
						>
							<VideoContainer video={video} />
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
	background-color: #181818;
	width: 100%;
	top: 60px;
	left: 80px;
	position: absolute;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	color: white;
	z-index: -1;

	.search-element {
		max-height: 360px;
		padding: 1rem;
		color: #fff;
		font-size: 14px;
		letter-spacing: 0.2px;
		justify-items: center;
	}
`;
const VideoLink = styled(Link)`
	display: flex;
	color: white;
	text-decoration: none;
	width: 100%;
	height: 100%;
`;

export default Search;
