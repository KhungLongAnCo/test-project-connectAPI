import React, {Component} from 'react';
import HomePages from './pages/HomePages/HomePages';
import NotFound from './pages/NotFoundPages/NotFoundPages';

const Route = [
    {
        path:'/',
        exact: true,
        main: () => <HomePages />
    },
    {
        path:'',
        exact:true,
        main: () => <NotFound />
    }
];

export default Route;