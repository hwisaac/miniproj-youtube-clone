import axios from '../../api/axios';
import requests from '../../api/requests';
import React, { useState, useEffect } from 'react';

const VideoInfo = ({ video }) => {
	// const [videoInfo, setVideoInfo] = useState([]);
	// useEffect(() => {
	//   fetchData();
	// }, []);
	// const fetchData = async () => {
	// 	const response = await axios.get(requests.fetchInfoVideo, {
	// 		params: {
	// 			id: `${video.id.videoId}`,
	// 		},
	// 	});
	// 	setVideoInfo(response.data.items);
	// };

	let videoInfo = localStorage.getItem('response-videoInfo');

	return (
		<div>
			<div>
				<div className="channel-info">
					<img src={video.snippet.thumbnails.medium.url} className="channel-thumbnail" />
				</div>
				<div className="text-info">
					<div className="title">{video.snippet.title}</div>
					<div>{video.snippet.channelTitle}</div>
				</div>
			</div>
		</div>
	);
};

export default VideoInfo;
