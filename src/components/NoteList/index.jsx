import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Note from '../Note';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.string,
      username: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    favoriteCount: PropTypes.number,
  })).isRequired,
};

const ListSeparator = styled.View`
  height: 8px;
`;

function NoteList({
  data,
}) {
  const navigation = useNavigation();

  const handleNotePress = (id) => () => {
    navigation.navigate('Note', {
      id,
    });
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleNotePress(item.id)}
          >
            <Note
              data={({
                content: item.content,
              })}
              isPreview
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <ListSeparator />}
      />
    </View>
  );
}

NoteList.propTypes = propTypes;

export default NoteList;
