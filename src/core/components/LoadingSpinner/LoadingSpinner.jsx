import { useState, useEffect } from 'react';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = ({ delay = 300 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    if (!isVisible) return null;

    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}>
                <div className={styles.spinnerCircle}></div>
                <div className={`${styles.spinnerCircle} ${styles.spinnerCircleDelay}`}></div>
                <div className={`${styles.spinnerCircle} ${styles.spinnerCircleDelayMore}`}></div>
            </div>
            <p className={styles.spinnerText}>Ładowanie...</p>
        </div>
    );
};

export default LoadingSpinner;