import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { MdOutlineVideoCall } from 'react-icons/md';
import styled from 'styled-components';
import { Icon } from './SearchBar/SearchBar';

const RightSection = () => {
	return (
		<Container>
			<Icon>
				<MdOutlineVideoCall />
			</Icon>
			<Icon>
				<AiOutlineBell />
			</Icon>{' '}
			<Icon>
				<BsPersonCircle />
			</Icon>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export default RightSection;
