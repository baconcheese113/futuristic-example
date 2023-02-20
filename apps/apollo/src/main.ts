import { startStandaloneServer } from '@apollo/server/standalone';

import { server } from './server';

const path = '/graphql';
const port = Number(process.env.PORT) || 8080;

startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port, path },
}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
