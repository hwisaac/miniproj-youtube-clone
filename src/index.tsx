import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import router from './router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  // reset css
  ${reset}
  // 전역 css 설정
  :root {
  --color-light-blue: #3ea6ff;
  --color-blue: #085fd4;
  --color-red : #ff0000;
  --color-black: #0f0f0f;
  --color-gray: #f4f4f4;
  --color-dark: #0e0e0e;
}

  body {
    font: 15px sans-serif, Futura, 'Century Gothic';
    background-color: var(--color-dark);
  }

  input{
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  
}

textarea:focus, input:focus{
  outline: none;
}


body::-webkit-scrollbar {
  width: 16px;  /* 스크롤바의 너비 */
}

body::-webkit-scrollbar-thumb {
  background: #9e9e9e; /* 스크롤바의 색상 */
  border-radius: 10px;
  border: 4px solid black;
}

body::-webkit-scrollbar-track {
  background: #000000  /*스크롤바 뒷 배경 색상*/
}
`;

const container = document.getElementById('root')!;
const root = createRoot(container);
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
			refetchOnWindowFocus: false,
			retry: false,
		},
		mutations: {
			cacheTime: Infinity,
			retry: false,
		},
	},
});

root.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	</Provider>
);
