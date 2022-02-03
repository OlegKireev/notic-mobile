import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

const propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

function Feed({ navigation }) {
  const { navigate } = navigation;

  const handleButtonPress = () => {
    navigate('Note');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed</Text>
      <Button
        title="Keep reading"
        color="#213c61"
        onPress={handleButtonPress}
      />
    </View>
  );
}

Feed.navigationOptions = {
  title: 'Feed',
};

Feed.propTypes = propTypes;

export default Feed;
