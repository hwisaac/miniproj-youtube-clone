/*
 *	연관 동영상 렌더링
 * 연관 동영상 API를 호출 후, map을 사용하여 VideoItem 컴포넌트를 렌더링합니다.
 */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import VideoItem from './VideoItem';

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
							return <VideoItem key={`videoItem-${index}`} item={item} />;
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
