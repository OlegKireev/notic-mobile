import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input as StyledInput, Label } from './styled';

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
};
const defaultProps = {
  value: '',
  label: '',
  type: 'text',
  onFocus: () => {},
  onBlur: () => {},
  onChangeText: () => {},
};

function Input({
  value,
  label,
  type,
  onChangeText,
  onFocus,
  onBlur,
  ...props
}) {
  const [focusColor, setFocusColor] = useState('#cccccc');

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

  const onInputFocus = () => {
    onFocus();
    setFocusColor('#57b1b2');
  };

  const onInputBlur = () => {
    onBlur();
    setFocusColor('#cccccc');
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput
        style={{
          borderColor: focusColor,
        }}
        selectionColor="#57b1b2"
        value={value}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        {...props}
      />
    </Wrapper>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
