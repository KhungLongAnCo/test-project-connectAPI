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
        main: ({match,history}) => <ProductActionPages history={history}/>
    },
    {
        path:'/products/:id/edit',
        exact:false,
        main: ({match,history}) => <ProductActionPages match={match} history={history} />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound />
    }
];

export default Route;