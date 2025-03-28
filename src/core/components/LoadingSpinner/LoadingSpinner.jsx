import { useState, useEffect } from 'react';
import './LoadingSpinner.module.scss';

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
        <div className="spinner-container">
            <div className="spinner">
                <div className="spinner__circle"></div>
                <div className="spinner__circle spinner__circle--delay"></div>
                <div className="spinner__circle spinner__circle--delay-more"></div>
            </div>
            <p className="spinner__text">Ładowanie...</p>
        </div>
    );
};

export default LoadingSpinner;