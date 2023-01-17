import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import router from './router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css';

const GlobalStyle = createGlobalStyle`
  // reset css
  ${reset}
  // 전역 css 설정
  body {
    font: 15px sans-serif, Futura, 'Century Gothic';
  }
`;

const container = document.getElementById('root')!;
const root = createRoot(container);
const queryClient = new QueryClient();
root.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</QueryClientProvider>
	</Provider>
);
