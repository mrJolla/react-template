import React from 'react';
// biome-ignore lint/style/useNamingConvention: <explanation>
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { App } from '~/app.tsx';
import {
  LONG_CACHE_TIMING,
  SHORT_CACHE_TIMING,
} from '~/shared/constants/react-query-timings.ts';

import '../public/styles/mocks/index.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: SHORT_CACHE_TIMING,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: LONG_CACHE_TIMING,
    },
  },
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

      <ReactQueryDevtools />

      <Toaster position='top-right' />
    </QueryClientProvider>
  </React.StrictMode>,
);
