import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Error({
  children,
}) {
  return (
    <Text>{children}</Text>
  );
}

Error.propTypes = propTypes;

export default Error;
