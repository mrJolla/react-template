import { StrictMode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { isDev } from './libs/is-dev';
import { App } from './pages/app/app';

import './static/css/index.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Number.POSITIVE_INFINITY,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
});

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path='/' />
        </Routes>
      </BrowserRouter>

      {isDev() && <ReactQueryDevtools />}
    </QueryClientProvider>
  </StrictMode>
);
