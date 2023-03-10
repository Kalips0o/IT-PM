import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';

import AppLayout from '../layouts/AppLayout.jsx';
import MainPage from '../pages/MainPage.jsx';
import SelectedChatPage from '../pages/SelectedChatPage.jsx';
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
            // TODO: replace "id" with dynamic path later
            {
                path: '/chats/id',
                element: <SelectedChatPage />,
                children: [],
            },
        ],
    },
]);

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSizeHeading1: 32,
                },
                components: {},
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}

export default App;
