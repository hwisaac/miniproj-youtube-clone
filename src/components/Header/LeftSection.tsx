import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

const LeftSection = () => {
	const ClickLogo = () => {
		window.location.href = '/';
	};

	return (
		<Container>
			<Icon>
				<AiOutlineMenu color="white" size={24} />
			</Icon>
			<img onClick={ClickLogo} src="/youtube-logo-dark.png" alt="로고" />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;

	img {
		margin: 0 20px;
		width: 90px;
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	width: 22px;
	height: 22px;
	padding: 10px;

	&:hover {
		background-color: #343a40;
		border-radius: 20px;
	}
`;

export default LeftSection;
