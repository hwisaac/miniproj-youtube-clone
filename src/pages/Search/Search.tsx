import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchJson from '../../mockup/search.json';
import youtube from '../../api/youtubeClass';
import { useMutation, useQuery } from '@tanstack/react-query';

const getTitles = (data) => {
	const result = [];

	for (const item of data.items) {
		result.push(item.snippet.description);
	}
	return result;
};

const Search = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [nextPageToken, setNextPageToken] = useState('');

	const keyword = new URLSearchParams(useLocation().search).get('q');

	const { isLoading, data } = useQuery<ISearch>(['search', keyword], () => youtube.search(keyword), {
		onSuccess: (data) => {
			// console.log('INIT 쿼리 성공! :', getTitles(data), data.nextPageToken);
			setSearchResults([...data.items]);
			setNextPageToken(data.nextPageToken);
		},
	});

	// useMutation: 검색결과 추가로 가져오기
	const { isLoading: fetchingMore, mutate: fetchMore } = useMutation({
		mutationFn: () => youtube.searchByToken({ pageToken: nextPageToken, query: keyword }),
		onSuccess: (data) => {
			console.log('추가로 가져옴:', getTitles(data.items));
			setSearchResults((prev) => [...prev, ...data.items]);
			setNextPageToken(data.nextPageToken);
			console.log('현재 searchedResults배열: ', getTitles(searchResults));
		},
		retry: false,
	});
	// 버튼 누르면 패칭 시작
	const handleMoreBtn = () => {
		if (!fetchingMore) fetchMore();
	};

	return (
		<Main>
			<Container>
				{!isLoading &&
					searchResults.map((video, index) => (
						<div key={`video-${video.id.videoId}-${index}`} className="search-element">
							<VideoLink to={`/${video.id.videoId}`} className="video-element">
								<VideoContainer video={video} />
							</VideoLink>
						</div>
					))}
			</Container>
			<MoreBtn onClick={handleMoreBtn}>검색결과 더 보기</MoreBtn>
		</Main>
	);
};

const Main = styled.main`
	width: 100%;
`;
const Container = styled.div`
	width: 100%;
	position: relative;
	top: 60px;
	left: 90px;
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
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr;
	gap: 2rem;
`;

const MoreBtn = styled.button`
	align-self: flex-end;
	border: none;
	background-color: #333;
	color: white;
	border-radius: 15px;
	padding: 0 20px;
	height: 30px;
	/* width: auto; */
	width: 100%;
	margin: 50px 0;
	margin-bottom: 100px;
	cursor: pointer;
	&:hover {
		background-color: #555;
	}
`;

export default Search;
