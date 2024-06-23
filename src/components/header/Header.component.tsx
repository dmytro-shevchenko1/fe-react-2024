import { NavLink } from 'react-router-dom';

import burgerLogo from '@/assets/headerImages/burgerLogo.svg';
import dividerLogo from '@/assets/headerImages/divider.svg';
import loginLogo from '@/assets/headerImages/login.svg';
import headerLogo from '@/assets/headerImages/maLogo.svg';
import moonLogoDark from '@/assets/headerImages/moonDark.svg';
import moonLogoLight from '@/assets/headerImages/moonLight.svg';
import userLogo from '@/assets/headerImages/signUp.svg';
import sunLogoDark from '@/assets/headerImages/sunDark.svg';
import sunLogoLight from '@/assets/headerImages/sunLight.svg';
import CartComponent from '@/components/cart/Cart.component.tsx';
import { Theme, useTheme } from '@/context/ThemeContext.tsx';

import styles from './Header.module.css';

function HeaderComponent() {
    const { theme, toggleTheme } = useTheme();
    const sunLogo = theme === 'light' ? sunLogoLight : sunLogoDark;
    const moonLogo = theme === 'light' ? moonLogoDark : moonLogoLight;

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerFlex}>
                        <img src={headerLogo} alt="headerLogo" />
                        <div className={styles.themeButtons}>
                            <button className={styles.sunButton} onClick={() => toggleTheme(Theme.LIGHT)}>
                                <img src={sunLogo} alt="sun" />
                            </button>
                            <img src={dividerLogo} alt="divider" />
                            <button className={styles.moonButton} onClick={() => toggleTheme(Theme.DARK)}>
                                <img src={moonLogo} alt="moon" />
                            </button>
                        </div>
                        <div className={styles.rightFlex}>
                            <img className={styles.burgerMenu} src={burgerLogo} alt="burger" />
                            <div className={styles.navItems}>
                                <NavLink className={({ isActive }) => (isActive ? styles.navButtonActive : styles.navButton)} to="/">
                                    About
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => (isActive ? styles.navButtonActive : styles.navButton)}
                                    to={'products'}
                                >
                                    Products
                                </NavLink>
                            </div>
                            <CartComponent whiteCart={true} />
                            <div className={styles.loginSign}>
                                <button className={styles.loginLink}>
                                    <img src={loginLogo} alt="login" />
                                    Login
                                </button>
                                <button className={styles.signLink}>
                                    <img src={userLogo} alt="user" />
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderComponent;
