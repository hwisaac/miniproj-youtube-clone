/**
 * 상세설명 컴포넌트입니다.
 */
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
import { formatDistanceToNowStrict } from 'date-fns';
import youtube from '../../../api/youtubeClass';
import { useQuery } from '@tanstack/react-query';
import numberToKorean from '../../../util/numberToKorean';

const VideoDetailBox = ({ videoInfoData }) => {
	const [detail, setDetail] = useState<IVideoItem>(videoInfoData.items[0]);
	const [isBrief, setIsBrief] = useState<boolean>(true);

	const channelId = videoInfoData.items[0].snippet.channelId;
	const handleDescriptionBox = () => {
		if (isBrief) {
			setIsBrief((prev) => !prev);
		}
	};
	// useQuery: [채널 정보] fetching
	const { isLoading: isLoadingChannelData, data: channelData } = useQuery<IChannel>(['channel', channelId], () =>
		youtube.channel(channelId)
	);
	const channelThumbnail = channelData?.items[0].snippet.thumbnails.default.url;
	const subscriberCount = channelData?.items[0].statistics.subscriberCount;

	return (
		<Wrapper>
			<Title>{detail.snippet.title}</Title>
			<Row>
				<Channel>
					<ChannelProfile src={channelThumbnail} />
					<div>
						<ChannelTitle>{detail.snippet.channelTitle}</ChannelTitle>
						<ChannelSubscribes>구독자 {numberToKorean(subscriberCount)}명</ChannelSubscribes>
					</div>
					<SubscribeBtn>구독</SubscribeBtn>
				</Channel>

				<Btns>
					<ThumbsBtn>
						<div>
							<FiThumbsUp />
							<span>{Number(detail.statistics.likeCount).toLocaleString()} 명</span>
						</div>
						<div>
							<FiThumbsDown />
						</div>
					</ThumbsBtn>
					<Btn>
						<FiShare2 />
						<span>공유</span>
					</Btn>
					<Btn>
						<FiDownload />
						<span>오프라인 저장</span>
					</Btn>
					<Btn>
						<FiScissors />
						<span>클립</span>
					</Btn>
					<Btn>
						<FiAlignLeft />
						<span>저장</span>
					</Btn>
					<Btn>
						<FiMoreHorizontal />
					</Btn>
				</Btns>
			</Row>
			<DescriptionBox isBrief={isBrief} onClick={handleDescriptionBox}>
				<HeaderInfo>
					<Views>조회수 {Number(detail.statistics.viewCount).toLocaleString()}회</Views>

					<PublishedAt>{formatDistanceToNowStrict(new Date(detail.snippet.publishedAt))} ago</PublishedAt>

					{isBrief && (
						<BriefTags>
							{detail?.snippet?.tags?.map((tag, index) => (
								<span key={`${tag}-${index}`}>#{tag}</span>
							))}
						</BriefTags>
					)}
				</HeaderInfo>
				<Description isBrief={isBrief}>{detail.snippet.description}</Description>
				<Tags>
					{detail?.snippet?.tags?.map((tag, index) => (
						<li key={`${tag}-${index}`}>#{tag}</li>
					))}
				</Tags>
				<Brifly onClick={() => setIsBrief(!isBrief)}>{isBrief ? '더보기' : '간략히'}</Brifly>
			</DescriptionBox>
		</Wrapper>
	);
};

export default VideoDetailBox;

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
const DescriptionBox = styled.div<{ isBrief: boolean }>`
	background-color: #303030;
	color: white;
	padding: 20px 20px;
	border-radius: 10px;
	white-space: pre-wrap;
	height: ${(props) => (props.isBrief ? '100px' : 'auto')};
	overflow: hidden;
	&:hover {
		cursor: ${(props) => props.isBrief && 'pointer'};
		background-color: ${(props) => props.isBrief && '#4a504d'};
	}
`;
const HeaderInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 5px;
`;
const Description = styled.p<{ isBrief: boolean }>`
	height: ${(props) => (props.isBrief ? '80px' : 'auto')};
	overflow: hidden;
`;
const Channel = styled.div`
	display: flex;
	align-items: center;
	div {
		display: flex;
		flex-direction: column;
	}
	margin: 15px 0;
`;
const ChannelProfile = styled.img`
	width: 35px;
	height: 35px;
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
const BriefTags = styled.div`
	display: flex;
	gap: 5px;
	white-space: nowrap;
	overflow: hidden;
	width: 100%;

	span {
		white-space: nowrap;
		color: var(--color-light-blue);
		font-weight: 600;
		cursor: pointer;
	}
`;
const Views = styled.span``;
const PublishedAt = styled.span`
	white-space: nowrap;
`;

const Btns = styled.div`
	display: flex;
	align-items: center;
	@media ${(props) => props.theme.sm} {
		flex-wrap: wrap;
	}
`;
const Btn = styled.button`
	border: none;
	background-color: #313030;
	color: white;
	font-size: 15px;
	margin: 0 3px;
	border-radius: 20px;
	padding: 8px 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	box-sizing: border-box;

	cursor: pointer;
	&:hover {
		background-color: #484949;
	}
	span {
		overflow: hidden;
		white-space: nowrap;

		@media ${(props) => props.theme.lg} {
			display: none;
		}
	}
	svg {
		@media ${(props) => props.theme.sm} {
			margin-top: 5px;
		}
	}
`;
const ThumbsBtn = styled.div`
	border: none;
	display: flex;
	div {
		border: none;
		background-color: #313030;
		color: white;
		font-size: 15px;
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
		span {
			@media ${(props) => props.theme.lg} {
				display: none;
			}
		}
	}

	cursor: pointer;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	@media ${(props) => props.theme.md} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const Thumbnail = styled.img``;
const Brifly = styled.span`
	cursor: pointer;
	display: flex;
	margin-top: 30px;
`;
