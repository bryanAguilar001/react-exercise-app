import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from '../../routes/helperRoutes';
import UserListComponent from './user-list/user-list.component';
import UserDetailComponent from './user-detail/user-detail.component';

const UserRoutes = () => {
    const {path} = useRouteMatch();
    return (    
        <Switch>
            <PrivateRoute exact path={path} component={UserListComponent}/>
            <PrivateRoute exact path={`${path}/list`} component={UserListComponent}/>
            <PrivateRoute exact path={`${path}/detail/:id`} component={UserDetailComponent}/>
            <Route exact path='*' render={() => {
                return <Redirect to='/'/>
            }} />
        </Switch>
    )
}

export default UserRoutes;