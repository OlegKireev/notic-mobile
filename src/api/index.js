import { ApolloClient } from '@apollo/client';
import apolloCache from './cache';
import getEnvVars from '../../config';

const { API_URI } = getEnvVars();
const uri = API_URI;

const apolloClient = new ApolloClient({
  uri,
  cache: apolloCache,
  connectToDevTools: true,
});

export default apolloClient;
