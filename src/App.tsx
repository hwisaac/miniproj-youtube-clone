import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SNB from './components/SNB';
import { Reset } from 'styled-reset';
import Home from './pages/Home';
import VideoContainer from './components/VideoContainer/VideoContainer';

function App() {
	const [toggle, setToggle] = useState(false);

	const handleMenuClicked = () => {
		if (toggle) {
			setToggle(false);
		} else {
			setToggle(true);
		}
	};
	return (
		<>
			<Reset />
			<Header menuClicked={handleMenuClicked} />
			<SNB show={toggle} setShow={setToggle} />
			<Outlet />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}

export default App;
