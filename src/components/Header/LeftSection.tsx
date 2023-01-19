/*
헤더의 왼편 컴포넌트입니다. 메뉴 아이콘과 로고 이미지를 가집니다.
메뉴 아이콘 클릭 시 사이드바 사이즈가 변경됩니다.
로고 클릭 시 루트 url로 이동합니다.
*/

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from './SearchBar/SearchBar';

const LeftSection = ({ menuClicked }) => {
	return (
		<Container>
			<Icon onClick={menuClicked}>
				<AiOutlineMenu />
			</Icon>
			<Link to="/">
				<img src="/youtube-logo-dark.png" alt="로고" />
			</Link>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;

	a {
		display: flex;
		align-items: center;
	}

	img {
		margin: 0 10px;
		width: 90px;
	}
`;

export default LeftSection;
