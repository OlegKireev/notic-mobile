import { useQuery } from '@apollo/client';
import React from 'react';
import { View } from 'react-native';
import { GET_MY_NOTES } from '../api/query';
import NoteList from '../components/NoteList';
import Error from '../components/UI/Error';
import Preloader from '../components/UI/Preloader';

function MyNotes() {
  const {
    loading, error, data, refetch,
  } = useQuery(GET_MY_NOTES, {
    fetchPolicy: 'network-only',
  });

  const handleNoteListRefresh = () => {
    refetch();
  };

  if (loading) return <Preloader />;
  if (error) return <Error>{error.message}</Error>;

  return (
    <View style={{ flex: 1 }}>
      <NoteList
        data={data.me.notes}
        loading={loading}
        onNoteListRefresh={handleNoteListRefresh}
      />
    </View>
  );
}

MyNotes.navigationOptions = {
  title: 'My Notes',
};

export default MyNotes;
