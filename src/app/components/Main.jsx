import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';
import { Router, Route} from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';

export const Main = () =>(
    <Router history = {history}>
        <Provider store = {store}>
            <div>
                {/*Dashboard Goes Here*/}
                < ConnectedNavigation />
                {/*<ConnectedDashboard/>*/}
                <Route 
                    exact 
                    path="/dashboard" 
                    render = {()=>(<ConnectedDashboard/>)}
                    />
                <Route 
                    exact 
                    path="/helloWorld" 
                    render = {()=>(<div>HELLO WORLD</div>)}
                    />
            </div>
        </Provider>
    </Router>
)