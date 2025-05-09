import { TextField, TextFieldProps } from '@vibe/core';
import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, HTMLElement>, TextFieldProps {}

export const TextInput: React.FC<IProps> = ({ input: {name, value, onChange, onBlur, onFocus }, placeholder, type, size, title = '', ...rest }) => {
  return (
    <TextField id={`input-${name}`} name={name} value={value} onChange={(e) => onChange(e)} onFocus={(e) => onFocus?.(e as React.FocusEvent<HTMLElement>)} onBlur={(e) => onBlur?.(e as React.FocusEvent<HTMLElement>)} type={type} placeholder={placeholder} size={size} title={title} {...rest}>
    </TextField> 
  )
}

export default TextInput; 