import express from 'express';
import httpProxy from 'http-proxy';
import path from 'path';

import { logger } from './logger.mjs';
import { apollo } from './apollo.mjs';

const proxy = httpProxy.createProxyServer({});

export const app = express();

// middleware for the GraphQL
apollo.applyMiddleware({ app, path: '/graphql' });

// middleware for the reverse proxy for the React
app.use('/', function app(req, res) {
  proxy.web(
    req,
    res,
    { target: 'http://localhost:3000' },
    function proxyWebErrorHandler(err) {
      logger.error(err.message);
      res.sendFile(path.resolve('./public/index.html'));
    },
  );
});
