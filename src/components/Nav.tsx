import React from 'react';
import { EThingsType } from '../models/EThingsType';
import { Link } from 'react-router-dom';

export const Nav: React.FC<any> = ({ onSwitchType }) => {

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