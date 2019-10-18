import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Thing } from './Thing';
import { IThing } from '../models/IThing';

interface IThingListProps {
    type: string;
}

interface IThingTypes {
    newest?: IThing[];
    popular?: IThing[];
    featured?: IThing[];
    verified?: IThing[];
}

export const ThingsList: React.FC<IThingListProps> = ({ type }) => {

    const { loading, data } = useQuery<IThingTypes>(gql`
    {
      ${type} {
          id
          name
          thumbnail
          creator {
            name
            first_name
            last_name
            thumbnail
          }
        }
      }
  `);

    return loading
        ? <div>Loading..</div>
        : (
            <div className="things-list">
                {data[type].map(thing => <Thing key={thing.id} data={thing} />)}
            </div>
        );
}