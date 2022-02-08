import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, InputsWrapper } from './styled';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Error from '../UI/Error';
import Preloader from '../UI/Preloader';

const propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  onLogin: PropTypes.func.isRequired,
};
const defaultProps = {
  loading: false,
  error: '',
};

function UserForm({
  loading,
  error,
  onLogin,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onLogin(email, password);
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
      <Button onPress={handleSubmit}>
        Login
      </Button>
    </Form>
  );
}

UserForm.propTypes = propTypes;
UserForm.defaultProps = defaultProps;

export default UserForm;
