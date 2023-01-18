import React, { useState } from 'react';
import styled from 'styled-components';
import videoData from '../../../mockup/video.json';
import {
	FiThumbsUp,
	FiThumbsDown,
	FiShare2,
	FiDownload,
	FiScissors,
	FiAlignLeft,
	FiMoreHorizontal,
} from 'react-icons/fi';

function ab(x: IVideo) {}

const VideoInfoBox = ({ videoInfoData }) => {
	const [detail, setDetail] = useState<IItem>(videoData.items[0]);
	const [isBrief, setIsBrief] = useState<boolean>(false);

	return (
		<Wrapper>
			<Title>{detail.snippet.title}</Title>
			<Row>
				<Channel>
					<ChannelProfile />
					<div>
						<ChannelTitle>{detail.snippet.channelTitle}</ChannelTitle>
						<ChannelSubscribes>구독자 48.1만명</ChannelSubscribes>
					</div>
					<SubscribeBtn>구독</SubscribeBtn>
				</Channel>

				<Btns>
					<ThumbsBtn>
						<div>
							<FiThumbsUp />
							{detail.statistics.likeCount} 명
						</div>
						<div>
							<FiThumbsDown />
						</div>
					</ThumbsBtn>
					<Btn>
						<FiShare2 /> 공유
					</Btn>
					<Btn>
						<FiDownload />
						오프라인 저장
					</Btn>
					<Btn>
						<FiScissors />
						클립
					</Btn>
					<Btn>
						<FiAlignLeft />
						저장
					</Btn>
					<Btn>
						<FiMoreHorizontal />
					</Btn>
				</Btns>
			</Row>
			<DescriptionBox>
				<HeaderInfo>
					<span>조회수 {Number(detail.statistics.viewCount).toLocaleString()}회</span>
					<span>{detail.snippet.publishedAt}</span>
				</HeaderInfo>
				<Description>{detail.snippet.description}</Description>
				<Tags>
					{detail.snippet.tags.map((tag, index) => (
						<li key={`${tag}-${index}`}>#{tag}</li>
					))}
				</Tags>
				<Brifly onClick={() => setIsBrief(!isBrief)}>{isBrief ? '더보기' : '간략히'}</Brifly>
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
	background-color: #0e0e0e;
	height: auto;
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: 25px;
	margin: 10px 0;
	color: white;
`;
const DescriptionBox = styled.div`
	background-color: #303030;
	color: white;
	padding: 20px 20px;
	border-radius: 10px;
	white-space: pre-wrap;
`;
const HeaderInfo = styled.div`
	display: flex;
	gap: 10px;
	margin-bottom: 5px;
`;
const Description = styled.p``;
const Channel = styled.div`
	display: flex;
	align-items: center;
	div {
		display: flex;
		flex-direction: column;
	}
`;
const ChannelProfile = styled.div`
	border: 1px solid red;
	width: 30px;
	height: 30px;
	margin-right: 15px;
	border-radius: 100%;
`;
const ChannelTitle = styled.span`
	font-size: 18px;
	font-weight: 500;
	color: white;
`;
const SubscribeBtn = styled.button`
	cursor: pointer;
	background-color: white;
	border: none;
	color: black;
	font-weight: 700;
	padding: 10px 15px;
	border-radius: 30px;
	margin-left: 25px;
	&:hover {
		background-color: #d9d9d9;
	}
`;
const ChannelSubscribes = styled.span`
	font-size: 12px;
	color: #6f6f6f;
`;

const Tags = styled.ul`
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
	margin-top: 30px;
	li {
		color: var(--color-light-blue);
		font-weight: 600;
		cursor: pointer;
	}
`;

const Views = styled.span``;
const PublishedAt = styled.span``;

const Btns = styled.div`
	display: flex;
	align-items: center;
`;
const Btn = styled.button`
	border: none;
	background-color: #313030;
	color: white;
	font-size: 16px;
	margin: 0 3px;
	border-radius: 20px;
	padding: 8px 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	cursor: pointer;
	&:hover {
		background-color: #484949;
	}
`;
const ThumbsBtn = styled.div`
	border: none;
	display: flex;
	div {
		border: none;
		background-color: #313030;
		color: white;
		font-size: 16px;
		border-radius: 20px;
		padding: 8px 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		&:hover {
			background-color: #484949;
		}
		&:nth-child(1) {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		&:nth-child(2) {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			position: relative;
		}
		&:nth-child(2):before {
			content: '';
			display: block;
			width: 1px;
			height: 20px;
			background-color: #494949;
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			margin: auto 0;
		}
	}

	cursor: pointer;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;

const Thumbnail = styled.img``;
const Brifly = styled.span`
	cursor: pointer;
	display: flex;
	margin-top: 30px;
`;
