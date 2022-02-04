import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../api/query';
import NoteList from '../components/NoteList';
import Preloader from '../components/Preloader';
import Error from '../components/Error';

function Feed() {
  const { data, loading, error } = useQuery(GET_NOTES);

  if (loading) return <Preloader />;
  if (error) return <Error>{error.message}</Error>;
  return (
    <NoteList data={data.notes} />
  );
}

Feed.navigationOptions = {
  title: 'Feed',
};

export default Feed;
