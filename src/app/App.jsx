import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import AppLayout from '../layouts/AppLayout.jsx';
import MainPage from '../pages/MainPage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainPage />,
                children: [],
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
