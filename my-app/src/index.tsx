import React from 'react';
import ReactDOM from 'react-dom/client';
import './templates/index.css';
import Router from './Router';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: "http://0.0.0.0:5000/graphql", // Your running GraphQL server URL
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client = {client}>
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
  </ApolloProvider>
);

