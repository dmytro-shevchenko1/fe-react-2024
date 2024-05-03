import { useState } from 'react';

import cart from '@/assets/productListImages/cardCart.svg';
import type { Product } from '@/interfaces/Products.ts';

import styles from './ProductList.module.css';

interface ProductCardProps {
    product: Product;
    addToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className={styles.productCard}>
                <img className={styles.imgProduct} src={product.images[0]} alt="" />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.lowerCard}>
                    <div className={styles.priceFlex}>
                        <p className={styles.productPrice}>{product.price}</p>
                        <p className={styles.priceUah}>₴</p>
                    </div>
                    <button
                        className={styles.cartButton}
                        onClick={() => {
                            setCount(count + 1);
                            addToCart();
                        }}
                    >
                        <img src={cart} alt="cart" />
                        {count > 0 && <span className={styles.counter}>{count}</span>}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
