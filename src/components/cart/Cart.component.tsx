import cartBlack from '@/assets/cartImages/cartBlack.svg';
import cartWhite from '@/assets/cartImages/cartWhite.svg';

import styles from './Cart.module.css';

interface CartButtonProps {
    count: number;
    onClick: () => void;
    theme: 'light' | 'dark';
    color?: 'white' | 'black';
}

const CartComponent: React.FC<CartButtonProps> = ({ count, onClick, theme, color }) => {
    const cartButtonClassName = `${styles.cartButton} ${theme === 'light' ? styles.whiteCart : styles.blackCart}`;
    const cartImageSource = theme === 'light' ? cartBlack : cartWhite;

    return (
        <>
            <button className={cartButtonClassName} onClick={onClick}>
                <img src={cartImageSource} alt="cart" />
                {count > 0 && <span className={styles.counter}>{count}</span>}
            </button>
        </>
    );
};

export default CartComponent;
