import React from 'react';
import { IThing } from '../models/IThing';

export const Thing: React.FC<IThing> = (data: IThing) => {
    return (
        <div className="thing">
            <p>Name: {data.name}</p>
            <p>Type: {data.type}</p>
            <img src={data.img} alt={data.name} />
            <p>{data.test}</p>
        </div>
    )
}