import mockProducts from '@/components/productList/mockData.json';
import type { Product } from '@/interfaces/Products.ts';

import ProductCard from './ProductCard.component.tsx';

import styles from './ProductList.module.css';

interface ProductsListProps {
    addToCart: () => void;
}
const ProductsList: React.FC<ProductsListProps> = ({ addToCart }) => (
    <>
        <div className={styles.container}>
            <div className={styles.cardsPlacement}>
                {mockProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    </>
);

export default ProductsList;
