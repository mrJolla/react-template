import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import { App } from './pages/app/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { isDev } from './libs/is-dev';
import { ReactQueryDevtools } from 'react-query/devtools';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
            cacheTime: 0,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: 0,
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<App />} />

                </Routes>
            </BrowserRouter>

            {isDev() && <ReactQueryDevtools />}
        </QueryClientProvider>
    </React.StrictMode>,
);
