import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import Header from '../Header';
// import Footer from '../Footer';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.layout}>
            {/*<Header />*/}
            <main className={styles.main}>
                <Outlet />
            </main>
            {/*<Footer />*/}
        </div>
    );
};

export default MainLayout;