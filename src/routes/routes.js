import React from 'react';
import { Switch } from 'react-router';
import { PrivateRoute, PublicRoute } from './helperRoutes';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { isAuthenticated } from '../data/services/auth/auth';

import AboutView from '../views/AboutView';
import HomeView from '../views/HomeView';
import PublicView from '../views/PublicView';
import LoginView from '../views/LoginView';
import PrivateView from '../views/Private1View';
import Private2View from '../views/Private2View';
import View404 from '../views/404';

const Routes = () => {

    const isAuth = isAuthenticated();

    return (
        <Switch>
            <PublicRoute exact path='/' component={HomeView}/>
            <PublicRoute exact path='/about' component={AboutView}/>
            <PublicRoute exact path='/public' component={PublicView}/>
            <PublicRoute exact path='/login' component={LoginView}/>

            <PrivateRoute exact path='/private1' component={PrivateView}/>
            <PrivateRoute exact path='/private2' component={Private2View}/>

            <Route exact path='/404' component={View404}/>

            <Route exact path='*' render={() => {
                return <Redirect to={ isAuth ? '/private1' : '/login' }/>
            }} />
        </Switch>
    );
}

export default Routes;