import cartBlack from '@/assets/cartImages/cartBlack.svg';
import cartWhite from '@/assets/cartImages/cartWhite.svg';
import { useCart } from '@/context/CartContext.tsx';
import { useTheme } from '@/context/ThemeContext.tsx';

import styles from './Cart.module.css';

interface CartButtonProps {
    whiteCart?: boolean;
    productId?: string;
}

const CartComponent: React.FC<CartButtonProps> = ({ whiteCart, productId }) => {
    const { addToCart, getProductCount, cartCount } = useCart();
    const { theme } = useTheme();
    const cartImageSource = (whiteCart ? cartWhite : theme) === 'light' ? cartBlack : cartWhite;
    const count = productId ? getProductCount(productId) : cartCount;

    return (
        <>
            <button className={styles.cartButton} onClick={() => productId && addToCart(productId)}>
                <img src={cartImageSource} alt="cart" />
                {count > 0 && <span className={styles.counter}>{count}</span>}
            </button>
        </>
    );
};

export default CartComponent;
