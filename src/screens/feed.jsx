import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../api/query';
import NoteList from '../components/NoteList';
import Preloader from '../components/Preloader';
import Error from '../components/Error';

function Feed() {
  const {
    data,
    loading,
    error,
    refetch,
  } = useQuery(GET_NOTES, {
    fetchPolicy: 'network-only',
  });

  const handleNoteListRefresh = () => {
    refetch();
  };

  if (loading) return <Preloader />;
  if (error) return <Error>{error.message}</Error>;
  return (
    <NoteList
      data={data.notes}
      loading={loading}
      onNoteListRefresh={handleNoteListRefresh}
    />
  );
}

Feed.navigationOptions = {
  title: 'Feed',
};

export default Feed;
