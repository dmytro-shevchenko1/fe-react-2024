import AboutPage from './components/about/AboutPage.tsx';
import FooterComponent from './components/footer/Footer.component.tsx';
import HeaderComponent from './components/header/Header.component.tsx';

import styles from './App.module.css';

function App() {
    return (
        <>
            <HeaderComponent />
            <main className={styles.body}>
                <AboutPage />
            </main>
            <FooterComponent />
        </>
    );
}

export default App;
