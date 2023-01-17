import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoItem = ({ item }) => {
	return (
		<li key={item.channelId}>
			<Linker to={'/' + item.channelId}>
				<ImgWrap>
					<img src={item.thumbnails.medium.url} alt="thumb-img" />
				</ImgWrap>
				<DetailWrap>
					<Title>{item.title}</Title>
					<ChannelTitle>{item.channelTitle}</ChannelTitle>
					<SubSpan>1M views • 8 months</SubSpan>
				</DetailWrap>
			</Linker>
		</li>
	);
};

const Linker = styled(Link)`
	display: flex;
	align-items: flex-start;
	text-decoration: none;
	margin: 10px 0;
`;

const ImgWrap = styled.div`
	width: 40%;
	img {
		display: block;
		width: 100%;
		overflow: hidden;
		border-radius: 10px;
	}
`;

const DetailWrap = styled.div`
	width: 60%;
	padding: 3px 10px;
`;

const Title = styled.p`
	color: white;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	margin-bottom: 5px;
`;

const ChannelTitle = styled.p`
	color: #aaaaaa;
	font-size: 12px;
`;

const SubSpan = styled.span`
	color: #aaaaaa;
	font-size: 12px;
`;
export default VideoItem;
