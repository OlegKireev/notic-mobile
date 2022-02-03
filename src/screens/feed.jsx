import React from 'react';
import PropTypes from 'prop-types';
import NoteFeed from '../components/NoteFeed';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

function Feed({ navigation }) {
  const { navigate } = navigation;

  return (
    <NoteFeed />
  );
}

Feed.navigationOptions = {
  title: 'Feed',
};

Feed.propTypes = propTypes;

export default Feed;
