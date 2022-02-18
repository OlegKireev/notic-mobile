import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import {
  Form, InputsWrapper, TextLink, SignUp,
} from './styled';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Error from '../UI/Error';
import Preloader from '../UI/Preloader';
import { routes } from '../../routes';

const propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  formType: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const defaultProps = {
  loading: false,
  error: '',
};

function UserForm({
  loading,
  error,
  formType,
  onSubmit,
}) {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    onSubmit({ email, username, password });
  };

  return (
    <Form style={{ flex: 1 }}>
      <InputsWrapper>
        <Input
          type="email"
          value={email}
          label="Email:"
          autoFocus
          placeholder="john@gmail.com"
          onChangeText={setEmail}
        />
        {formType === 'signUp' && (
          <Input
            type="username"
            value={username}
            label="Username:"
            placeholder="JohnPower"
            onChangeText={setUsername}
          />
        )}
        <Input
          type="password"
          value={password}
          label="Password:"
          onChangeText={setPassword}
        />

        {loading && (
          <Preloader />
        )}

        {Boolean(error) && (
          <Error>{error}</Error>
        )}
      </InputsWrapper>
      {formType === 'signUp'
        ? (
          <SignUp onPress={() => navigation.navigate(routes.login)}>
            <Text>
              Already have an account?
            </Text>
            <TextLink>Sign in</TextLink>
          </SignUp>
        )
        : (
          <SignUp onPress={() => navigation.navigate(routes.register)}>
            <Text>
              Need an account?
            </Text>
            <TextLink>Sign up</TextLink>
          </SignUp>
        )}
      <Button onPress={handleSubmit}>
        {formType === 'signUp'
          ? 'Sign up'
          : 'Login'}
      </Button>
    </Form>
  );
}

UserForm.propTypes = propTypes;
UserForm.defaultProps = defaultProps;

export default UserForm;
