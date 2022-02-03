import React from 'react';
import { Text, View, Image } from 'react-native';
import imageSrc from '../assets/images/hello-world.jpg';

function Main() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hello React-native!</Text>
      <Image source={imageSrc} />
    </View>
  );
}

export default Main;
