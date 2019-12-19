import React from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Routes from './routes';
import {store, persistor} from 'store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `token 62887b1cdaa7b68bb578590285af8a0e582d01a6`,
      },
    });
  },
});

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
