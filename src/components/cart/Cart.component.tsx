import cartBlack from '@/assets/cartImages/cartBlack.svg';
import cartWhite from '@/assets/cartImages/cartWhite.svg';

import styles from './Cart.module.css';

interface CartButtonProps {
    count: number;
    onClick: () => void;
    theme: 'light' | 'dark';
    whiteCart?: boolean;
}

const CartComponent: React.FC<CartButtonProps> = ({ count, onClick, theme, whiteCart }) => {
    const cartImageSource = (whiteCart ? cartWhite : theme) === 'light' ? cartBlack : cartWhite;

    return (
        <>
            <button className={styles.cartButton} onClick={onClick}>
                <img src={cartImageSource} alt="cart" />
                {count > 0 && <span className={styles.counter}>{count}</span>}
            </button>
        </>
    );
};

export default CartComponent;
