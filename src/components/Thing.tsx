import React from 'react';
import { IThing } from '../models/IThing';
import { Link } from 'react-router-dom';

interface IThingProps {
    key: number;
    data: IThing;
}

export const Thing: React.FC<IThingProps> = (thing: IThingProps) => {
    return (
        <div className="thing">
            <p><strong>Name:</strong> {thing.data.name}</p>
            <img src={thing.data.thumbnail} alt={thing.data.thumbnail} />
            <p><Link to={`/things/${thing.data.id}`}>Detail</Link></p>
            <p><strong>Creator:</strong> {thing.data.creator.first_name
                ? `${thing.data.creator.first_name} ${thing.data.creator.last_name}`
                : thing.data.creator.last_name}
            </p>
        </div>
    )
}