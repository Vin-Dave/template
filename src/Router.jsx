import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './core/layouts/MainLayout';
import ErrorPage from './core/components/ErrorPage';
import HomePage from './features/home/pages/HomePage';
import LoadingSpinner from './core/components/LoadingSpinner';

const ServicesPage = lazy(() => import('./features/services/pages/ServicesPage'));
// Uncomment when components are available
// const PortfolioPage = lazy(() => import('./features/portfolio/pages/PortfolioPage'));
// const AboutPage = lazy(() => import('./features/about/pages/AboutPage'));
// const ContactPage = lazy(() => import('./features/contact/pages/ContactPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'uslugi',
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <ServicesPage />
                    </Suspense>
                ),
            },
            // Uncomment when components are available
            /*
            {
                path: 'portfolio',
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <PortfolioPage />
                    </Suspense>
                ),
            },
            {
                path: 'o-nas',
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <AboutPage />
                    </Suspense>
                ),
            },
            {
                path: 'kontakt',
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <ContactPage />
                    </Suspense>
                ),
            },
            */
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;