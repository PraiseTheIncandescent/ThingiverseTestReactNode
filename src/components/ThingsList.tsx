import React from 'react';
import { Thing } from './Thing';
import { IThing } from '../models/IThing';

interface IThingListProps {
    type: string;
}

export const ThingsList: React.FC<IThingListProps> = ({type}) => {

    const img = 'http://www.penguinworld.com/rw_common/images/King.jpeg';

    const data: IThing[] = [
        { key: 1, name: 'name1', type: 1, img },
        { key: 2, name: 'name2', type: 2, img },
        { key: 3, name: 'name3', type: 3, img },
        { key: 4, name: 'name4', type: 4, img },
        { key: 5, name: 'Megaman', type: 5, img }
    ];

    return (
        <div className="things-list">
            {data.map(d => <Thing key={d.key} name={d.name} type={d.type} img={d.img} test={type} />)}
        </div>
    )
}