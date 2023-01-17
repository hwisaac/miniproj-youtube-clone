import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';
import { Icon } from './SearchBar/SearchBar';

const LeftSection = ({ menuClicked }) => {
	const ClickLogo = () => {
		window.location.href = '/';
	};

	return (
		<Container>
			<Icon onClick={menuClicked}>
				<AiOutlineMenu />
			</Icon>
			<img onClick={ClickLogo} src="/youtube-logo-dark.png" alt="로고" />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;

	img {
		margin: 0 10px;
		width: 90px;
	}
`;

export default LeftSection;
