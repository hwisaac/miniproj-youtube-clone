/*
헤더 컴포넌트입니다. 하위 세 개의 컴포넌트를 묶는 용도입니다.
*/

import React from 'react';
import styled from 'styled-components';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import SearchBar from './SearchBar/index';

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
	height: 60px;
	padding: 0 14px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	position: fixed;
	width: 100%;
	z-index: 2;
	border-bottom: 1px solid gray;
`;

export default Header;
