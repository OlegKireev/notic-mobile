import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { SIGNIN_USER } from '../api/mutations';
import UserForm from '../components/UserForm';
import { AuthContext } from '../context/auth';

function LogIn() {
  const { signIn } = useContext(AuthContext);

  const [signInAction = signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      signIn(data.signIn);
    },
  });

  const handleLoginButtonPress = ({ email, password }) => {
    signInAction({
      variables: {
        email,
        password,
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <UserForm
        formType="signIn"
        loading={loading}
        error={error?.message}
        onSubmit={handleLoginButtonPress}
      />
    </View>
  );
}

LogIn.navigationOptions = {
  title: 'Log in',
};

export default LogIn;
