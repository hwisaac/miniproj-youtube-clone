import React from 'react';
import styled from 'styled-components';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import SearchBar from './SearchBar';

const Header = ({ menuClicked }) => {
	return (
		<Container>
			<LeftSection menuClicked={menuClicked} />
			<SearchBar />
			<RightSection />
		</Container>
	);
};

const Container = styled.div`
	background-color: #000000;
	height: 56px;
	padding: 2px 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
`;

export default Header;
