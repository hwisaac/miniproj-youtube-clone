import React, { useState, useEffect } from 'react';
import videoInfoJson from '../../mockup/videoinfo-ex.json';
import VideoThumbnail from './VideoThumbnail';
import VideoInfo from './VideoInfo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import youtube from '../../api/youtubeClass';
import { formatView } from '../../util/VideoFunction';
import ChannelContainer from './ChannelContainer';

const VideoContainer = ({ video }) => {
	//채널 상세정보 get
	const [channelInfo, setChannelInfo] = useState({
		customUrl: '',
		subscriber: '',
		description: '',
	});

	const channelInfoData = async (Id) => {
		const data = await youtube.channel(Id);

		const item = data.items[0];
		setChannelInfo({
			customUrl: item.snippet.customUrl,
			subscriber: formatView(item.statistics.subscriberCount),
			description: item.snippet.description,
		});
	};

	useEffect(() => {
		channelInfoData(video.id.channelId);
	}, [video.id.channelId]);

	if (video.id.kind === 'youtube#video') {
		return (
			<>
				{video && channelInfo && (
					<>
						<VideoThumbnail video={video} />
						<VideoInfo video={video} channelInfo={channelInfo} />
					</>
				)}
			</>
		);
	} else if (video.id.kind === 'youtube#channel') {
		return (
			<Channel className="channel-element">
				{channelInfo ? <ChannelContainer video={video} channelInfo={channelInfo} /> : null}
			</Channel>
		);
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
