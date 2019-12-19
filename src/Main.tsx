import React from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Routes from './routes';
import {store, persistor} from 'store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
//@ts-ignore
import {TOKEN_GITHUB} from 'react-native-dotenv';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `token ${TOKEN_GITHUB}`,
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
