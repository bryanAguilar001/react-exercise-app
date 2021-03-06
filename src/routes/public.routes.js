import React from 'react';
import { Switch } from 'react-router';
import { PublicRoute } from './helperRoutes';
import { Redirect } from 'react-router';
import AboutView from '../views/AboutView';
import HomeView from '../views/HomeView';
import PublicView from '../views/PublicView';
import LoginView from '../views/LoginView';
import { Route } from 'react-router-dom';

const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact path='/' component={HomeView}/>
            <PublicRoute exact path='/about' component={AboutView}/>
            <PublicRoute exact path='/public' component={PublicView}/>
            <PublicRoute exact path='/login' component={LoginView}/>
            <Route exact path='*' render={() => {
                return <Redirect to='/login'/>
            }} />
            {/* Redirect when the url is incorrect */}
            {/* <Redirect path='**' to='/'/> */}
        </Switch>
    );
}

export default PublicRoutes;