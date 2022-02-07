import React from 'react';
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
  return (
    <View style={{ flex: 1 }}>
      <Text>Email:</Text>
      <TextInput />
      <Text>Password:</Text>
      <TextInput />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

UserForm.propTypes = propTypes;

export default UserForm;
