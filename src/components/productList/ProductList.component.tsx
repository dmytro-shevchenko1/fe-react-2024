import { useEffect, useState } from 'react';

import type { Category } from '@/components/filters/Filters.component.tsx';
import FiltersComponent from '@/components/filters/Filters.component.tsx';
import { SortOption } from '@/components/filters/Filters.component.tsx';
import type { Product } from '@/interfaces/Products.ts';
import mockProducts from '@/mocks/mockData.json';

import PaginationComponent from '../pagination/Pagination.component.tsx';

import ProductCard from './ProductCard.component.tsx';

import styles from './ProductList.module.css';

const ProductsList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [sortOption, setSortOption] = useState<SortOption>(SortOption.PRICE_HIGH_TO_LOW);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchInput, setSearchInput] = useState<string>('');

    const productsPerPage = 8;

    useEffect(() => {
        let updatedProducts = mockProducts;

        const filterProducts = () => {
            if (selectedCategories.length > 0) {
                updatedProducts = updatedProducts.filter((product) => selectedCategories.includes(product.category.name as Category));
            }

            if (searchQuery) {
                updatedProducts = updatedProducts.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
            }
        };
        filterProducts();

        const sortProducts = () => {
            switch (sortOption) {
                case SortOption.PRICE_LOW_TO_HIGH: {
                    updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
                    break;
                }
                case SortOption.PRICE_HIGH_TO_LOW: {
                    updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
                    break;
                }
                case SortOption.NEWEST: {
                    updatedProducts = updatedProducts.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime());
                    break;
                }
                case SortOption.OLDEST: {
                    updatedProducts = updatedProducts.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime());
                    break;
                }
            }
        };

        sortProducts();

        setFilteredProducts(updatedProducts);
        setCurrentPage(1);
    }, [selectedCategories, sortOption, searchQuery]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCategorySelect = (category: Category) => {
        setSelectedCategories((previousCategories) =>
            previousCategories.includes(category)
                ? previousCategories.filter((cat) => cat !== category)
                : [...previousCategories, category],
        );
    };

    const handleSortSelect = (selectedSortOption: SortOption) => {
        setSortOption(selectedSortOption);
    };

    const handleSearchInput = (query: string) => {
        setSearchInput(query);
    };

    const handleSearch = () => {
        setSearchQuery(searchInput);
    };

    return (
        <>
            <div className={styles.container}>
                <FiltersComponent
                    selectedCategories={selectedCategories}
                    sortOption={sortOption}
                    searchQuery={searchInput}
                    handleCategorySelect={handleCategorySelect}
                    handleSortSelect={handleSortSelect}
                    setSearchQuery={handleSearchInput}
                    handleSearch={handleSearch}
                />
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
