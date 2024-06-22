import React from 'react';
import ReactDOM from 'react-dom/client';

import { CartProvider } from '@/context/CartContext.tsx';
import { ThemeProvider } from '@/context/ThemeContext.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
