import styled from 'styled-components';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { SideBarSection } from './SideBarSection';

const list = {
	section1: [
		{
			icon: 'AiFillHome',
			title: 'Home',
		},
		{
			icon: 'MdOutlineExplore',
			title: 'Explore',
		},
		{
			icon: 'MdSubscriptions',
			title: 'Subscriptions',
		},
	],
	section2: [
		{
			icon: 'MdVideoLibrary',
			title: 'Library',
		},
		{
			icon: 'MdHistory',
			title: 'History',
		},
		{
			icon: 'MdWatchLater',
			title: 'Watch later',
		},
		{
			icon: 'AiFillLike',
			title: 'Liked videos',
		},
	],
	section3: [
		{
			icon: 'MdSettings',
			title: 'Settings',
		},
		{
			icon: 'MdFlag',
			title: 'Report history',
		},
	],
};

const SNB = ({ show }) => {
	return (
		<Container show={show}>
			<ul>
				<SideBarSection info={list.section1} />
				<SideBarSection info={list.section2} />
				<SideBarSection info={list.section3} />
			</ul>
		</Container>
	);
};

const Container = styled.nav<{ show: boolean }>`
	background-color: #212529;
	display: ${(props) => `${props.show ? 'block' : 'none'}`};
	p {
		color: white;
	}
`;
const NavSection = styled.section`
	border-bottom: 1px solid gray;
`;

export default SNB;
