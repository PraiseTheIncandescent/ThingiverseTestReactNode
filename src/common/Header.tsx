import React, { useContext } from 'react';
import { IAuthContext, AuthContext } from '../components/auth/AuthContext';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {

    const { bearer, logout } = useContext<IAuthContext>(AuthContext);

    return (
        <header className="header">
            <span>Thingiverse App Using Node/React</span>
            {!bearer
                ? <Link to="/login"><button>Login</button></Link>
                : <Link onClick={logout} to="/"><button>Logout</button></Link>
            }
        </header>
    );
}