import searchGlass from '@/assets/filtersImages/searchGlass.svg';

import styles from './Filters.module.css';

export const FiltersComponent = () => (
    <>
        <div className={styles.container}>
            <section className={styles.filterFlex}>
                <div className={styles.searchContainer}>
                    <input className={styles.searchBar} type="search" placeholder={'Search...'} />
                    <button className={styles.searchButton}>
                        <img src={searchGlass} alt="search" />
                    </button>
                </div>
                <div className={styles.rightFlex}>
                    <button className={styles.filterButton}>Electronics</button>
                    <button className={styles.filterButton}>Shoes</button>
                    <button className={styles.filterButton}>Clothes</button>
                    <div className={styles.sortFlex}>
                        <p className={styles.sortBy}>Sort by:</p>
                        <select className={styles.sortSelect} name="price" id="price">
                            <option value="priceSort">Price (High - Low)</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    </>
);

export default FiltersComponent;
