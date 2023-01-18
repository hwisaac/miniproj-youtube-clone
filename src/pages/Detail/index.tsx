import React from 'react';
import styled from 'styled-components';
import Youtube, { axiosSearchTest, searchTest } from '../../util/api/api';
import searchData from '../../mockup/search.json';
import videoData from '../../mockup/video.json';
import PlayerBox from '../../components/video-detail/PlayerBox';
import VideoInfoBox from '../../components/VideoInfoBox';
import CommentBox from '../../components/CommentBox';
import Recommend from '../../components/Recommend';

// const client = new Youtube();
// const tempt = async () => {
// 	const res = await client.search('frozen');
// 	console.log('tempt ', res);
// };
// tempt();
// searchTest('frozen');
// axiosSearchTest('frozen');

console.log('목업: ', searchData);

const Detail = () => {
	return (
		<Layout>
			<PrimaryBox>
				<PlayerBox />
				<VideoInfoBox />
				<CommentBox />
			</PrimaryBox>
			<SecondaryBox>
				<Recommend />
			</SecondaryBox>
		</Layout>
	);
};

export default Detail;

const Layout = styled.div`
	display: flex;
	top: 60px;
	width: 100%;
	height: auto;
	border: 3px solid black;
	position: relative;
	left: 100px;
`;
const PrimaryBox = styled.div`
	background-color: var(--color-dark);
	width: 80vw;
	height: 100vh;
`;
const SecondaryBox = styled.div`
	background-color: #0e0e0e;
	width: 30vw;
	height: 100%;
`;
