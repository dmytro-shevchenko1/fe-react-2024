import { useEffect, useState } from 'react';

import FiltersComponent from '@/components/filters/Filters.component.tsx';
import type { Product } from '@/interfaces/Products.ts';
import mockProducts from '@/mocks/mockData.json';

import PaginationComponent from '../pagination/Pagination.component.tsx';

import ProductCard from './ProductCard.component.tsx';

import styles from './ProductList.module.css';

const ProductsList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState<string>('priceSort');
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const filterAndSortProducts = () => {
            let updatedProducts = [...mockProducts];

            if (selectedCategories.length > 0) {
                updatedProducts = updatedProducts.filter((product) => selectedCategories.includes(product.category.name));
            }

            if (searchQuery) {
                updatedProducts = updatedProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
            }

            switch (sortOption) {
                case 'priceAsc': {
                    updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
                    break;
                }
                case 'priceSort': {
                    updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
                    break;
                }
                case 'dateNewest': {
                    updatedProducts = updatedProducts.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime());
                    break;
                }
                case 'dateOldest': {
                    updatedProducts = updatedProducts.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime());
                    break;
                }
            }

            setFilteredProducts(updatedProducts);
            setCurrentPage(1);
        };

        filterAndSortProducts();
    }, [selectedCategories, sortOption, searchQuery]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCategorySelect = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    const handleSortSelect = (selectedSortOption: string) => {
        setSortOption(selectedSortOption);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <>
            <div className={styles.container}>
                <FiltersComponent onCategorySelect={handleCategorySelect} onSortSelect={handleSortSelect} onSearch={handleSearch} />
                <div className={styles.cardsPlacement}>
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
};

export default ProductsList;
