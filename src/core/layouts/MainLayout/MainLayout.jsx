import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
    const { pathname } = useLocation();
    const [pageTitle, setPageTitle] = useState('Aplikacja React');

    useEffect(() => {
        window.scrollTo(0, 0);

        const formatPath = () => {
            if (pathname === '/') return 'Strona Główna';

            const path = pathname.split('/').pop();
            return path.charAt(0).toUpperCase() + path.slice(1);
        };

        setPageTitle(`Aplikacja React | ${formatPath()}`);
        document.title = pageTitle;
    }, [pathname, pageTitle]);

    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;