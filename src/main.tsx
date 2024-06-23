import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from '@/context/CartContext.tsx';
import { ThemeProvider } from '@/context/ThemeContext.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <BrowserRouter basename="/fe-react-2024">
            <ThemeProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
