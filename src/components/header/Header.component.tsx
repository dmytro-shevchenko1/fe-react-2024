import burgerLogo from '@/assets/headerImages/burgerLogo.svg';
import cart from '@/assets/headerImages/cart.svg';
import dividerLogo from '@/assets/headerImages/divider.svg';
import loginLogo from '@/assets/headerImages/login.svg';
import headerLogo from '@/assets/headerImages/maLogo.svg';
import moonLogo from '@/assets/headerImages/moon.svg';
import userLogo from '@/assets/headerImages/signUp.svg';
import sunLogo from '@/assets/headerImages/sun.svg';

import styles from './Header.module.css';
interface HeaderComponentProps {
    handleChangePage: (component: 'About' | 'ProductsList') => void;
    cartCount: number;
}

function HeaderComponent({ handleChangePage, cartCount }: HeaderComponentProps) {
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
                            <div className={styles.navItems}>
                                <button className={styles.navButton} onClick={() => handleChangePage('About')}>
                                    About
                                </button>
                                <button className={styles.navButton} onClick={() => handleChangePage('ProductsList')}>
                                    Products
                                </button>
                            </div>
                            <button className={styles.cartButton}>
                                <img className={styles.cart} src={cart} alt="cart" />
                                {cartCount > 0 && <span className={styles.counter}>{cartCount}</span>}
                            </button>
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
