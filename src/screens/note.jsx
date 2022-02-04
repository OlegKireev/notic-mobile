import React from 'react';
import { useNavigationState } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { GET_NOTE } from '../api/query';
import Preloader from '../components/Preloader';
import Error from '../components/Error';
import Note from '../components/Note';

function NoteScreen() {
  const id = useNavigationState((state) => state.routes
    .find((route) => route.name === 'Note')
    .params.id);

  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <Preloader />;
  if (error) return <Error>{error.message}</Error>;
  return (
    <Note data={data.note} />
  );
}
export default NoteScreen;
