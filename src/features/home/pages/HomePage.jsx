import React from 'react';
import { motion } from 'framer-motion';
// import styles from './HomePage.module.scss';


const HomePage = () => {
    const pageVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className={styles.homePage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Tworzymy nowoczesne strony internetowe</h1>
                    <p className={styles.subtitle}>Wykorzystujemy najlepsze frameworki i praktyki programowania</p>
                    <div className={styles.cta}>
                        <button className={styles.ctaButton}>Kontakt</button>
                        <button className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>Portfolio</button>
                    </div>
                </div>
            </section>


        </motion.div>
    );
};

export default HomePage;