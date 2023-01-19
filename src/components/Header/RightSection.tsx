/*
헤더의 오른편 컴포넌트입니다. 아이콘만 있으며, 기능은 없는 상태입니다.
*/

import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { MdOutlineVideoCall } from 'react-icons/md';
import styled from 'styled-components';
import { Icon } from './SearchBar/SearchBar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const RightSection = () => {
	return (
		<Container>
			<Icon id="create">
				<MdOutlineVideoCall />
			</Icon>
			<Icon id="notifications">
				<AiOutlineBell />
			</Icon>
			<Icon id="user">
				<BsPersonCircle />
			</Icon>
			<Tooltip anchorId="create" content="Create" />
			<Tooltip anchorId="notifications" content="Notifications" />
			<Tooltip anchorId="user" content="User" />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export default RightSection;
