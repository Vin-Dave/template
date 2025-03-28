import React from 'react';
import { motion } from 'framer-motion';
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
                <p className={styles.description}>Oferujemy kompleksowe rozwiązania webowe dla Twojego biznesu.</p>

                <div className={styles.services}>
                    {/* Tu będzie zawartość usług */}
                    <div className={styles.service}>
                        <h2 className={styles.serviceTitle}>Tworzenie Stron Internetowych</h2>
                        <p className={styles.serviceDescription}>Nowoczesne i responsywne strony oparte o najlepsze praktyki.</p>
                    </div>

                    <div className={styles.service}>
                        <h2 className={styles.serviceTitle}>Aplikacje SPA</h2>
                        <p className={styles.serviceDescription}>Wydajne aplikacje jednostronicowe z płynną nawigacją.</p>
                    </div>

                    <div className={styles.service}>
                        <h2 className={styles.serviceTitle}>Sklepy Internetowe</h2>
                        <p className={styles.serviceDescription}>Funkcjonalne i bezpieczne platformy e-commerce.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesPage;