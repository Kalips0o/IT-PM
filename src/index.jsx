import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import 'antd/dist/reset.css';
import './index.scss';

import AppAnt from './AppAnt.jsx';
import MainPage from './pages/MainPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <AppAnt />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
