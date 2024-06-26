import { Outlet } from 'react-router-dom';

import FooterComponent from '@/components/footer/Footer.component.tsx';
import HeaderComponent from '@/components/header/Header.component.tsx';

const LayoutComponent: React.FC = () => (
    <>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
    </>
);

export default LayoutComponent;
