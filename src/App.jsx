import { Suspense } from 'react';
import Router from './Router';
import LoadingSpinner from './core/components/LoadingSpinner';

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Router />
        </Suspense>
    );
}

export default App;