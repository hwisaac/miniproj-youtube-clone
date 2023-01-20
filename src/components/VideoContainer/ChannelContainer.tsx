import React from 'react';
import styled from 'styled-components';

const ChannelContainer = ({ channelBrief }) => {
	return (
		<Channel>
			<div className="channel-thumbnail">
				<img src={channelBrief.thumbnail} alt={channelBrief.title} />
			</div>
			<div className="channel-textInfo">
				<h5 className="channel">{channelBrief.title}</h5>
				<div className="channel-info">
					<span>
						{channelBrief.customUrl} • {channelBrief.subscriber}
					</span>
					<span>{channelBrief.description}</span>
				</div>
			</div>
			<button className="sub-button">구독</button>
		</Channel>
	);
};

const Channel = styled.div`
	width: 950px;
	display: flex;
	justify-content: space-between;
	position: relative;
	.channel-thumbnail {
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 150px;
			height: 150px;
			left: 0;
			right: 0;
			margin: 0 auto;
		}
	}
	.channel-textInfo {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 40px;
		.channel-info {
			display: flex;
			flex-direction: column;
			margin: 10px;
		}
	}
	.sub-button {
		background-color: white;
		color: black;
		width: 55px;
		height: 35px;
		border-radius: 10px;
		margin: auto;
		right: 0;
	}
`;

export default ChannelContainer;
