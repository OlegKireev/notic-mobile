import { useQuery } from '@apollo/client';
import React from 'react';
import { View } from 'react-native';
import { GET_MY_FAVORITES } from '../api/query';
import NoteList from '../components/NoteList';
import Error from '../components/UI/Error';
import Preloader from '../components/UI/Preloader';

function Favorites() {
  const {
    loading, error, data, refetch,
  } = useQuery(GET_MY_FAVORITES, {
    fetchPolicy: 'network-only',
  });

  const handleNoteListRefresh = () => {
    refetch();
  };

  if (loading) return <Preloader />;
  if (error) return <Error>{error.message}</Error>;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <NoteList
        data={data.me.favoriteNotes}
        loading={loading}
        onNoteListRefresh={handleNoteListRefresh}
      />
    </View>
  );
}

Favorites.navigationOptions = {
  title: 'Favorites',
};

export default Favorites;
