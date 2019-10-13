import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { IAuthContext, AuthContext } from './AuthContext';

const Login: React.FC<RouteComponentProps> = props => {

    const context: IAuthContext = useContext(AuthContext);

    useEffect(() => {

        if (context.bearer) {
            props.history.push('/things/latest');
            return;
        }

        console.warn(props.location);
        const code = props.location.search.split("=")[1];


        if (!code) {
            window.location.href = context.apiUrl;
        } else {
            axios.post(`${process.env.SERVER}:${process.env.PORT}/auth`, { code })
                .then(({ data }) => {
                    console.warn(data);

                    // TODO: Set bearer to context and redirect
                });
        }
    }, []);

    return <div>Logging in</div>;
};

export default Login;
