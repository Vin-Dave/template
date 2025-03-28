import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from './core/layouts/MainLayout';
import ErrorPage from './core/components/ErrorPage';
import HomePage from './features/home/pages/HomePage';

const ServicesPage = lazy(() => import('./features/services/pages/ServicesPage'));
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
                element: <ServicesPage />,
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />,
            },
            {
                path: 'o-nas',
                element: <AboutPage />,
            },
            {
                path: 'kontakt',
                element: <ContactPage />,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;