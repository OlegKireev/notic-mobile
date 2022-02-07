import React from 'react';
import PropTypes from 'prop-types';
import { Button as StyledButton, ButtonText } from './styled';

const propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  onPress: PropTypes.func,
};

const defaultProps = {
  children: null,
  variant: 'primary',
  onPress: () => {},
};

function Button({
  children,
  // eslint-disable-next-line no-unused-vars
  variant,
  onPress,
}) {
  return (
    <StyledButton
      activeOpacity={0.8}
      onPress={onPress}
    >
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
