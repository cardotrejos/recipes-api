import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import { buildSchema } from "type-graphql";

import { RecipeResolver } from "./resolvers/RecipeResolver";
import { UserResolver } from './resolvers/UserResolver';
import { CategoryResolver } from './resolvers/CategoryResolver';

export async function startServer(){

  const app = express();
  
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RecipeResolver, UserResolver, CategoryResolver],
      validate: false
    }),
    context: ({ req, res }) => ({req, res})
  })
  
  server.applyMiddleware({app, path: '/graphql'})

  return app;
}


