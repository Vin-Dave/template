import { useRouteError, Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={styles.errorPage}>
            <div className={styles.container}>
                <h1 className={styles.title}>Ups!</h1>
                <p className={styles.message}>Przepraszamy, wystąpił nieoczekiwany błąd.</p>
                <p className={styles.details}>
                    {error?.statusText || error?.message || 'Nieznany błąd'}
                </p>
                <div className={styles.actions}>
                    <Link to="/" className={styles.button}>
                        Powrót do strony głównej
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;