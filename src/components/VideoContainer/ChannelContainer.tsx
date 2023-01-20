import React from 'react';
import styled from 'styled-components';

const ChannelContainer = ({ video, channelInfo }) => {
	return (
		<Channel>
			<div className="channel-thumbnail">
				<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
			</div>
			<div className="channel-textInfo">
				<h5 className="channel">{video.snippet.title}</h5>
				<div className="channel-info">
					<span>
						{channelInfo.customUrl} • {channelInfo.subscriber}
					</span>
					<span>{channelInfo.description}</span>
				</div>
			</div>
			<button className="sub-button">구독</button>
		</Channel>
	);
};

const Channel = styled.div`
	display: flex;
	.channel-textInfo {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.channel-info {
		display: flex;
		flex-direction: column;
		margin: 10px;
	}
	.sub-button {
		background-color: white;
		color: black;
		width: 100px;
		height: 30px;
		border-radius: 10px;
		margin: auto;
	}
`;

export default ChannelContainer;
