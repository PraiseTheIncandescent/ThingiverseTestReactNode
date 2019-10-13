import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { IAuthContext, AuthContext } from './auth/AuthContext';

interface IProtectedRoute {
    component: React.FC<any>;
    path: string;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({component: Component, ...rest}) => {

    // TODO: Check if it is authenticated
    const { bearer } = useContext<IAuthContext>(AuthContext);

    return (
      <Route {...rest} render={props => <Component {...props} {...rest} />} />
      // <Route {...rest} render={props => bearer ? <Component {...props} {...rest} /> : <Redirect to="/" />} />
    );
}