import React, { Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'; 

const Homepage = lazy(()=>import('./pages/HomePage'));

const AppRouter :React.FC = () =>{
    return <Router>
        <Suspense fallback={<div>Loading...</div>} >
            <Switch>
                <Route path='/' component={Homepage} />
            </Switch>
        </Suspense>
    </Router>
}

export default AppRouter;