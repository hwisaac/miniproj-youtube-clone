import React, { useState } from 'react';
import styled from 'styled-components';
import videoData from '../mockup/video.json';

function ab(x: IVideo) {}

const VideoInfoBox = () => {
	const [detail, setDetail] = useState<IItem>(videoData.items[0]);

	return (
		<Wrapper>
			<Title>Title:{detail.snippet.title}</Title>
			<Row>
				<Channel>
					<ChannelTitle>{detail.snippet.channelTitle}</ChannelTitle>
				</Channel>

				<Btns>
					<Btn>1만</Btn>
					<Btn>공유</Btn>
					<Btn>오프라인 저장</Btn>
					<Btn>클립</Btn>
					<Btn>저장</Btn>
					<Btn>...</Btn>
				</Btns>
			</Row>
			<DescriptionBox>
				<Description>{detail.snippet.description}</Description>
				<Tags>
					{detail.snippet.tags.map((tag) => (
						<li>{tag}</li>
					))}
				</Tags>
			</DescriptionBox>
			<Views>View: {detail.statistics.viewCount}</Views>
			<PublishedAt>Published: {detail.snippet.publishedAt}</PublishedAt>
		</Wrapper>
	);
};

export default VideoInfoBox;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	background-color: yellow;
	height: 400px;
`;

const Title = styled.h1``;
const DescriptionBox = styled.div`
	background-color: #f2f2f2;
	padding: 10px;
	border-radius: 10px;
	white-space: pre-wrap;
`;
const Description = styled.p``;
const ChannelTitle = styled.span``;
const Tags = styled.ul`
	display: flex;
	li {
		border: 1px solid blue;
	}
`;

const Views = styled.span``;
const PublishedAt = styled.span``;

const Btns = styled.div`
	border: 1px solid white;
`;
const Btn = styled.button`
	border: none;
	background-color: #eee;
	font-size: 16px;
	margin: 0 3px;
	border-radius: 20px;
	padding: 5px 10px;
	cursor: pointer;
	&:hover {
		background-color: #ccc;
	}
`;
const Channel = styled.div`
	border: 2px dotted green;
`;
const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Thumbnail = styled.img``;
