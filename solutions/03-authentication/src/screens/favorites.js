import React from 'react';
import { Text, View } from 'react-native';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

// our GraphQL query
const GET_MY_FAVORITES = gql`
  query me {
    me {
      id
      username
      favorites {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const Favorites = props => {
  return (
    <Query query={GET_MY_FAVORITES}>
      {({ data, loading, error }) => {
        // if the data is loading, our app will display a loading message
        if (loading) return <Loading />;
        // if there is an error fetching the data, display an error message
        if (error) return <Text>Error loading notes</Text>;
        // if the query is successful and there are notes, return the feed of notes
        // else if the query is successful and there aren't notes, display a message
        if (data.me.favorites.length !== 0) {
          return (
            <NoteFeed notes={data.me.favorites} navigation={props.navigation} />
          );
        } else {
          return <Text>No notes yet</Text>;
        }
      }}
    </Query>
  );
};

Favorites.navigationOptions = {
  title: 'Favorites'
};

export default Favorites;
