import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

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

const Icon = styled.i`
	display: flex;
	align-items: center;
	padding: 10px;
	color: white;

	svg {
		width: 20px;
		height: 20px;
	}

	&:hover {
		background-color: #343a40;
		border-radius: 20px;
	}
`;

export default LeftSection;
export { Icon };
