import React, { useState, useEffect } from 'react';
import videoInfoJson from '../../mockup/videoinfo-ex.json';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import youtube from '../../api/youtubeClass';
import { formatDate, formatView } from '../../util/VideoFunction';
import ChannelContainer from './ChannelContainer';
import { getDuration } from '../../util/getDuration';
import { useQuery } from '@tanstack/react-query';

const VideoContainer = ({ video }) => {
	//채널 정보
	const [channelBrief, setChannelBrief] = useState<IChannelBrief>({
		customUrl: '',
		subscriber: '',
		description: '',
		thumbnail: '',
		title: '',
		isLoading: false,
	});
	// 비디오 정보
	const [videoBrief, setVideoBrief] = useState<IVideoBrief>({
		title: '',
		views: '',
		publishedAt: '',
		duration: '',
		thumbnail: '',
		channelTitle: '',
		isLoading: false,
	});
	// 채널정보 처리
	const processChannelData = (data: IChannel) => {
		const item = data?.items[0];
		setChannelBrief({
			customUrl: item?.snippet.customUrl,
			subscriber: formatView(item?.statistics.subscriberCount),
			description: item?.snippet.description,
			thumbnail: video.snippet.thumbnails.medium.url,
			title: video.snippet.title,
			isLoading: true,
		});
	};
	// 비디오 정보 처리
	const processVideoData = async (data: IVideo) => {
		setVideoBrief({
			title: video.snippet.title,
			views: formatView(data?.items[0].statistics.viewCount),
			publishedAt: formatDate(data?.items[0].snippet.publishedAt),
			duration: getDuration(data?.items[0].contentDetails.duration),
			thumbnail: video.snippet.thumbnails.medium.url,
			channelTitle: video.snippet.channelTitle,
			isLoading: true,
		});
	};

	// 비디오 데이터 패칭
	const { data: videoData } = useQuery(['video', video.id.videoId], () => youtube.video(video.id.videoId), {
		onSuccess: (data) => processVideoData(data),
	});
	// 채널 데이터 패칭
	const { data: channelData } = useQuery(['channel', video.id.channelId], () => youtube.channel(video.id.channelId), {
		onSuccess: (data) => processChannelData(data),
	});

	useEffect(() => {
		if (video.id.videoId) {
			processVideoData(videoData);
		} else if (video.id.channelId) {
			processChannelData(channelData);
		}
	}, [video]);

	if (video.id.kind === 'youtube#video') {
		return (
			<>
				{videoBrief.isLoading && <VideoThumbnail videoBrief={videoBrief} />}
				{videoBrief.isLoading && <VideoInfo videoBrief={videoBrief} />}
			</>
		);
	} else if (video.id.kind === 'youtube#channel') {
		return <Channel>{channelBrief.isLoading && <ChannelContainer channelBrief={channelBrief} />}</Channel>;
	}
};

const Channel = styled.div`
	display: flex;
	justify-content: space-around;
	img {
		border-radius: 50%;
		margin-right: 50px;
	}
`;

export default VideoContainer;
