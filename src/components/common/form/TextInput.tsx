import { TextField, TextFieldProps } from '@vibe/core';
import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, HTMLElement>, TextFieldProps {}

export const TextInput: React.FC<IProps> = ({placeholder, type, input, size, title = ''}) => {
  return (
    <TextField type={type} placeholder={placeholder} size={size} title={title}>
      <input {...input} />
    </TextField>
  )
}

export default TextInput;