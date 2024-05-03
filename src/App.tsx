import { useState } from 'react';

import AboutPage from './components/about/AboutPage.component.tsx';
import FooterComponent from './components/footer/Footer.component.tsx';
import HeaderComponent from './components/header/Header.component.tsx';
import ProductsList from './components/productList/ProductList.component.tsx';

function App() {
    const [currentComponent, setCurrentComponent] = useState<'About' | 'ProductsList'>('About');
    const [cartCount, setCartCount] = useState<number>(0);
    const handleChangePage = (component: 'About' | 'ProductsList') => {
        setCurrentComponent(component);
    };

    const addToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <>
            <HeaderComponent handleChangePage={handleChangePage} cartCount={cartCount} />
            {currentComponent === 'About' ? <AboutPage /> : <ProductsList addToCart={addToCart} />}
            <FooterComponent />
        </>
    );
}

export default App;
