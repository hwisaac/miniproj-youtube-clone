import { useParams } from 'react-router-dom';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchJson from '../../mockup/search.json';
import youtube from '../../api/youtubeClass';
import { useQuery } from '@tanstack/react-query';

const Search = () => {
	const { searchTerm } = useParams();
	console.log(searchTerm);
	const { isLoading, isError, data, error } = useQuery(['search', searchTerm], () => youtube.search(searchTerm), {
		refetchOnWindowFocus: false,
		retry: 0,
		onSuccess: (data) => {
			console.log(data.items);
		},
		onError: (e) => {
			console.log(e);
		},
	});

	// let data = searchJson.items;

	return (
		<Main>
			<Container>
				{data.items.map((video) => (
					<div className="search-element" key={video.id.videoId}>
						<VideoLink
							to={'/' + (video.id.videoId && video.snippet.channelTitle)}
							key={video.id.videoId}
							className="video-element"
						>
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
	background-color: #181818;
	width: 100%;
	top: 60px;
	left: 80px;
	position: absolute;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	color: white;
	z-index: -1;

	.search-element {
		max-height: 360px;
		padding: 1rem;
		color: #fff;
		font-size: 14px;
		letter-spacing: 0.2px;
		justify-items: center;
	}
`;
const VideoLink = styled(Link)`
	display: flex;
	color: white;
	text-decoration: none;
	width: 100%;
	height: 100%;
`;

export default Search;
