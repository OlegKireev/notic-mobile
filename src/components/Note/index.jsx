import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const StyledNote = styled.ScrollView`
  position: relative;
  padding: 12px;
  background-color: white;
  margin-bottom: 6px;
  border-radius: 6px;
  margin: 0 6px;
`;

const NotePreview = styled(StyledNote)`
  max-height: 200px;
  overflow: hidden;
  box-shadow: 0px 0px 15px black;
`;

const Content = styled.Text`
  color: #213c61;
  justify-content: center;
  align-items: center;
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
      <Content>{data.content}</Content>
      {isPreview && (
        <LinearGradient
          colors={['transparent', 'white']}
          style={{
            height: 30,
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 1,
            width: '100%',
          }}
        />
      )}
    </NoteComponent>
  );
}

Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

export default Note;
