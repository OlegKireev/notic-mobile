import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Note from '../Note';

const mockNotes = [
  { id: 1, content: 'Tomorrow Is The Question' },
  { id: 2, content: 'Tonight At Noon' },
  { id: 3, content: 'Out To Lunch' },
  { id: 4, content: 'Green Street' },
  { id: 5, content: 'In A Silent Way' },
  { id: 6, content: 'Lanquidity' },
  { id: 7, content: 'Nuff Said' },
  { id: 8, content: 'Nova' },
  { id: 9, content: 'The Awakening' },
  { id: 10, content: 'Giant Steps' },
  { id: 11, content: 'Tomorrow Is The Question' },
  { id: 12, content: 'Tonight At Noon' },
  { id: 13, content: 'Out To Lunch' },
  { id: 14, content: 'Green Street' },
  { id: 15, content: 'In A Silent Way' },
  { id: 16, content: 'Lanquidity' },
  { id: 17, content: 'Nuff Said' },
  { id: 18, content: 'Nova' },
  { id: 19, content: 'The Awakening' },
  { id: 20, content: 'Giant Steps' },
  { id: 21, content: 'Tomorrow Is The Question' },
  { id: 22, content: 'Tonight At Noon' },
  { id: 23, content: 'Out To Lunch' },
  { id: 24, content: 'Green Street' },
  { id: 25, content: 'In A Silent Way' },
  { id: 26, content: 'Lanquidity' },
  { id: 27, content: 'Nuff Said' },
  { id: 28, content: 'Nova' },
  { id: 29, content: 'The Awakening' },
  { id: 30, content: 'Giant Steps' },
  { id: 31, content: 'Tomorrow Is The Question' },
  { id: 32, content: 'Tonight At Noon' },
  { id: 33, content: 'Out To Lunch' },
  { id: 34, content: 'Green Street' },
  { id: 35, content: 'In A Silent Way' },
  { id: 36, content: 'Lanquidity' },
  { id: 37, content: 'Nuff Said' },
  { id: 38, content: 'Nova' },
  { id: 39, content: 'The Awakening' },
  { id: 40, content: 'Giant Steps' },
];

const ListSeparator = styled.View`
  height: 8px;
`;

function NoteList() {
  const navigation = useNavigation();

  const handleNotePress = (id) => () => {
    navigation.navigate('Note', {
      id,
    });
  };

  return (
    <View>
      <FlatList
        data={mockNotes}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleNotePress(item.id)}
          >
            <Note data={({
              content: item.content,
            })}
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <ListSeparator />}
      />
    </View>
  );
}

export default NoteList;
