import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setIsHeaderTransparent(position <= 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isHeaderTransparent ? styles.headerTransparent : styles.headerSolid}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo} onClick={closeMenu}>
                    <span>CompanyName</span>
                </Link>

                <button
                    className={`${styles.hamburgerButton} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ''}`}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                                }
                                onClick={closeMenu}
                            >
                                Strona Główna
                            </NavLink>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLink
                                to="/uslugi"
                                className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                                }
                                onClick={closeMenu}
                            >
                                Usługi
                            </NavLink>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                                }
                                onClick={closeMenu}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLink
                                to="/o-nas"
                                className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                                }
                                onClick={closeMenu}
                            >
                                O Nas
                            </NavLink>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLink
                                to="/kontakt"
                                className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                                }
                                onClick={closeMenu}
                            >
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;