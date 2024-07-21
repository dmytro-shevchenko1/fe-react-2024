import CartComponent from '@/components/cart/Cart.component.tsx';
import type { Product } from '@/interfaces/Products.ts';

import styles from './ProductList.module.css';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <>
        <div className={styles.productCard}>
            <img className={styles.imgProduct} src={product.images[0]} alt="" />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <div className={styles.lowerCard}>
                <div className={styles.priceFlex}>
                    <p className={styles.productPrice}>{product.price}</p>
                    <p className={styles.priceUah}>₴</p>
                </div>
                <CartComponent productId={product.id.toString()} />
            </div>
        </div>
    </>
);

export default ProductCard;
