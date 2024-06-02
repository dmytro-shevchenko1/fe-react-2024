import { useState } from 'react';

import searchGlass from '@/assets/filtersImages/searchGlass.svg';

import styles from './Filters.module.css';

interface FiltersComponentProps {
    onCategorySelect: (categories: string[]) => void;
    onSortSelect: (sortOption: string) => void;
    onSearch: (searchQuery: string) => void;
}

export const FiltersComponent: React.FC<FiltersComponentProps> = ({ onCategorySelect, onSortSelect, onSearch }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState<string>('priceSort');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleCategorySelect = (category: string) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
        onCategorySelect(updatedCategories);
    };

    const handleSortSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSortOption = event.target.value;
        setSortOption(selectedSortOption);
        onSortSelect(selectedSortOption);
    };

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <>
            <div className={styles.container}>
                <section className={styles.filterFlex}>
                    <div className={styles.searchContainer}>
                        <input
                            className={styles.searchBar}
                            type="search"
                            placeholder={'Search...'}
                            value={searchQuery}
                            onChange={handleSearchInput}
                        />
                        <button className={styles.searchButton} onClick={handleSearch}>
                            <img src={searchGlass} alt="search" />
                        </button>
                    </div>
                    <div className={styles.rightFlex}>
                        <div className={styles.filterButtonsFlex}>
                            <button
                                className={`${styles.filterButton} ${selectedCategories.includes('Electronics') ? styles.active : ''}`}
                                onClick={() => handleCategorySelect('Electronics')}
                            >
                                Electronics
                            </button>
                            <button
                                className={`${styles.filterButton} ${selectedCategories.includes('Shoes') ? styles.active : ''}`}
                                onClick={() => handleCategorySelect('Shoes')}
                            >
                                Shoes
                            </button>
                            <button
                                className={`${styles.filterButton} ${selectedCategories.includes('Clothes') ? styles.active : ''}`}
                                onClick={() => handleCategorySelect('Clothes')}
                            >
                                Clothes
                            </button>
                        </div>
                        <div className={styles.sortFlex}>
                            <p className={styles.sortBy}>Sort by:</p>
                            <select
                                className={styles.sortSelect}
                                name="sortOption"
                                id="sortOption"
                                value={sortOption}
                                onChange={handleSortSelect}
                            >
                                <option value="priceSort">Price (High - Low)</option>
                                <option value="priceAsc">Price (Low - High)</option>
                                <option value="dateNewest">Newest</option>
                                <option value="dateOldest">Oldest</option>
                            </select>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FiltersComponent;
