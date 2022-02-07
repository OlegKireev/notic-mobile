import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input as StyledInput, Label } from './styled';

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  onChangeText: PropTypes.func,
};
const defaultProps = {
  value: '',
  label: '',
  type: 'text',
  onChangeText: () => {},
};

function Input({
  value,
  label,
  type,
  onChangeText,
  ...props
}) {
  let textContentType = 'none';
  let autoCompleteType = 'off';
  let secureTextEntry = false;

  if (type === 'email') {
    textContentType = 'emailAddress';
    autoCompleteType = 'email';
  }

  if (type === 'password') {
    textContentType = 'password';
    autoCompleteType = 'password';
    secureTextEntry = true;
  }

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput
        value={value}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        {...props}
      />
    </Wrapper>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
