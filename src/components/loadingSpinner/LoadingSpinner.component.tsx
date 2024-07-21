import styles from './Loading.module.css';

const LoadingSpinner: React.FC = () => (
    <>
        <div className={styles.spinnerContainer}>
            <div className={styles.loader}></div>
            <p>Loading...</p>
        </div>
    </>
);

export default LoadingSpinner;
