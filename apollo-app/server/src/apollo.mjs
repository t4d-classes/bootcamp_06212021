import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './typeDefs.mjs';
import { resolvers } from './resolvers.mjs';

const apolloServerConfig = {
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    return {
      req,
      res,
      restUrl: process.env.REST_URL,
    };
  },
  dataSources: () => ({}),
};

export const apollo = new ApolloServer(apolloServerConfig);
