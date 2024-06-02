import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const renderPaginationItems = () => {
        const items = [];

        items.push(
            <button
                className={`${styles.paginationButton} ${currentPage === 1 ? styles.active : ''}`}
                key={1}
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
            >
                1
            </button>,
        );

        if (currentPage > 3) {
            items.push(<span key="prevEllipsis">...</span>);
        }

        for (let index = Math.max(2, currentPage - 1); index <= Math.min(totalPages - 1, currentPage + 1); index++) {
            items.push(
                <button
                    className={`${styles.paginationButton} ${currentPage === index ? styles.active : ''}`}
                    key={index}
                    onClick={() => handlePageChange(index)}
                    disabled={currentPage === index}
                >
                    {index}
                </button>,
            );
        }

        if (currentPage < totalPages - 2) {
            items.push(<span key="nextEllipsis">...</span>);
        }

        if (totalPages > 1) {
            items.push(
                <button
                    className={styles.paginationButton}
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    {totalPages}
                </button>,
            );
        }

        return items;
    };

    return (
        <>
            <div className={styles.paginationFlex}>
                <button
                    className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {renderPaginationItems()}
                <button
                    className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </>
    );
};

export default PaginationComponent;
