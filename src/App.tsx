import Router from '@/components/router/Router.component.tsx';
import { useTheme } from '@/context/ThemeContext.tsx';

import styles from './App.module.css';

function App() {
    const { theme } = useTheme();

    return (
        <>
            <div className={`${theme === 'dark' ? styles.darkTheme : styles.lightTheme}`}>
                <Router />
            </div>
        </>
    );
}

export default App;
