import React from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Routes from './routes';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `token ad679edbe9e9aa531a9a417abb57d7aac6bde767 `,
      },
    });
  },
});

export default function Main() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
