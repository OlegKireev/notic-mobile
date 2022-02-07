import React, { useState } from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  onLogin: PropTypes.func.isRequired,
};

function UserForm({
  onLogin,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <Text>Email:</Text>
      <TextInput
        value={email}
        textContentType="emailAddress"
        autoCompleteType="email"
        autoFocus
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        textContentType="password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

UserForm.propTypes = propTypes;

export default UserForm;
