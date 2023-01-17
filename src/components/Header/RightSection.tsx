import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { MdOutlineVideoCall } from 'react-icons/md';
import styled from 'styled-components';

const RightSection = () => {
	return (
		<Container>
			<Icon>
				<MdOutlineVideoCall color="white" size={24} />
			</Icon>
			<Icon>
				<AiOutlineBell color="white" size={24} />
			</Icon>{' '}
			<Icon>
				<BsPersonCircle color="white" size={24} />
			</Icon>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
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

export default RightSection;
