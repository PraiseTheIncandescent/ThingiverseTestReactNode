require('dotenv').config();
import console = require('console');
import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import cors from 'cors';
import axios from 'axios';
import { typeDefs } from './defs/typeDefs';
import { resolvers } from './resolvers/resolvers';
import ThingiverseAPI from './api/ThingiverseAPI';
import path from 'path';

// Initialize express 
const app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Initialize apollo server
const server = new ApolloServer({
  schema,
  context: ({ req: { headers: { authorization } } }) => ({
    token: authorization
  }),
  dataSources: () => ({ thingiverseAPI: new ThingiverseAPI() })
});

// Get CORS working
app.use(cors());

// Add Apollo as Middleware to express
app.use(express.json());
server.applyMiddleware({ app, path: '/graphql' });

// Get token with params in .env
app.post('/auth', (req, res) => {
  console.warn('uhh');

  axios.request({
    method: 'POST',
    url: 'https://www.thingiverse.com/login/oauth/access_token',
    params: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: req.body.code
    }
  }).then(r => res.json(r.data))
    .catch(({ message }) => {
      console.warn(message);
      res.send('there was an error')
    });
});


// Use compiled react ts
app.use(express.static('dist'));
app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, '/../dist/index.html'));
});

// Server start
app.listen(process.env.PORT, () => console.warn(`Listening on ${process.env.PORT}`));
