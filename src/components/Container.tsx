import React, { useState } from 'react';
import { Nav } from './Nav';
import { ThingsList } from './ThingsList';
import { ProtectedRoute } from './ProtectedRoute';
import { Switch, Route, Redirect } from 'react-router';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import Login from './auth/Login';
import AuthProvider from './auth/AuthProvider';
import { AuthContext } from './auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../common/Header';

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: `${process.env.SERVER}:${process.env.PORT}/graphql`,
    headers: {
        Authorization: localStorage.getItem('auth') || ''
    }
});

export const Container: React.FC = () => {

    const [type, setType] = useState(
        'latest'
    );

    const switchType = (type: string) => {
        setType(type);
    }

    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <AuthContext.Consumer>
                        {({ bearer }) => (
                            <ApolloProvider client={apolloClient}>
                                <Header />
                                <Nav onSwitchType={(type: string) => switchType(type)} />
                                <Switch>
                                    <Route exact path="/" render={() => bearer ? <Redirect to={`/things/${type}`} /> : 'HEY YOU, PRESS LOGIN!'} />
                                    <Route path="/login" component={Login} />
                                    <ProtectedRoute path={`/things/${type}`} component={() => <ThingsList type={type} />} />
                                    <Route path="*" render={() => 'NOT FOUND'} />
                                </Switch>
                            </ApolloProvider>
                        )}
                    </AuthContext.Consumer>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}