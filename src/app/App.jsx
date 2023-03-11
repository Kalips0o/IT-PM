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
            {
                path: '/chats/:chatId',
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
                token: {},
                components: {
                    Typography: {
                        fontSizeHeading1: 32,
                        fontSizeHeading2: 24,
                        fontSizeHeading3: 20,
                        fontSizeHeading4: 16,
                        fontSizeHeading5: 14,
                    },
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}

export default App;
