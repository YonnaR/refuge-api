import {lazy} from 'react';

const Homepage = lazy(()=>import('../pages/HomePage'));

export default [
    {
        path:'/',
        component:Homepage,
        name:'home page',
    },
]