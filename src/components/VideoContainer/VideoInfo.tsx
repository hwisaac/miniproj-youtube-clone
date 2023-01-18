import axios from '../../api/axios';
import requests from '../../api/requests';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import videoInfoEX from '../../mockup/videoinfo-ex.json';
import { formatDistanceToNowStrict } from 'date-fns';

const VideoInfo = ({ video, videoInfo }) => {
	let date = video.snippet.publishedAt;
	const formatDate = (date) => {
		const today = new Date(date);
		return formatDistanceToNowStrict(today);
	};

	let view = videoInfo.statistics.viewCount;
	const formatView = (view) => {
		if (view >= 1000000000) {
			return (view / 1000000000).toFixed(0) + 'G';
		}
		if (view >= 1000000) {
			return (view / 1000000).toFixed(0) + 'M';
		}
		if (view >= 1000) {
			return (view / 1000).toFixed(0) + 'K';
		}
		return view;
	};

	return (
		<Container>
			<div className="info-container">
				<div className="channel">
					<img src={video.snippet.thumbnails.medium.url} className="channel-thumbnail" />
				</div>
				<div className="text-info">
					<h3 className="title">{video.snippet.title}</h3>
					<div className="detail-info">
						<a>
							<div className="channelName">{video.snippet.channelTitle}</div>
						</a>
						<div className="detail-data">
							<span>{formatView(view)}</span>
							<span className="dot"> • </span>
							<span>{formatDate(date)}</span>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	.info-container {
		display: flex;
	}
	.channel {
		margin-right: 1rem;
	}
	.channel-thumbnail {
		width: 35px;
		height: 35px;

		border-radius: 50%;
	}
`;

export default VideoInfo;
