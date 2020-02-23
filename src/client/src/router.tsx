import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'; 
import Homepage from './pages/HomePage';

const AppRouter :React.FC = () =>{
    return <Router>
        <div>
            <Switch>
                <Route path='/' render={Homepage} />
            </Switch>
        </div>
    </Router>
}

export default AppRouter;