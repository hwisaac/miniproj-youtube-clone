import React, { useState } from 'react';
import styled from 'styled-components';
import videoData from '../mockup/video.json';

function ab(x: IVideo) {}

const VideoInfoBox = () => {
	const [detail, setDetail] = useState<IItem>(videoData.items[0]);

	return (
		<Wrapper>
			<Title>Title:{detail.snippet.title}</Title>
			<Description>{detail.snippet.description}</Description>
			<ChannelTitle>Channel:{detail.snippet.channelTitle}</ChannelTitle>
			<Tags>
				{detail.snippet.tags.map((tag) => (
					<li>{tag}</li>
				))}
			</Tags>
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
	background-color: gray;
	height: 400px;
`;

const Title = styled.h1``;

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
