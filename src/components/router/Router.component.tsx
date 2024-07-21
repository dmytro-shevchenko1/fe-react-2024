import { Route, Routes } from 'react-router-dom';

import AboutPage from '@/components/about/AboutPage.component.tsx';
import LayoutComponent from '@/components/layout/LayoutComponent.component.tsx';
import PageNotFound from '@/components/pageNotFound/PageNotFound.component.tsx';
import ProductsList from '@/components/productList/ProductList.component.tsx';
import { ROUTES } from '@/constants/routes.ts';

const Router: React.FC = () => (
    <Routes>
        <Route path={ROUTES.ABOUT} element={<LayoutComponent />}>
            <Route index element={<AboutPage />} />
            <Route path={ROUTES.PRODUCTS} element={<ProductsList />} />
            <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Route>
    </Routes>
);

export default Router;
