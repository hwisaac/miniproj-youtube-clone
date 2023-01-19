import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import relatedVideo from '../../mockup/relatedVideo.json';
import VideoItem from './VideoItem';

const data = relatedVideo.items;
const Recommend = () => {
	const location = useLocation();
	const [videoId, setVideoId] = useState(location.pathname.replace('/', ''));
	const [data, setData] = useState([]);

	const fetchData = async (id) => {
		const newData = await youtube.related(id);
		const items = newData.items;
		setData(items);
	};

	useEffect(() => {
		const newId = location.pathname.replace('/', '');
		setVideoId(newId);
		fetchData(newId);
	}, [location.pathname]);

	return (
		<Container>
			<VideosUl>
				{data.length > 0
					? data.map((item, index) => {
							return <VideoItem key={`videoItem-${index}`} item={item} itemDetail={item} />;
					  })
					: ''}
			</VideosUl>
		</Container>
	);
};

const Container = styled.div`
	padding: 20px 0px 0px 40px;
`;

const VideosUl = styled.ul``;

export default Recommend;
