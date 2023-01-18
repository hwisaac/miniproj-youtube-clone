import React from 'react';
import styled from 'styled-components';
import relatedVideo from '../../mockup/relatedVideo.json';
import VideoItem from './VideoItem';

const data = relatedVideo.items;
const Recommend = () => {
	return (
		<Container>
			<VideosUl>
				{data.map((item, index) => {
					return <VideoItem key={`videoItem-${index}`} item={item.snippet} />;
				})}
			</VideosUl>
		</Container>
	);
};

const Container = styled.div`
	padding: 20px 0px 0px 40px;
`;

const VideosUl = styled.ul``;

export default Recommend;
