import React, { Suspense } from 'react'
import { Switch, HashRouter as Router, Route } from 'react-router-dom'; 
import routes from './data/routes';
import Navbar from './components/Navbar/Navbar';
import LoadingFallback from './components/commons/LoadingFallback/LoadingFallback'
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/commons/ErrorBoundary/ErrorBoundary';
import GlobalStyles from './assets/GlobalStyles';


const AppRouter :React.FC = () =>{
    return <ErrorBoundary>
        <GlobalStyles/>
        <Router>
            <Suspense fallback={<LoadingFallback/>} >
                    <Navbar/>
                    <Switch>
                        {routes.map(( item, index)=>(
                            <Route exact key={index}  path={item.path}> 
                                {item.component} 
                            </Route>
                        ))}
                    </Switch>
                    <Footer/>
            </Suspense>
        </Router>
    </ErrorBoundary>
};

export default AppRouter;