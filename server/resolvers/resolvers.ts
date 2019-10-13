import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
    Query: {
        newest: (_, __, { dataSources }) => dataSources.thingiverseAPI.getNewest(),
        popular: (_, __, { dataSources }) => dataSources.thingiverseAPI.getPopular(),
        featured: (_, __, { dataSources }) => dataSources.thingiverseAPI.getFeatured(),
        verified: (_, __, { dataSources }) => dataSources.thingiverseAPI.getVerified(),
        thing: (_, { id }, { dataSources }) => dataSources.thingiverseAPI.getThing(id)
    }
};