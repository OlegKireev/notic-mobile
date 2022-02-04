import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const StyledNote = styled.ScrollView`
  padding: 12px;
  background-color: white;
  margin-bottom: 6px;
  border-radius: 6px;
  margin: 0 6px;
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
};

function Note({
  data,
}) {
  return (
    <StyledNote>
      <Content>{data.content}</Content>
    </StyledNote>
  );
}

Note.propTypes = propTypes;

export default Note;
