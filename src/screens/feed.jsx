import React from 'react';
import NoteList from '../components/NoteList';

function Feed() {
  return (
    <NoteList />
  );
}

Feed.navigationOptions = {
  title: 'Feed',
};

export default Feed;
