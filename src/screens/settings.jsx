import React from 'react';
import { View, Button } from 'react-native';

function Settings() {
  return (
    <View>
      <Button title="Log Out" />
    </View>
  );
}
Settings.navigationOptions = {
  title: 'Settings',
};
export default Settings;
