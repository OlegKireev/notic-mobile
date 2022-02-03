import React from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import imageSrc from '../assets/images/hello-world.jpg';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#213c61',
    fontWeight: '700',
    fontSize: 36,
  },
  desc: {
    alignSelf: 'flex-end',
  },
});
function Main() {
  return (
    <View
      style={styles.wrapper}
    >
      <Text style={styles.title}>Hello React-native!</Text>
      <Image source={imageSrc} />
      <Text style={styles.desc}>Image description</Text>
    </View>
  );
}

export default Main;
