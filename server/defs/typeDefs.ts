import { gql } from 'apollo-boost';

export const typeDefs = gql`
    type Query {
        newest: [Thing]
        popular: [Thing]
        featured: [Thing]
        verified: [Thing]
        thing(id: Int!): Thing
    }

    type Thing {
        id: ID
        name: String
        thumbnail: String
        creator: Creator
        like_count: Int
        download_count: Int
        view_count: Int
        description: String
        instructions: String
        details: String
        license: String
    }

    type Creator {
        name: String
        first_name: String
        last_name: String
        thumbnail: String
    }
`;