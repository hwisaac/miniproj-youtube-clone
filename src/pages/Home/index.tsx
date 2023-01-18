import React from 'react';
import styled from 'styled-components';
import VideoContainer from '../../components/VideoContainer/VideoContainer';

const Home = () => {
	return (
		<Main>
			<VideoContainer />
		</Main>
	);
};

const Main = styled.main`
	grid-area: main;
`;

export default Home;
