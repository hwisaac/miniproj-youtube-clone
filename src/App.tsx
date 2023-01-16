import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SNB from './components/SNB';
import VideoDisplay from './components/VideoContainer';

function App() {
	return (
		<>
			<Header />
			<SNB />
			<VideoDisplay />
			<Outlet />
		</>
	);
}

export default App;
