import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import Markdown from 'react-native-markdown-display';
import { format } from 'date-fns';

const StyledNote = styled.ScrollView`
  padding: 12px;
`;

const NotePreview = styled.View`
  border-radius: 6px;
  background-color: white;
  position: relative;
  padding: 12px;
  height: 200px;
  overflow: hidden;
`;

const Author = styled.Text`
  color: #7e7e7e;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12px;
  z-index: 1;
  background-color: white;
`;

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.string,
      username: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    favoriteCount: PropTypes.number,
  }).isRequired,
  isPreview: PropTypes.bool,
};
const defaultProps = {
  isPreview: false,
};

function Note({
  data,
  isPreview,
}) {
  const NoteComponent = isPreview
    ? NotePreview
    : StyledNote;
  return (
    <NoteComponent>
      <SafeAreaView>
        <Author>
          Note by
          {' '}
          {data?.author?.username}
          {' '}
          / Published
          {' '}
          {format(new Date(data.createdAt), 'MMM do yyyy')}
        </Author>
        <Markdown style={{
          body: {
          },
          heading1: {
            fontWeight: 'bold',
            color: '#213c61',
          },
          heading2: {
            fontWeight: 'bold',
            color: '#213c61',
          },
          paragraph: {
            fontSize: 16,
            lineHeight: 24,
          },
        }}
        >
          {data.content}
        </Markdown>
      </SafeAreaView>
      <Footer />
      {isPreview && (
        <LinearGradient
          colors={['transparent', 'white', 'white']}
          style={{
            height: 12,
            position: 'absolute',
            bottom: 12,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        />
      )}
    </NoteComponent>
  );
}

Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

export default Note;
