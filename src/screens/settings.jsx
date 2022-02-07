import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { AuthContext } from '../context/auth';

function Settings() {
  const { signOut } = useContext(AuthContext);

  const handleLogOutPress = async () => {
    signOut();
  };

  return (
    <View>
      <Button
        title="Log Out"
        onPress={handleLogOutPress}
      />
    </View>
  );
}
Settings.navigationOptions = {
  title: 'Settings',
};
export default Settings;
