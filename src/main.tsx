import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter } from 'react-router-dom';

import { CartProvider } from '@/hooks/context/CartContext.tsx';
import { ThemeProvider } from '@/hooks/context/ThemeContext.tsx';

import App from './App.tsx';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <HashRouter>
                <ThemeProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </ThemeProvider>
            </HashRouter>
        </QueryClientProvider>
    </React.StrictMode>,
);
