import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface CartContextProps {
    cartCount: number;
    addToCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartCount, setCartCount] = useState<number>(0);

    useEffect(() => {
        const storedCartCount = localStorage.getItem('cartCount');
        if (storedCartCount) {
            setCartCount(Number.parseInt(storedCartCount, 10));
        }
    }, []);

    const addToCart = () => {
        const newCartCount = cartCount + 1;
        setCartCount(newCartCount);
        localStorage.setItem('cartCount', newCartCount.toString());
    };

    return <CartContext.Provider value={{ cartCount, addToCart }}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
