import { TextField, TextFieldProps } from '@vibe/core';
import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, HTMLElement>, TextFieldProps {}

export const TextInput: React.FC<IProps> = ({ input: {name, value, onChange, onBlur, onFocus }, placeholder, type = 'text', size, title = '', meta: {touched, error}, ...rest }) => {
  
  let validation;
  
  if (touched) {
    if (error) {
      validation = { status: 'error' } as const;
    } else {
      validation = { status: 'success' } as const;
    }
  }

  if (name === 'password') {
    type = 'password';
  }
  
  return (
    <TextField id={`input-${name}`} name={name} value={value} onChange={(e) => onChange(e)} onFocus={(e) => onFocus?.(e as React.FocusEvent<HTMLElement>)} onBlur={(e) => onBlur?.(e as React.FocusEvent<HTMLElement>)} placeholder={placeholder} size={size} title={title} validation={validation} {...rest} type={type}>
    </TextField> 
  )
}

export default TextInput; 