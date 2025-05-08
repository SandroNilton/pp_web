import { TextField, TextFieldProps } from '@vibe/core';
import { Placeholder } from '@vibe/icons/.';
import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<string, HTMLElement>, TextFieldProps {

}

export const TextInput: React.FC<IProps> = ({placeholder, type, input}) => {
  return (
    <TextField type={type} placeholder={placeholder} >
      <input {...input} />
    </TextField>
  )
}