import searchGlass from '@/assets/filtersImages/searchGlass.svg';

import styles from './Filters.module.css';

interface SearchInputProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearch: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, setSearchQuery, handleSearch }) => (
    <div className={styles.searchContainer}>
        <input
            className={styles.searchBar}
            type="search"
            placeholder={'Search...'}
            value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
            <img src={searchGlass} alt="search" />
        </button>
    </div>
);

export default SearchInput;
