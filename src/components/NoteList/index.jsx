import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
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
  loading: PropTypes.bool.isRequired,
  onNoteListRefresh: PropTypes.func.isRequired,
};

const List = styled.FlatList`
  padding: 8px;
`;

const ListSeparator = styled.View`
  height: 8px;
`;

function NoteList({
  data,
  loading,
  onNoteListRefresh,
}) {
  const navigation = useNavigation();

  const handleNotePress = (id) => () => {
    navigation.navigate('Note', {
      id,
    });
  };

  return (
    <View>
      <List
        data={data}
        keyExtractor={({ id }) => String(id)}
        refreshing={loading}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={handleNotePress(item.id)}
          >
            <Note
              data={item}
              isPreview
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <ListSeparator />}
        onRefresh={onNoteListRefresh}
      />
    </View>
  );
}

NoteList.propTypes = propTypes;

export default NoteList;
