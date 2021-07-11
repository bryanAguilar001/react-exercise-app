import React from 'react';
import { Switch } from 'react-router';
import { PrivateRoute } from './helperRoutes';
import PrivateView from '../views/Private1View';
import Private2View from '../views/Private2View';
import View404 from '../views/404';
import { Redirect, Route } from 'react-router-dom';

/**
 * Return private routes
 * @param {any} props 
 * @returns 
 */
const PrivateRoutes = (props) => {
    return (
        <Switch>
            <PrivateRoute exact path='/private1' component={PrivateView}/>
            <PrivateRoute exact path='/private2' component={Private2View}/>
            <PrivateRoute exact path='/404' component={View404}/>
            
            {/* Si no encuentra la ruta redirijo a la 404 forma 1 */}
            
            {/* <Route exact path='*' render={() => {
                return <Redirect to='/404'/>
            }} /> */}

            {/* Si no encuentra la ruta redirijo a la 404 forma 2 */}

            {/* <Route exact path='*' component={View404}/> */}

            {/* Si no encuentra la ruta redirijo a la private1 */}

            <Route exact path='*' render={() => {
                return <Redirect to='/private1'/>
            }} />
        </Switch>
    );
}

export default PrivateRoutes;