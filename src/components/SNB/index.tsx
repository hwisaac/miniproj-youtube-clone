import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { SideBarSection } from './SideBarSection';
import React from 'react';
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

let pathname = window.location.pathname;
let firstRender = window.location.pathname === '/' || window.location.pathname === '/search' ? true : false;

const SNB = ({ show, setShow }) => {
	let location = useLocation();

	const isMain = window.location.pathname === '/' || window.location.pathname === '/search' ? true : false;
	if (pathname !== window.location.pathname) {
		pathname = window.location.pathname;
		setShow(false);
	}
	if (!firstRender) {
		setShow(true);
		firstRender = !firstRender;
	}
	return (
		<Container show={show} isMain={isMain}>
			<ul>
				<SideBarSection info={list.section1} show={show} />
				<SideBarSection info={list.section2} show={show} />
				<SideBarSection info={list.section3} show={show} />
			</ul>
		</Container>
	);
};

const Container = styled.nav<{ isMain: boolean; show: boolean }>`
	background-color: #212529;
	position: fixed;
	${(props) =>
		props.isMain
			? css`
					padding-top: 10px;
					top: 60px;
					height: 100%;
					overflow: auto;
					padding-right: 10px;
					@media screen and (max-width: 500px) {
						display: none;
					}
			  `
			: props.show
			? css`
					display: none;
			  `
			: css`
					padding-top: 10px;
					top: 60px;
					height: 100%;
					overflow: auto;
					padding-right: 10px;
					@media screen and (max-width: 500px) {
						display: none;
					}
			  `}
`;

export default SNB;
