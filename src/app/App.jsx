import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';

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
        <ConfigProvider
            theme={{
                token: {},
                components: {},
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}

export default App;
