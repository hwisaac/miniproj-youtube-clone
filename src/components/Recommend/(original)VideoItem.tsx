/*
 * 연관 동영상 하나의 요소를 렌더링
 * 동영상의 세부 사항 API를 호출 후 알맞은 요소들을 렌더링합니다.
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import { getDuration } from '../../util/getDuration';
import { formatDate, formatView } from '../../util/VideoFunction';

const VideoItem = ({ item }) => {
	const [details, setDetails] = useState({
		duration: '',
		views: '',
		publishedAt: '',
	});

	const fetchStaticsData = async (id) => {
		const newData = await youtube.video(id);
		setDetails({
			duration: getDuration(newData.items[0].contentDetails.duration),
			views: formatView(newData.items[0].statistics.viewCount),
			publishedAt: formatDate(newData.items[0].snippet.publishedAt),
		});
	};

	useEffect(() => {
		fetchStaticsData(item.id.videoId);
	}, []);

	return (
		<li key={item.id.videoId}>
			<Linker to={'/' + item.id.videoId}>
				<ImgWrap>
					<img src={item.snippet.thumbnails.medium.url} alt="thumb-img" />
					<p>{details.duration}</p>
				</ImgWrap>
				<DetailWrap>
					<Title>{item.snippet.title}</Title>
					<ChannelTitle>{item.snippet.channelTitle}</ChannelTitle>
					<SubSpan>
						{details.views} • {details.publishedAt} ago
					</SubSpan>
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
	position: relative;
	img {
		display: block;
		width: 100%;
		overflow: hidden;
		border-radius: 10px;
	}
	p {
		color: white;
		font-size: 12px;
		padding: 3px 4px;
		background-color: #000c;
		position: absolute;
		bottom: 2px;
		right: 2px;
		font-weight: 600;
		border-radius: 5px;
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
