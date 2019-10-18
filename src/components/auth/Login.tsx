import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { IAuthContext, AuthContext } from './AuthContext';

const Login: React.FC<RouteComponentProps> = props => {

    const context: IAuthContext = useContext(AuthContext);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    useEffect(() => {

        if (context.bearer) {
            props.history.push('/');
            return;
        }

        const code = props.location.search.split("=")[1];

        if (!code) {
            window.location.href = context.apiUrl;
        } else {
            axios.post(`${process.env.SERVER}:${process.env.PORT}/auth`, { code }, { headers })
                .then(({ data }) => {
                    
                    // access_token=c182c1af4deed006b6eb9fbba7f01e76&token_type=Bearer
                    const tokenType = data.split('=')[2];
                    const accessToken = data.split('=')[1].split('&')[0];

                    if (!tokenType || !accessToken) {
                        window.location.href = context.apiUrl;
                    } else {
                        const bearer = `${tokenType} ${accessToken}`;
                        context.login(bearer);
                        // Using props.history.push('/') causes an authentication error while retrieving things data
                        window.location.href = `${process.env.SERVER}:${process.env.PORT}`;
                    }
                });
        }
    }, []);

    return <div>Logging in</div>;
};

export default Login;
