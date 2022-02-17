import { ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';
import apolloCache from './cache';
import getEnvVars from '../../config';

const { API_URI } = getEnvVars();
const uri = API_URI;
const httpLink = createHttpLink({
  uri,
  test: 'test',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync('token');
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const apolloClient = new ApolloClient({
  uri,
  link: authLink.concat(httpLink),
  cache: apolloCache,
  connectToDevTools: true,
});

export default apolloClient;
