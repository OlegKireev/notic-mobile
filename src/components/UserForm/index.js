import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, InputsWrapper } from './styled';
import Input from '../UI/Input';
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
        <Input
          type="email"
          value={email}
          label="Email:"
          autoFocus
          onChangeText={setEmail}
        />
        <Input
          type="password"
          value={password}
          label="Password:"
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
