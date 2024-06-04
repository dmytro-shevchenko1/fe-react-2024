import { useEffect, useState } from 'react';

import CartComponent from '@/components/cart/Cart.component.tsx';
import { useCart } from '@/context/CartContext.tsx';
import type { Product } from '@/interfaces/Products.ts';

import styles from './ProductList.module.css';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem(`product_${product.id}_count`);
        if (storedCount) {
            setCount(Number.parseInt(storedCount, 10));
        }
    }, [product.id]);

    const handleAddtoCart = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(`product_${product.id}_count`, newCount.toString());
        addToCart();
    };

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
                    <CartComponent count={count} onClick={handleAddtoCart} />
                </div>
            </div>
        </>
    );
};

export default ProductCard;
