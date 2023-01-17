import styled from 'styled-components';
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
		<Container>
			<ul>
				<SideBarSection info={list.section1} show={show} />
				<SideBarSection info={list.section2} show={show} />
				<SideBarSection info={list.section3} show={show} />
			</ul>
		</Container>
	);
};

const Container = styled.nav`
	background-color: #212529;
	position: fixed;
	height: 100vh;
	padding-right: 10px;
`;

export default SNB;
