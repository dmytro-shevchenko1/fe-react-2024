import cart from '@/assets/cart.svg';
import dividerLogo from '@/assets/divider.svg';
import headerLogo from '@/assets/header-logo.svg';
import loginLogo from '@/assets/Log_Out.svg';
import burgerLogo from '@/assets/Menu_Duo_LG.svg';
import moonLogo from '@/assets/moon.svg';
import sunLogo from '@/assets/sun.svg';
import userLogo from '@/assets/User_Add.svg';

import styles from './header.module.css';
// export const HeaderComponent = () => <header className={styles.header}>Header</header>;

function HeaderComponent() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerFlex}>
                        <img src={headerLogo} alt="headerLogo" />
                        <div className={styles.themeButtons}>
                            <button className={styles.sunButton}>
                                <img src={sunLogo} alt="sun" />
                            </button>
                            <img src={dividerLogo} alt="divider" />
                            <button className={styles.moonButton}>
                                <img src={moonLogo} alt="moon" />
                            </button>
                        </div>
                        <div className={styles.rightFlex}>
                            <img className={styles.burgerMenu} src={burgerLogo} alt="burger" />
                            <ul className={styles.navItems}>
                                <li>
                                    <a href="AboutPage.tsx">About</a>
                                </li>
                                <li>
                                    <a href="Products.tsx">Products</a>
                                </li>
                            </ul>
                            <img className={styles.cart} src={cart} alt="cart" />
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
