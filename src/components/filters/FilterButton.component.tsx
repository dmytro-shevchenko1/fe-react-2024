import type { Category } from '@/interfaces/Category.ts';

import styles from './Filters.module.css';

interface CategoryFilterButtonsProps {
    categories: Category[];
    selectedCategories: Category[];
    handleCategorySelect: (category: Category) => void;
}

const CategoryFilterButtons: React.FC<CategoryFilterButtonsProps> = ({ categories, selectedCategories, handleCategorySelect }) => {
    // console.log('Categories in CategoryFilterButtons:', categories);

    const limitedCategories = categories.slice(0, 3);

    return (
        <div className={styles.filterButtonsFlex}>
            {limitedCategories && limitedCategories.length > 0 ? (
                limitedCategories.map((category) => (
                    <button
                        key={category.id}
                        className={`${styles.filterButton} ${selectedCategories.includes(category) ? styles.active : ''}`}
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category.name}
                    </button>
                ))
            ) : (
                <p>No categories available</p>
            )}
        </div>
    );
};

export default CategoryFilterButtons;
