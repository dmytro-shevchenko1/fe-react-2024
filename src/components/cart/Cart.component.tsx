import cartBlack from '@/assets/cartImages/cartBlack.svg';
import cartWhite from '@/assets/cartImages/cartWhite.svg';

import styles from './Cart.module.css';

interface CartButtonProps {
    count: number;
    onClick: () => void;
    color: 'white' | 'black';
}

const CartComponent: React.FC<CartButtonProps> = ({ count, onClick, color = 'black' }) => (
    <>
        <button className={`${styles.cartButton} {color === 'white' ? styles.whiteCart : ''}`} onClick={onClick}>
            <img src={color === 'white' ? cartWhite : cartBlack} alt="cart" />
            {count > 0 && <span className={styles.counter}>{count}</span>}
        </button>
    </>
);

export default CartComponent;
