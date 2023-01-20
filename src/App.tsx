import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import SNB from './components/SNB';
import { Reset } from 'styled-reset';
import Home from './pages/Home/Home';

function App() {
	const [toggleSNB, setToggleSNB] = useState(true);

	return (
		<>
			<Reset />
			<Header setToggleSNB={setToggleSNB} />
			<SNB toggleSNB={toggleSNB} setToggleSNB={setToggleSNB} />
			<Outlet context={{ toggleSNB }} />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}

export default App;
