import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import styled from 'styled-components';
import { Link, useOutletContext } from 'react-router-dom';
import searchJson from '../../mockup/search.json';
import youtube from '../../api/youtubeClass';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const Search = () => {
	const { toggleSNB } = useOutletContext<any>();
	const keyword = new URLSearchParams(useLocation().search).get('q');
	const queryClient = useQueryClient();
	const queryData = queryClient.getQueryData<ISearch>(['search', keyword]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (queryData) setSearchResults(queryData.items);
	}, [keyword]);

	const [nextPageToken, setNextPageToken] = useState('');

	const { isLoading, data } = useQuery<ISearch>(['search', keyword], () => youtube.search(keyword), {
		onSuccess: (data) => {
			setSearchResults([...data.items]);
			setNextPageToken(data.nextPageToken);
		},
	});

	// useMutation: 검색결과 추가로 가져오기
	const { isLoading: fetchingMore, mutate: fetchMore } = useMutation({
		mutationFn: () => youtube.searchByToken({ pageToken: nextPageToken, query: keyword }),
		onSuccess: (data) => {
			setSearchResults((prev) => [...prev, ...data.items]);
			setNextPageToken(data.nextPageToken);
		},
		retry: false,
	});
	// 버튼 누르면 패칭 시작
	const handleMoreBtn = () => {
		if (!fetchingMore) fetchMore();
	};

	return (
		<Main>
			<Container toggleSNB={toggleSNB}>
				{searchResults?.map((item, index) => (
					<div key={`video-${item.id.videoId}-${index}`} className="search-element">
						<VideoLink to={`/${item.id.videoId}`} className="video-element">
							<VideoContainer video={item} />
						</VideoLink>
					</div>
				))}
			</Container>
			<MoreBtn onClick={handleMoreBtn}>검색결과 더 보기</MoreBtn>
		</Main>
	);
};

const Main = styled.main`
	max-width: 800px;
`;

const Container = styled.div<{ toggleSNB: boolean }>`
	width: ${(props) => (props.toggleSNB ? '80%' : '100%')};
	position: relative;
	top: 60px;
	left: ${(props) => (props.toggleSNB ? '250px' : '90px')};
	padding: 1.5rem 2rem;
	.search-element {
		width: 100%;
		height: 100%;
		padding: 1rem;
		color: #fff;
		font-size: 15px;
		letter-spacing: 0.2px;
	}
`;
const VideoLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr;
	gap: 2rem;
`;

const MoreBtn = styled.button`
	position: relative;

	left: 50vw;
	right: 0;
	margin: 0 auto;
	border: none;
	background-color: #333;
	color: white;
	border-radius: 15px;
	padding: 0 20px;
	height: 30px;
	/* width: auto; */
	width: 150px;
	margin: 50px 0;
	margin-bottom: 100px;
	cursor: pointer;
	&:hover {
		background-color: #555;
	}
`;

export default Search;
