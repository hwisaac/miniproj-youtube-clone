import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SideBarSection } from './SideBarSection';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Container } from './SideBarStyle';

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

let firstRender = window.location.pathname === '/' || window.location.pathname === '/search' ? true : false;

const SNB = ({ show, setShow }) => {
	let location = useLocation();
	const [isMain, setIsMain] = useState(location.pathname === '/' || location.pathname === '/search' ? true : false);
	useEffect(() => {
		setIsMain(location.pathname === '/' || location.pathname === '/search' ? true : false);
	}, [location.pathname]);
	const size = useWindowSize();

	useEffect(() => {
		if (isMain) {
			if (size.width >= 1200) {
				setShow(false);
			} else if (size.width < 1200 && size.width > 500) {
				setShow(true);
			} else if (size.width <= 500) {
				setShow(false);
				setIsMain(false);
			}
		} else {
			setIsMain(location.pathname === '/' || location.pathname === '/search' ? true : false);
		}
	}, [size.width]);

	if (!firstRender) {
		setShow(true);
		firstRender = !firstRender;
	}

	return (
		<Container show={show} isMain={isMain}>
			<ul>
				<SideBarSection info={list.section1} show={show} isMain={isMain} />
				<SideBarSection info={list.section2} show={show} isMain={isMain} />
				<SideBarSection info={list.section3} show={show} isMain={isMain} />
			</ul>
		</Container>
	);
};

export default SNB;
