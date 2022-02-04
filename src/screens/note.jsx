import { useNavigationState } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

function NoteScreen() {
  const id = useNavigationState((state) => state.routes
    .find((route) => route.name === 'Note')
    .params.id);

  return (
    <View style={{ padding: 10 }}>
      <Text>
        This is a note! ID:
        {' '}
        {id}
      </Text>
    </View>
  );
}
export default NoteScreen;
