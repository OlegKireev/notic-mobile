import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Screens from './screens';
import apolloClient from './api';

function Main() {
  return (
    <ApolloProvider client={apolloClient}>
      <Screens />
    </ApolloProvider>
  );
}

export default Main;
