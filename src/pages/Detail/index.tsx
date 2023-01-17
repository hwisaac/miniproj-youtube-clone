import React from 'react';
import styled from 'styled-components';
import Youtube, { axiosSearchTest, searchTest } from '../../util/api/api';
import searchData from '../../mockup/search.json';
import videoData from '../../mockup/video.json';
import PlayerBox from '../../components/PlayerBox';
import DescriptionBox from '../../components/VideoInfoBox';
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
				<DescriptionBox />
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
	width: 100%;
	height: auto;
	border: 3px solid black;
`;
const PrimaryBox = styled.div`
	background-color: red;
	width: 70vw;
	height: 100vh;
`;
const SecondaryBox = styled.div`
	background-color: black;
	width: 30vw;
	height: 100%;
`;
