import { TextField, TextFieldProps } from '@vibe/core';
import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, HTMLElement>, TextFieldProps {}

import type { TextFieldType } from '@vibe/core';

export const TextInput: React.FC<IProps> = ({ input: {name, value, title, type, maxLength, onChange, onBlur, onFocus }, placeholder, size, meta: {touched, error}, ...rest }) => {
  
  let validation;
  
  if (touched) {
    if (error) {
      validation = { status: 'error' } as const;
    } else {
      validation = { status: 'success' } as const;
    }
  }

  const textFieldType = type as TextFieldType | undefined;

  return (
    <TextField id={`input-${name}`} name={name} value={value} maxLength={maxLength} type={textFieldType} onChange={(e) => onChange(e)} onFocus={(e) => onFocus?.(e as React.FocusEvent<HTMLElement>)} onBlur={(e) => onBlur?.(e as React.FocusEvent<HTMLElement>)} placeholder={placeholder} size={size} title={title} validation={validation} {...rest} >
    </TextField> 
  )
}

export default TextInput; 