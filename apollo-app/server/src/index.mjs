import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

import { logger } from './logger.mjs';
import { app } from './app.mjs';
import { apollo } from './apollo.mjs';

const server = http.createServer(app);

apollo.installSubscriptionHandlers(server);

server
  .listen(process.env.PORT)
  .on('listening', () => {
    logger.info(
      `web server listening on port http://localhost:${process.env.PORT}${apollo.graphqlPath}`,
    );
    logger.info(
      `web socket server listening on port ws://localhost:${process.env.PORT}${apollo.subscriptionsPath}`,
    );
  })
  .on('error', (err) => {
    console.log(err);
  });
