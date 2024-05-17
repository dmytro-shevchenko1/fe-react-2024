import { useEffect, useState } from 'react';

import FiltersComponent from '@/components/filters/Filters.component.tsx';

import AboutPage from './components/about/AboutPage.component.tsx';
import FooterComponent from './components/footer/Footer.component.tsx';
import HeaderComponent from './components/header/Header.component.tsx';
import ProductsList from './components/productList/ProductList.component.tsx';

import styles from './App.module.css';

function App() {
    const [currentComponent, setCurrentComponent] = useState<'About' | 'ProductsList'>('About');
    const [cartCount, setCartCount] = useState<number>(0);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const handleChangePage = (component: 'About' | 'ProductsList') => {
        setCurrentComponent(component);
    };

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

    const toggleTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
    };

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <HeaderComponent handleChangePage={handleChangePage} cartCount={cartCount} toggleTheme={toggleTheme} theme={theme} />
                {currentComponent === 'ProductsList' && <FiltersComponent />}
                {currentComponent === 'About' ? <AboutPage /> : <ProductsList addToCart={addToCart} theme={theme} />}
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
