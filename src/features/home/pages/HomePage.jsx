import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styles from './HomePage.module.scss';

const HomePage = () => {
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

    const [featuresRef, featuresInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

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
                    <motion.h1
                        className={styles.title}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Tworzymy nowoczesne strony internetowe
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Wykorzystujemy najlepsze frameworki i praktyki programowania
                    </motion.p>

                    <motion.div
                        className={styles.cta}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to="/kontakt" className={styles.ctaButton}>
                            Kontakt
                        </Link>
                        <Link to="/portfolio" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
                            Portfolio
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className={styles.features} ref={featuresRef}>
                <div className={styles.container}>
                    <motion.h2
                        className={styles.featuresTitle}
                        initial={{ opacity: 0 }}
                        animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Nasze Usługi
                    </motion.h2>

                    <motion.div
                        className={styles.featuresGrid}
                        initial="hidden"
                        animate={featuresInView ? "visible" : "hidden"}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        <motion.div className={styles.feature} variants={itemVariants}>
                            <div className={styles.featureIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 8.5L12 2L22 8.5V15.5L12 22L2 15.5V8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Responsywne Strony</h3>
                            <p className={styles.featureDescription}>
                                Tworzymy strony, które doskonale wyglądają na każdym urządzeniu.
                            </p>
                        </motion.div>

                        <motion.div className={styles.feature} variants={itemVariants}>
                            <div className={styles.featureIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Aplikacje SPA</h3>
                            <p className={styles.featureDescription}>
                                Szybkie i wydajne aplikacje jednostronicowe z płynną nawigacją.
                            </p>
                        </motion.div>

                        <motion.div className={styles.feature} variants={itemVariants}>
                            <div className={styles.featureIcon}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 11V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V11M20 11L12 17M20 11H4M12 17L4 11M12 17V22M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>E-commerce</h3>
                            <p className={styles.featureDescription}>
                                Sklepy internetowe z intuicyjnym interfejsem i bezpiecznymi płatnościami.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default HomePage;