import React, {lazy} from 'react';
const Homepage = lazy(()=>import('../pages/HomePage'));
const ContactPage = lazy(()=>import('../pages/ContactPage'));
const NotFoundPage = lazy(()=>import('../pages/NotFoundPage'))
export default [
    {
        path:'/',
        component:<Homepage/>,
        name:'home page',
    },
    {
        path:'/contact',
        component:<ContactPage/>,
        name:'contact page',
    },
    {
        path:'/restaurant',
        component:<ContactPage/>,
        name:'restaurant page',
    },
    {
        path:'/gites',
        component:<ContactPage/>,
        name:'gites page',
    },
    {
        path:'*',
        component:<NotFoundPage/>,
        name:'not found page',
    }
]