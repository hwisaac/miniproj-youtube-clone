import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import searchJson from '../../mockup/search-beutifulplace.json';

const Home = () => {
	// const [videos, setVideos] = useState([]);
	// 검색데이터 get
	// useEffect(() => {
	// 	searchData();
	// }, []);

	// const searchData = async () => {
	// 	const response = await axios.get(requests.fetchSearchVideo, {
	// 		params: {
	// 			q: 'beautiful place',
	// 		},
	// 	});
	// 	setVideos(response.data.items);
	// };

	let videos = searchJson.data.items;

	return (
		<Main>
			<Container className="video-container">
				{videos.map((video) => (
					<div className="video-element">
						<VideoLink to={'/' + video.id.videoId} key={video.id.videoId} className="video-element">
							<VideoContainer video={video} />
						</VideoLink>
					</div>
				))}
			</Container>
		</Main>
	);
};

const Main = styled.main`
	grid-area: main;
`;
const Container = styled.div`
	width: 100%;
	top: 60px;
	left: 80px;
	position: absolute;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
	gap: 1rem;
	background-color: #181818;
	color: white;
	z-index: -1;

	.video-element {
		max-height: 360px;
		padding: 1rem;
		color: #fff;
		font-size: 14px;
		letter-spacing: 0.2px;
		justify-items: center;
	}
`;
const VideoLink = styled(Link)`
	color: white;
	text-decoration: none;
	width: 100%;
	height: 100%;
`;

export default Home;
