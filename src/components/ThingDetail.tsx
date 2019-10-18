import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { IThingDetail } from '../models/IThingDetail';

interface IThingDetailData {
  thing: IThingDetail
}

export const ThingDetail: React.FC<RouteComponentProps<{ id: string }>> = props => {

  const thingId = props.match.params.id;

  const { loading, data } = useQuery<IThingDetailData>(gql`
    {
      thing(id: ${thingId}) {
        id
        name
        thumbnail
        creator{
          name
          first_name
          last_name
          thumbnail
        }
        description
        license
      }
    }
  `);

  return loading
    ? <div>Loading..</div>
    : (
      <div className="thing-detail">
        <p><strong>Name:</strong> {data.thing.name}</p>
        <img src={data.thing.thumbnail} alt={data.thing.thumbnail} />
        <p><strong>Creator:</strong> {data.thing.creator.first_name
          ? `${data.thing.creator.first_name} ${data.thing.creator.last_name}`
          : data.thing.creator.name}
        </p>
        <p className="w-md"><strong>Description:</strong> {data.thing.description}</p>
        <p><strong>License:</strong> {data.thing.license}</p>
      </div>
    );
}