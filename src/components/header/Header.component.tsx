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

import styles from './Header.module.css';

interface HeaderComponentProps {
    handleChangePage: (component: 'About' | 'ProductsList') => void;
    cartCount: number;
    toggleTheme: (newTheme: 'light' | 'dark') => void;
    theme: 'light' | 'dark';
}

function HeaderComponent({ handleChangePage, cartCount, toggleTheme, theme }: HeaderComponentProps) {
    const sunLogo = theme === 'light' ? sunLogoLight : sunLogoDark;
    const moonLogo = theme === 'light' ? moonLogoDark : moonLogoLight;

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerFlex}>
                        <img src={headerLogo} alt="headerLogo" />
                        <div className={styles.themeButtons}>
                            <button className={styles.sunButton} onClick={() => toggleTheme('light')}>
                                <img src={sunLogo} alt="sun" />
                            </button>
                            <img src={dividerLogo} alt="divider" />
                            <button className={styles.moonButton} onClick={() => toggleTheme('dark')}>
                                <img src={moonLogo} alt="moon" />
                            </button>
                        </div>
                        <div className={styles.rightFlex}>
                            <img className={styles.burgerMenu} src={burgerLogo} alt="burger" />
                            <div className={styles.navItems}>
                                <button className={styles.navButton} onClick={() => handleChangePage('About')}>
                                    About
                                </button>
                                <button className={styles.navButton} onClick={() => handleChangePage('ProductsList')}>
                                    Products
                                </button>
                            </div>
                            <CartComponent count={cartCount} onClick={() => {}} theme={theme} whiteCart={true} />
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
