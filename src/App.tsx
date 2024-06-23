import { Route, Routes } from 'react-router-dom';

import LayoutComponent from '@/components/layout/LayoutComponent.component.tsx';
import PageNotFound from '@/components/pageNotFound/PageNotFound.component.tsx';
import { useTheme } from '@/context/ThemeContext.tsx';

import AboutPage from './components/about/AboutPage.component.tsx';
import ProductsList from './components/productList/ProductList.component.tsx';

import styles from './App.module.css';

function App() {
    const { theme } = useTheme();

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <Routes>
                    <Route path={'/'} element={<LayoutComponent />}>
                        <Route index element={<AboutPage />} />
                        <Route path={'products'} element={<ProductsList />} />
                        <Route path={'*'} element={<PageNotFound />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
