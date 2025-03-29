import { Suspense } from 'react';
// import { HelmetProvider } from 'react-helmet-async';
import Router from './Router';
import LoadingSpinner from './core/components/LoadingSpinner';
import './styles/main.scss';

function App() {
    return (
        <HelmetProvider>
            <Suspense fallback={<LoadingSpinner />}>
                <Router />
            </Suspense>
        </HelmetProvider>
    );
}

export default App;