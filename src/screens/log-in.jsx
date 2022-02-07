import React, { useContext } from 'react';
import { View, Button, Text } from 'react-native';
import { AuthContext } from '../context/auth';

function LogIn() {
  const { signIn } = useContext(AuthContext);

  const handleLoginButtonPress = () => {
    signIn('loginExample', 'passwordExample');
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Login" onPress={handleLoginButtonPress} />
    </View>
  );
}

LogIn.navigationOptions = {
  title: 'Log in',
};

export default LogIn;
