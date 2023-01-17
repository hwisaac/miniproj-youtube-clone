import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SNB from './components/SNB';
import VideoDisplay from './components/VideoContainer';
import { Reset } from 'styled-reset';

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
			<SNB show={toggle} />
			<Outlet />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}

export default App;
