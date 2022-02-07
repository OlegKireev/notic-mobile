import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Label, InputsWrapper,
} from './styled';
import Button from '../UI/Button';

const propTypes = {
  onLogin: PropTypes.func.isRequired,
};

function UserForm({
  onLogin,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form style={{ flex: 1 }}>
      <InputsWrapper>
        <Label>Email:</Label>
        <Input
          value={email}
          textContentType="emailAddress"
          autoCompleteType="email"
          autoFocus
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <Label>Password:</Label>
        <Input
          value={password}
          textContentType="password"
          secureTextEntry
          onChangeText={setPassword}
        />
      </InputsWrapper>
      <Button onPress={onLogin}>
        Login
      </Button>
    </Form>
  );
}

UserForm.propTypes = propTypes;

export default UserForm;
