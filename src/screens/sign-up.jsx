import React, { useContext } from 'react';
import { View } from 'react-native';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../api/mutations';
import UserForm from '../components/UserForm';
import { AuthContext } from '../context/auth';

function SignUp() {
  const { signIn, signUp } = useContext(AuthContext);

  const [signUpAction = signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      signIn(data.signUp);
    },
  });

  const handleRegisterButtonPress = ({ email, username, password }) => {
    signUpAction({
      variables: {
        email,
        username,
        password,
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <UserForm
        formType="signUp"
        loading={loading}
        error={error?.message}
        onSubmit={handleRegisterButtonPress}
      />
    </View>
  );
}

SignUp.navigationOptions = {
  title: 'Register',
};

export default SignUp;
