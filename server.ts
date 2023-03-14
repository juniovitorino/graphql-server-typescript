import "colors"
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/type-defs.js';
import { resolvers } from './schema/resolvers.js';
import * as dotenv from 'dotenv'

dotenv.config()

interface APIContext{}

const server = new ApolloServer<APIContext>({ typeDefs, resolvers });
const API_SERVER_PORT = process.env.API_SERVER_PORT || 4000

const { url } = await startStandaloneServer(server, { 
  listen: { port: API_SERVER_PORT as number},
});

console.log(`🚀 Server ready at `.yellow + `${url}`.green)
