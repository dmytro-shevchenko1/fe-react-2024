import type { Product } from '@/interfaces/Products.ts';
import mockProducts from '@/mocks/mockData.json';

import ProductCard from './ProductCard.component.tsx';

import styles from './ProductList.module.css';

interface ProductsListProps {
    addToCart: () => void;
    theme: 'light' | 'dark';
}
const ProductsList: React.FC<ProductsListProps> = ({ addToCart, theme }) => (
    <>
        <div className={styles.container}>
            <div className={styles.cardsPlacement}>
                {mockProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} theme={theme} />
                ))}
            </div>
        </div>
    </>
);

export default ProductsList;
