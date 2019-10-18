import React, { useContext } from 'react';
import { EThingsType } from '../models/EThingsType';
import { Link } from 'react-router-dom';
import { IAuthContext, AuthContext } from './auth/AuthContext';

export const Nav: React.FC<any> = ({ onSwitchType }) => {

    const { bearer } = useContext<IAuthContext>(AuthContext);

    if (!bearer) return <div></div>
    return (
        <ul className="nav">
            {Object.keys(EThingsType).map(type =>
                <li key={type}>
                    <Link onClick={() => onSwitchType(EThingsType[type].toLowerCase())} to={`/things/${EThingsType[type].toLowerCase()}`}>{EThingsType[type]}</Link>
                </li>
            )}
        </ul>
    );
}