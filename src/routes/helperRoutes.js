import React from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '../data/services/auth/auth';

/**
 * Create a public routes
 * @param {component, options} param
 */
export const PublicRoute = ({component, ...options}) => {
    const isAuth = isAuthenticated();
    console.log(isAuth);
    if (!isAuth) return <Route {...options} component = {component} />;
    // If no authenticated
    return <Redirect to = '/private1' />;
}

/**
 * Create a private routes
 * @param {component, options} param
 */
 export const PrivateRoute = ({component, ...options}) => {
    const isAuth = isAuthenticated();
    if (isAuth) return <Route {...options} component = {component} />;
    // If no authenticated
    return <Redirect to = '/login' />;
}