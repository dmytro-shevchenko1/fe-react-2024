import { useState } from 'react';

import { useTheme } from '@/context/ThemeContext.tsx';

import AboutPage from './components/about/AboutPage.component.tsx';
import FooterComponent from './components/footer/Footer.component.tsx';
import HeaderComponent from './components/header/Header.component.tsx';
import ProductsList from './components/productList/ProductList.component.tsx';

import styles from './App.module.css';

function App() {
    const [currentComponent, setCurrentComponent] = useState<'About' | 'ProductsList'>('About');
    const { theme } = useTheme();

    const handleChangePage = (component: 'About' | 'ProductsList') => {
        setCurrentComponent(component);
    };

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <HeaderComponent handleChangePage={handleChangePage} />
                {currentComponent === 'About' ? <AboutPage /> : <ProductsList />}
                <FooterComponent />
            </div>
        </>
    );
}

export default App;
