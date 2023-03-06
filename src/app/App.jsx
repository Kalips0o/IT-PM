import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import MainPage from '../pages/MainPage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import AppLayout from '../layouts/AppLayout';

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
