import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledNote = styled.ScrollView`
  padding: 10px;
`;

const propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

function Note({
  data,
}) {
  return (
    <StyledNote>
      <Text>{data.content}</Text>
    </StyledNote>
  );
}

Note.propTypes = propTypes;

export default Note;
