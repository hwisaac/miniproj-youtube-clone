import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Header from './components/Header';
import SNB from './components/SNB';

function App() {
	return (
		<>
			<Reset />
			<Header />
			<SNB />
			<Outlet />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}

export default App;
