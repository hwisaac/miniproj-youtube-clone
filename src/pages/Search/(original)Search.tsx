import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import youtube from '../../api/youtubeClass';

const Search = () => {
	const [searchResults, setSearchResults] = useState([]);
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};
	let query = useQuery();
	const searchTerm = query.get('q');

	useEffect(() => {
		if (searchTerm) {
			searchData(searchTerm);
		}
	}, [searchTerm]);

	const searchData = async (searchTerm) => {
		const data = await youtube.search(searchTerm);
		const items = data.items;
		setSearchResults(items);
	};

	return (
		<Main>
			<Container>
				{searchResults.map((video) => (
					<div className="search-element" key={video.id.videoId}>
						<VideoLink to={'/' + (video.id.videoId && video.snippet.channelTitle)} className="video-element">
							<VideoContainer video={video} />
						</VideoLink>
					</div>
				))}
			</Container>
		</Main>
	);
};

const Main = styled.main`
	width: 100%;
`;
const Container = styled.div`
	width: 100%;
	padding: 1.5rem 2rem;

	.search-element {
		max-width: 1000px;
		height: 100%;
		padding: 1rem;
		color: #fff;
		font-size: 15px;
		letter-spacing: 0.2px;
	}
`;
const VideoLink = styled(Link)`
	min-width: 0px;
	text-decoration: none;
	color: inherit;
	display: grid;
	gap: 2rem;
`;

export default Search;
