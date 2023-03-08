import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import { formatView } from '../../util/VideoFunction';
import { formatDate } from '../../util/VideoFunction';
import { BsThreeDotsVertical } from 'react-icons/bs';

const VideoInfo = ({ video, channelInfo }) => {
	const [details, setDetails] = useState({
		views: '',
		publishedAt: '',
	});

	const fetchStaticsData = async (id) => {
		const newData = await youtube.video(id);
		setDetails({
			views: formatView(newData.items[0].statistics.viewCount),
			publishedAt: formatDate(newData.items[0].snippet.publishedAt),
		});
	};

	useEffect(() => {
		fetchStaticsData(video.id.videoId);
	}, []);

	return (
		<Container>
			<div className="info-container">
				<div className="channel">
					<img src={video.snippet.thumbnails.medium.url} className="channel-thumbnail" alt={video.snippet.title} />
				</div>
				<div className="text-info">
					<h3 className="title">{video.snippet.title}</h3>
					<div className="detail-info">
						<div className="channel">
							<div className="channelName">{video.snippet.channelTitle}</div>
						</div>
						<div className="detail-data">
							<span>
								{details.views} views • {details.publishedAt}
							</span>
						</div>
					</div>
				</div>
				{window.location.pathname === '/' && <BsThreeDotsVertical className="dots" />}
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 38%;
	.info-container {
		display: flex;
	}
	.channel {
		margin-top: 1rem;
		margin-right: 1rem;
		width: fit-content;
	}
	.channel-thumbnail {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
	.channel-info {
		padding-right: 2rem;
	}
	.text-info {
		width: 90%;
	}
	.title {
		margin: 1.2rem 0 0.6rem;
		line-height: 150%;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.detail-info {
		color: #aaa;
	}
	.channel-name {
		line-height: 130%;
	}
	.detail-data {
		display: flex;
	}
	.dots {
		height: 50px;
		width: 25px;
	}
`;

export default VideoInfo;
