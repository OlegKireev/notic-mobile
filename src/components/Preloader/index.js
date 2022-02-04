import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function Preloader() {
  return (
    <Wrapper>
      <ActivityIndicator size="large" color="#213c61" />
    </Wrapper>
  );
}

export default Preloader;
