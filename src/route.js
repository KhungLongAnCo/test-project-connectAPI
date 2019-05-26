import React from 'react';
import HomePages from './pages/HomePages/HomePages';
import NotFound from './pages/NotFoundPages/NotFoundPages';
import ProductListPage from './pages/ProductListPages/ProductListPage';
import ProductActionPages from './pages/ProductActionPages/ProductActionPage';

const Route = [
    {
        path: '/',
        exact: true,
        main: () => <HomePages />
    },
    {
        path: '/products-list',
        exact: true,
        main: () => <ProductListPage />
    },
    {
        path: '/products/add',
        exact: false,
        main: () => <ProductActionPages />
    },
    {
        path:'/products/:id/edit',
        exact:false,
        main: () => <ProductActionPages />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound />
    }
];

export default Route;