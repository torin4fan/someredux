import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import NavLayout from './components/layouts/nav-layout';

// Pages
import Home from './components/home';
import LoginContainer from './components/containers/login-container';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route component={NavLayout}>
                <Route path="/" component={Home}/>

                <Route path="login" component={LoginContainer}/>
            </Route>
        </Route>
    </Router>
);
