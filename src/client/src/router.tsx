import React, { Suspense } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'; 
import routes from './data/routes';
import Navbar from './components/Navbar/Navbar';
import LoadingFallback from './components/LoadingFallback/LoadingFallback'


const AppRouter :React.FC = () =>{
    return <Router>
        <Suspense fallback={<LoadingFallback/>} >
            <Navbar/>
            <Switch>
                {routes.map(( item, index)=><Route key={index} path={item.path} component={item.component}/>)}
            </Switch>
        </Suspense>
    </Router>
};

export default AppRouter;