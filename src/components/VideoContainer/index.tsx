import { useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';

const VideoContainer = () => {
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await axios.get(requests.fetchSearchVideo, {
			params: {
				q: 'beautiful place',
			},
		});
		// window.localStorage.setItem('response', response);
		console.log(response);
	};

	return <div></div>;
};

export default VideoContainer;
