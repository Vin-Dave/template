import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ServicesPage.module.scss';

const ServicesPage = () => {
    const pageVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const [servicesRef, servicesInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            className={styles.servicesPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            <div className={styles.container}>
                <h1 className={styles.title}>Nasze Usługi</h1>
                <p className={styles.description}>
                    Oferujemy kompleksowe rozwiązania webowe dla Twojego biznesu,
                    wykorzystując najnowsze technologie i najlepsze praktyki.
                </p>

                <motion.div
                    className={styles.services}
                    ref={servicesRef}
                    initial="hidden"
                    animate={servicesInView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    <motion.div className={styles.service} variants={itemVariants}>
                        <div className={styles.serviceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h2 className={styles.serviceTitle}>Tworzenie Stron Internetowych</h2>
                        <p className={styles.serviceDescription}>
                            Projektujemy i tworzymy nowoczesne, responsywne strony internetowe
                            dopasowane do potrzeb Twojego biznesu.
                        </p>
                        <ul className={styles.serviceFeatures}>
                            <li>Responsywne projekty</li>
                            <li>Optymalizacja SEO</li>
                            <li>Szybkie ładowanie strony</li>
                            <li>Intuicyjny interfejs użytkownika</li>
                        </ul>
                    </motion.div>

                    <motion.div className={styles.service} variants={itemVariants}>
                        <div className={styles.serviceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9L12 2L22 9V22H2V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h2 className={styles.serviceTitle}>Aplikacje SPA</h2>
                        <p className={styles.serviceDescription}>
                            Tworzymy wydajne aplikacje jednostronicowe z płynną nawigacją
                            i doskonałym doświadczeniem użytkownika.
                        </p>
                        <ul className={styles.serviceFeatures}>
                            <li>Dynamiczne interfejsy</li>
                            <li>Wydajne ładowanie danych</li>
                            <li>Płynna nawigacja</li>
                            <li>Modern JavaScript (React, Redux)</li>
                        </ul>
                    </motion.div>

                    <motion.div className={styles.service} variants={itemVariants}>
                        <div className={styles.serviceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 22V12H4V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 7H16.5C17.3284 7 18 6.32843 18 5.5C18 4.67157 17.3284 4 16.5 4C15.6716 4 15 4.67157 15 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 7H7.5C6.67157 7 6 6.32843 6 5.5C6 4.67157 6.67157 4 7.5 4C8.32843 4 9 4.67157 9 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h2 className={styles.serviceTitle}>Sklepy Internetowe</h2>
                        <p className={styles.serviceDescription}>
                            Funkcjonalne i bezpieczne platformy e-commerce, które pomogą
                            rozwinąć Twój biznes online.
                        </p>
                        <ul className={styles.serviceFeatures}>
                            <li>Bezpieczne płatności</li>
                            <li>Zarządzanie produktami</li>
                            <li>Integracja z systemami</li>
                            <li>Analityka sprzedaży</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ServicesPage;