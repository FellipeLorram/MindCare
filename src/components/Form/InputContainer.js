import React from 'react';
import { InputField } from './styled';

export default function InputContainer({ inputName, inputType }) {
  return (
    <>
      <label htmlFor={inputName} className="input__label">
        {inputName}
        <InputField id={inputName} type={inputType} autoComplete="none" />
      </label>
    </>
  );
}
