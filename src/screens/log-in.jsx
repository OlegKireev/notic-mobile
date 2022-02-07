import React, { useContext } from 'react';
import { View } from 'react-native';
import UserForm from '../components/UserForm';
import { AuthContext } from '../context/auth';

function LogIn() {
  const { signIn } = useContext(AuthContext);

  const handleLoginButtonPress = () => {
    signIn('loginExample', 'passwordExample');
  };

  return (
    <View style={{ flex: 1 }}>
      <UserForm onLogin={handleLoginButtonPress} />
    </View>
  );
}

LogIn.navigationOptions = {
  title: 'Log in',
};

export default LogIn;
