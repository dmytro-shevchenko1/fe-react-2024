import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FiltersComponent from '@/components/filters/Filters.component.tsx';
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner.component.tsx';
import { SortOption } from '@/constants/filtersSortOption.ts';
import useFetchCategories from '@/hooks/fetch/useFetchCategories.component.tsx';
import useFetchProducts from '@/hooks/fetch/useFetchProducts.component.tsx';
import type { Category } from '@/interfaces/Category.ts';

import PaginationComponent from '../pagination/Pagination.component.tsx';

import ProductCard from './ProductCard.component.tsx';

import styles from './ProductList.module.css';

const ProductsList: React.FC = () => {
    const [searchParameters, setSearchParameters] = useSearchParams();
    const [currentPage, setCurrentPage] = useState<number>(Number.parseInt(searchParameters.get('page') || '1', 10));
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [sortOption, setSortOption] = useState<SortOption>((searchParameters.get('sort') as SortOption) || SortOption.PRICE_HIGH_TO_LOW);
    const [searchQuery, setSearchQuery] = useState<string>(searchParameters.get('search') || '');
    const [searchInput, setSearchInput] = useState<string>(searchParameters.get('search') || '');
    const [totalPages, setTotalPages] = useState(0);

    const productsPerPage = 8;

    const capitalizeFirstLetter = (input: string): string => input.replaceAll(/\b\w/g, (char) => char.toUpperCase());

    const offset = (currentPage - 1) * productsPerPage;
    const categoryIds = selectedCategories.map((category) => category.id).join(',');
    const sortField = sortOption === SortOption.NEWEST || SortOption.OLDEST ? 'date' : 'price';
    const sortOrder = sortOption === SortOption.PRICE_HIGH_TO_LOW || SortOption.OLDEST ? 'desc' : 'asc';

    const url = `https://ma-backend-api.mocintra.com/api/v1/products?limit=${productsPerPage}&offset=${offset}&title=${capitalizeFirstLetter(searchQuery.toLowerCase())}&categoryId=${categoryIds}&sortField=${sortField}&sortOrder=${sortOrder}`;

    const { data: productsData, isLoading: isProductsLoading } = useFetchProducts(url);
    const { data: categories } = useFetchCategories();

    useEffect(() => {
        if (productsData) {
            setTotalPages(Math.ceil(productsData.total / productsPerPage));
        }
    }, [productsData]);

    const updateSearchParameters = (parameters: Record<string, string>) => {
        const newSearchParameters = new URLSearchParams(searchParameters);
        Object.entries(parameters).forEach(([key, value]) => {
            if (value) {
                newSearchParameters.set(key, value);
            } else {
                newSearchParameters.delete(key);
            }
        });
        setSearchParameters(newSearchParameters);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        updateSearchParameters({ page: page.toString() });
    };

    const handleCategorySelect = (category: Category) => {
        setSelectedCategories((previousCategories) => (previousCategories.includes(category) ? [] : [category]));
        setCurrentPage(1);
        updateSearchParameters({ category: category.id.toString(), page: '1' });
    };

    const handleSortSelect = (selectedSortOption: SortOption) => {
        setSortOption(selectedSortOption);
        setCurrentPage(1);
        updateSearchParameters({ sort: selectedSortOption, page: '1' });
    };

    const handleSearchInput = (query: string) => {
        setSearchInput(query);
    };

    const handleSearch = () => {
        setSearchQuery(searchInput);
        setCurrentPage(1);
        updateSearchParameters({ search: searchInput, page: '1' });
    };

    return (
        <div className={styles.container}>
            <FiltersComponent
                categories={categories || []}
                selectedCategories={selectedCategories}
                sortOption={sortOption}
                searchQuery={searchInput}
                handleCategorySelect={handleCategorySelect}
                handleSortSelect={handleSortSelect}
                setSearchQuery={handleSearchInput}
                handleSearch={handleSearch}
            />
            {isProductsLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className={styles.cardsPlacement}>
                        {productsData && productsData.products.length > 0 ? (
                            productsData.products.map((product) => <ProductCard key={product.id} product={product} />)
                        ) : (
                            <p>No products found</p>
                        )}
                    </div>
                    <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </>
            )}
        </div>
    );
};

export default ProductsList;
