import React from 'react';
import { View, Button } from 'react-native';

function LogIn() {
  return (
    <View>
      <Button title="Login" />
    </View>
  );
}

LogIn.navigationOptions = {
  title: 'Log in',
};

export default LogIn;
