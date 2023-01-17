import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Header from './components/Header';
import SNB from './components/SNB';

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
