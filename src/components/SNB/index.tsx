import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { SideBarSection } from './SideBarSection';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
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
	const [isMain, setIsMain] = useState(
		window.location.pathname === '/' || window.location.pathname === '/search' ? true : false
	);

	const size = useWindowSize();

	useEffect(() => {
		if (size.width <= 500) {
			setIsMain(false);
		} else if (size.width > 500) {
			setIsMain(window.location.pathname === '/' || window.location.pathname === '/search' ? true : false);
			if (pathname !== window.location.pathname) {
				pathname = window.location.pathname;
				isMain === false ? setShow(true) : setShow(false);
			}
			isMain === false ? setShow(true) : setShow(false);
		}

		if (size.width < 1200) {
			setShow(true);
		} else if (size.width > 1200) {
			if (isMain === true) {
				setShow(false);
			}
		}
	}, [size.width]);

	if (!firstRender) {
		setShow(true);
		firstRender = !firstRender;
	}

	return (
		<Container show={show} isMain={isMain}>
			<ul>
				<SideBarSection info={list.section1} show={show} setShow={setShow} />
				<SideBarSection info={list.section2} show={show} setShow={setShow} />
				<SideBarSection info={list.section3} show={show} setShow={setShow} />
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
			  `}
`;

export default SNB;
